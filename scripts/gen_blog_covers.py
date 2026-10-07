#!/usr/bin/env python3
"""Generate 10 blog cover images on the spark ComfyUI server (Flux dev fp8).

Style matches the existing 5 covers (PR #31): flat vector illustration,
top-down desk scene, pale mint background, emerald/charcoal accents, no text.
Output: PNG in scratchpad; post-processing to 1200x700 JPEG happens via sips.
"""
import json, time, urllib.request, urllib.parse, sys, os

HOST = "http://spark-72aa.tail7196c.ts.net:8188"
OUT = os.path.dirname(os.path.abspath(__file__)) + "/covers"
os.makedirs(OUT, exist_ok=True)

STYLE = ("Flat 2D vector illustration, digital drawing, minimalist tech style, "
         "top-down view of a tidy desk scene, pale mint green background, "
         "objects drawn as bold clean flat shapes with crisp edges and subtle drop shadows, "
         "strict color palette: dark emerald green, charcoal gray, white, soft sage green, "
         "large objects in a balanced centered composition filling the whole frame edge to edge, "
         "flat cartoon illustration style, not a photograph, "
         "no text, no letters, no numbers, no words, no people. Scene: ")

# Published JPEGs in public/images/blog/ are warm photorealistic table photos
# (1200×700 covers), not Flux flat renders. Scene strings match those photos.
# Flux still fakes text at cfg 1.0 — keep cards, coins, screens and paper blank.
# No Flux seed: the shipped files were photographed-style renders, then fit to JPEG.
SCENES = {
    "mobills-ou-organizze-qual-escolher":
        "two smartphones lying face down with plain backs and no logos, "
        "a small brass balance scale between them, a closed notepad, a pen "
        "and a tiny potted succulent",
    "como-planejar-o-13-salario":
        "a small white ceramic piggy bank, neat stacks of smooth unmarked coins, "
        "a gift wrapped in plain kraft paper with twine and a pine sprig",
    "vale-a-pena-parcelar":
        "a brass balance scale with smooth unmarked coins on one pan and a plain "
        "kraft shopping bag on the other, a blank emerald card with only a chip, "
        "and a coffee cup",
    "fechamento-da-fatura-como-funciona":
        "a small analog alarm clock with a completely blank face and no numerals, "
        "a blank emerald card with only a chip, a curl of blank paper and a coffee cup",
    "como-sair-do-rotativo-do-cartao":
        "a blank charcoal card at the bottom of a staircase made of unmarked coin stacks, "
        "leading up to a plain green fabric flag with no emblem",
    "app-de-financas-sem-conectar-banco":
        "a smartphone lying face down with a plain back, a small brass padlock on it, "
        "a closed metal cash box, one old key and a potted succulent",
    "quantos-cartoes-de-credito-ter":
        "an open leather wallet with three blank cards in emerald, charcoal and cream, "
        "each showing only a chip, a coffee cup and a small succulent",
    "como-controlar-gastos-com-assinaturas":
        "matte headphones with no logo, a smartphone lying face down, "
        "three small blank colored tiles with no icons, and a coffee mug",
    "parcelamento-com-juros-ou-sem-juros":
        "a magnifying glass over a long curl of completely blank paper, "
        "a blank charcoal card with only a chip and a few smooth unmarked coins",
    "como-evitar-compras-por-impulso":
        "a small woven shopping basket, a glass hourglass, a leather wallet tied "
        "shut with a ribbon and a few stacks of smooth unmarked coins",
    "como-anotar-gastos-no-celular":
        "a smartphone lying face down with a plain back and no logo, "
        "an open notepad with completely blank pages, a pen, "
        "a stack of smooth unmarked coins and a coffee cup",
    "parcelas-ocupam-limite-do-cartao":
        "a plain blank charcoal card showing only a small chip, no embossing and no text, "
        "with three thick plain linen books stacked on top of it and one smooth unmarked coin",
    "cartao-adicional-controlar-gastos-familia":
        "a fan of four plain blank cards in emerald, charcoal, cream and sage, "
        "each with only a chip and a small colored ribbon, a closed notepad and a coffee cup",
    "minimo-do-cartao-o-que-oculta":
        "one large smooth unmarked coin pressed down by three plain wooden blocks, "
        "a closed notepad and a coffee cup",
    "limite-baixo-cartao-credito":
        "a plain blank charcoal card showing only a small chip, no embossing and no text, "
        "three plain linen books with blank spines forming a low barrier, "
        "and a drinking glass that is almost empty",
    "quando-pedir-aumento-de-limite-do-cartao":
        "a plain blank charcoal card showing only a small chip, no embossing and no text, "
        "an open notepad with completely blank pages and a single green leaf, "
        "a pen, a small stack of smooth unmarked coins and a coffee cup",
    "fatura-do-cartao-veio-alta-o-que-fazer":
        "a long roll of completely blank white paper unspooled across the table, "
        "a plain blank charcoal card showing only a small chip, a coffee cup and a pen",
    "quanto-da-fatura-esta-comprometida":
        "stacks of smooth unmarked coins, one cluster tied with a green ribbon and a smaller "
        "loose pile set aside, a plain blank charcoal card and a coffee cup",
    "planilha-de-gastos-mensais-alternativa":
        "a closed laptop with a plain lid and no logo, a smartphone lying face down, "
        "a closed notepad, a pen and a coffee cup",
    "como-organizar-compras-parceladas":
        "a row of plain kraft envelopes with no printing, two blank cards showing only chips, "
        "a few smooth unmarked coins and a pen",
    "melhor-app-para-controlar-parcelas":
        "a smartphone lying face down with a plain back, three blank cards in emerald, "
        "cream and charcoal showing only chips, a coffee cup and a small succulent",
    # Published JPEG is a photorealistic warm table scene (no Flux seed).
    "vale-refeicao-orcamento-mensal":
        "a plain blank meal card in solid emerald green showing only a small chip, no embossing and no text, "
        "a simple lunch plate, a small grocery bag with bread and vegetables, "
        "a blank notepad with a pen, a coffee mug and a few plain unmarked coins",
    "reserva-de-emergencia-para-quem-vive-de-parcelas":
        "a small white ceramic piggy bank, a few smooth unmarked coins, "
        "a plain blank emerald card showing only a small chip, no embossing and no text, "
        "a small brass padlock and a tiny potted succulent",
}

def workflow(prompt_text, seed):
    return {
        "1": {"class_type": "CheckpointLoaderSimple",
              "inputs": {"ckpt_name": "FLUX1/flux1-dev-fp8.safetensors"}},
        "2": {"class_type": "CLIPTextEncode",
              "inputs": {"text": prompt_text, "clip": ["1", 1]}},
        "3": {"class_type": "FluxGuidance",
              "inputs": {"conditioning": ["2", 0], "guidance": 3.5}},
        "4": {"class_type": "CLIPTextEncode",
              "inputs": {"text": "", "clip": ["1", 1]}},
        "5": {"class_type": "EmptySD3LatentImage",
              "inputs": {"width": 1216, "height": 704, "batch_size": 1}},
        "6": {"class_type": "KSampler",
              "inputs": {"model": ["1", 0], "positive": ["3", 0], "negative": ["4", 0],
                         "latent_image": ["5", 0], "seed": seed, "steps": 24, "cfg": 1.0,
                         "sampler_name": "euler", "scheduler": "simple", "denoise": 1.0}},
        "7": {"class_type": "VAEDecode", "inputs": {"samples": ["6", 0], "vae": ["1", 2]}},
        "8": {"class_type": "SaveImage",
              "inputs": {"images": ["7", 0], "filename_prefix": "meugrana_blog2"}},
    }

def api(path, data=None):
    req = urllib.request.Request(HOST + path,
        data=json.dumps(data).encode() if data else None,
        headers={"Content-Type": "application/json"} if data else {})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

def gen(slug, scene, seed):
    pid = api("/prompt", {"prompt": workflow(STYLE + scene, seed),
                          "client_id": "claude-blog-batch2"})["prompt_id"]
    print(f"[{slug}] queued {pid}", flush=True)
    for _ in range(240):  # up to 20 min per image
        time.sleep(5)
        hist = api(f"/history/{pid}")
        if pid in hist:
            entry = hist[pid]
            status = entry.get("status", {})
            if status.get("status_str") == "error":
                print(f"[{slug}] ERROR: {json.dumps(status)[:500]}", flush=True)
                return False
            for node in entry.get("outputs", {}).values():
                for img in node.get("images", []):
                    q = urllib.parse.urlencode({"filename": img["filename"],
                        "subfolder": img.get("subfolder", ""), "type": img["type"]})
                    with urllib.request.urlopen(f"{HOST}/view?{q}", timeout=300) as r:
                        data = r.read()
                    path = f"{OUT}/{slug}.png"
                    open(path, "wb").write(data)
                    print(f"[{slug}] saved {path} ({len(data)//1024} KB)", flush=True)
                    return True
    print(f"[{slug}] TIMEOUT", flush=True)
    return False

if __name__ == "__main__":
    only = sys.argv[1:] or list(SCENES)
    # MEUGRANA_SEED overrides the per-slug seed — used to re-roll a weak render
    # (garbled text, broken composition) without touching other covers.
    seed_override = os.environ.get("MEUGRANA_SEED")
    base_seed = 777001
    ok = 0
    for i, slug in enumerate(SCENES):
        if slug not in only:
            continue
        if gen(slug, SCENES[slug], int(seed_override) if seed_override else base_seed + i):
            ok += 1
    print(f"DONE {ok}/{len(only)}", flush=True)
