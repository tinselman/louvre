/* Walking up to a painting (Robyn, 2026-10-25: "when user gets close enough to painting, slightly
   fade all of background except the painting directly in front of user. As user gets closer, the
   background fades (darkens) more. on the first painting that the user looks at, in center of
   screen, 'CLICK FOR FULL SCREEN'"). This replaces the old dot in the middle of the screen.

   The painting in front of you is the one nearest the middle of your view, facing you, with nothing
   in the way, and close enough — bigger works from further off. Within reach, everything else darkens
   a little, and more as you come closer; that painting (and its card) stays as it is. A click opens
   it. The darkening is a black veil drawn over the finished picture, then the painting drawn again on
   top where it shows (so anything standing in front of it, the host say, stays veiled). */
import * as THREE from 'three';
import type { Pic } from './build';
import { blocked, type Rect } from './arch';

const MAX = 0.62;                  // the darkest the rest gets, right up close
const LIT = 5;                     // the layer the painting is drawn again on
const EASE = 0.18;                 // seconds for the veil to settle

export class Focus {
  /** the painting in front of you, if you're close enough (a click opens it) */
  pic: Pic | null = null;
  private lit: Pic | null = null;  // the one kept bright (it stays so while the veil lifts)
  private dark = 0;
  private veil: THREE.Mesh;
  private vScene = new THREE.Scene();
  private vCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private hintEl: HTMLElement;
  private hinted: Pic | null = null;   // the first painting, while the words show on it
  private hintDone = false;
  private v = new THREE.Vector3();
  private f = new THREE.Vector3();

  constructor(words = true, touch = false) {
    this.veil = new THREE.Mesh(new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthTest: false, depthWrite: false, toneMapped: false }));
    this.vScene.add(this.veil);
    this.hintEl = document.createElement('div');
    this.hintEl.id = 'focus-hint';
    this.hintEl.textContent = touch ? 'TAP FOR FULL SCREEN' : 'CLICK FOR FULL SCREEN';
    if (!words) this.hintEl.style.display = 'none';
    document.body.append(this.hintEl);
  }

  /** how far a painting can be and still be "in front of you": bigger ones from further off */
  private reach(p: Pic) { return Math.min(12, Math.max(2.6, 1.8 + 2.0 * Math.max(p.w, p.h))); }

  update(dt: number, camera: THREE.Camera, pictures: Pic[], solids: Rect[], on: boolean) {
    let best: Pic | null = null, bestScore = Infinity, keep = Infinity;
    if (on) {
      const cam = camera.getWorldPosition(this.v), fwd = camera.getWorldDirection(this.f);
      for (const p of pictures) {
        const c = p.mesh.position, n = p.placed.normal;
        const tx = c.x - cam.x, ty = c.y - cam.y, tz = c.z - cam.z, d = Math.hypot(tx, ty, tz);
        if (d > this.reach(p) || n[0] * -tx + n[2] * -tz <= 0) continue;           // too far, or its back to you
        const ang = Math.acos(Math.min(1, (tx * fwd.x + ty * fwd.y + tz * fwd.z) / d));
        const allowed = Math.atan2(Math.max(p.w, p.h) * 0.5, d) + 0.17;
        if (ang > allowed) continue;
        if (blocked(solids, cam.x, cam.z, c.x + n[0] * 0.05, c.z + n[2] * 0.05)) continue;
        const score = ang / allowed;
        if (score < bestScore) { bestScore = score; best = p; }
        if (p === this.pic) keep = score;
      }
      // don't flick between two neighbours: the one you have stays unless another is clearly nearer the middle
      if (this.pic && keep < bestScore + 0.15) best = this.pic;
    }
    this.pic = best;
    if (best) this.lit = best;
    let target = 0;
    if (best) {
      const d = best.mesh.position.distanceTo(camera.getWorldPosition(this.v)), D0 = this.reach(best), D1 = D0 * 0.4;
      const t = Math.min(1, Math.max(0, (D0 - d) / (D0 - D1)));
      target = MAX * t * t * (3 - 2 * t);
    }
    this.dark += (target - this.dark) * (1 - Math.exp(-dt / EASE));
    if (this.dark < 0.003 && !best) this.lit = null;

    // the first painting you come up to says how to see it full screen
    if (!this.hintDone && best && this.dark > 0.12 && !this.hinted) this.hinted = best;
    const showing = !!this.hinted && best === this.hinted && this.dark > 0.08;
    if (this.hinted && !showing && this.hintEl.classList.contains('on')) { this.hintDone = true; this.hinted = null; }
    this.hintEl.classList.toggle('on', showing);
  }
  /** a painting was opened: the words have done their job */
  opened() { this.hintDone = true; this.hinted = null; this.hintEl.classList.remove('on'); }
  /** everything off at once (a page or the full view is up) */
  clear() { this.pic = null; this.lit = null; this.dark = 0; this.hintEl.classList.remove('on'); }

  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    const p = this.lit;
    if (!p || this.dark < 0.003) return;
    (this.veil.material as THREE.MeshBasicMaterial).opacity = this.dark;
    renderer.autoClear = false;
    renderer.render(this.vScene, this.vCam);
    const meshes = [p.mesh, p.label, p.dot].filter((m): m is THREE.Mesh => !!m);
    for (const m of meshes) m.layers.enable(LIT);
    const mask = camera.layers.mask, bg = scene.background;
    camera.layers.set(LIT);
    scene.background = null;                       // a colour background would clear the screen first
    renderer.render(scene, camera);
    scene.background = bg;
    camera.layers.mask = mask;
    for (const m of meshes) m.layers.disable(LIT);
    renderer.autoClear = true;
  }
}
