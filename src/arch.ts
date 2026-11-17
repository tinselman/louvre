/* From the building to its surfaces: the wall faces you can hang on, the doorways' reveals, what you bump into.

   Every room is a rectangle; each of its four sides is a FACE (the doorways in that side cut out of it), and a
   free-standing wall has two faces of its own. A face knows its plane, its extent, which way it faces, its
   height (to the spring of the ceiling) and its doorways. Rooms are kept apart by their walls' thickness, so a
   doorway is a short passage: two jambs and a head between the two rooms' faces. */
import type { Building, Room, FreeWall } from './model';

export interface Rect { x0: number; x1: number; z0: number; z1: number }
export type Axis = 'x' | 'z';
export interface Face {
  key: string; room: Room; axis: Axis;
  plane: number;                     // z of an east-west face, x of a north-south one
  u0: number; u1: number;            // extent along its axis
  n: [number, number];               // into the room (x, z)
  right: [number, number];           // right-hand to someone facing it
  h: number;                         // up to where the ceiling starts
  doors: [number, number, number][]; // openings: from, to, height
  cornerA: boolean; cornerB: boolean;
  free: FreeWall | null;             // a free-standing wall's face
  /** a room's side that ends under a barrel vault: the wall goes on up into the vault's curve */
  lunette: boolean;
}
export interface Arch {
  /** which floor, and the height of its floor */
  floor: number; base: number;
  rooms: Room[]; byId: Map<string, Room>;
  faces: Face[];
  reveals: { p: [number, number, number][]; n: [number, number, number] }[];
  thresholds: { room: Room; r: Rect }[];
  solids: Rect[];
  /** what blocks the view (the walls; not the Mona Lisa's rail, which stops feet, not eyes) */
  sight: Rect[];
  bounds: Rect;
}

const STRIP = 0.35;                  // how thick a wall is, for bumping into, behind each face

export function buildArch(B: Building, floor = 1): Arch {
  const rooms = B.rooms.filter((r) => r.floor === floor);
  const byId = new Map(rooms.map((r) => [r.id, r]));
  const faces: Face[] = [];
  const reveals: Arch['reveals'] = [];
  const thresholds: Arch['thresholds'] = [];
  const solids: Rect[] = [];
  const doorsOn = (r: Room, axis: Axis, plane: number): [number, number, number][] =>
    B.doors.filter((d) => byId.has(d.a) && byId.has(d.b) && d.wall === axis && ((d.a === r.id && Math.abs(d.pa - plane) < 1e-3) || (d.b === r.id && Math.abs(d.pb - plane) < 1e-3)))
      .map((d) => [d.u0, d.u1, d.h] as [number, number, number]);

  for (const r of rooms) {
    const flat = r.ceiling === 'flat' || r.ceiling === 'none';
    const sides: { axis: Axis; plane: number; u0: number; u1: number; n: [number, number] }[] = [
      { axis: 'x', plane: r.z0, u0: r.x0, u1: r.x1, n: [0, 1] },
      { axis: 'x', plane: r.z1, u0: r.x0, u1: r.x1, n: [0, -1] },
      { axis: 'z', plane: r.x0, u0: r.z0, u1: r.z1, n: [1, 0] },
      { axis: 'z', plane: r.x1, u0: r.z0, u1: r.z1, n: [-1, 0] },
    ];
    for (const s of sides) {
      const doors = doorsOn(r, s.axis, s.plane);
      faces.push({
        key: `${r.id}:${s.axis}:${s.plane}`, room: r, axis: s.axis, plane: s.plane, u0: s.u0, u1: s.u1, n: s.n,
        right: [s.n[1], -s.n[0]], h: flat ? r.top : r.spring, doors, cornerA: true, cornerB: true, free: null,
        lunette: r.ceiling === 'vault' && s.axis !== r.axis,
      });
      // what you bump into: a strip behind the face, with the doorways left open
      let a = s.u0 - STRIP;
      const out = -STRIP;
      const cuts = [...doors].sort((p, q) => p[0] - q[0]);
      const strip = (u0: number, u1: number) => {
        if (u1 - u0 < 1e-3) return;
        const p0 = s.plane, p1 = s.plane + (s.axis === 'x' ? s.n[1] : s.n[0]) * out;
        const lo = Math.min(p0, p1), hi = Math.max(p0, p1);
        solids.push(s.axis === 'x' ? { x0: u0, x1: u1, z0: lo, z1: hi } : { x0: lo, x1: hi, z0: u0, z1: u1 });
      };
      for (const [d0, d1] of cuts) { strip(a, d0); a = d1; }
      strip(a, s.u1 + STRIP);
    }
  }
  // each doorway once: its passage through the wall (jambs, head, the floor across it) and its sides, to bump into
  for (const d of B.doors) {
    if (!byId.has(d.a) || !byId.has(d.b)) continue;
    const lo = Math.min(d.pa, d.pb), hi = Math.max(d.pa, d.pb);
    const A = byId.get(d.a)!, base = Math.max(A.y, byId.get(d.b)!.y);
    const P = (u: number, y: number, c: number): [number, number, number] => (d.wall === 'x' ? [u, y + base, c] : [c, y + base, u]);
    const jamb = (u: number, into: number) => {
      // a vertical face at u, across the wall from lo to hi, facing along the wall toward the opening's middle
      const p = [P(u, 0, lo), P(u, 0, hi), P(u, d.h, hi), P(u, d.h, lo)];
      const n: [number, number, number] = d.wall === 'x' ? [into, 0, 0] : [0, 0, into];
      reveals.push({ p, n });
    };
    jamb(d.u0, 1); jamb(d.u1, -1);
    reveals.push({ p: [P(d.u0, d.h, lo), P(d.u1, d.h, lo), P(d.u1, d.h, hi), P(d.u0, d.h, hi)], n: [0, -1, 0] });
    thresholds.push({ room: A, r: d.wall === 'x' ? { x0: d.u0, x1: d.u1, z0: lo, z1: hi } : { x0: lo, x1: hi, z0: d.u0, z1: d.u1 } });
    for (const [u0, u1] of [[d.u0 - 0.6, d.u0], [d.u1, d.u1 + 0.6]]) {
      solids.push(d.wall === 'x' ? { x0: u0, x1: u1, z0: lo - 0.05, z1: hi + 0.05 } : { x0: lo - 0.05, x1: hi + 0.05, z0: u0, z1: u1 });
    }
  }
  // free-standing walls: two faces, ends and a top
  for (const w of B.walls) {
    const r = byId.get(w.room);
    if (!r) continue;
    const ax: Axis = Math.abs(w.z1 - w.z0) < 1e-6 ? 'x' : 'z';
    const c = ax === 'x' ? w.z0 : w.x0, t = w.t / 2;
    const u0 = ax === 'x' ? Math.min(w.x0, w.x1) : Math.min(w.z0, w.z1), u1 = ax === 'x' ? Math.max(w.x0, w.x1) : Math.max(w.z0, w.z1);
    for (const side of [-1, 1] as const) {
      const n: [number, number] = ax === 'x' ? [0, side] : [side, 0];
      faces.push({ key: `${w.id}:${side}`, room: r, axis: ax, plane: c + side * t, u0, u1, n, right: [n[1], -n[0]], h: w.h, doors: [], cornerA: false, cornerB: false, free: w, lunette: false });
    }
    const P = (u: number, y: number, v: number): [number, number, number] => (ax === 'x' ? [u, y + r.y, v] : [v, y + r.y, u]);
    for (const [u, s] of [[u0, -1], [u1, 1]] as const) {
      reveals.push({ p: [P(u, 0, c - t), P(u, 0, c + t), P(u, w.h, c + t), P(u, w.h, c - t)], n: ax === 'x' ? [s, 0, 0] : [0, 0, s] });
    }
    reveals.push({ p: [P(u0, w.h, c - t), P(u1, w.h, c - t), P(u1, w.h, c + t), P(u0, w.h, c + t)], n: [0, 1, 0] });
    solids.push(ax === 'x' ? { x0: u0, x1: u1, z0: c - t, z1: c + t } : { x0: c - t, x1: c + t, z0: u0, z1: u1 });
  }
  const sight = [...solids];
  for (const r of (B.rails ?? []).filter((q) => byId.has(q.room))) solids.push({ x0: Math.min(r.x0, r.x1) - 0.05, x1: Math.max(r.x0, r.x1) + 0.05, z0: Math.min(r.z0, r.z1) - 0.05, z1: Math.max(r.z0, r.z1) + 0.05 });
  const bounds = {
    x0: Math.min(...B.rooms.map((r) => r.x0)) - 2, x1: Math.max(...B.rooms.map((r) => r.x1)) + 2,
    z0: Math.min(...B.rooms.map((r) => r.z0)) - 2, z1: Math.max(...B.rooms.map((r) => r.z1)) + 2,
  };
  return { floor, base: rooms[0]?.y ?? 0, rooms, byId, faces, reveals, thresholds, solids, sight, bounds };
}

/** where a point of a face is, in the world (y above its own floor) */
export const facePoint = (f: Face, u: number, y: number): [number, number, number] =>
  f.axis === 'x' ? [u, y + f.room.y, f.plane] : [f.plane, y + f.room.y, u];
/** how far along the face's own right a world u is (so 'to the right' is +) */
export const rightSign = (f: Face) => (f.axis === 'x' ? f.right[0] : f.right[1]);

/* 2D: does the segment a->b cross any solid? */
export function blocked(solids: Rect[], ax: number, az: number, bx: number, bz: number, skipNear = 0): boolean {
  const dx = bx - ax, dz = bz - az;
  for (const r of solids) {
    if (Math.max(ax, bx) < r.x0 || Math.min(ax, bx) > r.x1 || Math.max(az, bz) < r.z0 || Math.min(az, bz) > r.z1) continue;
    let t0 = 0, t1 = 1;
    const clip = (p: number, q: number) => {
      if (Math.abs(p) < 1e-12) return q >= 0;
      const t = q / p;
      if (p < 0) { if (t > t1) return false; if (t > t0) t0 = t; }
      else { if (t < t0) return false; if (t < t1) t1 = t; }
      return true;
    };
    if (clip(-dx, ax - r.x0) && clip(dx, r.x1 - ax) && clip(-dz, az - r.z0) && clip(dz, r.z1 - az)) {
      if (t1 - t0 > 1e-4 && t1 > skipNear && t0 < 1 - skipNear) return true;
    }
  }
  return false;
}

/** the room a point is in (or null, in a doorway or a wall) */
export const roomAt = (A: Arch, x: number, z: number) => A.rooms.find((r) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) ?? null;

/** the vault's height across a room at s (−W/2…W/2 from its middle line) */
export const vaultY = (r: Room, s: number, W: number) => r.spring + (r.top - r.spring) * Math.sqrt(Math.max(0, 1 - (2 * s / W) ** 2));
