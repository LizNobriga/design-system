import"./dd2844ec.js";import{p as e}from"./6188f9dd.js";const o=()=>e`
  <cagov-accordion>
    <div class="cagov-accordion-card">
      <button class="accordion-card-header accordion-alpha" type="button" aria-expanded="false">
        <div class="accordion-title">Lorem ipsum</div>
        <div class="plus-minus">
          <cagov-plus></cagov-plus>
          <cagov-minus></cagov-minus>
        </div>
      </button>
      <div class="accordion-card-container" aria-hidden=" true" style="height: 0px;">
        <div class="card-body">
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
        </div>
      </div>
    </div>
  </cagov-accordion>`,a=document,i=[{key:"demo",story:o}];let c=!1;for(const e of i){const o=a.querySelector(`[mdjs-story-name="${e.key}"]`);o&&(o.story=e.story,o.key=e.key,c=!0,Object.assign(o,{}))}c&&(customElements.get("mdjs-preview")||import("./e0bbf46b.js"),customElements.get("mdjs-story")||import("./0603282e.js"));export{o as demo};
