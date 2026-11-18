"""A textured OBJ (as Object Capture writes it: one mesh, one material) → a .glb the page can load.
  python3 tools/obj2glb.py <model.obj> <out.glb>
Reads v / vt / vn / f and the material's map_Kd (the colour picture); everything else is left out. Then shrink it with
`npx gltf-transform optimize` as tools/prep-scan.sh does."""
import json, os, struct, sys, re
import numpy as np

src, dst = sys.argv[1], sys.argv[2]
base = os.path.dirname(src)
V, T, N, F = [], [], [], []
mtl = None
for line in open(src):
    if line.startswith('v '): V.append(line.split()[1:4])
    elif line.startswith('vt '): T.append(line.split()[1:3])
    elif line.startswith('vn '): N.append(line.split()[1:4])
    elif line.startswith('f '):
        idx = [tuple(int(x) if x else 0 for x in (p.split('/') + ['', ''])[:3]) for p in line.split()[1:]]
        for k in range(1, len(idx) - 1): F.append((idx[0], idx[k], idx[k + 1]))   # fan into triangles
    elif line.startswith('mtllib'): mtl = line.split(None, 1)[1].strip()
V = np.array(V, np.float32); T = np.array(T, np.float32) if T else None; N = np.array(N, np.float32) if N else None
F = np.array(F, np.int64)                                   # (n, 3 corners, v/vt/vn), 1-based
corners = F.reshape(-1, 3)
uniq, inv = np.unique(corners, axis=0, return_inverse=True)  # one vertex per distinct v/vt/vn
pos = V[uniq[:, 0] - 1]
uv = T[uniq[:, 1] - 1] * [1, -1] + [0, 1] if T is not None and uniq[:, 1].min() > 0 else None   # OBJ v up, glTF v down
nrm = N[uniq[:, 2] - 1] if N is not None and uniq[:, 2].min() > 0 else None
ind = inv.reshape(-1).astype(np.uint32)

tex = None
if mtl and os.path.exists(os.path.join(base, mtl)):
    for line in open(os.path.join(base, mtl)):
        m = re.match(r'\s*map_Kd\s+(.+)', line)
        if m: tex = os.path.join(base, m.group(1).strip()); break

blob, views, accs = bytearray(), [], []
def add(arr, target=None, comp=5126, typ='VEC3', minmax=False):
    while len(blob) % 4: blob.append(0)
    off = len(blob); data = arr.tobytes(); blob.extend(data)
    views.append(dict(buffer=0, byteOffset=off, byteLength=len(data), **({'target': target} if target else {})))
    a = dict(bufferView=len(views) - 1, componentType=comp, count=len(arr), type=typ)
    if minmax: a.update(min=arr.min(0).tolist(), max=arr.max(0).tolist())
    accs.append(a); return len(accs) - 1

attrs = {'POSITION': add(pos, 34962, minmax=True)}
if nrm is not None: attrs['NORMAL'] = add(nrm, 34962)
if uv is not None: attrs['TEXCOORD_0'] = add(uv.astype(np.float32), 34962, typ='VEC2')
ia = add(ind, 34963, comp=5125, typ='SCALAR')
g = dict(asset=dict(version='2.0', generator='louvre tools/obj2glb.py'), scene=0, scenes=[dict(nodes=[0])],
         nodes=[dict(mesh=0)], meshes=[dict(primitives=[dict(attributes=attrs, indices=ia, material=0)])],
         materials=[dict(pbrMetallicRoughness=dict(metallicFactor=0, roughnessFactor=0.8))])
if tex and uv is not None:
    while len(blob) % 4: blob.append(0)
    data = open(tex, 'rb').read(); off = len(blob); blob.extend(data)
    views.append(dict(buffer=0, byteOffset=off, byteLength=len(data)))
    mime = 'image/png' if tex.lower().endswith('.png') else 'image/jpeg'
    g.update(images=[dict(bufferView=len(views) - 1, mimeType=mime)], textures=[dict(source=0)])
    g['materials'][0]['pbrMetallicRoughness']['baseColorTexture'] = dict(index=0)
while len(blob) % 4: blob.append(0)
g.update(buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode()
js += b' ' * ((4 - len(js) % 4) % 4)
with open(dst, 'wb') as f:
    f.write(struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(blob)))
    f.write(struct.pack('<II', len(js), 0x4E4F534A)); f.write(js)
    f.write(struct.pack('<II', len(blob), 0x004E4942)); f.write(blob)
print(f'{len(ind) // 3} triangles, {len(pos)} vertices, texture {os.path.basename(tex) if tex else None} → {dst}')
