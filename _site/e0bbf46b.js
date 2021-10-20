import{i as e,s as t,r as i}from"./00527c3c.js";import{p as o,w as s,T as n}from"./6188f9dd.js";import{d as r}from"./962426a7.js";(function(){function e(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}if(!ShadowRoot.prototype.createElement){var t,i=window.HTMLElement,o=window.customElements.define,s=window.customElements.get,n=window.customElements,r=new WeakMap,a=new WeakMap,d=new WeakMap,l=new WeakMap;window.CustomElementRegistry=function(){this.l=new Map,this.o=new Map,this.i=new Map,this.h=new Map},window.CustomElementRegistry.prototype.define=function(t,i){if(t=t.toLowerCase(),void 0!==this.j(t))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \""+t+'" has already been used with this registry');if(void 0!==this.o.get(i))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");var r=i.prototype.attributeChangedCallback,l=new Set(i.observedAttributes||[]);if(h(i,l,r),r={g:i,connectedCallback:i.prototype.connectedCallback,disconnectedCallback:i.prototype.disconnectedCallback,adoptedCallback:i.prototype.adoptedCallback,attributeChangedCallback:r,observedAttributes:l},this.l.set(t,r),this.o.set(i,r),(l=s.call(n,t))||(l=c(t),o.call(n,t,l)),this===window.customElements&&(d.set(i,r),r.s=l),l=this.h.get(t)){this.h.delete(t);var p="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];for(l=p?p.call(l):{next:e(l)},p=l.next();!p.done;p=l.next())p=p.value,a.delete(p),u(p,r,!0)}return void 0!==(r=this.i.get(t))&&(r.resolve(i),this.i.delete(t)),i},window.CustomElementRegistry.prototype.upgrade=function(){g.push(this),n.upgrade.apply(n,arguments),g.pop()},window.CustomElementRegistry.prototype.get=function(e){var t;return null==(t=this.l.get(e))?void 0:t.g},window.CustomElementRegistry.prototype.j=function(e){return this.l.get(e)},window.CustomElementRegistry.prototype.whenDefined=function(e){var t=this.j(e);if(void 0!==t)return Promise.resolve(t.g);var i=this.i.get(e);return void 0===i&&((i={}).promise=new Promise((function(e){return i.resolve=e})),this.i.set(e,i)),i.promise},window.CustomElementRegistry.prototype.m=function(e,t,i){var o=this.h.get(t);o||this.h.set(t,o=new Set),i?o.add(e):o.delete(e)},window.HTMLElement=function(){var e=t;if(e)return t=void 0,e;var o=d.get(this.constructor);if(!o)throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");return e=Reflect.construct(i,[],o.s),Object.setPrototypeOf(e,this.constructor.prototype),r.set(e,o),e},window.HTMLElement.prototype=i.prototype;var c=function(e){function t(){var t=Reflect.construct(i,[],this.constructor);Object.setPrototypeOf(t,HTMLElement.prototype);e:{var o=t.getRootNode();if(!(o===document||o instanceof ShadowRoot)){if((o=g[g.length-1])instanceof CustomElementRegistry){var s=o;break e}(o=o.getRootNode())===document||o instanceof ShadowRoot||(o=(null==(s=l.get(o))?void 0:s.getRootNode())||document)}s=o.customElements}return(o=(s=s||window.customElements).j(e))?u(t,o):a.set(t,s),t}return t.prototype.connectedCallback=function(){var t=r.get(this);t?t.connectedCallback&&t.connectedCallback.apply(this,arguments):a.get(this).m(this,e,!0)},t.prototype.disconnectedCallback=function(){var t=r.get(this);t?t.disconnectedCallback&&t.disconnectedCallback.apply(this,arguments):a.get(this).m(this,e,!1)},t.prototype.adoptedCallback=function(){var e,t;null==(e=r.get(this))||null==(t=e.adoptedCallback)||t.apply(this,arguments)},t},h=function(e,t,i){if(0!==t.size&&void 0!==i){var o=e.prototype.setAttribute;o&&(e.prototype.setAttribute=function(e,s){if(t.has(e)){var n=this.getAttribute(e);o.call(this,e,s),i.call(this,e,n,s)}else o.call(this,e,s)});var s=e.prototype.removeAttribute;s&&(e.prototype.removeAttribute=function(e){if(t.has(e)){var o=this.getAttribute(e);s.call(this,e),i.call(this,e,o,null)}else s.call(this,e)})}},p=function(e){var t=Object.getPrototypeOf(e);if(t!==window.HTMLElement)return t===i?Object.setPrototypeOf(e,window.HTMLElement):p(t)},u=function(e,i,o){o=void 0!==o&&o,Object.setPrototypeOf(e,i.g.prototype),r.set(e,i),t=e;try{new i.g}catch(e){p(i.g),new i.g}i.observedAttributes.forEach((function(t){e.hasAttribute(t)&&i.attributeChangedCallback.call(e,t,null,e.getAttribute(t))})),o&&i.connectedCallback&&e.isConnected&&i.connectedCallback.call(e)},m=Element.prototype.attachShadow;Element.prototype.attachShadow=function(e){var t=m.apply(this,arguments);return e.customElements&&(t.customElements=e.customElements),t};var g=[document],f=function(e,t,i){var o=(i?Object.getPrototypeOf(i):e.prototype)[t];e.prototype[t]=function(){g.push(this);var e=o.apply(i||this,arguments);return void 0!==e&&l.set(e,this),g.pop(),e}};f(ShadowRoot,"createElement",document),f(ShadowRoot,"importNode",document),f(Element,"insertAdjacentHTML");var b=function(e){var t=Object.getOwnPropertyDescriptor(e.prototype,"innerHTML");Object.defineProperty(e.prototype,"innerHTML",Object.assign({},t,{set:function(e){g.push(this),t.set.call(this,e),g.pop()}}))};b(Element),b(ShadowRoot),Object.defineProperty(window,"customElements",{value:new CustomElementRegistry,configurable:!0,writable:!0})}}).call(self);const a=r((t=>class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions}static set shadowRootOptions(e){this.__shadowRootOptions=e}static get elementStyles(){return this.__elementStyles}static set elementStyles(e){this.__elementStyles=e}constructor(...e){super(),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}createRenderRoot(){const{scopedElements:t,shadowRootOptions:i,elementStyles:o}=this.constructor;this.registry||(this.registry=new CustomElementRegistry,Object.entries(t).forEach((([e,t])=>this.registry.define(e,t))));const s={mode:"open",...i,customElements:this.registry};return this.renderOptions.creationScope=this.attachShadow(s),this.renderOptions.creationScope instanceof ShadowRoot&&(e(this.renderOptions.creationScope,o),this.renderOptions.renderBefore=this.renderOptions.renderBefore||this.renderOptions.creationScope.firstChild),this.renderOptions.creationScope}defineScopedElement(e,t){return this.registry.get(e)||this.registry.define(e,t)}getScopedTagName(e){return e}static getScopedTagName(e){return e}})),d=e=>{const t=e.firstElementChild;t&&t.removeAttribute("focused")},l=e=>{e.removeAttribute("expanded");const t=e.firstElementChild;t&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"))},c=e=>{e.removeAttribute("expanded")};class h extends t{static get properties(){return{focusedIndex:{type:Number},expanded:{type:Array}}}static get styles(){return[i`
        .accordion {
          display: flex;
          flex-direction: column;
        }

        .accordion ::slotted([slot='invoker']) {
          margin: 0;
        }

        .accordion ::slotted([slot='invoker'][expanded]) {
          font-weight: bold;
        }

        .accordion ::slotted([slot='content']) {
          margin: 0;
          visibility: hidden;
          display: none;
        }

        .accordion ::slotted([slot='content'][expanded]) {
          visibility: visible;
          display: block;
        }
      `]}render(){return o`
      <div class="accordion">
        <slot name="invoker"></slot>
        <slot name="content"></slot>
      </div>
    `}constructor(){super(),this.styles={},this.__store=[],this.__focusedIndex=-1,this.__expanded=[]}firstUpdated(e){super.firstUpdated(e),this.__setupSlots()}__setupSlots(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("slot[name=invoker]"),i=()=>{this.__cleanStore(),this.__setupStore(),this.__updateFocused(),this.__updateExpanded()};t&&t.addEventListener("slotchange",i)}__setupStore(){const e=Array.from(this.querySelectorAll('[slot="invoker"]')),t=Array.from(this.querySelectorAll('[slot="content"]'));e.length!==t.length&&console.warn(`The amount of invokers (${e.length}) doesn't match the amount of contents (${t.length}).`),e.forEach(((e,i)=>{const o={uid:Math.random().toString(36).substr(2,10),index:i,invoker:e,content:t[i],clickHandler:this.__createInvokerClickHandler(i),keydownHandler:this.__handleInvokerKeydown.bind(this)};(({element:e,uid:t,index:i})=>{e.style.setProperty("order",`${i+1}`),e.setAttribute("id",`content-${t}`),e.setAttribute("aria-labelledby",`invoker-${t}`)})({element:o.content,...o}),(({element:e,uid:t,index:i,clickHandler:o,keydownHandler:s})=>{e.style.setProperty("order",`${i+1}`);const n=e.firstElementChild;n&&(n.setAttribute("id",`invoker-${t}`),n.setAttribute("aria-controls",`content-${t}`),n.addEventListener("click",o),n.addEventListener("keydown",s))})({element:o.invoker,...o}),d(o.invoker),c(o.content),l(o.invoker),this.__store.push(o)}))}__cleanStore(){this.__store&&(this.__store.forEach((e=>{((e,t,i)=>{const o=e.firstElementChild;o&&(o.removeAttribute("id"),o.removeAttribute("aria-controls"),o.removeEventListener("click",t),o.removeEventListener("keydown",i))})(e.invoker,e.clickHandler,e.keydownHandler)})),this.__store=[])}__createInvokerClickHandler(e){return()=>{this.focusedIndex=e,this.__toggleExpanded(e)}}__handleInvokerKeydown(e){const t=e;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),this.focusedIndex+2<=this._pairCount&&(this.focusedIndex+=1);break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),this.focusedIndex>=1&&(this.focusedIndex-=1);break;case"Home":t.preventDefault(),this.focusedIndex=0;break;case"End":t.preventDefault(),this.focusedIndex=this._pairCount-1}}set focusedIndex(e){const t=this.__focusedIndex;this.__focusedIndex=e,this.__updateFocused(),this.dispatchEvent(new Event("focused-changed")),this.requestUpdate("focusedIndex",t)}get focusedIndex(){return this.__focusedIndex}get _pairCount(){return this.__store.length}set expanded(e){const t=this.__expanded;this.__expanded=e,this.__updateExpanded(),this.dispatchEvent(new Event("expanded-changed")),this.requestUpdate("expanded",t)}get expanded(){return this.__expanded}__updateFocused(){if(!this.__store||!this.__store[this.focusedIndex])return;const e=Array.from(this.children).find((e=>{var t;return"invoker"===e.slot&&(null===(t=e.firstElementChild)||void 0===t?void 0:t.hasAttribute("focused"))}));e&&d(e);const{invoker:t}=this.__store[this.focusedIndex];t&&(e=>{const t=e.firstElementChild;t&&(t.focus(),t.setAttribute("focused","true"))})(t)}__updateExpanded(){this.__store&&this.__store.forEach(((e,t)=>{-1!==this.expanded.indexOf(t)?((e=>{e.setAttribute("expanded","true");const t=e.firstElementChild;t&&(t.setAttribute("expanded","true"),t.setAttribute("aria-expanded","true"))})(e.invoker),e.content.setAttribute("expanded","true")):(l(e.invoker),c(e.content))}))}__toggleExpanded(e){const{expanded:t}=this,i=t.indexOf(e);-1===i?t.push(e):t.splice(i,1),this.expanded=t}}const p={platform:"web",size:"webSmall",theme:"light",language:"en",autoHeight:!0,deviceMode:!1,rememberSettings:!1,edgeDistance:!0};let u=[];function m(e){u=u.filter((t=>t!==e))}let g=!1;function f(e){if(g)for(const t of Object.keys(p)){const i=t;e[i]=p[i]}else b(e)}function b(e){let t=!1;for(const i of Object.keys(p)){const o=i;p[o]!==e[o]&&(p[o]=e[o],t=!0,g=!0)}return t}function y(e,t){if(b(e)){!function(){for(const e of Object.keys(p)){const t=e;p.rememberSettings?localStorage.setItem(`mdjsViewerSharedStates-${t}`,p[t].toString()):localStorage.removeItem(`mdjsViewerSharedStates-${t}`)}}();for(const e of u)e!==t&&e()}}!function(){for(const e of Object.keys(p)){const t=e,i=localStorage.getItem(`mdjsViewerSharedStates-${t}`);if(null!==i){switch(t){case"autoHeight":case"deviceMode":case"rememberSettings":case"edgeDistance":p[t]="true"===i;break;default:p[t]=i}g=!0}}}();class v extends(a(t)){static get scopedElements(){return{"lion-accordion":h}}static get properties(){return{story:{attribute:!1},key:{type:String},deviceMode:{type:Boolean,attribute:"device-mode",reflect:!0},sameSettings:{type:Boolean},contentHeight:{type:Number},simulatorUrl:{type:String},platform:{type:String,reflect:!0},platforms:{type:Array},size:{type:String},sizes:{type:Array},theme:{type:String,reflect:!0},themes:{type:Array},language:{type:String},languages:{type:Array},edgeDistance:{type:Boolean},autoHeight:{type:Boolean},rememberSettings:{type:Boolean},__copyButtonText:{type:String}}}constructor(){var e,t,i;super(),i=()=>{this.__syncUp=!1,f(this),this.__syncUp=!0},(t="onSubscribe")in(e=this)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,this.story=()=>o` <p>Loading...</p> `,this.key="",this.contentHeight=0,this.simulatorUrl="",this.__supportsClipboard="clipboard"in navigator,this.__copyButtonText="Copy Code",this.theme="light",this.themes=[],this.language="en-US",this.languages=[{key:"en",name:"English"},{key:"en-US",name:"English (United States)"},{key:"en-GB",name:"English (United Kingdom)"},{key:"de",name:"German"},{key:"es",name:"Spanish"},{key:"fi",name:"Finnish"},{key:"fr",name:"French"},{key:"it",name:"Italian"},{key:"nl",name:"Dutch"},{key:"pl",name:"Polish"},{key:"pt",name:"Portuguese"},{key:"ro",name:"Romanian"},{key:"sv",name:"Swedish"}],this.platform="web",this.platforms=[],this.size="webInline",this.sizes=[{key:"webInline",name:"Inline",platform:"web",width:360,height:640,dpr:1},{key:"webSmall",name:"Small",platform:"web",width:360,height:640,dpr:1},{key:"webMedium",name:"Medium",platform:"web",width:640,height:640,dpr:1},{key:"webLarge",name:"Large",platform:"web",width:1024,height:640,dpr:1},{key:"pixel2",name:"Pixel 2",platform:"android",width:411,height:731,dpr:2.6},{key:"galaxyS5",name:"Galaxy S5",platform:"android",width:360,height:640,dpr:3},{key:"iphoneX",name:"iPhone X",platform:"ios",width:375,height:812,dpr:3},{key:"iPad",name:"iPad",platform:"ios",width:768,height:1024,dpr:2}],this.deviceMode=!1,this.autoHeight=!0,this.edgeDistance=!0,this.sameSettings=!0,this.rememberSettings=!1,this.__firstRun=!0,this.__syncUp=!1}connectedCallback(){super.connectedCallback(),this.lightDomRenderTarget||(this.lightDomRenderTarget=document.createElement("div"),this.lightDomRenderTarget.setAttribute("slot","story"),this.appendChild(this.lightDomRenderTarget)),this.sameSettings&&f(this),window.addEventListener("message",(e=>{const t=JSON.parse(e.data);if("mdjs-viewer-resize"===t.action){const e=document.body.querySelector(`[mdjs-story-name="${t.storyKey}"]`);e&&(e.contentHeight=t.height)}}))}get baseUrl(){return document.location.origin}get deviceHeight(){var e;const t=(null===(e=this.sizeData)||void 0===e?void 0:e.height)||50;return this.autoHeight?Math.min(this.contentHeight,t):t}getSizesFor(e){return this.sizes.filter((t=>t.platform===e))}get sizeData(){return this.sizes.find((e=>e.key===this.size))||{width:50,height:50,name:"default"}}update(e){var t;super.update(e),this.sameSettings&&this.__syncUp&&y(this,this.onSubscribe),e.has("sameSettings")&&(this.sameSettings?(t=this.onSubscribe,u.push(t)):m(this.onSubscribe)),this.lightDomRenderTarget&&e.has("story")&&s(this.story({shadowRoot:this}),this.lightDomRenderTarget),(e.has("platform")||e.has("size"))&&(this.deviceMode="web"!==this.platform||"webInline"!==this.size)}disconnectedCallback(){super.disconnectedCallback(),this.sameSettings&&m(this.onSubscribe)}firstUpdated(){this.__syncUp=!0}get iframeUrl(){const e=document.querySelector("script[type=module][mdjs-setup]");if(!e)throw new Error('Could not find a <script type="module" src="..." mdjs-setup><\/script>');const t=new URLSearchParams;t.set("story-file",e.src),t.set("story-key",this.key),t.set("theme",this.theme),t.set("platform",this.platform),t.set("language",this.language),t.set("edge-distance",this.edgeDistance.toString());const i=[...document.querySelectorAll("link[mdjs-use]")];for(const e of i)e.href&&t.append("stylesheets",e.href);return`${this.simulatorUrl}#?${t.toString()}`}changePlatform(e){this.platform=e;const t=this.getSizesFor(this.platform);this.size=t[0].key}async onCopy(){let e=this.children[0];"android"===this.platform&&(e=this.children[1]),"ios"===this.platform&&(e=this.children[2]),e&&e.textContent&&(await navigator.clipboard.writeText(e.textContent.trim()),this.__copyButtonText="Copied ✅",setTimeout((()=>{this.__copyButtonText="Copy code"}),2e3))}renderPlatforms(){if(this.platforms.length)return o`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&this.changePlatform(e.target.value)}}
        >
          ${this.platforms.map((e=>o`
              <label class="${this.platform===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="platform"
                  value="${e.key}"
                  ?checked=${this.platform===e.key}
                />
              </label>
            `))}
        </div>
      `}renderPlatform(){if(this.platforms.length)return o`
        <div>
          <h4>Platform</h4>
          ${this.renderPlatforms()}
        </div>
      `}renderSize(){if(this.sizes.length)return o`
        <div>
          <h4>Size</h4>
          ${this.renderSizes()}
        </div>
      `}renderSizes(){if(this.sizes.length)return o`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&(this.size=e.target.value)}}
        >
          ${this.getSizesFor(this.platform).map((e=>o`
              <label class="${this.size===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="size"
                  value="${e.key}"
                  .checked=${this.size===e.key}
                />
              </label>
            `))}
        </div>
      `}renderViewport(){return o`
      <div>
        <h3>Viewport</h3>
        ${this.renderAutoHeight()}
      </div>
    `}renderThemes(){if(this.themes.length)return o`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&(this.theme=e.target.value)}}
        >
          ${this.themes.map((e=>o`
              <label class="${this.theme===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="theme"
                  value="${e.key}"
                  ?checked=${this.theme===e.key}
                />
              </label>
            `))}
        </div>
      `}renderVisual(){return o`
      <div>
        <h3>Visual</h3>
        ${this.renderThemes()} ${this.renderEdgeDistance()}
      </div>
    `}renderLanguages(){if(this.languages.length)return o`
        <label>
          Language
          <select
            @change=${e=>{e.target&&(this.language=e.target.value)}}
          >
            ${this.languages.map((e=>o`
                <option value="${e.key}" ?selected=${this.language===e.key}>
                  ${e.name}
                </option>
              `))}
          </select>
        </label>
      `}renderLocalization(){return o`
      <div>
        <h3>Localization</h3>
        ${this.renderLanguages()}
      </div>
    `}renderEdgeDistance(){return o`
      <div>
        <label class="${this.edgeDistance?"switch selected":"switch"}">
          Apply distance to edge
          <span part="switch-button"></span>

          <input
            type="checkbox"
            ?checked=${this.edgeDistance}
            @change=${e=>{e.target&&(this.edgeDistance=e.target.checked)}}
          />
        </label>
      </div>
    `}renderAutoHeight(){return o`
      <div>
        <label class="${this.autoHeight?"switch selected":"switch"}">
          Fit height to content
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.autoHeight}
            @change=${e=>{e.target&&(this.autoHeight=e.target.checked)}}
          />
        </label>
      </div>
    `}renderSameSettings(){return o`
      <div>
        <label class="${this.sameSettings?"switch selected":"switch"}">
          Same settings for all simulations
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.sameSettings}
            @change=${e=>{e.target&&(this.sameSettings=e.target.checked)}}
          />
        </label>
      </div>
    `}renderRememberSettings(){return this.sameSettings?o`
      <div>
        <label class="${this.rememberSettings?"switch selected":"switch"}">
          Remember settings
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.rememberSettings}
            @change=${e=>{e.target&&(this.rememberSettings=e.target.checked)}}
          />
        </label>
      </div>
    `:o``}renderSyncSettings(){return o`
      <div>
        <h3>Global</h3>
        ${this.renderSameSettings()} ${this.renderRememberSettings()}
      </div>
    `}render(){return o`
      ${this.simulatorUrl?o`
            <div class="platform-size-controls">${this.renderPlatform()} ${this.renderSize()}</div>
          `:""}
      <div id="wrapper">
        <slot name="story"></slot>
        ${!0===this.deviceMode?o`
              <iframe
                part="iframe"
                csp=${`script-src ${document.location.origin} 'unsafe-inline'; connect-src ws://${document.location.host}/`}
                .src=${this.iframeUrl}
                style=${`width: ${this.sizeData.width}px; height: ${this.deviceHeight}px;`}
              ></iframe>
              <p part="frame-description" style=${`width: ${this.sizeData.width+4}px;`}>
                ${this.sizeData.name} - ${this.deviceHeight}x${this.sizeData.width}
              </p>
            `:n}
      </div>
      <lion-accordion class="options">
        ${this.simulatorUrl?o`
              <h3 slot="invoker">
                <button>Settings</button>
              </h3>
              <div slot="content">
                ${this.deviceMode?"":o`<div>
                      Note: Additional settings become available when not in web inline mode
                    </div>`}
                <div class="settings-wrapper">
                  ${this.deviceMode?o`
                        ${this.renderViewport()} ${this.renderVisual()} ${this.renderLocalization()}
                        ${this.renderSyncSettings()}
                      `:o` ${this.renderSyncSettings()} `}
                </div>
              </div>
            `:""}
        <h3 slot="invoker">
          <button>Code</button>
        </h3>
        <div slot="content">
          <slot id="code-slot"></slot>
          <button part="copy-button" @click="${this.onCopy}" ?hidden="${!this.__supportsClipboard}">
            ${this.__copyButtonText}
          </button>
        </div>
      </lion-accordion>
      ${this.simulatorUrl?o`
            <div class="controls">
              <a href=${this.iframeUrl} target="_blank">Open simulation in new window</a>
            </div>
          `:""}
    `}static get styles(){return i`
      :host {
        display: block;
        padding-bottom: 10px;
      }

      :host([device-mode]) slot[name='story'] {
        display: none;
      }

      :host(:not([device-mode])) #wrapper {
        border: 2px solid #4caf50;
      }

      iframe {
        border: 2px solid #4caf50;
        background: #fff;
      }

      [part='copy-button'] {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 9px;
        padding: 7px;
        background: none;
        font-weight: bold;
        color: var(--primary-color, #3f51b5);
        text-align: center;
        font-size: 12px;
        line-height: 12px;
        float: right;
        margin-top: -10px;
      }

      [part='copy-button']:hover {
        background-color: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      .switch {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .switch:focus-within [part='switch-button'] {
        box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 40%), 0 0 0 4px rgb(31 117 203 / 48%);
      }

      [part='switch-button'] {
        display: inline-block;
        width: 44px;
        background: var(--switch-unselected-color, #808080);
        height: 25px;
        border-radius: 15px;
        position: relative;
      }

      [part='switch-button']::after {
        content: ' ';
        width: 18px;
        height: 18px;
        border-radius: 10px;
        background: rgb(255, 255, 255);
        display: block;
        position: absolute;
        top: 3px;
        left: 4px;
      }

      .switch.selected [part='switch-button'] {
        background: var(--switch-selected-color, #42b983);
      }

      .switch.selected [part='switch-button']::after {
        left: auto;
        right: 4px;
      }

      [part='frame-description'] {
        margin: -5px 0 10px 0;
        text-align: right;
        font-size: 12px;
        color: var(--primary-text-color, #2c3e50);
      }

      .settings-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px 40px;
        max-width: 650px;
      }

      @media (min-width: 640px) {
        .settings-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .settings-wrapper h3 {
        margin: 10px 0;
        font-size: 16px;
      }

      .options {
        display: block;
        padding: 15px 0;
      }

      .platform-size-controls {
        display: flex;
        justify-content: flex-start;
      }

      .platform-size-controls > * {
        margin-right: 25px;
      }

      .controls {
        display: flex;
        justify-content: space-between;
      }

      .controls a {
        color: var(--primary-color, #3f51b5);
        font-size: 14px;
        line-height: 37px;
      }

      .simulation-toggle {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 9px;
        padding: 10px;
        background: none;
        font-weight: bold;
        color: var(--primary-color, #3f51b5);
        text-align: center;
      }

      .simulation-toggle:hover {
        background-color: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      h3[slot='invoker'] button {
        font-size: 16px;
        display: block;
        position: relative;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #bbb;
        width: 100%;
        color: var(--primary-text-color, #2c3e50);
        background: none;
        text-align: left;
        font-weight: bold;
      }

      h3[slot='invoker'] button::after {
        content: '>';
        right: 20px;
        top: 10px;
        position: absolute;
        transform: rotate(90deg);
      }

      h3[slot='invoker'][expanded='true'] button::after {
        transform: rotate(-90deg);
      }

      h3[slot='invoker'][expanded='true'] button {
        border-bottom: none;
      }

      .options > [slot='content'] {
        border-bottom: 1px solid #bbb;
        padding: 10px;
      }

      h3[slot='invoker']:first-child button {
        border-top: 1px solid #bbb;
      }

      h4 {
        font-weight: normal;
        font-size: 14px;
        margin: 5px 0;
      }

      .segmented-control {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 18px;
        display: inline-block;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .segmented-control span {
        padding: 5px 10px;
        display: inline-block;
        border-radius: 18px;
        margin: 2px 0;
      }

      .segmented-control label:first-child span {
        margin-left: 2px;
      }

      .segmented-control label:last-child span {
        margin-right: 2px;
      }

      .segmented-control label.selected span {
        background: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      .segmented-control label:focus-within span {
        box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 40%), 0 0 0 4px rgb(31 117 203 / 48%);
      }

      .segmented-control input,
      .switch input {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      select {
        display: block;
        padding: 5px;
        border: 1px solid #333;
        border-radius: 3px;
      }

      /** Showing/Hiding additional code blocks **/
      ::slotted(pre) {
        display: none;
      }

      :host([platform='web']) ::slotted(pre:nth-child(1)) {
        display: block;
      }
      :host([platform='android']) ::slotted(pre:nth-child(2)) {
        display: block;
      }
      :host([platform='ios']) ::slotted(pre:nth-child(3)) {
        display: block;
      }
    `}}customElements.define("mdjs-preview",v);
