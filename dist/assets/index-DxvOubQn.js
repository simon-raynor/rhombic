var gm=Object.defineProperty;var Uh=i=>{throw TypeError(i)};var _m=(i,t,e)=>t in i?gm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Re=(i,t,e)=>_m(i,typeof t!="symbol"?t+"":t,e),fl=(i,t,e)=>t.has(i)||Uh("Cannot "+e);var j=(i,t,e)=>(fl(i,t,"read from private field"),e?e.call(i):t.get(i)),Dt=(i,t,e)=>t.has(i)?Uh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),te=(i,t,e,n)=>(fl(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Bt=(i,t,e)=>(fl(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="169",xm=0,Nh=1,vm=2,qd=1,ym=2,ti=3,qn=0,qe=1,Un=2,ci=0,Ks=1,Uc=2,Fh=3,Bh=4,Mm=5,es=100,Sm=101,bm=102,Em=103,wm=104,Tm=200,Am=201,Rm=202,Cm=203,Nc=204,Fc=205,Pm=206,Im=207,Lm=208,Dm=209,Um=210,Nm=211,Fm=212,Bm=213,Om=214,Bc=0,Oc=1,zc=2,sr=3,Vc=4,kc=5,Hc=6,Gc=7,qa=0,zm=1,Vm=2,Ui=0,Yd=1,$d=2,Kd=3,jd=4,km=5,Zd=6,Jd=7,Oh="attached",Hm="detached",Qd=300,rr=301,or=302,Wc=303,Xc=304,Ya=306,qc=1e3,is=1001,Yc=1002,we=1003,$a=1004,xo=1005,Nn=1006,dl=1007,ss=1008,hi=1009,tp=1010,ep=1011,to=1012,Wu=1013,Fi=1014,mn=1015,Fn=1016,Xu=1017,qu=1018,ar=1020,np=35902,ip=1021,sp=1022,on=1023,rp=1024,op=1025,js=1026,lr=1027,Yu=1028,Ka=1029,ap=1030,$u=1031,Ku=1033,ga=33776,_a=33777,xa=33778,va=33779,$c=35840,Kc=35841,jc=35842,Zc=35843,Jc=36196,Qc=37492,tu=37496,eu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,ya=36492,mu=36494,gu=36495,lp=36283,_u=36284,xu=36285,vu=36286,Gm=3200,Wm=3201,ja=0,Xm=1,Ri="",Hn="srgb",Oi="srgb-linear",ju="display-p3",Za="display-p3-linear",Ca="linear",le="srgb",Pa="rec709",Ia="p3",ms=7680,zh=519,qm=512,Ym=513,$m=514,cp=515,Km=516,jm=517,Zm=518,Jm=519,Vh=35044,kh="300 es",li=2e3,La=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Da=180/Math.PI;function pr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Qm(i,t){return(i%t+t)%t}function ml(i,t,e){return(1-e)*i+e*t}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],y=s[1],x=s[4],M=s[7],A=s[2],w=s[5],S=s[8];return r[0]=o*_+a*y+l*A,r[3]=o*p+a*x+l*w,r[6]=o*m+a*M+l*S,r[1]=c*_+u*y+f*A,r[4]=c*p+u*x+f*w,r[7]=c*m+u*M+f*S,r[2]=h*_+d*y+g*A,r[5]=h*p+d*x+g*w,r[8]=h*m+d*M+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Nt;function up(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tg(){const i=eo("canvas");return i.style.display="block",i}const Hh={};function Ma(i){i in Hh||(Hh[i]=!0,console.warn(i))}function eg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ng(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ig(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gh=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Oi]:{transfer:Ca,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Hn]:{transfer:le,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Za]:{transfer:Ca,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Gh)},[ju]:{transfer:le,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Gh).convertLinearToSRGB()}},sg=new Set([Oi,Za]),$t={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!sg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Mr[t].toReference,s=Mr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Mr[i].primaries},getTransfer:function(i){return i===Ri?Ca:Mr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Mr[t].luminanceCoefficients)}};function Zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _l(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gs;class rg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=eo("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zs(e[n]/255)*255):e[n]=Zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let og=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xl(s[o].image)):r.push(xl(s[o]))}else r=xl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ag=0;class Ye extends dr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=is,s=is,r=Nn,o=ss,a=on,l=hi,c=Ye.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=pr(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qc:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qc:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Qd;Ye.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,A=(m+1)/2,w=(u+h)/4,S=(f+_)/4,C=(g+p)/4;return x>M&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=S/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=S/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lg extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends lg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fp extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cg extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ge{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*y);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const M=a*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new b,Xh=new ge;class ve{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),yo.subVectors(this.max,Sr),_s.subVectors(t.a,Sr),xs.subVectors(t.b,Sr),vs.subVectors(t.c,Sr),mi.subVectors(xs,_s),gi.subVectors(vs,xs),Hi.subVectors(_s,vs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Hi.z,Hi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Hi.z,0,-Hi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Hi.y,Hi.x,0];return!yl(e,_s,xs,vs,yo)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,_s,xs,vs,yo))?!1:(Mo.crossVectors(mi,gi),e=[Mo.x,Mo.y,Mo.z],yl(e,_s,xs,vs,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new b,new b,new b,new b,new b,new b,new b,new b],Cn=new b,vo=new ve,_s=new b,xs=new b,vs=new b,mi=new b,gi=new b,Hi=new b,Sr=new b,yo=new b,Mo=new b,Gi=new b;function yl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ug=new ve,br=new b,Ml=new b;class an{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ug.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Ml)),this.expandByPoint(br.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new b,Sl=new b,So=new b,_i=new b,bl=new b,bo=new b,El=new b;class ho{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Sl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=_i.dot(this.direction),l=-_i.dot(So),c=_i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sl).addScaledVector(So,h),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){bl.subVectors(e,t),bo.subVectors(n,t),El.crossVectors(bl,bo);let o=this.direction.dot(El),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(bo.crossVectors(_i,bo));if(l<0)return null;const c=a*this.direction.dot(bl.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(El);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hg,t,fg)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),xi.crossVectors(n,hn),xi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),xi.crossVectors(n,hn)),xi.normalize(),Eo.crossVectors(hn,xi),s[0]=xi.x,s[4]=Eo.x,s[8]=hn.x,s[1]=xi.y,s[5]=Eo.y,s[9]=hn.y,s[2]=xi.z,s[6]=Eo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],A=n[15],w=s[0],S=s[4],C=s[8],I=s[12],v=s[1],E=s[5],L=s[9],D=s[13],N=s[2],k=s[6],z=s[10],q=s[14],G=s[3],Q=s[7],it=s[11],ot=s[15];return r[0]=o*w+a*v+l*N+c*G,r[4]=o*S+a*E+l*k+c*Q,r[8]=o*C+a*L+l*z+c*it,r[12]=o*I+a*D+l*q+c*ot,r[1]=u*w+f*v+h*N+d*G,r[5]=u*S+f*E+h*k+d*Q,r[9]=u*C+f*L+h*z+d*it,r[13]=u*I+f*D+h*q+d*ot,r[2]=g*w+_*v+p*N+m*G,r[6]=g*S+_*E+p*k+m*Q,r[10]=g*C+_*L+p*z+m*it,r[14]=g*I+_*D+p*q+m*ot,r[3]=y*w+x*v+M*N+A*G,r[7]=y*S+x*E+M*k+A*Q,r[11]=y*C+x*L+M*z+A*it,r[15]=y*I+x*D+M*q+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+p*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+m*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,x=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,A=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,w=e*y+n*x+s*M+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=y*S,t[1]=(_*h*r-f*p*r-_*s*d+n*p*d+f*s*m-n*h*m)*S,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*S,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*S,t[4]=x*S,t[5]=(u*p*r-g*h*r+g*s*d-e*p*d-u*s*m+e*h*m)*S,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*S,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*S,t[8]=M*S,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*m-e*f*m)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*S,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*S,t[12]=A*S,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*p+e*f*p)*S,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,p=o*f,m=a*f,y=l*c,x=l*u,M=l*f,A=n.x,w=n.y,S=n.z;return s[0]=(1-(_+m))*A,s[1]=(d+M)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+m))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+x)*S,s[9]=(p-y)*S,s[10]=(1-(h+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,u=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=li){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===li)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===La)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===li)g=(o+r)*f,_=-2*f;else if(a===La)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ys=new b,Pn=new St,hg=new b(0,0,0),fg=new b(1,1,1),xi=new b,Eo=new b,hn=new b,qh=new St,Yh=new ge;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dg=0;const $h=new b,Ms=new ge,jn=new St,wo=new b,Er=new b,pg=new b,mg=new ge,Kh=new b(1,0,0),jh=new b(0,1,0),Zh=new b(0,0,1),Jh={type:"added"},gg={type:"removed"},Ss={type:"childadded",child:null},wl={type:"childremoved",child:null};class pe extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new b,e=new Bn,n=new ge,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Nt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Er,wo,this.up):jn.lookAt(wo,Er,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(jn),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gg),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new b(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new b,Zn=new b,Tl=new b,Jn=new b,bs=new b,Es=new b,Qh=new b,Al=new b,Rl=new b,Cl=new b,Pl=new Kt,Il=new Kt,Ll=new Kt;class Ee{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Zn.subVectors(n,e),Tl.subVectors(t,e);const o=In.dot(In),a=In.dot(Zn),l=In.dot(Tl),c=Zn.dot(Zn),u=Zn.dot(Tl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Zn.subVectors(t,e),In.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ee.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ee.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ee.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ee.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ee.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,n),Es.subVectors(r,n),Al.subVectors(t,n);const l=bs.dot(Al),c=Es.dot(Al);if(l<=0&&c<=0)return e.copy(n);Rl.subVectors(t,s);const u=bs.dot(Rl),f=Es.dot(Rl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(bs,o);Cl.subVectors(t,r);const d=bs.dot(Cl),g=Es.dot(Cl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Es,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Qh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Qh,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(bs,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},To={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Qm(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){const n=dp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=_l(t.r),this.g=_l(t.g),this.b=_l(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return $t.fromWorkingColorSpace(He.copy(this),t),Math.round(Fe(He.r*255,0,255))*65536+Math.round(Fe(He.g*255,0,255))*256+Math.round(Fe(He.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Hn){$t.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(To);const n=ml(vi.h,To.h,e),s=ml(vi.s,To.s,e),r=ml(vi.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Tt;Tt.NAMES=dp;let _g=0;class zi extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=Ks,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Fc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ni extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new b,Ao=new st;class Ot{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}}class Ju extends Ot{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pp extends Ot{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ot{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xg=0;const vn=new St,Ul=new pe,ws=new b,fn=new ve,wr=new ve,Ue=new b;class oe extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?pp:Ju)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(fn.min,wr.min),fn.expandByPoint(Ue),Ue.addVectors(fn.max,wr.max),fn.expandByPoint(Ue)):(fn.expandByPoint(wr.min),fn.expandByPoint(wr.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),Ue.add(ws)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new b,l[C]=new b;const c=new b,u=new b,f=new b,h=new st,d=new st,g=new st,_=new b,p=new b;function m(C,I,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,v),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(E),a[C].add(_),a[I].add(_),a[v].add(_),l[C].add(p),l[I].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,I=y.length;C<I;++C){const v=y[C],E=v.start,L=v.count;for(let D=E,N=E+L;D<N;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new b,M=new b,A=new b,w=new b;function S(C){A.fromBufferAttribute(s,C),w.copy(A);const I=a[C];x.copy(I),x.sub(A.multiplyScalar(A.dot(I))).normalize(),M.crossVectors(w,I);const E=M.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,E)}for(let C=0,I=y.length;C<I;++C){const v=y[C],E=v.start,L=v.count;for(let D=E,N=E+L;D<N;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,f=new b;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Ot(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tf=new St,Wi=new ho,Ro=new an,ef=new b,Co=new b,Po=new b,Io=new b,Nl=new b,Lo=new b,nf=new b,Do=new b;class ce extends pe{constructor(t=new oe,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Nl.fromBufferAttribute(f,t),o?Lo.addScaledVector(Nl,u):Lo.addScaledVector(Nl.sub(e),u))}e.add(Lo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Ro.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ro,ef)===null||Wi.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(tf),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=x;M<A;M+=3){const w=a.getX(M),S=a.getX(M+1),C=a.getX(M+2);s=Uo(this,m,t,n,c,u,f,w,S,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=Uo(this,o,t,n,c,u,f,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=x;M<A;M+=3){const w=M,S=M+1,C=M+2;s=Uo(this,m,t,n,c,u,f,w,S,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,M=p+2;s=Uo(this,o,t,n,c,u,f,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vg(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function Uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Co),i.getVertexPosition(l,Po),i.getVertexPosition(c,Io);const u=vg(i,t,e,n,Co,Po,Io,nf);if(u){const f=new b;Ee.getBarycoord(nf,Co,Po,Io,f),s&&(u.uv=Ee.getInterpolatedAttribute(s,a,l,c,f,new st)),r&&(u.uv1=Ee.getInterpolatedAttribute(r,a,l,c,f,new st)),o&&(u.normal=Ee.getInterpolatedAttribute(o,a,l,c,f,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new b,materialIndex:0};Ee.getNormal(Co,Po,Io,h.normal),u.face=h,u.barycoord=f}return u}class mr extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function g(_,p,m,y,x,M,A,w,S,C,I){const v=M/S,E=A/C,L=M/2,D=A/2,N=w/2,k=S+1,z=C+1;let q=0,G=0;const Q=new b;for(let it=0;it<z;it++){const ot=it*E-D;for(let Ft=0;Ft<k;Ft++){const Xt=Ft*v-L;Q[_]=Xt*y,Q[p]=ot*x,Q[m]=N,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[m]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Ft/S),f.push(1-it/C),q+=1}}for(let it=0;it<C;it++)for(let ot=0;ot<S;ot++){const Ft=h+ot+k*it,Xt=h+ot+k*(it+1),Y=h+(ot+1)+k*(it+1),tt=h+(ot+1)+k*it;l.push(Ft,Xt,tt),l.push(Xt,Y,tt),G+=6}a.addGroup(d,G,I),d+=G,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=cr(i[e]);for(const s in n)t[s]=n[s]}return t}function yg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const ur={clone:cr,merge:je};var Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let gp=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const yi=new b,sf=new st,rf=new st;class sn extends gp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,sf,rf),e.subVectors(rf,sf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,As=1;class bg extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Ts,As,t,e);s.layers=this.layers,this.add(s);const r=new sn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new sn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new sn(Ts,As,t,e);a.layers=this.layers,this.add(a);const l=new sn(Ts,As,t,e);l.layers=this.layers,this.add(l);const c=new sn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _p extends Ye{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eg extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _p(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mr(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ci});r.uniforms.tEquirect.value=e;const o=new ce(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Nn),new bg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Fl=new b,wg=new b,Tg=new Nt;class ii{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fl.subVectors(n,e).cross(wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tg.getNormalMatrix(t),s=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new an,No=new b;class Ja{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,h-c,p-d,M-m).normalize(),n[1].setComponents(l+r,h+c,p+d,M+m).normalize(),n[2].setComponents(l+o,h+u,p+g,M+y).normalize(),n[3].setComponents(l-o,h-u,p-g,M-y).normalize(),n[4].setComponents(l-a,h-f,p-_,M-x).normalize(),e===li)n[5].setComponents(l+a,h+f,p+_,M+x).normalize();else if(e===La)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(No.x=s.normal.x>0?t.max.x:t.min.x,No.y=s.normal.y>0?t.max.y:t.min.y,No.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ag(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Qa extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let x=0;x<c;x++){const M=x*f-r;g.push(M,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;d.push(x,M,w),d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,y_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B_=`#if defined( USE_POINTS_UV )
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
#endif`,O_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,f0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
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
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Q0=`#define TOON
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
}`,tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ex=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rx=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Ig,alphatest_fragment:Lg,alphatest_pars_fragment:Dg,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:Bg,begin_vertex:Og,beginnormal_vertex:zg,bsdfs:Vg,iridescence_fragment:kg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:$g,color_pars_vertex:Kg,color_vertex:jg,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:t_,displacementmap_vertex:e_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:s_,colorspace_pars_fragment:r_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:u_,fog_vertex:h_,fog_pars_vertex:f_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:__,lights_lambert_pars_fragment:x_,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:b_,lights_phong_pars_fragment:E_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:D_,map_fragment:U_,map_pars_fragment:N_,map_particle_fragment:F_,map_particle_pars_fragment:B_,metalnessmap_fragment:O_,metalnessmap_pars_fragment:z_,morphinstance_vertex:V_,morphcolor_vertex:k_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:W_,normal_fragment_begin:X_,normal_fragment_maps:q_,normal_pars_fragment:Y_,normal_pars_vertex:$_,normal_vertex:K_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:v0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:w0,worldpos_vertex:T0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:B0,equirect_frag:O0,linedashed_vert:z0,linedashed_frag:V0,meshbasic_vert:k0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:K0,meshphong_frag:j0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:tx,points_vert:ex,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ox},rt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Xn={basic:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:je([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:je([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:je([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:je([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:je([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:je([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:je([rt.common,rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:je([rt.lights,rt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Xn.physical={uniforms:je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Fo={r:0,b:0,g:0},qi=new Bn,ax=new St;function lx(i,t,e,n,s,r,o){const a=new Tt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const M=g(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===Ya)?(u===void 0&&(u=new ce(new mr(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:cr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(qi)),u.material.toneMapped=$t.getTransfer(M.colorSpace)!==le,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ce(new Qa(2,2),new Ve({name:"BackgroundMaterial",uniforms:cr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Fo,mp(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function cx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,E,L,D,N){let k=!1;const z=f(D,L,E);r!==z&&(r=z,c(r.object)),k=d(v,D,L,N),k&&g(v,D,L,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(v,E,L,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,E,L){const D=L.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let k=N[E.id];k===void 0&&(k={},N[E.id]=k);let z=k[D];return z===void 0&&(z=h(l()),k[D]=z),z}function h(v){const E=[],L=[],D=[];for(let N=0;N<e;N++)E[N]=0,L[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,E,L,D){const N=r.attributes,k=E.attributes;let z=0;const q=L.getAttributes();for(const G in q)if(q[G].location>=0){const it=N[G];let ot=k[G];if(ot===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),it===void 0||it.attribute!==ot||ot&&it.data!==ot.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(v,E,L,D){const N={},k=E.attributes;let z=0;const q=L.getAttributes();for(const G in q)if(q[G].location>=0){let it=k[G];it===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const ot={};ot.attribute=it,it&&it.data&&(ot.data=it.data),N[G]=ot,z++}r.attributes=N,r.attributesNum=z,r.index=D}function _(){const v=r.newAttributes;for(let E=0,L=v.length;E<L;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const L=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;L[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),N[v]!==E&&(i.vertexAttribDivisor(v,E),N[v]=E)}function y(){const v=r.newAttributes,E=r.enabledAttributes;for(let L=0,D=E.length;L<D;L++)E[L]!==v[L]&&(i.disableVertexAttribArray(L),E[L]=0)}function x(v,E,L,D,N,k,z){z===!0?i.vertexAttribIPointer(v,E,L,N,k):i.vertexAttribPointer(v,E,L,D,N,k)}function M(v,E,L,D){_();const N=D.attributes,k=L.getAttributes(),z=E.defaultAttributeValues;for(const q in k){const G=k[q];if(G.location>=0){let Q=N[q];if(Q===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const it=Q.normalized,ot=Q.itemSize,Ft=t.get(Q);if(Ft===void 0)continue;const Xt=Ft.buffer,Y=Ft.type,tt=Ft.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||Q.gpuType===Wu;if(Q.isInterleavedBufferAttribute){const ft=Q.data,It=ft.stride,Et=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let kt=0;kt<G.locationSize;kt++)x(G.location+kt,ot/G.locationSize,Y,it,It*tt,(Et+ot/G.locationSize*kt)*tt,_t)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)m(G.location+ft,Q.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<G.locationSize;ft++)p(G.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ft=0;ft<G.locationSize;ft++)x(G.location+ft,ot/G.locationSize,Y,it,ot*tt,ot/G.locationSize*ft*tt,_t)}}else if(z!==void 0){const it=z[q];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(G.location,it);break;case 3:i.vertexAttrib3fv(G.location,it);break;case 4:i.vertexAttrib4fv(G.location,it);break;default:i.vertexAttrib1fv(G.location,it)}}}}y()}function A(){C();for(const v in n){const E=n[v];for(const L in E){const D=E[L];for(const N in D)u(D[N].object),delete D[N];delete E[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const L in E){const D=E[L];for(const N in D)u(D[N].object),delete D[N];delete E[L]}delete n[v.id]}function S(v){for(const E in n){const L=n[E];if(L[v.id]===void 0)continue;const D=L[v.id];for(const N in D)u(D[N].object),delete D[N];delete L[v.id]}}function C(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function ux(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==on&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==hi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==mn&&!C)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function fx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(g,h,x,d);for(let A=0;A!==x;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function dx(i){let t=new WeakMap;function e(o,a){return a===Wc?o.mapping=rr:a===Xc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Eg(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class vp extends gp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,of=[.125,.215,.35,.446,.526,.582],ns=20,Bl=new vp,af=new Tt;let Ol=null,zl=0,Vl=0,kl=!1;const ts=(1+Math.sqrt(5))/2,Rs=1/ts,lf=[new b(-ts,Rs,0),new b(ts,Rs,0),new b(-Rs,0,ts),new b(Rs,0,ts),new b(0,ts,-Rs),new b(0,ts,Rs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ol=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,zl,Vl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Fn,format:on,colorSpace:Oi,depthBuffer:!1},s=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(r)),this._blurMaterial=mx(r,t,e)}return s}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(af),u.toneMapping=Ui,u.autoClear=!1;const d=new Ni({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new ce(new mr,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(af),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Bo(s,y*x,m>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lf[(s-r-1)%lf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ce(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ns;p>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ns}`);const m=[];let y=0;for(let S=0;S<ns;++S){const C=S/_,I=Math.exp(-C*C/2);m.push(I),S===0?y+=I:S<p&&(y+=2*I)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[s],A=3*M*(s>x-qs?s-x+qs:0),w=4*(this._cubeSize-M);Bo(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(f,Bl)}}function px(i){const t=[],e=[],n=[];let s=i;const r=i-qs+1+of.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qs?l=of[o-i+qs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),x=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,C=w>2?0:-1,I=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];y.set(I,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];M.set(v,m*g*w)}const A=new oe;A.setAttribute("position",new Ot(y,_)),A.setAttribute("uv",new Ot(x,p)),A.setAttribute("faceIndex",new Ot(M,m)),t.push(A),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uf(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mx(i,t,e){const n=new Float32Array(ns),s=new b(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hf(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ff(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wc||l===Xc,u=l===rr||l===or;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new cf(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new cf(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _x(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ma("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){const A=y[x+0],w=y[x+1],S=y[x+2];h.push(A,w,w,S,S,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const A=x+0,w=x+1,S=x+2;h.push(A,w,w,S,S,A)}}else return;const p=new(up(h)?pp:Ju)(h,1);p.version=_;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){const n=new WeakMap,s=new Kt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*w*4*f),C=new fp(S,A,w,f);C.type=mn,C.needsUpdate=!0;const I=M*4;for(let E=0;E<f;E++){const L=m[E],D=y[E],N=x[E],k=A*w*4*E;for(let z=0;z<L.count;z++){const q=z*I;g===!0&&(s.fromBufferAttribute(L,z),S[k+q+0]=s.x,S[k+q+1]=s.y,S[k+q+2]=s.z,S[k+q+3]=0),_===!0&&(s.fromBufferAttribute(D,z),S[k+q+4]=s.x,S[k+q+5]=s.y,S[k+q+6]=s.z,S[k+q+7]=0),p===!0&&(s.fromBufferAttribute(N,z),S[k+q+8]=s.x,S[k+q+9]=s.y,S[k+q+10]=s.z,S[k+q+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new st(A,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class th extends Ye{constructor(t,e,n,s,r,o,a,l,c,u=js){if(u!==js&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=Fi),n===void 0&&u===lr&&(n=ar),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yp=new Ye,df=new th(1,1),Mp=new fp,Sp=new cg,bp=new _p,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Ax(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),Le(e,n)}}function Rx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),Le(e,n)}}function Cx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),Le(e,n)}}function Px(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Ux(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=cp,r=df):r=yp,e.setTexture2D(t||r,s)}function zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sp,s)}function Vx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bp,s)}function kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mp,s)}function Hx(i){switch(i){case 5126:return bx;case 35664:return Ex;case 35665:return wx;case 35666:return Tx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return kx}}function Gx(i,t){i.uniform1fv(this.addr,t)}function Wx(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Xx(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function qx(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Yx(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $x(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kx(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jx(i,t){i.uniform1iv(this.addr,t)}function Zx(i,t){i.uniform2iv(this.addr,t)}function Jx(i,t){i.uniform3iv(this.addr,t)}function Qx(i,t){i.uniform4iv(this.addr,t)}function tv(i,t){i.uniform1uiv(this.addr,t)}function ev(i,t){i.uniform2uiv(this.addr,t)}function nv(i,t){i.uniform3uiv(this.addr,t)}function iv(i,t){i.uniform4uiv(this.addr,t)}function sv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yp,r[o])}function rv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sp,r[o])}function ov(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bp,r[o])}function av(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mp,r[o])}function lv(i){switch(i){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}class cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}}class uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}}class hv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function vf(i,t){i.seq.push(t),i.map[t.id]=t}function fv(i,t,e){const n=i.name,s=n.length;for(Hl.lastIndex=0;;){const r=Hl.exec(n),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vf(e,c===void 0?new cv(a,i,t):new uv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new hv(a),vf(e,f)),e=f}}}class Sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function yf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dv=37297;let pv=0;function mv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function gv(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===Ia&&e===Pa?n="LinearDisplayP3ToLinearSRGB":t===Pa&&e===Ia&&(n="LinearSRGBToLinearDisplayP3"),i){case Oi:case Za:return[n,"LinearTransferOETF"];case Hn:case ju:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mv(i.getShaderSource(t),o)}else return s}function _v(i,t){const e=gv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xv(i,t){let e;switch(t){case Yd:e="Linear";break;case $d:e="Reinhard";break;case Kd:e="Cineon";break;case jd:e="ACESFilmic";break;case Zd:e="AgX";break;case Jd:e="Neutral";break;case km:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new b;function vv(){$t.getLuminanceCoefficients(Oo);const i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Mv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wr(i){return i!==""}function Sf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(i){return i.replace(bv,wv)}const Ev=new Map;function wv(i,t){let e=Ut[t];if(e===void 0){const n=Ev.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yu(e)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(Tv,Av)}function Av(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ym?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Cv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function Iv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case zm:t="ENVMAP_BLENDING_MIX";break;case Vm:t="ENVMAP_BLENDING_ADD";break}return t}function Lv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rv(e),c=Cv(e),u=Pv(e),f=Iv(e),h=Lv(e),d=yv(e),g=Mv(r),_=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Ui?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,_v("linearToOutputTexel",e.outputColorSpace),vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=yu(o),o=Sf(o,e),o=bf(o,e),a=yu(a),a=Sf(a,e),a=bf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,M=y+m+a,A=yf(s,s.VERTEX_SHADER,x),w=yf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(E){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(w).trim();let k=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{const q=Mf(s,A,"vertex"),G=Mf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+q+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||N==="")&&(z=!1);z&&(E.diagnostics={runnable:k,programLog:L,vertexShader:{log:D,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(A),s.deleteShader(w),C=new Sa(s,_),I=Sv(s,_)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,dv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Uv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fv(t),e.set(t,n)),n}}class Fv{constructor(t){this.id=Uv++,this.code=t,this.usedTimes=0}}function Bv(i,t,e,n,s,r,o){const a=new Zu,l=new Nv,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,L,D,N){const k=D.fog,z=N.geometry,q=v.isMeshStandardMaterial?D.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),Q=G&&G.mapping===Ya?G.image.height:null,it=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ft=ot!==void 0?ot.length:0;let Xt=0;z.morphAttributes.position!==void 0&&(Xt=1),z.morphAttributes.normal!==void 0&&(Xt=2),z.morphAttributes.color!==void 0&&(Xt=3);let Y,tt,_t,ft;if(it){const tn=Xn[it];Y=tn.vertexShader,tt=tn.fragmentShader}else Y=v.vertexShader,tt=v.fragmentShader,l.update(v),_t=l.getVertexShaderID(v),ft=l.getFragmentShaderID(v);const It=i.getRenderTarget(),Et=N.isInstancedMesh===!0,kt=N.isBatchedMesh===!0,ne=!!v.map,Ht=!!v.matcap,U=!!G,ln=!!v.aoMap,zt=!!v.lightMap,qt=!!v.bumpMap,At=!!v.normalMap,ue=!!v.displacementMap,Pt=!!v.emissiveMap,P=!!v.metalnessMap,T=!!v.roughnessMap,V=v.anisotropy>0,K=v.clearcoat>0,J=v.dispersion>0,$=v.iridescence>0,vt=v.sheen>0,at=v.transmission>0,dt=V&&!!v.anisotropyMap,Yt=K&&!!v.clearcoatMap,et=K&&!!v.clearcoatNormalMap,pt=K&&!!v.clearcoatRoughnessMap,Rt=$&&!!v.iridescenceMap,Ct=$&&!!v.iridescenceThicknessMap,mt=vt&&!!v.sheenColorMap,Vt=vt&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,ae=!!v.specularColorMap,F=!!v.specularIntensityMap,ut=at&&!!v.transmissionMap,X=at&&!!v.thicknessMap,Z=!!v.gradientMap,lt=!!v.alphaMap,ht=v.alphaTest>0,Gt=!!v.alphaHash,Ae=!!v.extensions;let Qe=Ui;v.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const jt={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:tt,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:kt,batchingColor:kt&&N._colorsTexture!==null,instancing:Et,instancingColor:Et&&N.instanceColor!==null,instancingMorph:Et&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Oi,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:Ht,envMap:U,envMapMode:U&&G.mapping,envMapCubeUVHeight:Q,aoMap:ln,lightMap:zt,bumpMap:qt,normalMap:At,displacementMap:d&&ue,emissiveMap:Pt,normalMapObjectSpace:At&&v.normalMapType===Xm,normalMapTangentSpace:At&&v.normalMapType===ja,metalnessMap:P,roughnessMap:T,anisotropy:V,anisotropyMap:dt,clearcoat:K,clearcoatMap:Yt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:J,iridescence:$,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:vt,sheenColorMap:mt,sheenRoughnessMap:Vt,specularMap:Lt,specularColorMap:ae,specularIntensityMap:F,transmission:at,transmissionMap:ut,thicknessMap:X,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ht,alphaHash:Gt,combine:v.combine,mapUv:ne&&p(v.map.channel),aoMapUv:ln&&p(v.aoMap.channel),lightMapUv:zt&&p(v.lightMap.channel),bumpMapUv:qt&&p(v.bumpMap.channel),normalMapUv:At&&p(v.normalMap.channel),displacementMapUv:ue&&p(v.displacementMap.channel),emissiveMapUv:Pt&&p(v.emissiveMap.channel),metalnessMapUv:P&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Yt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&p(v.sheenRoughnessMap.channel),specularMapUv:Lt&&p(v.specularMap.channel),specularColorMapUv:ae&&p(v.specularColorMap.channel),specularIntensityMapUv:F&&p(v.specularIntensityMap.channel),transmissionMapUv:ut&&p(v.transmissionMap.channel),thicknessMapUv:X&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(At||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(ne||lt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){const E=_[v.type];let L;if(E){const D=Xn[E];L=ur.clone(D.uniforms)}else L=v.uniforms;return L}function w(v,E){let L;for(let D=0,N=u.length;D<N;D++){const k=u[D];if(k.cacheKey===E){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Dv(i,E,v,r),u.push(L)),L}function S(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:A,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:I}}function Ov(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Af(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||zv),n.length>1&&n.sort(h||Tf),s.length>1&&s.sort(h||Tf)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Vv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Af,i.set(n,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Tt};break;case"SpotLight":e={position:new b,direction:new b,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function Hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gv=0;function Wv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xv(i){const t=new kv,e=Hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,r=new St,o=new St;function a(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,x=0,M=0,A=0,w=0,S=0;c.sort(Wv);for(let I=0,v=c.length;I<v;I++){const E=c[I],L=E.color,D=E.intensity,N=E.distance,k=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=L.r*D,f+=L.g*D,h+=L.b*D;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],D);S++}else if(E.isDirectionalLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const q=E.shadow,G=e.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=z,d++}else if(E.isSpotLight){const z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=N,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;const q=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,q.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=q.matrix,E.castShadow){const G=e.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,M++}_++}else if(E.isRectAreaLight){const z=t.get(E);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=z,p++}else if(E.isPointLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const q=E.shadow,G=e.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=z,g++}else if(E.isHemisphereLight){const z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(D),z.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=S,n.version=Gv++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Rf(i){const t=new Xv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Rf(i),t.set(s,[a])):r>=o.length?(a=new Rf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yv extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $v extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zv(i,t,e){let n=new Ja;const s=new st,r=new st,o=new Kt,a=new Yv({depthPacking:Wm}),l=new $v,c={},u=e.maxTextureSize,f={[qn]:qe,[qe]:qn,[Un]:Un},h=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Kv,fragmentShader:jv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ce(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let m=this.type;this.render=function(w,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ci),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=m!==ti&&this.type===ti,N=m===ti&&this.type!==ti;for(let k=0,z=w.length;k<z;k++){const q=w[k],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||D===!0||N===!0){const ot=this.type!==ti?{minFilter:we,magFilter:we}:{};G.map!==null&&G.map.dispose(),G.map=new _n(s.x,s.y,ot),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const it=G.getViewportCount();for(let ot=0;ot<it;ot++){const Ft=G.getViewport(ot);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),L.viewport(o),G.updateMatrices(q,ot),n=G.getFrustum(),M(S,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===ti&&y(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,v,E)};function y(w,S){const C=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _n(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,C,d,_,null)}function x(w,S,C,I){let v=null;const E=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=v.uuid,D=S.uuid;let N=c[L];N===void 0&&(N={},c[L]=N);let k=N[D];k===void 0&&(k=v.clone(),N[D]=k,S.addEventListener("dispose",A)),v=k}if(v.visible=S.visible,v.wireframe=S.wireframe,I===ti?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:f[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=C}return v}function M(w,S,C,I,v){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=t.update(w),N=w.material;if(Array.isArray(N)){const k=D.groups;for(let z=0,q=k.length;z<q;z++){const G=k[z],Q=N[G.materialIndex];if(Q&&Q.visible){const it=x(w,Q,I,v);w.onBeforeShadow(i,w,S,C,D,it,G),i.renderBufferDirect(C,null,D,it,w,G),w.onAfterShadow(i,w,S,C,D,it,G)}}}else if(N.visible){const k=x(w,N,I,v);w.onBeforeShadow(i,w,S,C,D,k,null),i.renderBufferDirect(C,null,D,k,w,null),w.onAfterShadow(i,w,S,C,D,k,null)}}const L=w.children;for(let D=0,N=L.length;D<N;D++)M(L[D],S,C,I,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const I=c[C],v=w.target.uuid;v in I&&(I[v].dispose(),delete I[v])}}}const Jv={[Bc]:Oc,[zc]:Hc,[Vc]:Gc,[sr]:kc,[Oc]:Bc,[Hc]:zc,[Gc]:Vc,[kc]:sr};function Qv(i){function t(){let F=!1;const ut=new Kt;let X=null;const Z=new Kt(0,0,0,0);return{setMask:function(lt){X!==lt&&!F&&(i.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ht,Gt,Ae,Qe){Qe===!0&&(lt*=Ae,ht*=Ae,Gt*=Ae),ut.set(lt,ht,Gt,Ae),Z.equals(ut)===!1&&(i.clearColor(lt,ht,Gt,Ae),Z.copy(ut))},reset:function(){F=!1,X=null,Z.set(-1,0,0,0)}}}function e(){let F=!1,ut=!1,X=null,Z=null,lt=null;return{setReversed:function(ht){ut=ht},setTest:function(ht){ht?_t(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!F&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(ut&&(ht=Jv[ht]),Z!==ht){switch(ht){case Bc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ht}},setLocked:function(ht){F=ht},setClear:function(ht){lt!==ht&&(i.clearDepth(ht),lt=ht)},reset:function(){F=!1,X=null,Z=null,lt=null}}}function n(){let F=!1,ut=null,X=null,Z=null,lt=null,ht=null,Gt=null,Ae=null,Qe=null;return{setTest:function(jt){F||(jt?_t(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(jt){ut!==jt&&!F&&(i.stencilMask(jt),ut=jt)},setFunc:function(jt,tn,Yn){(X!==jt||Z!==tn||lt!==Yn)&&(i.stencilFunc(jt,tn,Yn),X=jt,Z=tn,lt=Yn)},setOp:function(jt,tn,Yn){(ht!==jt||Gt!==tn||Ae!==Yn)&&(i.stencilOp(jt,tn,Yn),ht=jt,Gt=tn,Ae=Yn)},setLocked:function(jt){F=jt},setClear:function(jt){Qe!==jt&&(i.clearStencil(jt),Qe=jt)},reset:function(){F=!1,ut=null,X=null,Z=null,lt=null,ht=null,Gt=null,Ae=null,Qe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new Tt(0,0,0),S=0,C=!1,I=null,v=null,E=null,L=null,D=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=z>=2);let G=null,Q={};const it=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ft=new Kt().fromArray(it),Xt=new Kt().fromArray(ot);function Y(F,ut,X,Z){const lt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(F,ht),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<X;Gt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ht}const tt={};tt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),r.setFunc(sr),zt(!1),qt(Nh),_t(i.CULL_FACE),U(ci);function _t(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function ft(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function It(F,ut){return u[F]!==ut?(i.bindFramebuffer(F,ut),u[F]=ut,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Et(F,ut){let X=h,Z=!1;if(F){X=f.get(ut),X===void 0&&(X=[],f.set(ut,X));const lt=F.textures;if(X.length!==lt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Gt=lt.length;ht<Gt;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=lt.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function kt(F){return d!==F?(i.useProgram(F),d=F,!0):!1}const ne={[es]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[bm]:i.FUNC_REVERSE_SUBTRACT};ne[Em]=i.MIN,ne[wm]=i.MAX;const Ht={[Tm]:i.ZERO,[Am]:i.ONE,[Rm]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Lm]:i.DST_COLOR,[Pm]:i.DST_ALPHA,[Cm]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Dm]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Nm]:i.CONSTANT_COLOR,[Fm]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[Om]:i.ONE_MINUS_CONSTANT_ALPHA};function U(F,ut,X,Z,lt,ht,Gt,Ae,Qe,jt){if(F===ci){g===!0&&(ft(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),F!==Mm){if(F!==_||jt!==C){if((p!==es||x!==es)&&(i.blendEquation(i.FUNC_ADD),p=es,x=es),jt)switch(F){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,y=null,M=null,A=null,w.set(0,0,0),S=0,_=F,C=jt}return}lt=lt||ut,ht=ht||X,Gt=Gt||Z,(ut!==p||lt!==x)&&(i.blendEquationSeparate(ne[ut],ne[lt]),p=ut,x=lt),(X!==m||Z!==y||ht!==M||Gt!==A)&&(i.blendFuncSeparate(Ht[X],Ht[Z],Ht[ht],Ht[Gt]),m=X,y=Z,M=ht,A=Gt),(Ae.equals(w)===!1||Qe!==S)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Qe),w.copy(Ae),S=Qe),_=F,C=!1}function ln(F,ut){F.side===Un?ft(i.CULL_FACE):_t(i.CULL_FACE);let X=F.side===qe;ut&&(X=!X),zt(X),F.blending===Ks&&F.transparent===!1?U(ci):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function qt(F){F!==xm?(_t(i.CULL_FACE),F!==v&&(F===Nh?i.cullFace(i.BACK):F===vm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),v=F}function At(F){F!==E&&(k&&i.lineWidth(F),E=F)}function ue(F,ut,X){F?(_t(i.POLYGON_OFFSET_FILL),(L!==ut||D!==X)&&(i.polygonOffset(ut,X),L=ut,D=X)):ft(i.POLYGON_OFFSET_FILL)}function Pt(F){F?_t(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+N-1),G!==F&&(i.activeTexture(F),G=F)}function T(F,ut,X){X===void 0&&(G===null?X=i.TEXTURE0+N-1:X=G);let Z=Q[X];Z===void 0&&(Z={type:void 0,texture:void 0},Q[X]=Z),(Z.type!==F||Z.texture!==ut)&&(G!==X&&(i.activeTexture(X),G=X),i.bindTexture(F,ut||tt[F]),Z.type=F,Z.texture=ut)}function V(){const F=Q[G];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(F){Ft.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function mt(F){Xt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Xt.copy(F))}function Vt(F,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let Z=X.get(F);Z===void 0&&(Z=i.getUniformBlockIndex(ut,F.name),X.set(F,Z))}function Lt(F,ut){const Z=l.get(ut).get(F);a.get(ut)!==Z&&(i.uniformBlockBinding(ut,Z,F.__bindingPointIndex),a.set(ut,Z))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,Q={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new Tt(0,0,0),S=0,C=!1,I=null,v=null,E=null,L=null,D=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_t,disable:ft,bindFramebuffer:It,drawBuffers:Et,useProgram:kt,setBlending:U,setMaterial:ln,setFlipSided:zt,setCullFace:qt,setLineWidth:At,setPolygonOffset:ue,setScissorTest:Pt,activeTexture:P,bindTexture:T,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:Yt,texStorage3D:et,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Ct,viewport:mt,reset:ae}}function Cf(i,t,e,n){const s=ty(n);switch(e){case ip:return i*t;case rp:return i*t;case op:return i*t*2;case Yu:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case ap:return i*t*2/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case sp:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Ku:return i*t*4/s.components*s.byteLength;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:case Zc:return Math.max(i,16)*Math.max(t,8)/4;case $c:case jc:return Math.max(i,8)*Math.max(t,8)/2;case Jc:case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case iu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case su:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ou:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case au:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case du:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ya:case mu:case gu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lp:case _u:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xu:case vu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ty(i){switch(i){case hi:case tp:return{byteLength:1,components:1};case to:case ep:case Fn:return{byteLength:2,components:1};case Xu:case qu:return{byteLength:2,components:4};case Fi:case Wu:case mn:return{byteLength:4,components:1};case np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ey(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):eo("canvas")}function _(P,T,V){let K=1;const J=Pt(P);if((J.width>V||J.height>V)&&(K=V/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(K*J.width),vt=Math.floor(K*J.height);f===void 0&&(f=g($,vt));const at=T?g($,vt):f;return at.width=$,at.height=vt,at.getContext("2d").drawImage(P,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+vt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==we&&P.minFilter!==Nn}function m(P){i.generateMipmap(P)}function y(P,T,V,K,J=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=T;if(T===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),T===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),T===i.RGBA){const vt=J?Ca:$t.getTransfer(K);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=vt===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(P,T){let V;return P?T===null||T===Fi||T===ar?V=i.DEPTH24_STENCIL8:T===mn?V=i.DEPTH32F_STENCIL8:T===to&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fi||T===ar?V=i.DEPTH_COMPONENT24:T===mn?V=i.DEPTH_COMPONENT32F:T===to&&(V=i.DEPTH_COMPONENT16),V}function M(P,T){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==we&&P.minFilter!==Nn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),S(T),T.isVideoTexture&&u.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),I(T)}function S(P){const T=n.get(P);if(T.__webglInit===void 0)return;const V=P.source,K=h.get(V);if(K){const J=K[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(P),Object.keys(K).length===0&&h.delete(V)}n.remove(P)}function C(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const V=P.source,K=h.get(V);delete K[T.__cacheKey],o.memory.textures--}function I(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let J=0;J<T.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(T.__webglFramebuffer[K][J]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=P.textures;for(let K=0,J=V.length;K<J;K++){const $=n.get(V[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(P)}let v=0;function E(){v=0}function L(){const P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function D(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function N(P,T){const V=n.get(P);if(P.isVideoTexture&&At(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(V,P,T);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function k(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Xt(V,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function z(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Xt(V,P,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function q(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Y(V,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const G={[qc]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Yc]:i.MIRRORED_REPEAT},Q={[we]:i.NEAREST,[$a]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},it={[qm]:i.NEVER,[Jm]:i.ALWAYS,[Ym]:i.LESS,[cp]:i.LEQUAL,[$m]:i.EQUAL,[Zm]:i.GEQUAL,[Km]:i.GREATER,[jm]:i.NOTEQUAL};function ot(P,T){if(T.type===mn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Nn||T.magFilter===dl||T.magFilter===xo||T.magFilter===ss||T.minFilter===Nn||T.minFilter===dl||T.minFilter===xo||T.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,G[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,G[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,G[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===we||T.minFilter!==xo&&T.minFilter!==ss||T.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ft(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const K=T.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const $=D(T);if($!==P.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[$].usedTimes++;const vt=J[P.__cacheKey];vt!==void 0&&(J[P.__cacheKey].usedTimes--,vt.usedTimes===0&&C(T)),P.__cacheKey=$,P.__webglTexture=J[$].texture}return V}function Xt(P,T,V){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const J=Ft(P,T),$=T.source;e.bindTexture(K,P.__webglTexture,i.TEXTURE0+V);const vt=n.get($);if($.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const at=$t.getPrimaries($t.workingColorSpace),dt=T.colorSpace===Ri?null:$t.getPrimaries(T.colorSpace),Yt=T.colorSpace===Ri||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=_(T.image,!1,s.maxTextureSize);et=ue(T,et);const pt=r.convert(T.format,T.colorSpace),Rt=r.convert(T.type);let Ct=y(T.internalFormat,pt,Rt,T.colorSpace,T.isVideoTexture);ot(K,T);let mt;const Vt=T.mipmaps,Lt=T.isVideoTexture!==!0,ae=vt.__version===void 0||J===!0,F=$.dataReady,ut=M(T,et);if(T.isDepthTexture)Ct=x(T.format===lr,T.type),ae&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,pt,Rt,null));else if(T.isDataTexture)if(Vt.length>0){Lt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Ct,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)mt=Vt[X],Lt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,pt,Rt,mt.data);T.generateMipmaps=!1}else Lt?(ae&&e.texStorage2D(i.TEXTURE_2D,ut,Ct,et.width,et.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Rt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,pt,Rt,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Lt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ct,Vt[0].width,Vt[0].height,et.depth);for(let X=0,Z=Vt.length;X<Z;X++)if(mt=Vt[X],T.format!==on)if(pt!==null)if(Lt){if(F)if(T.layerUpdates.size>0){const lt=Cf(mt.width,mt.height,T.format,T.type);for(const ht of T.layerUpdates){const Gt=mt.data.subarray(ht*lt/mt.data.BYTES_PER_ELEMENT,(ht+1)*lt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,mt.width,mt.height,1,pt,Gt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,et.depth,0,pt,Rt,mt.data)}else{Lt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Ct,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)mt=Vt[X],T.format!==on?pt!==null?Lt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,pt,Rt,mt.data)}else if(T.isDataArrayTexture)if(Lt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ct,et.width,et.height,et.depth),F)if(T.layerUpdates.size>0){const X=Cf(et.width,et.height,T.format,T.type);for(const Z of T.layerUpdates){const lt=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,pt,Rt,lt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,pt,Rt,et.data);else if(T.isData3DTexture)Lt?(ae&&e.texStorage3D(i.TEXTURE_3D,ut,Ct,et.width,et.height,et.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,pt,Rt,et.data);else if(T.isFramebufferTexture){if(ae)if(Lt)e.texStorage2D(i.TEXTURE_2D,ut,Ct,et.width,et.height);else{let X=et.width,Z=et.height;for(let lt=0;lt<ut;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ct,X,Z,0,pt,Rt,null),X>>=1,Z>>=1}}else if(Vt.length>0){if(Lt&&ae){const X=Pt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ct,X.width,X.height)}for(let X=0,Z=Vt.length;X<Z;X++)mt=Vt[X],Lt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,X,Ct,pt,Rt,mt);T.generateMipmaps=!1}else if(Lt){if(ae){const X=Pt(et);e.texStorage2D(i.TEXTURE_2D,ut,Ct,X.width,X.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ct,pt,Rt,et);p(T)&&m(K),vt.__version=$.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Y(P,T,V){if(T.image.length!==6)return;const K=Ft(P,T),J=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const $=n.get(J);if(J.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const vt=$t.getPrimaries($t.workingColorSpace),at=T.colorSpace===Ri?null:$t.getPrimaries(T.colorSpace),dt=T.colorSpace===Ri||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,et=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Yt&&!et?pt[Z]=_(T.image[Z],!0,s.maxCubemapSize):pt[Z]=et?T.image[Z].image:T.image[Z],pt[Z]=ue(T,pt[Z]);const Rt=pt[0],Ct=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),Vt=y(T.internalFormat,Ct,mt,T.colorSpace),Lt=T.isVideoTexture!==!0,ae=$.__version===void 0||K===!0,F=J.dataReady;let ut=M(T,Rt);ot(i.TEXTURE_CUBE_MAP,T);let X;if(Yt){Lt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){X=pt[Z].mipmaps;for(let lt=0;lt<X.length;lt++){const ht=X[lt];T.format!==on?Ct!==null?Lt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ht.width,ht.height,Ct,mt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,ht.width,ht.height,0,Ct,mt,ht.data)}}}else{if(X=T.mipmaps,Lt&&ae){X.length>0&&ut++;const Z=Pt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let lt=0;lt<X.length;lt++){const Gt=X[lt].image[Z].image;Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Gt.width,Gt.height,Ct,mt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,Gt.width,Gt.height,0,Ct,mt,Gt.data)}}else{Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Ct,mt,pt[Z]);for(let lt=0;lt<X.length;lt++){const ht=X[lt];Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Ct,mt,ht.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,Ct,mt,ht.image[Z])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),$.__version=J.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function tt(P,T,V,K,J,$){const vt=r.convert(V.format,V.colorSpace),at=r.convert(V.type),dt=y(V.internalFormat,vt,at,V.colorSpace);if(!n.get(T).__hasExternalTextures){const et=Math.max(1,T.width>>$),pt=Math.max(1,T.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,dt,et,pt,T.depth,0,vt,at,null):e.texImage2D(J,$,dt,et,pt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(V).__webglTexture,0,zt(T)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(V).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(P,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const K=T.depthTexture,J=K&&K.isDepthTexture?K.type:null,$=x(T.stencilBuffer,J),vt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(T);qt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,P)}else{const K=T.textures;for(let J=0;J<K.length;J++){const $=K[J],vt=r.convert($.format,$.colorSpace),at=r.convert($.type),dt=y($.internalFormat,vt,at,$.colorSpace),Yt=zt(T);V&&qt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,dt,T.width,T.height):qt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const K=n.get(T.depthTexture).__webglTexture,J=zt(T);if(T.depthTexture.format===js)qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(T.depthTexture.format===lr)qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(P){const T=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=K}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ft(T.__webglFramebuffer,P)}else if(V){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),_t(T.__webglDepthbuffer[K],P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),_t(T.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,T,V){const K=n.get(P);T!==void 0&&tt(K.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&It(P)}function kt(P){const T=P.texture,V=n.get(P),K=n.get(T);P.addEventListener("dispose",w);const J=P.textures,$=P.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let dt=0;dt<T.mipmaps.length;dt++)V.__webglFramebuffer[at][dt]=i.createFramebuffer()}else V.__webglFramebuffer[at]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)V.__webglFramebuffer[at]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,dt=J.length;at<dt;at++){const Yt=n.get(J[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&qt(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const dt=J[at];V.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Yt=r.convert(dt.format,dt.colorSpace),et=r.convert(dt.type),pt=y(dt.internalFormat,Yt,et,dt.colorSpace,P.isXRRenderTarget===!0),Rt=zt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,V.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ot(i.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)tt(V.__webglFramebuffer[at][dt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else tt(V.__webglFramebuffer[at],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,dt=J.length;at<dt;at++){const Yt=J[at],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),ot(i.TEXTURE_2D,Yt),tt(V.__webglFramebuffer,P,Yt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),ot(at,T),T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)tt(V.__webglFramebuffer[dt],P,T,i.COLOR_ATTACHMENT0,at,dt);else tt(V.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,at,0);p(T)&&m(at),e.unbindTexture()}P.depthBuffer&&It(P)}function ne(P){const T=P.textures;for(let V=0,K=T.length;V<K;V++){const J=T[V];if(p(J)){const $=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(J).__webglTexture;e.bindTexture($,vt),m($),e.unbindTexture()}}}const Ht=[],U=[];function ln(P){if(P.samples>0){if(qt(P)===!1){const T=P.textures,V=P.width,K=P.height;let J=i.COLOR_BUFFER_BIT;const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(P),at=T.length>1;if(at)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Yt=n.get(T[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,J,i.NEAREST),l===!0&&(Ht.length=0,U.length=0,Ht.push(i.COLOR_ATTACHMENT0+dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ht.push($),U.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Yt=n.get(T[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(P){return Math.min(s.maxSamples,P.samples)}function qt(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function At(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function ue(P,T){const V=P.colorSpace,K=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Oi&&V!==Ri&&($t.getTransfer(V)===le?(K!==on||J!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=E,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=Et,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=qt}function ny(i,t){function e(n,s=Ri){let r;const o=$t.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===np)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return i.BYTE;if(n===ep)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===ip)return i.ALPHA;if(n===sp)return i.RGB;if(n===on)return i.RGBA;if(n===rp)return i.LUMINANCE;if(n===op)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===ap)return i.RG;if(n===$u)return i.RG_INTEGER;if(n===Ku)return i.RGBA_INTEGER;if(n===ga||n===_a||n===xa||n===va)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Kc||n===jc||n===Zc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===tu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ou)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===au)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===mu||n===gu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lp||n===_u||n===xu||n===vu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class iy extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xr extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sy={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`;class ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:ry,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ly extends dr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new ay,p=e.getContextAttributes();let m=null,y=null;const x=[],M=[],A=new st;let w=null;const S=new sn;S.layers.enable(1),S.viewport=new Kt;const C=new sn;C.layers.enable(2),C.viewport=new Kt;const I=[S,C],v=new iy;v.layers.enable(1),v.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Gl,x[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Gl,x[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Gl,x[Y]=tt),tt.getHandSpace()};function D(Y){const tt=M.indexOf(Y.inputSource);if(tt===-1)return;const _t=x[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let Y=0;Y<x.length;Y++){const tt=M[Y];tt!==null&&(M[Y]=null,x[Y].disconnect(tt))}E=null,L=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,s=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _n(d.framebufferWidth,d.framebufferHeight,{format:on,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?lr:js,_t=p.stencil?ar:Fi);const It={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(It),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new _n(h.textureWidth,h.textureHeight,{format:on,type:hi,depthTexture:new th(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Y){for(let tt=0;tt<Y.removed.length;tt++){const _t=Y.removed[tt],ft=M.indexOf(_t);ft>=0&&(M[ft]=null,x[ft].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){const _t=Y.added[tt];let ft=M.indexOf(_t);if(ft===-1){for(let Et=0;Et<x.length;Et++)if(Et>=M.length){M.push(_t),ft=Et;break}else if(M[Et]===null){M[Et]=_t,ft=Et;break}if(ft===-1)break}const It=x[ft];It&&It.connect(_t)}}const z=new b,q=new b;function G(Y,tt,_t){z.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const ft=z.distanceTo(q),It=tt.projectionMatrix.elements,Et=_t.projectionMatrix.elements,kt=It[14]/(It[10]-1),ne=It[14]/(It[10]+1),Ht=(It[9]+1)/It[5],U=(It[9]-1)/It[5],ln=(It[8]-1)/It[0],zt=(Et[8]+1)/Et[0],qt=kt*ln,At=kt*zt,ue=ft/(-ln+zt),Pt=ue*-ln;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const P=kt+ue,T=ne+ue,V=qt-Pt,K=At+(ft-Pt),J=Ht*ne/T*P,$=U*ne/T*P;Y.projectionMatrix.makePerspective(V,K,J,$,P,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=C.near=S.near=tt,v.far=C.far=S.far=_t,(E!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,L=v.far);const ft=Y.parent,It=v.cameras;Q(v,ft);for(let Et=0;Et<It.length;Et++)Q(It[Et],ft);It.length===2?G(v,S,C):v.projectionMatrix.copy(S.projectionMatrix),it(Y,v,ft)};function it(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Da*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ot=null;function Ft(Y,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Et=0;Et<_t.length;Et++){const kt=_t[Et];let ne=null;if(d!==null)ne=d.getViewport(kt);else{const U=f.getViewSubImage(h,kt);ne=U.viewport,Et===0&&(t.setRenderTargetTextures(y,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(y))}let Ht=I[Et];Ht===void 0&&(Ht=new sn,Ht.layers.enable(Et),Ht.viewport=new Kt,I[Et]=Ht),Ht.matrix.fromArray(kt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(kt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ne.x,ne.y,ne.width,ne.height),Et===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Ht)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Et=f.getDepthInformation(_t[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let _t=0;_t<x.length;_t++){const ft=M[_t],It=x[_t];ft!==null&&It!==void 0&&It.update(ft,tt,c||o)}ot&&ot(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Xt=new xp;Xt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}}const Yi=new Bn,cy=new St;function uy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),p.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(Yi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const w=t.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const M=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=s[y.id],M=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,S=M.length;w<S;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let I=0,v=C.length;I<v;I++){const E=C[I];if(d(E,w,I,A)===!0){const L=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let k=0;k<D.length;k++){const z=D[k],q=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+N,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,M,A){const w=y.value,S=x+"_"+M;if(A[S]===void 0)return typeof w=="number"||typeof w=="boolean"?A[S]=w:A[S]=w.clone(),!0;{const C=A[S];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[S]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const x=y.uniforms;let M=0;const A=16;for(let S=0,C=x.length;S<C;S++){const I=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,E=I.length;v<E;v++){const L=I[v],D=Array.isArray(L.value)?L.value:[L.value];for(let N=0,k=D.length;N<k;N++){const z=D[N],q=_(z),G=M%A,Q=G%q.boundary,it=G+Q;M+=Q,it!==0&&A-it<q.storage&&(M+=A-it),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=q.storage}}}const w=M%A;return w>0&&(M+=A-w),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class fy{constructor(t={}){const{canvas:e=tg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Ui,this.toneMappingExposure=1;const x=this;let M=!1,A=0,w=0,S=null,C=-1,I=null;const v=new Kt,E=new Kt;let L=null;const D=new Tt(0);let N=0,k=e.width,z=e.height,q=1,G=null,Q=null;const it=new Kt(0,0,k,z),ot=new Kt(0,0,k,z);let Ft=!1;const Xt=new Ja;let Y=!1,tt=!1;const _t=new St,ft=new St,It=new b,Et=new Kt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Ht(){return S===null?q:1}let U=n;function ln(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const B="webgl2";if(U=ln(B,R),U===null)throw ln(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let zt,qt,At,ue,Pt,P,T,V,K,J,$,vt,at,dt,Yt,et,pt,Rt,Ct,mt,Vt,Lt,ae,F;function ut(){zt=new _x(U),zt.init(),Lt=new ny(U,zt),qt=new hx(U,zt,t,Lt),At=new Qv(U),qt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),ue=new yx(U),Pt=new Ov,P=new ey(U,zt,At,Pt,qt,Lt,ue),T=new dx(x),V=new gx(x),K=new Ag(U),ae=new cx(U,K),J=new xx(U,K,ue,ae),$=new Sx(U,J,K,ue),Ct=new Mx(U,qt,P),et=new fx(Pt),vt=new Bv(x,T,V,zt,qt,ae,et),at=new uy(x,Pt),dt=new Vv,Yt=new qv(zt),Rt=new lx(x,T,V,At,$,h,l),pt=new Zv(x,$,qt),F=new hy(U,ue,qt,At),mt=new ux(U,zt,ue),Vt=new vx(U,zt,ue),ue.programs=vt.programs,x.capabilities=qt,x.extensions=zt,x.properties=Pt,x.renderLists=dt,x.shadowMap=pt,x.state=At,x.info=ue}ut();const X=new ly(x,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(k,z,!1))},this.getSize=function(R){return R.set(k,z)},this.setSize=function(R,B,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,z=B,e.width=Math.floor(R*q),e.height=Math.floor(B*q),H===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(k*q,z*q).floor()},this.setDrawingBufferSize=function(R,B,H){k=R,z=B,q=H,e.width=Math.floor(R*H),e.height=Math.floor(B*H),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(v)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,B,H,W){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,B,H,W),At.viewport(v.copy(it).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,B,H,W){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,B,H,W),At.scissor(E.copy(ot).multiplyScalar(q).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){At.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(R=!0,B=!0,H=!0){let W=0;if(R){let O=!1;if(S!==null){const nt=S.texture.format;O=nt===Ku||nt===$u||nt===Ka}if(O){const nt=S.texture.type,ct=nt===hi||nt===Fi||nt===to||nt===ar||nt===Xu||nt===qu,gt=Rt.getClearColor(),xt=Rt.getClearAlpha(),bt=gt.r,wt=gt.g,yt=gt.b;ct?(d[0]=bt,d[1]=wt,d[2]=yt,d[3]=xt,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=bt,g[1]=wt,g[2]=yt,g[3]=xt,U.clearBufferiv(U.COLOR,0,g))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),dt.dispose(),Yt.dispose(),Pt.dispose(),T.dispose(),V.dispose(),$.dispose(),ae.dispose(),F.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Th),X.removeEventListener("sessionend",Ah),ki.stop()};function Z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ue.autoReset,B=pt.enabled,H=pt.autoUpdate,W=pt.needsUpdate,O=pt.type;ut(),ue.autoReset=R,pt.enabled=B,pt.autoUpdate=H,pt.needsUpdate=W,pt.type=O}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Gt(R){const B=R.target;B.removeEventListener("dispose",Gt),Ae(B)}function Ae(R){Qe(R),Pt.remove(R)}function Qe(R){const B=Pt.get(R).programs;B!==void 0&&(B.forEach(function(H){vt.releaseProgram(H)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,H,W,O,nt){B===null&&(B=kt);const ct=O.isMesh&&O.matrixWorld.determinant()<0,gt=fm(R,B,H,W,O);At.setMaterial(W,ct);let xt=H.index,bt=1;if(W.wireframe===!0){if(xt=J.getWireframeAttribute(H),xt===void 0)return;bt=2}const wt=H.drawRange,yt=H.attributes.position;let ee=wt.start*bt,he=(wt.start+wt.count)*bt;nt!==null&&(ee=Math.max(ee,nt.start*bt),he=Math.min(he,(nt.start+nt.count)*bt)),xt!==null?(ee=Math.max(ee,0),he=Math.min(he,xt.count)):yt!=null&&(ee=Math.max(ee,0),he=Math.min(he,yt.count));const _e=he-ee;if(_e<0||_e===1/0)return;ae.setup(O,W,gt,H,xt);let cn,Jt=mt;if(xt!==null&&(cn=K.get(xt),Jt=Vt,Jt.setIndex(cn)),O.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*Ht()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(O.isLine){let Mt=W.linewidth;Mt===void 0&&(Mt=1),At.setLineWidth(Mt*Ht()),O.isLineSegments?Jt.setMode(U.LINES):O.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else O.isPoints?Jt.setMode(U.POINTS):O.isSprite&&Jt.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Mt=O._multiDrawStarts,Oe=O._multiDrawCounts,Qt=O._multiDrawCount,Rn=xt?K.get(xt).bytesPerElement:1,ps=Pt.get(W).currentProgram.getUniforms();for(let un=0;un<Qt;un++)ps.setValue(U,"_gl_DrawID",un),Jt.render(Mt[un]/Rn,Oe[un])}else if(O.isInstancedMesh)Jt.renderInstances(ee,_e,O.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Oe=Math.min(H.instanceCount,Mt);Jt.renderInstances(ee,_e,Oe)}else Jt.render(ee,_e)};function jt(R,B,H){R.transparent===!0&&R.side===Un&&R.forceSinglePass===!1?(R.side=qe,R.needsUpdate=!0,_o(R,B,H),R.side=qn,R.needsUpdate=!0,_o(R,B,H),R.side=Un):_o(R,B,H)}this.compile=function(R,B,H=null){H===null&&(H=R),p=Yt.get(H),p.init(B),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),R!==H&&R.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const gt=nt[ct];jt(gt,H,O),W.add(gt)}else jt(nt,H,O),W.add(nt)}),y.pop(),p=null,W},this.compileAsync=function(R,B,H=null){const W=this.compile(R,B,H);return new Promise(O=>{function nt(){if(W.forEach(function(ct){Pt.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){O(R);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let tn=null;function Yn(R){tn&&tn(R)}function Th(){ki.stop()}function Ah(){ki.start()}const ki=new xp;ki.setAnimationLoop(Yn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(R){tn=R,X.setAnimationLoop(R),R===null?ki.stop():ki.start()},X.addEventListener("sessionstart",Th),X.addEventListener("sessionend",Ah),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,S),p=Yt.get(R,y.length),p.init(B),y.push(p),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(ft),tt=this.localClippingEnabled,Y=et.init(this.clippingPlanes,tt),_=dt.get(R,m.length),_.init(),m.push(_),X.enabled===!0&&X.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&ll(nt,B,-1/0,x.sortObjects)}ll(R,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,Q),ne=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ne&&Rt.addToRenderList(_,R),this.info.render.frame++,Y===!0&&et.beginShadows();const H=p.state.shadowsArray;pt.render(H,R,B),Y===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,O=_.transmissive;if(p.setupLights(),B.isArrayCamera){const nt=B.cameras;if(O.length>0)for(let ct=0,gt=nt.length;ct<gt;ct++){const xt=nt[ct];Ch(W,O,R,xt)}ne&&Rt.render(R);for(let ct=0,gt=nt.length;ct<gt;ct++){const xt=nt[ct];Rh(_,R,xt,xt.viewport)}}else O.length>0&&Ch(W,O,R,B),ne&&Rt.render(R),Rh(_,R,B);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(x,R,B),ae.resetDefaultState(),C=-1,I=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ll(R,B,H,W){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){W&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ft);const ct=$.update(R),gt=R.material;gt.visible&&_.push(R,ct,gt,H,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const ct=$.update(R),gt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Et.copy(ct.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(ft)),Array.isArray(gt)){const xt=ct.groups;for(let bt=0,wt=xt.length;bt<wt;bt++){const yt=xt[bt],ee=gt[yt.materialIndex];ee&&ee.visible&&_.push(R,ct,ee,H,Et.z,yt)}}else gt.visible&&_.push(R,ct,gt,H,Et.z,null)}}const nt=R.children;for(let ct=0,gt=nt.length;ct<gt;ct++)ll(nt[ct],B,H,W)}function Rh(R,B,H,W){const O=R.opaque,nt=R.transmissive,ct=R.transparent;p.setupLightsView(H),Y===!0&&et.setGlobalState(x.clippingPlanes,H),W&&At.viewport(v.copy(W)),O.length>0&&go(O,B,H),nt.length>0&&go(nt,B,H),ct.length>0&&go(ct,B,H),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ch(R,B,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new _n(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Fn:hi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const nt=p.state.transmissionRenderTarget[W.id],ct=W.viewport||v;nt.setSize(ct.z,ct.w);const gt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(D),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Rt.render(H);const xt=x.toneMapping;x.toneMapping=Ui;const bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&et.setGlobalState(x.clippingPlanes,W),go(R,H,W),P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,ee=B.length;yt<ee;yt++){const he=B[yt],_e=he.object,cn=he.geometry,Jt=he.material,Mt=he.group;if(Jt.side===Un&&_e.layers.test(W.layers)){const Oe=Jt.side;Jt.side=qe,Jt.needsUpdate=!0,Ph(_e,H,W,cn,Jt,Mt),Jt.side=Oe,Jt.needsUpdate=!0,wt=!0}}wt===!0&&(P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt))}x.setRenderTarget(gt),x.setClearColor(D,N),bt!==void 0&&(W.viewport=bt),x.toneMapping=xt}function go(R,B,H){const W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,nt=R.length;O<nt;O++){const ct=R[O],gt=ct.object,xt=ct.geometry,bt=W===null?ct.material:W,wt=ct.group;gt.layers.test(H.layers)&&Ph(gt,B,H,xt,bt,wt)}}function Ph(R,B,H,W,O,nt){R.onBeforeRender(x,B,H,W,O,nt),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(x,B,H,W,R,nt),O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=qe,O.needsUpdate=!0,x.renderBufferDirect(H,B,W,O,R,nt),O.side=qn,O.needsUpdate=!0,x.renderBufferDirect(H,B,W,O,R,nt),O.side=Un):x.renderBufferDirect(H,B,W,O,R,nt),R.onAfterRender(x,B,H,W,O,nt)}function _o(R,B,H){B.isScene!==!0&&(B=kt);const W=Pt.get(R),O=p.state.lights,nt=p.state.shadowsArray,ct=O.state.version,gt=vt.getParameters(R,O.state,nt,B,H),xt=vt.getProgramCacheKey(gt);let bt=W.programs;W.environment=R.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(R.isMeshStandardMaterial?V:T).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,bt===void 0&&(R.addEventListener("dispose",Gt),bt=new Map,W.programs=bt);let wt=bt.get(xt);if(wt!==void 0){if(W.currentProgram===wt&&W.lightsStateVersion===ct)return Lh(R,gt),wt}else gt.uniforms=vt.getUniforms(R),R.onBeforeCompile(gt,x),wt=vt.acquireProgram(gt,xt),bt.set(xt,wt),W.uniforms=gt.uniforms;const yt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(yt.clippingPlanes=et.uniform),Lh(R,gt),W.needsLights=pm(R),W.lightsStateVersion=ct,W.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.directionalShadowMap.value=O.state.directionalShadowMap,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotShadowMap.value=O.state.spotShadowMap,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMap.value=O.state.pointShadowMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=wt,W.uniformsList=null,wt}function Ih(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Sa.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Lh(R,B){const H=Pt.get(R);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function fm(R,B,H,W,O){B.isScene!==!0&&(B=kt),P.resetTextureUnits();const nt=B.fog,ct=W.isMeshStandardMaterial?B.environment:null,gt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Oi,xt=(W.isMeshStandardMaterial?V:T).get(W.envMap||ct),bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,wt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),yt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,he=!!H.morphAttributes.color;let _e=Ui;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_e=x.toneMapping);const cn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Jt=cn!==void 0?cn.length:0,Mt=Pt.get(W),Oe=p.state.lights;if(Y===!0&&(tt===!0||R!==I)){const xn=R===I&&W.id===C;et.setState(W,R,xn)}let Qt=!1;W.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Oe.state.version||Mt.outputColorSpace!==gt||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==xt||W.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==et.numPlanes||Mt.numIntersection!==et.numIntersection)||Mt.vertexAlphas!==bt||Mt.vertexTangents!==wt||Mt.morphTargets!==yt||Mt.morphNormals!==ee||Mt.morphColors!==he||Mt.toneMapping!==_e||Mt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Mt.__version=W.version);let Rn=Mt.currentProgram;Qt===!0&&(Rn=_o(W,B,O));let ps=!1,un=!1,cl=!1;const ye=Rn.getUniforms(),pi=Mt.uniforms;if(At.useProgram(Rn.program)&&(ps=!0,un=!0,cl=!0),W.id!==C&&(C=W.id,un=!0),ps||I!==R){qt.reverseDepthBuffer?(_t.copy(R.projectionMatrix),ng(_t),ig(_t),ye.setValue(U,"projectionMatrix",_t)):ye.setValue(U,"projectionMatrix",R.projectionMatrix),ye.setValue(U,"viewMatrix",R.matrixWorldInverse);const xn=ye.map.cameraPosition;xn!==void 0&&xn.setValue(U,It.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ye.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,un=!0,cl=!0)}if(O.isSkinnedMesh){ye.setOptional(U,O,"bindMatrix"),ye.setOptional(U,O,"bindMatrixInverse");const xn=O.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ye.setValue(U,"boneTexture",xn.boneTexture,P))}O.isBatchedMesh&&(ye.setOptional(U,O,"batchingTexture"),ye.setValue(U,"batchingTexture",O._matricesTexture,P),ye.setOptional(U,O,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",O._indirectTexture,P),ye.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",O._colorsTexture,P));const ul=H.morphAttributes;if((ul.position!==void 0||ul.normal!==void 0||ul.color!==void 0)&&Ct.update(O,H,Rn),(un||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,ye.setValue(U,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pi.envMap.value=xt,pi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(pi.envMapIntensity.value=B.environmentIntensity),un&&(ye.setValue(U,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&dm(pi,cl),nt&&W.fog===!0&&at.refreshFogUniforms(pi,nt),at.refreshMaterialUniforms(pi,W,q,z,p.state.transmissionRenderTarget[R.id]),Sa.upload(U,Ih(Mt),pi,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sa.upload(U,Ih(Mt),pi,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ye.setValue(U,"center",O.center),ye.setValue(U,"modelViewMatrix",O.modelViewMatrix),ye.setValue(U,"normalMatrix",O.normalMatrix),ye.setValue(U,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xn=W.uniformsGroups;for(let hl=0,mm=xn.length;hl<mm;hl++){const Dh=xn[hl];F.update(Dh,Rn),F.bind(Dh,Rn)}}return Rn}function dm(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function pm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,B,H){Pt.get(R.texture).__webglTexture=B,Pt.get(R.depthTexture).__webglTexture=H;const W=Pt.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const H=Pt.get(R);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,H=0){S=R,A=B,w=H;let W=!0,O=null,nt=!1,ct=!1;if(R){const xt=Pt.get(R);if(xt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(xt.__hasExternalTextures)P.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const yt=R.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&Pt.has(yt)&&(R.width!==yt.image.width||R.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const bt=R.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ct=!0);const wt=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(wt[B])?O=wt[B][H]:O=wt[B],nt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?O=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(wt)?O=wt[H]:O=wt,v.copy(R.viewport),E.copy(R.scissor),L=R.scissorTest}else v.copy(it).multiplyScalar(q).floor(),E.copy(ot).multiplyScalar(q).floor(),L=Ft;if(At.bindFramebuffer(U.FRAMEBUFFER,O)&&W&&At.drawBuffers(R,O),At.viewport(v),At.scissor(E),At.setScissorTest(L),nt){const xt=Pt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,H)}else if(ct){const xt=Pt.get(R.texture),bt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,bt)}C=-1},this.readRenderTargetPixels=function(R,B,H,W,O,nt,ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){At.bindFramebuffer(U.FRAMEBUFFER,gt);try{const xt=R.texture,bt=xt.format,wt=xt.type;if(!qt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-W&&H>=0&&H<=R.height-O&&U.readPixels(B,H,W,O,Lt.convert(bt),Lt.convert(wt),nt)}finally{const xt=S!==null?Pt.get(S).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(R,B,H,W,O,nt,ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const xt=R.texture,bt=xt.format,wt=xt.type;if(!qt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-W&&H>=0&&H<=R.height-O){At.bindFramebuffer(U.FRAMEBUFFER,gt);const yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(B,H,W,O,Lt.convert(bt),Lt.convert(wt),0);const ee=S!==null?Pt.get(S).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,ee);const he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await eg(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(yt),U.deleteSync(he),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,H=0){R.isTexture!==!0&&(Ma("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-H),O=Math.floor(R.image.width*W),nt=Math.floor(R.image.height*W),ct=B!==null?B.x:0,gt=B!==null?B.y:0;P.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ct,gt,O,nt),At.unbindTexture()},this.copyTextureToTexture=function(R,B,H=null,W=null,O=0){R.isTexture!==!0&&(Ma("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],B=arguments[2],O=arguments[3]||0,H=null);let nt,ct,gt,xt,bt,wt;H!==null?(nt=H.max.x-H.min.x,ct=H.max.y-H.min.y,gt=H.min.x,xt=H.min.y):(nt=R.image.width,ct=R.image.height,gt=0,xt=0),W!==null?(bt=W.x,wt=W.y):(bt=0,wt=0);const yt=Lt.convert(B.format),ee=Lt.convert(B.type);P.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const he=U.getParameter(U.UNPACK_ROW_LENGTH),_e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),Jt=U.getParameter(U.UNPACK_SKIP_ROWS),Mt=U.getParameter(U.UNPACK_SKIP_IMAGES),Oe=R.isCompressedTexture?R.mipmaps[O]:R.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,xt),R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,bt,wt,nt,ct,yt,ee,Oe.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,bt,wt,Oe.width,Oe.height,yt,Oe.data):U.texSubImage2D(U.TEXTURE_2D,O,bt,wt,nt,ct,yt,ee,Oe),U.pixelStorei(U.UNPACK_ROW_LENGTH,he),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mt),O===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(R,B,H=null,W=null,O=0){R.isTexture!==!0&&(Ma("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,R=arguments[2],B=arguments[3],O=arguments[4]||0);let nt,ct,gt,xt,bt,wt,yt,ee,he;const _e=R.isCompressedTexture?R.mipmaps[O]:R.image;H!==null?(nt=H.max.x-H.min.x,ct=H.max.y-H.min.y,gt=H.max.z-H.min.z,xt=H.min.x,bt=H.min.y,wt=H.min.z):(nt=_e.width,ct=_e.height,gt=_e.depth,xt=0,bt=0,wt=0),W!==null?(yt=W.x,ee=W.y,he=W.z):(yt=0,ee=0,he=0);const cn=Lt.convert(B.format),Jt=Lt.convert(B.type);let Mt;if(B.isData3DTexture)P.setTexture3D(B,0),Mt=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)P.setTexture2DArray(B,0),Mt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=U.getParameter(U.UNPACK_SKIP_PIXELS),ps=U.getParameter(U.UNPACK_SKIP_ROWS),un=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wt),R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Mt,O,yt,ee,he,nt,ct,gt,cn,Jt,_e.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,O,yt,ee,he,nt,ct,gt,cn,_e.data):U.texSubImage3D(Mt,O,yt,ee,he,nt,ct,gt,cn,Jt,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ps),U.pixelStorei(U.UNPACK_SKIP_IMAGES,un),O===0&&B.generateMipmaps&&U.generateMipmap(Mt),At.unbindTexture()},this.initRenderTarget=function(R){Pt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){A=0,w=0,S=null,At.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ju?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===Za?"display-p3":"srgb"}}class dy extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pf=new b,If=new Kt,Lf=new Kt,py=new b,Df=new St,zo=new b,Wl=new an,Uf=new St,Xl=new ho;class my extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ve),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),t.ray.intersectsSphere(Wl)!==!1&&(Uf.copy(s).invert(),Xl.copy(t.ray).applyMatrix4(Uf),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;If.fromBufferAttribute(s.attributes.skinIndex,t),Lf.fromBufferAttribute(s.attributes.skinWeight,t),Pf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Lf.getComponent(r);if(o!==0){const a=If.getComponent(r);Df.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(py.copy(Pf).applyMatrix4(Df),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class si extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kr extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=we,u=we,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nf=new St,gy=new St;class eh{constructor(t=[],e=[]){this.uuid=pr(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new St;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:gy;Nf.multiplyMatrices(a,e[r]),Nf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new eh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Kr(e,t,t,on,mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new si),this.bones.push(o),this.boneInverses.push(new St().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Ff extends Ot{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new St,Bf=new St,Vo=[],Of=new ve,_y=new St,Tr=new ce,Ar=new an;class Ep extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ff(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_y)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ve),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Of.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Of)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Ar.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Bf.multiplyMatrices(n,Cs),Tr.matrixWorld=Bf,Tr.raycast(t,Vo);for(let o=0,a=Vo.length;o<a;o++){const l=Vo[o];l.instanceId=r,l.object=this,e.push(l)}Vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ff(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kr(new Float32Array(s*this.count),s,this.count,Yu,mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function xy(i,t){return i.z-t.z}function vy(i,t){return t.z-i.z}class yy{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const Mi=new St,ql=new St,My=new St,Sy=new Tt(1,1,1),zf=new St,Yl=new Ja,ko=new ve,$i=new an,Rr=new b,Vf=new b,by=new b,$l=new yy,Ge=new ce,Ho=[];function Ey(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}class wy extends ce{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,s){super(new oe,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Kr(e,t,t,on,mn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Kr(e,t,t,Ka,Fi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Kr(e,t,t,on,mn);n.colorSpace=$t.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),f=new Ot(u,l,c);e.setAttribute(r,f)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new Ot(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);const t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Mi),this.getBoundingBoxAt(r,ko).applyMatrix4(Mi),t.union(ko)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Mi),this.getBoundingSphereAt(r,$i).applyMatrix4(Mi),t.union($i)}}addInstance(t){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(s=this._availableInstanceIds.pop(),this._drawInfo[s]=n):(s=this._drawInfo.length,this._drawInfo.push(n));const r=this._matricesTexture,o=r.image.data;My.toArray(o,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Sy.toArray(a.image.data,s*4),a.needsUpdate=!0),s}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?s.vertexCount=t.getAttribute("position").count:s.vertexCount=e,r===null?s.vertexStart=0:s.vertexStart=r.vertexStart+r.vertexCount;const c=t.getIndex(),u=c!==null;if(u&&(n===-1?s.indexCount=c.count:s.indexCount=n,r===null?s.indexStart=0:s.indexStart=r.indexStart+r.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const f=this._geometryCount;return this._geometryCount++,o.push(s),a.push({start:u?s.indexStart:s.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new ve,sphereInitialized:!1,sphere:new an}),this.setGeometryAt(f,t),f}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(s&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.vertexCount;for(const d in n.attributes){const g=e.getAttribute(d),_=n.getAttribute(d);Ey(g,_,l);const p=g.itemSize;for(let m=g.count,y=c;m<y;m++){const x=l+m;for(let M=0;M<p;M++)_.setComponent(x,M,0)}_.needsUpdate=!0,_.addUpdateRange(l*p,c*p)}if(s){const d=a.indexStart;for(let g=0;g<o.count;g++)r.setX(d+g,l+o.getX(g));for(let g=o.count,_=a.indexCount;g<_;g++)r.setX(d+g,l);r.needsUpdate=!0,r.addUpdateRange(d,a.indexCount)}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const f=this._drawRanges[t],h=e.getAttribute("position");return f.count=s?o.count:h.count,this._visibilityChanged=!0,t}deleteInstance(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.box,r=this.geometry;if(n.boxInitialized===!1){s.makeEmpty();const o=r.index,a=r.attributes.position,l=this._drawRanges[t];for(let c=l.start,u=l.start+l.count;c<u;c++){let f=c;o&&(f=o.getX(f)),s.expandByPoint(Rr.fromBufferAttribute(a,f))}n.boxInitialized=!0}return e.copy(s),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(t,ko),ko.getCenter(s.center);const o=r.index,a=r.attributes.position,l=this._drawRanges[t];let c=0;for(let u=l.start,f=l.start+l.count;u<f;u++){let h=u;o&&(h=o.getX(h)),Rr.fromBufferAttribute(a,h),c=Math.max(c,s.center.distanceToSquared(Rr))}s.radius=Math.sqrt(c),n.sphereInitialized=!0}return e.copy(s),e}setMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._drawInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||e<0||e>=this._geometryCount?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._drawRanges[t];return e.start=n.start,e.count=n.count,e}raycast(t,e){const n=this._drawInfo,s=this._drawRanges,r=this.matrixWorld,o=this.geometry;Ge.material=this.material,Ge.geometry.index=o.index,Ge.geometry.attributes=o.attributes,Ge.geometry.boundingBox===null&&(Ge.geometry.boundingBox=new ve),Ge.geometry.boundingSphere===null&&(Ge.geometry.boundingSphere=new an);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=s[c];Ge.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Ge.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Ge.geometry.boundingBox),this.getBoundingSphereAt(c,Ge.geometry.boundingSphere),Ge.raycast(t,Ho);for(let f=0,h=Ho.length;f<h;f++){const d=Ho[f];d.object=this,d.batchId=a,e.push(d)}Ho.length=0}Ge.material=null,Ge.geometry.index=null,Ge.geometry.attributes={},Ge.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,f=this._drawRanges,h=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data;h&&(zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Yl.setFromProjectionMatrix(zf,t.coordinateSystem));let _=0;if(this.sortObjects){ql.copy(this.matrixWorld).invert(),Rr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ql),Vf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ql);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){const M=l[y].geometryIndex;this.getMatrixAt(y,Mi),this.getBoundingSphereAt(M,$i).applyMatrix4(Mi);let A=!1;if(h&&(A=!Yl.intersectsSphere($i)),!A){const w=by.subVectors($i.center,Rr).dot(Vf);$l.push(f[M],w,y)}}const p=$l.list,m=this.customSort;m===null?p.sort(r.transparent?vy:xy):m.call(this,p,n);for(let y=0,x=p.length;y<x;y++){const M=p[y];c[_]=M.start*a,u[_]=M.count,g[_]=M.index,_++}$l.reset()}else for(let p=0,m=l.length;p<m;p++)if(l[p].visible&&l[p].active){const y=l[p].geometryIndex;let x=!1;if(h&&(this.getMatrixAt(p,Mi),this.getBoundingSphereAt(y,$i).applyMatrix4(Mi),x=!Yl.intersectsSphere($i)),!x){const M=f[y];c[_]=M.start*a,u[_]=M.count,g[_]=p,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class el extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new b,Na=new b,kf=new St,Cr=new ho,Go=new an,Kl=new b,Hf=new b;class nh extends pe{constructor(t=new oe,e=new el){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;kf.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(kf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),y=u.getX(_+1),x=Wo(this,t,Cr,l,m,y);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=Wo(this,t,Cr,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=Wo(this,t,Cr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Wo(this,t,Cr,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ua.fromBufferAttribute(o,s),Na.fromBufferAttribute(o,r),e.distanceSqToSegment(Ua,Na,Kl,Hf)>n)return;Kl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Kl);if(!(l<t.near||l>t.far))return{distance:l,point:Hf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class wp{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,s=[],r=[],o=[],a=new b,l=new St;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ih(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Xo=new b,jl=new ih,Zl=new ih,Jl=new ih;class Ty extends wp{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),jl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,p),Zl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,p),Jl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Zl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Jl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(jl.calc(l),Zl.calc(l),Jl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ay(i,t){const e=1-i;return e*e*e*t}function Ry(i,t){const e=1-i;return 3*e*e*i*t}function Cy(i,t){return 3*(1-i)*i*i*t}function Py(i,t){return i*i*i*t}function Ql(i,t,e,n,s){return Ay(i,t)+Ry(i,e)+Cy(i,n)+Py(i,s)}class Iy extends wp{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ql(t,s.x,r.x,o.x,a.x),Ql(t,s.y,r.y,o.y,a.y),Ql(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nl extends oe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,f=new b,h=new st,d=new b,g=new b,_=new b;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){const x=n+y*u*s,M=Math.sin(x),A=Math.cos(x);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*A,o.push(f.x,f.y,f.z),h.x=y/e,h.y=w/(t.length-1),a.push(h.x,h.y);const S=l[3*w+0]*M,C=l[3*w+1],I=l[3*w+0]*A;c.push(S,C,I)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const M=x+y*t.length,A=M,w=M+t.length,S=M+t.length+1,C=M+1;r.push(A,w,C),r.push(S,C,w)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.points,t.segments,t.phiStart,t.phiLength)}}class sh extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],p=n/2;let m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function y(){const M=new b,A=new b;let w=0;const S=(e-t)/n;for(let C=0;C<=r;C++){const I=[],v=C/r,E=v*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,N=D*l+a,k=Math.sin(N),z=Math.cos(N);A.x=E*k,A.y=-v*n+p,A.z=E*z,f.push(A.x,A.y,A.z),M.set(k,S,z).normalize(),h.push(M.x,M.y,M.z),d.push(D,1-v),I.push(g++)}_.push(I)}for(let C=0;C<s;C++)for(let I=0;I<r;I++){const v=_[I][C],E=_[I+1][C],L=_[I+1][C+1],D=_[I][C+1];t>0&&(u.push(v,E,D),w+=3),e>0&&(u.push(E,L,D),w+=3)}c.addGroup(m,w,0),m+=w}function x(M){const A=g,w=new st,S=new b;let C=0;const I=M===!0?t:e,v=M===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,p*v,0),h.push(0,v,0),d.push(.5,.5),g++;const E=g;for(let L=0;L<=s;L++){const N=L/s*l+a,k=Math.cos(N),z=Math.sin(N);S.x=I*z,S.y=p*v,S.z=I*k,f.push(S.x,S.y,S.z),h.push(0,v,0),w.x=k*.5+.5,w.y=z*.5*v+.5,d.push(w.x,w.y),g++}for(let L=0;L<s;L++){const D=A+L,N=E+L;M===!0?u.push(N,N+1,D):u.push(N+1,N,D),C+=3}c.addGroup(m,C,M===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rh extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new b,h=new b,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const w=A/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(w+M,1-x),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=u[m][y+1],M=u[m][y],A=u[m+1][y],w=u[m+1][y+1];(m!==0||o>0)&&d.push(x,M,w),(m!==n-1||l<Math.PI)&&d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ly extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oh extends zi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dy extends zi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class ah extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uy extends el{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Gf={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ny{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Fy=new Ny;class lh{constructor(t){this.manager=t!==void 0?t:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";class By extends lh{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Gf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=eo("img");function l(){u(),Gf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class fo extends lh{constructor(t){super(t)}load(t,e,n,s){const r=new Ye,o=new By(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ch extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const tc=new St,Wf=new b,Xf=new b;class Tp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wf),Xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xf),e.updateMatrixWorld(),tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Oy extends Tp{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Da*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class zy extends ch{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Oy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qf=new St,Pr=new b,ec=new b;class Vy extends Tp{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pr),ec.copy(n.position),ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ec),n.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}}class ky extends ch{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hy extends ch{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yf(){return performance.now()}const $f=new St;class fs{constructor(t,e,n=0,s=1/0){this.ray=new ho(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $f.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($f),this}intersectObject(t,e=!0,n=[]){return Mu(t,this,n,e),n.sort(Kf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mu(t[s],this,n,e);return n.sort(Kf),n}}function Kf(i,t){return i.distance-t.distance}function Mu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Mu(r[o],t,e,!0)}}const jf=new b,qo=new b;class ui{constructor(t=new b,e=new b){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jf.subVectors(t,this.start),qo.subVectors(this.end,this.start);const n=qo.dot(qo);let r=qo.dot(jf)/n;return e&&(r=Fe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Zf=new b;let Yo,nc;class Jf extends pe{constructor(t=new b(0,0,1),e=new b(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Yo===void 0&&(Yo=new oe,Yo.setAttribute("position",new me([0,0,0,0,1,0],3)),nc=new sh(0,.5,1,5,1),nc.translate(0,-.5,0)),this.position.copy(e),this.line=new nh(Yo,new el({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ce(nc,new Ni({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zf.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const Ap=0,Wy=1,Xy=2,Qf=2,ic=1.25,td=1,jr=6*4+4+4,il=65535,qy=Math.pow(2,-24),sc=Symbol("SKIP_GENERATION");function Yy(i){return i.index?i.index.count:i.attributes.position.count}function _r(i){return Yy(i)/3}function $y(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Ky(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=$y(e,n);i.setIndex(new Ot(s,1));for(let r=0;r<e;r++)s[r]=r}}function Rp(i,t){const e=_r(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Cp(i,t){if(!i.groups||!i.groups.length)return Rp(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(const l of i.groups){const c=l.start/3,u=(l.start+l.count)/3;n.add(Math.max(r,c)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function jy(i,t){const e=_r(i),n=Cp(i,t).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function rc(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,_=-1/0,p=-1/0;for(let m=t*6,y=(t+e)*6;m<y;m+=6){const x=i[m+0],M=i[m+1],A=x-M,w=x+M;A<r&&(r=A),w>l&&(l=w),x<f&&(f=x),x>g&&(g=x);const S=i[m+2],C=i[m+3],I=S-C,v=S+C;I<o&&(o=I),v>c&&(c=v),S<h&&(h=S),S>_&&(_=S);const E=i[m+4],L=i[m+5],D=E-L,N=E+L;D<a&&(a=D),N>u&&(u=N),E<d&&(d=E),E>p&&(p=E)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=_,s[5]=p}function Zy(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=_r(i),a=s.normalized;let l;t===null?(l=new Float32Array(o*6),e=0,n=o):(l=t,e=e||0,n=n||o);const c=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const g=d*3,_=d*6;let p=g+0,m=g+1,y=g+2;r&&(p=r[p],m=r[m],y=r[y]),a||(p=p*f+u,m=m*f+u,y=y*f+u);for(let x=0;x<3;x++){let M,A,w;a?(M=s[h[x]](p),A=s[h[x]](m),w=s[h[x]](y)):(M=c[p+x],A=c[m+x],w=c[y+x]);let S=M;A<S&&(S=A),w<S&&(S=w);let C=M;A>C&&(C=A),w>C&&(C=w);const I=(C-S)/2,v=x*2;l[_+v+0]=S+I,l[_+v+1]=I+(Math.abs(S)+I)*qy}}return l}function xe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function ed(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function nd(i,t){t.set(i)}function id(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function $o(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ir(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ei=32,Jy=(i,t)=>i.candidate-t.candidate,Si=new Array(ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ko=new Float32Array(6);function Qy(i,t,e,n,s,r){let o=-1,a=0;if(r===Ap)o=ed(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Wy)o=ed(i),o!==-1&&(a=tM(e,n,s,o));else if(r===Xy){const l=Ir(i);let c=ic*s;const u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const d=t[h],p=(t[h+3]-d)/ei;if(s<ei/4){const m=[...Si];m.length=s;let y=0;for(let M=u;M<f;M+=6,y++){const A=m[y];A.candidate=e[M+2*h],A.count=0;const{bounds:w,leftCacheBounds:S,rightCacheBounds:C}=A;for(let I=0;I<3;I++)C[I]=1/0,C[I+3]=-1/0,S[I]=1/0,S[I+3]=-1/0,w[I]=1/0,w[I+3]=-1/0;$o(M,e,w)}m.sort(Jy);let x=s;for(let M=0;M<x;M++){const A=m[M];for(;M+1<x&&m[M+1].candidate===A.candidate;)m.splice(M+1,1),x--}for(let M=u;M<f;M+=6){const A=e[M+2*h];for(let w=0;w<x;w++){const S=m[w];A>=S.candidate?$o(M,e,S.rightCacheBounds):($o(M,e,S.leftCacheBounds),S.count++)}}for(let M=0;M<x;M++){const A=m[M],w=A.count,S=s-A.count,C=A.leftCacheBounds,I=A.rightCacheBounds;let v=0;w!==0&&(v=Ir(C)/l);let E=0;S!==0&&(E=Ir(I)/l);const L=td+ic*(v*w+E*S);L<c&&(o=h,c=L,a=A.candidate)}}else{for(let x=0;x<ei;x++){const M=Si[x];M.count=0,M.candidate=d+p+x*p;const A=M.bounds;for(let w=0;w<3;w++)A[w]=1/0,A[w+3]=-1/0}for(let x=u;x<f;x+=6){let w=~~((e[x+2*h]-d)/p);w>=ei&&(w=ei-1);const S=Si[w];S.count++,$o(x,e,S.bounds)}const m=Si[ei-1];nd(m.bounds,m.rightCacheBounds);for(let x=ei-2;x>=0;x--){const M=Si[x],A=Si[x+1];id(M.bounds,A.rightCacheBounds,M.rightCacheBounds)}let y=0;for(let x=0;x<ei-1;x++){const M=Si[x],A=M.count,w=M.bounds,C=Si[x+1].rightCacheBounds;A!==0&&(y===0?nd(w,Ko):id(w,Ko,Ko)),y+=A;let I=0,v=0;y!==0&&(I=Ir(Ko)/l);const E=s-y;E!==0&&(v=Ir(C)/l);const L=td+ic*(I*y+v*E);L<c&&(o=h,c=L,a=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function tM(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}class oc{constructor(){this.boundingData=new Float32Array(6)}}function eM(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function nM(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function rn(i,t){return t[i+15]===65535}function gn(i,t){return t[i+6]}function Sn(i,t){return t[i+14]}function bn(i){return i+8}function En(i,t){return t[i+6]}function Pp(i,t){return t[i+7]}let Ip,qr,ba,Lp;const iM=Math.pow(2,32);function Su(i){return"count"in i?1:1+Su(i.left)+Su(i.right)}function sM(i,t,e){return Ip=new Float32Array(e),qr=new Uint32Array(e),ba=new Uint16Array(e),Lp=new Uint8Array(e),bu(i,t)}function bu(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)Ip[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;Lp.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=jr){const c=a/2;rn(c,ba)||(qr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return qr[e+6]=o,ba[n+14]=a,ba[n+15]=il,i+jr}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=bu(i+jr,o),c/4>iM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return qr[e+6]=c/4,c=bu(c,a),qr[e+7]=l,c}}function rM(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function oM(i,t,e,n,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,g=u?nM:eM,_=_r(h),p=new Float32Array(6);let m=!1;const y=new oc;return rc(t,e,n,y.boundingData,p),M(y,e,n,p),y;function x(A){c&&c(A/_)}function M(A,w,S,C=null,I=0){if(!m&&I>=r&&(m=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=a||I>=r)return x(w+S),A.offset=w,A.count=S,A;const v=Qy(A.boundingData,C,t,w,S,l);if(v.axis===-1)return x(w+S),A.offset=w,A.count=S,A;const E=g(f,d,t,w,S,v);if(E===w||E===w+S)x(w+S),A.offset=w,A.count=S;else{A.splitAxis=v.axis;const L=new oc,D=w,N=E-w;A.left=L,rc(t,D,N,L.boundingData,p),M(L,D,N,p,I+1);const k=new oc,z=E,q=S-N;A.right=k,rc(t,z,q,k.boundingData,p),M(k,z,q,p,I+1)}return A}}function aM(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=rM(e,t.useSharedArrayBuffer),jy(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Ky(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Zy(e),r=t.indirect?Rp(e,t.range):Cp(e,t.range);i._roots=r.map(o=>{const a=oM(i,s,o.offset,o.count,t),l=Su(a),c=new n(jr*l);return sM(0,a,c),c})}class fi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}fi.prototype.setFromBox=function(){const i=new b;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const f=e.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const lM=function(){const i=new b,t=new b,e=new b;return function(s,r,o){const a=s.start,l=i,c=r.start,u=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(l),d=u.dot(u),g=e.dot(l),p=l.dot(l)*d-h*h;let m,y;p!==0?m=(f*h-g*d)/p:m=0,y=(f+m*h)/d,o.x=m,o.y=y}}(),uh=function(){const i=new st,t=new b,e=new b;return function(s,r,o,a){lM(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let f;c<0?f=r.start:f=r.end;const h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(d);return}}}}(),cM=function(){const i=new b,t=new b,e=new ii,n=new ui;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:f}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const m=_.projectPoint(l,t);if(o.containsPoint(m))return!0}return!1}}(),uM=1e-15;function ac(i){return Math.abs(i)<uM}class On extends Ee{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new b),this.satBounds=new Array(4).fill().map(()=>new fi),this.points=[this.a,this.b,this.c],this.sphere=new an,this.plane=new ii,this.needsUpdate=!0}intersectsSphere(t){return cM(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,s);const f=r[2],h=o[2];f.subVectors(e,n),h.setFromPoints(f,s);const d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}On.prototype.closestPointToSegment=function(){const i=new b,t=new b,e=new ui;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,f=1/0;for(let h=0;h<3;h++){const d=(h+1)%3;e.start.copy(c[h]),e.end.copy(c[d]),uh(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(f)}}();On.prototype.intersectsTriangle=function(){const i=new On,t=new Array(3),e=new Array(3),n=new fi,s=new fi,r=new b,o=new b,a=new b,l=new b,c=new b,u=new ui,f=new ui,h=new ui,d=new b;function g(_,p,m){const y=_.points;let x=0,M=-1;for(let A=0;A<3;A++){const{start:w,end:S}=u;w.copy(y[A]),S.copy(y[(A+1)%3]),u.delta(o);const C=ac(p.distanceToPoint(w));if(ac(p.normal.dot(o))&&C){m.copy(u),x=2;break}const I=p.intersectLine(u,d);if(!I&&C&&d.copy(w),(I||C)&&!ac(d.distanceTo(S))){if(x<=1)(x===1?m.start:m.end).copy(d),C&&(M=x);else if(x>=2){(M===1?m.start:m.end).copy(d),x=2;break}if(x++,x===2&&M===-1)break}}return x}return function(p,m=null,y=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const x=this.plane,M=p.plane;if(Math.abs(x.normal.dot(M.normal))>1-1e-10){const A=this.satBounds,w=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let I=0;I<4;I++){const v=A[I],E=w[I];if(n.setFromPoints(E,e),v.isSeparated(n))return!1}const S=p.satBounds,C=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let I=0;I<4;I++){const v=S[I],E=C[I];if(n.setFromPoints(E,t),v.isSeparated(n))return!1}for(let I=0;I<4;I++){const v=w[I];for(let E=0;E<4;E++){const L=C[E];if(r.crossVectors(v,L),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return m&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const A=g(this,M,f);if(A===1&&p.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(A!==2)return!1;const w=g(p,x,h);if(w===1&&this.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(w!==2)return!1;if(f.delta(a),h.delta(l),a.dot(l)<0){let D=h.start;h.start=h.end,h.end=D}const S=f.start.dot(a),C=f.end.dot(a),I=h.start.dot(a),v=h.end.dot(a),E=C<I,L=S<v;return S!==v&&I!==C&&E===L?!1:(m&&(c.subVectors(f.start,h.start),c.dot(a)>0?m.start.copy(f.start):m.start.copy(h.start),c.subVectors(f.end,h.end),c.dot(a)<0?m.end.copy(f.end):m.end.copy(h.end)),!0)}}}();On.prototype.distanceToPoint=function(){const i=new b;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();On.prototype.distanceToTriangle=function(){const i=new b,t=new b,e=["a","b","c"],n=new ui,s=new ui;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let f=0;f<3;f++){let h;const d=e[f],g=o[d];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,a&&a.copy(i),l&&l.copy(g));const _=this[d];o.closestPointToPoint(_,i),h=_.distanceToSquared(i),h<u&&(u=h,a&&a.copy(_),l&&l.copy(i))}for(let f=0;f<3;f++){const h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let g=0;g<3;g++){const _=e[g],p=e[(g+1)%3];s.set(o[_],o[p]),uh(n,s,i,t);const m=i.distanceToSquared(t);m<u&&(u=m,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}}();class Je{constructor(t,e,n){this.isOrientedBox=!0,this.min=new b,this.max=new b,this.matrix=new St,this.invMatrix=new St,this.points=new Array(8).fill().map(()=>new b),this.satAxes=new Array(3).fill().map(()=>new b),this.satBounds=new Array(3).fill().map(()=>new fi),this.alignedSatBounds=new Array(3).fill().map(()=>new fi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Je.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*c|2*u|4*f,d=s[h];d.x=c?n.x:e.x,d.y=u?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],f=r[c],h=1<<c,d=s[h];u.subVectors(a,d),f.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Je.prototype.intersectsBox=function(){const i=new fi;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}}();Je.prototype.intersectsTriangle=function(){const i=new On,t=new Array(3),e=new fi,n=new fi,s=new b;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const d=a[h],g=l[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const d=c[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){const d=l[h];for(let g=0;g<4;g++){const _=u[g];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();Je.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Je.prototype.distanceToPoint=function(){const i=new b;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Je.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ui),e=new Array(12).fill().map(()=>new ui),n=new b,s=new b;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=a*a,f=o.min,h=o.max,d=this.points;let g=1/0;for(let p=0;p<8;p++){const m=d[p];s.copy(m).clamp(f,h);const y=m.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(m),c&&c.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let p=0;p<3;p++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){const x=(p+1)%3,M=(p+2)%3,A=m<<x|y<<M,w=1<<p|m<<x|y<<M,S=d[A],C=d[w];t[_].set(S,C);const v=i[p],E=i[x],L=i[M],D=e[_],N=D.start,k=D.end;N[v]=f[v],N[E]=m?f[E]:h[E],N[L]=y?f[L]:h[E],k[v]=h[v],k[E]=m?f[E]:h[E],k[L]=y?f[L]:h[E],_++}for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){s.x=p?h.x:f.x,s.y=m?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);const x=s.distanceToSquared(n);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<u))return Math.sqrt(x)}for(let p=0;p<12;p++){const m=t[p];for(let y=0;y<12;y++){const x=e[y];uh(m,x,n,s);const M=n.distanceToSquared(s);if(M<g&&(g=M,l&&l.copy(n),c&&c.copy(s),M<u))return Math.sqrt(M)}}return Math.sqrt(g)}}();class hh{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class hM extends hh{constructor(){super(()=>new On)}}const wn=new hM;class fM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const de=new fM;let Di,Ys;const Ps=[],jo=new hh(()=>new ve);function dM(i,t,e,n,s,r){Di=jo.getPrimitive(),Ys=jo.getPrimitive(),Ps.push(Di,Ys),de.setBuffer(i._roots[t]);const o=Eu(0,i.geometry,e,n,s,r);de.clearBuffer(),jo.releasePrimitive(Di),jo.releasePrimitive(Ys),Ps.pop(),Ps.pop();const a=Ps.length;return a>0&&(Ys=Ps[a-1],Di=Ps[a-2]),o}function Eu(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=de;let u=i*2;if(rn(u,l)){const g=gn(i,c),_=Sn(u,l);return xe(i,a,Di),n(g,_,!1,o,r+i,Di)}else{let L=function(N){const{uint16Array:k,uint32Array:z}=de;let q=N*2;for(;!rn(q,k);)N=bn(N),q=N*2;return gn(N,z)},D=function(N){const{uint16Array:k,uint32Array:z}=de;let q=N*2;for(;!rn(q,k);)N=En(N,z),q=N*2;return gn(N,z)+Sn(q,k)};var h=L,d=D;const g=bn(i),_=En(i,c);let p=g,m=_,y,x,M,A;if(s&&(M=Di,A=Ys,xe(p,a,M),xe(m,a,A),y=s(M),x=s(A),x<y)){p=_,m=g;const N=y;y=x,x=N,M=A}M||(M=Di,xe(p,a,M));const w=rn(p*2,l),S=e(M,w,y,o+1,r+p);let C;if(S===Qf){const N=L(p),z=D(p)-N;C=n(N,z,!0,o+1,r+p,M)}else C=S&&Eu(p,t,e,n,s,r,o+1);if(C)return!0;A=Ys,xe(m,a,A);const I=rn(m*2,l),v=e(A,I,x,o+1,r+m);let E;if(v===Qf){const N=L(m),z=D(m)-N;E=n(N,z,!0,o+1,r+m,A)}else E=v&&Eu(m,t,e,n,s,r,o+1);return!!E}}const Lr=new b,lc=new b;function pM(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(Lr.copy(t).clamp(u.min,u.max),Lr.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Lr);const h=t.distanceToSquared(Lr);return h<a&&(lc.copy(Lr),a=h,l=f),h<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(lc):e.point=lc.clone(),e.distance=c,e.faceIndex=l,e}const mM=parseInt(Xa)>=169,Ki=new b,ji=new b,Zi=new b,Zo=new st,Jo=new st,Qo=new st,sd=new b,rd=new b,od=new b,Dr=new b;function gM(i,t,e,n,s,r,o,a){let l;if(r===qe?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Un,s),l===null)return null;const c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function _M(i,t,e,n,s,r,o,a,l,c,u){Ki.fromBufferAttribute(t,r),ji.fromBufferAttribute(t,o),Zi.fromBufferAttribute(t,a);const f=gM(i,Ki,ji,Zi,Dr,l,c,u);if(f){const h=new b;Ee.getBarycoord(Dr,Ki,ji,Zi,h),n&&(Zo.fromBufferAttribute(n,r),Jo.fromBufferAttribute(n,o),Qo.fromBufferAttribute(n,a),f.uv=Ee.getInterpolation(Dr,Ki,ji,Zi,Zo,Jo,Qo,new st)),s&&(Zo.fromBufferAttribute(s,r),Jo.fromBufferAttribute(s,o),Qo.fromBufferAttribute(s,a),f.uv1=Ee.getInterpolation(Dr,Ki,ji,Zi,Zo,Jo,Qo,new st)),e&&(sd.fromBufferAttribute(e,r),rd.fromBufferAttribute(e,o),od.fromBufferAttribute(e,a),f.normal=Ee.getInterpolation(Dr,Ki,ji,Zi,sd,rd,od,new b),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:r,b:o,c:a,normal:new b,materialIndex:0};Ee.getNormal(Ki,ji,Zi,d.normal),f.face=d,f.faceIndex=r,mM&&(f.barycoord=h)}return f}function sl(i,t,e,n,s,r,o){const a=n*3;let l=a+0,c=a+1,u=a+2;const f=i.index;i.index&&(l=f.getX(l),c=f.getX(c),u=f.getX(u));const{position:h,normal:d,uv:g,uv1:_}=i.attributes,p=_M(e,h,d,g,_,l,c,u,t,r,o);return p?(p.faceIndex=n,s&&s.push(p),p):null}function Pe(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function xM(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,f=n+s;u<f;u++)sl(l,t,e,u,r,o,a)}function vM(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=sl(a,t,e,f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function yM(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,Pe(o,h*3,l,c),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function MM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===il){const m=o[h+6],y=a[_+14];let x=1/0,M=1/0,A=1/0,w=-1/0,S=-1/0,C=-1/0;for(let I=3*m,v=3*(m+y);I<v;I++){let E=n[I];const L=s.getX(E),D=s.getY(E),N=s.getZ(E);L<x&&(x=L),L>w&&(w=L),D<M&&(M=D),D>S&&(S=D),N<A&&(A=N),N>C&&(C=N)}return l[h+0]!==x||l[h+1]!==M||l[h+2]!==A||l[h+3]!==w||l[h+4]!==S||l[h+5]!==C?(l[h+0]=x,l[h+1]=M,l[h+2]=A,l[h+3]=w,l[h+4]=S,l[h+5]=C,!0):!1}else{const m=h+8,y=o[h+6],x=m+d,M=y+d;let A=g,w=!1,S=!1;t?A||(w=t.has(x),S=t.has(M),A=!w&&!S):(w=!0,S=!0);const C=A||w,I=A||S;let v=!1;C&&(v=f(m,d,A));let E=!1;I&&(E=f(y,d,A));const L=v||E;if(L)for(let D=0;D<3;D++){const N=m+D,k=y+D,z=l[N],q=l[N+3],G=l[k],Q=l[k+3];l[h+D]=z<G?z:G,l[h+D+3]=q>Q?q:Q}return L}}}function Bi(i,t,e,n,s){let r,o,a,l,c,u;const f=1/e.direction.x,h=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,_=e.origin.y,p=e.origin.z;let m=t[i],y=t[i+3],x=t[i+1],M=t[i+3+1],A=t[i+2],w=t[i+3+2];return f>=0?(r=(m-g)*f,o=(y-g)*f):(r=(y-g)*f,o=(m-g)*f),h>=0?(a=(x-_)*h,l=(M-_)*h):(a=(M-_)*h,l=(x-_)*h),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(A-p)*d,u=(w-p)*d):(c=(w-p)*d,u=(A-p)*d),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function SM(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,f=n+s;u<f;u++){let h=c?c[u]:u;sl(l,t,e,h,r,o,a)}}function bM(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=sl(a,t,e,l?l[f]:f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function EM(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Pe(o,h*3,l,c),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function wM(i,t,e,n,s,r,o){de.setBuffer(i._roots[t]),wu(0,i,e,n,s,r,o),de.clearBuffer()}function wu(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,u=i*2;if(rn(u,l)){const h=gn(i,c),d=Sn(u,l);xM(t,e,n,h,d,s,r,o)}else{const h=bn(i);Bi(h,a,n,r,o)&&wu(h,t,e,n,s,r,o);const d=En(i,c);Bi(d,a,n,r,o)&&wu(d,t,e,n,s,r,o)}}const TM=["x","y","z"];function AM(i,t,e,n,s,r){de.setBuffer(i._roots[t]);const o=Tu(0,i,e,n,s,r);return de.clearBuffer(),o}function Tu(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=i*2;if(rn(c,a)){const f=gn(i,l),h=Sn(c,a);return vM(t,e,n,f,h,s,r)}else{const f=Pp(i,l),h=TM[f],g=n.direction[h]>=0;let _,p;g?(_=bn(i),p=En(i,l)):(_=En(i,l),p=bn(i));const y=Bi(_,o,n,s,r)?Tu(_,t,e,n,s,r):null;if(y){const A=y.point[h];if(g?A<=o[p+f]:A>=o[p+f+3])return y}const M=Bi(p,o,n,s,r)?Tu(p,t,e,n,s,r):null;return y&&M?y.distance<=M.distance?y:M:y||M||null}}const ta=new ve,Is=new On,Ls=new On,Ur=new St,ad=new Je,ea=new Je;function RM(i,t,e,n){de.setBuffer(i._roots[t]);const s=Au(0,i,e,n);return de.clearBuffer(),s}function Au(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),ad.set(e.boundingBox.min,e.boundingBox.max,n),s=ad),rn(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=gn(i,a),p=Sn(l,o);if(Ur.copy(n).invert(),e.boundsTree)return xe(i,r,ea),ea.matrix.copy(Ur),ea.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>ea.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,M=(p+_)*3;x<M;x+=3)if(Pe(Ls,x,f,h),Ls.needsUpdate=!0,y.intersectsTriangle(Ls))return!0;return!1}});for(let m=_*3,y=(p+_)*3;m<y;m+=3){Pe(Is,m,f,h),Is.a.applyMatrix4(Ur),Is.b.applyMatrix4(Ur),Is.c.applyMatrix4(Ur),Is.needsUpdate=!0;for(let x=0,M=d.count;x<M;x+=3)if(Pe(Ls,x,d,g),Ls.needsUpdate=!0,Is.intersectsTriangle(Ls))return!0}}else{const u=i+8,f=a[i+6];return xe(u,r,ta),!!(s.intersectsBox(ta)&&Au(u,t,e,n,s)||(xe(f,r,ta),s.intersectsBox(ta)&&Au(f,t,e,n,s)))}}const na=new St,cc=new Je,Nr=new Je,CM=new b,PM=new b,IM=new b,LM=new b;function DM(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),cc.set(t.boundingBox.min,t.boundingBox.max,e),cc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=wn.getPrimitive(),d=wn.getPrimitive();let g=CM,_=PM,p=null,m=null;s&&(p=IM,m=LM);let y=1/0,x=null,M=null;return na.copy(e).invert(),Nr.matrix.copy(na),i.shapecast({boundsTraverseOrder:A=>cc.distanceToBox(A),intersectsBounds:(A,w,S)=>S<y&&S<o?(w&&(Nr.min.copy(A.min),Nr.max.copy(A.max),Nr.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>Nr.distanceToBox(C),intersectsBounds:(C,I,v)=>v<y&&v<o,intersectsRange:(C,I)=>{for(let v=C,E=C+I;v<E;v++){Pe(d,3*v,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=A,D=A+w;L<D;L++){Pe(h,3*L,c,l),h.needsUpdate=!0;const N=h.distanceToTriangle(d,g,p);if(N<y&&(_.copy(g),m&&m.copy(p),y=N,x=L,M=v),N<r)return!0}}}});{const S=_r(t);for(let C=0,I=S;C<I;C++){Pe(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let v=A,E=A+w;v<E;v++){Pe(h,3*v,c,l),h.needsUpdate=!0;const L=h.distanceToTriangle(d,g,p);if(L<y&&(_.copy(g),m&&m.copy(p),y=L,x=v,M=C),L<r)return!0}}}}}),wn.releasePrimitive(h),wn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(na),_.applyMatrix4(na),s.distance=_.sub(s.point).length(),s.faceIndex=M),n)}function UM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===il){const m=o[h+6],y=a[_+14];let x=1/0,M=1/0,A=1/0,w=-1/0,S=-1/0,C=-1/0;for(let I=m,v=m+y;I<v;I++){const E=3*i.resolveTriangleIndex(I);for(let L=0;L<3;L++){let D=E+L;D=n?n[D]:D;const N=s.getX(D),k=s.getY(D),z=s.getZ(D);N<x&&(x=N),N>w&&(w=N),k<M&&(M=k),k>S&&(S=k),z<A&&(A=z),z>C&&(C=z)}}return l[h+0]!==x||l[h+1]!==M||l[h+2]!==A||l[h+3]!==w||l[h+4]!==S||l[h+5]!==C?(l[h+0]=x,l[h+1]=M,l[h+2]=A,l[h+3]=w,l[h+4]=S,l[h+5]=C,!0):!1}else{const m=h+8,y=o[h+6],x=m+d,M=y+d;let A=g,w=!1,S=!1;t?A||(w=t.has(x),S=t.has(M),A=!w&&!S):(w=!0,S=!0);const C=A||w,I=A||S;let v=!1;C&&(v=f(m,d,A));let E=!1;I&&(E=f(y,d,A));const L=v||E;if(L)for(let D=0;D<3;D++){const N=m+D,k=y+D,z=l[N],q=l[N+3],G=l[k],Q=l[k+3];l[h+D]=z<G?z:G,l[h+D+3]=q>Q?q:Q}return L}}}function NM(i,t,e,n,s,r,o){de.setBuffer(i._roots[t]),Ru(0,i,e,n,s,r,o),de.clearBuffer()}function Ru(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,u=i*2;if(rn(u,l)){const h=gn(i,c),d=Sn(u,l);SM(t,e,n,h,d,s,r,o)}else{const h=bn(i);Bi(h,a,n,r,o)&&Ru(h,t,e,n,s,r,o);const d=En(i,c);Bi(d,a,n,r,o)&&Ru(d,t,e,n,s,r,o)}}const FM=["x","y","z"];function BM(i,t,e,n,s,r){de.setBuffer(i._roots[t]);const o=Cu(0,i,e,n,s,r);return de.clearBuffer(),o}function Cu(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=i*2;if(rn(c,a)){const f=gn(i,l),h=Sn(c,a);return bM(t,e,n,f,h,s,r)}else{const f=Pp(i,l),h=FM[f],g=n.direction[h]>=0;let _,p;g?(_=bn(i),p=En(i,l)):(_=En(i,l),p=bn(i));const y=Bi(_,o,n,s,r)?Cu(_,t,e,n,s,r):null;if(y){const A=y.point[h];if(g?A<=o[p+f]:A>=o[p+f+3])return y}const M=Bi(p,o,n,s,r)?Cu(p,t,e,n,s,r):null;return y&&M?y.distance<=M.distance?y:M:y||M||null}}const ia=new ve,Ds=new On,Us=new On,Fr=new St,ld=new Je,sa=new Je;function OM(i,t,e,n){de.setBuffer(i._roots[t]);const s=Pu(0,i,e,n);return de.clearBuffer(),s}function Pu(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),ld.set(e.boundingBox.min,e.boundingBox.max,n),s=ld),rn(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=gn(i,a),p=Sn(l,o);if(Fr.copy(n).invert(),e.boundsTree)return xe(i,r,sa),sa.matrix.copy(Fr),sa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>sa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,M=p+_;x<M;x++)if(Pe(Us,3*t.resolveTriangleIndex(x),f,h),Us.needsUpdate=!0,y.intersectsTriangle(Us))return!0;return!1}});for(let m=_,y=p+_;m<y;m++){const x=t.resolveTriangleIndex(m);Pe(Ds,3*x,f,h),Ds.a.applyMatrix4(Fr),Ds.b.applyMatrix4(Fr),Ds.c.applyMatrix4(Fr),Ds.needsUpdate=!0;for(let M=0,A=d.count;M<A;M+=3)if(Pe(Us,M,d,g),Us.needsUpdate=!0,Ds.intersectsTriangle(Us))return!0}}else{const u=i+8,f=a[i+6];return xe(u,r,ia),!!(s.intersectsBox(ia)&&Pu(u,t,e,n,s)||(xe(f,r,ia),s.intersectsBox(ia)&&Pu(f,t,e,n,s)))}}const ra=new St,uc=new Je,Br=new Je,zM=new b,VM=new b,kM=new b,HM=new b;function GM(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),uc.set(t.boundingBox.min,t.boundingBox.max,e),uc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=wn.getPrimitive(),d=wn.getPrimitive();let g=zM,_=VM,p=null,m=null;s&&(p=kM,m=HM);let y=1/0,x=null,M=null;return ra.copy(e).invert(),Br.matrix.copy(ra),i.shapecast({boundsTraverseOrder:A=>uc.distanceToBox(A),intersectsBounds:(A,w,S)=>S<y&&S<o?(w&&(Br.min.copy(A.min),Br.max.copy(A.max),Br.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:C=>Br.distanceToBox(C),intersectsBounds:(C,I,v)=>v<y&&v<o,intersectsRange:(C,I)=>{for(let v=C,E=C+I;v<E;v++){const L=S.resolveTriangleIndex(v);Pe(d,3*L,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=A,N=A+w;D<N;D++){const k=i.resolveTriangleIndex(D);Pe(h,3*k,c,l),h.needsUpdate=!0;const z=h.distanceToTriangle(d,g,p);if(z<y&&(_.copy(g),m&&m.copy(p),y=z,x=D,M=v),z<r)return!0}}}})}else{const S=_r(t);for(let C=0,I=S;C<I;C++){Pe(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let v=A,E=A+w;v<E;v++){const L=i.resolveTriangleIndex(v);Pe(h,3*L,c,l),h.needsUpdate=!0;const D=h.distanceToTriangle(d,g,p);if(D<y&&(_.copy(g),m&&m.copy(p),y=D,x=v,M=C),D<r)return!0}}}}}),wn.releasePrimitive(h),wn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(ra),_.applyMatrix4(ra),s.distance=_.sub(s.point).length(),s.faceIndex=M),n)}function WM(){return typeof SharedArrayBuffer<"u"}const Zr=new de.constructor,Fa=new de.constructor,Ti=new hh(()=>new ve),Ns=new ve,Fs=new ve,hc=new ve,fc=new ve;let dc=!1;function XM(i,t,e,n){if(dc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");dc=!0;const s=i._roots,r=t._roots;let o,a=0,l=0;const c=new St().copy(e).invert();for(let u=0,f=s.length;u<f;u++){Zr.setBuffer(s[u]),l=0;const h=Ti.getPrimitive();xe(0,Zr.float32Array,h),h.applyMatrix4(c);for(let d=0,g=r.length;d<g&&(Fa.setBuffer(r[d]),o=Dn(0,0,e,c,n,a,l,0,0,h),Fa.clearBuffer(),l+=r[d].length,!o);d++);if(Ti.releasePrimitive(h),Zr.clearBuffer(),a+=s[u].length,o)break}return dc=!1,o}function Dn(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,u=!1){let f,h;u?(f=Fa,h=Zr):(f=Zr,h=Fa);const d=f.float32Array,g=f.uint32Array,_=f.uint16Array,p=h.float32Array,m=h.uint32Array,y=h.uint16Array,x=i*2,M=t*2,A=rn(x,_),w=rn(M,y);let S=!1;if(w&&A)u?S=s(gn(t,m),Sn(t*2,y),gn(i,g),Sn(i*2,_),l,o+t,a,r+i):S=s(gn(i,g),Sn(i*2,_),gn(t,m),Sn(t*2,y),a,r+i,l,o+t);else if(w){const C=Ti.getPrimitive();xe(t,p,C),C.applyMatrix4(e);const I=bn(i),v=En(i,g);xe(I,d,Ns),xe(v,d,Fs);const E=C.intersectsBox(Ns),L=C.intersectsBox(Fs);S=E&&Dn(t,I,n,e,s,o,r,l,a+1,C,!u)||L&&Dn(t,v,n,e,s,o,r,l,a+1,C,!u),Ti.releasePrimitive(C)}else{const C=bn(t),I=En(t,m);xe(C,p,hc),xe(I,p,fc);const v=c.intersectsBox(hc),E=c.intersectsBox(fc);if(v&&E)S=Dn(i,C,e,n,s,r,o,a,l+1,c,u)||Dn(i,I,e,n,s,r,o,a,l+1,c,u);else if(v)if(A)S=Dn(i,C,e,n,s,r,o,a,l+1,c,u);else{const L=Ti.getPrimitive();L.copy(hc).applyMatrix4(e);const D=bn(i),N=En(i,g);xe(D,d,Ns),xe(N,d,Fs);const k=L.intersectsBox(Ns),z=L.intersectsBox(Fs);S=k&&Dn(C,D,n,e,s,o,r,l,a+1,L,!u)||z&&Dn(C,N,n,e,s,o,r,l,a+1,L,!u),Ti.releasePrimitive(L)}else if(E)if(A)S=Dn(i,I,e,n,s,r,o,a,l+1,c,u);else{const L=Ti.getPrimitive();L.copy(fc).applyMatrix4(e);const D=bn(i),N=En(i,g);xe(D,d,Ns),xe(N,d,Fs);const k=L.intersectsBox(Ns),z=L.intersectsBox(Fs);S=k&&Dn(I,D,n,e,s,o,r,l,a+1,L,!u)||z&&Dn(I,N,n,e,s,o,r,l,a+1,L,!u),Ti.releasePrimitive(L)}}return S}const oa=new Je,cd=new ve,qM={strategy:Ap,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class fh{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t,a=new fh(e,{...n,[sc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Ot(t.index,1,!1);e.setIndex(c)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...qM,[sc]:!1},e),e.useSharedArrayBuffer&&!WM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[sc]||(aM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ve))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?UM:MM)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=r[c+15]===il;if(u){const f=s[a+6],h=r[c+14];t(l,u,new Float32Array(n,a*4,6),f,h)}else{const f=a+jr/4,h=s[a+6],d=s[a+7];t(l,u,new Float32Array(n,a*4,6),d)||(o(f,l+1),o(h,l+1))}}}raycast(t,e=qn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),u=o.groups,f=l?e.side:e,h=this.indirect?NM:wM;for(let d=0,g=r.length;d<g;d++){const _=c?e[u[d].materialIndex].side:f,p=a.length;if(h(this,d,_,t,a,n,s),c){const m=u[d].materialIndex;for(let y=p,x=a.length;y<x;y++)a[y].face.materialIndex=m}}return a}raycastFirst(t,e=qn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const u=o.groups,f=a?e.side:e,h=this.indirect?BM:AM;for(let d=0,g=r.length;d<g;d++){const _=l?e[u[d].materialIndex].side:f,p=h(this,d,_,t,n,s);p!=null&&(c==null||p.distance<c.distance)&&(c=p,l&&(p.face.materialIndex=u[d].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?OM:RM;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=wn.getPrimitive(),n=this.indirect?EM:yM;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,d,g,_,p)=>f(h,d,g,_,p)?!0:n(h,d,this,a,g,_,e)}else o||(a?o=(f,h,d,g)=>n(f,h,this,a,d,g,e):o=(f,h,d)=>d);let l=!1,c=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const d=u[f];if(l=dM(this,f,r,o,s,c),l)break;c+=d.byteLength}return wn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=wn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Pe(o,_*3,a,l)}:g=>{Pe(o,g*3,a,l)},u=wn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Pe(u,_*3,f,h)}:g=>{Pe(u,g*3,f,h)};if(r){const g=(_,p,m,y,x,M,A,w)=>{for(let S=m,C=m+y;S<C;S++){d(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let I=_,v=_+p;I<v;I++)if(c(I),o.needsUpdate=!0,r(o,u,I,S,x,M,A,w))return!0}return!1};if(s){const _=s;s=function(p,m,y,x,M,A,w,S){return _(p,m,y,x,M,A,w,S)?!0:g(p,m,y,x,M,A,w,S)}}else s=g}return XM(this,t,e,s)}intersectsBox(t,e){return oa.set(t.min,t.max,e),oa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>oa.intersectsBox(n),intersectsTriangle:n=>oa.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?GM:DM)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return pM(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{xe(0,new Float32Array(n),cd),t.union(cd)}),t}}function ud(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const aa=new ho,hd=new b,fd=new St,YM=ce.prototype.raycast,$M=wy.prototype.raycast,dd=new b,ze=new ce,la=[];function KM(i,t){this.isBatchedMesh?jM.call(this,i,t):ZM.call(this,i,t)}function jM(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo,s=this._drawRanges,r=this.matrixWorld;ze.material=this.material,ze.geometry=this.geometry;const o=ze.geometry.boundsTree,a=ze.geometry.drawRange;ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new an);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const u=n[l].geometryIndex;if(ze.geometry.boundsTree=e[u],this.getMatrixAt(l,ze.matrixWorld).premultiply(r),!ze.geometry.boundsTree){this.getBoundingBoxAt(u,ze.geometry.boundingBox),this.getBoundingSphereAt(u,ze.geometry.boundingSphere);const f=s[u];ze.geometry.setDrawRange(f.start,f.count)}ze.raycast(i,la);for(let f=0,h=la.length;f<h;f++){const d=la[f];d.object=this,d.batchId=l,t.push(d)}la.length=0}ze.geometry.boundsTree=o,ze.geometry.drawRange=a,ze.material=null,ze.geometry=null}else $M.call(this,i,t)}function ZM(i,t){if(this.geometry.boundsTree){if(this.material===void 0)return;fd.copy(this.matrixWorld).invert(),aa.copy(i.ray).applyMatrix4(fd),dd.setFromMatrixScale(this.matrixWorld),hd.copy(aa.direction).multiply(dd);const e=hd.length(),n=i.near/e,s=i.far/e,r=this.geometry.boundsTree;if(i.firstHitOnly===!0){const o=ud(r.raycastFirst(aa,this.material,n,s),this,i);o&&t.push(o)}else{const o=r.raycast(aa,this.material,n,s);for(let a=0,l=o.length;a<l;a++){const c=ud(o[a],this,i);c&&t.push(c)}}}else YM.call(this,i,t)}function JM(i={}){return this.boundsTree=new fh(this,i),this.boundsTree}function QM(){this.boundsTree=null}oe.prototype.computeBoundsTree=JM;oe.prototype.disposeBoundsTree=QM;ce.prototype.raycast=KM;const Ea=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return Math.sqrt(e*e+n*n)},tS=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return nS(Math.atan2(n,e))},eS=(i,t,e)=>{const n={x:0,y:0};return e=Iu(e),n.x=i.x-t*Math.cos(e),n.y=i.y-t*Math.sin(e),n},Iu=i=>i*(Math.PI/180),nS=i=>i*(180/Math.PI),iS=i=>isNaN(i.buttons)?i.pressure!==0:i.buttons!==0,pc=new Map,pd=i=>{pc.has(i)&&clearTimeout(pc.get(i)),pc.set(i,setTimeout(i,100))},Ba=(i,t,e)=>{const n=t.split(/[ ,]+/g);let s;for(let r=0;r<n.length;r+=1)s=n[r],i.addEventListener?i.addEventListener(s,e,!1):i.attachEvent&&i.attachEvent(s,e)},md=(i,t,e)=>{const n=t.split(/[ ,]+/g);let s;for(let r=0;r<n.length;r+=1)s=n[r],i.removeEventListener?i.removeEventListener(s,e):i.detachEvent&&i.detachEvent(s,e)},Dp=i=>(i.preventDefault(),i.type.match(/^touch/)?i.changedTouches:i),gd=()=>{const i=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:i,y:t}},_d=(i,t)=>{t.top||t.right||t.bottom||t.left?(i.style.top=t.top,i.style.right=t.right,i.style.bottom=t.bottom,i.style.left=t.left):(i.style.left=t.x+"px",i.style.top=t.y+"px")},dh=(i,t,e)=>{const n=Up(i);for(let s in n)if(n.hasOwnProperty(s))if(typeof t=="string")n[s]=t+" "+e;else{let r="";for(let o=0,a=t.length;o<a;o+=1)r+=t[o]+" "+e+", ";n[s]=r.slice(0,-2)}return n},sS=(i,t)=>{const e=Up(i);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},Up=i=>{const t={};return t[i]="",["webkit","Moz","o"].forEach(function(n){t[n+i.charAt(0).toUpperCase()+i.slice(1)]=""}),t},mc=(i,t)=>{for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i},rS=(i,t)=>{const e={};for(let n in i)i.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:i.hasOwnProperty(n)&&(e[n]=i[n]);return e},Lu=(i,t)=>{if(i.length)for(let e=0,n=i.length;e<n;e+=1)t(i[e]);else t(i)},oS=(i,t,e)=>({x:Math.min(Math.max(i.x,t.x-e),t.x+e),y:Math.min(Math.max(i.y,t.y-e),t.y+e)});var aS="ontouchstart"in window,lS=!!window.PointerEvent,cS=!!window.MSPointerEvent,Or={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},$s,no={};lS?$s=Or.pointer:cS?$s=Or.MSPointer:aS?($s=Or.touch,no=Or.mouse):$s=Or.mouse;function di(){}di.prototype.on=function(i,t){var e=this,n=i.split(/[ ,]+/g),s;e._handlers_=e._handlers_||{};for(var r=0;r<n.length;r+=1)s=n[r],e._handlers_[s]=e._handlers_[s]||[],e._handlers_[s].push(t);return e};di.prototype.off=function(i,t){var e=this;return e._handlers_=e._handlers_||{},i===void 0?e._handlers_={}:t===void 0?e._handlers_[i]=null:e._handlers_[i]&&e._handlers_[i].indexOf(t)>=0&&e._handlers_[i].splice(e._handlers_[i].indexOf(t),1),e};di.prototype.trigger=function(i,t){var e=this,n=i.split(/[ ,]+/g),s;e._handlers_=e._handlers_||{};for(var r=0;r<n.length;r+=1)s=n[r],e._handlers_[s]&&e._handlers_[s].length&&e._handlers_[s].forEach(function(o){o.call(e,{type:s,target:e},t)})};di.prototype.config=function(i){var t=this;t.options=t.defaults||{},i&&(t.options=rS(t.options,i))};di.prototype.bindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},Ba(i,$s[t],e._domHandlers_[t]),no[t]&&Ba(i,no[t],e._domHandlers_[t]),e};di.prototype.unbindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},md(i,$s[t],e._domHandlers_[t]),no[t]&&md(i,no[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function De(i,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=i,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=De.id,De.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}De.prototype=new di;De.constructor=De;De.id=0;De.prototype.buildEl=function(i){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};De.prototype.stylize=function(){if(this.options.dataOnly)return this;var i=this.options.fadeTime+"ms",t=sS("borderRadius","50%"),e=dh("transition","opacity",i),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},mc(n.el,e),this.options.shape==="circle"&&mc(n.back,t),mc(n.front,t),this.applyStyles(n),this};De.prototype.applyStyles=function(i){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in i[t])this.ui[t].style[e]=i[t][e];return this};De.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};De.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};De.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};De.prototype.show=function(i){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof i=="function"&&i.call(this)},t.options.fadeTime)),t};De.prototype.hide=function(i){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof i=="function"&&i.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(i,n)}return t};De.prototype.setPosition=function(i,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",s={};s.front=dh("transition",["transform"],n);var r={front:{}};r.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(s),e.applyStyles(r),e.restTimeout=setTimeout(function(){typeof i=="function"&&i.call(e),e.restCallback()},e.options.fadeTime)};De.prototype.restCallback=function(){var i=this,t={};t.front=dh("transition","none",""),i.applyStyles(t),i.trigger("rested",i.instance)};De.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};De.prototype.computeDirection=function(i){var t=i.angle.radian,e=Math.PI/4,n=Math.PI/2,s,r,o;if(t>e&&t<e*3&&!i.lockX?s="up":t>-e&&t<=e&&!i.lockY?s="left":t>-e*3&&t<=-e&&!i.lockX?s="down":i.lockY||(s="right"),i.lockY||(t>-n&&t<n?r="left":r="right"),i.lockX||(t>0?o="up":o="down"),i.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:r,y:o,angle:s},i.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return i;(!c.x||!c.y)&&this.trigger("plain",i),c.x||this.trigger("plain:"+r,i),c.y||this.trigger("plain:"+o,i),c.angle||this.trigger("dir dir:"+s,i)}else this.resetDirection();return i};function Te(i,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=i,e.id=Te.id,Te.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}Te.prototype=new di;Te.constructor=Te;Te.id=0;Te.prototype.prepareNipples=function(){var i=this,t=i.nipples;t.on=i.on.bind(i),t.off=i.off.bind(i),t.options=i.options,t.destroy=i.destroy.bind(i),t.ids=i.ids,t.id=i.id,t.processOnMove=i.processOnMove.bind(i),t.processOnEnd=i.processOnEnd.bind(i),t.get=function(e){if(e===void 0)return t[0];for(var n=0,s=t.length;n<s;n+=1)if(t[n].identifier===e)return t[n];return!1}};Te.prototype.bindings=function(){var i=this;i.bindEvt(i.options.zone,"start"),i.options.zone.style.touchAction="none",i.options.zone.style.msTouchAction="none"};Te.prototype.begin=function(){var i=this,t=i.options;if(t.mode==="static"){var e=i.createNipple(t.position,i.manager.getIdentifier());e.add(),i.idles.push(e)}};Te.prototype.createNipple=function(i,t){var e=this,n=e.manager.scroll,s={},r=e.options,o={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(i.x&&i.y)s={x:i.x-o.x,y:i.y-o.y};else if(i.top||i.right||i.bottom||i.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=i.top,a.style.right=i.right,a.style.bottom=i.bottom,a.style.left=i.left,a.style.position="absolute",r.zone.appendChild(a);var l=a.getBoundingClientRect();r.zone.removeChild(a),s=i,i={x:l.left+n.x,y:l.top+n.y}}var c=new De(e,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:t,position:i,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(_d(c.ui.el,s),_d(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};Te.prototype.updateBox=function(){var i=this;i.box=i.options.zone.getBoundingClientRect()};Te.prototype.bindNipple=function(i){var t=this,e,n=function(s,r){e=s.type+" "+r.id+":"+s.type,t.trigger(e,r)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};Te.prototype.pressureFn=function(i,t,e){var n=this,s=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var r=i.force||i.pressure||i.webkitForce||0;r!==s&&(t.trigger("pressure",r),n.trigger("pressure "+t.identifier+":pressure",r),s=r)}).bind(n),100)};Te.prototype.onstart=function(i){var t=this,e=t.options,n=i;i=Dp(i),t.updateBox();var s=function(r){t.actives.length<e.maxNumberOfNipples?t.processOnStart(r):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[i[0]];a.identifier=o,t.processOnEnd(a)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(r))};return Lu(i,s),t.manager.bindDocument(),!1};Te.prototype.processOnStart=function(i){var t=this,e=t.options,n,s=t.manager.getIdentifier(i),r=i.force||i.pressure||i.webkitForce||0,o={x:i.pageX,y:i.pageY},a=t.getOrCreate(s,o);a.identifier!==s&&t.manager.removeIdentifier(a.identifier),a.identifier=s;var l=function(u){u.trigger("start",u),t.trigger("start "+u.id+":start",u),u.show(),r>0&&t.pressureFn(i,u,u.identifier),t.processOnMove(i)};if((n=t.idles.indexOf(a))>=0&&t.idles.splice(n,1),t.actives.push(a),t.ids.push(a.identifier),e.mode!=="semi")l(a);else{var c=Ea(o,a.position);if(c<=e.catchDistance)l(a);else{a.destroy(),t.processOnStart(i);return}}return a};Te.prototype.getOrCreate=function(i,t){var e=this,n=e.options,s;return/(semi|static)/.test(n.mode)?(s=e.idles[0],s?(e.idles.splice(0,1),s):n.mode==="semi"?e.createNipple(t,i):(console.warn("Coudln't find the needed nipple."),!1)):(s=e.createNipple(t,i),s)};Te.prototype.processOnMove=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),s=t.nipples.get(n),r=t.manager.scroll;if(!iS(i)){this.processOnEnd(i);return}if(!s){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var o=s.el.getBoundingClientRect();s.position={x:r.x+o.left,y:r.y+o.top}}s.identifier=n;var a=s.options.size/2,l={x:i.pageX,y:i.pageY};e.lockX&&(l.y=s.position.y),e.lockY&&(l.x=s.position.x);var c=Ea(l,s.position),u=tS(l,s.position),f=Iu(u),h=c/a,d={distance:c,position:l},g,_;if(s.options.shape==="circle"?(g=Math.min(c,a),_=eS(s.position,g,u)):(_=oS(l,s.position,a),g=Ea(_,s.position)),e.follow){if(c>a){let x=l.x-_.x,M=l.y-_.y;s.position.x+=x,s.position.y+=M,s.el.style.top=s.position.y-(t.box.top+r.y)+"px",s.el.style.left=s.position.x-(t.box.left+r.x)+"px",c=Ea(l,s.position)}}else l=_,c=g;var p=l.x-s.position.x,m=l.y-s.position.y;s.frontPosition={x:p,y:m},e.dataOnly||(s.ui.front.style.transform="translate("+p+"px,"+m+"px)");var y={identifier:s.identifier,position:l,force:h,pressure:i.force||i.pressure||i.webkitForce||0,distance:c,angle:{radian:f,degree:u},vector:{x:p/a,y:-m/a},raw:d,instance:s,lockX:e.lockX,lockY:e.lockY};y=s.computeDirection(y),y.angle={radian:Iu(180-u),degree:180-u},s.trigger("move",y),t.trigger("move "+s.id+":move",y)};Te.prototype.processOnEnd=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),s=t.nipples.get(n),r=t.manager.removeIdentifier(s.identifier);s&&(e.dataOnly||s.hide(function(){e.mode==="dynamic"&&(s.trigger("removed",s),t.trigger("removed "+s.id+":removed",s),t.manager.trigger("removed "+s.id+":removed",s),s.destroy())}),clearInterval(t.pressureIntervals[s.identifier]),s.resetDirection(),s.trigger("end",s),t.trigger("end "+s.id+":end",s),t.ids.indexOf(s.identifier)>=0&&t.ids.splice(t.ids.indexOf(s.identifier),1),t.actives.indexOf(s)>=0&&t.actives.splice(t.actives.indexOf(s),1),/(semi|static)/.test(e.mode)?t.idles.push(s):t.nipples.indexOf(s)>=0&&t.nipples.splice(t.nipples.indexOf(s),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[r.id]=r.identifier))};Te.prototype.onDestroyed=function(i,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};Te.prototype.destroy=function(){var i=this;i.unbindEvt(i.options.zone,"start"),i.nipples.forEach(function(e){e.destroy()});for(var t in i.pressureIntervals)i.pressureIntervals.hasOwnProperty(t)&&clearInterval(i.pressureIntervals[t]);i.trigger("destroyed",i.nipples),i.manager.unbindDocument(),i.off()};function Be(i){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=gd(),t.config(i),t.prepareCollections();var e=function(){var s;t.collections.forEach(function(r){r.forEach(function(o){s=o.el.getBoundingClientRect(),o.position={x:t.scroll.x+s.left,y:t.scroll.y+s.top}})})};Ba(window,"resize",function(){pd(e)});var n=function(){t.scroll=gd()};return Ba(window,"scroll",function(){pd(n)}),t.collections}Be.prototype=new di;Be.constructor=Be;Be.prototype.prepareCollections=function(){var i=this;i.collections.create=i.create.bind(i),i.collections.on=i.on.bind(i),i.collections.off=i.off.bind(i),i.collections.destroy=i.destroy.bind(i),i.collections.get=function(t){var e;return i.collections.every(function(n){return e=n.get(t),!e}),e}};Be.prototype.create=function(i){return this.createCollection(i)};Be.prototype.createCollection=function(i){var t=this,e=new Te(t,i);return t.bindCollection(e),t.collections.push(e),e};Be.prototype.bindCollection=function(i){var t=this,e,n=function(s,r){e=s.type+" "+r.id+":"+s.type,t.trigger(e,r)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};Be.prototype.bindDocument=function(){var i=this;i.binded||(i.bindEvt(document,"move").bindEvt(document,"end"),i.binded=!0)};Be.prototype.unbindDocument=function(i){var t=this;(!Object.keys(t.ids).length||i===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};Be.prototype.getIdentifier=function(i){var t;return i?(t=i.identifier===void 0?i.pointerId:i.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};Be.prototype.removeIdentifier=function(i){var t={};for(var e in this.ids)if(this.ids[e]===i){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};Be.prototype.onmove=function(i){var t=this;return t.onAny("move",i),!1};Be.prototype.onend=function(i){var t=this;return t.onAny("end",i),!1};Be.prototype.oncancel=function(i){var t=this;return t.onAny("end",i),!1};Be.prototype.onAny=function(i,t){var e=this,n,s="processOn"+i.charAt(0).toUpperCase()+i.slice(1);t=Dp(t);var r=function(a,l,c){c.ids.indexOf(l)>=0&&(c[s](a),a._found_=!0)},o=function(a){n=e.getIdentifier(a),Lu(e.collections,r.bind(null,a,n)),a._found_||e.removeIdentifier(n)};return Lu(t,o),!1};Be.prototype.destroy=function(){var i=this;i.unbindDocument(!0),i.ids={},i.index=0,i.collections.forEach(function(t){t.destroy()}),i.off()};Be.prototype.onDestroyed=function(i,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};new Be;var Jr=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++i%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var f=0;f<t.children.length;f++)t.children[f].style.display=f===u?"block":"none";i=u}var s=(performance||Date).now(),r=s,o=0,a=e(new Jr.Panel("FPS","#0ff","#002")),l=e(new Jr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Jr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-s,200),u>=r+1e3&&(a.update(o*1e3/(u-r),100),r=u,o=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:t,setMode:n}};Jr.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,f=3*o,h=15*o,d=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var p=_.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,l),p.fillStyle=t,p.fillText(i,c,u),p.fillRect(f,h,d,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(f,h,d,g),{dom:_,update:function(m,y){n=Math.min(n,m),s=Math.max(s,m),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,h),p.fillStyle=t,p.fillText(r(m)+" "+i+" ("+r(n)+"-"+r(s)+")",c,u),p.drawImage(_,f+o,h,d-o,g,f,h,d-o,g),p.fillRect(f+d-o,h,o,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(f+d-o,h,o,r((1-m/y)*g))}}};function Np(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new oe;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=xd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const g=xd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function xd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ot(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}/**
 * @description Loop Subdivision Surface
 * @about       Smooth subdivision surface modifier for use with three.js BufferGeometry.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2022 Stephens Nunnally
 * @source      https://github.com/stevinz/three-subdivide
 */const uS=2,Ln=new b,Me=new b,Ne=new b,gc=new b,Oa=new b,ie=new b,se=new b,re=new b,Bs=new b,Os=new b,zs=new b,ca=[new b,new b,new b],Se=[new b,new b,new b],hS=new Ee;class ni{static modify(t,e=1,n={}){if(arguments.length>3&&console.warn("LoopSubdivision.modify() now uses a parameter object. See readme for more info!"),typeof n!="object"&&(n={}),n.split===void 0&&(n.split=!0),n.uvSmooth===void 0&&(n.uvSmooth=!1),n.preserveEdges===void 0&&(n.preserveEdges=!1),n.flatOnly===void 0&&(n.flatOnly=!1),n.maxTriangles===void 0&&(n.maxTriangles=1/0),n.weight===void 0&&(n.weight=1),(isNaN(n.weight)||!isFinite(n.weight))&&(n.weight=1),n.weight=Math.max(0,Math.min(1,n.weight)),!ua(t))return t;let s=t.clone();if(n.split){const r=ni.edgeSplit(s);s.dispose(),s=r}for(let r=0;r<e;r++)if(s.attributes.position.count/3<n.maxTriangles){let a;n.flatOnly?a=ni.flat(s,n):a=ni.smooth(s,n),s.groups.forEach(l=>{a.addGroup(l.start*4,l.count*4,l.materialIndex)}),s.dispose(),s=a}return s}static edgeSplit(t){if(!ua(t))return t;const e=t.index!==null?t.toNonIndexed():t.clone(),n=new oe,s=xc(e),r=e.attributes.position.count,o=e.getAttribute("position"),a=e.getAttribute("normal"),l={},c=[],u={},f=[];for(let g=0;g<r;g+=3){ie.fromBufferAttribute(o,g+0),se.fromBufferAttribute(o,g+1),re.fromBufferAttribute(o,g+2),gc.fromBufferAttribute(a,g);const _=dn(ie),p=dn(se),m=dn(re),y=hS.set(ie,se,re).getArea();if(f.push(!fS(y,0)),!f[g/3]){c.push([]);continue}mS(gc,ie,se,re);const x=dn(gc),M=[`${_}_${p}_${x}`,`${p}_${_}_${x}`,`${p}_${m}_${x}`,`${m}_${p}_${x}`,`${m}_${_}_${x}`,`${_}_${m}_${x}`],A=g/3;for(let w=0;w<M.length;w++)l[M[w]]||(l[M[w]]=[]),l[M[w]].push(A),u[M[w]]||((w===0||w===1)&&(u[M[w]]=ie.distanceTo(se)),(w===2||w===3)&&(u[M[w]]=se.distanceTo(re)),(w===4||w===5)&&(u[M[w]]=re.distanceTo(ie)));c.push([M[0],M[2],M[4]])}s.forEach(g=>{const _=e.getAttribute(g);if(!_)return;const p=d(_,g);n.setAttribute(g,new Ot(p,_.itemSize))});const h=e.morphAttributes;for(const g in h){const _=[],p=h[g];for(let m=0,y=p.length;m<y;m++){if(p[m].count!==r)continue;const x=d(p[m],g,!0);_.push(new Ot(x,p[m].itemSize))}n.morphAttributes[g]=_}return n.morphTargetsRelative=e.morphTargetsRelative,e.dispose(),n;function d(g,_,p=!1){const y=r*g.itemSize*4,x=new g.array.constructor(y),M=_==="position"&&!p&&e.groups.length>0;let A,w,S=0,C=0,I=g.itemSize;for(let L=0;L<r;L+=3){if(!f[L/3]){C+=3;continue}ie.fromBufferAttribute(g,L+0),se.fromBufferAttribute(g,L+1),re.fromBufferAttribute(g,L+2);const D=L/3,N=c[D][0],k=c[D][1],z=c[D][2],q=l[N].length,G=l[k].length,Q=l[z].length,it=q+G+Q-3,ot=S*3/I/3;if(it===0)fe(x,S,I,ie,se,re),S+=I*3;else{const Ft=u[N],Xt=u[k],Y=u[z];(Ft>Xt||G<=1)&&(Ft>Y||Q<=1)&&q>1?(Me.copy(ie).add(se).divideScalar(2),Q>1?(Ne.copy(re).add(ie).divideScalar(2),fe(x,S,I,ie,Me,Ne),S+=I*3,fe(x,S,I,Me,re,Ne),S+=I*3):(fe(x,S,I,ie,Me,re),S+=I*3),G>1?(Ne.copy(se).add(re).divideScalar(2),fe(x,S,I,Me,se,Ne),S+=I*3,fe(x,S,I,Ne,re,Me),S+=I*3):(fe(x,S,I,se,re,Me),S+=I*3)):(Xt>Y||Q<=1)&&G>1?(Me.copy(se).add(re).divideScalar(2),q>1?(Ne.copy(ie).add(se).divideScalar(2),fe(x,S,I,Me,Ne,se),S+=I*3,fe(x,S,I,Ne,Me,ie),S+=I*3):(fe(x,S,I,se,Me,ie),S+=I*3),Q>1?(Ne.copy(re).add(ie).divideScalar(2),fe(x,S,I,Me,re,Ne),S+=I*3,fe(x,S,I,Ne,ie,Me),S+=I*3):(fe(x,S,I,re,ie,Me),S+=I*3)):Q>1?(Me.copy(re).add(ie).divideScalar(2),G>1?(Ne.copy(se).add(re).divideScalar(2),fe(x,S,I,re,Me,Ne),S+=I*3,fe(x,S,I,Me,se,Ne),S+=I*3):(fe(x,S,I,re,Me,se),S+=I*3),q>1?(Ne.copy(ie).add(se).divideScalar(2),fe(x,S,I,ie,Ne,Me),S+=I*3,fe(x,S,I,Ne,se,Me),S+=I*3):(fe(x,S,I,ie,se,Me),S+=I*3)):(fe(x,S,I,ie,se,re),S+=I*3)}M&&e.groups.forEach(Ft=>{Ft.start===L-C&&(A!==void 0&&w!==void 0&&n.addGroup(A,ot-A,w),A=ot,w=Ft.materialIndex)}),C=0}const v=S*3/I,E=new g.array.constructor(v);for(let L=0;L<v;L++)E[L]=x[L];return M&&A!==void 0&&w!==void 0&&n.addGroup(A,S*3/I/3-A,w),E}}static flat(t,e={}){if(!ua(t))return t;const n=t.index!==null?t.toNonIndexed():t.clone(),s=new oe,r=xc(n),o=n.attributes.position.count;r.forEach(l=>{const c=n.getAttribute(l);c&&s.setAttribute(l,ni.flatAttribute(c,o,e))});const a=n.morphAttributes;for(const l in a){const c=[],u=a[l];for(let f=0,h=u.length;f<h;f++)u[f].count===o&&c.push(ni.flatAttribute(u[f],o,e));s.morphAttributes[l]=c}return s.morphTargetsRelative=n.morphTargetsRelative,n.dispose(),s}static flatAttribute(t,e,n={}){const r=e*t.itemSize*4,o=new t.array.constructor(r);let a=0,l=t.itemSize;for(let c=0;c<e;c+=3)ie.fromBufferAttribute(t,c+0),se.fromBufferAttribute(t,c+1),re.fromBufferAttribute(t,c+2),Bs.copy(ie).add(se).divideScalar(2),Os.copy(se).add(re).divideScalar(2),zs.copy(re).add(ie).divideScalar(2),fe(o,a,l,ie,Bs,zs),a+=l*3,fe(o,a,l,se,Os,Bs),a+=l*3,fe(o,a,l,re,zs,Os),a+=l*3,fe(o,a,l,Bs,Os,zs),a+=l*3;return new Ot(o,t.itemSize)}static smooth(t,e={}){if(typeof e!="object"&&(e={}),e.uvSmooth===void 0&&(e.uvSmooth=!1),e.preserveEdges===void 0&&(e.preserveEdges=!1),!ua(t))return t;const n=t.index!==null?t.toNonIndexed():t.clone(),s=ni.flat(n,e),r=new oe,o=xc(n),a=n.attributes.position.count,l=n.getAttribute("position"),c=s.getAttribute("position"),u={},f={},h={},d={};function g(x,M,A){f[x]||(f[x]={}),f[x][M]||(f[x][M]=[]),f[x][M].push(A)}function _(x,M){h[x]||(h[x]=[]),h[x].push(M)}function p(x,M){d[x]||(d[x]=new Set),d[x].add(M)}for(let x=0;x<a;x+=3){const M=dn(Se[0].fromBufferAttribute(l,x+0)),A=dn(Se[1].fromBufferAttribute(l,x+1)),w=dn(Se[2].fromBufferAttribute(l,x+2));g(M,A,x+1),g(M,w,x+2),g(A,M,x+0),g(A,w,x+2),g(w,M,x+0),g(w,A,x+1),Bs.copy(Se[0]).add(Se[1]).divideScalar(2),Os.copy(Se[1]).add(Se[2]).divideScalar(2),zs.copy(Se[2]).add(Se[0]).divideScalar(2);const S=dn(Bs),C=dn(Os),I=dn(zs);_(S,x+2),_(C,x+0),_(I,x+1),p(M,S),p(M,I),p(A,S),p(A,C),p(w,C),p(w,I)}for(let x=0;x<s.attributes.position.count;x++){const M=dn(Oa.fromBufferAttribute(c,x));u[M]||(u[M]=[]),u[M].push(x)}o.forEach(x=>{const M=n.getAttribute(x),A=s.getAttribute(x);if(M===void 0||A===void 0)return;const w=y(x,M,A);r.setAttribute(x,new Ot(w,A.itemSize))});const m=n.morphAttributes;for(const x in m){const M=[],A=m[x];for(let w=0,S=A.length;w<S;w++){if(A[w].count!==a)continue;const C=A[w],I=ni.flatAttribute(A[w],A[w].count,e),v=y(x,C,I);M.push(new Ot(v,I.itemSize))}r.morphAttributes[x]=M}return r.morphTargetsRelative=n.morphTargetsRelative,s.dispose(),n.dispose(),r;function y(x,M,A){const w=s.attributes.position.count*A.itemSize,S=new M.array.constructor(w);let C=0;for(let I=0;I<s.attributes.position.count;I+=3){for(let v=0;v<3;v++)if(x==="uv"&&!e.uvSmooth)Se[v].fromBufferAttribute(A,I+v);else if(x==="normal"){ca[v].fromBufferAttribute(c,I+v);const E=dn(ca[v]),L=u[E],D=Object.keys(L).length,N=.75/D,k=1-N*D;Se[v].fromBufferAttribute(A,I+v),Se[v].multiplyScalar(k),L.forEach(z=>{Ln.fromBufferAttribute(A,z),Ln.multiplyScalar(N),Se[v].add(Ln)})}else{Se[v].fromBufferAttribute(A,I+v),ca[v].fromBufferAttribute(c,I+v);const E=dn(ca[v]),L=f[E],D=h[E];if(L){if(e.preserveEdges){const Q=d[E];let it=!0;for(const ot of Q)h[ot].length%2!==0&&(it=!1);if(!it)continue}const N=Object.keys(L).length,k=1/N*(5/8-Math.pow(3/8+1/4*Math.cos(2*Math.PI/N),2)),z=1/N/N,q=dS(z,k,e.weight),G=1-q*N;Se[v].multiplyScalar(G);for(let Q in L){const it=L[Q];Ln.set(0,0,0);for(let ot=0;ot<it.length;ot++)Ln.add(Oa.fromBufferAttribute(M,it[ot]));Ln.divideScalar(it.length),Ln.multiplyScalar(q),Se[v].add(Ln)}}else if(D&&D.length===2){const N=D.length,k=.125,z=1-k*N;Se[v].multiplyScalar(z),D.forEach(q=>{Ln.fromBufferAttribute(M,q),Ln.multiplyScalar(k),Se[v].add(Ln)})}}fe(S,C,A.itemSize,Se[0],Se[1],Se[2]),C+=A.itemSize*3}return S}}}const Fp=Math.pow(10,uS);function fS(i,t,e=1e-5){return i<t+e&&i>t-e}function _c(i,t=Fp){let e=pS(i*t);return e==0&&(e=0),`${e}`}function dn(i,t=Fp){return`${_c(i.x,t)},${_c(i.y,t)},${_c(i.z,t)}`}function dS(i,t,e){return(1-e)*i+e*t}function pS(i){return i+(i>0?.5:-.5)<<0}function mS(i,t,e,n){Oa.subVectors(t,e),i.subVectors(e,n),i.cross(Oa).normalize()}function xc(i){const t=["position","normal","uv"],e=Object.keys(i.attributes);return Array.from(new Set(t.concat(e)))}function fe(i,t,e,n,s,r){e>=1&&(i[t+0+e*0]=n.x,i[t+0+e*1]=s.x,i[t+0+e*2]=r.x),e>=2&&(i[t+1+e*0]=n.y,i[t+1+e*1]=s.y,i[t+1+e*2]=r.y),e>=3&&(i[t+2+e*0]=n.z,i[t+2+e*1]=s.z,i[t+2+e*2]=r.z),e>=4&&(i[t+3+e*0]=n.w,i[t+3+e*1]=s.w,i[t+3+e*2]=r.w)}function ua(i){return i===void 0?(console.warn("LoopSubdivision: Geometry provided is undefined"),!1):i.isBufferGeometry?i.attributes.position===void 0?(console.warn("LoopSubdivision: Geometry provided missing required 'position' attribute"),!1):(i.attributes.normal===void 0&&i.computeVertexNormals(),!0):(console.warn("LoopSubdivision: Geometry provided is not 'BufferGeometry' type"),!1)}const gS=[1,1,1,1,1,-1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,-1,2,0,0,0,2,0,0,0,2,-2,0,0,0,-2,0,0,0,-2],Du=[[0,8,1,0,1,9],[2,8,0,2,0,10],[3,8,2,3,2,12],[1,8,3,1,3,13],[6,11,7,6,7,12],[4,11,6,4,6,10],[5,11,4,5,4,9],[7,11,5,7,5,13],[4,10,0,4,0,9],[5,9,1,5,1,13],[6,12,2,6,2,10],[7,13,3,7,3,12]];Du.flat();class _S{constructor(t){this.cave=t;const e=new Map;this.nodes=t.surfaceGrid.map((n,s)=>{const r=new xS(this,n);return e.set(n,r),n.pfNode=r,r}),this.nodes.forEach(n=>{n.cell.neighbours.forEach(s=>{if(e.has(s)){const r=e.get(s),o=new vS(n,r);n.edges.push(o),r.inboundEdges.push(o)}else throw"unable to build Pathfinder, unknown edge"})})}pathfind(t,e){const n=t,s=e,r=new yS,o=[];for(n.parent=null,r.add(n);r.size;){const a=r.extract();if(a===s){let l=a;const c=[l];for(;l.parent;)c.push(l.parent),l=l.parent;return c.reverse()}o.push(a),a.edges.forEach(l=>{if(!o.includes(l.B)){const c=a.g+l.size;r.includes(l.B)?c<l.B.g&&(l.B.g=c,l.B.parent=a):(r.add(l.B),l.B.g=c,l.B.parent=a)}})}return console.error("pathfinding failed:",t,"->",e),console.log(o.map(({idx:a})=>a)),[]}getClosestNode(t){let e=null,n=1/0;for(let s=0;s<this.nodes.length;s++){const r=this.nodes[s],o=t.distanceToSquared(r.position);o<n&&(e=r,n=o)}return e}}class xS{constructor(t,e){Re(this,"g",0);Re(this,"h",0);Re(this,"parent",null);Re(this,"edges",[]);Re(this,"inboundEdges",[]);this.finder=t,this.cell=e,this.position=e.centre,this.normal=e.normal}get f(){return this.g+this.h}addInboundMultiplier(t){this.inboundEdges.forEach(e=>e.addMultiplier(t))}}var so,ro;class vS{constructor(t,e){Dt(this,so);Dt(this,ro,1);this.A=t,this.B=e,te(this,so,t.position.distanceTo(e.position))}addMultiplier(t){te(this,ro,j(this,ro)+t)}get size(){return j(this,so)*j(this,ro)}}so=new WeakMap,ro=new WeakMap;class yS{constructor(){this.values=[]}get size(){return this.values.length}includes(t){return this.values.includes(t)}add(t){this.values.push(t);let e=this.values.length-1;const n=this.values[e];for(;e>0;){const s=Math.floor((e-1)/2),r=this.values[s];if(r.f<=n.f)this.values[s]=n,this.values[e]=r,e=s;else break}}extract(){const t=this.values[0],e=this.values.pop(),n=this.values.length;if(n){this.values[0]=e;let s=0;const r=this.values[0];for(;;){const o=2*s+1,a=2*s+2;let l,c,u=null;if(o<n&&(l=this.values[o],l.f<r.f&&(u=o)),a<n&&(c=this.values[a],(u===null&&c.f<r.f||u!==null&&c.f<l.f)&&(u=a)),u===null)break;this.values[s]=this.values[u],this.values[u]=r,s=u}}return t}}const $e=new b,zn=new b,vd=new b,MS=3,Ke=3,Vs=1.5;var oo,fr,Bp,Op;class SS{constructor(t){Dt(this,fr);Dt(this,oo,null);this.gridcell=t,this.gridcell.setContents(this),this.findTarget(),this.getGeometry()}get position(){return this.gridcell.centre}get normal(){return this.gridcell.normal}findTarget(){const t=this.gridcell.neighbours.flatMap(e=>e.neighbours.map(n=>!n.contents.length&&!this.gridcell.neighbours.includes(n)?n:null).filter(n=>!!n));this.target=t[Math.floor(Math.random()*t.length)],this.target.setContents(this)}getGeometry(){const{centre:t,normal:e}=this.target;this.curve=new Iy(this.position.clone().add(vd.randomDirection().projectOnPlane(e)),this.normal.clone().multiplyScalar(20).add(this.position),new b().copy(e).multiplyScalar(20).add(t),new b().copy(t).add(vd.randomDirection().projectOnPlane(e)));const n=this.curve.getLength();this.segmentCount=Math.floor(n/MS);const[s,r,o,a]=Bt(this,fr,Bp).call(this),l=[...s],c=[...r],u=[...o],f=[...a],h=new oe;h.setIndex(c),h.setAttribute("position",new me(l,3)),h.setAttribute("uv",new me(u,2)),h.setAttribute("color",new me(f,1)),h.toNonIndexed(),h.computeVertexNormals(),te(this,oo,ur.merge([{t:{value:0,type:"f"}}]));const d=new oh({color:3403264,flatShading:!0});this.mesh=new ce(h,d)}get hiliteColors(){return[3403264,1475072]}tick(t){j(this,oo).t.value+=t}}oo=new WeakMap,fr=new WeakSet,Bp=function(){const t=[],e=[],n=[],s=[],r=this.curve.computeFrenetFrames(this.segmentCount);for(let o=0;o<=this.segmentCount;o++){const a=this.curve.getPointAt(o/this.segmentCount),l=r.tangents[o],c=r.normals[o],u=r.binormals[o];for(let g=0;g<=Ke;g++){const[_,p]=Bt(this,fr,Op).call(this,g,a,c,u);t.push(_.x,_.y,_.z),s.push(1127168)}const f=o%Ke/Ke*Math.PI*2,h=Math.sin(f),d=-Math.cos(f);$e.x=d*c.x+h*u.x,$e.y=d*c.y+h*u.y,$e.z=d*c.z+h*u.z,$e.normalize(),zn.x=a.x+l.x*2+3*Vs*$e.x,zn.y=a.y+l.y*2+3*Vs*$e.y,zn.z=a.z+l.z*2+3*Vs*$e.z,t.push(zn.x,zn.y,zn.z),s.push(255,0,51)}for(let o=0;o<this.segmentCount;o++){for(let f=0;f<Ke;f++){const h=(Ke+2)*o+f,d=(Ke+2)*(o+1)+f,g=(Ke+2)*(o+1)+(f+1),_=(Ke+2)*o+(f+1);e.push(h,d,_),e.push(d,g,_),n.push(o/this.segmentCount,f/(Ke*2))}const a=(Ke+2)*o,l=(Ke+2)*o+1,c=(Ke+2)*o+2,u=(Ke+2)*o+4;switch(o%Ke){case 0:e.push(a,l,u),e.push(l,a,u),e.push(a,c,u),e.push(c,a,u);break;case 1:e.push(c,l,u),e.push(l,c,u),e.push(a,l,u),e.push(l,a,u);break;case 2:e.push(c,l,u),e.push(l,c,u),e.push(a,c,u),e.push(c,a,u);break}}return[t,e,n,s]},Op=function(t,e,n,s){const r=t/Ke*Math.PI*2,o=Math.sin(r),a=-Math.cos(r);return $e.x=a*n.x+o*s.x,$e.y=a*n.y+o*s.y,$e.z=a*n.z+o*s.z,$e.normalize(),zn.x=e.x+Vs*$e.x,zn.y=e.y+Vs*$e.y,zn.z=e.z+Vs*$e.z,[zn,$e]};const vc=new b,yc=new b,Mc=new b,Sc=new b,bc=new Ee;new b;new b;function bS(i){const t=new Map,e=[];i.chunks.forEach(n=>{const s=n.mesh.geometry.attributes.position.count;for(let r=0;r<s;r+=3){const o=new ES(n,t,r/3);e.push(o),n.surfaceGrid.push(o)}});for(let[n,s]of t)s.forEach(r=>{r.setNeighbours(s)});return e}var Js,wa;class ES{constructor(t,e,n){Dt(this,Js);Re(this,"centre",new b);Re(this,"normal",new b);Re(this,"neighbours",[]);Re(this,"directNeighbours",[]);Re(this,"pfNode");Re(this,"contents",[]);this.chunk=t,this.idx=n,yc.copy(this.a),Mc.copy(this.b),Sc.copy(this.c),bc.set(yc,Mc,Sc),bc.getMidpoint(this.centre),bc.getNormal(this.normal),this.normal.negate(),Bt(this,Js,wa).call(this,e,yc),Bt(this,Js,wa).call(this,e,Mc),Bt(this,Js,wa).call(this,e,Sc)}setNeighbours(t){t.forEach(e=>{e!=this&&(this.neighbours.includes(e)?this.directNeighbours.push(e):this.neighbours.push(e))})}setContents(t){this.contents.push(t),this.pfNode.addInboundMultiplier(100)}get hiliteColors(){var t,e;return(t=this.contents[0])!=null&&t.hiliteColors?(e=this.contents[0])==null?void 0:e.hiliteColors:[8947848,11184810]}get a(){return vc.fromBufferAttribute(this.chunk.geometry.attributes.position,this.idx*3)}get b(){return vc.fromBufferAttribute(this.chunk.geometry.attributes.position,this.idx*3+1)}get c(){return vc.fromBufferAttribute(this.chunk.geometry.attributes.position,this.idx*3+2)}}Js=new WeakSet,wa=function(t,e){let n=!1;for(let[s]of t)if(s.equals(e)){t.set(s,[...t.get(s),this]),n=!0;break}n||t.set(e.clone(),[this])};const yd=new b,Md=new fs,Uu=25,wS=[[1,1,0],[1,0,1],[1,-1,0],[1,0,-1],[-1,-1,0],[-1,0,1],[-1,1,0],[-1,0,-1],[0,1,1],[0,1,-1],[0,-1,1],[0,-1,-1]],TS=[8,9,10,11],AS=new fo().load("/img/noise1.png"),RS=new fo().load("/img/noise2.png"),CS=new ah({map:AS,bumpMap:RS,bumpScale:1,side:qe});class PS{constructor(t){Re(this,"scale",Uu);const[e,n]=LS(t);this.centre=n,this.chunks=DS(e,this.centre),this.chunks.forEach(s=>s.setCave(this)),this.geometry=US(this.chunks),this.mesh=new Xr,this.chunks.forEach(s=>this.mesh.add(s.mesh)),this.surfaceGrid=bS(this),this.pathfinder=new _S(this)}findPathArbitrary(t,e){return this.pathfinder.pathfind(this.pathfinder.getClosestNode(t),this.pathfinder.getClosestNode(e))}findPathCellToCell(t,e){return this.pathfinder.pathfind(t.pfNode,e.pfNode)}}var Qs;class IS{constructor(t){Re(this,"filled",!0);Re(this,"surfaceGrid",[]);Dt(this,Qs,[]);this.position=t}setCave(t){this.cave=t,this.worldposition=this.position.clone().multiplyScalar(t.scale),this.paths=new Map}findNeighbours(t){this.neighbours=[];const e=wS.map(n=>yd.set(...n).multiplyScalar(2).add(this.position).clone());t.forEach(n=>{const s=e.findIndex(r=>r.equals(n.position));s>=0&&(this.neighbours[s]=n)})}generateGeometry(){const t=gS.slice(),e=Du.slice(),n=new Set;this.openFaces.forEach(a=>{a.forEach(l=>n.add(l)),e[e.indexOf(a)]=null});for(let a=0,l=14;a<l;a++)if(!n.has(a)){const c=a*3;t[c]=t[c]*Ec,t[c+1]=t[c+1]*Ec,t[c+2]=t[c+2]*Ec}const s=new oe;s.setAttribute("position",new Ot(new Float32Array(t),3)),s.setIndex(e.filter(Boolean).flat());const r=[];e.forEach(a=>{r.push(0,1,0,0,1,0,0,1,1,0,1,1)});const o=s.toNonIndexed();return o.setAttribute("uv",new Ot(new Float32Array(r),2)),o.translate(...this.position.toArray()),o.scale(this.cave.scale,this.cave.scale,this.cave.scale),this.geometry=NS(o),this.generateMesh(),this.geometry}generateMesh(){this.mesh=new ce(this.geometry,CS),this.mesh._cavecell=this}set openings(t){te(this,Qs,[...t])}get openings(){return j(this,Qs).map(t=>this.neighbours[t])}get openFaces(){return j(this,Qs).map(t=>Du[t])}getRandomPointOnMesh(){let t,e=this.cave.scale;do{Md.set(this.worldposition,yd.randomDirection());const n=Md.intersectObject(this.mesh);n.length&&n[0].distance<e&&(t=n[0]),e*=1.1}while(!t);return t}getRandomGridCell(){const t=Math.floor(Math.random()*this.surfaceGrid.length);return this.surfaceGrid[t]}}Qs=new WeakMap;function LS(i){const t=[],e=new b(2,0,2),n=new b(2,2,0),s=new b(-2,0,2);let r;const o=Math.round((i-1)/2);for(let a=0;a<i;a++)for(let l=0;l<i;l++)for(let c=0;c<i;c++){const u=new IS(new b().add(e.clone().multiplyScalar(a)).add(n.clone().multiplyScalar(l)).add(s.clone().multiplyScalar(c)));t.push(u),a===o&&l===o&&c===o&&(r=u)}return t.forEach(a=>a.findNeighbours(t)),[t,r]}function DS(i,t){let e=t;const n=[];function s(a){a.filled=!1,n.indexOf(a)<0&&n.push(a);const l=a.neighbours.filter(c=>c.filled&&c.neighbours.every(u=>u===a||u.filled));return l.length?l[Math.floor(Math.random()*l.length)]:(n.splice(n.indexOf(a),1),n.length?n[Math.floor(n.length*Math.random()*Math.random())]:null)}for(TS.map(a=>t.neighbours[a]).forEach(a=>{s(a)});e;)e=s(e);const o=i.filter(({filled:a})=>!a);return o.forEach((a,l)=>{a.idx=l;const c=[];a.neighbours.forEach((u,f)=>{u&&!u.filled?c.push(f):a.neighbours[f]=null}),a.openings=c}),o}const Ec=2/3;function US(i){const t=[];return i.forEach(e=>{t.push(e.generateGeometry())}),Np(t)}function NS(i){const t=ni.modify(i,1,{split:!1,preserveEdges:!0});return t.computeVertexNormals(),t.computeBoundsTree(),t}new b;new b;new b;new Ee;new b;new b;var ds={};function nn(i,t,e){this.x=i,this.y=t,this.z=e}nn.prototype.dot2=function(i,t){return this.x*i+this.y*t};nn.prototype.dot3=function(i,t,e){return this.x*i+this.y*t+this.z*e};var FS=[new nn(1,1,0),new nn(-1,1,0),new nn(1,-1,0),new nn(-1,-1,0),new nn(1,0,1),new nn(-1,0,1),new nn(1,0,-1),new nn(-1,0,-1),new nn(0,1,1),new nn(0,-1,1),new nn(0,1,-1),new nn(0,-1,-1)],Sd=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],Wt=new Array(512),be=new Array(512);ds.seed=function(i){i>0&&i<1&&(i*=65536),i=Math.floor(i),i<256&&(i|=i<<8);for(var t=0;t<256;t++){var e;t&1?e=Sd[t]^i&255:e=Sd[t]^i>>8&255,Wt[t]=Wt[t+256]=e,be[t]=be[t+256]=FS[e%12]}};ds.seed(0);var BS=.5*(Math.sqrt(3)-1),zr=(3-Math.sqrt(3))/6,OS=1/3,Vn=1/6;ds.simplex2=function(i,t){var e,n,s,r=(i+t)*BS,o=Math.floor(i+r),a=Math.floor(t+r),l=(o+a)*zr,c=i-o+l,u=t-a+l,f,h;c>u?(f=1,h=0):(f=0,h=1);var d=c-f+zr,g=u-h+zr,_=c-1+2*zr,p=u-1+2*zr;o&=255,a&=255;var m=be[o+Wt[a]],y=be[o+f+Wt[a+h]],x=be[o+1+Wt[a+1]],M=.5-c*c-u*u;M<0?e=0:(M*=M,e=M*M*m.dot2(c,u));var A=.5-d*d-g*g;A<0?n=0:(A*=A,n=A*A*y.dot2(d,g));var w=.5-_*_-p*p;return w<0?s=0:(w*=w,s=w*w*x.dot2(_,p)),70*(e+n+s)};ds.simplex3=function(i,t,e){var n,s,r,o,a=(i+t+e)*OS,l=Math.floor(i+a),c=Math.floor(t+a),u=Math.floor(e+a),f=(l+c+u)*Vn,h=i-l+f,d=t-c+f,g=e-u+f,_,p,m,y,x,M;h>=d?d>=g?(_=1,p=0,m=0,y=1,x=1,M=0):h>=g?(_=1,p=0,m=0,y=1,x=0,M=1):(_=0,p=0,m=1,y=1,x=0,M=1):d<g?(_=0,p=0,m=1,y=0,x=1,M=1):h<g?(_=0,p=1,m=0,y=0,x=1,M=1):(_=0,p=1,m=0,y=1,x=1,M=0);var A=h-_+Vn,w=d-p+Vn,S=g-m+Vn,C=h-y+2*Vn,I=d-x+2*Vn,v=g-M+2*Vn,E=h-1+3*Vn,L=d-1+3*Vn,D=g-1+3*Vn;l&=255,c&=255,u&=255;var N=be[l+Wt[c+Wt[u]]],k=be[l+_+Wt[c+p+Wt[u+m]]],z=be[l+y+Wt[c+x+Wt[u+M]]],q=be[l+1+Wt[c+1+Wt[u+1]]],G=.6-h*h-d*d-g*g;G<0?n=0:(G*=G,n=G*G*N.dot3(h,d,g));var Q=.6-A*A-w*w-S*S;Q<0?s=0:(Q*=Q,s=Q*Q*k.dot3(A,w,S));var it=.6-C*C-I*I-v*v;it<0?r=0:(it*=it,r=it*it*z.dot3(C,I,v));var ot=.6-E*E-L*L-D*D;return ot<0?o=0:(ot*=ot,o=ot*ot*q.dot3(E,L,D)),32*(n+s+r+o)};function Qr(i){return i*i*i*(i*(i*6-15)+10)}function Gn(i,t,e){return(1-e)*i+e*t}ds.perlin2=function(i,t){var e=Math.floor(i),n=Math.floor(t);i=i-e,t=t-n,e=e&255,n=n&255;var s=be[e+Wt[n]].dot2(i,t),r=be[e+Wt[n+1]].dot2(i,t-1),o=be[e+1+Wt[n]].dot2(i-1,t),a=be[e+1+Wt[n+1]].dot2(i-1,t-1),l=Qr(i);return Gn(Gn(s,o,l),Gn(r,a,l),Qr(t))};ds.perlin3=function(i,t,e){var n=Math.floor(i),s=Math.floor(t),r=Math.floor(e);i=i-n,t=t-s,e=e-r,n=n&255,s=s&255,r=r&255;var o=be[n+Wt[s+Wt[r]]].dot3(i,t,e),a=be[n+Wt[s+Wt[r+1]]].dot3(i,t,e-1),l=be[n+Wt[s+1+Wt[r]]].dot3(i,t-1,e),c=be[n+Wt[s+1+Wt[r+1]]].dot3(i,t-1,e-1),u=be[n+1+Wt[s+Wt[r]]].dot3(i-1,t,e),f=be[n+1+Wt[s+Wt[r+1]]].dot3(i-1,t,e-1),h=be[n+1+Wt[s+1+Wt[r]]].dot3(i-1,t-1,e),d=be[n+1+Wt[s+1+Wt[r+1]]].dot3(i-1,t-1,e-1),g=Qr(i),_=Qr(t),p=Qr(e);return Gn(Gn(Gn(o,u,g),Gn(a,f,g),p),Gn(Gn(l,h,g),Gn(c,d,g),p),_)};const ks=1,zS=[new st(ks/15,0),new st(ks/16,ks*.75),new st(ks,ks*.725),new st(0,ks)],VS=new nl(zS,5),kS=new oh({color:8956569});new fs;const bd=new b,Ed=new b,wd=new b,Td=new b;function HS(i){const{position:t,normal:e}=i.geometry.attributes,n=[],s=[],r=[];for(let c=0;c<=t.count;c+=3){Ed.fromBufferAttribute(t,c),wd.fromBufferAttribute(t,c+1),Td.fromBufferAttribute(t,c+2);const u=new Ee(Ed,wd,Td);if(u.getMidpoint(bd),ds.simplex3(...bd.toArray())>0){const[h,d,g]=WS(u);n.push(...h),s.push(...d),r.push(...g)}}const o=new Ep(VS,kS,n.length),a=new pe,l=new St;for(let c=0;c<n.length;c++)a.position.set(0,0,0),a.lookAt(s[c]),a.rotateX(Math.PI/2),a.rotateY(Math.PI*Math.random()*2),a.scale.set(r[c],r[c],r[c]),a.position.copy(n[c]),l.compose(a.position,a.quaternion,a.scale),o.setMatrixAt(c,l);return o}const GS=new b,wc=new b;function WS(i,t){i.getMidpoint(GS),i.getNormal(wc),wc.negate();const e=[],n=[],s=[];let r=1+Math.random()*4;do e.push(XS(i)),n.push(wc.clone()),s.push(1+(Math.random()-.5)/3),r--;while(r>0);return[e,n,s]}function XS(i){const t=.1+Math.random()*.8,e=Math.sqrt(.1+Math.random()*.8),n=1-e,s=e*(1-t),r=t*e;return i.a.clone().multiplyScalar(n).add(i.b.clone().multiplyScalar(s)).add(i.c.clone().multiplyScalar(r))}new b;new Tt;const Ad=new ge,Rd=new b,Vr=new b,Cd=new b,kr=new b,Tc=new b,ha=new ge,qS=new b,Ac=new b,Nu=new b,Ji=new St;class YS{constructor(t,e=[]){this.mesh=t,this.iks=e,this._valid()}update(){const t=this.iks;for(let e=0,n=t.length;e<n;e++)this.updateOne(t[e]);return this}updateOne(t){const e=this.mesh.skeleton.bones,n=Math,s=e[t.effector],r=e[t.target];Rd.setFromMatrixPosition(r.matrixWorld);const o=t.links,a=t.iteration!==void 0?t.iteration:1;for(let l=0;l<a;l++){let c=!1;for(let u=0,f=o.length;u<f;u++){const h=e[o[u].index];if(o[u].enabled===!1)break;const d=o[u].limitation,g=o[u].rotationMin,_=o[u].rotationMax;h.matrixWorld.decompose(Tc,ha,qS),ha.invert(),Cd.setFromMatrixPosition(s.matrixWorld),kr.subVectors(Cd,Tc),kr.applyQuaternion(ha),kr.normalize(),Vr.subVectors(Rd,Tc),Vr.applyQuaternion(ha),Vr.normalize();let p=Vr.dot(kr);if(p>1?p=1:p<-1&&(p=-1),p=n.acos(p),!(p<1e-5)){if(t.minAngle!==void 0&&p<t.minAngle&&(p=t.minAngle),t.maxAngle!==void 0&&p>t.maxAngle&&(p=t.maxAngle),Ac.crossVectors(kr,Vr),Ac.normalize(),Ad.setFromAxisAngle(Ac,p),h.quaternion.multiply(Ad),d!==void 0){let m=h.quaternion.w;m>1&&(m=1);const y=n.sqrt(1-m*m);h.quaternion.set(d.x*y,d.y*y,d.z*y,m)}g!==void 0&&h.rotation.setFromVector3(Nu.setFromEuler(h.rotation).max(g)),_!==void 0&&h.rotation.setFromVector3(Nu.setFromEuler(h.rotation).min(_)),h.updateMatrixWorld(!0),c=!0}}if(!c)break}return this}createHelper(t){return new $S(this.mesh,this.iks,t)}_valid(){const t=this.iks,e=this.mesh.skeleton.bones;for(let n=0,s=t.length;n<s;n++){const r=t[n],o=e[r.effector],a=r.links;let l,c;l=o;for(let u=0,f=a.length;u<f;u++)c=e[a[u].index],l.parent!==c&&console.warn("THREE.CCDIKSolver: bone "+l.name+" is not the child of bone "+c.name),l=c}}}function Ta(i,t){return Nu.setFromMatrixPosition(i.matrixWorld).applyMatrix4(t)}function Rc(i,t,e,n){const s=Ta(e,n);i[t*3+0]=s.x,i[t*3+1]=s.y,i[t*3+2]=s.z}class $S extends pe{constructor(t,e=[],n=.25){super(),this.root=t,this.iks=e,this.matrix.copy(t.matrixWorld),this.matrixAutoUpdate=!1,this.sphereGeometry=new rh(n,16,8),this.targetSphereMaterial=new Ni({color:new Tt(16746632),depthTest:!1,depthWrite:!1,transparent:!0}),this.effectorSphereMaterial=new Ni({color:new Tt(8978312),depthTest:!1,depthWrite:!1,transparent:!0}),this.linkSphereMaterial=new Ni({color:new Tt(8947967),depthTest:!1,depthWrite:!1,transparent:!0}),this.lineMaterial=new el({color:new Tt(16711680),depthTest:!1,depthWrite:!1,transparent:!0}),this._init()}updateMatrixWorld(t){const e=this.root;if(this.visible){let n=0;const s=this.iks,r=e.skeleton.bones;Ji.copy(e.matrixWorld).invert();for(let o=0,a=s.length;o<a;o++){const l=s[o],c=r[l.target],u=r[l.effector],f=this.children[n++],h=this.children[n++];f.position.copy(Ta(c,Ji)),h.position.copy(Ta(u,Ji));for(let _=0,p=l.links.length;_<p;_++){const m=l.links[_],y=r[m.index];this.children[n++].position.copy(Ta(y,Ji))}const d=this.children[n++],g=d.geometry.attributes.position.array;Rc(g,0,c,Ji),Rc(g,1,u,Ji);for(let _=0,p=l.links.length;_<p;_++){const m=l.links[_],y=r[m.index];Rc(g,_+2,y,Ji)}d.geometry.attributes.position.needsUpdate=!0}}this.matrix.copy(e.matrixWorld),super.updateMatrixWorld(t)}dispose(){this.sphereGeometry.dispose(),this.targetSphereMaterial.dispose(),this.effectorSphereMaterial.dispose(),this.linkSphereMaterial.dispose(),this.lineMaterial.dispose();const t=this.children;for(let e=0;e<t.length;e++){const n=t[e];n.isLine&&n.geometry.dispose()}}_init(){const t=this,e=this.iks;function n(l){const c=new oe,u=new Float32Array((2+l.links.length)*3);return c.setAttribute("position",new Ot(u,3)),c}function s(){return new ce(t.sphereGeometry,t.targetSphereMaterial)}function r(){return new ce(t.sphereGeometry,t.effectorSphereMaterial)}function o(){return new ce(t.sphereGeometry,t.linkSphereMaterial)}function a(l){return new nh(n(l),t.lineMaterial)}for(let l=0,c=e.length;l<c;l++){const u=e[l];this.add(s()),this.add(r());for(let f=0,h=u.links.length;f<h;f++)this.add(o());this.add(a(u))}}}const Pd=new b(1,-1,1),Id=new b(0,2,0),KS=Math.acos(Pd.dot(Id)/(Pd.length()*Id.length())),zp=new ge().setFromAxisAngle(new b(0,1,0).normalize(),7*Math.PI/4).multiply(new ge().setFromAxisAngle(new b(-1,0,1).normalize(),Math.PI-KS)),jS=new b,ZS=[[0,0,0],[2,0,0],[0,2,0],[0,0,2],[1,1,1],[1,1,-1],[1,-1,1],[-1,1,1]].map(i=>jS.fromArray(i).applyQuaternion(zp).toArray()),JS=new Float32Array(ZS.flat()),QS=[1,5,4,2,4,5,6,1,4,6,4,3,7,3,4,7,4,2,5,1,0,6,0,1,2,5,0,2,0,7,6,3,0,7,0,3],Hs=[0,1,0,0,1,0,0,1,1,0,1,1],tb=[...Hs,...Hs,...Hs,...Hs,...Hs,...Hs];function eb(){const i=new oe,t=JS,e=QS,n=tb;i.setIndex(e),i.setAttribute("position",new Ot(t,3));const s=i.toNonIndexed();return s.computeVertexNormals(),s.setAttribute("uv",new Ot(new Float32Array(n),2)),s.computeBoundsTree(),s}const Mn=[0,1,0,0,1,0,0,1,1,0,1,1],ph=new Float32Array([...Mn,...Mn,...Mn,...Mn,...Mn,...Mn]),nb=Math.sqrt(3),po=eb();po.computeBoundingBox();const Vp=po.clone();Vp.setAttribute("uv",new Ot(new Float32Array([...Mn,...Mn,...Mn,...Mn,...Mn,...Mn]),2));const ib=new b,mh=[[2,0,0],[0,2,0],[0,0,2]].map(i=>ib.fromArray(i).applyQuaternion(zp).clone()),za=mh[0],Ld=new b(za.x,0,za.z),gh=Math.acos(Ld.dot(za)/(Ld.length()*za.length())),_h=new b(0,-1,0),xh=po.clone();xh.setAttribute("uv",new Ot(ph,2));xh.applyQuaternion(new ge().setFromAxisAngle(_h,Math.PI).multiply(new ge().setFromAxisAngle(new b(-1,0,1.73205080757).normalize(),Math.PI-2*gh)));const vh=po.clone();vh.setAttribute("uv",new Ot(ph,2));const sb=new b(1,0,0).normalize();vh.applyQuaternion(new ge().setFromAxisAngle(_h,Math.PI).multiply(new ge().setFromAxisAngle(sb,Math.PI-2*gh)));const yh=po.clone();yh.setAttribute("uv",new Ot(ph,2));const rb=new b(-1,0,-1.73205080757).normalize();yh.applyQuaternion(new ge().setFromAxisAngle(_h,Math.PI).multiply(new ge().setFromAxisAngle(rb,Math.PI-2*gh)));const mo=Np([Vp,xh,vh,yh]);mo.translate(0,nb,0);const Aa=Math.sqrt(3),Ai=6,Gs=1.25,hs=[new si,new si];hs[0].position.set(0,0,0);hs[1].position.set(0,Aa*3,0);hs[0].add(hs[1]);const kp=[];let Qi=2;mh.forEach(i=>{const t=new si,e=new si,n=new si,s=new si,r=new si,o=new si;t.position.set(i.x,i.y+Aa,i.z),e.position.set(0,0,0),n.position.set(i.x*Gs/2,Gs,i.z*Gs/2),s.position.set(-i.x*Gs/2,-Gs,-i.z*Gs/2),r.position.set(-i.x,-i.y-Aa,-i.z),o.position.set(0,-Aa,0),hs[0].add(t,o),t.add(e),e.add(n),n.add(s),s.add(r),hs.push(t,e,n,s,r,o);const a=new b(i.z,0,-i.x);a.normalize(),kp.push({target:Qi+5,effector:Qi+4,links:[{index:Qi+3,limitation:a.clone().negate(),rotationMin:new b(-Math.PI/3,-Math.PI/3,-Math.PI/3),rotationMax:new b(Math.PI/3,Math.PI/3,Math.PI/3)},{index:Qi+2,rotationMin:new b(-Math.PI/6,0,-Math.PI/6),rotationMax:new b(Math.PI/6,0,Math.PI/6)},{index:Qi+1,limitation:a.clone().negate(),rotationMin:new b(-Math.PI/6,0,-Math.PI/6),rotationMax:new b(Math.PI/3,0,Math.PI/3)},{index:Qi,limitation:new b(0,-1,0),rotationMin:new b(0,-Math.PI/8,0),rotationMax:new b(0,Math.PI/8,0)}],iteration:2}),Qi+=Ai});const Dd=new eh(hs),Ud=mo.attributes.position,ob=new b,Fu=[],Hp=[],ab=36;for(let i=0;i<Ud.count;i++){ob.fromBufferAttribute(Ud,i);const t=Math.floor(i/ab),e=t*Ai-1;t?Fu.push(e,e+1,0,0):Fu.push(0,1,0,0),Hp.push(.5,.5,0,0)}mo.setAttribute("skinIndex",new Ju(Fu,4));mo.setAttribute("skinWeight",new me(Hp,4));const Nd=2.5,lb=16716049,cb=2280448,ub=6711039,hb=1179647,fb=16720588,db=16768256,Fd=[lb,cb,ub,hb,fb,db],pb=Math.sqrt(3),Gp=Fd[Math.floor(Fd.length*Math.random())],Mh=new fo().load("/img/trider.png"),Sh=new fo().load("/img/trider.png"),bh=new fo().load("/img/trider-emissive.png");Mh.magFilter=we;Mh.minFilter=$a;Sh.magFilter=we;Sh.minFilter=$a;bh.magFilter=we;bh.minFilter=$a;const mb=new ah({map:Mh,bumpScale:.1,bumpMap:Sh,emissive:Gp,emissiveMap:bh}),Bd=mh.map(({x:i,z:t})=>new b(i*Nd,0,t*Nd)),Wp=[],Xs=pb*2;for(let i=0,t=12;i<t;i++)Wp.push(new b().setFromSphericalCoords(1,6*Math.PI/8,i*(2*Math.PI/t)),new b().setFromSphericalCoords(1,7*Math.PI/8,i*(2*Math.PI/t)));const Xp=new ky(Gp,1,20);Xp.position.add({x:0,y:Xs,z:0});const Ws=new fs,We=new b,Qn=new ge,Od=new ge;new ge().setFromUnitVectors(new b(0,1,0),new b(0,0,1));var ka,ao,Hu,Ci,Wn,Pi,Tn,qp,Yr,Bu;class gb{constructor(){Dt(this,Tn);Re(this,"up",null);Re(this,"forwards",null);Dt(this,ka,7);Dt(this,ao,[]);Dt(this,Hu,[]);Dt(this,Ci,[We.clone(),We.clone(),We.clone()]);Dt(this,Wn,[We.clone(),We.clone(),We.clone()]);Dt(this,Pi,[0,0,0]);this.mesh=new my(mo,mb),this.mesh.add(Dd.bones[0]),this.mesh.bind(Dd),this.mesh.add(Xp),te(this,ao,[this.mesh.skeleton.bones[1+Ai],this.mesh.skeleton.bones[1+Ai+Ai],this.mesh.skeleton.bones[1+Ai+Ai+Ai]]),this.ikSolver=new YS(this.mesh,kp)}get position(){return this.mesh.position}get quaternion(){return this.mesh.quaternion}init(t,e){this.up=new b().copy(e),Qn.setFromUnitVectors(new b(0,1,0),this.up),this.mesh.applyQuaternion(Qn),this.position.copy(t),te(this,Ci,j(this,Ci).map(n=>Bt(this,Tn,Yr).call(this,n))),te(this,Wn,Bd.map(n=>Bt(this,Tn,Yr).call(this,n)))}tick(t,e,n){var u;const s=t*j(this,ka),r=We.set(-n.vector.x,0,n.vector.y).applyQuaternion(this.quaternion).clone(),o=Math.min(n.force,1);if(r){const f=r.clone().multiplyScalar(s*o);let h=this.position.clone().add(f);this.position.copy(h)}this.mesh.skeleton.bones[1].position.setX(-n.vector.x*o*2.5),this.mesh.skeleton.bones[1].position.setZ(n.vector.y*o*2.5),this.mesh.skeleton.bones[1].rotation.set(n.vector.y*o*.7,0,n.vector.x*o*.7),Bt(this,Tn,qp).call(this,s,e,r,o);const a=new b().copy(this.up),l=We.copy(this.up).multiplyScalar(Xs).add(this.position).clone();if(Wp.forEach(f=>{Ws.set(l,We.copy(f).applyQuaternion(this.quaternion));const h=Ws.intersectObject(e);h[0]&&h[0].distance<Xs*2&&a.add(h[0].normal)}),a.normalize(),Qn.identity().slerp(Od.setFromUnitVectors(this.up,a),.1),n.force&&n.vector.x){const f=Math.atan(-n.vector.x,n.vector.y);Qn.slerp(Od.setFromAxisAngle(a,f),.05)}this.up.applyQuaternion(Qn),this.mesh.applyQuaternion(Qn),a.negate(),Ws.set(l,We.copy(this.up).negate());const c=Ws.intersectObject(e);c[0]&&(c[0].distance>Xs*1.0001||c[0].distance<Xs*.9999)&&(We.copy(this.up).multiplyScalar(Xs-c[0].distance),this.mesh.position.add(We)),(u=this.ikSolver)==null||u.update()}}ka=new WeakMap,ao=new WeakMap,Hu=new WeakMap,Ci=new WeakMap,Wn=new WeakMap,Pi=new WeakMap,Tn=new WeakSet,qp=function(t,e,n,s){const r=this.up,o=this.up.clone().negate();Qn.copy(this.mesh.quaternion).invert();let a=0,l=null;j(this,ao).forEach((c,u)=>{const f=Bd[u],h=j(this,Ci)[u];let d=Bt(this,Tn,Bu).call(this,h,Qn);const g=j(this,Wn)[u];if(g){j(this,Pi)[u]+=t;const _=Math.min(j(this,Pi)[u],1),p=Bt(this,Tn,Bu).call(this,g,Qn);d.lerp(p,_),d.add({x:0,y:Math.sin(_*Math.PI),z:0}),Ws.set(Bt(this,Tn,Yr).call(this,d).add(r),o);const m=Ws.intersectObject(e);m[0]&&m[0].distance<.99?(j(this,Pi)[u]=0,j(this,Ci)[u]=m[0].point,j(this,Wn)[u]=null):_>=1&&(j(this,Pi)[u]=0,j(this,Ci)[u].copy(j(this,Wn)[u]),j(this,Wn)[u]=null)}else{const _=d.distanceToSquared(f);if(_>.5&&!j(this,Wn).some(Boolean)&&_>a){const p=Bt(this,Tn,Yr).call(this,f);n&&s&&(We.copy(n).normalize().multiplyScalar(2),p.add(We)),a=_,l=()=>{j(this,Pi)[u]=0,j(this,Wn)[u]=p}}}c.position.copy(d)}),l&&l()},Yr=function(t){return We.copy(t).applyQuaternion(this.mesh.quaternion).add(this.position).clone()},Bu=function(t,e){return We.copy(t).sub(this.position).applyQuaternion(e).clone()};new b;new b;new b(0,1,0);new fs;new b;new b;new b;new Tt;new b(0,1,0);const kn=new b,Cc=new b,bi=new ge,zd=new ge,Vd=new fs,_b=new b(0,1,0),xb=new b(0,0,1);var Ha,Yp;class vb{constructor(){Dt(this,Ha);Re(this,"normal",null);Re(this,"speed",1);this.normal=new b}get position(){return this.mesh.position}get quaternion(){return this.mesh.quaternion}init(t,e,n){this.mesh||Bt(this,Ha,Yp).call(this),this.cave=t,this.position.copy(e),this.normal.copy(n),bi.setFromUnitVectors(_b,this.normal),this.mesh.applyQuaternion(bi)}tick(t){this.move(t)}move(t){if(this.path&&(this.moveTarget||(this.moveTarget=this.path.shift()),this.moveTarget)){if(kn.copy(this.moveTarget.position).sub(this.position).applyQuaternion(bi.copy(this.quaternion).invert()).setY(0),kn.lengthSq()<1){this.moveTarget=null;return}kn.applyQuaternion(this.quaternion).normalize(),bi.identity(),bi.slerp(zd.setFromUnitVectors(Cc.copy(xb).applyQuaternion(this.quaternion),kn),.05);const e=t*this.speed;kn.multiplyScalar(e),this.position.add(kn),kn.copy(this.position).add(this.normal),Cc.copy(this.normal).negate(),Vd.set(kn,Cc);const n=Vd.intersectObject(this.cave.mesh);if(n[0])bi.slerp(zd.setFromUnitVectors(this.normal,n[0].normal),.1),(n[0].distance>1.0001||n[0].distance<.9999)&&(kn.copy(this.normal).multiplyScalar(1-n[0].distance),this.position.add(kn));else throw new Error("no floor :/");this.normal.applyQuaternion(bi),this.mesh.applyQuaternion(bi)}}pathfind(){this.path=this.cave.pathfinder.pathfind(this.position,this.target.position)}}Ha=new WeakSet,Yp=function(){const t=new mr(3,3,3);t.translate(0,1.5,0),this.mesh=new ce(t,new oh({color:8978176})),this.mesh.up=this.normal;const e=new Jf(new b(0,0,1),new b(0,1.5,0),5);this.mesh.add(e);const n=new Jf(new b(0,1,0),new b(0,1.5,0),4,255);this.mesh.add(n)};const Pc=.1,yb=[new st(0,-11),new st(3,-9.5),new st(6,-6),new st(5,-6),new st(7,-1),new st(6,-1),new st(6.5,4),new st(5.5,4),new st(4.25,8),new st(3.5,8),new st(2.5,10),new st(0,11)],rl=new nl(yb,4,0,Math.PI);rl.rotateZ(Math.PI/2);rl.rotateY(-Math.PI/2);rl.scale(Pc,Pc,Pc);const Mb=new ah({color:13426039,flatShading:!0,emissive:1122816});var Ga,$p;class Sb extends vb{constructor(){super();Dt(this,Ga);Re(this,"speed",5)}init(e,n,s){Bt(this,Ga,$p).call(this),super.init(e,n,s)}}Ga=new WeakSet,$p=function(){this.mesh=new ce(rl,Mb)};const Kp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bb=new vp(-1,1,1,-1,0,1);class Eb extends oe{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const wb=new Eb;class ol{constructor(t){this._mesh=new ce(wb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,bb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tb extends xr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ur.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ol(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kd extends xr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ab extends xr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Rb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tb(Kp),this.copyPass.material.blending=ci,this.clock=new Gy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kd!==void 0&&(o instanceof kd?n=!0:o instanceof Ab&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cb extends xr{constructor(t,e,n,s={}){super(),this.pixelSize=t,this.resolution=new st,this.renderResolution=new st,this.pixelatedMaterial=this.createPixelatedMaterial(),this.normalMaterial=new Dy,this.fsQuad=new ol(this.pixelatedMaterial),this.scene=e,this.camera=n,this.normalEdgeStrength=s.normalEdgeStrength||.3,this.depthEdgeStrength=s.depthEdgeStrength||.4,this.beautyRenderTarget=new _n,this.beautyRenderTarget.texture.minFilter=we,this.beautyRenderTarget.texture.magFilter=we,this.beautyRenderTarget.texture.type=Fn,this.beautyRenderTarget.depthTexture=new th,this.normalRenderTarget=new _n,this.normalRenderTarget.texture.minFilter=we,this.normalRenderTarget.texture.magFilter=we,this.normalRenderTarget.texture.type=Fn}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this.normalMaterial.dispose(),this.fsQuad.dispose()}setSize(t,e){this.resolution.set(t,e),this.renderResolution.set(t/this.pixelSize|0,e/this.pixelSize|0);const{x:n,y:s}=this.renderResolution;this.beautyRenderTarget.setSize(n,s),this.normalRenderTarget.setSize(n,s),this.fsQuad.material.uniforms.resolution.value.set(n,s,1/n,1/s)}setPixelSize(t){this.pixelSize=t,this.setSize(this.resolution.x,this.resolution.y)}render(t,e){const n=this.fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,t.setRenderTarget(this.beautyRenderTarget),t.render(this.scene,this.camera);const s=this.scene.overrideMaterial;t.setRenderTarget(this.normalRenderTarget),this.scene.overrideMaterial=this.normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=s,n.tDiffuse.value=this.beautyRenderTarget.texture,n.tDepth.value=this.beautyRenderTarget.depthTexture,n.tNormal.value=this.normalRenderTarget.texture,this.renderToScreen?t.setRenderTarget(null):(t.setRenderTarget(e),this.clear&&t.clear()),this.fsQuad.render(t)}createPixelatedMaterial(){return new Ve({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Kt(this.renderResolution.x,this.renderResolution.y,1/this.renderResolution.x,1/this.renderResolution.y)},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}const Pb={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class hr extends xr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new _n(r,o,{type:Fn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new _n(r,o,{type:Fn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Pb;this.highPassUniforms=ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Kp;this.copyUniforms=ur.clone(u.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Uc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new Ni,this.fsQuad=new ol(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}hr.BlurDirectionX=new st(1,0);hr.BlurDirectionY=new st(0,1);const Ib={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Lb extends xr{constructor(){super();const t=Ib;this.uniforms=ur.clone(t.uniforms),this.material=new Ly({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ol(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$d?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Hd=new st,Hr=new b,Gd=new ge,Ic=new fs,Wd=new b(0,0,1);var yn,tr,er,rs,nr,lo,Zt,Ub,os,wi,Nb,jp,Zp,Ze,pn,Gu,Jp,Ou,Qp,tm,em,nm,im;class Db{constructor(){Dt(this,Zt);Dt(this,yn,-1);Dt(this,tr,new b);Dt(this,er,new b);Dt(this,rs,new ge);Dt(this,nr,new ge);Dt(this,lo);Dt(this,os,{});Dt(this,Ze,null);Dt(this,pn,null);Dt(this,Gu,Date.now());this.wrapper=new pe,this.instance=new sn(75,window.innerWidth/window.innerHeight,.5,500),this.wrapper.add(this.instance),this.light=new zy(8947848,.5,Uu*6,Math.PI/4,.75,2),this.light.position.set(0,0,1),this.wrapper.add(this.light),this.light.target=this.instance}init(t,e,n){this.renderer=t,this.scene=e,this.cave=n,this.composer=new Rb(t);const s=1,r=new Cb(s,e,this.instance);r.normalEdgeStrength=.05,r.depthEdgeStrength=.1,this.composer.addPass(r);const o=new hr(new st(window.innerWidth,window.innerHeight),1.5,.4,.85);o.threshold=.25,o.strength=.33,o.radius=0,this.composer.addPass(o),this.composer.addPass(new Lb)}destroy(){}tick(t){j(this,yn)>=0&&(te(this,yn,j(this,yn)+t*j(this,lo)),j(this,yn)>1&&te(this,yn,1),this.wrapper.position.lerpVectors(j(this,tr),j(this,er),j(this,yn)),this.wrapper.quaternion.slerpQuaternions(j(this,rs),j(this,nr),j(this,yn)),j(this,yn)===1&&(j(this,tr).copy(j(this,er)),j(this,rs).copy(j(this,nr)),te(this,yn,-1))),this.render()}render(){this.composer.render()}lookAt(t,e,n){j(this,tr).copy(this.wrapper.position),j(this,rs).copy(this.wrapper.quaternion),j(this,er).copy(e).multiplyScalar(Uu*1.75).add(t),j(this,nr).setFromUnitVectors(Wd,e),te(this,yn,0),te(this,lo,n??1)}}yn=new WeakMap,tr=new WeakMap,er=new WeakMap,rs=new WeakMap,nr=new WeakMap,lo=new WeakMap,Zt=new WeakSet,Ub=function(){Bt(this,Zt,wi).call(this,"resize",()=>{this.instance.aspect=window.innerWidth/window.innerHeight,this.instance.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),Bt(this,Zt,wi).call(this,"click",t=>Bt(this,Zt,jp).call(this,t)),Bt(this,Zt,wi).call(this,"wheel",t=>Bt(this,Zt,Zp).call(this,t)),Bt(this,Zt,wi).call(this,"pointerdown",t=>Bt(this,Zt,tm).call(this,t)),Bt(this,Zt,wi).call(this,"pointerup",t=>Bt(this,Zt,em).call(this,t)),Bt(this,Zt,wi).call(this,"pointerout",t=>Bt(this,Zt,nm).call(this,t)),Bt(this,Zt,wi).call(this,"pointermove",t=>Bt(this,Zt,im).call(this,t))},os=new WeakMap,wi=function(t,e){j(this,os)[t]?j(this,os)[t].push(this.renderer.domElement.addEventListener(t,e)):j(this,os)[t]=[this.renderer.domElement.addEventListener(t,e)]},Nb=function(){for(let[t,e]of Object.entries(j(this,os)))e.forEach(n=>this.renderer.domElement.removeEventListener(t,n))},jp=function(t){if(t.button===0){if(t.detail==1)Ic.setFromCamera(Hd.set(...Gr(t)),this.instance);else if(t.detail==2){Ic.setFromCamera(Hd.set(...Gr(t)),this.instance);const e=Ic.intersectObject(this.cave.mesh),{point:n,normal:s}=e[0];this.lookAt(n,s)}}},Zp=function(t){const e=t.deltaY;Hr.copy(Wd).applyQuaternion(this.wrapper.quaternion).multiplyScalar(e/100),this.wrapper.position.add(Hr)},Ze=new WeakMap,pn=new WeakMap,Gu=new WeakMap,Jp=function(t){if(j(this,Ze)){if(!j(this,pn)){const[e,n]=Gr(t);te(this,pn,{id:t.pointerId,x:e,y:n,t:Date.now()})}}else{const[e,n]=Gr(t);te(this,Ze,{id:t.pointerId,x:e,y:n,t:Date.now()})}},Ou=function(t){var e,n;((e=j(this,Ze))==null?void 0:e.id)===t.pointerId?j(this,pn)?(te(this,Ze,j(this,pn)),te(this,pn,null)):te(this,Ze,null):((n=j(this,pn))==null?void 0:n.id)===t.pointerId&&te(this,pn,null)},Qp=function(t){var e,n;return((e=j(this,Ze))==null?void 0:e.id)===t.pointerId?j(this,Ze):((n=j(this,pn))==null?void 0:n.id)===t.pointerId?j(this,pn):null},tm=function(t){Bt(this,Zt,Jp).call(this,t)},em=function(t){Bt(this,Zt,Ou).call(this,t)},nm=function(t){Bt(this,Zt,Ou).call(this,t)},im=function(t){if(t.preventDefault(),!j(this,pn)){if(j(this,Ze)&&Bt(this,Zt,Qp).call(this,t)===j(this,Ze)){const{x:e,y:n}=j(this,Ze),[s,r]=Gr(t),o=s-e,a=r-n;Hr.set(-a,o,0).applyQuaternion(this.wrapper.quaternion);const l=Hr.length();Gd.setFromAxisAngle(Hr.normalize(),l),this.wrapper.applyQuaternion(Gd),j(this,Ze).x=s,j(this,Ze).y=r,j(this,rs).copy(this.wrapper.quaternion)}}};function Gr(i){return[i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight*2-1)]}const sm=2/Math.sqrt(5),Ei=Math.sqrt(2-sm),fa=Math.sqrt(2+sm),Fb=[Ei,0,0,0,0,fa,-Ei,0,0,-Ei,0,0,0,0,-fa,Ei,0,0,-Ei,0,0,0,0,fa,Ei,0,0,Ei,0,0,0,0,-fa,-Ei,0,0],Bb=[1,0,0,0,1,0,0,0,1,0,0,1,0,-1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,-1,0,1,0,0],rm=new oe;rm.setAttribute("position",new Ot(new Float32Array(Fb),3));rm.setAttribute("barycoord",new Ot(new Float32Array(Bb),3));new pe;new b(0,1,0);const Ob=5,om=3*Ob,zb=om*3,da=4,pa=1/3,Lc=1-.08,ma=.015,Vb=`
uniform float t;
uniform vec3 cellnormal;

attribute vec3 barycoord;

varying vec3 vBarycoord;
varying vec3 vColor;
varying float vInstanceNo;

void main() {
    float instanceNo = instanceMatrix[3][1];

    float tMult = t / 2.;
    float theta = (tMult + instanceNo) * radians(360.);
    float pulseX = .95 - (cos(theta) / 20.);
    float pulseY = (1. - sin(theta));

    vec3 newPosn = position * pulseX;

    newPosn += cellnormal * pulseY;

    /* newPosn += cellnormal * pulseY
            * (smoothstep(-1.,0., tMult - instanceNo) - 1.) * 2.; */


    vBarycoord = barycoord;
    vColor = instanceColor;
    vInstanceNo = instanceNo;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosn, 1.0);
}
`,kb=`

varying vec3 vBarycoord;
varying vec3 vColor;
varying float vInstanceNo;

void main() {
    float edgeProximity = abs(vBarycoord.y - vBarycoord.z) + vBarycoord.x;
    float colored = step(0.8, edgeProximity);

    gl_FragColor = vec4(vColor, 1.);
}
`,Dc=new pe;new b(0,1,0);new b;new b;new b;new b;new b;new b;new b;var ri,oi,co,ai,Wa,as,uo,ls,cs,us,Xe,am,$r,Ra,Vu;const wh=class wh{constructor(t){Dt(this,Xe);Dt(this,ri);Dt(this,oi);Dt(this,co);Dt(this,ai);Dt(this,Wa);Dt(this,as);Dt(this,uo);Dt(this,ls,new b);Dt(this,cs,new b);Dt(this,us,new b);te(this,ri,{t:{value:0,type:"f"},cellnormal:{value:new b}}),t?te(this,Wa,t):te(this,as,new wh(this))}init(t){var s;te(this,oi,new oe);const e=[],n=[];for(let r=0;r<zb;r++)switch(r%3){case 0:e.push(8,0,-8),n.push(1,0,0);break;case 1:e.push(-8,8,0),n.push(0,1,0);break;case 2:e.push(0,-8,8),n.push(0,0,1);break}j(this,oi).setAttribute("position",new Ot(new Float32Array(e),3)),j(this,oi).setAttribute("barycoord",new Ot(new Float32Array(n),3)),te(this,co,new Ve({uniforms:j(this,ri),vertexShader:Vb,fragmentShader:kb,side:Un,depthWrite:!0,transparent:!0})),te(this,ai,new Ep(j(this,oi),j(this,co),da));for(let r=0;r<da;r++)Dc.position.set(0,r/da,0),Dc.updateMatrix(),j(this,ai).setMatrixAt(r,Dc.matrix);Bt(this,Xe,Vu).call(this),t.add(j(this,ai)),(s=j(this,as))==null||s.init(t)}retarget(t){var e;t&&((e=j(this,as))==null||e.retarget(j(this,Xe,$r)),te(this,Xe,t,am),j(this,ai).position.copy(j(this,Xe,$r).centre),j(this,ri).cellnormal.value.copy(j(this,Xe,$r).normal),j(this,ri).cellnormal.needsUpdate=!0,Bt(this,Xe,Ra).call(this,0,j(this,ls),j(this,cs),j(this,us)),Bt(this,Xe,Ra).call(this,1,j(this,cs),j(this,us),j(this,ls)),Bt(this,Xe,Ra).call(this,2,j(this,us),j(this,ls),j(this,cs)),j(this,oi).attributes.position.needsUpdate=!0,j(this,ri).t.value=0)}tick(t){var e;j(this,ri).t.value+=t,(e=j(this,as))==null||e.tick(t)}};ri=new WeakMap,oi=new WeakMap,co=new WeakMap,ai=new WeakMap,Wa=new WeakMap,as=new WeakMap,uo=new WeakMap,ls=new WeakMap,cs=new WeakMap,us=new WeakMap,Xe=new WeakSet,am=function(t){j(this,ls).copy(t.a).sub(t.centre),j(this,cs).copy(t.b).sub(t.centre),j(this,us).copy(t.c).sub(t.centre),te(this,uo,t)},$r=function(){return j(this,uo)},Ra=function(t,e,n,s){const r=t*om*3,o=[],a=new b().copy(n).sub(e).multiplyScalar(pa).add(e),l=new b().copy(s).sub(e).multiplyScalar(pa).add(e),c=new b().copy(n).sub(e).multiplyScalar(ma).add(e),u=new b().copy(s).sub(e).multiplyScalar(ma).add(e),f=new b().copy(e).multiplyScalar(Lc),h=new b().copy(n).sub(e).multiplyScalar(pa-ma*2).add(e).multiplyScalar(Lc),d=new b().copy(s).sub(e).multiplyScalar(pa-ma*2).add(e).multiplyScalar(Lc);o.push(...c.toArray(),...f.toArray(),...a.toArray(),...a.toArray(),...f.toArray(),...h.toArray(),...f.toArray(),...u.toArray(),...l.toArray(),...f.toArray(),...l.toArray(),...d.toArray(),...c.toArray(),...u.toArray(),...f.toArray()),j(this,oi).attributes.position.set(o,r),Bt(this,Xe,Vu).call(this)},Vu=function(){var n;const t=((n=j(this,Xe,$r))==null?void 0:n.hiliteColors)??[0],e=t.length;for(let s=0;s<da;s++)j(this,ai).setColorAt(s,new Tt(t[s%e]));j(this,ai).instanceColor.needsUpdate=!0};let zu=wh;const Hb=new st;new b;const Xd=new fs;new Ni({color:14540168});var Ii,ir;class Gb{constructor(t,e){Dt(this,Ii);Dt(this,ir);this.cave=t,this.camera=e,this.hilite=new zu,this.hilite.init(e.scene),this.path=new Xb,this.path.init(t,e.scene),window.addEventListener("click",n=>{Xd.setFromCamera(Hb.set(...Wb(n)),this.camera.instance);const s=Xd.intersectObjects([this.cave.mesh]);if(s[0]){const r=this.cave.pathfinder.getClosestNode(s[0].point).cell;j(this,Ii)===r?this.camera.lookAt(r.centre,r.normal,1):(te(this,ir,j(this,Ii)),te(this,Ii,r),this.hilite.retarget(r),this.camera.lookAt(r.centre,r.normal,.05),j(this,Ii)&&j(this,ir)&&this.path.setPoints(j(this,ir),j(this,Ii)))}})}tick(t){this.hilite.tick(t)}}Ii=new WeakMap,ir=new WeakMap;function Wb(i){return[i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight*2-1)]}var Li;class Xb{constructor(){Dt(this,Li)}init(t,e){this.cave=t,this.scene=e;const n=new oe;n.setAttribute("position",new Ot(new Float32Array(300),3)),new Uy({color:65280,dashSize:2,gapSize:1}),te(this,Li,new nh(n)),j(this,Li).frustumCulled=!1,e.add(j(this,Li))}setPoints(t,e){const n=this.cave.findPathCellToCell(t,e);j(this,Li).geometry.attributes.position.set(new Ty(n.map(s=>s.normal.clone().multiplyScalar(5).add(s.position))).getPoints(99).flatMap(s=>s.toArray())),j(this,Li).geometry.attributes.position.needsUpdate=!0}}Li=new WeakMap;const lm=new Jr;document.body.appendChild(lm.dom);const Vi=new dy,al=new fy;al.setSize(window.innerWidth,window.innerHeight);al.pixelRatio=window.devicePixelRatio;document.body.appendChild(al.domElement);const qb=new Hy(2105376);Vi.add(qb);const Yb=3,An=new PS(Yb);Vi.add(An.mesh);const $b=HS(An);Vi.add($b);const{point:Kb,normal:jb}=An.centre.getRandomPointOnMesh(),io=new gb;Vi.add(io.mesh);io.init(new b().copy(Kb),new b().copy(jb));const cm=[];An.chunks.forEach(i=>{const t=i.getRandomGridCell(),e=new SS(t);cm.push(e)});cm.map(i=>Vi.add(i.mesh));const um=[];for(let i=0;i<1;i++){const t=1+Math.floor(Math.random()*(An.chunks.length-1)),e=An.chunks[t].getRandomPointOnMesh(),n=new Sb;n.init(An,e.point,e.normal),Vi.add(n.mesh),um.push(n)}const vr=new Db;vr.init(al,Vi,An);Vi.add(vr.wrapper);vr.wrapper.position.set(...An.centre.worldposition.toArray());vr.lookAt(io.position,io.up);const Zb=new Gb(An,vr);console.log(An);let Va=Date.now(),Jb=1;const hm={vector:new b(0,1),force:0};function Eh(){const i=requestAnimationFrame(Eh),t=Date.now(),e=(t-Va)/(1e3*Jb);Va=t,e>=1&&tE(i),Qb(e),lm.update(),vr.tick(e)}function Qb(i){io.tick(i,An.mesh,hm),um.forEach(t=>t.tick(i)),Zb.tick(i)}const ku=document.getElementById("pause");ku.addEventListener("click",()=>{Va=Date.now(),Eh(),ku.setAttribute("disabled","disabled")});function tE(i){cancelAnimationFrame(i),ku.removeAttribute("disabled")}hm.force=1;setTimeout(()=>{Va=Date.now(),Eh()},1e3);
