"""A binary STL scan (no colour: e.g. Scan the World's, on Wikimedia Commons) → a .glb the page can load.
  python3 tools/stl2glb.py <in.stl> <out.glb> [up: x|y|z|auto]
Corners shared by triangles are joined into vertices, with smooth normals (each the area-weighted average of its
triangles'). The scan's up (auto: its longest side, for a standing figure) becomes glTF's +y. Then shrink it with
`npx gltf-transform optimize … --simplify-ratio …` as tools/prep-scan.sh does."""
import json, struct, sys
import numpy as np

src, dst = sys.argv[1], sys.argv[2]
up = sys.argv[3] if len(sys.argv) > 3 else 'auto'
raw = open(src, 'rb').read()
n = struct.unpack_from('<I', raw, 80)[0]
rec = np.frombuffer(raw, dtype=np.dtype([('n', '<f4', 3), ('v', '<f4', (3, 3)), ('a', '<u2')]), count=n, offset=84)
tri = rec['v'].reshape(-1, 3).astype(np.float64)
ext = tri.max(0) - tri.min(0)
ax = {'x': 0, 'y': 1, 'z': 2}[up] if up != 'auto' else int(np.argmax(ext))
# make the up axis y, keeping the hand of the axes (a turn, not a mirror)
if ax == 2: tri = np.stack([tri[:, 0], tri[:, 2], -tri[:, 1]], 1)
elif ax == 0: tri = np.stack([-tri[:, 1], tri[:, 0], tri[:, 2]], 1)
q = np.round(tri / (ext.max() * 1e-6)).astype(np.int64)         # join corners closer than a millionth of its size
uq, idx, inv = np.unique(q, axis=0, return_index=True, return_inverse=True)
pos = tri[idx]
ind = inv.reshape(-1, 3)
ind = ind[(ind[:, 0] != ind[:, 1]) & (ind[:, 1] != ind[:, 2]) & (ind[:, 0] != ind[:, 2])]   # (no slivers)
fn = np.cross(pos[ind[:, 1]] - pos[ind[:, 0]], pos[ind[:, 2]] - pos[ind[:, 0]])          # area-weighted
nrm = np.zeros_like(pos)
for k in range(3): np.add.at(nrm, ind[:, k], fn)
nrm /= np.maximum(np.linalg.norm(nrm, axis=1, keepdims=True), 1e-12)
pos = (pos - pos.min(0)).astype(np.float32); nrm = nrm.astype(np.float32); ind = ind.astype(np.uint32).reshape(-1)

blob = bytearray(); views = []; accs = []
def add(arr, target, comp, typ, minmax=False):
    while len(blob) % 4: blob.append(0)
    off = len(blob); b = arr.tobytes(); blob.extend(b)
    views.append(dict(buffer=0, byteOffset=off, byteLength=len(b), target=target))
    a = dict(bufferView=len(views) - 1, componentType=comp, count=len(arr), type=typ)
    if minmax: a.update(min=arr.min(0).tolist(), max=arr.max(0).tolist())
    accs.append(a); return len(accs) - 1
P = add(pos, 34962, 5126, 'VEC3', True); N = add(nrm, 34962, 5126, 'VEC3'); I = add(ind, 34963, 5125, 'SCALAR')
g = dict(asset=dict(version='2.0', generator='louvre tools/stl2glb.py'), scene=0, scenes=[dict(nodes=[0])], nodes=[dict(mesh=0)],
         meshes=[dict(primitives=[dict(attributes=dict(POSITION=P, NORMAL=N), indices=I, material=0)])],
         materials=[dict(pbrMetallicRoughness=dict(baseColorFactor=[0.92, 0.9, 0.86, 1], metallicFactor=0, roughnessFactor=0.6))],
         buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
while len(blob) % 4: blob.append(0)
with open(dst, 'wb') as f:
    f.write(struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(blob)))
    f.write(struct.pack('<II', len(js), 0x4E4F534A)); f.write(js)
    f.write(struct.pack('<II', len(blob), 0x004E4942)); f.write(blob)
print(f'{len(ind) // 3} triangles, {len(pos)} vertices; up was {"xyz"[ax]}; size {np.round(pos.max(0), 3).tolist()} (scan units) → {dst}')
