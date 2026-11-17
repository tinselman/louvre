#!/bin/bash
# prep-scan.sh — a downloaded scan (Sketchfab's glTF .zip) → public/models/<name>.glb, small enough for the web.
#   bash tools/prep-scan.sh ~/Downloads/winged-victory-of-samothrace.zip victoire [triangles-ratio] [texture-size]
# Unpacks into its own new folder under source/scans/ (the files are only read, nothing in them is run), then
# gltf-transform: welds, simplifies (keeping the outline), shrinks the textures (WebP) and packs the mesh (meshopt).
set -e
ZIP="$1"; NAME="$2"; RATIO="${3:-0.6}"; TEX="${4:-2048}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/source/scans/$NAME"
rm -rf "$OUT"; mkdir -p "$OUT"
unzip -q "$ZIP" -d "$OUT"
echo "== in the zip:"; (cd "$OUT" && find . -type f -exec ls -l {} \; | awk '{print $5, $9}')
SRC=$(find "$OUT" -name "*.gltf" -o -name "*.glb" | head -1)
[ -n "$SRC" ] || { echo "no .gltf/.glb in the zip"; exit 1; }
mkdir -p "$ROOT/public/models"
cd "$ROOT"
npx gltf-transform inspect "$SRC" 2>/dev/null | grep -iE "vertices|triangles|textures|size|resolution|mesh" | head -20 || true
npx gltf-transform optimize "$SRC" "public/models/$NAME.glb" --compress meshopt --texture-compress webp --texture-size "$TEX" \
  --simplify true --simplify-ratio "$RATIO" --simplify-error 0.0006
ls -l "public/models/$NAME.glb"
