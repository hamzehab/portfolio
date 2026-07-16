const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
    meta: {
      title: "Hamzeh Abdallah | Projects",
    },
  },
  {
    path: "/about",
    component: () => import("pages/AboutView.vue"),
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/contact",
    component: () => import("pages/ContactView.vue"),
    meta: {
      title: "Contact Me",
    },
  },
  {
    path: "/experience",
    component: () => import("pages/ExperienceView.vue"),
    meta: {
      title: "Experience",
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
];

export default routes;
