import { boot } from "quasar/wrappers";
import scrollAnimate from "src/directives/scroll-animate";

export default boot(({ app }) => {
  app.directive("scroll-animate", scrollAnimate);
});
