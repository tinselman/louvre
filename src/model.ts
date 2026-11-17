/* What the Louvre's painting galleries are made of (Denon's first floor, Richelieu's and Sully's second). Three files in data/, all written by tools/:

   building.json  the rooms (axis-aligned rectangles, metres, x east along the Grande Galerie, z south toward
                  the Seine), each with its wall height (`spring`, where the ceiling starts), the top of its
                  ceiling, the kind of ceiling (flat, a cove round the edge, or a barrel vault along its long
                  axis) and how much of it is skylight; the doorways between rooms; free-standing walls.
   works.json     every painting hung: title, artist, date, medium, size in metres (w × h, the painting
                  itself; fw the frame's width each side, when the Louvre gives the framed size), its room.
   images.json    each work's picture: the medium file's pixels, its average colour, the large one's address. */

export interface Room {
  id: string; name: string;
  x0: number; z0: number; x1: number; z1: number;
  spring: number; top: number;
  ceiling: 'flat' | 'cove' | 'vault' | 'none';
  sky: number;                       // the skylight's share of the ceiling's width (0: none)
  axis: 'x' | 'z';                   // a vault runs this way
  hang: boolean;
  floor: number;                     // 1 or 2
  y: number;                         // the height of its floor (0, or the second floor's)
  /** one floor's part of the stair between them: no floor of its own (the flights are), walls only */
  stair?: boolean;
  /** the stair's walls, both floors' parts, shaded as one wall this high (from the first floor) */
  wallTop?: number;
}
/** the stair between the floors: two flights side by side in one room (a part on each floor). Band A (z0…aZ) rises
    from the first floor at its east end (xE) west to a landing (x0…xL); band B (bZ…z1) rises from the landing back
    east to the second floor; between them a wall from xL to the east wall. */
export interface Stair { id: string; x0: number; z0: number; x1: number; z1: number; rise: number; aZ: number; bZ: number; xL: number; xE: number }
/** an opening through the wall between rooms a and b. `wall`: the way the wall runs ('x': an east-west wall);
    u0…u1 along it; pa, pb the two faces' planes (z of an east-west wall, x of a north-south one) */
export interface Door { a: string; b: string; wall: 'x' | 'z'; u0: number; u1: number; pa: number; pb: number; h: number }
/** a wall standing in a room, its centre line from (x0, z0) to (x1, z1), east-west or north-south */
export interface FreeWall { id: string; room: string; x0: number; z0: number; x1: number; z1: number; t: number; h: number }
/** a waist-high rail (the Mona Lisa's): its line, east-west or north-south */
export interface Rail { id: string; room: string; x0: number; z0: number; x1: number; z1: number; h: number }
export interface Building { rooms: Room[]; doors: Door[]; walls: FreeWall[]; rails?: Rail[]; stairs?: Stair[]; floorHeight?: number; start: { x: number; z: number; yaw: number } }

export interface Work {
  id: string; title: string; fr: string; artist: string; date: string; year: number; medium: string;
  w: number; h: number; fw: number | null; room: string; inv: string; q: string; img: string; cpath?: string;
  floor?: number; wing?: string;
}
export interface Pix { px: [number, number]; l: string; c: string; file: string }
/** colour corrections (kept from the Portrait gallery's shader; unused here) */
export interface Adjust { b?: number; c?: number; s?: number; t?: number; sh?: number; hl?: number }
export interface Data { building: Building; works: Work[]; images: Record<string, Pix> }

export async function loadData(): Promise<Data> {
  const get = async (name: string) => {
    const r = await fetch(`data/${name}.json`, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`data/${name}.json: ${r.status}`);
    return r.json();
  };
  const [building, works, images] = await Promise.all([get('building'), get('works'), get('images')]);
  return { building, works, images };
}

/* The words on a label and under the full view. */
const cm = (m: number) => { const c = m * 100; return c >= 100 ? `${Math.round(c)}` : `${Math.round(c * 10) / 10}`; };
export const sizeText = (w: Work) => `${cm(w.h)} × ${cm(w.w)} cm`;
export const titleOf = (w: Work) => w.title.trim() || 'Untitled';
export const SOLD_RED = '#d8231b';
