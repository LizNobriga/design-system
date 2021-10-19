/** script code **/
import '../../../../components/pagination/dist/index.js';
import { html } from 'lit-html';
/** stories code **/
export const demo = () => html`
  <cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>`;
/** stories setup code **/
const rootNode = document;
const stories = [{ key: 'demo', story: demo }];
let needsMdjsElements = false;
for (const story of stories) {
  const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
  if (storyEl) {
    storyEl.story = story.story;
    storyEl.key = story.key;
    needsMdjsElements = true;
    Object.assign(storyEl, {});
  }
};
if (needsMdjsElements) {
  if (!customElements.get('mdjs-preview')) { import('@mdjs/mdjs-preview/define'); }
  if (!customElements.get('mdjs-story')) { import('@mdjs/mdjs-story/define'); }
}