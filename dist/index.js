"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw r=0,s}}};var v=q(function(l,g){"use strict";var c=require("@stdlib/number-uint32-base-mul"),R=require("@stdlib/number-uint32-base-muldw").assign;function U(e,r,s,u,n,a,t){return e>>>=0,r>>>=0,s>>>=0,u>>>=0,R(r,u,n,a,t),n[t]=n[t]+c(e,u)+c(r,s)>>>0,n}g.exports=U});var x=q(function(z,p){"use strict";var W=require("@stdlib/array-uint32"),m=require("@stdlib/number-uint64-base-to-words").assign,C=require("@stdlib/number-uint64-ctor"),E=v(),i=new W(6);function K(e,r){return m(e,i,1,0),m(r,i,1,2),E(i[0],i[1],i[2],i[3],i,1,4),C.of(i[4],i[5])}p.exports=K});var w=q(function(B,o){"use strict";var P=v();function S(e,r,s,u,n,a,t,A,O){return P(e[s],e[s+r],u[a],u[a+n],t,A,O),t}o.exports=S});var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=x(),f=v(),j=w();y(d,"assign",f);y(d,"strided",j);module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
