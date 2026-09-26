# V1.9 — Optimiza la foto del hero (reproducible con `python scripts/optimize-hero.py`)
from PIL import Image
import os

SRC = "assets/img/ciro/ciro-carvajal-hero.png"
OUT_DIR = "assets/img/ciro"

im = Image.open(SRC).convert("RGB")
w, h = im.size  # 1536 x 1024

# 1200 px de ancho: suficiente para el marco de 470 px (y retina) en el hero.
target_w = 1200
new_h = round(h * target_w / w)
im = im.resize((target_w, new_h), Image.LANCZOS)

# Versión moderna (WebP) y respaldo JPEG.
im.save(os.path.join(OUT_DIR, "ciro-carvajal-hero.webp"), "WEBP", quality=82, method=6)
im.save(
    os.path.join(OUT_DIR, "ciro-carvajal-hero.jpg"),
    "JPEG",
    quality=82,
    optimize=True,
    progressive=True,
)

for name in ["ciro-carvajal-hero.png", "ciro-carvajal-hero.webp", "ciro-carvajal-hero.jpg"]:
    p = os.path.join(OUT_DIR, name)
    print(f"{name}: {os.path.getsize(p) / 1024:.0f} KB")