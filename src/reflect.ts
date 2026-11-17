/* The polished floor's mirror: the room drawn again from a camera reflected in
   the floor plane, into a half-size target the floor shader blurs and blends.
   This is three's Reflector, kept apart from any one mesh so all four rooms'
   floors (separate materials, separate lamps) share one pass. */
import * as THREE from 'three';

export class FloorMirror {
  target: THREE.WebGLRenderTarget;
  texMat = new THREE.Matrix4();
  private cam = new THREE.PerspectiveCamera();
  private plane = new THREE.Plane();
  private clip = new THREE.Vector4();
  private q = new THREE.Vector4();
  private n = new THREE.Vector3(0, 1, 0);
  private p0 = new THREE.Vector3(0, 0, 0);
  private camPos = new THREE.Vector3();
  private rot = new THREE.Matrix4();
  private look = new THREE.Vector3();
  private view = new THREE.Vector3();
  private tgt = new THREE.Vector3();

  far = 48;
  constructor(w: number, h: number) {
    this.target = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, depthBuffer: true });
    this.target.texture.generateMipmaps = false;
    this.cam.layers.set(0);
  }

  setSize(w: number, h: number) { this.target.setSize(Math.max(2, w), Math.max(2, h)); }

  /** `after`: more to draw into the mirror with its camera (the host, who lives in a scene of his own) */
  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, after?: (r: THREE.WebGLRenderer, cam: THREE.PerspectiveCamera) => void) {
    this.camPos.setFromMatrixPosition(camera.matrixWorld);
    this.view.subVectors(this.p0, this.camPos);
    if (this.view.dot(this.n) > 0) return;          // under the floor: nothing to see
    this.view.reflect(this.n).negate().add(this.p0);
    this.rot.extractRotation(camera.matrixWorld);
    this.look.set(0, 0, -1).applyMatrix4(this.rot).add(this.camPos);
    this.tgt.subVectors(this.p0, this.look).reflect(this.n).negate().add(this.p0);
    const vc = this.cam;
    vc.position.copy(this.view);
    vc.up.set(0, 1, 0).applyMatrix4(this.rot).reflect(this.n);
    vc.lookAt(this.tgt);
    // only what's near shows in the floor (the far end of a 300 m gallery would draw everything twice)
    vc.fov = camera.fov; vc.aspect = camera.aspect; vc.near = camera.near; vc.far = Math.min(camera.far, this.far);
    vc.updateMatrixWorld();
    vc.updateProjectionMatrix();

    this.texMat.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.texMat.multiply(vc.projectionMatrix).multiply(vc.matrixWorldInverse);

    // oblique near plane on the floor, so nothing below it gets in
    this.plane.setFromNormalAndCoplanarPoint(this.n, this.p0).applyMatrix4(vc.matrixWorldInverse);
    this.clip.set(this.plane.normal.x, this.plane.normal.y, this.plane.normal.z, this.plane.constant);
    const e = vc.projectionMatrix.elements;
    this.q.x = (Math.sign(this.clip.x) + e[8]) / e[0];
    this.q.y = (Math.sign(this.clip.y) + e[9]) / e[5];
    this.q.z = -1;
    this.q.w = (1 + e[10]) / e[14];
    this.clip.multiplyScalar(2 / this.clip.dot(this.q));
    e[2] = this.clip.x; e[6] = this.clip.y; e[10] = this.clip.z + 1 - 0.003; e[14] = this.clip.w;

    const prevTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(this.target);
    renderer.clear();
    renderer.render(scene, vc);
    after?.(renderer, vc);
    renderer.setRenderTarget(prevTarget);
  }
}
