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

SCENES = {
    "mobills-ou-organizze-qual-escolher":
        "two smartphones lying side by side showing abstract bar charts on their screens, "
        "a small balance scale between them, a notepad, a pen and a tiny potted succulent plant",
    "como-planejar-o-13-salario":
        "a large piggy bank in the center surrounded by neat stacks of coins, "
        "a wrapped gift box with a bow and a small pine branch",
    "vale-a-pena-parcelar":
        "a balance scale with a stack of coins on one pan and a small shopping bag on the other, "
        "a credit card, a calculator and a notepad",
    "fechamento-da-fatura-como-funciona":
        "a large desk calendar with one day circled, a credit card, a small alarm clock, "
        "a curled paper receipt and a pen",
    "como-sair-do-rotativo-do-cartao":
        "a credit card at the bottom of a gentle ascending staircase made of coin stacks "
        "leading up to a small green flag, a notepad and a compass",
    "app-de-financas-sem-conectar-banco":
        "a smartphone in the center with a large white padlock shield icon filling its screen, "
        "a closed vault safe, a single key and a potted succulent plant",
    "quantos-cartoes-de-credito-ter":
        "a fan of four credit cards spread out, an open slim wallet, "
        "a notepad with a checklist of empty checkboxes, a coffee cup and a pen",
    "como-controlar-gastos-com-assinaturas":
        "a smartphone surrounded by small rounded app cards with play button and music note "
        "and film icons, headphones, a calendar with circular repeat arrows and a mug",
    "parcelamento-com-juros-ou-sem-juros":
        "a magnifying glass held over a long curled paper receipt with a large percent symbol, "
        "a calculator, a credit card and scattered coins",
    "como-evitar-compras-por-impulso":
        "a shopping cart in the center, a large hourglass, a wallet tied shut with a ribbon bow "
        "and a few stacks of coins",
    "parcelas-ocupam-limite-cartao":
        "a credit card being measured with a tape measure, a stack of coins, a notepad with "
        "checkmarks and a calculator, a small alarm clock",
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
    base_seed = 777001
    ok = 0
    for i, slug in enumerate(SCENES):
        if slug not in only:
            continue
        if gen(slug, SCENES[slug], base_seed + i):
            ok += 1
    print(f"DONE {ok}/{len(only)}", flush=True)
