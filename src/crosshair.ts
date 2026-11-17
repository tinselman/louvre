/* The crosshair, as in the Listening Room (Robyn, 2026-10-28: "use crosshairs interface for navigation for the
   painting gallery and for the time machine"; her words there: "if the pointer is an + in the center of the screen
   than i'm okay with the pointer always being visible ... When moving the crosshairs are locked to center", and
   "they should stay a crosshairs" — never a ring, never a hand).

   A thin white + with a dark edge (it shows on the white outside and on the paintings alike). Walking about with the
   mouse taken, it's drawn in the middle of the screen, where a click acts. With the mouse free — before the first
   click, or after an Esc — the mouse pointer itself is the +.

   THE + IS ALWAYS OURS: Safari says "Your mouse pointer is hidden" each time a page hides the mouse, so the mouse is
   taken once — the first click into the gallery — and not given back when a painting opens. In the close-up the
   mouse moves the + about the screen (`vp`) to choose with: the "?" and the little host's buttons are clicked where
   it is, the red dot shows SOLD under it, anywhere else closes the close-up. Esc, and the mouse is yours again. (In
   the editor the close-up still lets the mouse go, for its own buttons.) */

/** the +, drawn at a scale */
function draw(scale: number) {
  const S = 32, c = document.createElement('canvas');
  c.width = c.height = S * scale;
  const g = c.getContext('2d')!;
  g.scale(scale, scale);
  const m = S / 2, arm = 8, gap = 2.5;
  const strokes = (w: number, col: string) => {
    g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round';
    g.beginPath();
    g.moveTo(m - arm, m); g.lineTo(m - gap, m); g.moveTo(m + gap, m); g.lineTo(m + arm, m);
    g.moveTo(m, m - arm); g.lineTo(m, m - gap); g.moveTo(m, m + gap); g.lineTo(m, m + arm);
    g.stroke();
  };
  strokes(3.4, 'rgba(0,0,0,0.55)');
  strokes(1.5, '#fff');
  return c.toDataURL('image/png');
}
const set = () => `-webkit-image-set(url(${draw(1)}) 1x, url(${draw(2)}) 2x)`;

/** the + while choosing in the close-up with the mouse taken (client px) */
export const vp = { x: innerWidth / 2, y: innerHeight / 2 };

/** --cross (the pointer as the +, for CSS) and the + drawn on the screen; returns how to show it: in the middle, or
    where it's been moved to */
export function setUpCrosshair() {
  document.documentElement.style.setProperty('--cross', `${set()} 16 16, crosshair`);
  const mid = document.createElement('div');
  mid.id = 'crosshair';
  mid.style.backgroundImage = set();
  document.body.append(mid);
  return (on: boolean, x?: number, y?: number) => {
    mid.classList.toggle('on', on);
    mid.style.transform = on && x !== undefined && y !== undefined ? `translate(${x - innerWidth / 2}px, ${y - innerHeight / 2}px)` : '';
  };
}
