#!/usr/bin/env python3
"""Scene briefs for MeuGrana blog covers.

Published files are 1200x700 JPEGs in public/images/blog/<slug>.jpg.
Each scene is a different place, subject, palette, and light. Do not
reuse the wooden-desk layout (notebook + card + coffee + coins).

Shipped photographs were generated as camera-style images, then fit to
JPEG. This script can re-roll one slug on the spark ComfyUI server.
Flux still invents text at cfg 1.0 — keep cards, screens, and paper blank,
and do not ask for hands.
"""
import json, time, urllib.request, urllib.parse, sys, os

HOST = "http://spark-72aa.tail7196c.ts.net:8188"
OUT = os.path.dirname(os.path.abspath(__file__)) + "/covers"
os.makedirs(OUT, exist_ok=True)

STYLE = ("Photorealistic documentary photograph, real camera, natural grain, "
         "correct perspective, real contact shadows, believable materials, "
         "not an illustration, not a 3D render, not a flat lay of a wooden desk, "
         "no notebook, no coffee cup, no coin stacks, no succulent, "
         "no people, no hands, no text, no letters, no numbers, no logos. Scene: ")

# One unique scene per cover. Primary prop layouts must not repeat.
SCENES = {
    "vale-refeicao-orcamento-mensal":
        "a stainless-steel cafeteria tray with real rice, black beans, grilled chicken "
        "and a small salad, beside one blank emerald meal card on a steel counter, "
        "cool fluorescent light, three-quarter angle",
    "cartao-adicional-controlar-gastos-familia":
        "exactly two blank cards on a wrinkled teal tablecloth: a large charcoal card "
        "and a smaller pink card, each with only a chip, nothing else in the frame",
    "como-planejar-o-13-salario":
        "a plain sealed white envelope on an apartment windowsill at night, one "
        "clementine and a small unglazed ceramic house, city lights bokeh outside",
    "mobills-ou-organizze-qual-escolher":
        "two smartphones side by side on white marble, screens blurred to solid blue "
        "and amber, a glass of water between them, north daylight, low angle",
    "vale-a-pena-parcelar":
        "a plain white air fryer with no branding on a scratched glass shop counter, "
        "a long thermal receipt curling to the floor, cool track lights",
    "fechamento-da-fatura-como-funciona":
        "a blank paper calendar grid on a hallway wall with one red circle and no digits, "
        "a numeral-free analog clock and house keys, late-afternoon sun",
    "como-sair-do-rotativo-do-cartao":
        "a dark room lit only by a desk lamp on crumpled blank paper, a glass of water "
        "and a calculator with a dark display",
    "app-de-financas-sem-conectar-banco":
        "a smartphone face down on oatmeal linen with one brass house key, morning "
        "window light, bedroom door in the background",
    "quantos-cartoes-de-credito-ter":
        "macro of an open dark leather wallet on a black bar top holding three blank "
        "cards in navy, cream and forest green, low warm light",
    "como-controlar-gastos-com-assinaturas":
        "a living room at night in blue television light: logo-free headphones, a remote, "
        "a streaming dongle and a phone with blurred colorful tiles",
    "parcelamento-com-juros-ou-sem-juros":
        "macro of a brass-rim magnifying glass on tracing paper with only blurred gray "
        "streaks, cool white light, no price tags",
    "como-evitar-compras-por-impulso":
        "an unused canvas tote on a hook by a frosted front door, a plain wristwatch "
        "and keys on an oak console, sage wall, late afternoon",
    "como-anotar-gastos-no-celular":
        "a phone propped on a city-bus window ledge, screen a blurred checklist, "
        "an unmarked bakery bag beside it, morning commute",
    "parcelas-ocupam-limite-do-cartao":
        "three sealed blank cardboard boxes stacked on a concrete floor with only the "
        "corner of a blank charcoal card peeking out, overhead ceiling light",
    "minimo-do-cartao-o-que-oculta":
        "extreme macro of a cream paper corner, most of the page in hard shadow, "
        "one unmarked coin half in the dark",
    "limite-baixo-cartao-credito":
        "a rainy ATM vestibule at night, a blank charcoal card halfway in the slot, "
        "blue-green fluorescent light and wet floor",
    "quando-pedir-aumento-de-limite-do-cartao":
        "a bank waiting room in daylight, a closed manila folder on an orange plastic "
        "chair, terrazzo floor and glass partitions",
    "reserva-de-emergencia-para-quem-vive-de-parcelas":
        "a glass jar of folded blank paper notes on a pantry shelf beside a sack of "
        "rice and an unlabeled can, side window light",
    "como-organizar-compras-parceladas":
        "a corkboard with five blank receipts pinned in a row by red, blue, yellow, "
        "green and orange pins, connected by a thin red string",
    "fatura-do-cartao-veio-alta-o-que-fazer":
        "a long thermal receipt snaking across white kitchen tiles from a small gray "
        "card terminal on the floor, night, no people",
    "planilha-de-gastos-mensais-alternativa":
        "a white fridge door with an empty spreadsheet grid held by fruit magnets "
        "and a pencil, morning kitchen light",
    "melhor-app-para-controlar-parcelas":
        "three phones standing on a white windowsill, screens blurred to green, blue "
        "and orange, foliage outside, bright daylight",
    "quanto-da-fatura-esta-comprometida":
        "a cream cake on dark slate with one large slice cut and set on a side plate, "
        "warm side light, food photography",
}

# Inline photos. Different scenes from the covers above.
INLINE_SCENES = {
    "fatura-alta-inline":
        "a phone with a blurred red glow on a wooden nightstand next to a blank-faced "
        "alarm clock, dark bedroom",
    "organizar-inline":
        "an open shoebox of kraft envelopes with colored tabs on a blue checkered cloth",
    "fatura-inline":
        "an open laptop on a balcony table at sunset, screen a blurred line chart, city behind",
    "planilha-inline":
        "a gray calculator on empty grid paper in a beige cubicle under fluorescent light",
    "app-features-inline":
        "one phone on a moss-green sofa, screen showing only green check marks and no words",
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
