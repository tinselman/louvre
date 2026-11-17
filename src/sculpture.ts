/* Sculptures (Robyn, 2026-11-16: "sculptures should be color mapped"). Each is a 3D scan (data/sculptures.json →
   public/models/*.glb), set on its floor where the Louvre shows it, scaled to the height the Louvre gives, and
   coloured as its stones: the scan's own colour map gives the surface its detail — every vein, stain and worn edge —
   but its hue is turned to the marble's (a scan of a painted cast says nothing true about the colour, only the
   texture). Lit from above as under a skylight, a soft shadow at its foot, a label on a stand with the scan's credit;
   walking up to it darkens the rest as a painting does (focus.ts, `round`: from any side). */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import type { Pic } from './build';
import type { Rect } from './arch';
import type { Work } from './model';
import { FONT } from './build';

export interface Sculpture {
  id: string; title: string; fr: string; artist: string; date: string; medium: string; inv: string;
  room: string;                                // the Louvre's room
  floor: number;
  place: { x: number; z: number; yaw: number }; // where it stands (yaw: the way it faces, degrees; 0 = north)
  height: number;                              // overall, metres (the Louvre's; on the label)
  scanHeight: number;                          // the scanned piece's own height, metres
  w: number; depth: number;                    // its footprint
  model: string;                               // public/models/…
  colour: string;                              // its stone's colour (the scan gives the detail, this the hue)
  /** what it stands on, drawn simply where the scan hasn't it (the Victory's ship): height, length, beam, colour */
  ship?: { h: number; base: number; length: number; beam: number; colour: string; at: number };
  credit: string;
}

const SHADE = /* glsl */ `
  #ifdef USE_MAP
    vec4 sampledDiffuseColor = texture2D( map, vMapUv );
    float L = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
    float k = smoothstep( uLo, uHi, L );
    diffuseColor.rgb = uStone * mix( 0.72, 1.05, k );
  #endif
`;

export interface Placed { pic: Pic; group: THREE.Group; floor: number; sun: THREE.DirectionalLight; target: THREE.Object3D }

/** the footprint each sculpture keeps you out of, by floor (known before any model is in) */
export function sculptureSolids(list: Sculpture[]) {
  const by = new Map<number, Rect[]>();
  for (const s of list) {
    const a = THREE.MathUtils.degToRad(s.place.yaw), c = Math.abs(Math.cos(a)), sn = Math.abs(Math.sin(a));
    const hx = (s.w * c + s.depth * sn) / 2 + 0.25, hz = (s.w * sn + s.depth * c) / 2 + 0.25;
    if (!by.has(s.floor)) by.set(s.floor, []);
    by.get(s.floor)!.push({ x0: s.place.x - hx, x1: s.place.x + hx, z0: s.place.z - hz, z1: s.place.z + hz });
  }
  return by;
}

/** a label card for a sculpture: as the paintings', with the scan's credit under it */
function labelCard(s: Sculpture) {
  const W = 760, H = 520, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d')!;
  g.fillStyle = '#f6f5f1'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#121212';
  let y = 78;
  const line = (font: string, text: string, lh: number) => { g.font = font; for (const t of wrap(g, text, W - 76)) { g.fillText(t, 38, y); y += lh; } };
  line(`500 40px ${FONT}`, s.artist, 48);
  line(`italic 500 44px ${FONT}`, s.title, 52);
  line(`400 30px ${FONT}`, s.date, 38);
  line(`400 30px ${FONT}`, s.medium, 38);
  line(`400 30px ${FONT}`, `${Math.round(s.height * 100)} cm high · ${s.inv}`, 46);
  g.fillStyle = '#6d6c68';
  line(`400 22px ${FONT}`, s.credit, 29);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return { tex, w: 0.38, h: 0.38 * H / W };
}
function wrap(g: CanvasRenderingContext2D, text: string, max: number) {
  const out: string[] = []; let cur = '';
  for (const word of text.split(' ')) { const t = cur ? cur + ' ' + word : word; if (g.measureText(t).width > max && cur) { out.push(cur); cur = word; } else cur = t; }
  if (cur) out.push(cur);
  return out;
}

/** a soft shadow on the floor under it */
function footShadow(w: number, d: number) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d')!, grd = g.createRadialGradient(64, 64, 8, 64, 64, 64);
  grd.addColorStop(0, 'rgba(0,0,0,0.42)'); grd.addColorStop(0.55, 'rgba(0,0,0,0.18)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.5, d * 1.5).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
  m.position.y = 0.004;
  return m;
}

/** the Victory's ship, simply: a base slab; the hull, its sides drawn in toward a pointed bow (+z) and leaning out
    as they rise; and on top, over the stern half, the wide deck whose sides are the ship's oar-boxes */
function shipGeometry(sh: NonNullable<Sculpture['ship']>) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(sh.colour), roughness: 0.78 });
  const L = sh.length, B = sh.beam, deckH = 0.42, hullH = sh.h - deckH, y0 = sh.base;
  const base = new THREE.Mesh(new THREE.BoxGeometry(B * 0.92, sh.base, L + 0.2), mat);
  base.position.y = sh.base / 2;
  // the hull: a ring of points at its foot and at its top (wider), joined
  const ring = (w: number, y: number) => {
    const hw = w / 2;
    return [[-hw, y, -L / 2], [hw, y, -L / 2], [hw, y, L * 0.05], [hw * 0.45, y, L * 0.36], [0, y, L / 2], [-hw * 0.45, y, L * 0.36], [-hw, y, L * 0.05]];
  };
  const lo = ring(B * 0.62, y0), hi = ring(B * 0.78, y0 + hullH);
  const pos: number[] = [], idx: number[] = [];
  const n = lo.length;
  for (const p of [...lo, ...hi]) pos.push(p[0], p[1], p[2]);
  for (let i = 0; i < n; i++) { const j = (i + 1) % n; idx.push(i, n + i, j, j, n + i, n + j); }   // sides, facing out
  const top = pos.length / 3;
  let cx = 0, cz = 0; for (const p of hi) { cx += p[0] / n; cz += p[2] / n; }
  pos.push(cx, y0 + hullH, cz);
  for (let i = 0; i < n; i++) idx.push(n + i, top, n + (i + 1) % n);                               // the top
  const hullGeo = new THREE.BufferGeometry();
  hullGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  hullGeo.setIndex(idx);
  const flat = hullGeo.toNonIndexed(); flat.computeVertexNormals();
  const hull = new THREE.Mesh(flat, mat);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(B, deckH, L * 0.52), mat);
  deck.position.set(0, y0 + hullH + deckH / 2, -L * 0.22);
  g.add(base, hull, deck);
  return g;
}

export function loadSculptures(list: Sculpture[], baseOf: (floor: number) => number, onPlaced: (p: Placed) => void) {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  for (const s of list) {
    loader.loadAsync(s.model).then((gltf) => {
      const model = gltf.scene;
      // its size as scanned → the Louvre's height; standing on the floor, its middle over the spot
      // stray scraps in a scan (a few lines, a tiny box) left out first, so they don't count in its size
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if ((o as THREE.LineSegments).isLine || (o as THREE.Points).isPoints || (m.isMesh && m.geometry.index && m.geometry.index.count < 200)) o.visible = false;
      });
      model.updateMatrixWorld(true);
      const box = new THREE.Box3();
      model.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh && m.visible) { m.geometry.computeBoundingBox(); box.union(m.geometry.boundingBox!.clone().applyMatrix4(m.matrixWorld)); } });
      const size = box.getSize(new THREE.Vector3());
      const k = s.scanHeight / size.y, lo = box.min.y;
      // where its feet are: the middle of its lowest slice (the wings reach far out to one side and back)
      const feet = new THREE.Vector3(), v = new THREE.Vector3();
      let nf = 0;
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh || !m.visible) return;
        const pos = m.geometry.getAttribute('position');
        for (let i = 0; i < pos.count; i += 7) {
          v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld);
          if (v.y < lo + 0.05 * size.y) { feet.add(v); nf++; }
        }
      });
      if (nf) feet.divideScalar(nf); else box.getCenter(feet);
      const uniforms = { uStone: { value: new THREE.Color(s.colour) }, uLo: { value: 0.12 }, uHi: { value: 0.78 } };
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        const src = (Array.isArray(m.material) ? m.material[0] : m.material) as THREE.MeshStandardMaterial;
        const mat = new THREE.MeshStandardMaterial({ map: src.map ?? null, normalMap: src.normalMap ?? null, roughness: 0.62, metalness: 0 });
        if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
        mat.onBeforeCompile = (sh) => {
          Object.assign(sh.uniforms, uniforms);
          sh.fragmentShader = sh.fragmentShader
            .replace('#include <common>', '#include <common>\nuniform vec3 uStone; uniform float uLo; uniform float uHi;')
            .replace('#include <map_fragment>', SHADE);
        };
        m.material = mat;
        m.castShadow = false; m.receiveShadow = false;
      });
      // the mesh's own y is in the scan's units, as the split is: keep them, scale the holder
      const holder = new THREE.Group();
      holder.add(model);
      holder.scale.setScalar(k);
      model.position.set(-feet.x, -lo, -feet.z);
      holder.position.set(0, s.ship ? s.ship.h + s.ship.base : 0, s.ship ? s.ship.at : 0);
      // the whole: its middle (for the focus) halfway up
      const group = new THREE.Group();
      const centre = new THREE.Object3D();
      const base = baseOf(s.floor);
      group.position.set(s.place.x, base, s.place.z);
      group.rotation.y = THREE.MathUtils.degToRad(s.place.yaw);
      group.add(holder);
      if (s.ship) group.add(shipGeometry(s.ship));
      group.add(footShadow(s.w, s.depth));
      // light from the skylight overhead, a little forward of it (in the scene itself, always on: a light that came
      // and went with its floor would have every lit material rebuilt at each change of floor)
      const sun = new THREE.DirectionalLight(0xffffff, 1.5);
      sun.layers.enableAll();
      // the label, on a slim stand before it, to the visitor's right
      const card = labelCard(s);
      const stand = new THREE.Group();
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.95, 0.05), new THREE.MeshStandardMaterial({ color: 0xefeee9, roughness: 0.8 }));
      post.position.y = 0.475;
      const face = new THREE.Mesh(new THREE.PlaneGeometry(card.w, card.h), new THREE.MeshBasicMaterial({ map: card.tex, toneMapped: false }));
      face.position.set(0, 0.95 + card.h / 2 * Math.cos(0.5), 0.02); face.rotation.x = -0.5;
      stand.add(post, face);
      stand.position.set(s.w / 2 + 0.7, 0, s.depth / 2 + 0.6);
      group.add(stand);
      centre.position.set(s.place.x, base + s.height / 2, s.place.z);
      const work = { id: s.id, title: s.title, fr: s.fr, artist: s.artist, date: s.date, year: 0, medium: s.medium, w: s.w, h: s.height, fw: null, room: s.room, inv: s.inv, q: '', img: '' } as Work;
      const pic = {
        work, item: null as never, placed: { normal: [Math.sin(group.rotation.y), 0, Math.cos(group.rotation.y)] as [number, number, number] },
        mesh: group as unknown as THREE.Mesh, mat: null as never, w: s.w, h: s.height, label: null, dot: null, labelTex: null,
        farRange: [0, 0] as [number, number], round: true, centre,
      } as unknown as Pic;
      onPlaced({ pic, group, floor: s.floor, sun, target: holder });
    }).catch((e) => console.warn('sculpture', s.id, e));
  }
}
