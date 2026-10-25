"""Guards the App Store link format, the Smart App Banner and the price (12fdk/meugrana#394).

Run: python3 -m unittest discover -s tools -p 'test_*.py'
"""
import glob
import os
import re
import unittest

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PROVIDER_TOKEN = "127521693"
# `<` and `>` stay in: the brief writes placeholders like `ct=blog-<slug>`.
LINK = re.compile(r"https://apps\.apple\.com/app/id6759177555\?[^\s)\"'`]+")

# Hand-written links: blog posts and the brief the blog job writes them from.
LINK_SOURCES = ["src/content/blog/*.md", "scripts/BLOG_POST_PROMPT.md"]
# Files that state the Premium price in prose.
PRICE_SOURCES = ["src/data/faq.ts", "public/js/main.js", "src/pages/terms-of-use.astro",
                 "src/pages/sobre.astro"]
# Files with other R$ amounts in examples: only Premium lines are checked.
PREMIUM_LINE_SOURCES = ["src/content/blog/*.md", "scripts/BLOG_POST_PROMPT.md"]


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def files(patterns):
    for pattern in patterns:
        for path in sorted(glob.glob(os.path.join(ROOT, pattern))):
            yield os.path.relpath(path, ROOT)


def consts_value(name):
    return re.search(rf'export const {name} = "([^"]+)"', read("src/consts.ts")).group(1)


class AppStoreLinkTests(unittest.TestCase):
    def test_generated_links_carry_campaign_and_provider_token(self):
        template = re.search(r"return `(https://apps\.apple\.com[^`]+)`", read("src/consts.ts")).group(1)
        self.assertIn("ct=", template)
        self.assertIn("pt=${APP_STORE_PROVIDER_TOKEN}", template)
        self.assertEqual(consts_value("APP_STORE_PROVIDER_TOKEN"), PROVIDER_TOKEN)

    def test_hand_written_links_carry_campaign_and_provider_token(self):
        seen = 0
        for rel in files(LINK_SOURCES):
            for link in LINK.findall(read(rel)):
                seen += 1
                with self.subTest(file=rel, link=link):
                    self.assertIn("ct=", link)
                    self.assertIn(f"pt={PROVIDER_TOKEN}", link)
        self.assertGreater(seen, 0)

    def test_layout_has_the_smart_app_banner(self):
        self.assertIn('name="apple-itunes-app"', read("src/layouts/Layout.astro"))
        self.assertIn("app-id=${APP_STORE_ID}", read("src/layouts/Layout.astro"))


class PriceTests(unittest.TestCase):
    def test_prose_prices_match_consts(self):
        expected = {consts_value("PRICE_DISPLAY_PT"), consts_value("PRICE_DISPLAY_EN")}
        for rel in files(PRICE_SOURCES):
            for price in re.findall(r"R\$ \d+[,.]\d\d", read(rel)):
                with self.subTest(file=rel, price=price):
                    self.assertIn(price, expected)

    def test_blog_premium_prices_match_consts(self):
        expected = consts_value("PRICE_DISPLAY_PT")
        for rel in files(PREMIUM_LINE_SOURCES):
            for line in read(rel).splitlines():
                if re.search(r"Premium|vitalício", line):
                    for price in re.findall(r"R\$ \d+,\d\d", line):
                        with self.subTest(file=rel, price=price):
                            self.assertEqual(price, expected)


if __name__ == "__main__":
    unittest.main()
