// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-umul@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.3.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var v=m-1;function u(){return c(1+v*Math.random())>>>0}var b=624,w=397,y=m>>>0,T=2147483648,x=2147483647,M=1812433253,N=1664525,R=1566083941,L=[0,2567483615],_=1/(l+1),P=2147483648,S=1,O=l*_,B=1,Y=3,A=2,z=b+3,I=b+5,J=b+6;function V(e,t){var r;return r=t?"option":"argument",e.length<J+1?new RangeError(j("0ol7P",r)):e[0]!==B?new RangeError(j("0olEL",r,B,e[0])):e[1]!==Y?new RangeError(j("0olEM",r,Y,e[1])):e[A]!==b?new RangeError(j("0ol7S",r,b,e[A])):1!==e[z]?new RangeError(j("0ol7T",r,1,e[z])):e[I]!==e.length-J?new RangeError(j("0ol7U",r,e.length-J,e[I])):null}function X(e,t,r){var n;for(e[0]=r>>>0,n=1;n<t;n++)r=((r=e[n-1]>>>0)^r>>>30)>>>0,e[n]=p(r,M)+n>>>0;return e}function G(l){var c,v,M,G,U,W;if(M={},arguments.length){if(!s(l))throw new TypeError(j("0ol2V",l));if(n(l,"copy")&&(M.copy=l.copy,!d(l.copy)))throw new TypeError(j("0ol2o","copy",l.copy));if(n(l,"state")){if(v=l.state,M.state=!0,!i(v))throw new TypeError(j("0ol6z","state",v));if(W=V(v,!0))throw W;!1===M.copy?c=v:(c=new a(v.length),E(v.length,v,1,c,1)),v=new a(c.buffer,c.byteOffset+(A+1)*c.BYTES_PER_ELEMENT,b),G=new a(c.buffer,c.byteOffset+(I+1)*c.BYTES_PER_ELEMENT,v[I])}if(void 0===G)if(n(l,"seed"))if(G=l.seed,M.seed=!0,f(G)){if(G>y)throw new RangeError(j("0ol7V","seed",G));G>>>=0}else{if(!1===o(G)||G.length<1)throw new TypeError(j("0ol74","seed",G));if(1===G.length){if(G=G[0],!f(G))throw new TypeError(j("0ol74","seed",G));if(G>y)throw new RangeError(j("0ol7W","seed",G));G>>>=0}else U=G.length,(c=new a(J+U))[0]=B,c[1]=Y,c[A]=b,c[z]=1,c[z+1]=b,c[I]=U,E.ndarray(U,G,1,0,c,1,I+1),v=new a(c.buffer,c.byteOffset+(A+1)*c.BYTES_PER_ELEMENT,b),G=new a(c.buffer,c.byteOffset+(I+1)*c.BYTES_PER_ELEMENT,U),v=function(e,t,r,n){var s,o,i,d;for(o=1,i=0,d=h(t,n);d>0;d--)s=e[o-1]>>>0,s=p(s=(s^s>>>30)>>>0,N)>>>0,e[o]=(e[o]>>>0^s)+r[i]+i>>>0,i+=1,(o+=1)>=t&&(e[0]=e[t-1],o=1),i>=n&&(i=0);for(d=t-1;d>0;d--)s=e[o-1]>>>0,s=p(s=(s^s>>>30)>>>0,R)>>>0,e[o]=(e[o]>>>0^s)-o>>>0,(o+=1)>=t&&(e[0]=e[t-1],o=1);return e[0]=P,e}(v=X(v,b,19650218),b,G,U)}else G=u()>>>0}else G=u()>>>0;return void 0===v&&((c=new a(J+1))[0]=B,c[1]=Y,c[A]=b,c[z]=1,c[z+1]=b,c[I]=1,c[I+1]=G,v=new a(c.buffer,c.byteOffset+(A+1)*c.BYTES_PER_ELEMENT,b),G=new a(c.buffer,c.byteOffset+(I+1)*c.BYTES_PER_ELEMENT,1),v=X(v,b,G)),e(Q,"NAME","mt19937"),t(Q,"seed",k),t(Q,"seedLength",q),r(Q,"state",F,H),t(Q,"stateLength",C),t(Q,"byteLength",D),e(Q,"toJSON",K),e(Q,"MIN",0),e(Q,"MAX",m),e(Q,"normalized",Z),e(Z,"NAME",Q.NAME),t(Z,"seed",k),t(Z,"seedLength",q),r(Z,"state",F,H),t(Z,"stateLength",C),t(Z,"byteLength",D),e(Z,"toJSON",K),e(Z,"MIN",0),e(Z,"MAX",O),Q;function k(){var e=c[I];return E(e,G,1,new a(e),1)}function q(){return c[I]}function C(){return c.length}function D(){return c.byteLength}function F(){var e=c.length;return E(e,c,1,new a(e),1)}function H(e){var t;if(!i(e))throw new TypeError(j("0ol70",e));if(t=V(e,!1))throw t;!1===M.copy?M.state&&e.length===c.length?E(e.length,e,1,c,1):(c=e,M.state=!0):(e.length!==c.length&&(c=new a(e.length)),E(e.length,e,1,c,1)),v=new a(c.buffer,c.byteOffset+(A+1)*c.BYTES_PER_ELEMENT,b),G=new a(c.buffer,c.byteOffset+(I+1)*c.BYTES_PER_ELEMENT,c[I])}function K(){var e={type:"PRNG"};return e.name=Q.NAME,e.state=g(c),e.params=[],e}function Q(){var e,t;return(t=c[z+1])>=b&&(v=function(e){var t,r,n,s;for(s=b-w,r=0;r<s;r++)t=e[r]&T|e[r+1]&x,e[r]=e[r+w]^t>>>1^L[t&S];for(n=b-1;r<n;r++)t=e[r]&T|e[r+1]&x,e[r]=e[r-s]^t>>>1^L[t&S];return t=e[n]&T|e[0]&x,e[n]=e[w-1]^t>>>1^L[t&S],e}(v),t=0),e=v[t],c[z+1]=t+1,e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0}function Z(){return(67108864*(Q()>>>5)+(Q()>>>6))*_}}var U=G({seed:u()});e(U,"factory",G);export{U as default,G as factory};
//# sourceMappingURL=index.mjs.map
