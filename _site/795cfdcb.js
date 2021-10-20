import{p as a}from"./6188f9dd.js";function n(a,n){return`<li class="cagov-pagination__item">\n    <a\n      href="javascript:void(0);"\n      class="cagov-pagination__button"\n      aria-label="${a} ${n}"\n      data-page-num="${n}"\n    >\n      ${n}\n    </a>\n  </li>`}class t extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(a)}}connectedCallback(){this.currentPage=parseInt(this.dataset.currentPage?this.dataset.currentPage:"1"),this.render()}render(){let a=this.dataset.previous?this.dataset.previous:"&#60;",t=this.dataset.next?this.dataset.next:"&#62;",e=this.dataset.page?this.dataset.page:"Page";this.totalPages=this.dataset.totalPages?this.dataset.totalPages:"1";let i=function(a,t,e,i,o){return`<nav aria-label="Pagination" class="cagov-pagination">\n    <ul class="cagov-pagination__list">\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__previous-page"\n          aria-label="${t} ${e}"\n        >\n          <span class="cagov-pagination__link-text ${i>2?"":"cagov-pagination__link-inactive"}"> ${t} </span>\n        </a>\n      </li>\n      ${i>2?n(e,1):""}\n\n      ${i>3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${i>1?n(e,i-1):""}\n\n      <li class="cagov-pagination__item cagov-pagination-current">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__button"\n          aria-label="Page ${i}"\n          aria-current="page"\n          data-page-num="${i}"\n        >\n          ${i}\n        </a>\n      </li>\n\n      ${i<o?n(e,i+1):""}\n\n      ${i<o-3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${i<o-1?n(e,o):""}\n\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__next-page"\n          aria-label="${a} ${e}"\n        >\n          <span class="cagov-pagination__link-text ${i>o-1?"cagov-pagination__link-inactive":""}"> ${a} </span>\n        </a>\n      </li>\n    </ul>\n  </nav>`}(t,a,e,this.currentPage,this.totalPages);this.innerHTML=i,this.applyListeners()}static get observedAttributes(){return["data-current-page","data-total-pages"]}attributeChangedCallback(a,n,t){"data-current-page"===a&&(this.currentPage=parseInt(t),this.render())}applyListeners(){this.querySelectorAll(".cagov-pagination__button").forEach(function(a){a.addEventListener("click",(a=>{this.currentPage=parseInt(a.target.dataset.pageNum),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage}))}.bind(this)),this.querySelector(".cagov-pagination__previous-page").addEventListener("click",(a=>{a.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage--,this.currentPage<1&&(this.currentPage=1),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)})),this.querySelector(".cagov-pagination__next-page").addEventListener("click",(a=>{a.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage++,this.currentPage>this.totalPages&&(this.currentPage=this.totalPages),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)}))}}window.customElements.define("cagov-pagination",t);const e=document.createElement("style");e.textContent="cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: 1px solid #EDEDEF;\n  border-radius: 0.3rem;\n  margin: 0.25rem;\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-color, #064E66);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item:hover {\n  background: #F9F9FA;\n}\ncagov-pagination .cagov-pagination__item:hover a {\n  text-decoration: underline;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #064E66;\n  background-color: var(--primary-color, #064E66);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: #fff;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(e);const i=()=>a`
  <cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>`,o=document,r=[{key:"demo",story:i}];let s=!1;for(const a of r){const n=o.querySelector(`[mdjs-story-name="${a.key}"]`);n&&(n.story=a.story,n.key=a.key,s=!0,Object.assign(n,{}))}s&&(customElements.get("mdjs-preview")||import("./e0bbf46b.js"),customElements.get("mdjs-story")||import("./0603282e.js"));export{i as demo};
