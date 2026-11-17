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
  height: number;                              // overall, metres (the Louvre's)
  w: number; depth: number;                    // its footprint
  model: string;                               // public/models/…
  /** its stones, bottom up: below `at` (a share of the height) the first colour, above it the second */
  stones: { at: number; colours: [string, string] };
  credit: string;
}

const SHADE = /* glsl */ `
  #ifdef USE_MAP
    vec4 sampledDiffuseColor = texture2D( map, vMapUv );
    float L = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
    float k = smoothstep( uLo, uHi, L );
    vec3 stone = vLocalY < uSplit ? uLower : uUpper;
    diffuseColor.rgb = stone * mix( 0.70, 1.06, k );
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

export function loadSculptures(list: Sculpture[], baseOf: (floor: number) => number, onPlaced: (p: Placed) => void) {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  for (const s of list) {
    loader.loadAsync(s.model).then((gltf) => {
      const model = gltf.scene;
      // its size as scanned → the Louvre's height; standing on the floor, its middle over the spot
      const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3());
      const k = s.height / size.y;
      const lo = box.min.y, split = lo + s.stones.at * size.y;
      const uniforms = {
        uLower: { value: new THREE.Color(s.stones.colours[0]) }, uUpper: { value: new THREE.Color(s.stones.colours[1]) },
        uSplit: { value: split }, uLo: { value: 0.12 }, uHi: { value: 0.78 },
      };
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        const src = (Array.isArray(m.material) ? m.material[0] : m.material) as THREE.MeshStandardMaterial;
        const mat = new THREE.MeshStandardMaterial({ map: src.map ?? null, normalMap: src.normalMap ?? null, roughness: 0.62, metalness: 0 });
        if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
        mat.onBeforeCompile = (sh) => {
          Object.assign(sh.uniforms, uniforms);
          sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vLocalY;')
            .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLocalY = position.y;');
          sh.fragmentShader = sh.fragmentShader
            .replace('#include <common>', '#include <common>\nvarying float vLocalY; uniform vec3 uLower; uniform vec3 uUpper; uniform float uSplit; uniform float uLo; uniform float uHi;')
            .replace('#include <map_fragment>', SHADE);
        };
        m.material = mat;
        m.castShadow = false; m.receiveShadow = false;
      });
      // the mesh's own y is in the scan's units, as the split is: keep them, scale the holder
      const holder = new THREE.Group();
      holder.add(model);
      holder.scale.setScalar(k);
      const c = box.getCenter(new THREE.Vector3());
      model.position.set(-c.x, -lo, -c.z);
      // the whole: its middle (for the focus) halfway up
      const group = new THREE.Group();
      const centre = new THREE.Object3D();
      const base = baseOf(s.floor);
      group.position.set(s.place.x, base, s.place.z);
      group.rotation.y = THREE.MathUtils.degToRad(s.place.yaw);
      group.add(holder);
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
