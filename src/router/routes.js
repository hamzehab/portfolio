const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
    meta: {
      title: "Meet Hamzeh!",
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
    path: "/projects",
    children: [
      {
        path: "",
        component: () => import("pages/ProjectView.vue"),
        meta: {
          title: "Projects",
        },
      },
      // {
      //   path: "Project1",
      //   component: () => import("pages/ProjectView.vue"),
      //   meta: {
      //     title: "Projects",
      //   },
      // },
      // {
      //   path: "Project2",
      //   component: () => import("pages/ProjectView.vue"),
      //   meta: {
      //     title: "Projects",
      //   },
      // }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
];

export default routes;
