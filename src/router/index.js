import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // ...

  // This callback runs before every route change, including on page load.
  Router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
      (el) => el.parentNode.removeChild(el)
    );

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute("data-vue-router-controlled", "");

        return tag;
      })
      // Add the meta tags to the document head.
      .forEach((tag) => document.head.appendChild(tag));

    next();
  });

  // ...

  return Router;
});
