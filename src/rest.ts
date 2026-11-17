/* rest.ts — the page rests when nobody's using it. (Robyn, 2026-10-30: "I want to make sure all the timelines do not
   keep processors busy when they are not used" — left open in a window while she worked in another app, her rooms and
   timelines drew themselves up to 120 times a second for no one, and on her ProMotion screen the cursor jumped about
   when she clicked elsewhere.)
   Away = no mouse, key or touch for 10 s, and the visitor gone: the mouse out of the page, or the window let go of
   (another app, another window, the page round a frame). A hidden tab the browser rests already. Any move over the
   page, any key, touch or wheel, and it's back at once, where it was. The same file in every project
   (master: Projects/idlecheck/rest.ts; measured with idlecheck/idle-check.mjs). */
const QUIET = 10_000;
let last = performance.now();
let inside = true;              // the mouse over the page (taken to be, until it says otherwise)
// the window let go of — from the start, if it opened (or reloaded) behind another (a page of its own: a frame in
// her site's page has no say in it till it's clicked, so it goes by the mouse)
let left = window.top === window && !document.hasFocus();
let waiting: Array<() => void> = [];

function wake() {
  last = performance.now();
  if (!waiting.length) return;
  const w = waiting;
  waiting = [];
  for (const f of w) f();
}
const here = () => { left = false; wake(); };
const opts = { capture: true, passive: true };
addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') inside = true; here(); }, opts);
for (const t of ['pointerdown', 'keydown', 'wheel', 'touchstart', 'focus', 'resize']) addEventListener(t, here, opts);
// keys handed on by the page round a frame (her site's embeds), or word from a frame inside
addEventListener('message', wake);
document.addEventListener('mouseout', (e) => { if (!e.relatedTarget) inside = false; });
// the window let go of: and a room lets go of the mouse with it (it mustn't be left hidden, or held, elsewhere)
addEventListener('blur', () => {
  left = true;
  if (document.pointerLockElement) try { document.exitPointerLock(); } catch { /* fine */ }
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) here(); });

/** has everyone gone (and for a while)? */
export const away = () => (left || !inside) && performance.now() - last > QUIET;

/** at the top of a drawing loop: true when it should stop for now — and `again` is called when someone's back
    (to set its clock going again and ask for the next frame) */
export function resting(again: () => void): boolean {
  if (!away()) return false;
  waiting.push(again);
  return true;
}
