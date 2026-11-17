/* Where every painting goes. The Louvre says which room each painting is in, never which wall, so within its room
   each one is hung here, the way the Louvre hangs: in order of date round the room, one row at eye level, the big
   ones low enough to stand on the floor's line; where a room has more pictures than wall, the small ones go two
   high, as in the old salon hang. Two are put where everyone knows they are: the Mona Lisa alone on her own wall in
   the middle of the Salle des États, and Veronese's Wedding at Cana on the end wall facing her. */
import type { Work, Room } from './model';
import type { Arch, Face } from './arch';
import { facePoint, rightSign, vaultY } from './arch';

export const LABEL_W = 0.22, LABEL_H = 0.145, LABEL_GAP = 0.15;
export const EYE_LINE = 1.6;
const CORNER = 0.6, DOOR_CLEAR = 0.55, MIN_SEG = 0.7;

type V3 = [number, number, number];
export interface Item {
  work: Work;
  /** the wall it hangs on (null: a ceiling painting, flat overhead, its face down) */
  face: Face | null;
  pos: V3;                       // the middle, on the wall
  ow: number; oh: number;        // outside of the frame
  fw: number; depth: number;     // frame width each side, how far it stands off the wall
  label: V3 | null;
  normal: V3; right: V3; up: V3;
}
export interface Title { face: Face; pos: V3; normal: V3; right: V3; title: string; sub: string; how: string; credit: string }

/* the frame's width each side: the Louvre's framed size where it gives one (that can include a case or a tabernacle,
   so never more than a fair share of the painting), else a plain moulding in proportion */
const frameOf = (w: Work) => {
  const fair = Math.min(0.28, 0.045 + 0.09 * Math.max(w.w, w.h));
  return w.fw ? Math.min(w.fw, fair) : Math.min(0.2, Math.max(0.05, 0.05 + 0.03 * Math.max(w.w, w.h)));
};
const outer = (w: Work): [number, number] => { const f = frameOf(w); return [w.w + 2 * f, w.h + 2 * f]; };

interface Seg { face: Face; a: number; b: number }
interface Col { works: Work[]; w: number }

function segmentsOf(f: Face): Seg[] {
  let out: [number, number][] = [[f.u0 + (f.cornerA ? CORNER : 0.25), f.u1 - (f.cornerB ? CORNER : 0.25)]];
  for (const [d0, d1] of f.doors) {
    const next: [number, number][] = [];
    for (const [s, e] of out) {
      const c0 = d0 - DOOR_CLEAR, c1 = d1 + DOOR_CLEAR;
      if (c1 <= s || c0 >= e) { next.push([s, e]); continue; }
      if (c0 > s) next.push([s, c0]);
      if (c1 < e) next.push([c1, e]);
    }
    out = next;
  }
  return out.filter(([s, e]) => e - s >= MIN_SEG).map(([a, b]) => ({ face: f, a, b }));
}

/** a room's walls in order round it, clockwise seen from above, starting from the north-west corner */
function roundRoom(A: Arch, r: Room): Seg[] {
  const fs = A.faces.filter((f) => f.room === r && !f.free);
  const order = (f: Face) => (f.axis === 'x' && f.n[1] > 0 ? 0 : f.axis === 'z' && f.n[0] < 0 ? 1 : f.axis === 'x' ? 2 : 3);
  fs.sort((a, b) => order(a) - order(b));
  const segs: Seg[] = [];
  for (const f of fs) {
    const s = segmentsOf(f);
    // walking clockwise: north wall west→east, east wall north→south, south wall east→west, west wall south→north
    if (order(f) >= 2) s.reverse();
    segs.push(...s);
  }
  return segs;
}

export function hang(A: Arch, works: Work[], reserve: { face: string; a: number; b: number }[] = []): { items: Item[]; unplaced: Work[] } {
  const items: Item[] = [];
  const unplaced: Work[] = [];
  const byRoom = new Map<string, Work[]>();
  for (const w of works) { if (!byRoom.has(w.room)) byRoom.set(w.room, []); byRoom.get(w.room)!.push(w); }

  const put = (w: Work, f: Face, u: number, y: number, labelSide: 1 | -1 | 0, free = false) => {
    const [ow, oh] = outer(w), fw = frameOf(w);
    const pos = facePoint(f, u, y);
    const normal: V3 = [f.n[0], 0, f.n[1]], right: V3 = [f.right[0], 0, f.right[1]];
    const depth = 0.05 + Math.min(0.09, fw * 0.45);
    let label: V3 | null = null;
    if (labelSide) {
      const lu = u + labelSide * rightSign(f) * (ow / 2 + LABEL_GAP + LABEL_W / 2);
      const ly = free ? y - oh / 2 + LABEL_H / 2 : Math.min(1.45, Math.max(1.05, y - oh / 2 + LABEL_H / 2));
      label = facePoint(f, lu, ly);
    }
    items.push({ work: w, face: f, pos, ow, oh, fw, depth, label, normal, right, up: [0, 1, 0] });
  };

  // the two everyone knows
  const pinned = new Set<string>();
  const pin = (re: RegExp, wallId: string, side: 1 | -1) => {
    const w = works.find((x) => re.test(x.fr) || re.test(x.title));
    const f = A.faces.find((q) => q.free?.id === wallId && (q.axis === 'x' ? q.n[1] : q.n[0]) === side);
    if (!w || !f) return;
    const [, oh] = outer(w);
    put(w, f, (f.u0 + f.u1) / 2, Math.max(EYE_LINE - 0.05, oh / 2 + 0.85), 1);
    pinned.add(w.id);
  };
  pin(/Joconde|Mona Lisa/i, 'joconde', -1);
  pin(/Noces de Cana|Wedding at Cana/i, 'cana', 1);

  for (const r of A.rooms) {
    const wallH = r.ceiling === 'flat' ? r.top : r.spring;
    let list = (byRoom.get(r.id) ?? []).filter((w) => !pinned.has(w.id));
    // a ceiling painting (the Louvre's titles say "Plafond"), or one too tall for the walls (as Delacroix's Apollo in
    // the Galerie d'Apollon): flat overhead
    const over = list.filter((w) => /^plafond/i.test(w.fr) || (outer(w)[1] > wallH - 0.9 && r.ceiling !== 'flat'));
    if (over.length) {
      list = list.filter((w) => !over.includes(w));
      const along = r.axis === 'x' ? [r.x0, r.x1] : [r.z0, r.z1], L = along[1] - along[0];
      const W = r.axis === 'x' ? r.z1 - r.z0 : r.x1 - r.x0, mid = r.axis === 'x' ? (r.z0 + r.z1) / 2 : (r.x0 + r.x1) / 2;
      over.forEach((w, k) => {
        const [ow, oh] = outer(w), fw = frameOf(w);
        const a = along[0] + (L * (k + 1)) / (over.length + 1);
        // under a vault: as high as its sides allow; under a cove: on the flat middle if it fits there, else just
        // above the walls' top
        const R = r.ceiling === 'cove' ? r.top - r.spring : 0, inner = Math.min(r.x1 - r.x0, r.z1 - r.z0) - 2 * R;
        const y = r.ceiling === 'vault' ? vaultY(r, Math.min(W / 2 - 0.05, ow / 2 + 0.15), W) - 0.12
          : r.ceiling === 'cove' && Math.max(ow, oh) > inner - 0.2 ? r.spring + 0.05 : r.top - 0.15;
        const pos: V3 = r.axis === 'x' ? [a, y, mid] : [mid, y, a];
        // its top toward the room's far end along the axis; seen from below, the right way round
        const up: V3 = r.axis === 'x' ? [1, 0, 0] : [0, 0, 1];
        const right: V3 = r.axis === 'x' ? [0, 0, -1] : [1, 0, 0];
        items.push({ work: w, face: null, pos, ow, oh, fw, depth: 0.05 + Math.min(0.09, fw * 0.45), label: null, normal: [0, -1, 0], right, up });
      });
    }
    if (!list.length) continue;
    let segs = roundRoom(A, r);
    for (const q of reserve) {
      segs = segs.flatMap((s) => {
        if (s.face.key !== q.face || q.b <= s.a || q.a >= s.b) return [s];
        const out: Seg[] = [];
        if (q.a - s.a >= MIN_SEG) out.push({ ...s, b: q.a });
        if (s.b - q.b >= MIN_SEG) out.push({ ...s, a: q.b });
        return out;
      });
    }
    // the bays of the Salle des Sept-Mètres: its free walls, both faces, join the round
    for (const f of A.faces.filter((q) => q.room === r && q.free && !/joconde|cana/.test(q.free.id))) segs.push(...segmentsOf(f));
    if (!segs.length) { unplaced.push(...list); continue; }

    const sorted = [...list].sort((a, b) => a.year - b.year || a.artist.localeCompare(b.artist));
    const cap = segs.reduce((s, g) => s + (g.b - g.a), 0);
    // a crowded room hangs closer together
    const tight = Math.max(0.45, Math.min(1, cap / sorted.reduce((t, w) => t + outer(w)[0] + 0.35 * outer(w)[0] + 0.3, 0)));
    const gapFor = (w: number) => Math.max(0.3, Math.min(1.4, 0.35 * w + 0.3) * tight);
    let cols: Col[] = sorted.map((w) => ({ works: [w], w: outer(w)[0] }));
    const need = () => cols.reduce((s, c) => s + c.w + gapFor(c.w), 0);
    // too many for one row: the smallest neighbours go two high, then three
    for (const most of [2, 3]) {
      while (need() > cap * 0.97) {
        let best = -1, bestW = Infinity;
        for (let i = 0; i + 1 < cols.length; i++) {
          const a = cols[i], b = cols[i + 1];
          if (a.works.length + b.works.length > most) continue;
          const h = [...a.works, ...b.works].reduce((s, w) => s + outer(w)[1] + 0.3, 0);
          if (h > wallH - 0.9) continue;
          const ww = Math.max(a.w, b.w);
          if (ww < bestW) { bestW = ww; best = i; }
        }
        if (best < 0) break;
        const a = cols[best], b = cols[best + 1];
        cols.splice(best, 2, { works: [...a.works, ...b.works], w: Math.max(a.w, b.w) });
      }
    }
    // runs of columns round the room, each segment filled about as full as the rest, in order of date; if that
    // leaves any over (a very big one, or a crowded room), every column goes where there's most room left instead
    const fill = (inOrder: boolean): Col[][] | null => {
      const runs: Col[][] = segs.map(() => []);
      const left = segs.map((g) => g.b - g.a);
      if (!inOrder) {
        for (const c of [...cols].sort((a, b) => b.w - a.w)) {
          let k = -1;
          left.forEach((l, i) => { if (l >= c.w + 0.2 && (k < 0 || l > left[k])) k = i; });
          if (k < 0) { unplaced.push(...c.works); continue; }
          runs[k].push(c); left[k] -= c.w + gapFor(c.w) * 0.6;
        }
        const pos = new Map(cols.map((c, i) => [c, i]));
        for (const r of runs) r.sort((a, b) => pos.get(a)! - pos.get(b)!);
        return runs;
      }
      const ratio = Math.min(1, need() / cap);
      let si = 0, used = 0;
      for (const c of cols) {
        const g = gapFor(c.w);
        while (si < segs.length) {
          const len = segs[si].b - segs[si].a;
          if (c.w + 0.2 > len - used) { si++; used = 0; continue; }
          if (used > 0 && used + c.w + g > len * Math.max(ratio, 0.35) + 0.25) { si++; used = 0; continue; }
          break;
        }
        if (si >= segs.length) return null;
        runs[si].push(c);
        used += c.w + g;
      }
      return runs;
    };
    const runs = fill(true) ?? fill(false);
    if (!runs) { unplaced.push(...list); continue; }
    // even spacing along each stretch, never wider apart than a little more than the works themselves
    runs.forEach((run, i) => {
      if (!run.length) return;
      const s = segs[i], len = s.b - s.a, total = run.reduce((t, c) => t + c.w, 0);
      const avg = total / run.length;
      let g = (len - total) / (run.length + 1);
      g = Math.min(g, Math.max(1.6, 1.3 * avg));
      if (g < 0.08) g = 0.08;
      const span = total + g * (run.length - 1);
      let u = (s.a + s.b) / 2 - span / 2;
      const f = s.face, rs = rightSign(f);
      const H = Math.min(r.ceiling === 'flat' ? r.top : r.spring, f.h);
      run.forEach((c, k) => {
        const mid = u + c.w / 2;
        // the stack, biggest at the bottom, its middle on the eye line (or high enough for its bottom)
        const ws = [...c.works].sort((a, b) => outer(b)[0] * outer(b)[1] - outer(a)[0] * outer(a)[1]);
        const hs = ws.map((w) => outer(w)[1]), gap = 0.3;
        const stackH = hs.reduce((t, h) => t + h, 0) + gap * (hs.length - 1);
        let bottom = ws.length === 1 ? Math.max(EYE_LINE - stackH / 2, 0.6) : Math.max(0.75, EYE_LINE - stackH / 2 + 0.35);
        bottom = Math.max(0.35, Math.min(bottom, H - 0.45 - stackH));
        // the label goes to the right of each work (to the left where a stretch ends too soon on the right)
        const plusU = k < run.length - 1 ? g : s.b - (u + c.w), minusU = k > 0 ? g : u - s.a;
        const side: 1 | -1 = (rs > 0 ? plusU : minusU) >= LABEL_W + LABEL_GAP + 0.05 ? 1 : -1;
        let y = bottom;
        ws.forEach((w, j) => {
          const h = hs[j];
          // u measured along the face's axis; the stack's middle is at mid along the axis
          put(w, f, mid, y + h / 2, side, ws.length > 1);
          y += h + gap;
        });
        u += c.w + g;
      });
    });
  }
  return { items, unplaced };
}
