import type { App } from 'vue';
import { articleItemAnimate } from './articleItemAnimate';
const directives = (app: App<Element>) => {
  app.directive('articleItemAnimate', articleItemAnimate);
};
export default directives;
