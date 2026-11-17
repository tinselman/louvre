/* The Denon wing in 3D, built from the rooms, the faces and the hanging: walls (in stretches, so each knows the
   pictures that cast shadows on it), the coves, vaults and skylights over each room, the floors and the doorways'
   reveals, every painting in its white frame, and its label. */
import * as THREE from 'three';
import type { Arch, Face } from './arch';
import { facePoint, vaultY } from './arch';
import type { Room, Work, Stair } from './model';
import { titleOf, sizeText } from './model';
import type { Item, Title } from './hang';
import { LABEL_W, LABEL_H } from './hang';
import { wallMaterial, plasterMaterial, skylightMaterial, floorMaterial, pictureMaterial, labelMaterial, WHITE_WALL, WHITE_CEILING, WHITE_FRAME, MAXB } from './shaders';
import type { SkyRefs } from './shaders';

type V3 = [number, number, number];
const v3 = (p: number[]) => new THREE.Vector3(p[0], p[1], p[2]);

/* ---- a little mesh builder: quads wound to face the way asked ------------------------------------------- */
class Geo {
  pos: number[] = []; nor: number[] = []; uv: number[] = []; idx: number[] = [];
  side: number[] = []; col: number[] = [];
  /** a four-cornered face, wound to face `out` (its normal is the true one, from the corners) */
  quad(p: number[][], out: number[], uv: number[][] = [[0, 0], [1, 0], [1, 1], [0, 1]], side = 0, col: THREE.Color | null = null, smooth?: number[][]) {
    const n = new THREE.Vector3().crossVectors(v3(p[1]).sub(v3(p[0])), v3(p[3]).sub(v3(p[0])));
    if (n.lengthSq() < 1e-14) n.crossVectors(v3(p[2]).sub(v3(p[1])), v3(p[3]).sub(v3(p[1])));
    n.normalize();
    if (n.dot(v3(out)) < 0) { p = [p[0], p[3], p[2], p[1]]; uv = [uv[0], uv[3], uv[2], uv[1]]; if (smooth) smooth = [smooth[0], smooth[3], smooth[2], smooth[1]]; n.negate(); }
    const i = this.pos.length / 3;
    p.forEach((q, k) => {
      this.pos.push(q[0], q[1], q[2]);
      const m = smooth ? smooth[k] : [n.x, n.y, n.z];
      this.nor.push(m[0], m[1], m[2]);
      this.uv.push(uv[k][0], uv[k][1]);
      this.side.push(side);
      if (col) this.col.push(col.r, col.g, col.b); else this.col.push(0, 0, 0);
    });
    this.idx.push(i, i + 1, i + 2, i, i + 2, i + 3);
  }
  get empty() { return this.idx.length === 0; }
  geometry(extra = false) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    if (extra) {
      g.setAttribute('aSide', new THREE.Float32BufferAttribute(this.side, 1));
      g.setAttribute('aCol', new THREE.Float32BufferAttribute(this.col, 3));
    }
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}

/* ---- the skylight over each room ------------------------------------------------------------------------- */
function skyOf(r: Room): SkyRefs {
  // the stair's two parts are lit as one tall room under the second floor's skylight, from the first floor up
  if (r.stair && r.wallTop) {
    const s = skyRect({ ...r, ceiling: 'cove', spring: 6.5, top: 8 });
    return { rect: s ? new THREE.Vector4(s.x0, s.z0, s.x1, s.z1) : new THREE.Vector4(0, 0, 0, 0), top: r.wallTop, base: 0 };
  }
  const none = { rect: new THREE.Vector4(0, 0, 0, 0), top: r.top, base: r.y };
  if (!r.sky) return none;
  if (r.ceiling === 'vault') {
    const W = r.axis === 'x' ? r.z1 - r.z0 : r.x1 - r.x0, half = (r.sky * W) / 2;
    return r.axis === 'x'
      ? { rect: new THREE.Vector4(r.x0 + 1, (r.z0 + r.z1) / 2 - half, r.x1 - 1, (r.z0 + r.z1) / 2 + half), top: r.top, base: r.y }
      : { rect: new THREE.Vector4((r.x0 + r.x1) / 2 - half, r.z0 + 1, (r.x0 + r.x1) / 2 + half, r.z1 - 1), top: r.top, base: r.y };
  }
  const s = skyRect(r);
  return s ? { rect: new THREE.Vector4(s.x0, s.z0, s.x1, s.z1), top: r.top, base: r.y } : none;
}
/** a flat or coved ceiling's skylight: a margin all round, the same on every side */
function skyRect(r: Room) {
  if (!r.sky) return null;
  const c = r.ceiling === 'cove' ? r.top - r.spring : 0;
  const ix0 = r.x0 + c, ix1 = r.x1 - c, iz0 = r.z0 + c, iz1 = r.z1 - c;
  const m = (1 - r.sky) * Math.min(ix1 - ix0, iz1 - iz0) / 2;
  if (ix1 - ix0 - 2 * m < 0.5 || iz1 - iz0 - 2 * m < 0.5) return null;
  return { x0: ix0 + m, x1: ix1 - m, z0: iz0 + m, z1: iz1 - m };
}

/* ---- a wall face, between u from c0 to c1 (one stretch of it): solid, with its doorways cut out; and where a
   vault ends against it, on up into the vault's curve ------------------------------------------------------ */
function faceGeo(f: Face, c0: number, c1: number) {
  const g = new Geo(), n = [f.n[0], 0, f.n[1]];
  const wall = (a: number, b: number, y0: number, y1: number) => {
    a = Math.max(a, c0); b = Math.min(b, c1);
    if (b - a < 1e-4 || y1 - y0 < 1e-4) return;
    g.quad([facePoint(f, a, y0), facePoint(f, b, y0), facePoint(f, b, y1), facePoint(f, a, y1)], n, [[a, y0], [b, y0], [b, y1], [a, y1]]);
  };
  let a = f.u0;
  for (const [d0, d1, dh] of [...f.doors].sort((p, q) => p[0] - q[0])) {
    if (d0 > a) wall(a, d0, 0, f.h);
    wall(Math.max(d0, a), d1, dh, f.h);
    a = Math.max(a, d1);
  }
  if (f.u1 > a) wall(a, f.u1, 0, f.h);
  if (f.lunette) {
    const r = f.room, W = f.u1 - f.u0, mid = (f.u0 + f.u1) / 2, N = 28;
    for (let k = 0; k < N; k++) {
      const ua = f.u0 + (W * k) / N, ub = f.u0 + (W * (k + 1)) / N;
      if (ub <= c0 || ua >= c1) continue;
      const ya = vaultY(r, ua - mid, W), yb = vaultY(r, ub - mid, W);
      g.quad([facePoint(f, ua, r.spring), facePoint(f, ub, r.spring), facePoint(f, ub, yb), facePoint(f, ua, ya)], n);
    }
  }
  return g;
}

/* ---- the ceiling over a room ------------------------------------------------------------------------------ */
function ceilingGeo(r: Room) {
  const plaster = new Geo(), glass = new Geo();
  if (r.ceiling === 'none') return { plaster, glass };
  const down = [0, -1, 0];
  if (r.ceiling === 'vault') {
    const along = r.axis, W = along === 'x' ? r.z1 - r.z0 : r.x1 - r.x0, c = along === 'x' ? (r.z0 + r.z1) / 2 : (r.x0 + r.x1) / 2;
    const a0 = along === 'x' ? r.x0 : r.z0, a1 = along === 'x' ? r.x1 : r.z1;
    const P = (a: number, s: number): V3 => { const y = vaultY(r, s, W); return along === 'x' ? [a, y, c + s] : [c + s, y, a]; };
    const N = 32, half = (r.sky * W) / 2;
    const normalAt = (s: number) => {
      // the ellipse's normal, pointing in and down
      const A = W / 2, Bv = r.top - r.spring, t = Math.max(-1, Math.min(1, s / A));
      const ny = -Math.sqrt(Math.max(0, 1 - t * t)) / Bv, ns = -t / A;
      const l = Math.hypot(ny, ns);
      return along === 'x' ? [0, ny / l, ns / l] : [ns / l, ny / l, 0];
    };
    // strips across, cut where the skylight's edges are
    const cuts = new Set<number>();
    for (let k = 0; k <= N; k++) cuts.add(-W / 2 + (W * k) / N);
    if (half > 0) { cuts.add(-half); cuts.add(half); }
    const ss = [...cuts].sort((p, q) => p - q);
    for (let k = 0; k + 1 < ss.length; k++) {
      const s0 = ss[k], s1 = ss[k + 1], midS = (s0 + s1) / 2;
      const sm = [normalAt(s0), normalAt(s1), normalAt(s1), normalAt(s0)];
      const strip = (g: Geo, b0: number, b1: number) => {
        const p = [P(b0, s0), P(b0, s1), P(b1, s1), P(b1, s0)];
        const smooth = [normalAt(s0), normalAt(s1), normalAt(s1), normalAt(s0)];
        g.quad(p, normalAt(midS), undefined, 0, null, smooth);
      };
      if (half > 0 && Math.abs(midS) < half) {
        strip(plaster, a0, a0 + 1); strip(glass, a0 + 1, a1 - 1); strip(plaster, a1 - 1, a1);
      } else strip(plaster, a0, a1);
      void sm;
    }
    return { plaster, glass };
  }
  let ix0 = r.x0, ix1 = r.x1, iz0 = r.z0, iz1 = r.z1, top = r.top;
  if (r.ceiling === 'cove') {
    // four quarter-round coves, mitred at the corners
    const R = r.top - r.spring, N = 10;
    ix0 += R; ix1 -= R; iz0 += R; iz1 -= R;
    for (let k = 0; k < N; k++) {
      const t0 = (k / N) * Math.PI / 2, t1 = ((k + 1) / N) * Math.PI / 2;
      const d0 = R * (1 - Math.cos(t0)), d1 = R * (1 - Math.cos(t1));
      const y0 = r.spring + R * Math.sin(t0), y1 = r.spring + R * Math.sin(t1);
      const nrm = (t: number, ax: number, az: number) => [ax * Math.cos(t), -Math.sin(t), az * Math.cos(t)];
      // north side (z0), its normal pointing south and down
      plaster.quad([[r.x0 + d0, y0, r.z0 + d0], [r.x1 - d0, y0, r.z0 + d0], [r.x1 - d1, y1, r.z0 + d1], [r.x0 + d1, y1, r.z0 + d1]], nrm((t0 + t1) / 2, 0, 1), undefined, 0, null,
        [nrm(t0, 0, 1), nrm(t0, 0, 1), nrm(t1, 0, 1), nrm(t1, 0, 1)]);
      plaster.quad([[r.x0 + d0, y0, r.z1 - d0], [r.x1 - d0, y0, r.z1 - d0], [r.x1 - d1, y1, r.z1 - d1], [r.x0 + d1, y1, r.z1 - d1]], nrm((t0 + t1) / 2, 0, -1), undefined, 0, null,
        [nrm(t0, 0, -1), nrm(t0, 0, -1), nrm(t1, 0, -1), nrm(t1, 0, -1)]);
      plaster.quad([[r.x0 + d0, y0, r.z0 + d0], [r.x0 + d0, y0, r.z1 - d0], [r.x0 + d1, y1, r.z1 - d1], [r.x0 + d1, y1, r.z0 + d1]], nrm((t0 + t1) / 2, 1, 0), undefined, 0, null,
        [nrm(t0, 1, 0), nrm(t0, 1, 0), nrm(t1, 1, 0), nrm(t1, 1, 0)]);
      plaster.quad([[r.x1 - d0, y0, r.z0 + d0], [r.x1 - d0, y0, r.z1 - d0], [r.x1 - d1, y1, r.z1 - d1], [r.x1 - d1, y1, r.z0 + d1]], nrm((t0 + t1) / 2, -1, 0), undefined, 0, null,
        [nrm(t0, -1, 0), nrm(t0, -1, 0), nrm(t1, -1, 0), nrm(t1, -1, 0)]);
    }
  }
  const s = skyRect(r);
  const flatQ = (x0: number, x1: number, z0: number, z1: number, y: number) => { if (x1 - x0 > 1e-3 && z1 - z0 > 1e-3) plaster.quad([[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]], down); };
  if (!s) flatQ(ix0, ix1, iz0, iz1, top);
  else {
    flatQ(ix0, ix1, iz0, s.z0, top); flatQ(ix0, ix1, s.z1, iz1, top);
    flatQ(ix0, s.x0, s.z0, s.z1, top); flatQ(s.x1, ix1, s.z0, s.z1, top);
    // a light well 0.5 m deep, and the glass at its top
    const w = 0.5, y1 = top + w;
    plaster.quad([[s.x0, top, s.z0], [s.x1, top, s.z0], [s.x1, y1, s.z0], [s.x0, y1, s.z0]], [0, 0, 1]);
    plaster.quad([[s.x0, top, s.z1], [s.x1, top, s.z1], [s.x1, y1, s.z1], [s.x0, y1, s.z1]], [0, 0, -1]);
    plaster.quad([[s.x0, top, s.z0], [s.x0, top, s.z1], [s.x0, y1, s.z1], [s.x0, y1, s.z0]], [1, 0, 0]);
    plaster.quad([[s.x1, top, s.z0], [s.x1, top, s.z1], [s.x1, y1, s.z1], [s.x1, y1, s.z0]], [-1, 0, 0]);
    glass.quad([[s.x0, y1, s.z0], [s.x1, y1, s.z0], [s.x1, y1, s.z1], [s.x0, y1, s.z1]], down);
  }
  return { plaster, glass };
}

/* ---- a painting in a plain white frame, its back on the wall (z = 0) ---------------------------------------- */
const FRAME_COL = new THREE.Color(WHITE_FRAME), FRAME_IN = new THREE.Color(WHITE_FRAME).multiplyScalar(0.9);
export function frameGeometry(aw: number, ah: number, fw: number, D: number, crop: [number, number, number, number]) {
  const g = new Geo();
  const ax = aw / 2, ay = ah / 2, W = ax + fw, H = ay + fw, s = Math.min(fw * 0.35, 0.05), ix = ax + s, iy = ay + s;
  const zIn = D - Math.min(0.025, fw * 0.25), zPic = zIn - 0.008;
  const fc = FRAME_COL, fi = FRAME_IN;
  // outsides
  g.quad([[-W, H, 0], [W, H, 0], [W, H, D], [-W, H, D]], [0, 1, 0], undefined, 2, fc);
  g.quad([[-W, -H, 0], [W, -H, 0], [W, -H, D], [-W, -H, D]], [0, -1, 0], undefined, 2, fc);
  g.quad([[-W, -H, 0], [-W, H, 0], [-W, H, D], [-W, -H, D]], [-1, 0, 0], undefined, 2, fc);
  g.quad([[W, -H, 0], [W, H, 0], [W, H, D], [W, -H, D]], [1, 0, 0], undefined, 2, fc);
  // the face of the moulding, from its outside in to the step
  g.quad([[-W, iy, D], [W, iy, D], [W, H, D], [-W, H, D]], [0, 0, 1], undefined, 2, fc);
  g.quad([[-W, -H, D], [W, -H, D], [W, -iy, D], [-W, -iy, D]], [0, 0, 1], undefined, 2, fc);
  g.quad([[-W, -iy, D], [-ix, -iy, D], [-ix, iy, D], [-W, iy, D]], [0, 0, 1], undefined, 2, fc);
  g.quad([[ix, -iy, D], [W, -iy, D], [W, iy, D], [ix, iy, D]], [0, 0, 1], undefined, 2, fc);
  // the sight edge, sloping in and down to the painting
  g.quad([[-ix, iy, D], [ix, iy, D], [ax, ay, zIn], [-ax, ay, zIn]], [0, -1, 1], undefined, 2, fi);
  g.quad([[-ix, -iy, D], [ix, -iy, D], [ax, -ay, zIn], [-ax, -ay, zIn]], [0, 1, 1], undefined, 2, fi);
  g.quad([[-ix, -iy, D], [-ix, iy, D], [-ax, ay, zIn], [-ax, -ay, zIn]], [1, 0, 1], undefined, 2, fi);
  g.quad([[ix, -iy, D], [ix, iy, D], [ax, ay, zIn], [ax, -ay, zIn]], [-1, 0, 1], undefined, 2, fi);
  // a rebate down to the painting's face
  g.quad([[-ax, ay, zPic], [ax, ay, zPic], [ax, ay, zIn], [-ax, ay, zIn]], [0, -1, 0], undefined, 2, fi);
  g.quad([[-ax, -ay, zPic], [ax, -ay, zPic], [ax, -ay, zIn], [-ax, -ay, zIn]], [0, 1, 0], undefined, 2, fi);
  g.quad([[-ax, -ay, zPic], [-ax, ay, zPic], [-ax, ay, zIn], [-ax, -ay, zIn]], [1, 0, 0], undefined, 2, fi);
  g.quad([[ax, -ay, zPic], [ax, ay, zPic], [ax, ay, zIn], [ax, -ay, zIn]], [-1, 0, 0], undefined, 2, fi);
  // the painting
  const [u0, u1, v0, v1] = crop;
  g.quad([[-ax, -ay, zPic], [ax, -ay, zPic], [ax, ay, zPic], [-ax, ay, zPic]], [0, 0, 1], [[u0, v0], [u1, v0], [u1, v1], [u0, v1]], 0, null);
  return g.geometry(true);
}

/* the part of a photograph that fills a painting of this shape (a photo with a strip of wall or frame round it
   shows a little more than the painting; trimmed to the painting's own proportions, from the middle) */
export function cropFor(w: number, h: number, px: [number, number] | undefined): [number, number, number, number] {
  let u0 = 0, u1 = 1, v0 = 0, v1 = 1;
  if (!px) return [u0, u1, v0, v1];
  const box = w / h, img = px[0] / px[1];
  if (img > box) { const k = box / img; u0 = 0.5 - k / 2; u1 = 0.5 + k / 2; }
  else { const k = img / box; v0 = 0.5 - k / 2; v1 = 0.5 + k / 2; }
  return [u0, u1, v0, v1];
}

export const placeOnWall = (m: THREE.Object3D, normal: number[], right: number[], at: number[], up: number[] = [0, 1, 0]) => {
  const basis = new THREE.Matrix4().makeBasis(v3(right), v3(up), v3(normal));
  m.quaternion.setFromRotationMatrix(basis);
  m.position.set(at[0], at[1], at[2]);
};

/* ---- labels: drawn only for the pictures near you (there are hundreds) ----------------------------------- */
export const FONT = '"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif';
export function labelCanvas(w: Work) {
  const W = 640, Hh = Math.round(W * LABEL_H / LABEL_W);
  const c = document.createElement('canvas'); c.width = W; c.height = Hh;
  const g = c.getContext('2d')!;
  g.fillStyle = '#f6f5f1'; g.fillRect(0, 0, W, Hh);
  g.fillStyle = '#121212';
  const pad = 38;
  let y = 76;
  const lines: [string, string, number][] = [[`500 40px ${FONT}`, w.artist || 'Unknown artist', 48], [`italic 500 40px ${FONT}`, titleOf(w), 46]];
  for (const s of [w.date, [w.medium, sizeText(w)].filter(Boolean).join(' · ')]) if (s) lines.push([`400 30px ${FONT}`, s, 37]);
  for (const [f, text, lh] of lines) {
    g.font = f;
    y = wrap(g, text, pad, y, W - 2 * pad, lh, y > Hh - 40 ? 1 : 2);
    y += 6;
    if (y > Hh - 10) break;
  }
  return c;
}
function wrap(g: CanvasRenderingContext2D, text: string, x: number, y: number, max: number, lh: number, maxLines: number) {
  let line = '', n = 0;
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    const test = line ? line + ' ' + words[i] : words[i];
    if (g.measureText(test).width > max && line) {
      if (n + 1 >= maxLines) { line = fit(g, line + ' ' + words.slice(i).join(' '), max); break; }
      g.fillText(line, x, y); y += lh; n++; line = words[i];
    } else line = test;
  }
  g.fillText(fit(g, line, max), x, y);
  return y + lh;
}
function fit(g: CanvasRenderingContext2D, text: string, max: number) {
  if (g.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && g.measureText(t + '…').width > max) t = t.slice(0, -1);
  return t + '…';
}

/* ---- the wall title (as in the Portrait gallery: lettering straight on the wall) ------------------------- */
const TEXT_PX = 900;
export function titleTexture(t: Title) {
  const W = 2.3, H = 0.76;
  const c = document.createElement('canvas'); c.width = W * TEXT_PX; c.height = H * TEXT_PX;
  const g = c.getContext('2d')!;
  g.fillStyle = '#262625';
  g.font = `300 150px ${FONT}`; g.fillText(t.title, 6, 138);
  g.font = `400 58px ${FONT}`; g.fillText(t.sub, 10, 236);
  g.fillStyle = '#4a4946';
  g.font = `400 34px ${FONT}`;
  g.fillText(t.how, 10, 312);
  g.fillStyle = '#6d6c68';
  g.font = `400 22px ${FONT}`;
  let y = 392;
  for (const line of t.credit.split('\n')) { g.fillText(line, 10, y); y += 34; }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return { tex, w: W, h: H };
}

/* ---- everything -------------------------------------------------------------------------------------------- */
export interface Pic {
  work: Work; item: Item; placed: { normal: V3 };
  mesh: THREE.Mesh; mat: THREE.ShaderMaterial; w: number; h: number;
  label: THREE.Mesh | null; dot: null;
  /** the label's own text, once drawn (dropped again when you're far off) */
  labelTex: THREE.CanvasTexture | null;
  /** its patch in the far mesh: first vertex, how many */
  farRange: [number, number];
}
export interface Interior {
  group: THREE.Group; pictures: Pic[]; far: THREE.Mesh; floors: THREE.Mesh[];
  /** the stair's part on this floor (its walls and top), shown from either floor */
  stair: THREE.Group;
  dispose(): void;
}

export function buildInterior(A: Arch, items: Item[], titles: Title[], textureOf: (id: string) => THREE.Texture,
                              pxOf: (id: string) => [number, number] | undefined, colourOf: (id: string) => string,
                              refl: THREE.Texture, texMat: THREE.Matrix4): Interior {
  const group = new THREE.Group(), stair = new THREE.Group();
  const geos: THREE.BufferGeometry[] = [], mats: THREE.Material[] = [], texs: THREE.Texture[] = [];
  const add = (g: THREE.BufferGeometry, m: THREE.Material, layer = 0, into = group) => {
    geos.push(g); const x = new THREE.Mesh(g, m); into.add(x); if (layer) x.layers.set(layer); return x;
  };
  const skies = new Map(A.rooms.map((r) => [r.id, skyOf(r)]));
  const plasterOf = new Map(A.rooms.map((r) => { const m = plasterMaterial(new THREE.Color(WHITE_CEILING), skies.get(r.id)!); mats.push(m); return [r.id, m]; }));
  const wallWhite = new THREE.Color(WHITE_WALL);

  // walls, in stretches of at most 14 m, each knowing the pictures on it
  const onFace = new Map<Face, Item[]>();
  for (const it of items) { if (!it.face) continue; if (!onFace.has(it.face)) onFace.set(it.face, []); onFace.get(it.face)!.push(it); }
  for (const f of A.faces) {
    const len = f.u1 - f.u0, n = Math.max(1, Math.ceil(len / 14));
    const mine = onFace.get(f) ?? [];
    for (let k = 0; k < n; k++) {
      const c0 = f.u0 + (len * k) / n, c1 = f.u0 + (len * (k + 1)) / n;
      const g = faceGeo(f, k === 0 ? -Infinity : c0, k === n - 1 ? Infinity : c1);
      if (g.empty) continue;
      const along = (it: Item) => (f.axis === 'x' ? it.pos[0] : it.pos[2]);
      const boxes = mine.filter((it) => along(it) + it.ow / 2 + 0.6 > c0 && along(it) - it.ow / 2 - 0.6 < c1).slice(0, MAXB)
        .map((it) => ({ c: v3(it.pos), s: new THREE.Vector3(it.ow / 2, it.oh / 2, it.depth) }));
      const m = wallMaterial({
        normal: new THREE.Vector3(f.n[0], 0, f.n[1]), right: new THREE.Vector3(f.right[0], 0, f.right[1]), axisX: f.axis === 'x',
        u0: f.u0, u1: f.u1, cornerA: f.cornerA, cornerB: f.cornerB, spring: f.room.wallTop ?? (f.lunette ? f.room.top : f.h), boxes,
      }, wallWhite, skies.get(f.room.id)!);
      mats.push(m);
      add(g.geometry(), m, 0, f.room.stair ? stair : group).userData.face = f;
    }
  }
  // doorway reveals and the ends and tops of free walls
  const rev = new Geo();
  for (const q of A.reveals) rev.quad(q.p, q.n);
  const revMat = plasterMaterial(new THREE.Color(WHITE_WALL), { rect: new THREE.Vector4(0, 0, 0, 0), top: 10, base: A.base });
  mats.push(revMat);
  add(rev.geometry(), revMat);

  // ceilings, coves, vaults and their skylights
  const glassMat = skylightMaterial(); mats.push(glassMat);
  for (const r of A.rooms) {
    const { plaster, glass } = ceilingGeo(r);
    const into = r.stair ? stair : group;
    if (!plaster.empty) add(plaster.geometry().translate(0, r.y, 0), plasterOf.get(r.id)!, 0, into);
    if (!glass.empty) add(glass.geometry().translate(0, r.y, 0), glassMat, 0, into);
  }

  // floors: each room with the shade along its own walls; a doorway's floor goes with the first of its rooms
  const floors: THREE.Mesh[] = [];
  const floorMats = new Map<string, THREE.ShaderMaterial>();
  for (const r of A.rooms) {
    if (r.stair) continue;                          // (the stair's flights are its floor)
    const segs: THREE.Vector4[] = [];
    for (const f of A.faces.filter((q) => q.room === r)) {
      if (f.free) {
        const P0 = facePoint(f, f.u0, 0), P1 = facePoint(f, f.u1, 0);
        segs.push(new THREE.Vector4(P0[0], P0[2], P1[0], P1[2]));
        continue;
      }
      let a = f.u0;
      const piece = (u0: number, u1: number) => { if (u1 - u0 > 0.05) { const P0 = facePoint(f, u0, 0), P1 = facePoint(f, u1, 0); segs.push(new THREE.Vector4(P0[0], P0[2], P1[0], P1[2])); } };
      for (const [d0, d1] of [...f.doors].sort((p, q) => p[0] - q[0])) { piece(a, d0); a = d1; }
      piece(a, f.u1);
    }
    const m = floorMaterial(refl, texMat, segs, skies.get(r.id)!);
    mats.push(m); floorMats.set(r.id, m);
    const g = new Geo();
    const y = r.y;
    g.quad([[r.x0, y, r.z0], [r.x1, y, r.z0], [r.x1, y, r.z1], [r.x0, y, r.z1]], [0, 1, 0]);
    for (const t of A.thresholds.filter((q) => q.room === r)) g.quad([[t.r.x0, y, t.r.z0], [t.r.x1, y, t.r.z0], [t.r.x1, y, t.r.z1], [t.r.x0, y, t.r.z1]], [0, 1, 0]);
    const fm = add(g.geometry(), m, 1);             // layer 1: never drawn into its own reflection
    fm.userData.floor = r.id;
    floors.push(fm);
  }

  // the wall titles
  for (const t of titles) {
    const { tex, w, h } = titleTexture(t);
    texs.push(tex);
    const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false });
    mats.push(m);
    const x = add(new THREE.PlaneGeometry(w, h), m);
    placeOnWall(x, t.normal, t.right, [t.pos[0] + t.normal[0] * 0.008, t.pos[1], t.pos[2] + t.normal[2] * 0.008]);
  }

  // the paintings, and their label cards (blank until you come near)
  const pictures: Pic[] = [];
  const blank = new THREE.CanvasTexture((() => { const c = document.createElement('canvas'); c.width = c.height = 4; const g = c.getContext('2d')!; g.fillStyle = '#f6f5f1'; g.fillRect(0, 0, 4, 4); return c; })());
  blank.colorSpace = THREE.SRGBColorSpace; texs.push(blank);
  const cardGeo = new THREE.BoxGeometry(LABEL_W, LABEL_H, 0.004).translate(0, 0, 0.002); geos.push(cardGeo);
  const blankMat = labelMaterial(blank); mats.push(blankMat);
  for (const it of items) {
    const w = it.work;
    const mat = pictureMaterial(textureOf(w.id)); mats.push(mat);
    const geo = frameGeometry(w.w, w.h, it.fw, it.depth, cropFor(w.w, w.h, pxOf(w.id)));
    const m = add(geo, mat);
    placeOnWall(m, it.normal, it.right, it.pos, it.up);
    m.userData.work = w.id;
    let label: THREE.Mesh | null = null;
    if (it.label) {
      label = new THREE.Mesh(cardGeo, blankMat);
      group.add(label);
      placeOnWall(label, it.normal, it.right, it.label);
      label.userData.work = w.id; label.userData.label = true;
    }
    pictures.push({ work: w, item: it, placed: { normal: it.normal }, mesh: m, mat, w: it.ow, h: it.oh, label, dot: null, labelTex: null, farRange: [0, 0] });
  }

  // far off, every painting is a flat patch of its own colour in a white frame, all in one draw; where the real one
  // is drawn (nearer) its patch is switched off (aHide), so the two never fight
  const far = new Geo();
  const white = new THREE.Color(WHITE_FRAME);
  const ranges: [number, number][] = [];
  for (const it of items) {
    const n = it.normal, r = it.right, u = it.up;
    const at = (x: number, y: number, z: number): number[] => [0, 1, 2].map((k) => it.pos[k] + r[k] * x + u[k] * y + n[k] * z);
    const ax = it.work.w / 2, ay = it.work.h / 2, W = it.ow / 2, H = it.oh / 2;
    const col = new THREE.Color(colourOf(it.work.id));
    const v0 = far.pos.length / 3;
    far.quad([at(-W, -H, 0.02), at(W, -H, 0.02), at(W, H, 0.02), at(-W, H, 0.02)], n, undefined, 0, white);
    far.quad([at(-ax, -ay, 0.03), at(ax, -ay, 0.03), at(ax, ay, 0.03), at(-ax, ay, 0.03)], n, undefined, 0, col);
    ranges.push([v0, 8]);
  }
  const farGeo = far.geometry(true);
  const hide = new THREE.Float32BufferAttribute(new Float32Array(far.pos.length / 3), 1);
  hide.setUsage(THREE.DynamicDrawUsage);
  farGeo.setAttribute('aHide', hide);
  const farMat = new THREE.ShaderMaterial({
    toneMapped: false,
    vertexShader: `attribute vec3 aCol; attribute float aHide; varying vec3 vC; varying float vH;
      void main() { vC = aCol; vH = aHide; gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`,
    fragmentShader: `varying vec3 vC; varying float vH;
      void main() { if (vH > 0.5) discard; gl_FragColor = vec4(vC * 0.97, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  mats.push(farMat);
  const farMesh = add(farGeo, farMat);
  pictures.forEach((p, i) => { p.farRange = ranges[i]; });

  return {
    group, pictures, far: farMesh, floors, stair,
    dispose() { for (const g of geos) g.dispose(); for (const m of mats) m.dispose(); for (const t of texs) t.dispose(); },
  };
}

/* ---- the stair between the floors: two flights of pale stone, the landing between them, and the wall that parts
   them (topped as a rail along the upper flight). How high the floor is at any point of it: stairFloor. ---------- */
export const STEP = 0.16;
export function stairFloor(s: Stair, x: number, z: number): number | null {
  if (x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1) return null;
  const half = s.rise / 2, t = Math.max(0, Math.min(1, (s.xE - x) / (s.xE - s.xL)));
  if (x <= s.xL) return half;
  return z < (s.aZ + s.bZ) / 2 ? half * t : s.rise - half * t;
}
export function stairGeometry(s: Stair) {
  const group = new THREE.Group();
  const tread = new Geo(), riser = new Geo(), wall = new Geo();
  const half = s.rise / 2, n = Math.round(half / STEP), run = (s.xE - s.xL) / n;
  // band A: from the first floor at xE up (west) to the landing; band B: from the landing up (east) to the second
  for (let k = 0; k < n; k++) {
    // A: step k is the k-th from the bottom, its riser facing east
    const ax1 = s.xE - k * run, ax0 = ax1 - run, ay0 = k * STEP, ay1 = (k + 1) * STEP;
    riser.quad([[ax1, ay0, s.z0], [ax1, ay0, s.aZ], [ax1, ay1, s.aZ], [ax1, ay1, s.z0]], [1, 0, 0]);
    tread.quad([[ax0, ay1, s.z0], [ax1, ay1, s.z0], [ax1, ay1, s.aZ], [ax0, ay1, s.aZ]], [0, 1, 0]);
    // B: step k from the landing, its riser facing west
    const bx0 = s.xL + k * run, bx1 = bx0 + run, by0 = half + k * STEP, by1 = half + (k + 1) * STEP;
    riser.quad([[bx0, by0, s.bZ], [bx0, by0, s.z1], [bx0, by1, s.z1], [bx0, by1, s.bZ]], [-1, 0, 0]);
    tread.quad([[bx0, by1, s.bZ], [bx1, by1, s.bZ], [bx1, by1, s.z1], [bx0, by1, s.z1]], [0, 1, 0]);
  }
  // the landing, the foot of band A and the head of band B (flat, by the doorways)
  tread.quad([[s.x0, half, s.z0], [s.xL, half, s.z0], [s.xL, half, s.z1], [s.x0, half, s.z1]], [0, 1, 0]);
  tread.quad([[s.xE, 0, s.z0], [s.x1, 0, s.z0], [s.x1, 0, s.aZ], [s.xE, 0, s.aZ]], [0, 1, 0]);
  tread.quad([[s.xE, s.rise, s.bZ], [s.x1, s.rise, s.bZ], [s.x1, s.rise, s.z1], [s.xE, s.rise, s.z1]], [0, 1, 0]);
  // the parting wall, as high as band B's floor plus a rail's height, from the landing to the east wall
  const top = (x: number) => (x <= s.xL ? half : x >= s.xE ? s.rise : half + half * (x - s.xL) / (s.xE - s.xL)) + 1.0;
  const xs = [s.xL, s.xE, s.x1];
  for (let k = 0; k + 1 < xs.length; k++) {
    const x0 = xs[k], x1 = xs[k + 1];
    wall.quad([[x0, 0, s.aZ], [x1, 0, s.aZ], [x1, top(x1), s.aZ], [x0, top(x0), s.aZ]], [0, 0, -1]);
    wall.quad([[x0, 0, s.bZ], [x1, 0, s.bZ], [x1, top(x1), s.bZ], [x0, top(x0), s.bZ]], [0, 0, 1]);
    wall.quad([[x0, top(x0), s.aZ], [x1, top(x1), s.aZ], [x1, top(x1), s.bZ], [x0, top(x0), s.bZ]], [0, 1, 0]);
  }
  wall.quad([[s.xL, 0, s.aZ], [s.xL, 0, s.bZ], [s.xL, top(s.xL), s.bZ], [s.xL, top(s.xL), s.aZ]], [-1, 0, 0]);
  const stone = new THREE.MeshStandardMaterial({ color: 0xf4f2ed, roughness: 0.85 });
  const face = new THREE.MeshStandardMaterial({ color: 0xf0eee8, roughness: 0.9 });
  const plain = new THREE.MeshStandardMaterial({ color: WHITE_WALL, roughness: 0.95 });
  for (const [g, m] of [[tread, stone], [riser, face], [wall, plain]] as [Geo, THREE.Material][]) {
    const x = new THREE.Mesh(g.geometry(), m);
    x.userData.floor = g === tread ? s.id : undefined;
    group.add(x);
  }
  return group;
}

/* ---- rails: white posts and a round top rail ---------------------------------------------------------------- */
export function rails(list: { x0: number; z0: number; x1: number; z1: number; h: number }[]) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: WHITE_FRAME, roughness: 0.6 });
  group.add(new THREE.HemisphereLight(0xffffff, 0xc9c7c2, 2.9));
  for (const r of list) {
    const L = Math.hypot(r.x1 - r.x0, r.z1 - r.z0), n = Math.max(2, Math.round(L / 1.5) + 1);
    const post = new THREE.CylinderGeometry(0.022, 0.026, r.h, 14).translate(0, r.h / 2, 0);
    for (let k = 0; k < n; k++) {
      const t = k / (n - 1), m = new THREE.Mesh(post, mat);
      m.position.set(r.x0 + (r.x1 - r.x0) * t, 0, r.z0 + (r.z1 - r.z0) * t);
      group.add(m);
    }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, L + 0.06, 16).rotateZ(Math.PI / 2), mat);
    bar.position.set((r.x0 + r.x1) / 2, r.h, (r.z0 + r.z1) / 2);
    bar.rotation.y = -Math.atan2(r.z1 - r.z0, r.x1 - r.x0);
    group.add(bar);
  }
  return group;
}

/* ---- over each doorway, on both sides, the number and name of the room it leads into (as the Louvre letters its
   rooms), in the wall title's lettering ------------------------------------------------------------------------- */
export function doorSigns(A: Arch, doors: { a: string; b: string; wall: 'x' | 'z'; u0: number; u1: number; pa: number; pb: number; h: number }[]) {
  const group = new THREE.Group();
  const PX = 1000, H = 0.2;
  for (const d of doors) {
    for (const [here, there, plane] of [[d.a, d.b, d.pa], [d.b, d.a, d.pb]] as [string, string, number][]) {
      const f = A.faces.find((q) => q.room.id === here && !q.free && q.axis === d.wall && Math.abs(q.plane - plane) < 1e-3);
      const r = A.byId.get(there);
      if (!f || !r) continue;
      const y = d.h + 0.32 + H / 2;
      if (y + H / 2 > f.h - 0.15) continue;
      const num = /^\d+$/.test(r.id) ? r.id : '';
      const c = document.createElement('canvas'), g = c.getContext('2d')!;
      g.font = `400 124px ${FONT}`;
      const nw = num ? g.measureText(num).width + 60 : 0;
      g.font = `300 124px ${FONT}`;
      const tw = g.measureText(r.name).width;
      c.width = Math.ceil(nw + tw + 20); c.height = Math.round(H * PX);
      g.fillStyle = '#2a2a29';
      g.textBaseline = 'middle';
      if (num) { g.font = `400 124px ${FONT}`; g.fillText(num, 10, c.height / 2); }
      g.font = `300 124px ${FONT}`; g.fillText(r.name, 10 + nw, c.height / 2);
      const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
      const w = c.width / PX;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
      const p = facePoint(f, (d.u0 + d.u1) / 2, y);
      placeOnWall(m, [f.n[0], 0, f.n[1]], [f.right[0], 0, f.right[1]], [p[0] + f.n[0] * 0.012, p[1], p[2] + f.n[1] * 0.012]);
      group.add(m);
    }
  }
  return group;
}
