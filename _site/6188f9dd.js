/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const e=globalThis.trustedTypes,i=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,n="?"+s,o=`<${n}>`,l=document,r=(t="")=>l.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,d=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,A=/>/g,u=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,c=/'/g,_=/"/g,v=/^(?:script|style|textarea)$/i,p=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),g=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),f=new WeakMap,y=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=o._$litPart$;if(void 0===l){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new C(e.insertBefore(r(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l},H=l.createTreeWalker(l,129,null,!1),x=(t,e)=>{const n=t.length-1,l=[];let r,h=2===e?"<svg>":"",$=d;for(let e=0;e<n;e++){const i=t[e];let n,p,g=-1,m=0;for(;m<i.length&&($.lastIndex=m,p=$.exec(i),null!==p);)m=$.lastIndex,$===d?"!--"===p[1]?$=a:void 0!==p[1]?$=A:void 0!==p[2]?(v.test(p[2])&&(r=RegExp("</"+p[2],"g")),$=u):void 0!==p[3]&&($=u):$===u?">"===p[0]?($=null!=r?r:d,g=-1):void 0===p[1]?g=-2:(g=$.lastIndex-p[2].length,n=p[1],$=void 0===p[3]?u:'"'===p[3]?_:c):$===_||$===c?$=u:$===a||$===A?$=d:($=u,r=void 0);const f=$===u&&t[e+1].startsWith("/>")?" ":"";h+=$===d?i+o:g>=0?(l.push(n),i.slice(0,g)+"$lit$"+i.slice(g)+s+f):i+s+(-2===g?(l.push(void 0),e):f)}const p=h+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==i?i.createHTML(p):p,l]};class N{constructor({strings:t,_$litType$:i},o){let l;this.parts=[];let h=0,$=0;const d=t.length-1,a=this.parts,[A,u]=x(t,i);if(this.el=N.createElement(A,o),H.currentNode=this.el.content,2===i){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(l=H.nextNode())&&a.length<d;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const e of l.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(s)){const i=u[$++];if(t.push(e),void 0!==i){const t=l.getAttribute(i.toLowerCase()+"$lit$").split(s),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:h,name:e[2],strings:t,ctor:"."===e[1]?S:"?"===e[1]?w:"@"===e[1]?I:M})}else a.push({type:6,index:h})}for(const e of t)l.removeAttribute(e)}if(v.test(l.tagName)){const t=l.textContent.split(s),i=t.length-1;if(i>0){l.textContent=e?e.emptyScript:"";for(let e=0;e<i;e++)l.append(t[e],r()),H.nextNode(),a.push({type:2,index:++h});l.append(t[i],r())}}}else if(8===l.nodeType)if(l.data===n)a.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(s,t+1));)a.push({type:7,index:h}),t+=s.length-1}h++}}static createElement(t,e){const i=l.createElement("template");return i.innerHTML=t,i}}function b(t,e,i=t,s){var n,o,l,r;if(e===g)return e;let $=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const d=h(e)?void 0:e._$litDirective$;return(null==$?void 0:$.constructor)!==d&&(null===(o=null==$?void 0:$._$AO)||void 0===o||o.call($,!1),void 0===d?$=void 0:($=new d(t),$._$AT(t,i,s)),void 0!==s?(null!==(l=(r=i)._$Cl)&&void 0!==l?l:r._$Cl=[])[s]=$:i._$Cu=$),void 0!==$&&(e=b(t,$._$AS(t,e.values),$,s)),e}class T{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),r=0,h=0,$=s[0];for(;void 0!==$;){if(r===$.index){let e;2===$.type?e=new C(o,o.nextSibling,this,t):1===$.type?e=new $.ctor(o,$.name,$.strings,this,t):6===$.type&&(e=new B(o,this,t)),this.v.push(e),$=s[++h]}r!==(null==$?void 0:$.index)&&(o=H.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class C{constructor(t,e,i,s){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),h(t)?t===m||null==t||""===t?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==g&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==m&&h(this._$AH)?this._$AA.nextSibling.data=t:this.S(l.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new T(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=f.get(t.strings);return void 0===e&&f.set(t.strings,e=new N(t)),e}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new C(this.A(r()),this.A(r()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class M{constructor(t,e,i,s,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=b(this,t,e,0),o=!h(t)||t!==this._$AH&&t!==g,o&&(this._$AH=t);else{const s=t;let l,r;for(t=n[0],l=0;l<n.length-1;l++)r=b(this,s[i+l],e,l),r===g&&(r=this._$AH[l]),o||(o=!h(r)||r!==this._$AH[l]),r===m?t=m:t!==m&&(t+=(null!=r?r:"")+n[l+1]),this._$AH[l]=r}o&&!s&&this.k(t)}k(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class S extends M{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===m?void 0:t}}class w extends M{constructor(){super(...arguments),this.type=4}k(t){t&&t!==m?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=b(this,t,e,0))&&void 0!==i?i:m)===g)return;const s=this._$AH,n=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==m&&(s===m||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const E=window.litHtmlPolyfillSupport;null==E||E(N,C),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.0.1");export{m as T,g as b,p,y as w};
