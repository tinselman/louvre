var uc=Object.defineProperty;var fc=(i,e,t)=>e in i?uc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var he=(i,e,t)=>fc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="186",dc=0,to=1,pc=2,Mr=1,mc=2,Li=3,Yn=0,Nt=1,xn=2,Mn=0,Ni=1,no=2,io=3,ro=4,gc=5,pi=100,_c=101,xc=102,vc=103,Mc=104,Sc=200,Ec=201,yc=202,bc=203,fl=204,dl=205,Tc=206,wc=207,Ac=208,Rc=209,Cc=210,Pc=211,Lc=212,Dc=213,Ic=214,As=0,Rs=1,Cs=2,Bi=3,Ps=4,Ls=5,Ds=6,Is=7,pl=0,Uc=1,Nc=2,cn=0,ml=1,gl=2,_l=3,xl=4,vl=5,Ml=6,va=7,Sl=300,$n=301,vi=302,qr=303,Yr=304,Br=306,Us=1e3,vn=1001,Ns=1002,St=1003,Fc=1004,Zi=1005,Ct=1006,$r=1007,Vn=1008,Wt=1009,El=1010,yl=1011,zi=1012,Ma=1013,hn=1014,on=1015,jt=1016,Sa=1017,Ea=1018,Hi=1020,bl=35902,Tl=35899,wl=1021,Al=1022,Jt=1023,yn=1026,Wn=1027,Rl=1028,ya=1029,Kn=1030,ba=1031,Ta=1033,Sr=33776,Er=33777,yr=33778,br=33779,Fs=35840,Os=35841,Bs=35842,zs=35843,Hs=36196,ks=37492,Gs=37496,Vs=37488,Ws=37489,Rr=37490,Xs=37491,qs=37808,Ys=37809,$s=37810,Ks=37811,Zs=37812,Js=37813,Qs=37814,js=37815,ea=37816,ta=37817,na=37818,ia=37819,ra=37820,sa=37821,aa=36492,oa=36494,la=36495,ca=36283,ha=36284,Cr=36285,ua=36286,Oc=3200,fa=0,Bc=1,Un="",vt="srgb",Pr="srgb-linear",Lr="linear",tt="srgb",Kr=7680,zc=519,Hc=512,kc=513,Gc=514,wa=515,Vc=516,Wc=517,Aa=518,Xc=519,qc=35044,Yc=35048,so="300 es",ln=2e3,Dr=2001;function $c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kc(){const i=ki("canvas");return i.style.display="block",i}const ao={};function oo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){const e=i.join(" ");e in ao||(ao[e]=!0,Ie(...i))}function Zc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Jc={[As]:Rs,[Cs]:Ds,[Ps]:Is,[Bi]:Ls,[Rs]:As,[Ds]:Cs,[Is]:Ps,[Ls]:Bi};class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lo=1234567;const Fi=Math.PI/180,Gi=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Ra(i,e){return(i%e+e)%e}function Qc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function jc(i,e,t){return i!==e?(t-i)/(e-i):0}function Oi(i,e,t){return(1-t)*i+t*e}function eh(i,e,t,n){return Oi(i,e,1-Math.exp(-t*n))}function th(i,e=1){return e-Math.abs(Ra(i,e*2)-e)}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sh(i,e){return i+Math.random()*(e-i)}function ah(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(lo=i);let e=lo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*Fi}function ch(i){return i*Gi}function hh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dh(i,e,t,n,r){const s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),o=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(l*u,c*f,c*h,l*o);break;case"YZY":i.set(c*h,l*u,c*f,l*o);break;case"ZXZ":i.set(c*f,c*h,l*u,l*o);break;case"XZX":i.set(l*u,c*g,c*d,l*o);break;case"YXY":i.set(c*d,l*u,c*g,l*o);break;case"ZYZ":i.set(c*g,c*d,l*u,l*o);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gn={DEG2RAD:Fi,RAD2DEG:Gi,generateUUID:Si,clamp:Xe,euclideanModulo:Ra,mapLinear:Qc,inverseLerp:jc,lerp:Oi,damp:eh,pingpong:th,smoothstep:nh,smootherstep:ih,randInt:rh,randFloat:sh,randFloatSpread:ah,seededRandom:oh,degToRad:lh,radToDeg:ch,isPowerOfTwo:hh,ceilPowerOfTwo:uh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:dh,normalize:Lt,denormalize:mi},Ha=class Ha{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ha.prototype.isVector2=!0;let Ve=Ha;class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],o=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],g=s[a+2],M=s[a+3];if(f!==M||c!==h||o!==d||u!==g){let m=c*h+o*d+u*g+f*M;m<0&&(h=-h,d=-d,g=-g,M=-M,m=-m);let p=1-l;if(m<.9995){const y=Math.acos(m),L=Math.sin(y);p=Math.sin(p*y)/L,l=Math.sin(l*y)/L,c=c*p+h*l,o=o*p+d*l,u=u*p+g*l,f=f*p+M*l}else{c=c*p+h*l,o=o*p+d*l,u=u*p+g*l,f=f*p+M*l;const y=1/Math.sqrt(c*c+o*o+u*u+f*f);c*=y,o*=y,u*=y,f*=y}}e[t]=c,e[t+1]=o,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],c=n[r+1],o=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=l*g+u*f+c*d-o*h,e[t+1]=c*g+u*h+o*f-l*d,e[t+2]=o*g+u*d+l*h-c*f,e[t+3]=u*g-l*f-c*h-o*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),u=l(r/2),f=l(s/2),h=c(n/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+o*d*g,this._y=o*d*f-h*u*g,this._z=o*u*g+h*d*f,this._w=o*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+o*d*g,this._y=o*d*f-h*u*g,this._z=o*u*g-h*d*f,this._w=o*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-o*d*g,this._y=o*d*f+h*u*g,this._z=o*u*g+h*d*f,this._w=o*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-o*d*g,this._y=o*d*f+h*u*g,this._z=o*u*g-h*d*f,this._w=o*u*f+h*d*g;break;case"YZX":this._x=h*u*f+o*d*g,this._y=o*d*f+h*u*g,this._z=o*u*g-h*d*f,this._w=o*u*f-h*d*g;break;case"XZY":this._x=h*u*f-o*d*g,this._y=o*d*f-h*u*g,this._z=o*u*g+h*d*f,this._w=o*u*f+h*d*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],o=t[2],u=t[6],f=t[10],h=n+l+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-o)*d,this._z=(a-r)*d}else if(n>l&&n>f){const d=2*Math.sqrt(1+n-l-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+o)/d}else if(l>f){const d=2*Math.sqrt(1+l-n-f);this._w=(s-o)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-l);this._w=(a-r)/d,this._x=(s+o)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,o=t._z,u=t._w;return this._x=n*u+a*l+r*o-s*c,this._y=r*u+a*c+s*l-n*o,this._z=s*u+a*o+n*c-r*l,this._w=a*u-n*l-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){const o=Math.acos(l),u=Math.sin(o);c=Math.sin(c*o)/u,t=Math.sin(t*o)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ka=class ka{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*r-l*n),u=2*(l*t-s*r),f=2*(s*n-a*t);return this.x=t+c*o+a*f-l*u,this.y=n+c*u+l*o-s*f,this.z=r+c*f+s*u-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ka.prototype.isVector3=!0;let G=ka;const Zr=new G,co=new Ei,Ga=class Ga{constructor(e,t,n,r,s,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,o)}set(e,t,n,r,s,a,l,c,o){const u=this.elements;return u[0]=e,u[1]=r,u[2]=l,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],M=r[0],m=r[3],p=r[6],y=r[1],L=r[4],S=r[7],T=r[2],E=r[5],b=r[8];return s[0]=a*M+l*y+c*T,s[3]=a*m+l*L+c*E,s[6]=a*p+l*S+c*b,s[1]=o*M+u*y+f*T,s[4]=o*m+u*L+f*E,s[7]=o*p+u*S+f*b,s[2]=h*M+d*y+g*T,s[5]=h*m+d*L+g*E,s[8]=h*p+d*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8];return t*a*u-t*l*o-n*s*u+n*l*c+r*s*o-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],f=u*a-l*o,h=l*c-u*s,d=o*s-a*c,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(r*o-u*n)*M,e[2]=(l*n-r*a)*M,e[3]=h*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-l*t)*M,e[6]=d*M,e[7]=(n*c-o*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const c=Math.cos(s),o=Math.sin(s);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-r*o,r*c,-r*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ga.prototype.isMatrix3=!0;let Fe=Ga;const Jr=new Fe,ho=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){const i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Un?Lr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}const qe=ph();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class mh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=ki("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gh=0;class Ca{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Qr(r[a].image)):s.push(Qr(r[a]))}else s=Qr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let _h=0;const jr=new G;class Et extends Zn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=vn,r=vn,s=Ct,a=Vn,l=Jt,c=Wt,o=Et.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Si(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jr).x}get height(){return this.source.getSize(jr).y}get depth(){return this.source.getSize(jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Sl;Et.DEFAULT_ANISOTROPY=1;const Va=class Va{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,o=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(o+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(o+1)/2,S=(d+1)/2,T=(p+1)/2,E=(u+h)/4,b=(f+M)/4,x=(g+m)/4;return L>S&&L>T?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=E/n,s=b/n):S>T?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=E/r,s=x/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=b/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-M)/y,this.z=(h-u)/y,this.w=Math.acos((o+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Va.prototype.isVector4=!0;let Ze=Va;class xh extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Et(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Or=class Or{constructor(e,t,n,r,s,a,l,c,o,u,f,h,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,o,u,f,h,d,g,M,m)}set(e,t,n,r,s,a,l,c,o,u,f,h,d,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Or().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),o=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=l*u,M=l*f;t[0]=c*u,t[4]=-c*f,t[8]=o,t[1]=d+g*o,t[5]=h-M*o,t[9]=-l*c,t[2]=M-h*o,t[6]=g+d*o,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,g=o*u,M=o*f;t[0]=h+M*l,t[4]=g*l-d,t[8]=a*o,t[1]=a*f,t[5]=a*u,t[9]=-l,t[2]=d*l-g,t[6]=M+h*l,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,g=o*u,M=o*f;t[0]=h-M*l,t[4]=-a*f,t[8]=g+d*l,t[1]=d+g*l,t[5]=a*u,t[9]=M-h*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=l*u,M=l*f;t[0]=c*u,t[4]=g*o-d,t[8]=h*o+M,t[1]=c*f,t[5]=M*o+h,t[9]=d*o-g,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*o,g=l*c,M=l*o;t[0]=c*u,t[4]=M-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-l*u,t[2]=-o*u,t[6]=d*f+g,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*c,d=a*o,g=l*c,M=l*o;t[0]=c*u,t[4]=-f,t[8]=o*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=l*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Sh)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),An.crossVectors(n,Ft),An.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),An.crossVectors(n,Ft)),An.normalize(),Ji.crossVectors(Ft,An),r[0]=An.x,r[4]=Ji.x,r[8]=Ft.x,r[1]=An.y,r[5]=Ji.y,r[9]=Ft.y,r[2]=An.z,r[6]=Ji.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],y=n[3],L=n[7],S=n[11],T=n[15],E=r[0],b=r[4],x=r[8],w=r[12],C=r[1],N=r[5],D=r[9],H=r[13],I=r[2],z=r[6],te=r[10],P=r[14],q=r[3],V=r[7],ee=r[11],J=r[15];return s[0]=a*E+l*C+c*I+o*q,s[4]=a*b+l*N+c*z+o*V,s[8]=a*x+l*D+c*te+o*ee,s[12]=a*w+l*H+c*P+o*J,s[1]=u*E+f*C+h*I+d*q,s[5]=u*b+f*N+h*z+d*V,s[9]=u*x+f*D+h*te+d*ee,s[13]=u*w+f*H+h*P+d*J,s[2]=g*E+M*C+m*I+p*q,s[6]=g*b+M*N+m*z+p*V,s[10]=g*x+M*D+m*te+p*ee,s[14]=g*w+M*H+m*P+p*J,s[3]=y*E+L*C+S*I+T*q,s[7]=y*b+L*N+S*z+T*V,s[11]=y*x+L*D+S*te+T*ee,s[15]=y*w+L*H+S*P+T*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],o=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],M=e[7],m=e[11],p=e[15],y=c*d-o*h,L=l*d-o*f,S=l*h-c*f,T=a*d-o*u,E=a*h-c*u,b=a*f-l*u;return t*(M*y-m*L+p*S)-n*(g*y-m*T+p*E)+r*(g*L-M*T+p*b)-s*(g*S-M*E+m*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],o=e[6],u=e[10];return t*(a*u-l*o)-n*(s*u-l*c)+r*(s*o-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],M=e[13],m=e[14],p=e[15],y=t*l-n*a,L=t*c-r*a,S=t*o-s*a,T=n*c-r*l,E=n*o-s*l,b=r*o-s*c,x=u*M-f*g,w=u*m-h*g,C=u*p-d*g,N=f*m-h*M,D=f*p-d*M,H=h*p-d*m,I=y*H-L*D+S*N+T*C-E*w+b*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(l*H-c*D+o*N)*z,e[1]=(r*D-n*H-s*N)*z,e[2]=(M*b-m*E+p*T)*z,e[3]=(h*E-f*b-d*T)*z,e[4]=(c*C-a*H-o*w)*z,e[5]=(t*H-r*C+s*w)*z,e[6]=(m*S-g*b-p*L)*z,e[7]=(u*b-h*S+d*L)*z,e[8]=(a*D-l*C+o*x)*z,e[9]=(n*C-t*D-s*x)*z,e[10]=(g*E-M*S+p*y)*z,e[11]=(f*S-u*E-d*y)*z,e[12]=(l*w-a*N-c*x)*z,e[13]=(t*N-n*w+r*x)*z,e[14]=(M*L-g*T-m*y)*z,e[15]=(u*T-f*L+h*y)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,o=s*a,u=s*l;return this.set(o*a+n,o*l-r*c,o*c+r*l,0,o*l+r*c,u*l+n,u*c-r*a,0,o*c-r*l,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,o=s+s,u=a+a,f=l+l,h=s*o,d=s*u,g=s*f,M=a*u,m=a*f,p=l*f,y=c*o,L=c*u,S=c*f,T=n.x,E=n.y,b=n.z;return r[0]=(1-(M+p))*T,r[1]=(d+S)*T,r[2]=(g-L)*T,r[3]=0,r[4]=(d-S)*E,r[5]=(1-(h+p))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+L)*b,r[9]=(m-y)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ti.set(r[0],r[1],r[2]).length();const l=ti.set(r[4],r[5],r[6]).length(),c=ti.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yt.copy(this);const o=1/a,u=1/l,f=1/c;return Yt.elements[0]*=o,Yt.elements[1]*=o,Yt.elements[2]*=o,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,s,a,l=ln,c=!1){const o=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,M;if(c)g=s/(a-s),M=a*s/(a-s);else if(l===ln)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(l===Dr)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=f,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=M,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=ln,c=!1){const o=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,M;if(c)g=1/(a-s),M=a/(a-s);else if(l===ln)g=-2/(a-s),M=-(a+s)/(a-s);else if(l===Dr)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=f,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=g,o[14]=M,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Or.prototype.isMatrix4=!0;let ct=Or;const ti=new G,Yt=new ct,Mh=new G(0,0,0),Sh=new G(1,1,1),An=new G,Ji=new G,Ft=new G,fo=new ct,po=new Ei;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],o=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eh=0;const mo=new G,ni=new Ei,un=new ct,Qi=new G,Ti=new G,yh=new G,bh=new Ei,go=new G(1,0,0),_o=new G(0,1,0),xo=new G(0,0,1),vo={type:"added"},Th={type:"removed"},ii={type:"childadded",child:null},es={type:"childremoved",child:null};class It extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new G,t=new Nn,n=new Ei,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Fe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ti,Qi,this.up):un.lookAt(Qi,Ti,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(un),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),ii.child=e,this.dispatchEvent(ii),ii.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Th),es.child=e,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,u=c.length;o<u;o++){const f=c[o];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),o=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(l){const c=[];for(const o in l){const u=l[o];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new G(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(o,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;o.inputState.pinching&&h>d+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&h<=d-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=Ra(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return qe.workingToColorSpace(At.copy(this),e),Math.round(Xe(At.r*255,0,255))*65536+Math.round(Xe(At.g*255,0,255))*256+Math.round(Xe(At.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let c,o;const u=(l+a)/2;if(l===a)c=0,o=0;else{const f=a-l;switch(o=u<=.5?f/(a+l):f/(2-a-l),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=o,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=vt){qe.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ji);const n=Oi(Rn.h,ji.h,t),r=Oi(Rn.s,ji.s,t),s=Oi(Rn.l,ji.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Be;Be.NAMES=Ll;class Dl extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new G,fn=new G,is=new G,dn=new G,ri=new G,si=new G,Mo=new G,rs=new G,ss=new G,as=new G,os=new Ze,ls=new Ze,cs=new Ze;class Zt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),fn.subVectors(n,t),is.subVectors(e,t);const a=$t.dot($t),l=$t.dot(fn),c=$t.dot(is),o=fn.dot(fn),u=fn.dot(is),f=a*o-l*l;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(o*c-l*u)*h,g=(a*u-l*c)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(l,dn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return os.setScalar(0),ls.setScalar(0),cs.setScalar(0),os.fromBufferAttribute(e,t),ls.fromBufferAttribute(e,n),cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(os,s.x),a.addScaledVector(ls,s.y),a.addScaledVector(cs,s.z),a}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),fn.subVectors(e,t),$t.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$t.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;ri.subVectors(r,n),si.subVectors(s,n),rs.subVectors(e,n);const c=ri.dot(rs),o=si.dot(rs);if(c<=0&&o<=0)return t.copy(n);ss.subVectors(e,r);const u=ri.dot(ss),f=si.dot(ss);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*o;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ri,a);as.subVectors(e,s);const d=ri.dot(as),g=si.dot(as);if(g>=0&&d<=g)return t.copy(s);const M=d*o-c*g;if(M<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(n).addScaledVector(si,l);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Mo.subVectors(s,r),l=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Mo,l);const p=1/(m+M+h);return a=M*p,l=h*p,t.copy(n).addScaledVector(ri,a).addScaledVector(si,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),tr.subVectors(this.max,wi),ai.subVectors(e.a,wi),oi.subVectors(e.b,wi),li.subVectors(e.c,wi),Cn.subVectors(oi,ai),Pn.subVectors(li,oi),On.subVectors(ai,li);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-On.z,On.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,On.z,0,-On.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-On.y,On.x,0];return!hs(t,ai,oi,li,tr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,ai,oi,li,tr))?!1:(nr.crossVectors(Cn,Pn),t=[nr.x,nr.y,nr.z],hs(t,ai,oi,li,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new G,new G,new G,new G,new G,new G,new G,new G],Kt=new G,er=new Xi,ai=new G,oi=new G,li=new G,Cn=new G,Pn=new G,On=new G,wi=new G,tr=new G,nr=new G,Bn=new G;function hs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bn.fromArray(i,s);const l=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),o=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,o,u),Math.min(c,o,u))>l)return!1}return!0}const mt=new G,ir=new Ve;let Ah=0;class En extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Il extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rh=new Xi,Ai=new G,us=new G;class La{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ai,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(us)),this.expandByPoint(Ai.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ch=0;const Vt=new ct,fs=new It,ci=new G,Ot=new Xi,Ri=new Xi,xt=new G;class en extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Ul:Il)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return fs.lookAt(e),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Ri.setFromBufferAttribute(l),this.morphTargetsRelative?(xt.addVectors(Ot.min,Ri.min),Ot.expandByPoint(xt),xt.addVectors(Ot.max,Ri.max),Ot.expandByPoint(xt)):(Ot.expandByPoint(Ri.min),Ot.expandByPoint(Ri.max))}Ot.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let o=0,u=l.count;o<u;o++)xt.fromBufferAttribute(l,o),c&&(ci.fromBufferAttribute(e,o),xt.add(ci)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let x=0;x<n.count;x++)l[x]=new G,c[x]=new G;const o=new G,u=new G,f=new G,h=new Ve,d=new Ve,g=new Ve,M=new G,m=new G;function p(x,w,C){o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),u.sub(o),f.sub(o),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),l[x].add(M),l[w].add(M),l[C].add(M),c[x].add(m),c[w].add(m),c[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const C=y[x],N=C.start,D=C.count;for(let H=N,I=N+D;H<I;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const L=new G,S=new G,T=new G,E=new G;function b(x){T.fromBufferAttribute(r,x),E.copy(T);const w=l[x];L.copy(w),L.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(E,w);const N=S.dot(c[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,N)}for(let x=0,w=y.length;x<w;++x){const C=y[x],N=C.start,D=C.count;for(let H=N,I=N+D;H<I;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,l=new G,c=new G,o=new G,u=new G,f=new G;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),l.add(u),c.add(u),o.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,o.x,o.y,o.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(l,c){const o=l.array,u=l.itemSize,f=l.normalized,h=new o.constructor(c.length*u);let d=0,g=0;for(let M=0,m=c.length;M<m;M++){l.isInterleavedBufferAttribute?d=c[M]*l.data.stride+l.offset:d=c[M]*u;for(let p=0;p<u;p++)h[g++]=o[d++]}return new En(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],o=e(c,n);t.setAttribute(l,o)}const s=this.morphAttributes;for(const l in s){const c=[],o=s[l];for(let u=0,f=o.length;u<f;u++){const h=o[u],d=e(h,n);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],u=[];for(let f=0,h=o.length;f<h;f++){const d=o[f];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const o in r){const u=r[o];this.setAttribute(o,u.clone(t))}const s=e.morphAttributes;for(const o in s){const u=[],f=s[o];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,u=a.length;o<u;o++){const f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ds=new G,Ph=new G,Lh=new Fe;class _n{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ds.subVectors(n,t).cross(Ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ds),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lh.getNormalMatrix(e),r=this.coplanarPoint(ds).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dh=0;class qi extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Ni,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new G,ps=new G,rr=new G,sr=new G;class Nl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ps.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(ps);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rr),l=sr.dot(this.direction),c=-sr.dot(rr),o=sr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*c-l,h=a*l-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*l)+h*(a*f+h+2*c)+o}else h=s,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;else h=-s,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;else h<=-g?(f=Math.max(0,-(-a*s+l)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+o):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+o):(f=Math.max(0,-(a*s+l)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+o);else h=a>0?-s:s,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ps).addScaledVector(rr,h),d}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c;const o=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return o>=0?(n=(e.min.x-h.x)*o,r=(e.max.x-h.x)*o):(n=(e.max.x-h.x)*o,r=(e.min.x-h.x)*o),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(l=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,l=this.direction,c=l.x,o=l.y,u=l.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,L=n.z-a.z,S=Math.abs(c),T=Math.abs(o),E=Math.abs(u);let b,x,w,C,N,D,H,I,z,te,P,q;if(S>=T&&S>=E?(w=c,D=f,z=g,q=p,c>=0?(b=o,x=u,C=h,N=d,H=M,I=m,te=y,P=L):(b=u,x=o,C=d,N=h,H=m,I=M,te=L,P=y)):T>=E?(w=o,D=h,z=M,q=y,o>=0?(b=u,x=c,C=d,N=f,H=m,I=g,te=L,P=p):(b=c,x=u,C=f,N=d,H=g,I=m,te=p,P=L)):(w=u,D=d,z=m,q=L,u>=0?(b=c,x=o,C=f,N=h,H=g,I=M,te=p,P=y):(b=o,x=c,C=h,N=f,H=M,I=g,te=y,P=p)),w===0)return null;const V=b/w,ee=x/w,J=1/w,se=C-V*D,ue=N-ee*D,Ne=H-V*z,Ae=I-ee*z,De=te-V*q,K=P-ee*q,j=De*Ae-K*Ne,_e=se*K-ue*De,Ee=Ne*ue-Ae*se;if(r){if(j<0||_e<0||Ee<0)return null}else if((j<0||_e<0||Ee<0)&&(j>0||_e>0||Ee>0))return null;const le=j+_e+Ee;if(le===0)return null;const Ue=J*(j*D+_e*z+Ee*q);return(le>0?Ue<0:Ue>0)?null:this.at(Ue/le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yi extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const So=new ct,zn=new Nl,ar=new La,Eo=new G,or=new G,lr=new G,cr=new G,ms=new G,hr=new G,yo=new G,ur=new G;class Ut extends It{constructor(e=new en,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){hr.set(0,0,0);for(let c=0,o=s.length;c<o;c++){const u=l[c],f=s[c];u!==0&&(ms.fromBufferAttribute(f,e),a?hr.addScaledVector(ms,u):hr.addScaledVector(ms.sub(t),u))}t.add(hr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(ar.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ar,Eo)===null||zn.origin.distanceToSquared(Eo)>(e.far-e.near)**2))&&(So.copy(s).invert(),zn.copy(e.ray).applyMatrix4(So),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,o=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),L=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,T=L;S<T;S+=3){const E=l.getX(S),b=l.getX(S+1),x=l.getX(S+2);r=fr(this,p,e,n,o,u,f,E,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const y=l.getX(m),L=l.getX(m+1),S=l.getX(m+2);r=fr(this,a,e,n,o,u,f,y,L,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),L=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,T=L;S<T;S+=3){const E=S,b=S+1,x=S+2;r=fr(this,p,e,n,o,u,f,E,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const y=m,L=m+1,S=m+2;r=fr(this,a,e,n,o,u,f,y,L,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ih(i,e,t,n,r,s,a,l){let c;if(e.side===Nt?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,e.side===Yn,l),c===null)return null;ur.copy(l),ur.applyMatrix4(i.matrixWorld);const o=t.ray.origin.distanceTo(ur);return o<t.near||o>t.far?null:{distance:o,point:ur.clone(),object:i}}function fr(i,e,t,n,r,s,a,l,c,o){i.getVertexPosition(l,or),i.getVertexPosition(c,lr),i.getVertexPosition(o,cr);const u=Ih(i,e,t,n,or,lr,cr,yo);if(u){const f=new G;Zt.getBarycoord(yo,or,lr,cr,f),r&&(u.uv=Zt.getInterpolatedAttribute(r,l,c,o,f,new Ve)),s&&(u.uv1=Zt.getInterpolatedAttribute(s,l,c,o,f,new Ve)),a&&(u.normal=Zt.getInterpolatedAttribute(a,l,c,o,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:c,c:o,normal:new G,materialIndex:0};Zt.getNormal(or,lr,cr,h.normal),u.face=h,u.barycoord=f}return u}class Uh extends Et{constructor(e=null,t=1,n=1,r,s,a,l,c,o=St,u=St,f,h){super(null,a,l,c,o,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hn=new La,Nh=new Ve(.5,.5),dr=new G;class Fl{constructor(e=new _n,t=new _n,n=new _n,r=new _n,s=new _n,a=new _n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],o=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],M=s[9],m=s[10],p=s[11],y=s[12],L=s[13],S=s[14],T=s[15];if(r[0].setComponents(o-a,d-u,p-g,T-y).normalize(),r[1].setComponents(o+a,d+u,p+g,T+y).normalize(),r[2].setComponents(o+l,d+f,p+M,T+L).normalize(),r[3].setComponents(o-l,d-f,p-M,T-L).normalize(),n)r[4].setComponents(c,h,m,S).normalize(),r[5].setComponents(o-c,d-h,p-m,T-S).normalize();else if(r[4].setComponents(o-c,d-h,p-m,T-S).normalize(),t===ln)r[5].setComponents(o+c,d+h,p+m,T+S).normalize();else if(t===Dr)r[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Nh.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(dr.x=r.normal.x>0?e.max.x:e.min.x,dr.y=r.normal.y>0?e.max.y:e.min.y,dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ol extends Et{constructor(e=[],t=$n,n,r,s,a,l,c,o,u){super(e,t,n,r,s,a,l,c,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vi extends Et{constructor(e,t,n,r,s,a,l,c,o){super(e,t,n,r,s,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi extends Et{constructor(e,t,n=hn,r,s,a,l=St,c=St,o,u=yn,f=1){if(u!==yn&&u!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,l,c,u,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fh extends Wi{constructor(e,t=hn,n=$n,r,s,a=St,l=St,c,o=yn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,l,c,o),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bl extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yi extends en{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],o=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function g(M,m,p,y,L,S,T,E,b,x,w){const C=S/b,N=T/x,D=S/2,H=T/2,I=E/2,z=b+1,te=x+1;let P=0,q=0;const V=new G;for(let ee=0;ee<te;ee++){const J=ee*N-H;for(let se=0;se<z;se++){const ue=se*C-D;V[M]=ue*y,V[m]=J*L,V[p]=I,o.push(V.x,V.y,V.z),V[M]=0,V[m]=0,V[p]=E>0?1:-1,u.push(V.x,V.y,V.z),f.push(se/b),f.push(1-ee/x),P+=1}}for(let ee=0;ee<x;ee++)for(let J=0;J<b;J++){const se=h+J+z*ee,ue=h+J+z*(ee+1),Ne=h+(J+1)+z*(ee+1),Ae=h+(J+1)+z*ee;c.push(se,ue,Ae),c.push(ue,Ne,Ae),q+=6}l.addGroup(d,q,w),d+=q,h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ir extends en{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const o=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const M=[],m=n/2;let p=0;y(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function y(){const S=new G,T=new G;let E=0;const b=(t-e)/n;for(let x=0;x<=s;x++){const w=[],C=x/s,N=C*(t-e)+e;for(let D=0;D<=r;D++){const H=D/r,I=H*c+l,z=Math.sin(I),te=Math.cos(I);T.x=N*z,T.y=-C*n+m,T.z=N*te,f.push(T.x,T.y,T.z),S.set(z,b,te).normalize(),h.push(S.x,S.y,S.z),d.push(H,1-C),w.push(g++)}M.push(w)}for(let x=0;x<r;x++)for(let w=0;w<s;w++){const C=M[w][x],N=M[w+1][x],D=M[w+1][x+1],H=M[w][x+1];(e>0||w!==0)&&(u.push(C,N,H),E+=3),(t>0||w!==s-1)&&(u.push(N,D,H),E+=3)}o.addGroup(p,E,0),p+=E}function L(S){const T=g,E=new Ve,b=new G;let x=0;const w=S===!0?e:t,C=S===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),g++;const N=g;for(let D=0;D<=r;D++){const I=D/r*c+l,z=Math.cos(I),te=Math.sin(I);b.x=w*te,b.y=m*C,b.z=w*z,f.push(b.x,b.y,b.z),h.push(0,C,0),E.x=z*.5+.5,E.y=te*.5*C+.5,d.push(E.x,E.y),g++}for(let D=0;D<r;D++){const H=T+D,I=N+D;S===!0?u.push(I,I+1,H):u.push(I+1,I,H),x+=3}o.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),o=l+1,u=c+1,f=e/l,h=t/c,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let L=0;L<o;L++){const S=L*f-s;g.push(S,-y,0),M.push(0,0,1),m.push(L/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<l;y++){const L=y+o*p,S=y+o*(p+1),T=y+1+o*(p+1),E=y+1+o*p;d.push(L,S,E),d.push(S,T,E)}this.setIndex(d),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.widthSegments,e.heightSegments)}}function Mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(bo(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(bo(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Mi(i[t]);for(const r in n)e[r]=n[r]}return e}function bo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Bh={clone:Mi,merge:Dt};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class kh extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gh extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vh extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wh extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(To(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!To(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function To(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Xh{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,c;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,l),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return o.push(u,f),this},this.removeHandler=function(u){const f=o.indexOf(u);return f!==-1&&o.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=o.length;f<h;f+=2){const d=o[f],g=o[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qh=new Xh;class Da{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Da.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi=new WeakMap;class Yh extends Da{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=gs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=hi.get(a);f===void 0&&(f=[],hi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const l=ki("img");function c(){u(),t&&t(this);const f=hi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}hi.delete(this),s.manager.itemEnd(e)}function o(f){u(),r&&r(f),gs.remove(`image:${e}`);const h=hi.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}hi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",o,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),gs.add(`image:${e}`,l),s.manager.itemStart(e),l.src=e,l}}class $h extends Da{constructor(e){super(e)}load(e,t,n,r){const s=new Et,a=new Yh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Kh extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zh extends Kh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pr=new G,mr=new Ei,rn=new G;class Hl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pr,mr,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pr,mr,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new G,wo=new Ve,Ao=new Ve;class kt extends Hl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,wo,Ao),t.subVectors(Ao,wo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/o,r*=a.width/c,n*=a.height/o}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ia extends Hl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=-90,fi=1;class Jh extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(ui,fi,e,t);r.layers=this.layers,this.add(r);const s=new kt(ui,fi,e,t);s.layers=this.layers,this.add(s);const a=new kt(ui,fi,e,t);a.layers=this.layers,this.add(a);const l=new kt(ui,fi,e,t);l.layers=this.layers,this.add(l);const c=new kt(ui,fi,e,t);c.layers=this.layers,this.add(c);const o=new kt(ui,fi,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(const o of t)this.remove(o);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,o,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qh extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ro=new ct;class kl{constructor(e,t,n=0,r=1/0){this.ray=new Nl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ro.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(e,t=!0,n=[]){return da(e,this,n,t),n.sort(Co),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)da(e[r],this,n,t);return n.sort(Co),n}}function Co(i,e){return i.distance-e.distance}function da(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,l=s.length;a<l;a++)da(s[a],e,t,!0)}}const Wa=class Wa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Wa.prototype.isMatrix2=!0;let Po=Wa;function Lo(i,e,t,n){const r=jh(n);switch(t){case wl:return i*e;case Rl:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case Kn:return i*e*2/r.components*r.byteLength;case ba:return i*e*2/r.components*r.byteLength;case Al:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case Ta:return i*e*4/r.components*r.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Os:case zs:return Math.max(i,16)*Math.max(e,8)/4;case Fs:case Bs:return Math.max(i,8)*Math.max(e,8)/2;case Hs:case ks:case Vs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Rr:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case js:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case aa:case oa:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cr:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jh(i){switch(i){case Wt:case El:return{byteLength:1,components:1};case zi:case yl:case jt:return{byteLength:2,components:1};case Sa:case Ea:return{byteLength:2,components:4};case hn:case Ma:case on:return{byteLength:4,components:1};case bl:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function eu(i){const e=new WeakMap;function t(l,c){const o=l.array,u=l.usage,f=o.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,o,u),l.onUploadCallback();let d;if(o instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=i.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,o){const u=c.array,f=c.updateRanges;if(i.bindBuffer(o,l),f.length===0)i.bufferSubData(o,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];i.bufferSubData(o,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:r,remove:s,update:a}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:tu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:su,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:fu,bsdfs:du,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:Eu,color_vertex:yu,common:bu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Au,displacementmap_vertex:Ru,emissivemap_fragment:Cu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:Hu,fog_pars_fragment:ku,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:$u,lights_toon_pars_fragment:Ku,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:ju,lights_fragment_begin:ef,lights_fragment_maps:tf,lights_fragment_end:nf,lightprobes_pars_fragment:rf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:df,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:_f,morphtarget_pars_vertex:xf,morphtarget_vertex:vf,normal_fragment_begin:Mf,normal_fragment_maps:Sf,normal_pars_fragment:Ef,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Cf,opaque_fragment:Pf,packing:Lf,premultiplied_alpha_fragment:Df,project_vertex:If,dithering_fragment:Uf,dithering_pars_fragment:Nf,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:Hf,shadowmask_pars_fragment:kf,skinbase_vertex:Gf,skinning_pars_vertex:Vf,skinning_vertex:Wf,skinnormal_vertex:Xf,specularmap_fragment:qf,specularmap_pars_fragment:Yf,tonemapping_fragment:$f,tonemapping_pars_fragment:Kf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:jf,uv_vertex:ed,worldpos_vertex:td,background_vert:nd,background_frag:id,backgroundCube_vert:rd,backgroundCube_frag:sd,cube_vert:ad,cube_frag:od,depth_vert:ld,depth_frag:cd,distance_vert:hd,distance_frag:ud,equirect_vert:fd,equirect_frag:dd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:xd,meshlambert_frag:vd,meshmatcap_vert:Md,meshmatcap_frag:Sd,meshnormal_vert:Ed,meshnormal_frag:yd,meshphong_vert:bd,meshphong_frag:Td,meshphysical_vert:wd,meshphysical_frag:Ad,meshtoon_vert:Rd,meshtoon_frag:Cd,points_vert:Pd,points_frag:Ld,shadow_vert:Dd,shadow_frag:Id,sprite_vert:Ud,sprite_frag:Nd},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},an={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};an.physical={uniforms:Dt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const gr={r:0,b:0,g:0},Fd=new ct,Vl=new Fe;Vl.set(-1,0,0,0,1,0,0,0,1);function Od(i,e,t,n,r,s){const a=new Be(0);let l=r===!0?0:1,c,o,u=null,f=0,h=null;function d(y){let L=y.isScene===!0?y.background:null;if(L&&L.isTexture){const S=y.backgroundBlurriness>0;L=e.get(L,S)}return L}function g(y){let L=!1;const S=d(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),L=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,L){const S=d(L);S&&(S.isCubeTexture||S.mapping===Br)?(o===void 0&&(o=new Ut(new yi(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Mi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=S,o.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler(L.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Vl),o.material.toneMapped=qe.getTransfer(S.colorSpace)!==tt,(u!==S||f!==S.version||h!==i.toneMapping)&&(o.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ut(new Jn(2,2),new yt({name:"BackgroundMaterial",uniforms:Mi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=qe.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,L){y.getRGB(gr,zl(i)),t.buffers.color.setClear(gr.r,gr.g,gr.b,L,s)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,L=1){a.set(y),l=L,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:M,dispose:p}}function Bd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function l(N,D,H,I,z){let te=!1;const P=f(N,I,H,D);s!==P&&(s=P,o(s.object)),te=d(N,I,H,z),te&&g(N,I,H,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(N,D,H,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function o(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,D,H,I){const z=I.wireframe===!0;let te=n[D.id];te===void 0&&(te={},n[D.id]=te);const P=N.isInstancedMesh===!0?N.id:0;let q=te[P];q===void 0&&(q={},te[P]=q);let V=q[H.id];V===void 0&&(V={},q[H.id]=V);let ee=V[z];return ee===void 0&&(ee=h(c()),V[z]=ee),ee}function h(N){const D=[],H=[],I=[];for(let z=0;z<t;z++)D[z]=0,H[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,D,H,I){const z=s.attributes,te=D.attributes;let P=0;const q=H.getAttributes();for(const V in q)if(q[V].location>=0){const J=z[V];let se=te[V];if(se===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;P++}return s.attributesNum!==P||s.index!==I}function g(N,D,H,I){const z={},te=D.attributes;let P=0;const q=H.getAttributes();for(const V in q)if(q[V].location>=0){let J=te[V];J===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),z[V]=se,P++}s.attributes=z,s.attributesNum=P,s.index=I}function M(){const N=s.newAttributes;for(let D=0,H=N.length;D<H;D++)N[D]=0}function m(N){p(N,0)}function p(N,D){const H=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;H[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),z[N]!==D&&(i.vertexAttribDivisor(N,D),z[N]=D)}function y(){const N=s.newAttributes,D=s.enabledAttributes;for(let H=0,I=D.length;H<I;H++)D[H]!==N[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function L(N,D,H,I,z,te,P){P===!0?i.vertexAttribIPointer(N,D,H,z,te):i.vertexAttribPointer(N,D,H,I,z,te)}function S(N,D,H,I){M();const z=I.attributes,te=H.getAttributes(),P=D.defaultAttributeValues;for(const q in te){const V=te[q];if(V.location>=0){let ee=z[q];if(ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const J=ee.normalized,se=ee.itemSize,ue=e.get(ee);if(ue===void 0)continue;const Ne=ue.buffer,Ae=ue.type,De=ue.bytesPerElement,K=Ae===i.INT||Ae===i.UNSIGNED_INT||ee.gpuType===Ma;if(ee.isInterleavedBufferAttribute){const j=ee.data,_e=j.stride,Ee=ee.offset;if(j.isInstancedInterleavedBuffer){for(let le=0;le<V.locationSize;le++)p(V.location+le,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let le=0;le<V.locationSize;le++)L(V.location+le,se/V.locationSize,Ae,J,_e*De,(Ee+se/V.locationSize*le)*De,K)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)p(V.location+j,ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let j=0;j<V.locationSize;j++)L(V.location+j,se/V.locationSize,Ae,J,se*De,se/V.locationSize*j*De,K)}}else if(P!==void 0){const J=P[q];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}y()}function T(){w();for(const N in n){const D=n[N];for(const H in D){const I=D[H];for(const z in I){const te=I[z];for(const P in te)u(te[P].object),delete te[P];delete I[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;const D=n[N.id];for(const H in D){const I=D[H];for(const z in I){const te=I[z];for(const P in te)u(te[P].object),delete te[P];delete I[z]}}delete n[N.id]}function b(N){for(const D in n){const H=n[D];for(const I in H){const z=H[I];if(z[N.id]===void 0)continue;const te=z[N.id];for(const P in te)u(te[P].object),delete te[P];delete z[N.id]}}}function x(N){for(const D in n){const H=n[D],I=N.isInstancedMesh===!0?N.id:0,z=H[I];if(z!==void 0){for(const te in z){const P=z[te];for(const q in P)u(P[q].object),delete P[q];delete z[te]}delete H[I],Object.keys(H).length===0&&delete n[D]}}}function w(){C(),a=!0,s!==r&&(s=r,o(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function zd(i,e,t){let n;function r(c){n=c}function s(c,o){i.drawArrays(n,c,o),t.update(o,n,1)}function a(c,o,u){u!==0&&(i.drawArraysInstanced(n,c,o,u),t.update(o,n,u))}function l(c,o,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,o,0,u);let h=0;for(let d=0;d<u;d++)h+=o[d];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function Hd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Jt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(b){const x=b===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Wt&&b!==on&&!x&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const u=c(o);u!==o&&(Ie("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:L,maxFragmentUniforms:S,maxSamples:T,samples:E}}function kd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new _n,l=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):o();else{const y=s?0:n,L=y*4;let S=p.clippingState||null;c.value=S,S=u(g,h,L,d);for(let T=0;T!==L;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=d+M*4,y=h.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,S=d;L!==M;++L,S+=4)a.copy(f[L]).applyMatrix4(y,l),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const gi=4,Gd=6,Vd=20,Wd=256,Ci=new Ia,Do=new Be;let _s=null,xs=0,vs=0,Ms=!1;const Xd=new G,kn=new G;class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:l=Xd}=s;_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,xs,vs),this._renderer.xr.enabled=Ms,e.scissorTest=!1,di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:jt,format:Jt,colorSpace:Pr,depthBuffer:!1},r=Uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qd(s)),this._blurMaterial=$d(s,e,t),this._ggxMaterial=Yd(s,e,t)}return r}_compileMaterial(e){const t=new Ut(new en,e);this._renderer.compile(t,Ci)}_sceneToCubeUV(e,t,n,r,s){const c=new kt(90,1,t,n),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Do),f.toneMapping=cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new yi,new Yi({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Do),p=!0);for(let L=0;L<6;L++){const S=L%3;S===0?(c.up.set(0,o[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[L],s.y,s.z)):S===1?(c.up.set(0,0,o[L]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[L],s.z)):(c.up.set(0,o[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[L]));const T=this._cubeSize;di(r,S*T,L>2?T:0,T,T),f.setRenderTarget(r),p&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===$n||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;di(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ci)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const c=a.uniforms,o=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(o*o-u*u),h=o*1.25,d=f*h,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-gi?n-g+gi:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,di(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(l,Ci),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,di(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(l,Ci)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;const o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=s,o.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-gi?r-this._lodMax+gi:0),h=4*(this._cubeSize-u);di(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Ci)}}function qd(i){const e=[],t=[];let n=i;const r=i-gi+1+Gd;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const l=1/(a-2),c=-l,o=1+l,u=[c,c,o,c,o,o,c,c,o,o,c,o],f=6,h=6,d=3,g=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,L=p>2?0:-1,S=[y,L,0,y+2/3,L,0,y+2/3,L+1,0,y,L,0,y+2/3,L+1,0,y,L+1,0];g.set(S,d*h*p);for(let T=0;T<h;T++){const E=u[T*2]*2-1,b=u[T*2+1]*2-1;p===0?kn.set(1,b,E):p===1?kn.set(-E,1,-b):p===2?kn.set(-E,b,1):p===3?kn.set(-1,b,-E):p===4?kn.set(-E,-1,b):kn.set(E,b,-1),kn.toArray(M,(p*h+T)*d)}}const m=new en;m.setAttribute("position",new En(g,d)),m.setAttribute("outputDirection",new En(M,d)),t.push(new Ut(m,null)),n>gi&&n--}return{lodMeshes:t,sizeLods:e}}function Uo(i,e,t){const n=new Xt(i,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yd(i,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $d(i,e,t){return new yt({name:"SphericalGaussianBlur",defines:{SAMPLES:Vd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function No(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Fo(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wl extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ol(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yi(5,5,5),s=new yt({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Mn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),l=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Ct),new Jh(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Kd(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===qr||d===Yr)if(e.has(h)){const g=e.get(h).texture;return l(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Wl(g.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",o),l(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===qr||d===Yr,M=d===$n||d===vi;if(g||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Io(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new Io(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function l(h,d){return d===qr?h.mapping=$n:d===Yr&&(h.mapping=vi),h}function c(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function o(h){const d=h.target;d.removeEventListener("dispose",o);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Zd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_i("WebGLRenderer: "+n+" extension not supported."),r}}}function Jd(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function o(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const y=d.array;M=d.version;for(let L=0,S=y.length;L<S;L+=3){const T=y[L+0],E=y[L+1],b=y[L+2];h.push(T,E,E,b,b,T)}}else{const y=g.array;M=g.version;for(let L=0,S=y.length/3-1;L<S;L+=3){const T=L+0,E=L+1,b=L+2;h.push(T,E,E,b,b,T)}}const m=new(g.count>=65535?Ul:Il)(h,1);m.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&o(f)}else o(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:u}}function Qd(i,e,t){let n;function r(f){n=f}let s,a;function l(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function o(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];t.update(M,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=u}function jd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ep(i,e,t){const n=new WeakMap,r=new Ze;function s(a,l,c){const o=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(l);if(h===void 0||h.count!==f){let C=function(){x.dispose(),n.delete(l),l.removeEventListener("dispose",C)};var d=C;h!==void 0&&h.texture.dispose();const g=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let T=l.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*E*4*f),x=new Pl(b,T,E,f);x.type=on,x.needsUpdate=!0;const w=S*4;for(let N=0;N<f;N++){const D=p[N],H=y[N],I=L[N],z=T*E*4*N;for(let te=0;te<D.count;te++){const P=te*w;g===!0&&(r.fromBufferAttribute(D,te),b[z+P+0]=r.x,b[z+P+1]=r.y,b[z+P+2]=r.z,b[z+P+3]=0),M===!0&&(r.fromBufferAttribute(H,te),b[z+P+4]=r.x,b[z+P+5]=r.y,b[z+P+6]=r.z,b[z+P+7]=0),m===!0&&(r.fromBufferAttribute(I,te),b[z+P+8]=r.x,b[z+P+9]=r.y,b[z+P+10]=r.z,b[z+P+11]=I.itemSize===4?r.w:1)}}h={count:f,texture:x,size:new Ve(T,E)},n.set(l,h),l.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<o.length;m++)g+=o[m];const M=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function tp(i,e,t,n,r){let s=new WeakMap;function a(o){const u=r.render.frame,f=o.geometry,h=e.get(o,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),s.get(o)!==u&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),s.set(o,u))),o.isSkinnedMesh){const d=o.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function l(){s=new WeakMap}function c(o){const u=o.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const np={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[xl]:"ACES_FILMIC_TONE_MAPPING",[Ml]:"AGX_TONE_MAPPING",[va]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function ip(i,e,t,n,r,s){const a=new Xt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const o=new en;o.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const u=new kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(o,u),h=new Ia(-1,1,1,-1,0,1);let d=null,g=null,M=!1,m,p=null,y=[],L=!1;this.setSize=function(S,T){a.setSize(S,T),l!==null&&l.setSize(S,T),c!==null&&c.setSize(S,T);for(let E=0;E<y.length;E++){const b=y[E];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){y=S,L=y.length>0&&y[0].isRenderPass===!0;const T=a.width,E=a.height;y.length>0&&l===null&&(l=new Xt(T,E,{type:jt,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(T,E,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<y.length;b++){const x=y[b];x.setSize&&x.setSize(T,E)}},this.begin=function(S,T){if(M||S.toneMapping===cn&&y.length===0)return!1;if(p=T,T!==null){const E=T.width,b=T.height;(a.width!==E||a.height!==b)&&this.setSize(E,b)}return L===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=cn,!0},this.hasRenderPass=function(){return L},this.end=function(S,T){S.toneMapping=m,M=!0;let E=a,b=l;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(S,b,E,T),w.needsSwap!==!1&&(E=b,b=b===l?c:l))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},qe.getTransfer(d)===tt&&(u.defines.SRGB_TRANSFER="");const x=np[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),u.dispose()}}const Xl=new Et,pa=new Wi(1,1),ql=new Pl,Yl=new vh,$l=new Ol,Oo=[],Bo=[],zo=new Float32Array(16),Ho=new Float32Array(9),ko=new Float32Array(4);function bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oo[r];if(s===void 0&&(s=new Float32Array(r),Oo[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hr(i,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function lp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ko.set(n),i.uniformMatrix2fv(this.addr,!1,ko),_t(t,n)}}function cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ho.set(n),i.uniformMatrix3fv(this.addr,!1,Ho),_t(t,n)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;zo.set(n),i.uniformMatrix4fv(this.addr,!1,zo),_t(t,n)}}function up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function vp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pa.compareFunction=t.isReversedDepthBuffer()?Aa:wa,s=pa):s=Xl,t.setTexture2D(e||s,r)}function Mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yl,r)}function Sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$l,r)}function Ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ql,r)}function yp(i){switch(i){case 5126:return rp;case 35664:return sp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return dp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(i,e){i.uniform1fv(this.addr,e)}function Tp(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function wp(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ap(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rp(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cp(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pp(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lp(i,e){i.uniform1iv(this.addr,e)}function Dp(i,e){i.uniform2iv(this.addr,e)}function Ip(i,e){i.uniform3iv(this.addr,e)}function Up(i,e){i.uniform4iv(this.addr,e)}function Np(i,e){i.uniform1uiv(this.addr,e)}function Fp(i,e){i.uniform2uiv(this.addr,e)}function Op(i,e){i.uniform3uiv(this.addr,e)}function Bp(i,e){i.uniform4uiv(this.addr,e)}function zp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=pa:a=Xl;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function Hp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yl,s[a])}function kp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$l,s[a])}function Gp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ql,s[a])}function Vp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return wp;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Dp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}}class Xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function Go(i,e){i.seq.push(e),i.map[e.id]=e}function Yp(i,e,t){const n=i.name,r=n.length;for(Ss.lastIndex=0;;){const s=Ss.exec(n),a=Ss.lastIndex;let l=s[1];const c=s[2]==="]",o=s[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===r){Go(t,o===void 0?new Wp(l,i,e):new Xp(l,i,e));break}else{let f=t.map[l];f===void 0&&(f=new qp(l),Go(t,f)),t=f}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Yp(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Vo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $p=37297;let Kp=0;function Zp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Wo=new Fe;function Jp(i){qe._getMatrix(Wo,qe.workingColorSpace,i);const e=`mat3( ${Wo.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Zp(i.getShaderSource(e),l)}else return s}function Qp(i,e){const t=Jp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jp={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[xl]:"ACESFilmic",[Ml]:"AgX",[va]:"Neutral",[vl]:"Custom"};function em(i,e){const t=jp[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new G;function tm(){qe.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function im(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Di(i){return i!==""}function qo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(sm,om)}const am=new Map;function om(i,e){let t=Ge[e];if(t===void 0){const n=am.get(e);if(n!==void 0)t=Ge[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ma(t)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(i){return i.replace(lm,cm)}function cm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ko(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hm={[Mr]:"SHADOWMAP_TYPE_PCF",[Li]:"SHADOWMAP_TYPE_VSM"};function um(i){return hm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fm={[$n]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function dm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const pm={[vi]:"ENVMAP_MODE_REFRACTION"};function mm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gm={[pl]:"ENVMAP_BLENDING_MULTIPLY",[Uc]:"ENVMAP_BLENDING_MIX",[Nc]:"ENVMAP_BLENDING_ADD"};function _m(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gm[i.combine]||"ENVMAP_BLENDING_NONE"}function xm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=um(t),o=dm(t),u=mm(t),f=_m(t),h=xm(t),d=nm(t),g=im(s),M=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Di).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Di).join(`
`),p.length>0&&(p+=`
`)):(m=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),p=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==cn?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Qp("linearToOutputTexel",t.outputColorSpace),tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),a=ma(a),a=qo(a,t),a=Yo(a,t),l=ma(l),l=qo(l,t),l=Yo(l,t),a=$o(a),l=$o(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const L=y+m+a,S=y+p+l,T=Vo(r,r.VERTEX_SHADER,L),E=Vo(r,r.FRAGMENT_SHADER,S);r.attachShader(M,T),r.attachShader(M,E),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(N){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(M)||"",H=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(E)||"",z=D.trim(),te=H.trim(),P=I.trim();let q=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,T,E);else{const ee=Xo(r,T,"vertex"),J=Xo(r,E,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+ee+`
`+J)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(te===""||P==="")&&(V=!1);V&&(N.diagnostics={runnable:q,programLog:z,vertexShader:{log:te,prefix:m},fragmentShader:{log:P,prefix:p}})}r.deleteShader(T),r.deleteShader(E),x=new Tr(r,M),w=rm(r,M)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(M,$p)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}let Mm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Em(e),t.set(e,n)),n}}class Em{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}}function ym(i){return i===Kn||i===Rr||i===Cr}function bm(i,e,t,n,r,s){const a=new Pa,l=new Sm,c=new Set,o=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,w,C,N,D,H){const I=N.fog,z=D.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||te,P),V=q&&q.mapping===Br?q.image.height:null,ee=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=J!==void 0?J.length:0;let ue=0;z.morphAttributes.position!==void 0&&(ue=1),z.morphAttributes.normal!==void 0&&(ue=2),z.morphAttributes.color!==void 0&&(ue=3);let Ne,Ae,De,K;if(ee){const st=an[ee];Ne=st.vertexShader,Ae=st.fragmentShader}else{Ne=x.vertexShader,Ae=x.fragmentShader;const st=l.getVertexShaderStage(x),je=l.getFragmentShaderStage(x);l.update(x,st,je),De=st.id,K=je.id}const j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,Ue=!!x.map,ht=!!x.matcap,ze=!!q,Pe=!!x.aoMap,Qe=!!x.lightMap,He=!!x.bumpMap&&x.wireframe===!1,Je=!!x.normalMap,dt=!!x.displacementMap,bt=!!x.emissiveMap,rt=!!x.metalnessMap,lt=!!x.roughnessMap,O=x.anisotropy>0,ut=x.clearcoat>0,Ke=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,R=x.transmission>0,U=O&&!!x.anisotropyMap,Z=ut&&!!x.clearcoatMap,Q=ut&&!!x.clearcoatNormalMap,Y=ut&&!!x.clearcoatRoughnessMap,ne=_&&!!x.iridescenceMap,ae=_&&!!x.iridescenceThicknessMap,ve=k&&!!x.sheenColorMap,oe=k&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Re=!!x.specularColorMap,Le=!!x.specularIntensityMap,Oe=R&&!!x.transmissionMap,B=R&&!!x.thicknessMap,fe=!!x.gradientMap,ie=!!x.alphaMap,de=x.alphaTest>0,xe=!!x.alphaHash,re=!!x.extensions;let Ce=cn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Te={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:Ae,defines:x.defines,customVertexShaderID:De,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:ht,envMap:ze,envMapMode:ze&&q.mapping,envMapCubeUVHeight:V,aoMap:Pe,lightMap:Qe,bumpMap:He,normalMap:Je,displacementMap:dt,emissiveMap:bt,normalMapObjectSpace:Je&&x.normalMapType===Bc,normalMapTangentSpace:Je&&x.normalMapType===fa,packedNormalMap:Je&&x.normalMapType===fa&&ym(x.normalMap.format),metalnessMap:rt,roughnessMap:lt,anisotropy:O,anisotropyMap:U,clearcoat:ut,clearcoatMap:Z,clearcoatNormalMap:Q,clearcoatRoughnessMap:Y,dispersion:Ke,retroreflection:A,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:ve,sheenRoughnessMap:oe,specularMap:ce,specularColorMap:Re,specularIntensityMap:Le,transmission:R,transmissionMap:Oe,thicknessMap:B,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Ni&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:de,alphaHash:xe,combine:x.combine,mapUv:Ue&&g(x.map.channel),aoMapUv:Pe&&g(x.aoMap.channel),lightMapUv:Qe&&g(x.lightMap.channel),bumpMapUv:He&&g(x.bumpMap.channel),normalMapUv:Je&&g(x.normalMap.channel),displacementMapUv:dt&&g(x.displacementMap.channel),emissiveMapUv:bt&&g(x.emissiveMap.channel),metalnessMapUv:rt&&g(x.metalnessMap.channel),roughnessMapUv:lt&&g(x.roughnessMap.channel),anisotropyMapUv:U&&g(x.anisotropyMap.channel),clearcoatMapUv:Z&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Re&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||O),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ue||ie),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){const w=d[x.type];let C;if(w){const N=an[w];C=Bh.clone(N.uniforms)}else C=x.uniforms;return C}function S(x,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new vm(i,w,x,r),o.push(C),u.set(w,C)),C}function T(x){if(--x.usedTimes===0){const w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function b(){l.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:L,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:o,dispose:b}}function Tm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function l(h,d,g,M,m,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function c(h,d,g,M,m,p,y){y.reversedDepth===!0&&(m=-m);const L=l(h,d,g,M,m,p);g.transmission>0?n.push(L):g.transparent===!0?r.push(L):t.push(L)}function o(h,d,g,M,m,p){const y=l(h,d,g,M,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||wm),n.length>1&&n.sort(d||Zo),r.length>1&&r.sort(d||Zo)}function f(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:o,finish:f,sort:u}}function Am(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Jo,i.set(n,[a])):r>=s.length?(a=new Jo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Be};break;case"SpotLight":t={position:new G,direction:new G,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pm=0;function Lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dm(i){const e=new Rm,t=Cm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new G);const r=new G,s=new ct,a=new ct;function l(o){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,y=0,L=0,S=0,T=0,E=0,b=0,x=0,w=0,C=0;o.sort(Lm);for(let D=0,H=o.length;D<H;D++){const I=o[D],z=I.color,te=I.intensity,P=I.distance;let q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Kn?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*te,f+=z.g*te,h+=z.b*te;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],te);C++}else if(I.isSunLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,J=t.get(I);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=q;const se=ee.getViewportCount();for(let ue=0;ue<se;ue++)n.sunShadowMatrix[M+ue]=ee.getMatrix(ue),n.sunShadowCascade[M+ue]=ee._cascadeData[ue];M+=se,g++}n.sun[d]=V,d++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,J=t.get(I);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=V,m++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar(te),V.distance=P,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[y]=V;const ee=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,ee.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[y]=ee.matrix,I.castShadow){const J=t.get(I);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=q,b++}y++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(z).multiplyScalar(te),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[L]=V,L++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const ee=I.shadow,J=t.get(I);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,J.shadowCameraNear=ee.camera.near,J.shadowCameraFar=ee.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(te),V.groundColor.copy(I.groundColor).multiplyScalar(te),n.hemi[S]=V,S++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==y||N.rectAreaLength!==L||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==b||N.numSpotMaps!==x||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=L,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=y,N.rectAreaLength=L,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=b,N.numSpotMaps=x,N.numLightProbes=C,n.version=Pm++)}function c(o,u){let f=0,h=0,d=0,g=0,M=0,m=0;const p=u.matrixWorldInverse;for(let y=0,L=o.length;y<L;y++){const S=o[y];if(S.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function Qo(i){const e=new Dm(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function l(h){n.push(h)}function c(h){r.push(h)}function o(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Im(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Qo(i),e.set(r,[l])):s>=a.length?(l=new Qo(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fm=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Om=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jo=new ct,Pi=new G,Es=new G;function Bm(i,e,t){let n=new Fl;const r=new Ve,s=new Ve,a=new Ze,l=new Vh,c=new Wh,o={},u=t.maxTextureSize,f={[Yn]:Nt,[Nt]:Yn,[xn]:xn},h=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Um,fragmentShader:Nm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ut(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let p=this.type;this.render=function(E,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===mc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const w=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Mn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=p!==this.type;H&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){const te=E[I],P=te.shadow;if(P===void 0){Ie("WebGLShadowMap:",te,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const q=P.getFrameExtents();r.multiply(q),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,P.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||H===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Li){if(te.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Xt(r.x,r.y,{format:Kn,type:jt,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),P.map.texture.name=te.name+".shadowMap",P.map.depthTexture=new Wi(r.x,r.y,on),P.map.depthTexture.name=te.name+".shadowMapDepth",P.map.depthTexture.format=yn,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=St,P.map.depthTexture.magFilter=St}else te.isPointLight?(P.map=new Wl(r.x),P.map.depthTexture=new Fh(r.x,hn)):(P.map=new Xt(r.x,r.y),P.map.depthTexture=new Wi(r.x,r.y,hn)),P.map.depthTexture.name=te.name+".shadowMap",P.map.depthTexture.format=yn,this.type===Mr?(P.map.depthTexture.compareFunction=V?Aa:wa,P.map.depthTexture.minFilter=Ct,P.map.depthTexture.magFilter=Ct):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=St,P.map.depthTexture.magFilter=St);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==r.x||P.map.height!==r.y)&&P.map.setSize(r.x,r.y);const ee=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();te.isPointLight!==!0&&P.updateMatrices(te,x);for(let J=0;J<ee;J++){const se=P.getCamera(J);if(te.isPointLight){const ue=P.camera,Ne=P.matrix,Ae=te.distance||ue.far;Ae!==ue.far&&(ue.far=Ae,ue.updateProjectionMatrix()),Pi.setFromMatrixPosition(te.matrixWorld),ue.position.copy(Pi),Es.copy(ue.position),Es.add(Fm[J]),ue.up.copy(Om[J]),ue.lookAt(Es),ue.updateMatrixWorld(),Ne.makeTranslation(-Pi.x,-Pi.y,-Pi.z),jo.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),P._frustum.setFromProjectionMatrix(jo,ue.coordinateSystem,ue.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,J),i.clear();else{J===0&&(i.setRenderTarget(P.map),i.clear());const ue=P.getViewport(J);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),D.viewport(a)}n=P.getFrustum(J),S(b,x,se,te,this.type)}P.isPointLightShadow!==!0&&this.type===Li&&y(P,x),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,N)};function y(E,b){const x=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xt(r.x,r.y,{format:Kn,type:jt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,x,h,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,x,d,M,null)}function L(E,b,x,w){let C=null;const N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:l,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const D=C.uuid,H=b.uuid;let I=o[D];I===void 0&&(I={},o[D]=I);let z=I[H];z===void 0&&(z=C.clone(),I[H]=z,b.addEventListener("dispose",T)),C=z}if(C.visible=b.visible,C.wireframe=b.wireframe,w===Li?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=x}return C}function S(E,b,x,w,C){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Li)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const H=e.update(E),I=E.material;if(Array.isArray(I)){const z=H.groups;for(let te=0,P=z.length;te<P;te++){const q=z[te],V=I[q.materialIndex];if(V&&V.visible){const ee=L(E,V,w,C);E.onBeforeShadow(i,E,b,x,H,ee,q),i.renderBufferDirect(x,null,H,ee,E,q),E.onAfterShadow(i,E,b,x,H,ee,q)}}}else if(I.visible){const z=L(E,I,w,C);E.onBeforeShadow(i,E,b,x,H,z,null),i.renderBufferDirect(x,null,H,z,E,null),E.onAfterShadow(i,E,b,x,H,z,null)}}const D=E.children;for(let H=0,I=D.length;H<I;H++)S(D[H],b,x,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(const x in o){const w=o[x],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function zm(i,e){function t(){let B=!1;const fe=new Ze;let ie=null;const de=new Ze(0,0,0,0);return{setMask:function(xe){ie!==xe&&!B&&(i.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){B=xe},setClear:function(xe,re,Ce,Te,st){st===!0&&(xe*=Te,re*=Te,Ce*=Te),fe.set(xe,re,Ce,Te),de.equals(fe)===!1&&(i.clearColor(xe,re,Ce,Te),de.copy(fe))},reset:function(){B=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let B=!1,fe=!1,ie=null,de=null,xe=null;return{setReversed:function(re){if(fe!==re){const Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return fe},setTest:function(re){re?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(re){ie!==re&&!B&&(i.depthMask(re),ie=re)},setFunc:function(re){if(fe&&(re=Jc[re]),de!==re){switch(re){case As:i.depthFunc(i.NEVER);break;case Rs:i.depthFunc(i.ALWAYS);break;case Cs:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Ps:i.depthFunc(i.EQUAL);break;case Ls:i.depthFunc(i.GEQUAL);break;case Ds:i.depthFunc(i.GREATER);break;case Is:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=re}},setLocked:function(re){B=re},setClear:function(re){xe!==re&&(xe=re,fe&&(re=1-re),i.clearDepth(re))},reset:function(){B=!1,ie=null,de=null,xe=null,fe=!1}}}function r(){let B=!1,fe=null,ie=null,de=null,xe=null,re=null,Ce=null,Te=null,st=null;return{setTest:function(je){B||(je?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(je){fe!==je&&!B&&(i.stencilMask(je),fe=je)},setFunc:function(je,qt,tn){(ie!==je||de!==qt||xe!==tn)&&(i.stencilFunc(je,qt,tn),ie=je,de=qt,xe=tn)},setOp:function(je,qt,tn){(re!==je||Ce!==qt||Te!==tn)&&(i.stencilOp(je,qt,tn),re=je,Ce=qt,Te=tn)},setLocked:function(je){B=je},setClear:function(je){st!==je&&(i.clearStencil(je),st=je)},reset:function(){B=!1,fe=null,ie=null,de=null,xe=null,re=null,Ce=null,Te=null,st=null}}}const s=new t,a=new n,l=new r,c=new WeakMap,o=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,y=null,L=null,S=null,T=null,E=null,b=null,x=new Be(0,0,0),w=0,C=!1,N=null,D=null,H=null,I=null,z=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=q>=2);let ee=null,J={};const se=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Ne=new Ze().fromArray(se),Ae=new Ze().fromArray(ue);function De(B,fe,ie,de){const xe=new Uint8Array(4),re=i.createTexture();i.bindTexture(B,re),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ie;Ce++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return re}const K={};K[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(i.DEPTH_TEST),a.setFunc(Bi),He(!1),Je(to),j(i.CULL_FACE),Pe(Mn);function j(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function _e(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ee(B,fe){return h[B]!==fe?(i.bindFramebuffer(B,fe),h[B]=fe,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function le(B,fe){let ie=g,de=!1;if(B){ie=d.get(fe),ie===void 0&&(ie=[],d.set(fe,ie));const xe=B.textures;if(ie.length!==xe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ce=xe.length;re<Ce;re++)ie[re]=i.COLOR_ATTACHMENT0+re;ie.length=xe.length,de=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,de=!0);de&&i.drawBuffers(ie)}function Ue(B){return M!==B?(i.useProgram(B),M=B,!0):!1}const ht={[pi]:i.FUNC_ADD,[_c]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};ht[vc]=i.MIN,ht[Mc]=i.MAX;const ze={[Sc]:i.ZERO,[Ec]:i.ONE,[yc]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[Ac]:i.DST_COLOR,[Tc]:i.DST_ALPHA,[bc]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[Rc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Pc]:i.CONSTANT_COLOR,[Lc]:i.ONE_MINUS_CONSTANT_COLOR,[Dc]:i.CONSTANT_ALPHA,[Ic]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(B,fe,ie,de,xe,re,Ce,Te,st,je){if(B===Mn){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),B!==gc){if(B!==p||je!==C){if((y!==pi||T!==pi)&&(i.blendEquation(i.FUNC_ADD),y=pi,T=pi),je)switch(B){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",B);break}else switch(B){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case io:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",B);break}L=null,S=null,E=null,b=null,x.set(0,0,0),w=0,p=B,C=je}return}xe=xe||fe,re=re||ie,Ce=Ce||de,(fe!==y||xe!==T)&&(i.blendEquationSeparate(ht[fe],ht[xe]),y=fe,T=xe),(ie!==L||de!==S||re!==E||Ce!==b)&&(i.blendFuncSeparate(ze[ie],ze[de],ze[re],ze[Ce]),L=ie,S=de,E=re,b=Ce),(Te.equals(x)===!1||st!==w)&&(i.blendColor(Te.r,Te.g,Te.b,st),x.copy(Te),w=st),p=B,C=!1}function Qe(B,fe){B.side===xn?_e(i.CULL_FACE):j(i.CULL_FACE);let ie=B.side===Nt;fe&&(ie=!ie),He(ie),B.blending===Ni&&B.transparent===!1?Pe(Mn):Pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const de=B.stencilWrite;l.setTest(de),de&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),bt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function Je(B){B!==dc?(j(i.CULL_FACE),B!==D&&(B===to?i.cullFace(i.BACK):B===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=B}function dt(B){B!==H&&(P&&i.lineWidth(B),H=B)}function bt(B,fe,ie){B?(j(i.POLYGON_OFFSET_FILL),(I!==fe||z!==ie)&&(I=fe,z=ie,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,ie))):_e(i.POLYGON_OFFSET_FILL)}function rt(B){B?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function lt(B){B===void 0&&(B=i.TEXTURE0+te-1),ee!==B&&(i.activeTexture(B),ee=B)}function O(B,fe,ie){ie===void 0&&(ee===null?ie=i.TEXTURE0+te-1:ie=ee);let de=J[ie];de===void 0&&(de={type:void 0,texture:void 0},J[ie]=de),(de.type!==B||de.texture!==fe)&&(ee!==ie&&(i.activeTexture(ie),ee=ie),i.bindTexture(B,fe||K[B]),de.type=B,de.texture=fe)}function ut(){const B=J[ee];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function R(){try{i.compressedTexSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function U(){try{i.compressedTexSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function Z(){try{i.texStorage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function Q(){try{i.texStorage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function Y(){try{i.texImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function ne(){try{i.texImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function ae(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function ve(B,fe){f[B]!==fe&&(i.pixelStorei(B,fe),f[B]=fe)}function oe(B){Ne.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ne.copy(B))}function ce(B){Ae.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ae.copy(B))}function Re(B,fe){let ie=o.get(fe);ie===void 0&&(ie=new WeakMap,o.set(fe,ie));let de=ie.get(B);de===void 0&&(de=i.getUniformBlockIndex(fe,B.name),ie.set(B,de))}function Le(B,fe){const de=o.get(fe).get(B);c.get(fe)!==de&&(i.uniformBlockBinding(fe,de,B.__bindingPointIndex),c.set(fe,de))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,J={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,y=null,L=null,S=null,T=null,E=null,b=null,x=new Be(0,0,0),w=0,C=!1,N=null,D=null,H=null,I=null,z=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:j,disable:_e,bindFramebuffer:Ee,drawBuffers:le,useProgram:Ue,setBlending:Pe,setMaterial:Qe,setFlipSided:He,setCullFace:Je,setLineWidth:dt,setPolygonOffset:bt,setScissorTest:rt,activeTexture:lt,bindTexture:O,unbindTexture:ut,compressedTexImage2D:Ke,compressedTexImage3D:A,texImage2D:Y,texImage3D:ne,pixelStorei:ve,getParameter:ae,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:Z,texStorage3D:Q,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:R,compressedTexSubImage3D:U,scissor:oe,viewport:ce,reset:Oe}}function Hm(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Ve,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):ki("canvas")}function m(A,_,k){let R=1;const U=Ke(A);if((U.width>k||U.height>k)&&(R=k/Math.max(U.width,U.height)),R<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(R*U.width),Q=Math.floor(R*U.height);h===void 0&&(h=M(Z,Q));const Y=_?M(Z,Q):h;return Y.width=Z,Y.height=Q,Y.getContext("2d").drawImage(A,0,0,Z,Q),Ie("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Z+"x"+Q+")."),Y}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,_,k,R,U,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q;R&&(Q=e.get("EXT_texture_norm16"),Q||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&Q&&(Y=Q.R16_EXT),k===i.SHORT&&Q&&(Y=Q.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),_===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&Q&&(Y=Q.RG16_EXT),k===i.SHORT&&Q&&(Y=Q.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&Q&&(Y=Q.RGB16_EXT),k===i.SHORT&&Q&&(Y=Q.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const ne=Z?Lr:qe.getTransfer(U);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=ne===tt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&Q&&(Y=Q.RGBA16_EXT),k===i.SHORT&&Q&&(Y=Q.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(A,_){let k;return A?_===null||_===hn||_===Hi?k=i.DEPTH24_STENCIL8:_===on?k=i.DEPTH32F_STENCIL8:_===zi&&(k=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hn||_===Hi?k=i.DEPTH_COMPONENT24:_===on?k=i.DEPTH_COMPONENT32F:_===zi&&(k=i.DEPTH_COMPONENT16),k}function E(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){const _=A.target;_.removeEventListener("dispose",b),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),N(_)}function w(A){const _=n.get(A);if(_.__webglInit===void 0)return;const k=A.source,R=d.get(k);if(R){const U=R[_.__cacheKey];U.usedTimes--,U.usedTimes===0&&C(A),Object.keys(R).length===0&&d.delete(k)}n.remove(A)}function C(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const k=A.source,R=d.get(k);delete R[_.__cacheKey],a.memory.textures--}function N(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(_.__webglFramebuffer[R]))for(let U=0;U<_.__webglFramebuffer[R].length;U++)i.deleteFramebuffer(_.__webglFramebuffer[R][U]);else i.deleteFramebuffer(_.__webglFramebuffer[R]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[R])}else{if(Array.isArray(_.__webglFramebuffer))for(let R=0;R<_.__webglFramebuffer.length;R++)i.deleteFramebuffer(_.__webglFramebuffer[R]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let R=0;R<_.__webglColorRenderbuffer.length;R++)_.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[R]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=A.textures;for(let R=0,U=k.length;R<U;R++){const Z=n.get(k[R]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[R])}n.remove(A)}let D=0;function H(){D=0}function I(){return D}function z(A){D=A}function te(){const A=D;return A>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function P(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function q(A,_){const k=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const R=A.image;if(R===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function V(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_e(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function ee(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_e(k,A,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function J(A,_){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ee(k,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const se={[Us]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},ue={[St]:i.NEAREST,[Fc]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Ne={[Hc]:i.NEVER,[Xc]:i.ALWAYS,[kc]:i.LESS,[wa]:i.LEQUAL,[Gc]:i.EQUAL,[Aa]:i.GEQUAL,[Vc]:i.GREATER,[Wc]:i.NOTEQUAL};function Ae(A,_){if(_.type===on&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===$r||_.magFilter===Zi||_.magFilter===Vn||_.minFilter===Ct||_.minFilter===$r||_.minFilter===Zi||_.minFilter===Vn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,se[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===St||_.minFilter!==Zi&&_.minFilter!==Vn||_.type===on&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function De(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",b));const R=_.source;let U=d.get(R);U===void 0&&(U={},d.set(R,U));const Z=P(_);if(Z!==A.__cacheKey){U[Z]===void 0&&(U[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),U[Z].usedTimes++;const Q=U[A.__cacheKey];Q!==void 0&&(U[A.__cacheKey].usedTimes--,Q.usedTimes===0&&C(_)),A.__cacheKey=Z,A.__webglTexture=U[Z].texture}return k}function K(A,_,k){return Math.floor(Math.floor(A/k)/_)}function j(A,_,k,R){const Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,R,_.data);else{Z.sort((ve,oe)=>ve.start-oe.start);let Q=0;for(let ve=1;ve<Z.length;ve++){const oe=Z[Q],ce=Z[ve],Re=oe.start+oe.count,Le=K(ce.start,_.width,4),Oe=K(oe.start,_.width,4);ce.start<=Re+1&&Le===Oe&&K(ce.start+ce.count-1,_.width,4)===Le?oe.count=Math.max(oe.count,ce.start+ce.count-oe.start):(++Q,Z[Q]=ce)}Z.length=Q+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ve=0,oe=Z.length;ve<oe;ve++){const ce=Z[ve],Re=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),Oe=Re%_.width,B=Math.floor(Re/_.width),fe=Le,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Oe,B,fe,ie,k,R,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function _e(A,_,k){let R=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(R=i.TEXTURE_3D);const U=De(A,_),Z=_.source;t.bindTexture(R,A.__webglTexture,i.TEXTURE0+k);const Q=n.get(Z);if(Z.version!==Q.__version||U===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ie=qe.getPrimaries(qe.workingColorSpace),de=_.colorSpace===Un?null:qe.getPrimaries(_.colorSpace),xe=_.colorSpace===Un||ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,r.maxTextureSize);ne=ut(_,ne);const ae=s.convert(_.format,_.colorSpace),ve=s.convert(_.type);let oe=S(_.internalFormat,ae,ve,_.normalized,_.colorSpace,_.isVideoTexture);Ae(R,_);let ce;const Re=_.mipmaps,Le=_.isVideoTexture!==!0,Oe=Q.__version===void 0||U===!0,B=Z.dataReady,fe=E(_,ne);if(_.isDepthTexture)oe=T(_.format===Wn,_.type),Oe&&(Le?t.texStorage2D(i.TEXTURE_2D,1,oe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,oe,ne.width,ne.height,0,ae,ve,null));else if(_.isDataTexture)if(Re.length>0){Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,fe,oe,Re[0].width,Re[0].height);for(let ie=0,de=Re.length;ie<de;ie++)ce=Re[ie],Le?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ce.width,ce.height,ae,ve,ce.data):t.texImage2D(i.TEXTURE_2D,ie,oe,ce.width,ce.height,0,ae,ve,ce.data);_.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(i.TEXTURE_2D,fe,oe,ne.width,ne.height),B&&j(_,ne,ae,ve)):t.texImage2D(i.TEXTURE_2D,0,oe,ne.width,ne.height,0,ae,ve,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,oe,Re[0].width,Re[0].height,ne.depth);for(let ie=0,de=Re.length;ie<de;ie++)if(ce=Re[ie],_.format!==Jt)if(ae!==null)if(Le){if(B)if(_.layerUpdates.size>0){const xe=Lo(ce.width,ce.height,_.format,_.type);for(const re of _.layerUpdates){const Ce=ce.data.subarray(re*xe/ce.data.BYTES_PER_ELEMENT,(re+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,re,ce.width,ce.height,1,ae,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,ne.depth,ae,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,oe,ce.width,ce.height,ne.depth,0,ce.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,ne.depth,ae,ve,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,oe,ce.width,ce.height,ne.depth,0,ae,ve,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,fe,oe,Re[0].width,Re[0].height);for(let ie=0,de=Re.length;ie<de;ie++)ce=Re[ie],_.format!==Jt?ae!==null?Le?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,oe,ce.width,ce.height,0,ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ce.width,ce.height,ae,ve,ce.data):t.texImage2D(i.TEXTURE_2D,ie,oe,ce.width,ce.height,0,ae,ve,ce.data)}else if(_.isDataArrayTexture)if(Le){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,oe,ne.width,ne.height,ne.depth),B)if(_.layerUpdates.size>0){const ie=Lo(ne.width,ne.height,_.format,_.type);for(const de of _.layerUpdates){const xe=ne.data.subarray(de*ie/ne.data.BYTES_PER_ELEMENT,(de+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ne.width,ne.height,1,ae,ve,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,ve,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,ne.width,ne.height,ne.depth,0,ae,ve,ne.data);else if(_.isData3DTexture)Le?(Oe&&t.texStorage3D(i.TEXTURE_3D,fe,oe,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,ve,ne.data)):t.texImage3D(i.TEXTURE_3D,0,oe,ne.width,ne.height,ne.depth,0,ae,ve,ne.data);else if(_.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(i.TEXTURE_2D,fe,oe,ne.width,ne.height);else{let ie=ne.width,de=ne.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,oe,ie,de,0,ae,ve,null),ie>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),f.add(_),ie.onpaint=de=>{const xe=de.changedElements;for(const re of f)xe.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const xe=i.RGBA,re=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,re,Ce,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&Oe){const ie=Ke(Re[0]);t.texStorage2D(i.TEXTURE_2D,fe,oe,ie.width,ie.height)}for(let ie=0,de=Re.length;ie<de;ie++)ce=Re[ie],Le?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ae,ve,ce):t.texImage2D(i.TEXTURE_2D,ie,oe,ae,ve,ce);_.generateMipmaps=!1}else if(Le){if(Oe){const ie=Ke(ne);t.texStorage2D(i.TEXTURE_2D,fe,oe,ie.width,ie.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ve,ne)}else t.texImage2D(i.TEXTURE_2D,0,oe,ae,ve,ne);p(_)&&y(R),Q.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ee(A,_,k){if(_.image.length!==6)return;const R=De(A,_),U=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const Z=n.get(U);if(U.version!==Z.__version||R===!0){t.activeTexture(i.TEXTURE0+k);const Q=qe.getPrimaries(qe.workingColorSpace),Y=_.colorSpace===Un?null:qe.getPrimaries(_.colorSpace),ne=_.colorSpace===Un||Q===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let re=0;re<6;re++)!ae&&!ve?oe[re]=m(_.image[re],!0,r.maxCubemapSize):oe[re]=ve?_.image[re].image:_.image[re],oe[re]=ut(_,oe[re]);const ce=oe[0],Re=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Oe=S(_.internalFormat,Re,Le,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,fe=Z.__version===void 0||R===!0,ie=U.dataReady;let de=E(_,ce);Ae(i.TEXTURE_CUBE_MAP,_);let xe;if(ae){B&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,ce.width,ce.height);for(let re=0;re<6;re++){xe=oe[re].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const Te=xe[Ce];_.format!==Jt?Re!==null?B?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Oe,Te.width,Te.height,0,Te.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Te.width,Te.height,Re,Le,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Oe,Te.width,Te.height,0,Re,Le,Te.data)}}}else{if(xe=_.mipmaps,B&&fe){xe.length>0&&de++;const re=Ke(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,re.width,re.height)}for(let re=0;re<6;re++)if(ve){B?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,oe[re].width,oe[re].height,Re,Le,oe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,oe[re].width,oe[re].height,0,Re,Le,oe[re].data);for(let Ce=0;Ce<xe.length;Ce++){const st=xe[Ce].image[re].image;B?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,st.width,st.height,Re,Le,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Oe,st.width,st.height,0,Re,Le,st.data)}}else{B?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Le,oe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,Re,Le,oe[re]);for(let Ce=0;Ce<xe.length;Ce++){const Te=xe[Ce];B?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,Re,Le,Te.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Oe,Re,Le,Te.image[re])}}}p(_)&&y(i.TEXTURE_CUBE_MAP),Z.__version=U.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function le(A,_,k,R,U,Z){const Q=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),ne=S(k.internalFormat,Q,Y,k.normalized,k.colorSpace),ae=n.get(_),ve=n.get(k);if(ve.__renderTarget=_,!ae.__hasExternalTextures){const oe=Math.max(1,_.width>>Z),ce=Math.max(1,_.height>>Z);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,Z,ne,oe,ce,_.depth,0,Q,Y,null):t.texImage2D(U,Z,ne,oe,ce,0,Q,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),lt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,U,ve.__webglTexture,0,rt(_)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,U,ve.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const R=_.depthTexture,U=R&&R.isDepthTexture?R.type:null,Z=T(_.stencilBuffer,U),Q=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(_),Z,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(_),Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,A)}else{const R=_.textures;for(let U=0;U<R.length;U++){const Z=R[U],Q=s.convert(Z.format,Z.colorSpace),Y=s.convert(Z.type),ne=S(Z.internalFormat,Q,Y,Z.normalized,Z.colorSpace);lt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(_),ne,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,_,k){const R=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const U=n.get(_.depthTexture);if(U.__renderTarget=_,(!U.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),R){if(U.__webglInit===void 0&&(U.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),U.__webglTexture===void 0){U.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,_.depthTexture);const ae=s.convert(_.depthTexture.format),ve=s.convert(_.depthTexture.type);let oe;_.depthTexture.format===yn?oe=i.DEPTH_COMPONENT24:_.depthTexture.format===Wn&&(oe=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,oe,_.width,_.height,0,ae,ve,null)}}else q(_.depthTexture,0);const Z=U.__webglTexture,Q=rt(_),Y=R?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ne=_.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===yn)lt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,Z,0);else if(_.depthTexture.format===Wn)lt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,Z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(A){const _=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const R=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),R){const U=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,R.removeEventListener("dispose",U)};R.addEventListener("dispose",U),_.__depthDisposeCallback=U}_.__boundDepthTexture=R}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let R=0;R<6;R++)ht(_.__webglFramebuffer[R],A,R);else{const R=A.texture.mipmaps;R&&R.length>0?ht(_.__webglFramebuffer[0],A,0):ht(_.__webglFramebuffer,A,0)}else if(k){_.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[R]),_.__webglDepthbuffer[R]===void 0)_.__webglDepthbuffer[R]=i.createRenderbuffer(),Ue(_.__webglDepthbuffer[R],A,!1);else{const U=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,Z)}}else{const R=A.texture.mipmaps;if(R&&R.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ue(_.__webglDepthbuffer,A,!1);else{const U=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(A,_,k){const R=n.get(A);_!==void 0&&le(R.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ze(A)}function Qe(A){const _=A.texture,k=n.get(A),R=n.get(_);A.addEventListener("dispose",x);const U=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Q=U.length>1;if(Q||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=_.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let ne=0;ne<_.mipmaps.length;ne++)k.__webglFramebuffer[Y][ne]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Q)for(let Y=0,ne=U.length;Y<ne;Y++){const ae=n.get(U[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&lt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<U.length;Y++){const ne=U[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ae=s.convert(ne.format,ne.colorSpace),ve=s.convert(ne.type),oe=S(ne.internalFormat,ae,ve,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),ce=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)le(k.__webglFramebuffer[Y][ne],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else le(k.__webglFramebuffer[Y],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let Y=0,ne=U.length;Y<ne;Y++){const ae=U[Y],ve=n.get(ae);let oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ve.__webglTexture),Ae(oe,ae),le(k.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+Y,oe,0),p(ae)&&y(oe)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,R.__webglTexture),Ae(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)le(k.__webglFramebuffer[ne],A,_,i.COLOR_ATTACHMENT0,Y,ne);else le(k.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&y(Y),t.unbindTexture()}A.depthBuffer&&ze(A)}function He(A){const _=A.textures;for(let k=0,R=_.length;k<R;k++){const U=_[k];if(p(U)){const Z=L(A),Q=n.get(U).__webglTexture;t.bindTexture(Z,Q),y(Z),t.unbindTexture()}}}const Je=[],dt=[];function bt(A){if(A.samples>0){if(lt(A)===!1){const _=A.textures,k=A.width,R=A.height;let U=i.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(A),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const ne=A.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ae]);const ve=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,k,R,0,0,k,R,U,i.NEAREST),c===!0&&(Je.length=0,dt.length=0,Je.push(i.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Je.push(Z),dt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ae]);const ve=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function rt(A){return Math.min(r.maxSamples,A.samples)}function lt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function ut(A,_){const k=A.colorSpace,R=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Pr&&k!==Un&&(qe.getTransfer(k)===tt?(R!==Jt||U!==Wt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",k)),_}function Ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(o.width=A.naturalWidth||A.width,o.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(o.width=A.displayWidth,o.height=A.displayHeight):(o.width=A.width,o.height=A.height),o}this.allocateTextureUnit=te,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=Pe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=le,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function km(i,e){function t(n,r=Un){let s;const a=qe.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===yl)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===Al)return i.RGB;if(n===Jt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===Kn)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===yr||n===br)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fs||n===Os||n===Bs||n===zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hs||n===ks||n===Gs||n===Vs||n===Ws||n===Rr||n===Xs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hs||n===ks)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vs)return s.COMPRESSED_R11_EAC;if(n===Ws)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return s.COMPRESSED_RG11_EAC;if(n===Xs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qs||n===Ys||n===$s||n===Ks||n===Zs||n===Js||n===Qs||n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ys)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ks)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===oa||n===la)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===ha||n===Cr||n===ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yt({vertexShader:Gm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xm extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",c=1,o=null,u=null,f=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Wm,p={},y=t.getContextAttributes();let L=null,S=null;const T=[],E=[],b=new Ve;let x=null,w=null;const C=new kt;C.viewport=new Ze;const N=new kt;N.viewport=new Ze;const D=[C,N],H=new Qh;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=T[K];return j===void 0&&(j=new ts,T[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=T[K];return j===void 0&&(j=new ts,T[K]=j),j.getGripSpace()},this.getHand=function(K){let j=T[K];return j===void 0&&(j=new ts,T[K]=j),j.getHandSpace()};function te(K){const j=E.indexOf(K.inputSource);if(j===-1)return;const _e=T[j];_e!==void 0&&(_e.update(K.inputSource,K.frame,o||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",q);for(let K=0;K<T.length;K++){const j=E[K];j!==null&&(E[K]=null,T[K].disconnect(j))}I=null,z=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(L),d=null,h=null,f=null,r=null,S=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),w!==null){const K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(K){o=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",P),r.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ee=null,le=null;y.depth&&(le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?Wn:yn,Ee=y.stencil?Hi:hn);const Ue={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Xt(h.textureWidth,h.textureHeight,{format:Jt,type:Wt,depthTexture:new Wi(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xt(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await r.requestReferenceSpace(l),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(K){for(let j=0;j<K.removed.length;j++){const _e=K.removed[j],Ee=E.indexOf(_e);Ee>=0&&(E[Ee]=null,T[Ee].disconnect(_e))}for(let j=0;j<K.added.length;j++){const _e=K.added[j];let Ee=E.indexOf(_e);if(Ee===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(_e),Ee=Ue;break}else if(E[Ue]===null){E[Ue]=_e,Ee=Ue;break}if(Ee===-1)break}const le=T[Ee];le&&le.connect(_e)}}const V=new G,ee=new G;function J(K,j,_e){V.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const Ee=V.distanceTo(ee),le=j.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,ht=le[14]/(le[10]-1),ze=le[14]/(le[10]+1),Pe=(le[9]+1)/le[5],Qe=(le[9]-1)/le[5],He=(le[8]-1)/le[0],Je=(Ue[8]+1)/Ue[0],dt=ht*He,bt=ht*Je,rt=Ee/(-He+Je),lt=rt*-He;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),le[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const O=ht+rt,ut=ze+rt,Ke=dt-lt,A=bt+(Ee-lt),_=Pe*ze/ut*O,k=Qe*ze/ut*O;K.projectionMatrix.makePerspective(Ke,A,_,k,O,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let j=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),H.near=N.near=C.near=j,H.far=N.far=C.far=_e,(I!==H.near||z!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,z=H.far),H.layers.mask=K.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Ee=K.parent,le=H.cameras;se(H,Ee);for(let Ue=0;Ue<le.length;Ue++)se(le[Ue],Ee);le.length===2?J(H,C,N):H.projectionMatrix.copy(C.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ue(K,H,Ee)};function ue(K,j,_e){_e===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return p[K]};let Ne=null;function Ae(K,j){if(u=j.getViewerPose(o||a),g=j,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ee=!1;_e.length!==H.cameras.length&&(H.cameras.length=0,Ee=!0);for(let ze=0;ze<_e.length;ze++){const Pe=_e[ze];let Qe=null;if(d!==null)Qe=d.getViewport(Pe);else{const Je=f.getViewSubImage(h,Pe);Qe=Je.viewport,ze===0&&(e.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(S))}let He=D[ze];He===void 0&&(He=new kt,He.layers.enable(ze),He.viewport=new Ze,D[ze]=He),He.matrix.fromArray(Pe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Pe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ze===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ee===!0&&H.cameras.push(He)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const ze=f.getDepthInformation(_e[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(le&&le.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ze=0;ze<_e.length;ze++){const Pe=_e[ze].camera;if(Pe){let Qe=p[Pe];Qe||(Qe=new Bl,p[Pe]=Qe);const He=f.getCameraImage(Pe);Qe.sourceTexture=He}}}}for(let _e=0;_e<T.length;_e++){const Ee=E[_e],le=T[_e];Ee!==null&&le!==void 0&&le.update(Ee,j,o||a)}Ne&&Ne(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const De=new Gl;De.setAnimationLoop(Ae),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const qm=new ct,Kl=new Fe;Kl.set(-1,0,0,0,1,0,0,0,1);function Ym(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,L,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,y,L):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),L=y.envMap,S=y.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(qm.makeRotationFromEuler(S)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kl),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=L*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $m(i,e,t,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const E=T.program;n.uniformBlockBinding(S,E)}function o(S,T){let E=r[S.id];E===void 0&&(m(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",y));const b=T.program;n.updateUBOMapping(S,b);const x=e.render.frame;s[S.id]!==x&&(h(S),s[S.id]=x)}function u(S){const T=f();S.__bindingPointIndex=T;const E=i.createBuffer(),b=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const T=r[S.id],E=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){const C=E[x];if(Array.isArray(C))for(let N=0,D=C.length;N<D;N++)d(C[N],x,N,b);else d(C,x,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,T,E,b){if(M(S,T,E,b)===!0){const x=S.__offset,w=S.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){const D=w[N],H=p(D);g(D,S.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function g(S,T,E){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,E)}function M(S,T,E,b){const x=S.value,w=T+"_"+E;if(b[w]===void 0)return typeof x=="number"||typeof x=="boolean"?b[w]=x:ArrayBuffer.isView(x)?b[w]=x.slice():b[w]=x.clone(),!0;{const C=b[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return b[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(S){const T=S.uniforms;let E=0;const b=16;for(let w=0,C=T.length;w<C;w++){const N=Array.isArray(T[w])?T[w]:[T[w]];for(let D=0,H=N.length;D<H;D++){const I=N[D],z=Array.isArray(I.value)?I.value:[I.value];for(let te=0,P=z.length;te<P;te++){const q=z[te],V=p(q),ee=E%b,J=ee%V.boundary,se=ee+J;E+=J,se!==0&&b-se<V.storage&&(E+=b-se),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=V.storage}}}const x=E%b;return x>0&&(E+=b-x),S.__size=E,S.__cache={},this}function p(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),T}function y(S){const T=S.target;T.removeEventListener("dispose",y);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function L(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:o,dispose:L}}const Km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sn=null;function Zm(){return sn===null&&(sn=new Uh(Km,16,16,Kn,jt),sn.name="DFG_LUT",sn.minFilter=Ct,sn.magFilter=Ct,sn.wrapS=vn,sn.wrapT=vn,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}class Jm{constructor(e={}){const{canvas:t=Kc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Wt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=d,m=new Set([Ta,ba,ya]),p=new Set([Wt,hn,zi,Hi,Sa,Ea]),y=new Uint32Array(4),L=new Int32Array(4),S=new G;let T=null,E=null;const b=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,D=null,H=null,I=null,z=null;this._outputColorSpace=vt;let te=0,P=0,q=null,V=-1,ee=null;const J=new Ze,se=new Ze;let ue=null;const Ne=new Be(0);let Ae=0,De=t.width,K=t.height,j=1,_e=null,Ee=null;const le=new Ze(0,0,De,K),Ue=new Ze(0,0,De,K);let ht=!1;const ze=new Fl;let Pe=!1,Qe=!1;const He=new ct,Je=new G,dt=new Ze,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function lt(){return q===null?j:1}let O=n;function ut(v,F){return t.getContext(v,F)}let Ke,A,_,k,R,U,Z,Q,Y,ne,ae,ve,oe,ce,Re,Le,Oe,B,fe,ie,de,xe,re;try{const v={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",qt,!1),O===null){const F="webgl2";if(O=ut(F,v),O===null)throw ut(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(v){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),$e("WebGLRenderer: "+v.message),v}function Ce(){Ke=new Zd(O),Ke.init(),de=new km(O,Ke),A=new Hd(O,Ke,e,de),_=new zm(O,Ke),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),H=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),k=new jd(O),R=new Tm,U=new Hm(O,Ke,_,R,A,de,k),Z=new Kd(C),Q=new eu(O),xe=new Bd(O,Q),Y=new Jd(O,Q,k,xe),ne=new tp(O,Y,Q,xe,k),B=new ep(O,A,U),Re=new kd(R),ae=new bm(C,Z,Ke,A,xe,Re),ve=new Ym(C,R),oe=new Am,ce=new Im(Ke),Oe=new Od(C,Z,_,ne,g,c),Le=new Bm(C,ne,A),re=new $m(O,k,A,_),fe=new zd(O,Ke,k),ie=new Qd(O,Ke,k),k.programs=ae.programs,C.capabilities=A,C.extensions=Ke,C.properties=R,C.renderLists=oe,C.shadowMap=Le,C.state=_,C.info=k}M!==Wt&&(w=new ip(M,t.width,t.height,l,r,s));const Te=new Xm(C,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=Ke.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ke.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(De,K,!1))},this.getSize=function(v){return v.set(De,K)},this.setSize=function(v,F,$=!0){if(Te.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}De=v,K=F,t.width=Math.floor(v*j),t.height=Math.floor(F*j),$===!0&&(t.style.width=v+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(De*j,K*j).floor()},this.setDrawingBufferSize=function(v,F,$){De=v,K=F,j=$,t.width=Math.floor(v*$),t.height=Math.floor(F*$),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(M===Wt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(le)},this.setViewport=function(v,F,$,W){v.isVector4?le.set(v.x,v.y,v.z,v.w):le.set(v,F,$,W),_.viewport(J.copy(le).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Ue)},this.setScissor=function(v,F,$,W){v.isVector4?Ue.set(v.x,v.y,v.z,v.w):Ue.set(v,F,$,W),_.scissor(se.copy(Ue).multiplyScalar(j).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(v){_.setScissorTest(ht=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){Ee=v},this.getClearColor=function(v){return v.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,$=!0){let W=0;if(v){let X=!1;if(q!==null){const ge=q.texture.format;X=m.has(ge)}if(X){const ge=q.texture.type,Se=p.has(ge),me=Oe.getClearColor(),ye=Oe.getClearAlpha(),we=me.r,ke=me.g,We=me.b;Se?(y[0]=we,y[1]=ke,y[2]=We,y[3]=ye,O.clearBufferuiv(O.COLOR,0,y)):(L[0]=we,L[1]=ke,L[2]=We,L[3]=ye,O.clearBufferiv(O.COLOR,0,L))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),Oe.dispose(),oe.dispose(),ce.dispose(),R.dispose(),Z.dispose(),ne.dispose(),xe.dispose(),re.dispose(),ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",qa),Te.removeEventListener("sessionend",Ya),Fn.stop()};function st(v){v.preventDefault(),oo("WebGLRenderer: Context Lost."),N=!0}function je(){oo("WebGLRenderer: Context Restored."),N=!1;const v=k.autoReset,F=Le.enabled,$=Le.autoUpdate,W=Le.needsUpdate,X=Le.type;Ce(),k.autoReset=v,Le.enabled=F,Le.autoUpdate=$,Le.needsUpdate=W,Le.type=X}function qt(v){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tn(v){const F=v.target;F.removeEventListener("dispose",tn),rc(F)}function rc(v){sc(v),R.remove(v)}function sc(v){const F=R.get(v).programs;F!==void 0&&(F.forEach(function($){ae.releaseProgram($)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,$,W,X,ge){F===null&&(F=bt);const Se=X.isMesh&&X.matrixWorld.determinantAffine()<0,me=lc(v,F,$,W,X);_.setMaterial(W,Se);let ye=$.index,we=1;if(W.wireframe===!0){if(ye=Y.getWireframeAttribute($),ye===void 0)return;we=2}const ke=$.drawRange,We=$.attributes.position;let be=ke.start*we,et=(ke.start+ke.count)*we;ge!==null&&(be=Math.max(be,ge.start*we),et=Math.min(et,(ge.start+ge.count)*we)),ye!==null?(be=Math.max(be,0),et=Math.min(et,ye.count)):We!=null&&(be=Math.max(be,0),et=Math.min(et,We.count));const pt=et-be;if(pt<0||pt===1/0)return;xe.setup(X,W,me,$,ye);let ot,it=fe;if(ye!==null&&(ot=Q.get(ye),it=ie,it.setIndex(ot)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*lt()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(X.isLine){let Tt=W.linewidth;Tt===void 0&&(Tt=1),_.setLineWidth(Tt*lt()),X.isLineSegments?it.setMode(O.LINES):X.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else X.isPoints?it.setMode(O.POINTS):X.isSprite&&it.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Tt=X._multiDrawStarts,Me=X._multiDrawCounts,Pt=X._multiDrawCount,Ye=ye?Q.get(ye).bytesPerElement:1,Gt=R.get(W).currentProgram.getUniforms();for(let nn=0;nn<Pt;nn++)Gt.setValue(O,"_gl_DrawID",nn),it.render(Tt[nn]/Ye,Me[nn])}else if(X.isInstancedMesh)it.renderInstances(be,pt,X.count);else if($.isInstancedBufferGeometry){const Tt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,Tt);it.renderInstances(be,pt,Me)}else it.render(be,pt)};function Xa(v,F,$,W){D!==null&&v.isNodeMaterial&&D.setObject(W,v),Pe===!0&&Re.setState(v,$,!1),v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,Ki(v,F,W),v.side=Yn,v.needsUpdate=!0,Ki(v,F,W),v.side=xn):Ki(v,F,W)}this.compile=function(v,F,$=null){$===null&&($=v),D!==null&&D.renderStart(v,F,$),E=ce.get($),E.init(F),x.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),v!==$&&v.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Qe=this.localClippingEnabled,Pe=Re.init(this.clippingPlanes,Qe),Pe===!0&&Re.setGlobalState(this.clippingPlanes,F),D!==null&&Le.render(E.state.shadowsArray,$,F);const W=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];Xa(me,$,F,X),W.add(me)}else Xa(ge,$,F,X),W.add(ge)}),E=x.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(v,F,$=null){const W=this.compile(v,F,$);return new Promise(X=>{function ge(){if(W.forEach(function(Se){const ye=R.get(Se).currentProgram;(ye===void 0||ye.isReady())&&W.delete(Se)}),W.size===0){X(v);return}setTimeout(ge,10)}Ke.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Wr=null;function ac(v){Wr&&Wr(v)}function qa(){Fn.stop()}function Ya(){Fn.start()}const Fn=new Gl;Fn.setAnimationLoop(ac),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(v){Wr=v,Te.setAnimationLoop(v),v===null?Fn.stop():Fn.start()},Te.addEventListener("sessionstart",qa),Te.addEventListener("sessionend",Ya),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(v,F);const $=Te.enabled===!0&&Te.isPresenting===!0,W=w!==null&&(q===null||$)&&w.begin(C,q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(F),F=Te.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,F,q),E=ce.get(v,x.length),E.init(F),E.state.textureUnits=U.getTextureUnits(),x.push(E),He.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(He,ln,F.reversedDepth),Qe=this.localClippingEnabled,Pe=Re.init(this.clippingPlanes,Qe),T=oe.get(v,b.length),T.init(),b.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Xr(Se,F,-1/0,C.sortObjects)}Xr(v,F,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(_e,Ee),rt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,rt&&Oe.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&Re.beginShadows();const X=E.state.shadowsArray;if(Le.render(X,v,F),Pe===!0&&Re.endShadows(),(W&&w.hasRenderPass())===!1){const Se=T.opaque,me=T.transmissive;if(E.setupLights(),F.isArrayCamera){const ye=F.cameras;if(me.length>0)for(let we=0,ke=ye.length;we<ke;we++){const We=ye[we];Ka(Se,me,v,We)}rt&&Oe.render(v);for(let we=0,ke=ye.length;we<ke;we++){const We=ye[we];$a(T,v,We,We.viewport)}}else me.length>0&&Ka(Se,me,v,F),rt&&Oe.render(v),$a(T,v,F)}q!==null&&P===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),W&&w.end(C),v.isScene===!0&&v.onAfterRender(C,v,F),xe.resetDefaultState(),V=-1,ee=null,x.pop(),x.length>0?(E=x[x.length-1],U.setTextureUnits(E.state.textureUnits),Pe===!0&&Re.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,D!==null&&D.renderEnd()};function Xr(v,F,$,W){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)$=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ze)){W&&dt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(He);const Se=ne.update(v),me=v.material;me.visible&&T.push(v,Se,me,$,dt.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ze))){const Se=ne.update(v),me=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),dt.copy(v.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),dt.copy(Se.boundingSphere.center)),dt.applyMatrix4(v.matrixWorld).applyMatrix4(He)),Array.isArray(me)){const ye=Se.groups;for(let we=0,ke=ye.length;we<ke;we++){const We=ye[we],be=me[We.materialIndex];be&&be.visible&&T.push(v,Se,be,$,dt.z,We,F)}}else me.visible&&T.push(v,Se,me,$,dt.z,null,F)}}const ge=v.children;for(let Se=0,me=ge.length;Se<me;Se++)Xr(ge[Se],F,$,W)}function $a(v,F,$,W){const{opaque:X,transmissive:ge,transparent:Se}=v;E.setupLightsView($),Pe===!0&&Re.setGlobalState(C.clippingPlanes,$),W&&_.viewport(J.copy(W)),X.length>0&&$i(X,F,$),ge.length>0&&$i(ge,F,$),Se.length>0&&$i(Se,F,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ka(v,F,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const be=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Xt(1,1,{generateMipmaps:!0,type:be?jt:Wt,minFilter:Vn,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ge=E.state.transmissionRenderTarget[W.id],Se=W.viewport||J;ge.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),ye=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Ne),Ae=C.getClearAlpha(),Ae<1&&C.setClearColor(16777215,.5),C.clear(),rt&&Oe.render($);const ke=C.toneMapping;C.toneMapping=cn;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Pe===!0&&Re.setGlobalState(C.clippingPlanes,W),$i(v,$,W),U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let et=0,pt=F.length;et<pt;et++){const ot=F[et],{object:it,geometry:Tt,material:Me,group:Pt}=ot;if(Me.side===xn&&it.layers.test(W.layers)){const Ye=Me.side;Me.side=Nt,Me.needsUpdate=!0,Za(it,$,W,Tt,Me,Pt),Me.side=Ye,Me.needsUpdate=!0,be=!0}}be===!0&&(U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,ye,we),C.setClearColor(Ne,Ae),We!==void 0&&(W.viewport=We),C.toneMapping=ke}function $i(v,F,$){const W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ge=v.length;X<ge;X++){const Se=v[X],{object:me,geometry:ye,group:we}=Se;let ke=Se.material;ke.allowOverride===!0&&W!==null&&(ke=W),me.layers.test($.layers)&&Za(me,F,$,ye,ke,we)}}function Za(v,F,$,W,X,ge){D!==null&&X.isNodeMaterial&&D.setObject(v,X),v.onBeforeRender(C,F,$,W,X,ge),v.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(C,F,$,W,v,ge),X.transparent===!0&&X.side===xn&&X.forceSinglePass===!1?(X.side=Nt,X.needsUpdate=!0,C.renderBufferDirect($,F,W,X,v,ge),X.side=Yn,X.needsUpdate=!0,C.renderBufferDirect($,F,W,X,v,ge),X.side=xn):C.renderBufferDirect($,F,W,X,v,ge),v.onAfterRender(C,F,$,W,X,ge)}function Ki(v,F,$){F.isScene!==!0&&(F=bt);const W=R.get(v),X=E.state.lights,ge=E.state.shadowsArray,Se=X.state.version,me=ae.getParameters(v,X.state,ge,F,$,E.state.lightProbeGridArray),ye=ae.getProgramCacheKey(me);let we=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=Z.get(v.envMap||W.environment,ke),W.envMapRotation=W.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",tn),we=new Map,W.programs=we);let We=we.get(ye);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===Se)return Qa(v,me),We}else me.uniforms=ae.getUniforms(v),D!==null&&v.isNodeMaterial&&D.build(v,$,me),v.onBeforeCompile(me,C),We=ae.acquireProgram(me,ye),we.set(ye,We),W.uniforms=me.uniforms;const be=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=Re.uniform),Qa(v,me),W.needsLights=hc(v),W.lightsStateVersion=Se,W.needsLights&&(be.ambientLightColor.value=X.state.ambient,be.lightProbe.value=X.state.probe,be.sunLights.value=X.state.sun,be.sunLightShadows.value=X.state.sunShadow,be.directionalLights.value=X.state.directional,be.directionalLightShadows.value=X.state.directionalShadow,be.spotLights.value=X.state.spot,be.spotLightShadows.value=X.state.spotShadow,be.rectAreaLights.value=X.state.rectArea,be.ltc_1.value=X.state.rectAreaLTC1,be.ltc_2.value=X.state.rectAreaLTC2,be.pointLights.value=X.state.point,be.pointLightShadows.value=X.state.pointShadow,be.hemisphereLights.value=X.state.hemi,be.sunShadowMatrix.value=X.state.sunShadowMatrix,be.sunShadowCascade.value=X.state.sunShadowCascade,be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,be.spotLightMatrix.value=X.state.spotLightMatrix,be.spotLightMap.value=X.state.spotLightMap,be.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=We,W.uniformsList=null,We}function Ja(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=Tr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Qa(v,F){const $=R.get(v);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function oc(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let $=0,W=v.length;$<W;$++){const X=v[$];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function lc(v,F,$,W,X){F.isScene!==!0&&(F=bt),U.resetTextureUnits();const ge=F.fog,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,me=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:qe.workingColorSpace,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,we=Z.get(W.envMap||Se,ye),ke=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,pt=!!$.morphAttributes.color;let ot=cn;W.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ot=C.toneMapping);const it=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Tt=it!==void 0?it.length:0,Me=R.get(W),Pt=E.state.lights;if(Pe===!0&&(Qe===!0||v!==ee)){const at=v===ee&&W.id===V;Re.setState(W,v,at)}let Ye=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Pt.state.version||Me.outputColorSpace!==me||X.isBatchedMesh&&Me.batching===!1||!X.isBatchedMesh&&Me.batching===!0||X.isBatchedMesh&&Me.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Me.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Me.instancing===!1||!X.isInstancedMesh&&Me.instancing===!0||X.isSkinnedMesh&&Me.skinning===!1||!X.isSkinnedMesh&&Me.skinning===!0||X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null||Me.envMap!==we||W.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Re.numPlanes||Me.numIntersection!==Re.numIntersection)||Me.vertexAlphas!==ke||Me.vertexTangents!==We||Me.morphTargets!==be||Me.morphNormals!==et||Me.morphColors!==pt||Me.toneMapping!==ot||Me.morphTargetsCount!==Tt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,Me.__version=W.version);let Gt=Me.currentProgram;Ye===!0&&(Gt=Ki(W,F,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Gt,Me));let nn=!1,bn=!1,Qn=!1;const nt=Gt.getUniforms(),ft=Me.uniforms;if(_.useProgram(Gt.program)&&(nn=!0,bn=!0,Qn=!0),W.id!==V&&(V=W.id,bn=!0),Me.needsLights){const at=oc(E.state.lightProbeGridArray,X);Me.lightProbeGrid!==at&&(Me.lightProbeGrid=at,bn=!0)}if(nn||ee!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(O,"projectionMatrix",v.projectionMatrix),nt.setValue(O,"viewMatrix",v.matrixWorldInverse);const wn=nt.map.cameraPosition;wn!==void 0&&wn.setValue(O,Je.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&nt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&nt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),ee!==v&&(ee=v,bn=!0,Qn=!0)}if(Me.needsLights&&(Pt.state.sunShadowMap.length>0&&nt.setValue(O,"sunShadowMap",Pt.state.sunShadowMap,U),Pt.state.directionalShadowMap.length>0&&nt.setValue(O,"directionalShadowMap",Pt.state.directionalShadowMap,U),Pt.state.spotShadowMap.length>0&&nt.setValue(O,"spotShadowMap",Pt.state.spotShadowMap,U),Pt.state.pointShadowMap.length>0&&nt.setValue(O,"pointShadowMap",Pt.state.pointShadowMap,U)),X.isSkinnedMesh){nt.setOptional(O,X,"bindMatrix"),nt.setOptional(O,X,"bindMatrixInverse");const at=X.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),nt.setValue(O,"boneTexture",at.boneTexture,U))}X.isBatchedMesh&&(nt.setOptional(O,X,"batchingTexture"),nt.setValue(O,"batchingTexture",X._matricesTexture,U),nt.setOptional(O,X,"batchingIdTexture"),nt.setValue(O,"batchingIdTexture",X._indirectTexture,U),nt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&nt.setValue(O,"batchingColorTexture",X._colorsTexture,U));const Tn=$.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&B.update(X,$,Gt),(bn||Me.receiveShadow!==X.receiveShadow)&&(Me.receiveShadow=X.receiveShadow,nt.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(ft.envMapIntensity.value=F.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Zm()),bn){if(nt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&cc(ft,Qn),ge&&W.fog===!0&&ve.refreshFogUniforms(ft,ge),ve.refreshMaterialUniforms(ft,W,j,K,E.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.lightProbeGrid){const at=Me.lightProbeGrid;ft.probesSH.value=at.texture,ft.probesMin.value.copy(at.boundingBox.min),ft.probesMax.value.copy(at.boundingBox.max),ft.probesResolution.value.copy(at.resolution)}Tr.upload(O,Ja(Me),ft,U)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Tr.upload(O,Ja(Me),ft,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&nt.setValue(O,"center",X.center),nt.setValue(O,"modelViewMatrix",X.modelViewMatrix),nt.setValue(O,"normalMatrix",X.normalMatrix),nt.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const at=W.uniformsGroups;for(let wn=0,jn=at.length;wn<jn;wn++){const eo=at[wn];re.update(eo,Gt),re.bind(eo,Gt)}}return Gt}function cc(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function hc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(v,F,$){const W=R.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),R.get(v.texture).__webglTexture=F,R.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const $=R.get(v);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,$=0){q=v,te=F,P=$;let W=null,X=!1,ge=!1;if(v){const me=R.get(v);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),J.copy(v.viewport),se.copy(v.scissor),ue=v.scissorTest,_.viewport(J),_.scissor(se),_.setScissorTest(ue),V=-1;return}else if(me.__webglFramebuffer===void 0)U.setupRenderTarget(v);else if(me.__hasExternalTextures)U.rebindTextures(v,R.get(v.texture).__webglTexture,R.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ke=v.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&R.has(ke)&&(v.width!==ke.image.width||v.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(v)}}const ye=v.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const we=R.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[F])?W=we[F][$]:W=we[F],X=!0):v.samples>0&&U.useMultisampledRTT(v)===!1?W=R.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?W=we[$]:W=we,J.copy(v.viewport),se.copy(v.scissor),ue=v.scissorTest}else J.copy(le).multiplyScalar(j).floor(),se.copy(Ue).multiplyScalar(j).floor(),ue=ht;if($!==0&&(W=H),_.bindFramebuffer(O.FRAMEBUFFER,W)&&_.drawBuffers(v,W),_.viewport(J),_.scissor(se),_.setScissorTest(ue),X){const me=R.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,$)}else if(ge){const me=F;for(let ye=0;ye<v.textures.length;ye++){const we=R.get(v.textures[ye]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ye,we.__webglTexture,$,me)}}else if(v!==null&&$!==0){const me=R.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,$)}V=-1};function ja(v){const F=R.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=A.textureFormatReadable(v.format),F.__typeReadable=A.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,$,W,X,ge,Se,me=0){if(!(v&&v.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=R.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye){_.bindFramebuffer(O.FRAMEBUFFER,ye);try{const we=v.textures[me],ke=we.format,We=we.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const be=ja(we);if(be.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-W&&$>=0&&$<=v.height-X&&O.readPixels(F,$,W,X,de.convert(ke),de.convert(We),ge)}finally{const we=q!==null?R.get(q).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,F,$,W,X,ge,Se,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=R.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye)if(F>=0&&F<=v.width-W&&$>=0&&$<=v.height-X){_.bindFramebuffer(O.FRAMEBUFFER,ye);const we=v.textures[me],ke=we.format,We=we.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const be=ja(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(F,$,W,X,de.convert(ke),de.convert(We),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const pt=q!==null?R.get(q).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,pt);const ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zc(O,ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(et),O.deleteSync(ot),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,$=0){const W=Math.pow(2,-$),X=Math.floor(v.image.width*W),ge=Math.floor(v.image.height*W),Se=F!==null?F.x:0,me=F!==null?F.y:0;U.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Se,me,X,ge),_.unbindTexture()},this.copyTextureToTexture=function(v,F,$=null,W=null,X=0,ge=0){let Se,me,ye,we,ke,We,be,et,pt;const ot=v.isCompressedTexture?v.mipmaps[ge]:v.image;if($!==null)Se=$.max.x-$.min.x,me=$.max.y-$.min.y,ye=$.isBox3?$.max.z-$.min.z:1,we=$.min.x,ke=$.min.y,We=$.isBox3?$.min.z:0;else{const ft=Math.pow(2,-X);Se=Math.floor(ot.width*ft),me=Math.floor(ot.height*ft),v.isDataArrayTexture?ye=ot.depth:v.isData3DTexture?ye=Math.floor(ot.depth*ft):ye=1,we=0,ke=0,We=0}W!==null?(be=W.x,et=W.y,pt=W.z):(be=0,et=0,pt=0);const it=de.convert(F.format),Tt=de.convert(F.type);let Me;F.isData3DTexture?(U.setTexture3D(F,0),Me=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Me=O.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Me=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Pt=_.getParameter(O.UNPACK_ROW_LENGTH),Ye=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Gt=_.getParameter(O.UNPACK_SKIP_PIXELS),nn=_.getParameter(O.UNPACK_SKIP_ROWS),bn=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,ot.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,we),_.pixelStorei(O.UNPACK_SKIP_ROWS,ke),_.pixelStorei(O.UNPACK_SKIP_IMAGES,We);const Qn=v.isDataArrayTexture||v.isData3DTexture,nt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const ft=R.get(v),Tn=R.get(F),at=R.get(ft.__renderTarget),wn=R.get(Tn.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,at.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let jn=0;jn<ye;jn++)Qn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,R.get(v).__webglTexture,X,We+jn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,R.get(F).__webglTexture,ge,pt+jn)),O.blitFramebuffer(we,ke,Se,me,be,et,Se,me,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||R.has(v)){const ft=R.get(v),Tn=R.get(F);_.bindFramebuffer(O.READ_FRAMEBUFFER,I),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let at=0;at<ye;at++)Qn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,X,We+at):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,X),nt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,ge,pt+at):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,ge),X!==0?O.blitFramebuffer(we,ke,Se,me,be,et,Se,me,O.COLOR_BUFFER_BIT,O.NEAREST):nt?O.copyTexSubImage3D(Me,ge,be,et,pt+at,we,ke,Se,me):O.copyTexSubImage2D(Me,ge,be,et,we,ke,Se,me);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else nt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Me,ge,be,et,pt,Se,me,ye,it,Tt,ot.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,ge,be,et,pt,Se,me,ye,it,ot.data):O.texSubImage3D(Me,ge,be,et,pt,Se,me,ye,it,Tt,ot):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,be,et,Se,me,it,Tt,ot.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,be,et,ot.width,ot.height,it,ot.data):O.texSubImage2D(O.TEXTURE_2D,ge,be,et,Se,me,it,Tt,ot);_.pixelStorei(O.UNPACK_ROW_LENGTH,Pt),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Gt),_.pixelStorei(O.UNPACK_SKIP_ROWS,nn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,bn),ge===0&&F.generateMipmaps&&O.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(v){R.get(v).__webglFramebuffer===void 0&&U.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?U.setTextureCube(v,0):v.isData3DTexture?U.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?U.setTexture2DArray(v,0):U.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){te=0,P=0,q=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}async function Qm(){const i=async r=>{const s=await fetch(`data/${r}.json`,{cache:"no-cache"});if(!s.ok)throw new Error(`data/${r}.json: ${s.status}`);return s.json()},[e,t,n]=await Promise.all([i("building"),i("works"),i("images")]);return{building:e,works:t,images:n}}const el=i=>{const e=i*100;return e>=100?`${Math.round(e)}`:`${Math.round(e*10)/10}`},Zl=i=>`${el(i.h)} × ${el(i.w)} cm`,Jl=i=>i.title.trim()||"Untitled",jm="#d8231b",ys=.35;function eg(i){const e=new Map(i.rooms.map(o=>[o.id,o])),t=[],n=[],r=[],s=[],a=(o,u,f)=>i.doors.filter(h=>h.wall===u&&(h.a===o.id&&Math.abs(h.pa-f)<.001||h.b===o.id&&Math.abs(h.pb-f)<.001)).map(h=>[h.u0,h.u1,h.h]);for(const o of i.rooms){const u=o.ceiling==="flat",f=[{axis:"x",plane:o.z0,u0:o.x0,u1:o.x1,n:[0,1]},{axis:"x",plane:o.z1,u0:o.x0,u1:o.x1,n:[0,-1]},{axis:"z",plane:o.x0,u0:o.z0,u1:o.z1,n:[1,0]},{axis:"z",plane:o.x1,u0:o.z0,u1:o.z1,n:[-1,0]}];for(const h of f){const d=a(o,h.axis,h.plane);t.push({key:`${o.id}:${h.axis}:${h.plane}`,room:o,axis:h.axis,plane:h.plane,u0:h.u0,u1:h.u1,n:h.n,right:[h.n[1],-h.n[0]],h:u?o.top:o.spring,doors:d,cornerA:!0,cornerB:!0,free:null,lunette:o.ceiling==="vault"&&h.axis!==o.axis});let g=h.u0-ys;const M=-ys,m=[...d].sort((y,L)=>y[0]-L[0]),p=(y,L)=>{if(L-y<.001)return;const S=h.plane,T=h.plane+(h.axis==="x"?h.n[1]:h.n[0])*M,E=Math.min(S,T),b=Math.max(S,T);s.push(h.axis==="x"?{x0:y,x1:L,z0:E,z1:b}:{x0:E,x1:b,z0:y,z1:L})};for(const[y,L]of m)p(g,y),g=L;p(g,h.u1+ys)}}for(const o of i.doors){const u=Math.min(o.pa,o.pb),f=Math.max(o.pa,o.pb),h=e.get(o.a),d=(M,m,p)=>o.wall==="x"?[M,m,p]:[p,m,M],g=(M,m)=>{const p=[d(M,0,u),d(M,0,f),d(M,o.h,f),d(M,o.h,u)],y=o.wall==="x"?[m,0,0]:[0,0,m];n.push({p,n:y})};g(o.u0,1),g(o.u1,-1),n.push({p:[d(o.u0,o.h,u),d(o.u1,o.h,u),d(o.u1,o.h,f),d(o.u0,o.h,f)],n:[0,-1,0]}),r.push({room:h,r:o.wall==="x"?{x0:o.u0,x1:o.u1,z0:u,z1:f}:{x0:u,x1:f,z0:o.u0,z1:o.u1}});for(const[M,m]of[[o.u0-.6,o.u0],[o.u1,o.u1+.6]])s.push(o.wall==="x"?{x0:M,x1:m,z0:u-.05,z1:f+.05}:{x0:u-.05,x1:f+.05,z0:M,z1:m})}for(const o of i.walls){const u=e.get(o.room),f=Math.abs(o.z1-o.z0)<1e-6?"x":"z",h=f==="x"?o.z0:o.x0,d=o.t/2,g=f==="x"?Math.min(o.x0,o.x1):Math.min(o.z0,o.z1),M=f==="x"?Math.max(o.x0,o.x1):Math.max(o.z0,o.z1);for(const p of[-1,1]){const y=f==="x"?[0,p]:[p,0];t.push({key:`${o.id}:${p}`,room:u,axis:f,plane:h+p*d,u0:g,u1:M,n:y,right:[y[1],-y[0]],h:o.h,doors:[],cornerA:!1,cornerB:!1,free:o,lunette:!1})}const m=(p,y,L)=>f==="x"?[p,y,L]:[L,y,p];for(const[p,y]of[[g,-1],[M,1]])n.push({p:[m(p,0,h-d),m(p,0,h+d),m(p,o.h,h+d),m(p,o.h,h-d)],n:f==="x"?[y,0,0]:[0,0,y]});n.push({p:[m(g,o.h,h-d),m(M,o.h,h-d),m(M,o.h,h+d),m(g,o.h,h+d)],n:[0,1,0]}),s.push(f==="x"?{x0:g,x1:M,z0:h-d,z1:h+d}:{x0:h-d,x1:h+d,z0:g,z1:M})}const l=[...s];for(const o of i.rails??[])s.push({x0:Math.min(o.x0,o.x1)-.05,x1:Math.max(o.x0,o.x1)+.05,z0:Math.min(o.z0,o.z1)-.05,z1:Math.max(o.z0,o.z1)+.05});const c={x0:Math.min(...i.rooms.map(o=>o.x0))-2,x1:Math.max(...i.rooms.map(o=>o.x1))+2,z0:Math.min(...i.rooms.map(o=>o.z0))-2,z1:Math.max(...i.rooms.map(o=>o.z1))+2};return{rooms:i.rooms,byId:e,faces:t,reveals:n,thresholds:r,solids:s,sight:l,bounds:c}}const Rt=(i,e,t)=>i.axis==="x"?[e,t,i.plane]:[i.plane,t,e],tl=i=>i.axis==="x"?i.right[0]:i.right[1];function tg(i,e,t,n,r,s=0){const a=n-e,l=r-t;for(const c of i){if(Math.max(e,n)<c.x0||Math.min(e,n)>c.x1||Math.max(t,r)<c.z0||Math.min(t,r)>c.z1)continue;let o=0,u=1;const f=(h,d)=>{if(Math.abs(h)<1e-12)return d>=0;const g=d/h;if(h<0){if(g>u)return!1;g>o&&(o=g)}else{if(g<o)return!1;g<u&&(u=g)}return!0};if(f(-a,e-c.x0)&&f(a,c.x1-e)&&f(-l,t-c.z0)&&f(l,c.z1-t)&&u-o>1e-4&&u>s&&o<1-s)return!0}return!1}const ng=(i,e,t)=>i.rooms.find(n=>e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1)??null,Ur=(i,e,t)=>i.spring+(i.top-i.spring)*Math.sqrt(Math.max(0,1-(2*e/t)**2)),Nr=.22,Fr=.145,nl=.15,bs=1.6,il=.6,rl=.55,ga=.7,_a=i=>{const e=Math.min(.28,.045+.09*Math.max(i.w,i.h));return i.fw?Math.min(i.fw,e):Math.min(.2,Math.max(.05,.05+.03*Math.max(i.w,i.h)))},Bt=i=>{const e=_a(i);return[i.w+2*e,i.h+2*e]};function Ql(i){let e=[[i.u0+(i.cornerA?il:.25),i.u1-(i.cornerB?il:.25)]];for(const[t,n]of i.doors){const r=[];for(const[s,a]of e){const l=t-rl,c=n+rl;if(c<=s||l>=a){r.push([s,a]);continue}l>s&&r.push([s,l]),c<a&&r.push([c,a])}e=r}return e.filter(([t,n])=>n-t>=ga).map(([t,n])=>({face:i,a:t,b:n}))}function ig(i,e){const t=i.faces.filter(s=>s.room===e&&!s.free),n=s=>s.axis==="x"&&s.n[1]>0?0:s.axis==="z"&&s.n[0]<0?1:s.axis==="x"?2:3;t.sort((s,a)=>n(s)-n(a));const r=[];for(const s of t){const a=Ql(s);n(s)>=2&&a.reverse(),r.push(...a)}return r}function rg(i,e,t=[]){const n=[],r=[],s=new Map;for(const o of e)s.has(o.room)||s.set(o.room,[]),s.get(o.room).push(o);const a=(o,u,f,h,d,g=!1)=>{const[M,m]=Bt(o),p=_a(o),y=Rt(u,f,h),L=[u.n[0],0,u.n[1]],S=[u.right[0],0,u.right[1]],T=.05+Math.min(.09,p*.45);let E=null;if(d){const b=f+d*tl(u)*(M/2+nl+Nr/2),x=g?h-m/2+Fr/2:Math.min(1.45,Math.max(1.05,h-m/2+Fr/2));E=Rt(u,b,x)}n.push({work:o,face:u,pos:y,ow:M,oh:m,fw:p,depth:T,label:E,normal:L,right:S,up:[0,1,0]})},l=new Set,c=(o,u,f)=>{const h=e.find(M=>o.test(M.fr)||o.test(M.title)),d=i.faces.find(M=>{var m;return((m=M.free)==null?void 0:m.id)===u&&(M.axis==="x"?M.n[1]:M.n[0])===f});if(!h||!d)return;const[,g]=Bt(h);a(h,d,(d.u0+d.u1)/2,Math.max(bs-.05,g/2+.85),1),l.add(h.id)};c(/Joconde|Mona Lisa/i,"joconde",-1),c(/Noces de Cana|Wedding at Cana/i,"cana",1);for(const o of i.rooms){const u=o.ceiling==="flat"?o.top:o.spring;let f=(s.get(o.id)??[]).filter(E=>!l.has(E.id));const h=f.filter(E=>/^plafond/i.test(E.fr)||Bt(E)[1]>u-.9&&o.ceiling!=="flat");if(h.length){f=f.filter(C=>!h.includes(C));const E=o.axis==="x"?[o.x0,o.x1]:[o.z0,o.z1],b=E[1]-E[0],x=o.axis==="x"?o.z1-o.z0:o.x1-o.x0,w=o.axis==="x"?(o.z0+o.z1)/2:(o.x0+o.x1)/2;h.forEach((C,N)=>{const[D,H]=Bt(C),I=_a(C),z=E[0]+b*(N+1)/(h.length+1),te=o.ceiling==="cove"?o.top-o.spring:0,P=Math.min(o.x1-o.x0,o.z1-o.z0)-2*te,q=o.ceiling==="vault"?Ur(o,Math.min(x/2-.05,D/2+.15),x)-.12:o.ceiling==="cove"&&Math.max(D,H)>P-.2?o.spring+.05:o.top-.15,V=o.axis==="x"?[z,q,w]:[w,q,z],ee=o.axis==="x"?[1,0,0]:[0,0,1],J=o.axis==="x"?[0,0,-1]:[1,0,0];n.push({work:C,face:null,pos:V,ow:D,oh:H,fw:I,depth:.05+Math.min(.09,I*.45),label:null,normal:[0,-1,0],right:J,up:ee})})}if(!f.length)continue;let d=ig(i,o);for(const E of t)d=d.flatMap(b=>{if(b.face.key!==E.face||E.b<=b.a||E.a>=b.b)return[b];const x=[];return E.a-b.a>=ga&&x.push({...b,b:E.a}),b.b-E.b>=ga&&x.push({...b,a:E.b}),x});for(const E of i.faces.filter(b=>b.room===o&&b.free&&!/joconde|cana/.test(b.free.id)))d.push(...Ql(E));if(!d.length){r.push(...f);continue}const g=[...f].sort((E,b)=>E.year-b.year||E.artist.localeCompare(b.artist)),M=d.reduce((E,b)=>E+(b.b-b.a),0),m=Math.max(.45,Math.min(1,M/g.reduce((E,b)=>E+Bt(b)[0]+.35*Bt(b)[0]+.3,0))),p=E=>Math.max(.3,Math.min(1.4,.35*E+.3)*m);let y=g.map(E=>({works:[E],w:Bt(E)[0]}));const L=()=>y.reduce((E,b)=>E+b.w+p(b.w),0);for(const E of[2,3])for(;L()>M*.97;){let b=-1,x=1/0;for(let N=0;N+1<y.length;N++){const D=y[N],H=y[N+1];if(D.works.length+H.works.length>E||[...D.works,...H.works].reduce((te,P)=>te+Bt(P)[1]+.3,0)>u-.9)continue;const z=Math.max(D.w,H.w);z<x&&(x=z,b=N)}if(b<0)break;const w=y[b],C=y[b+1];y.splice(b,2,{works:[...w.works,...C.works],w:Math.max(w.w,C.w)})}const S=E=>{const b=d.map(()=>[]),x=d.map(D=>D.b-D.a);if(!E){for(const H of[...y].sort((I,z)=>z.w-I.w)){let I=-1;if(x.forEach((z,te)=>{z>=H.w+.2&&(I<0||z>x[I])&&(I=te)}),I<0){r.push(...H.works);continue}b[I].push(H),x[I]-=H.w+p(H.w)*.6}const D=new Map(y.map((H,I)=>[H,I]));for(const H of b)H.sort((I,z)=>D.get(I)-D.get(z));return b}const w=Math.min(1,L()/M);let C=0,N=0;for(const D of y){const H=p(D.w);for(;C<d.length;){const I=d[C].b-d[C].a;if(D.w+.2>I-N){C++,N=0;continue}if(N>0&&N+D.w+H>I*Math.max(w,.35)+.25){C++,N=0;continue}break}if(C>=d.length)return null;b[C].push(D),N+=D.w+H}return b},T=S(!0)??S(!1);if(!T){r.push(...f);continue}T.forEach((E,b)=>{if(!E.length)return;const x=d[b],w=x.b-x.a,C=E.reduce((q,V)=>q+V.w,0),N=C/E.length;let D=(w-C)/(E.length+1);D=Math.min(D,Math.max(1.6,1.3*N)),D<.08&&(D=.08);const H=C+D*(E.length-1);let I=(x.a+x.b)/2-H/2;const z=x.face,te=tl(z),P=Math.min(o.ceiling==="flat"?o.top:o.spring,z.h);E.forEach((q,V)=>{const ee=I+q.w/2,J=[...q.works].sort((Ee,le)=>Bt(le)[0]*Bt(le)[1]-Bt(Ee)[0]*Bt(Ee)[1]),se=J.map(Ee=>Bt(Ee)[1]),ue=.3,Ne=se.reduce((Ee,le)=>Ee+le,0)+ue*(se.length-1);let Ae=J.length===1?Math.max(bs-Ne/2,.6):Math.max(.75,bs-Ne/2+.35);Ae=Math.max(.35,Math.min(Ae,P-.45-Ne));const De=V<E.length-1?D:x.b-(I+q.w),K=V>0?D:I-x.a,j=(te>0?De:K)>=Nr+nl+.05?1:-1;let _e=Ae;J.forEach((Ee,le)=>{const Ue=se[le];a(Ee,z,ee,_e+Ue/2,j,J.length>1),_e+=Ue+ue}),I+=q.w+D})})}return{items:n,unplaced:r}}const Ii=40,xr=24,sl="#f2f1ee",sg="#f7f7f5",kr="#efeee9",jl=.9,ag=.76,Ua=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Gr=`
varying vec3 vW;
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Vr=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Na=`
  uniform vec4 uSky; uniform float uTop;
  // light from the skylight: more the nearer (in plan) and the higher up a point is
  float skyLight(vec3 p) {
    if (uSky.z <= uSky.x) return 0.0;
    vec2 c = clamp(p.xz, uSky.xy, uSky.zw);
    float d = length(p.xz - c);
    return exp(-d / 7.0) * (0.35 + 0.65 * clamp(p.y / uTop, 0.0, 1.0));
  }
`,Fa=i=>({uSky:{value:i.rect},uTop:{value:i.top}});function og(i,e,t){const n=(r,s,a)=>{const l=r.slice(0,s);for(;l.length<s;)l.push(a());return l};return new yt({uniforms:{uB:{value:Math.min(i.boxes.length,Ii)},uBC:{value:n(i.boxes.map(r=>r.c),Ii,()=>new G(0,-99,0))},uBS:{value:n(i.boxes.map(r=>r.s),Ii,()=>new G)},uFN:{value:i.normal},uFR:{value:i.right},uAxisX:{value:i.axisX?1:0},uU0:{value:i.u0},uU1:{value:i.u1},uCA:{value:i.cornerA?1:0},uCB:{value:i.cornerB?1:0},uSpring:{value:i.spring},uAlb:{value:e},uAmb:{value:jl},...Fa(t)},vertexShader:Gr,fragmentShader:`
      #define MAXB ${Ii}
      uniform int uB; uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uSpring;
      uniform vec3 uAlb; uniform float uAmb;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Na}
      ${Ua}
      float occ(float d, float k, float r) { return 1.0 - k * exp(-max(d, 0.0) / r); }
      void main() {
        vec3 n = normalize(vN);
        // a picture's shadow: its box, dropped a little and softened by how far it stands off the wall
        float shade = 1.0;
        for (int j = 0; j < MAXB; j++) {
          if (j >= uB) break;
          vec3 q = vW - uBC[j];
          vec2 P = vec2(dot(q, uFR), q.y);
          vec2 hs = uBS[j].xy;
          float dep = uBS[j].z;
          float drop = dep * 0.9 + 0.006;
          float soft = 0.012 + dep * 0.55;
          vec2 e = abs(P + vec2(0.0, drop)) - hs;
          float d = length(max(e, 0.0)) + min(max(e.x, e.y), 0.0);
          shade *= 1.0 - 0.34 * (1.0 - smoothstep(-soft, soft, d));
          // the thin contact line right round the frame
          vec2 e2 = abs(P) - hs;
          float d2 = length(max(e2, 0.0));
          shade *= 1.0 - 0.16 * exp(-d2 / 0.006) * step(0.0, max(e2.x, e2.y));
        }
        float ao = occ(vW.y, 0.30, 0.32);
        float u = uAxisX > 0.5 ? vW.x : vW.z;
        if (uCA > 0.5) ao *= occ(u - uU0, 0.22, 0.35);
        if (uCB > 0.5) ao *= occ(uU1 - u, 0.22, 0.35);
        ao *= occ(uSpring - vW.y, 0.10, 0.5);
        float amb = uAmb * (0.93 + 0.06 * dot(n.xz, vec2(0.45, 0.893))) * (0.95 + 0.07 * clamp(vW.y / uSpring, 0.0, 1.0));
        amb += 0.10 * skyLight(vW);
        vec2 t = abs(n.x) > 0.5 ? vW.zy : vW.xy;
        float grain = 1.0 + 0.018 * (vnoise(t * 41.0) - 0.5) + 0.012 * (fbm(t * 1.7) - 0.5);
        vec3 alb = uAlb * grain;
        if (vW.y < 0.015) alb *= 0.25;
        gl_FragColor = vec4(alb * amb * ao * shade, 1.0);
        ${Vr}
      }`})}function al(i,e){return new yt({uniforms:{uAlb:{value:i},uAmb:{value:jl},...Fa(e)},vertexShader:Gr,fragmentShader:`
      uniform vec3 uAlb; uniform float uAmb;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Na}
      ${Ua}
      void main() {
        vec3 n = normalize(vN);
        float down = clamp(-n.y, 0.0, 1.0);
        float amb = uAmb * (0.97 - 0.05 * down + 0.04 * dot(n.xz, vec2(0.45, 0.893))) + 0.16 * skyLight(vW);
        float grain = 1.0 + 0.012 * (vnoise(vW.xz * 23.0 + vW.y * 7.0) - 0.5);
        if (vW.y < 0.015) amb *= 0.3;
        gl_FragColor = vec4(uAlb * amb * grain, 1.0);
        ${Vr}
      }`})}function lg(){return new yt({toneMapped:!1,vertexShader:Gr,fragmentShader:`
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      void main() {
        vec2 g = abs(fract(vW.xz / vec2(1.25, 0.95) + 0.5) - 0.5) * vec2(1.25, 0.95);
        float bar = 1.0 - smoothstep(0.012, 0.022, min(g.x, g.y));
        vec3 c = mix(vec3(1.0, 1.0, 0.995), vec3(0.86, 0.865, 0.87), bar);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})}function cg(i,e,t,n){const r=t.slice(0,xr);for(;r.length<xr;)r.push(new Ze(1e5,1e5,1e5,1e5));return new yt({uniforms:{uRefl:{value:i},uTexMat:{value:e},uAmb:{value:ag},uSeg:{value:r},uNSeg:{value:Math.min(t.length,xr)},...Fa(n)},vertexShader:`
      uniform mat4 uTexMat;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = vec3(0.0, 1.0, 0.0); vUv = uv;
        vR = uTexMat * w;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      #define MAXSEG ${xr}
      uniform sampler2D uRefl;
      uniform float uAmb;
      uniform vec4 uSeg[MAXSEG]; uniform int uNSeg;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      ${Na}
      ${Ua}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      float segDist(vec2 p, vec4 s) {
        vec2 a = s.xy, b = s.zw, ab = b - a;
        float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
        return length(p - a - ab * t);
      }
      void main() {
        vec2 xz = vW.xz;
        float m = 0.55 * fbm(xz * 0.45) + 0.30 * fbm(xz * 2.6 + 5.0) + 0.15 * vnoise(xz * 23.0);
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        float speck = step(0.93, vnoise(xz * 140.0));
        alb = mix(alb, alb * 1.35, speck * 0.5);
        vec2 g = abs(fract(xz / 2.1 + 0.5) - 0.5) * 2.1;
        float joint = min(g.x, g.y);
        alb *= mix(0.55, 1.0, smoothstep(0.0015, 0.0045, joint));
        float ao = 1.0;
        for (int k = 0; k < MAXSEG; k++) {
          if (k >= uNSeg) break;
          float d = segDist(xz, uSeg[k]);
          ao *= 1.0 - 0.42 * exp(-d / 0.28);
        }
        vec3 base = alb * (vec3(uAmb) * ao * (1.0 + 0.10 * skyLight(vec3(vW.x, 0.0, vW.z))));
        vec2 ruv = vR.xy / vR.w;
        vec2 wob = (vec2(fbm(xz * 7.0 + 3.1), fbm(xz * 7.0 - 7.3)) - 0.5) * 0.010;
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        vec3 rc = vec3(0.0);
        for (int k = 0; k < 8; k++) rc += texture2D(uRefl, ruv + wob + DISC[k] * blur).rgb;
        rc /= 8.0;
        float F = 0.045 + 0.955 * pow(1.0 - max(V.y, 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m);
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${Vr}
      }`})}function hg(i){return new yt({uniforms:{uMap:{value:i}},toneMapped:!1,vertexShader:`
      attribute float aSide; attribute vec3 aCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide; vCol = aCol;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec3 n = normalize(vN);
        vec3 c = texture2D(uMap, vUv).rgb;
        float lit = 1.0;
        if (vSide > 1.5) { c = vCol; lit = 0.80 + 0.16 * n.y; lit *= 0.93 + 0.07 * abs(dot(n, vec3(0.45, 0.0, 0.893))); }
        else if (vSide > 0.5) lit = 0.62 + 0.2 * n.y;
        gl_FragColor = vec4(c * lit, 1.0);
        #include <colorspace_fragment>
      }`})}function ug(i){return new yt({uniforms:{uMap:{value:i}},vertexShader:Gr,fragmentShader:`
      uniform sampler2D uMap;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      void main() {
        vec3 c = texture2D(uMap, vUv).rgb;
        gl_FragColor = vec4(c * 0.86, 1.0);
        ${Vr}
      }`})}const Ht=i=>new G(i[0],i[1],i[2]);class qn{constructor(){he(this,"pos",[]);he(this,"nor",[]);he(this,"uv",[]);he(this,"idx",[]);he(this,"side",[]);he(this,"col",[])}quad(e,t,n=[[0,0],[1,0],[1,1],[0,1]],r=0,s=null,a){const l=new G().crossVectors(Ht(e[1]).sub(Ht(e[0])),Ht(e[3]).sub(Ht(e[0])));l.lengthSq()<1e-14&&l.crossVectors(Ht(e[2]).sub(Ht(e[1])),Ht(e[3]).sub(Ht(e[1]))),l.normalize(),l.dot(Ht(t))<0&&(e=[e[0],e[3],e[2],e[1]],n=[n[0],n[3],n[2],n[1]],a&&(a=[a[0],a[3],a[2],a[1]]),l.negate());const c=this.pos.length/3;e.forEach((o,u)=>{this.pos.push(o[0],o[1],o[2]);const f=a?a[u]:[l.x,l.y,l.z];this.nor.push(f[0],f[1],f[2]),this.uv.push(n[u][0],n[u][1]),this.side.push(r),s?this.col.push(s.r,s.g,s.b):this.col.push(0,0,0)}),this.idx.push(c,c+1,c+2,c,c+2,c+3)}get empty(){return this.idx.length===0}geometry(e=!1){const t=new en;return t.setAttribute("position",new Mt(this.pos,3)),t.setAttribute("normal",new Mt(this.nor,3)),t.setAttribute("uv",new Mt(this.uv,2)),e&&(t.setAttribute("aSide",new Mt(this.side,1)),t.setAttribute("aCol",new Mt(this.col,3))),t.setIndex(this.idx),t.computeBoundingSphere(),t}}function fg(i){const e={rect:new Ze(0,0,0,0),top:i.top};if(!i.sky)return e;if(i.ceiling==="vault"){const n=i.axis==="x"?i.z1-i.z0:i.x1-i.x0,r=i.sky*n/2;return i.axis==="x"?{rect:new Ze(i.x0+1,(i.z0+i.z1)/2-r,i.x1-1,(i.z0+i.z1)/2+r),top:i.top}:{rect:new Ze((i.x0+i.x1)/2-r,i.z0+1,(i.x0+i.x1)/2+r,i.z1-1),top:i.top}}const t=ec(i);return t?{rect:new Ze(t.x0,t.z0,t.x1,t.z1),top:i.top}:e}function ec(i){if(!i.sky)return null;const e=i.ceiling==="cove"?i.top-i.spring:0,t=i.x0+e,n=i.x1-e,r=i.z0+e,s=i.z1-e,a=(1-i.sky)*Math.min(n-t,s-r)/2;return n-t-2*a<.5||s-r-2*a<.5?null:{x0:t+a,x1:n-a,z0:r+a,z1:s-a}}function dg(i,e,t){const n=new qn,r=[i.n[0],0,i.n[1]],s=(l,c,o,u)=>{l=Math.max(l,e),c=Math.min(c,t),!(c-l<1e-4||u-o<1e-4)&&n.quad([Rt(i,l,o),Rt(i,c,o),Rt(i,c,u),Rt(i,l,u)],r,[[l,o],[c,o],[c,u],[l,u]])};let a=i.u0;for(const[l,c,o]of[...i.doors].sort((u,f)=>u[0]-f[0]))l>a&&s(a,l,0,i.h),s(Math.max(l,a),c,o,i.h),a=Math.max(a,c);if(i.u1>a&&s(a,i.u1,0,i.h),i.lunette){const l=i.room,c=i.u1-i.u0,o=(i.u0+i.u1)/2,u=28;for(let f=0;f<u;f++){const h=i.u0+c*f/u,d=i.u0+c*(f+1)/u;if(d<=e||h>=t)continue;const g=Ur(l,h-o,c),M=Ur(l,d-o,c);n.quad([Rt(i,h,l.spring),Rt(i,d,l.spring),Rt(i,d,M),Rt(i,h,g)],r)}}return n}function pg(i){const e=new qn,t=new qn,n=[0,-1,0];if(i.ceiling==="vault"){const f=i.axis,h=f==="x"?i.z1-i.z0:i.x1-i.x0,d=f==="x"?(i.z0+i.z1)/2:(i.x0+i.x1)/2,g=f==="x"?i.x0:i.z0,M=f==="x"?i.x1:i.z1,m=(E,b)=>{const x=Ur(i,b,h);return f==="x"?[E,x,d+b]:[d+b,x,E]},p=32,y=i.sky*h/2,L=E=>{const b=h/2,x=i.top-i.spring,w=Math.max(-1,Math.min(1,E/b)),C=-Math.sqrt(Math.max(0,1-w*w))/x,N=-w/b,D=Math.hypot(C,N);return f==="x"?[0,C/D,N/D]:[N/D,C/D,0]},S=new Set;for(let E=0;E<=p;E++)S.add(-h/2+h*E/p);y>0&&(S.add(-y),S.add(y));const T=[...S].sort((E,b)=>E-b);for(let E=0;E+1<T.length;E++){const b=T[E],x=T[E+1],w=(b+x)/2;L(b),L(x),L(x),L(b);const C=(N,D,H)=>{const I=[m(D,b),m(D,x),m(H,x),m(H,b)],z=[L(b),L(x),L(x),L(b)];N.quad(I,L(w),void 0,0,null,z)};y>0&&Math.abs(w)<y?(C(e,g,g+1),C(t,g+1,M-1),C(e,M-1,M)):C(e,g,M)}return{plaster:e,glass:t}}let r=i.x0,s=i.x1,a=i.z0,l=i.z1,c=i.top;if(i.ceiling==="cove"){const f=i.top-i.spring,h=10;r+=f,s-=f,a+=f,l-=f;for(let d=0;d<h;d++){const g=d/h*Math.PI/2,M=(d+1)/h*Math.PI/2,m=f*(1-Math.cos(g)),p=f*(1-Math.cos(M)),y=i.spring+f*Math.sin(g),L=i.spring+f*Math.sin(M),S=(T,E,b)=>[E*Math.cos(T),-Math.sin(T),b*Math.cos(T)];e.quad([[i.x0+m,y,i.z0+m],[i.x1-m,y,i.z0+m],[i.x1-p,L,i.z0+p],[i.x0+p,L,i.z0+p]],S((g+M)/2,0,1),void 0,0,null,[S(g,0,1),S(g,0,1),S(M,0,1),S(M,0,1)]),e.quad([[i.x0+m,y,i.z1-m],[i.x1-m,y,i.z1-m],[i.x1-p,L,i.z1-p],[i.x0+p,L,i.z1-p]],S((g+M)/2,0,-1),void 0,0,null,[S(g,0,-1),S(g,0,-1),S(M,0,-1),S(M,0,-1)]),e.quad([[i.x0+m,y,i.z0+m],[i.x0+m,y,i.z1-m],[i.x0+p,L,i.z1-p],[i.x0+p,L,i.z0+p]],S((g+M)/2,1,0),void 0,0,null,[S(g,1,0),S(g,1,0),S(M,1,0),S(M,1,0)]),e.quad([[i.x1-m,y,i.z0+m],[i.x1-m,y,i.z1-m],[i.x1-p,L,i.z1-p],[i.x1-p,L,i.z0+p]],S((g+M)/2,-1,0),void 0,0,null,[S(g,-1,0),S(g,-1,0),S(M,-1,0),S(M,-1,0)])}}const o=ec(i),u=(f,h,d,g,M)=>{h-f>.001&&g-d>.001&&e.quad([[f,M,d],[h,M,d],[h,M,g],[f,M,g]],n)};if(!o)u(r,s,a,l,c);else{u(r,s,a,o.z0,c),u(r,s,o.z1,l,c),u(r,o.x0,o.z0,o.z1,c),u(o.x1,s,o.z0,o.z1,c);const f=.5,h=c+f;e.quad([[o.x0,c,o.z0],[o.x1,c,o.z0],[o.x1,h,o.z0],[o.x0,h,o.z0]],[0,0,1]),e.quad([[o.x0,c,o.z1],[o.x1,c,o.z1],[o.x1,h,o.z1],[o.x0,h,o.z1]],[0,0,-1]),e.quad([[o.x0,c,o.z0],[o.x0,c,o.z1],[o.x0,h,o.z1],[o.x0,h,o.z0]],[1,0,0]),e.quad([[o.x1,c,o.z0],[o.x1,c,o.z1],[o.x1,h,o.z1],[o.x1,h,o.z0]],[-1,0,0]),t.quad([[o.x0,h,o.z0],[o.x1,h,o.z0],[o.x1,h,o.z1],[o.x0,h,o.z1]],n)}return{plaster:e,glass:t}}const mg=new Be(kr),gg=new Be(kr).multiplyScalar(.9);function _g(i,e,t,n,r){const s=new qn,a=i/2,l=e/2,c=a+t,o=l+t,u=Math.min(t*.35,.05),f=a+u,h=l+u,d=n-Math.min(.025,t*.25),g=d-.008,M=mg,m=gg;s.quad([[-c,o,0],[c,o,0],[c,o,n],[-c,o,n]],[0,1,0],void 0,2,M),s.quad([[-c,-o,0],[c,-o,0],[c,-o,n],[-c,-o,n]],[0,-1,0],void 0,2,M),s.quad([[-c,-o,0],[-c,o,0],[-c,o,n],[-c,-o,n]],[-1,0,0],void 0,2,M),s.quad([[c,-o,0],[c,o,0],[c,o,n],[c,-o,n]],[1,0,0],void 0,2,M),s.quad([[-c,h,n],[c,h,n],[c,o,n],[-c,o,n]],[0,0,1],void 0,2,M),s.quad([[-c,-o,n],[c,-o,n],[c,-h,n],[-c,-h,n]],[0,0,1],void 0,2,M),s.quad([[-c,-h,n],[-f,-h,n],[-f,h,n],[-c,h,n]],[0,0,1],void 0,2,M),s.quad([[f,-h,n],[c,-h,n],[c,h,n],[f,h,n]],[0,0,1],void 0,2,M),s.quad([[-f,h,n],[f,h,n],[a,l,d],[-a,l,d]],[0,-1,1],void 0,2,m),s.quad([[-f,-h,n],[f,-h,n],[a,-l,d],[-a,-l,d]],[0,1,1],void 0,2,m),s.quad([[-f,-h,n],[-f,h,n],[-a,l,d],[-a,-l,d]],[1,0,1],void 0,2,m),s.quad([[f,-h,n],[f,h,n],[a,l,d],[a,-l,d]],[-1,0,1],void 0,2,m),s.quad([[-a,l,g],[a,l,g],[a,l,d],[-a,l,d]],[0,-1,0],void 0,2,m),s.quad([[-a,-l,g],[a,-l,g],[a,-l,d],[-a,-l,d]],[0,1,0],void 0,2,m),s.quad([[-a,-l,g],[-a,l,g],[-a,l,d],[-a,-l,d]],[1,0,0],void 0,2,m),s.quad([[a,-l,g],[a,l,g],[a,l,d],[a,-l,d]],[-1,0,0],void 0,2,m);const[p,y,L,S]=r;return s.quad([[-a,-l,g],[a,-l,g],[a,l,g],[-a,l,g]],[0,0,1],[[p,L],[y,L],[y,S],[p,S]],0,null),s.geometry(!0)}function xg(i,e,t){let n=0,r=1,s=0,a=1;if(!t)return[n,r,s,a];const l=i/e,c=t[0]/t[1];if(c>l){const o=l/c;n=.5-o/2,r=.5+o/2}else{const o=c/l;s=.5-o/2,a=.5+o/2}return[n,r,s,a]}const wr=(i,e,t,n,r=[0,1,0])=>{const s=new ct().makeBasis(Ht(t),Ht(r),Ht(e));i.quaternion.setFromRotationMatrix(s),i.position.set(n[0],n[1],n[2])},Qt='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif';function vg(i){const t=Math.round(640*Fr/Nr),n=document.createElement("canvas");n.width=640,n.height=t;const r=n.getContext("2d");r.fillStyle="#f6f5f1",r.fillRect(0,0,640,t),r.fillStyle="#121212";const s=38;let a=76;const l=[[`500 40px ${Qt}`,i.artist||"Unknown artist",48],[`italic 500 40px ${Qt}`,Jl(i),46]];for(const c of[i.date,[i.medium,Zl(i)].filter(Boolean).join(" · ")])c&&l.push([`400 30px ${Qt}`,c,37]);for(const[c,o,u]of l)if(r.font=c,a=Mg(r,o,s,a,640-2*s,u,a>t-40?1:2),a+=6,a>t-10)break;return n}function Mg(i,e,t,n,r,s,a){let l="",c=0;const o=e.split(" ");for(let u=0;u<o.length;u++){const f=l?l+" "+o[u]:o[u];if(i.measureText(f).width>r&&l){if(c+1>=a){l=ol(i,l+" "+o.slice(u).join(" "),r);break}i.fillText(l,t,n),n+=s,c++,l=o[u]}else l=f}return i.fillText(ol(i,l,r),t,n),n+s}function ol(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(n+"…").width>t;)n=n.slice(0,-1);return n+"…"}const ll=900;function Sg(i){const n=document.createElement("canvas");n.width=2.3*ll,n.height=.76*ll;const r=n.getContext("2d");r.fillStyle="#262625",r.font=`300 150px ${Qt}`,r.fillText(i.title,6,138),r.font=`400 58px ${Qt}`,r.fillText(i.sub,10,236),r.fillStyle="#4a4946",r.font=`400 34px ${Qt}`,r.fillText(i.how,10,312),r.fillStyle="#6d6c68",r.font=`400 22px ${Qt}`;let s=392;for(const l of i.credit.split(`
`))r.fillText(l,10,s),s+=34;const a=new Vi(n);return a.colorSpace=vt,a.anisotropy=8,{tex:a,w:2.3,h:.76}}function Eg(i,e,t,n,r,s,a,l){const c=new Xn,o=[],u=[],f=[],h=(P,q,V=0)=>{o.push(P);const ee=new Ut(P,q);return c.add(ee),V&&ee.layers.set(V),ee},d=new Map(i.rooms.map(P=>[P.id,fg(P)])),g=new Map(i.rooms.map(P=>{const q=al(new Be(sg),d.get(P.id));return u.push(q),[P.id,q]})),M=new Be(sl),m=new Map;for(const P of e)P.face&&(m.has(P.face)||m.set(P.face,[]),m.get(P.face).push(P));for(const P of i.faces){const q=P.u1-P.u0,V=Math.max(1,Math.ceil(q/14)),ee=m.get(P)??[];for(let J=0;J<V;J++){const se=P.u0+q*J/V,ue=P.u0+q*(J+1)/V,Ne=dg(P,J===0?-1/0:se,J===V-1?1/0:ue);if(Ne.empty)continue;const Ae=j=>P.axis==="x"?j.pos[0]:j.pos[2],De=ee.filter(j=>Ae(j)+j.ow/2+.6>se&&Ae(j)-j.ow/2-.6<ue).slice(0,Ii).map(j=>({c:Ht(j.pos),s:new G(j.ow/2,j.oh/2,j.depth)})),K=og({normal:new G(P.n[0],0,P.n[1]),right:new G(P.right[0],0,P.right[1]),axisX:P.axis==="x",u0:P.u0,u1:P.u1,cornerA:P.cornerA,cornerB:P.cornerB,spring:P.lunette?P.room.top:P.h,boxes:De},M,d.get(P.room.id));u.push(K),h(Ne.geometry(),K).userData.face=P}}const p=new qn;for(const P of i.reveals)p.quad(P.p,P.n);const y=al(new Be(sl),{rect:new Ze(0,0,0,0),top:10});u.push(y),h(p.geometry(),y);const L=lg();u.push(L);for(const P of i.rooms){const{plaster:q,glass:V}=pg(P);q.empty||h(q.geometry(),g.get(P.id)),V.empty||h(V.geometry(),L)}const S=[],T=new Map;for(const P of i.rooms){const q=[];for(const se of i.faces.filter(ue=>ue.room===P)){if(se.free){const Ae=Rt(se,se.u0,0),De=Rt(se,se.u1,0);q.push(new Ze(Ae[0],Ae[2],De[0],De[2]));continue}let ue=se.u0;const Ne=(Ae,De)=>{if(De-Ae>.05){const K=Rt(se,Ae,0),j=Rt(se,De,0);q.push(new Ze(K[0],K[2],j[0],j[2]))}};for(const[Ae,De]of[...se.doors].sort((K,j)=>K[0]-j[0]))Ne(ue,Ae),ue=De;Ne(ue,se.u1)}const V=cg(a,l,q,d.get(P.id));u.push(V),T.set(P.id,V);const ee=new qn;ee.quad([[P.x0,0,P.z0],[P.x1,0,P.z0],[P.x1,0,P.z1],[P.x0,0,P.z1]],[0,1,0]);for(const se of i.thresholds.filter(ue=>ue.room===P))ee.quad([[se.r.x0,0,se.r.z0],[se.r.x1,0,se.r.z0],[se.r.x1,0,se.r.z1],[se.r.x0,0,se.r.z1]],[0,1,0]);const J=h(ee.geometry(),V,1);J.userData.floor=P.id,S.push(J)}for(const P of t){const{tex:q,w:V,h:ee}=Sg(P);f.push(q);const J=new Yi({map:q,transparent:!0,depthWrite:!1,toneMapped:!1});u.push(J);const se=h(new Jn(V,ee),J);wr(se,P.normal,P.right,[P.pos[0]+P.normal[0]*.008,P.pos[1],P.pos[2]+P.normal[2]*.008])}const E=[],b=new Vi((()=>{const P=document.createElement("canvas");P.width=P.height=4;const q=P.getContext("2d");return q.fillStyle="#f6f5f1",q.fillRect(0,0,4,4),P})());b.colorSpace=vt,f.push(b);const x=new yi(Nr,Fr,.004).translate(0,0,.002);o.push(x);const w=ug(b);u.push(w);for(const P of e){const q=P.work,V=hg(n(q.id));u.push(V);const ee=_g(q.w,q.h,P.fw,P.depth,xg(q.w,q.h,r(q.id))),J=h(ee,V);wr(J,P.normal,P.right,P.pos,P.up),J.userData.work=q.id;let se=null;P.label&&(se=new Ut(x,w),c.add(se),wr(se,P.normal,P.right,P.label),se.userData.work=q.id,se.userData.label=!0),E.push({work:q,item:P,placed:{normal:P.normal},mesh:J,mat:V,w:P.ow,h:P.oh,label:se,dot:null,labelTex:null,farRange:[0,0]})}const C=new qn,N=new Be(kr),D=[];for(const P of e){const q=P.normal,V=P.right,ee=P.up,J=(j,_e,Ee)=>[0,1,2].map(le=>P.pos[le]+V[le]*j+ee[le]*_e+q[le]*Ee),se=P.work.w/2,ue=P.work.h/2,Ne=P.ow/2,Ae=P.oh/2,De=new Be(s(P.work.id)),K=C.pos.length/3;C.quad([J(-Ne,-Ae,.02),J(Ne,-Ae,.02),J(Ne,Ae,.02),J(-Ne,Ae,.02)],q,void 0,0,N),C.quad([J(-se,-ue,.03),J(se,-ue,.03),J(se,ue,.03),J(-se,ue,.03)],q,void 0,0,De),D.push([K,8])}const H=C.geometry(!0),I=new Mt(new Float32Array(C.pos.length/3),1);I.setUsage(Yc),H.setAttribute("aHide",I);const z=new yt({toneMapped:!1,vertexShader:`attribute vec3 aCol; attribute float aHide; varying vec3 vC; varying float vH;
      void main() { vC = aCol; vH = aHide; gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vC; varying float vH;
      void main() { if (vH > 0.5) discard; gl_FragColor = vec4(vC * 0.97, 1.0);
        #include <colorspace_fragment>
      }`});u.push(z);const te=h(H,z);return E.forEach((P,q)=>{P.farRange=D[q]}),{group:c,pictures:E,far:te,floors:S,dispose(){for(const P of o)P.dispose();for(const P of u)P.dispose();for(const P of f)P.dispose()}}}function yg(i){const e=new Xn,t=new Gh({color:kr,roughness:.6});e.add(new Zh(16777215,13223874,2.9));for(const n of i){const r=Math.hypot(n.x1-n.x0,n.z1-n.z0),s=Math.max(2,Math.round(r/1.5)+1),a=new Ir(.022,.026,n.h,14).translate(0,n.h/2,0);for(let c=0;c<s;c++){const o=c/(s-1),u=new Ut(a,t);u.position.set(n.x0+(n.x1-n.x0)*o,0,n.z0+(n.z1-n.z0)*o),e.add(u)}const l=new Ut(new Ir(.03,.03,r+.06,16).rotateZ(Math.PI/2),t);l.position.set((n.x0+n.x1)/2,n.h,(n.z0+n.z1)/2),l.rotation.y=-Math.atan2(n.z1-n.z0,n.x1-n.x0),e.add(l)}return e}function bg(i,e){const t=new Xn,n=1e3,r=.2;for(const s of e)for(const[a,l,c]of[[s.a,s.b,s.pa],[s.b,s.a,s.pb]]){const o=i.faces.find(T=>T.room.id===a&&!T.free&&T.axis===s.wall&&Math.abs(T.plane-c)<.001),u=i.byId.get(l);if(!o||!u)continue;const f=s.h+.32+r/2;if(f+r/2>o.h-.15)continue;const h=/^\d+$/.test(u.id)?u.id:"",d=document.createElement("canvas"),g=d.getContext("2d");g.font=`400 124px ${Qt}`;const M=h?g.measureText(h).width+60:0;g.font=`300 124px ${Qt}`;const m=g.measureText(u.name).width;d.width=Math.ceil(M+m+20),d.height=Math.round(r*n),g.fillStyle="#2a2a29",g.textBaseline="middle",h&&(g.font=`400 124px ${Qt}`,g.fillText(h,10,d.height/2)),g.font=`300 124px ${Qt}`,g.fillText(u.name,10+M,d.height/2);const p=new Vi(d);p.colorSpace=vt,p.anisotropy=8;const y=d.width/n,L=new Ut(new Jn(y,r),new Yi({map:p,transparent:!0,depthWrite:!1,toneMapped:!1})),S=Rt(o,(s.u0+s.u1)/2,f);wr(L,[o.n[0],0,o.n[1]],[o.right[0],0,o.right[1]],[S[0]+o.n[0]*.012,S[1],S[2]+o.n[1]*.012]),t.add(L)}return t}class Tg{constructor(e,t){he(this,"target");he(this,"texMat",new ct);he(this,"cam",new kt);he(this,"plane",new _n);he(this,"clip",new Ze);he(this,"q",new Ze);he(this,"n",new G(0,1,0));he(this,"p0",new G(0,0,0));he(this,"camPos",new G);he(this,"rot",new ct);he(this,"look",new G);he(this,"view",new G);he(this,"tgt",new G);he(this,"far",48);this.target=new Xt(e,t,{type:jt,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(e,t){this.target.setSize(Math.max(2,e),Math.max(2,t))}render(e,t,n,r){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const s=this.cam;s.position.copy(this.view),s.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),s.lookAt(this.tgt),s.fov=n.fov,s.aspect=n.aspect,s.near=n.near,s.far=Math.min(n.far,this.far),s.updateMatrixWorld(),s.updateProjectionMatrix(),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(s.projectionMatrix).multiply(s.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(s.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const a=s.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+a[8])/a[0],this.q.y=(Math.sign(this.clip.y)+a[9])/a[5],this.q.z=-1,this.q.w=(1+a[10])/a[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),a[2]=this.clip.x,a[6]=this.clip.y,a[10]=this.clip.z+1-.003,a[14]=this.clip.w;const l=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(t,s),r==null||r(e,s),e.setRenderTarget(l)}}const Ui=1.62,wg=12,Ag=6.5,Rg=2,Cg=1.7,Dn=1.15,cl=.0022,Pg=2.6,Lg=4.6,zt=.3;class Dg{constructor(e){he(this,"pos",new G(6.6,Ui,10.2));he(this,"vel",new G);he(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));he(this,"pitch",.05);he(this,"yawVel",0);he(this,"pitchVel",0);he(this,"keys",new Set);he(this,"taps",new Map);he(this,"frozen",!1);he(this,"moved",!1);he(this,"glide",new Ve);he(this,"spin",0);he(this,"goal",null);he(this,"solids",[]);he(this,"obstacles",[]);he(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=e,addEventListener("keydown",t=>{var n,r;t.metaKey||t.ctrlKey||t.altKey||(r=(n=t.target).closest)!=null&&r.call(n,"input, textarea, select")||(this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("message",t=>{var r;const n=(r=t.data)==null?void 0:r.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(t.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",t=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=t.movementX*cl,this.pitch=Math.max(-Dn,Math.min(Dn,this.pitch-t.movementY*cl)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(e,t){this.pos.x+=e,this.pos.z+=t,this.collide(),this.moved=!0,this.goal=null}turnBy(e,t){this.yaw+=e,this.pitch=Math.max(-Dn,Math.min(Dn,this.pitch+t)),this.moved=!0,this.goal=null}tap(e,t){this.taps.set(e,t)}update(e){const t=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[u,f]of this.taps)f-e<=0?this.taps.delete(u):this.taps.set(u,f-e);let n=0;t.has("ArrowLeft")&&(n+=1),t.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Rg-this.yawVel)*(1-Math.exp(-9*e)),this.yaw+=this.yawVel*e;let r=0;t.has("ArrowUp")&&(r+=1),t.has("ArrowDown")&&(r-=1),this.pitchVel+=(r*Cg-this.pitchVel)*(1-Math.exp(-9*e)),this.pitch+=this.pitchVel*e,(this.pitch>Dn||this.pitch<-Dn)&&(this.pitch=Math.max(-Dn,Math.min(Dn,this.pitch)),this.pitchVel=0);let s=0,a=0;t.has("KeyW")&&(s+=1),t.has("KeyS")&&(s-=1),t.has("KeyD")&&(a+=1),t.has("KeyA")&&(a-=1),(s||a||n||r)&&(this.moved=!0);let l=0,c=0;if(s||a){const u=t.has("ShiftLeft")||t.has("ShiftRight")?Lg:Pg,f=Math.hypot(s,a),h=Math.sin(this.yaw),d=Math.cos(this.yaw);l=(-h*s+d*a)/f*u,c=(-d*s-h*a)/f*u}const o=1-Math.exp(-(s||a?wg:Ag)*e);if(this.vel.x+=(l-this.vel.x)*o,this.vel.z+=(c-this.vel.z)*o,this.frozen||this.coast(e),this.vel.lengthSq()>1e-8){const u=this.pos.x,f=this.pos.z;this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.collide();const h=this.pos.x-(u+this.vel.x*e),d=this.pos.z-(f+this.vel.z*e),g=Math.hypot(h,d);if(g>1e-9){const M=h/g,m=d/g,p=this.vel.x*M+this.vel.z*m;p<0&&(this.vel.x-=M*p,this.vel.z-=m*p)}}}coast(e){const t=this.goal;if(t){const n=t.x-this.pos.x,r=t.z-this.pos.z,s=Math.hypot(n,r),a=1-Math.exp(-2.6*e),l=Math.min(s,Math.max(s*a,Math.min(s,.9*e)));if(s>1e-4){const c=this.pos.x,o=this.pos.z;this.pos.x+=n/s*l,this.pos.z+=r/s*l,this.collide(),Math.hypot(this.pos.x-c,this.pos.z-o)<l*.2&&(this.goal=null)}t.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(t.yaw-this.yaw),Math.cos(t.yaw-this.yaw))*a),t.pitch!==void 0&&(this.pitch+=(t.pitch-this.pitch)*a),s<.02&&(t.yaw===void 0||Math.abs(Math.atan2(Math.sin(t.yaw-this.yaw),Math.cos(t.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,r=this.pos.z;this.pos.x+=this.glide.x*e,this.pos.z+=this.glide.y*e,this.collide();const s=(this.pos.x-n)/Math.max(e,1e-6),a=(this.pos.z-r)/Math.max(e,1e-6);this.glide.set(s,a).multiplyScalar(Math.exp(-2.4*e)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*e,this.spin*=Math.exp(-3.2*e)):this.spin=0}collide(){const e=this.pos;for(let t=0;t<2;t++)for(const n of this.solids){const r=Math.max(n.x0,Math.min(e.x,n.x1)),s=Math.max(n.z0,Math.min(e.z,n.z1)),a=e.x-r,l=e.z-s,c=a*a+l*l;if(!(c>=zt*zt))if(c>1e-12){const o=Math.sqrt(c);e.x+=a/o*(zt-o),e.z+=l/o*(zt-o)}else{const o=[e.x-n.x0+zt,n.x1-e.x+zt,e.z-n.z0+zt,n.z1-e.z+zt],u=Math.min(...o);u===o[0]?e.x=n.x0-zt:u===o[1]?e.x=n.x1+zt:u===o[2]?e.z=n.z0-zt:e.z=n.z1+zt}}for(const t of this.obstacles){const n=e.x-t.x,r=e.z-t.z,s=Math.hypot(n,r),a=zt*.7+t.r;s<a&&s>1e-6&&(e.x=t.x+n/s*a,e.z=t.z+r/s*a)}e.x=Math.max(this.world.x0,Math.min(this.world.x1,e.x)),e.z=Math.max(this.world.z0,Math.min(this.world.z1,e.z))}apply(e){e.position.copy(this.pos),e.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const Ig=(i,e)=>"";class Ug{constructor(){he(this,"el");he(this,"tools");he(this,"low");he(this,"high");he(this,"cap");he(this,"frame");he(this,"sold");he(this,"hold");he(this,"zs",1);he(this,"zx",0);he(this,"zy",0);he(this,"fingers",new Map);he(this,"grip",null);he(this,"open",!1);he(this,"_busy",!1);he(this,"ask",null);he(this,"work",null);he(this,"px",[1,1]);he(this,"crop",[0,0,1,1]);he(this,"onClose",()=>{});he(this,"onShow",()=>{});he(this,"reserveRight",0);he(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools);const e=this.hold=document.createElement("div");e.className="frame-hold",this.frame.before(e),e.append(this.frame),this.sold=document.createElement("div"),this.sold.className="view-sold",this.sold.style.background=jm,this.sold.innerHTML="<span>SOLD</span>",e.append(this.sold),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&(this.zoomTo(1,0,0),this.fit())}),this.fingersOn()}get busy(){return this._busy}set busy(e){this._busy=e,this.el.classList.toggle("busy",e)}get zoomed(){return this.zs>1.02}zoomTo(e,t,n,r=!1){const s=this.frame.offsetWidth*e/2,a=this.frame.offsetHeight*e/2;this.zs=e,this.zx=Math.max(-s,Math.min(s,t)),this.zy=Math.max(-a,Math.min(a,n)),this.hold.classList.toggle("settle",r),this.hold.classList.toggle("zoomed",this.zoomed),this.hold.style.transform=e===1&&!this.zx&&!this.zy?"":`translate(${this.zx}px, ${this.zy}px) scale(${e})`}fingersOn(){const t=()=>{const r=[...this.fingers.values()];if(!r.length)return null;if(r.length===1)return{d:1,mx:r[0].x,my:r[0].y};const[s,a]=r;return{d:Math.max(24,Math.hypot(s.x-a.x,s.y-a.y)),mx:(s.x+a.x)/2,my:(s.y+a.y)/2}};this.el.addEventListener("pointerdown",r=>{r.pointerType!=="touch"||!this.open||this.busy||r.target.closest(".ask-btn, .ask-box, .view-tools, .view-sold")||(this.fingers.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.grip=t())}),this.el.addEventListener("pointermove",r=>{const s=this.fingers.get(r.pointerId);if(!s)return;s.x=r.clientX,s.y=r.clientY;const a=this.grip,l=t();if(this.grip=l,!a||!l||this.fingers.size===1&&!this.zoomed)return;const c=this.hold.getBoundingClientRect(),o=c.left+c.width/2-this.zx,u=c.top+c.height/2-this.zy,f=(a.mx-o-this.zx)/this.zs,h=(a.my-u-this.zy)/this.zs,d=Math.max(.6,Math.min(6,this.zs*(l.d/a.d)));this.zoomTo(d,l.mx-o-d*f,l.my-u-d*h)});const n=r=>{this.fingers.delete(r.pointerId)&&(this.grip=t(),!this.fingers.size&&this.zs<1.02&&this.zoomTo(1,0,0,!0))};this.el.addEventListener("pointerup",n),this.el.addEventListener("pointercancel",n),this.el.addEventListener("touchmove",r=>{(r.touches.length>1||this.zoomed)&&r.preventDefault()},{passive:!1});for(const r of["gesturestart","gesturechange"])document.addEventListener(r,s=>s.preventDefault())}show(e,t,n,r){var s;this.work=e,this.px=t??[1200,1200],this.crop=e.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.fingers.clear(),this.grip=null,this.zoomTo(1,0,0),this.low.src=n,this.high.src=r,this.caption(),this.sold.classList.toggle("on",!!e.sold),this.sold.classList.remove("show"),this.setFilter(Ig(e.id)),this.fit(),this.el.classList.add("on"),(s=this.ask)==null||s.reset(e),this.onShow(e)}caption(){const e=this.work;if(!e)return;const t=[`<i>${Ts(Jl(e))}</i>`,[e.artist,e.date].filter(Boolean).map(Ts).join(" &nbsp;·&nbsp; ")],n=[e.medium,Zl(e),e.inv].filter(Boolean).map(r=>Ts(r));n.length&&t.push(n.join(" &nbsp;·&nbsp; ")),t.push('<span class="credit">Photograph: Wikimedia Commons, public domain &nbsp;·&nbsp; musée du Louvre</span>'),this.cap.innerHTML=t.join("<br>")}hide(){var e;!this.open||this.busy||(this.open=!1,this.work=null,this.fingers.clear(),this.grip=null,this.el.classList.remove("on"),(e=this.ask)==null||e.close(),this.onClose())}setFilter(e){this.low.style.filter=e,this.high.style.filter=e}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(e){this.crop=e,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[r,s,a,l]=this.crop,c=this.px[0]*(a-r),o=this.px[1]*(l-s),u=innerWidth-2*28-this.reserveRight,f=innerHeight-2*28-64-n,h=Math.min(1,u/c,f/o),d=Math.round(c*h),g=Math.round(o*h);this.frame.style.width=`${d}px`,this.frame.style.height=`${g}px`;const M=d/(a-r),m=g/(l-s);for(const p of[this.low,this.high])Object.assign(p.style,{width:`${M}px`,height:`${m}px`,left:`${-r*M}px`,top:`${-s*m}px`})}}const Ts=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ng=4.5,Fg=380,Og=10,Bg=1.8;class zg{constructor(e,t,n,r,s,a){he(this,"ndc",new Ve);he(this,"ray",new kl);he(this,"v",new G);he(this,"d",null);he(this,"trail",[]);he(this,"pts",new Map);he(this,"two",null);he(this,"spent",!1);this.canvas=e,this.camera=t,this.player=n,this.pick=r,this.tap=s,this.enabled=a,e.addEventListener("pointerdown",l=>this.start(l)),e.addEventListener("pointermove",l=>this.move(l)),e.addEventListener("pointerup",l=>this.end(l)),e.addEventListener("pointercancel",l=>{this.lift(l.pointerId),this.d=null}),e.addEventListener("lostpointercapture",l=>{var c;this.pts.has(l.pointerId)&&this.lift(l.pointerId),((c=this.d)==null?void 0:c.id)===l.pointerId&&(this.d=null)}),e.addEventListener("touchstart",l=>l.preventDefault(),{passive:!1})}at(e){const t=this.canvas.getBoundingClientRect();return this.ndc.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}floorAt(e){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(e,this.camera);const t=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const r=-t.y/n.y;return r>30?null:new G(t.x+n.x*r,0,t.z+n.z*r)}start(e){var l;if(e.pointerType!=="touch"||!this.enabled())return;for(const c of[...this.pts.keys()])this.canvas.hasPointerCapture(c)||this.lift(c);if(this.d&&!this.canvas.hasPointerCapture(this.d.id)&&(this.d=null),e.preventDefault(),(l=getSelection())==null||l.removeAllRanges(),this.pts.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.canvas.setPointerCapture(e.pointerId),this.pts.size===2&&!this.spent){this.d=null,this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.two=this.pair(),this.trail=[];return}if(this.pts.size>1||this.spent||this.d)return;this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null;const t=this.at(e),n=this.pick(t),r=this.floorAt(t),s=!!r&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(r)-.05),a=s||(n.kind==="wall"||n.kind==="work")&&(n.dist??99)<=Ng?1:.6;this.d={id:e.pointerId,x:e.clientX,y:e.clientY,t:performance.now(),mode:s?"ground":"turn",grip:a,p0:s?r:null,moved:!1,lx:e.clientX,ly:e.clientY},this.trail=[]}pair(){const[e,t]=[...this.pts.values()];return{dist:Math.max(24,Math.hypot(e.x-t.x,e.y-t.y)),mx:(e.x+t.x)/2,my:(e.y+t.y)/2}}lift(e){this.pts.delete(e)&&(this.two&&this.pts.size<2?(this.two=null,this.spent=this.pts.size>0,this.coastOn("both")):this.pts.size||(this.spent=!1))}coastOn(e){const t=performance.now(),n=this.trail.filter(c=>t-c.t<120);if(!n.length||t-n[n.length-1].t>70)return;const r=Math.max(.03,(t-n[0].t)/1e3+1/60);let s=0,a=0,l=0;for(const c of n)s+=c.dx,a+=c.dz,l+=c.dyaw;e!=="turn"&&(this.player.glide.set(s/r,a/r),this.player.glide.length()>7&&this.player.glide.setLength(7)),e!=="ground"&&(this.player.spin=gn.clamp(l/r,-7,7))}move(e){const t=this.pts.get(e.pointerId);if(t&&(t.x=e.clientX,t.y=e.clientY),this.two&&t){e.preventDefault();const l=this.pair(),c=this.two,o=performance.now(),u=Bg*Math.log(l.dist/c.dist),f=gn.degToRad(this.camera.fov)/this.canvas.clientHeight,h=this.player.pos.x,d=this.player.pos.z;u&&this.player.drag(-Math.sin(this.player.yaw)*u,-Math.cos(this.player.yaw)*u);const g=(l.mx-c.mx)*f;for(this.player.turnBy(g,(l.my-c.my)*f),this.trail.push({t:o,dx:this.player.pos.x-h,dz:this.player.pos.z-d,dyaw:g});this.trail.length&&o-this.trail[0].t>120;)this.trail.shift();this.two=l;return}const n=this.d;if(!n||e.pointerId!==n.id)return;e.preventDefault(),!n.moved&&Math.hypot(e.clientX-n.x,e.clientY-n.y)>Og&&(n.moved=!0);const r=e.clientX-n.lx,s=e.clientY-n.ly;if(n.lx=e.clientX,n.ly=e.clientY,!n.moved)return;const a=performance.now();if(n.mode==="ground"&&n.p0){const l=this.floorAt(this.at(e));if(!l)return;let c=n.p0.x-l.x,o=n.p0.z-l.z;const u=Math.hypot(c,o);u>1.2&&(c*=1.2/u,o*=1.2/u);const f=this.player.pos.x,h=this.player.pos.z;this.player.drag(c,o),this.trail.push({t:a,dx:this.player.pos.x-f,dz:this.player.pos.z-h,dyaw:0})}else{const l=gn.degToRad(this.camera.fov)/this.canvas.clientHeight*n.grip;this.player.turnBy(r*l,s*l),this.trail.push({t:a,dx:0,dz:0,dyaw:r*l})}for(;this.trail.length&&a-this.trail[0].t>120;)this.trail.shift()}end(e){const t=!!this.two;if(this.lift(e.pointerId),t)return;const n=this.d;if(!(!n||e.pointerId!==n.id)){if(this.d=null,!n.moved&&performance.now()-n.t<Fg){this.tap(this.pick(this.at(e)));return}this.coastOn(n.mode)}}}const Hg=.62,ws=5,kg=.18;class Gg{constructor(e=!0,t=!1){he(this,"pic",null);he(this,"lit",null);he(this,"dark",0);he(this,"veil");he(this,"vScene",new Dl);he(this,"vCam",new Ia(-1,1,1,-1,0,1));he(this,"hintEl");he(this,"hinted",null);he(this,"hintDone",!1);he(this,"v",new G);he(this,"f",new G);this.veil=new Ut(new Jn(2,2),new Yi({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent=t?"TAP FOR FULL SCREEN":"CLICK FOR FULL SCREEN",e||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}reach(e){return Math.min(12,Math.max(2.6,1.8+2*Math.max(e.w,e.h)))}update(e,t,n,r,s){let a=null,l=1/0,c=1/0;if(s){const f=t.getWorldPosition(this.v),h=t.getWorldDirection(this.f);for(const d of n){const g=d.mesh.position,M=d.placed.normal,m=g.x-f.x,p=g.y-f.y,y=g.z-f.z,L=Math.hypot(m,p,y);if(L>this.reach(d)||M[0]*-m+M[2]*-y<=0)continue;const S=Math.acos(Math.min(1,(m*h.x+p*h.y+y*h.z)/L)),T=Math.atan2(Math.max(d.w,d.h)*.5,L)+.17;if(S>T||tg(r,f.x,f.z,g.x+M[0]*.05,g.z+M[2]*.05))continue;const E=S/T;E<l&&(l=E,a=d),d===this.pic&&(c=E)}this.pic&&c<l+.15&&(a=this.pic)}this.pic=a,a&&(this.lit=a);let o=0;if(a){const f=a.mesh.position.distanceTo(t.getWorldPosition(this.v)),h=this.reach(a),d=h*.4,g=Math.min(1,Math.max(0,(h-f)/(h-d)));o=Hg*g*g*(3-2*g)}this.dark+=(o-this.dark)*(1-Math.exp(-e/kg)),this.dark<.003&&!a&&(this.lit=null),!this.hintDone&&a&&this.dark>.12&&!this.hinted&&(this.hinted=a);const u=!!this.hinted&&a===this.hinted&&this.dark>.08;this.hinted&&!u&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",u)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(e,t,n){const r=this.lit;if(!r||this.dark<.003)return;this.veil.material.opacity=this.dark,e.autoClear=!1,e.render(this.vScene,this.vCam);const s=[r.mesh,r.label,r.dot].filter(c=>!!c);for(const c of s)c.layers.enable(ws);const a=n.layers.mask,l=t.background;n.layers.set(ws),t.background=null,e.render(t,n),t.background=l,n.layers.mask=a;for(const c of s)c.layers.disable(ws);e.autoClear=!0}}function hl(i){const t=document.createElement("canvas");t.width=t.height=32*i;const n=t.getContext("2d");n.scale(i,i);const r=32/2,s=8,a=2.5,l=(c,o)=>{n.strokeStyle=o,n.lineWidth=c,n.lineCap="round",n.beginPath(),n.moveTo(r-s,r),n.lineTo(r-a,r),n.moveTo(r+a,r),n.lineTo(r+s,r),n.moveTo(r,r-s),n.lineTo(r,r-a),n.moveTo(r,r+a),n.lineTo(r,r+s),n.stroke()};return l(3.4,"rgba(0,0,0,0.55)"),l(1.5,"#fff"),t.toDataURL("image/png")}const ul=()=>`-webkit-image-set(url(${hl(1)}) 1x, url(${hl(2)}) 2x)`,In={x:innerWidth/2,y:innerHeight/2};function Vg(){document.documentElement.style.setProperty("--cross",`${ul()} 16 16, crosshair`);const i=document.createElement("div");return i.id="crosshair",i.style.backgroundImage=ul(),document.body.append(i),(e,t,n)=>{i.classList.toggle("on",e),i.style.transform=e&&t!==void 0&&n!==void 0?`translate(${t-innerWidth/2}px, ${n-innerHeight/2}px)`:""}}const Wg=1e4;let tc=performance.now(),Oa=!0,Ba=window.top===window&&!document.hasFocus(),Ar=[];function nc(){if(tc=performance.now(),!Ar.length)return;const i=Ar;Ar=[];for(const e of i)e()}const za=()=>{Ba=!1,nc()},ic={capture:!0,passive:!0};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(Oa=!0),za()},ic);for(const i of["pointerdown","keydown","wheel","touchstart","focus","resize"])addEventListener(i,za,ic);addEventListener("message",nc);document.addEventListener("mouseout",i=>{i.relatedTarget||(Oa=!1)});addEventListener("blur",()=>{if(Ba=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}});document.addEventListener("visibilitychange",()=>{document.hidden||za()});const Xg=()=>(Ba||!Oa)&&performance.now()-tc>Wg;function qg(i){return Xg()?(Ar.push(i),!0):!1}fetch(`version.json?${Date.now()}`,{cache:"no-store"}).then(i=>i.json()).then(i=>{if(!(!i.build||i.build==="mwk26v07")){try{if(sessionStorage.getItem("louvre:fresh")===i.build)return;sessionStorage.setItem("louvre:fresh",i.build)}catch{return}location.reload()}}).catch(()=>{});const Gn=new URLSearchParams(location.search),vr=matchMedia("(hover: none) and (pointer: coarse)").matches&&!Gn.has("desk")||Gn.has("touch");Yg().catch(i=>{console.error(i),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function Yg(){var _,k;const[i]=await Promise.all([Qm(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','500 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(R=>document.fonts.load(R))),new Promise(R=>setTimeout(R,2500))])]),e=new Jm({antialias:!0,powerPreference:"high-performance"});let n=Math.min(devicePixelRatio||1,vr?1.5:2);e.setPixelRatio(n),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=va,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const s=Vg(),a=e.capabilities.getMaxAnisotropy(),l=new Dl,c=new kt(62,innerWidth/innerHeight,.08,700);c.layers.enable(1);const o=new Tg(1,1),u=()=>{e.setPixelRatio(n),e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.fov=c.aspect<1?gn.radToDeg(2*Math.atan(Math.tan(gn.degToRad(31))*Math.min(1.45,.82/c.aspect))):62,c.updateProjectionMatrix();const R=e.getDrawingBufferSize(new Ve);o.setSize(Math.round(R.x/2),Math.round(R.y/2))};u(),addEventListener("resize",u);const f=eg(i.building),h=f.faces.find(R=>R.room.id==="708"&&!R.free&&R.axis==="z"&&R.n[0]>0),d=-3,g=h?[{face:h,pos:Rt(h,d,1.62),normal:[1,0,0],right:[h.right[0],0,h.right[1]],title:"Musée du Louvre",sub:"Denon Wing · Paintings · First Floor",how:vr?"Drag the floor to walk, a wall to turn · tap a painting to see it whole":"Click to look with the mouse · W A S D to walk · walk up to a painting, click to see it whole",credit:`Rooms after OpenStreetMap’s indoor map (© OpenStreetMap contributors). Which room each painting hangs in, and the words
on the labels: the musée du Louvre’s collections database (Etalab Open Licence). Photographs: Wikimedia Commons,
public domain. Within each room the paintings are hung by date; the walls, ceilings and frames are simplified, all in white.`}]:[],{items:M,unplaced:m}=rg(f,i.works,h?[{face:h.key,a:d-1.35,b:d+1.35}]:[]);m.length&&console.warn(`${m.length} works found no wall`,m.map(R=>`${R.room} ${R.title}`));const p=new Map(i.works.map(R=>[R.id,R])),y=(R,U)=>{const Z=p.get(R);if(!(Z!=null&&Z.cpath))return"";const Q=encodeURIComponent(Z.img.replace(/ /g,"_")),Y=/\.tiff?$/i.test(Z.img)?`lossy-page1-${U}px-${Q}.jpg`:`${U}px-${Q}`;return`https://upload.wikimedia.org/wikipedia/commons/thumb/${Z.cpath}/${Q}/${Y}`},L=(R,U)=>i.images[R]?`art/${R}-${U}.jpg`:y(R,U==="s"?330:960),S=new Map,T=R=>{var U;return((U=i.images[R])==null?void 0:U.c)??"#8a8580"},E=R=>{let U=S.get(R);if(!U){new Be(T(R));const Z=document.createElement("canvas");Z.width=Z.height=1;const Q=Z.getContext("2d");Q.fillStyle=T(R),Q.fillRect(0,0,1,1),U=new Vi(Z),U.colorSpace=vt,S.set(R,U)}return U},b=Eg(f,M,g,E,R=>{var U;return(U=i.images[R])==null?void 0:U.px},T,o.target.texture,o.texMat);l.add(b.group),l.add(bg(f,i.building.doors)),l.add(yg(i.building.rails??[]));const x=b.pictures,w=new Map(x.map(R=>[R.work.id,R])),C=new Dg(r);C.solids=f.solids,C.world=f.bounds;const N=i.building.start;C.pos.set(N.x,Ui,N.z),C.yaw=gn.degToRad(N.yaw),C.pitch=.02;const D=Gn.get("room")&&f.byId.get(Gn.get("room"));D&&C.pos.set((D.x0+D.x1)/2,Ui,(D.z0+D.z1)/2);const H=Gn.get("at");if(H){const[R,U,Z,Q]=H.split(",").map(Number);C.pos.set(R,Ui,U),C.yaw=gn.degToRad(Z||0),C.pitch=gn.degToRad(Q||0)}C.collide();const I=Gn.get("hud")!=="0";document.getElementById("dot").style.display="none";const z=new Gg(I,vr),te=new $h,P=new Map,q=new Map,V=new Set,ee=new Map,J=R=>(R.colorSpace=vt,R.anisotropy=a,R.needsUpdate=!0,R),se=42,ue=16,Ne=7,Ae=9,De=R=>Math.hypot(R.mesh.position.x-C.pos.x,R.mesh.position.z-C.pos.z);let K=1;function j(){K=0;const R=x.map(Q=>({p:Q,d:De(Q)})).sort((Q,Y)=>Q.d-Y.d),U=b.far.geometry.getAttribute("aHide");let Z=!1;for(const{p:Q,d:Y}of R){const ne=Y<se;if(ne!==Q.mesh.visible||O===0){Q.mesh.visible=ne;for(let oe=0;oe<Q.farRange[1];oe++)U.setX(Q.farRange[0]+oe,ne?1:0);Z=!0}if(Q.label){if(Q.label.visible=Y<ue,Y<Ne&&!Q.labelTex){const oe=new Vi(vg(Q.work));oe.colorSpace=vt,oe.anisotropy=a,Q.labelTex=oe;const ce=Q.label.material.clone();ce.uniforms.uMap.value=oe,Q.label.material=ce}else if(Y>Ne*2&&Q.labelTex){const oe=Q.label.material;Q.labelTex.dispose(),Q.labelTex=null,oe.dispose(),Q.label.material=_e}}const ae=Q.work.id;q.has(ae)&&Y>Ae*1.8&&(q.get(ae).dispose(),q.delete(ae),Q.mat.uniforms.uMap.value=P.get(ae)??E(ae));const ve=Y<Ae&&!q.has(ae)?"m":!P.has(ae)&&Y<se+20?"s":null;ve==="m"&&K++,!(!ve||V.has(ae+ve)||V.size>=6)&&(performance.now()-(ee.get(ae+ve)??-1e9)<6e4||(V.add(ae+ve),te.loadAsync(L(ae,ve)).then(oe=>{if(V.delete(ae+ve),J(oe),ve==="m"){if(De(Q)>Ae*1.8){oe.dispose();return}q.set(ae,oe),Q.mat.uniforms.uMap.value=oe}else P.set(ae,oe),q.has(ae)||(Q.mat.uniforms.uMap.value=oe)}).catch(()=>{V.delete(ae+ve),ee.set(ae+ve,performance.now())})))}Z&&(U.needsUpdate=!0)}const _e=(k=(_=x.find(R=>R.label))==null?void 0:_.label)==null?void 0:k.material,Ee=new kl;Ee.far=30,Ee.layers.enableAll();const le=()=>{const R=[];for(const U of x)U.mesh.visible&&R.push(U.mesh);for(const U of b.group.children)(U.userData.face||U.userData.floor)&&R.push(U);return R},Ue=new G,ht=R=>{const U=R&&x.find(Z=>Z.mesh===R.object);return U?(R.object.worldToLocal(Ue.copy(R.point)),Math.abs(Ue.x)<=U.work.w/2+.001&&Math.abs(Ue.y)<=U.work.h/2+.001?U.work.id:null):null},ze=R=>(Ee.setFromCamera(R,c),ht(Ee.intersectObjects(le(),!1)[0])),Pe=new Ug;let Qe=!0,He=-1e9;const Je=R=>{const U=p.get(R);if(!U)return;Qe=C.locked,In.x=innerWidth/2,In.y=innerHeight/2,C.frozen=!0;const Z=i.images[R];Pe.show(U,Z?[Z.px[0]*2,Z.px[1]*2]:[1920,1920*U.h/U.w],L(R,"m"),(Z==null?void 0:Z.l)??y(R,1920)),z.opened()};Pe.onClose=()=>{C.frozen=!1},addEventListener("pointermove",R=>{!C.locked||!Pe.open||R.pointerType!=="mouse"||(In.x=Math.max(2,Math.min(innerWidth-2,In.x+R.movementX)),In.y=Math.max(2,Math.min(innerHeight-2,In.y+R.movementY)))},{capture:!0});const dt=R=>{if(R.button!==0&&R.button!==2||performance.now()-He<900)return;if(Pe.open){Pe.hide();return}if(!C.locked){const Z=r.getBoundingClientRect(),Q=ze(new Ve((R.clientX-Z.left)/Z.width*2-1,-((R.clientY-Z.top)/Z.height)*2+1));if(Q){Je(Q);return}r.requestPointerLock();return}const U=ze(new Ve(0,0));U&&Je(U)};r.addEventListener("mousedown",dt),addEventListener("pointerdown",R=>{R.pointerType==="touch"&&(He=performance.now())},!0);const bt=R=>{Ee.setFromCamera(R,c);const U=Ee.intersectObjects(le(),!1)[0];if(!U)return{kind:"none",ndc:R.clone()};const Z=U.object.userData,Q={point:U.point,dist:U.distance,ndc:R.clone()};return Z.work?{kind:"work",work:Z.work,image:!!ht(U),...Q}:Z.face?{kind:"wall",...Q}:U.point.y<.02?{kind:"floor",...Q}:{kind:"other",...Q}};new zg(r,c,C,bt,R=>{if(R.kind==="work"&&R.work){const U=w.get(R.work);if(!U||z.pic===U||(R.dist??99)<3.2){R.image&&Je(R.work);return}const Z=U.mesh.position,Q=U.placed.normal,Y=gn.clamp(.9+1.2*Math.max(U.w,U.h),1.3,9);C.goal={x:Z.x+Q[0]*Y,z:Z.z+Q[2]*Y,yaw:Math.atan2(Q[0],Q[2]),pitch:Math.atan2(Z.y-Ui,Y)}}else if(R.kind==="floor"&&R.point){const U=R.point.x-C.pos.x,Z=R.point.z-C.pos.z,Q=Math.hypot(U,Z),Y=Math.max(0,Q-.5)/Math.max(Q,1e-6);C.goal={x:C.pos.x+U*Y,z:C.pos.z+Z*Y}}},()=>!Pe.open),Pe.relock=()=>Qe,Pe.el.addEventListener("mousedown",R=>{var U;if(performance.now()-He<900){if(R.target.closest(".frame"))return;const Z=(U=Pe.work)==null?void 0:U.id,Q=Z?w.get(Z):void 0;Pe.hide(),Q&&C.glide.set(Q.placed.normal[0],Q.placed.normal[2]).multiplyScalar(2.4);return}R.preventDefault(),Pe.hide(),!Pe.open&&!C.locked&&Pe.relock()&&r.requestPointerLock()}),document.addEventListener("contextmenu",R=>{R.target.closest("input, textarea, select")||R.preventDefault()}),document.addEventListener("selectstart",R=>{var Z;const U=R.target instanceof Element?R.target:(Z=R.target)==null?void 0:Z.parentElement;U!=null&&U.closest("input, textarea, select, [contenteditable]")||R.preventDefault()}),addEventListener("keydown",R=>{var Z,Q;if((Q=(Z=R.target).closest)!=null&&Q.call(Z,"input, textarea, select, button"))return;const U=R.code==="Enter"||R.code==="Space";if(Pe.open){(U||R.code==="Escape")&&(R.preventDefault(),Pe.hide(),U&&Qe&&r.requestPointerLock());return}U&&z.pic&&(R.preventDefault(),Je(z.pic.work.id))}),document.addEventListener("pointerlockchange",()=>{!C.locked&&Pe.open&&Pe.hide()});const rt=Gn.get("open");rt&&setTimeout(()=>Je(rt),300);let lt=performance.now(),O=0,ut=0,Ke=0;j();function A(){if(window.__gReady&&qg(()=>{lt=performance.now(),requestAnimationFrame(A)}))return;const R=performance.now(),U=Math.min((R-lt)/1e3,.05);lt=R,U>.024?ut+=U:ut=Math.max(0,ut-U*.5),ut>1.5&&n>1&&(n=Math.max(1,n-.25),ut=0,u()),C.update(U),C.apply(c),c.updateMatrixWorld(),(Ke-=U)<=0&&(Ke=.25,j()),Pe.open?z.clear():z.update(U,c,x.filter(Q=>Q.mesh.visible),f.sight,!0),o.render(e,l,c),e.render(l,c);const Z=C.locked&&!vr;s(Z,Pe.open?In.x:void 0,Pe.open?In.y:void 0),document.body.classList.toggle("cross-on",Z&&!Pe.open),z.render(e,l,c),O++,!window.__gReady&&O>3&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(A)}requestAnimationFrame(A),window.__g={data:i,arch:f,items:M,unplaced:m,pictures:x,player:C,camera:c,renderer:e,scene:l,focus:z,viewer:Pe,openWork:Je,roomAt:(R,U)=>{var Z;return(Z=ng(f,R,U))==null?void 0:Z.id},pendingSharp:()=>K}}
