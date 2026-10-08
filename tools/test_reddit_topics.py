"""Tests for tools/reddit-topics.py — theme matching, noise filter, covered
detection and the Backlog mapping. Stdlib unittest, no network.

    python3 -m unittest discover -s tools -p 'test_*.py'
"""

import importlib.util
import tempfile
import unittest
from pathlib import Path

_SPEC = importlib.util.spec_from_file_location(
    "reddit_topics", Path(__file__).with_name("reddit-topics.py"))
rt = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(rt)


class Fold(unittest.TestCase):
    def test_strips_accents_and_ordinals(self):
        self.assertEqual(rt.fold("Cartão de Crédito 13º"), "cartao de credito 13o")

    def test_smart_quotes(self):
        self.assertEqual(rt.fold("“fatura”"), '"fatura"')


class ThemesOf(unittest.TestCase):
    def test_accented_keyword_matches_unaccented_title(self):
        self.assertIn("dividas", rt.themes_of("Como sair das dividas com o banco"))

    def test_plural_matches(self):
        self.assertIn("parcelas", rt.themes_of("Tenho 8 parcelas abertas, e agora?"))

    def test_word_boundary_blocks_substrings(self):
        # "meio" must not be MEI, "carrossel" must not be carro.
        self.assertNotIn("renda-variavel", rt.themes_of("No meio do mês fiquei sem nada"))
        self.assertNotIn("emprestimo-financiamento", rt.themes_of("Post em carrossel"))

    def test_multiple_themes(self):
        got = rt.themes_of("Fatura veio alta e meu namorado não ajuda nas contas")
        self.assertIn("fatura", got)
        self.assertIn("casal-familia", got)

    def test_ordinal_13(self):
        self.assertIn("renda-extra-sazonal", rt.themes_of("O que fazer com o 13º?"))

    def test_bets(self):
        self.assertIn("apostas", rt.themes_of("Ajuda com Bets"))

    def test_off_beat_investing_has_no_theme(self):
        self.assertEqual(rt.themes_of("FII ou ações para longo prazo?"), [])


class IsUseful(unittest.TestCase):
    def test_question_passes(self):
        self.assertTrue(rt.is_useful("Como organizar a fatura do cartão todo mês?"))

    def test_pt_question_word_without_question_mark(self):
        self.assertTrue(rt.is_useful("Preciso de ajuda para sair do rotativo"))

    def test_milestone_brag_is_noise(self):
        self.assertFalse(rt.is_useful("Bati o primeiro milhão hoje, como foi?"))

    def test_news_is_noise(self):
        self.assertFalse(rt.is_useful("Selic cai para 13,75% a.a — o que muda?"))

    def test_short_but_real_question(self):
        self.assertTrue(rt.is_useful("Ajuda com Bets"))

    def test_too_short(self):
        self.assertFalse(rt.is_useful("Fatura?"))

    def test_statement_without_question(self):
        self.assertFalse(rt.is_useful("Paguei a fatura inteira este mês finalmente"))

    def test_all_caps_venting(self):
        self.assertFalse(rt.is_useful("NÃO AGUENTO MAIS ESSE BANCO COMO PODE?"))

    def test_rhetorical_tag_question(self):
        self.assertFalse(rt.is_useful("Parcelar tudo em 12x é a pior coisa, né?"))


class IsAboutMoney(unittest.TestCase):
    def test_relationship_drama_is_not_money(self):
        self.assertFalse(rt.is_about_money(
            "Minha namorada já dormiu com o melhor amigo, eles ainda são melhores amigos."))

    def test_money_words(self):
        self.assertTrue(rt.is_about_money("Meu namorado não quer dividir as contas, o que faço?"))
        self.assertTrue(rt.is_about_money("Preciso de 50k para uma emergência"))
        self.assertTrue(rt.is_about_money("Devo 5 mil no cartao"))


class CoveredThemes(unittest.TestCase):
    def test_reads_keyword_and_slug_not_title_or_body(self):
        with tempfile.TemporaryDirectory() as d:
            p = Path(d)
            (p / "como-sair-do-rotativo-do-cartao.md").write_text(
                '---\ntitle: "Como sair do rotativo do cartão"\n'
                'keyword: "como sair do rotativo"\nfaq:\n  - q: "x"\n---\n'
                "Corpo que fala de namorado e de bets de passagem.\n",
                encoding="utf-8")
            cov = rt.covered_themes(p)
        self.assertEqual(cov.get("rotativo-minimo"), ["como-sair-do-rotativo-do-cartao"])
        self.assertNotIn("casal-familia", cov)
        self.assertNotIn("apostas", cov)

    def test_title_used_only_without_keyword(self):
        with tempfile.TemporaryDirectory() as d:
            p = Path(d)
            (p / "como-planejar-o-13-salario.md").write_text(
                '---\ntitle: "Como planejar o 13º: quitar dívidas e guardar"\n'
                'keyword: "como planejar o 13º salário"\n---\nx\n', encoding="utf-8")
            (p / "post-sem-keyword.md").write_text(
                '---\ntitle: "Como sair do rotativo"\n---\nx\n', encoding="utf-8")
            cov = rt.covered_themes(p)
        self.assertNotIn("dividas", cov)
        self.assertIn("renda-extra-sazonal", cov)
        self.assertEqual(cov.get("rotativo-minimo"), ["post-sem-keyword"])

    def test_missing_dir(self):
        self.assertEqual(rt.covered_themes(Path("/nonexistent/dir")), {})

    def test_real_posts_cover_core_themes(self):
        cov = rt.covered_themes()
        for key in ("fatura", "parcelas", "limite", "rotativo-minimo"):
            self.assertIn(key, cov, key)


class Backlog(unittest.TestCase):
    PLAN = """# Plan

## Published

| # | Slug | Keyword | Funnel | Status |
|---|------|---------|--------|--------|
| 1 | `x` | fatura do cartão veio alta | Top | ✅ |

## Backlog (validate keyword before writing)

| # | Working title | Keyword idea | Funnel | Notes |
|---|---------------|--------------|--------|-------|
| 22 | Vale-refeição no orçamento | vale refeição orçamento mensal | Mid | x |
| 23 | Como dividir as contas da casa sem briga | dividir contas casa casal | Mid | y |

## Per-post checklist
| 99 | not | a | backlog | row |
"""

    def test_parses_only_backlog_rows_with_themes(self):
        with tempfile.TemporaryDirectory() as d:
            plan = Path(d) / "PLAN.md"
            plan.write_text(self.PLAN, encoding="utf-8")
            rows = rt.backlog(plan)
        self.assertEqual([r["num"] for r in rows], [22, 23])
        self.assertIn("vale-refeicao", rows[0]["themes"])
        self.assertIn("casal-familia", rows[1]["themes"])

    def test_missing_plan(self):
        self.assertEqual(rt.backlog(Path("/nonexistent/plan.md")), [])

    def test_real_plan_parses(self):
        self.assertTrue(all(isinstance(r["num"], int) for r in rt.backlog()))


class TitlesFrom(unittest.TestCase):
    def test_atom_entries(self):
        xml = ('<feed xmlns="http://www.w3.org/2005/Atom"><title>t</title>'
               '<entry><title>Como   sair do rotativo?</title></entry>'
               '<entry><title>Fatura alta</title></entry></feed>')
        self.assertEqual(rt.titles_from(xml), ["Como sair do rotativo?", "Fatura alta"])

    def test_bad_xml(self):
        self.assertEqual(rt.titles_from("<html>blocked"), [])


if __name__ == "__main__":
    unittest.main()
