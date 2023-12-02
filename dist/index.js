"use strict";var O=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var S=O(function(Ne,B){"use strict";var re=require("@stdlib/constants-uint32-max"),ne=require("@stdlib/math-base-special-floor"),te=re-1;function ie(){var r=ne(1+te*Math.random());return r>>>0}B.exports=ie});var x=O(function(qe,Z){"use strict";var T=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),j=require("@stdlib/utils-define-nonenumerable-read-write-accessor"),w=require("@stdlib/assert-has-own-property"),ae=require("@stdlib/assert-is-plain-object"),oe=require("@stdlib/assert-is-collection"),G=require("@stdlib/assert-is-uint32array"),ue=require("@stdlib/assert-is-boolean").isPrimitive,k=require("@stdlib/assert-is-positive-integer").isPrimitive,J=require("@stdlib/constants-float64-max-safe-integer"),K=require("@stdlib/constants-uint32-max"),v=require("@stdlib/array-uint32"),fe=require("@stdlib/math-base-special-max"),L=require("@stdlib/math-base-ops-umul"),y=require("@stdlib/blas-base-gcopy"),ve=require("@stdlib/array-to-json"),s=require("@stdlib/string-format"),D=S(),u=624,M=397,W=K>>>0,Ee=19650218,R=2147483648,N=2147483647,se=1812433253,le=1664525,ge=1566083941,ce=2636928640,he=4022730752,Te=2567483615,q=[0,Te>>>0],V=1/(J+1),de=67108864,me=2147483648,I=1,_e=J*V,A=1,b=3,m=2,_=u+3,E=u+5,p=u+6;function z(r,e){var n;return e?n="option":n="argument",r.length<p+1?new RangeError(s("invalid %s. `state` array has insufficient length.",n)):r[0]!==A?new RangeError(s("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",n,A,r[0])):r[1]!==b?new RangeError(s("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,b,r[1])):r[m]!==u?new RangeError(s("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,u,r[m])):r[_]!==1?new RangeError(s("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",n,1,r[_])):r[E]!==r.length-p?new RangeError(s("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,r.length-p,r[E])):null}function H(r,e,n){var a;for(r[0]=n>>>0,a=1;a<e;a++)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,r[a]=L(n,se)+a>>>0;return r}function ye(r,e,n,a){var t,o,g,h;for(o=1,g=0,h=fe(e,a);h>0;h--)t=r[o-1]>>>0,t=(t^t>>>30)>>>0,t=L(t,le)>>>0,r[o]=(r[o]>>>0^t)+n[g]+g>>>0,o+=1,g+=1,o>=e&&(r[0]=r[e-1],o=1),g>=a&&(g=0);for(h=e-1;h>0;h--)t=r[o-1]>>>0,t=(t^t>>>30)>>>0,t=L(t,ge)>>>0,r[o]=(r[o]>>>0^t)-o>>>0,o+=1,o>=e&&(r[0]=r[e-1],o=1);return r[0]=me,r}function pe(r){var e,n,a,t;for(t=u-M,n=0;n<t;n++)e=r[n]&R|r[n+1]&N,r[n]=r[n+M]^e>>>1^q[e&I];for(a=u-1;n<a;n++)e=r[n]&R|r[n+1]&N,r[n]=r[n-t]^e>>>1^q[e&I];return e=r[a]&R|r[0]&N,r[a]=r[M-1]^e>>>1^q[e&I],r}function Ae(r){var e,n,a,t,o,g;if(a={},arguments.length){if(!ae(r))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",r));if(w(r,"copy")&&(a.copy=r.copy,!ue(r.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(w(r,"state")){if(n=r.state,a.state=!0,!G(n))throw new TypeError(s("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n));if(g=z(n,!0),g)throw g;a.copy===!1?e=n:(e=new v(n.length),y(n.length,n,1,e,1)),n=new v(e.buffer,e.byteOffset+(m+1)*e.BYTES_PER_ELEMENT,u),t=new v(e.buffer,e.byteOffset+(E+1)*e.BYTES_PER_ELEMENT,n[E])}if(t===void 0)if(w(r,"seed"))if(t=r.seed,a.seed=!0,k(t)){if(t>W)throw new RangeError(s("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",t));t>>>=0}else{if(oe(t)===!1||t.length<1)throw new TypeError(s("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",t));if(t.length===1){if(t=t[0],!k(t))throw new TypeError(s("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",t));if(t>W)throw new RangeError(s("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",t));t>>>=0}else o=t.length,e=new v(p+o),e[0]=A,e[1]=b,e[m]=u,e[_]=1,e[_+1]=u,e[E]=o,y.ndarray(o,t,1,0,e,1,E+1),n=new v(e.buffer,e.byteOffset+(m+1)*e.BYTES_PER_ELEMENT,u),t=new v(e.buffer,e.byteOffset+(E+1)*e.BYTES_PER_ELEMENT,o),n=H(n,u,Ee),n=ye(n,u,t,o)}else t=D()>>>0}else t=D()>>>0;return n===void 0&&(e=new v(p+1),e[0]=A,e[1]=b,e[m]=u,e[_]=1,e[_+1]=u,e[E]=1,e[E+1]=t,n=new v(e.buffer,e.byteOffset+(m+1)*e.BYTES_PER_ELEMENT,u),t=new v(e.buffer,e.byteOffset+(E+1)*e.BYTES_PER_ELEMENT,1),n=H(n,u,t)),T(f,"NAME","mt19937"),d(f,"seed",h),d(f,"seedLength",P),j(f,"state",U,X),d(f,"stateLength",F),d(f,"byteLength",C),T(f,"toJSON",Y),T(f,"MIN",0),T(f,"MAX",K),T(f,"normalized",c),T(c,"NAME",f.NAME),d(c,"seed",h),d(c,"seedLength",P),j(c,"state",U,X),d(c,"stateLength",F),d(c,"byteLength",C),T(c,"toJSON",Y),T(c,"MIN",0),T(c,"MAX",_e),f;function h(){var i=e[E];return y(i,t,1,new v(i),1)}function P(){return e[E]}function F(){return e.length}function C(){return e.byteLength}function U(){var i=e.length;return y(i,e,1,new v(i),1)}function X(i){var l;if(!G(i))throw new TypeError(s("invalid argument. Must provide a Uint32Array. Value: `%s`.",i));if(l=z(i,!1),l)throw l;a.copy===!1?a.state&&i.length===e.length?y(i.length,i,1,e,1):(e=i,a.state=!0):(i.length!==e.length&&(e=new v(i.length)),y(i.length,i,1,e,1)),n=new v(e.buffer,e.byteOffset+(m+1)*e.BYTES_PER_ELEMENT,u),t=new v(e.buffer,e.byteOffset+(E+1)*e.BYTES_PER_ELEMENT,e[E])}function Y(){var i={};return i.type="PRNG",i.name=f.NAME,i.state=ve(e),i.params=[],i}function f(){var i,l;return l=e[_+1],l>=u&&(n=pe(n),l=0),i=n[l],e[_+1]=l+1,i^=i>>>11,i^=i<<7&ce,i^=i<<15&he,i^=i>>>18,i>>>0}function c(){var i=f()>>>5,l=f()>>>6;return(i*de+l)*V}}Z.exports=Ae});var $=O(function(Ie,Q){"use strict";var be=x(),Oe=S(),Se=be({seed:Oe()});Q.exports=Se});var we=require("@stdlib/utils-define-nonenumerable-read-only-property"),ee=$(),Me=x();we(ee,"factory",Me);module.exports=ee;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code and copyright notice are from the [source implementation][mt19937]. The implementation has been modified for JavaScript.
*
* ```text
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*   1. Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*
*   2. Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*
*   3. The names of its contributors may not be used to endorse or promote
*      products derived from this software without specific prior written
*      permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* [mt19937]: http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
*/
//# sourceMappingURL=index.js.map
