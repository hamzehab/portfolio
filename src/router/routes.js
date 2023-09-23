import LandingPage from "pages/IndexPage.vue";
import ContactMe from "pages/ContactView.vue";
import WorkExperience from "pages/ExperienceView.vue";
import ProjectView from "pages/ProjectView.vue";
import EducationView from "pages/EducationView.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
    meta: {
      title: "Meet Hamzeh!",
    },
  },
  {
    path: "/contact",
    component: ContactMe,
    meta: {
      title: "Contact Me",
    },
  },
  {
    path: "/experience",
    component: WorkExperience,
    meta: {
      title: "Work Experience",
    },
  },
  {
    path: "/projects",
    component: ProjectView,
    meta: {
      title: "Projects",
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
