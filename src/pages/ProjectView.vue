<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";

const $q = useQuasar();

function sourceCode(project_id) {
  switch (project_id) {
    case 1:
      window.open(
        "https://github.com/hamzehab/portfolio/tree/source",
        "_blank"
      );
      break;
    case 2:
      window.open("https://github.com/hamzehab/CSIT337-Project", "_blank_");
      break;
    case 3:
      window.open("https://github.com/hamzehab/ShuttleBus", "_blank_");
      break;
  }
}

function liveDemo(project_id) {
  switch (project_id) {
    case 1:
      window.open("https://hamzehab.github.io/portfolio/", "_blank");
      break;
    case 2:
      window.open("", "_blank_");
      break;
  }
}

onMounted(() => {
  const slideLeft = document.querySelectorAll(".slide-left");
  const slideRight = document.querySelector(".slide-right");
  const fadeIn = document.querySelectorAll(".fade-in");

  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("slideInLeft", entry.isIntersecting);
      entry.target.classList.toggle("faster", entry.isIntersecting);
      if (entry.isIntersecting) observerLeft.unobserve(entry.target);
    });
  });

  const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("slideInRight", entry.isIntersecting);
      entry.target.classList.toggle("faster", entry.isIntersecting);
      if (entry.isIntersecting) observerRight.unobserve(entry.target);
    });
  });

  const observerFade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("fadeIn", entry.isIntersecting);
      entry.target.classList.toggle("slower", entry.isIntersecting);
      if (entry.isIntersecting) observerFade.unobserve(entry.target);
    });
  });

  slideLeft.forEach((animation) => {
    observerLeft.observe(animation);
  });

  observerRight.observe(slideRight);

  fadeIn.forEach((animation) => {
    observerFade.observe(animation);
  });
});
</script>

<template>
  <NavBar />
  <div style="padding-bottom: 10rem" />

  <div class="row justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" class="fade-in q-mb-sm text-center">
        <span class="text-h5 text-bold">Portfolio Website</span>
        <q-breadcrumbs
          separator="|"
          class="fade-in flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/html.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/css.png"
              alt="CSS Logo"
            />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/vue-js.png"
              alt="Vue Logo"
            />
            <span class="q-pl-sm">Vue.js</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
            <span class="q-pl-sm">Quasar</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div class="slide-left">
        <img
          class="fade-in gt-sm"
          src="static/portfolio.gif"
          style="width: 900px"
        />
        <img
          class="fade-in lt-md"
          src="static/portfolio.gif"
          style="width: 100%"
        />
        <div class="fade-in text-center text-caption text-grey-8 q-my-md">
          Figure 1: Portfolio Website Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile" class="fade-in text-h5 text-bold">
        Portfolio Website
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        class="fade-in text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/html.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/css.png"
            alt="CSS Logo"
          />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/vue-js.png"
            alt="Vue Logo"
          />
          <span class="q-pl-sm">Vue.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
          <span class="q-pl-sm">Quasar</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div class="fade-in">
          My personal website, the centerpiece of my portfolio, serves as a
          canvas to express myself digitally by displaying my personality and
          showcasing my skills and experiences. It is a platform, a place where
          I share my growth as a human being and journey as a software engineer.
        </div>
        <div class="fade-in q-my-lg">
          Before the process of development and producing any code, I needed to
          choose a tech stack that would enable me to create a modern and
          immersive user experience. The primary tools in this stack are Vue.js
          where it was chosen for its simplicity and versatility. Furthermore
          Quasar, built on top of Vue.js, extends my development capabilities
          further by providing a rich set of pre-built UI components, custom CSS
          styling, and a responsive design system. Not only are these great
          tools to flesh out a website but they are also most familiar to me
          honed through my current role as a software engineer.
        </div>
        <div class="fade-in">
          The journey of creating my personal website presented several
          technical challenges, each of which contributed to my growth as a
          developer. One particularly intriguing challenge involved implementing
          viewport-based animations. I aimed to enhance user engagement by
          triggering animations only when elements entered the viewport.
          Achieving this effect required a deep dive into Vue.js directives and
          the utilization of Intersection Observer APIs. Navigating the
          complexities of scroll events and element visibility checks demanded a
          meticulous approach. However, these challenges, though technically
          demanding, ultimately led to the creation of a website that offers a
          captivating and seamless user experience, exemplifying my dedication
          to pushing the boundaries of web development.
        </div>

        <q-breadcrumbs
          separator="|"
          class="fade-in flex flex-center text-body1 text-weight-medium q-mt-xl"
          active-color=""
        >
          <q-breadcrumbs-el
            :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
          >
            <span
              :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
              @click="liveDemo(1)"
            >
              View Live Demo Here
            </span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el
            :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
          >
            <span
              :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
              class="q-pr-sm"
              @click="sourceCode(1)"
            >
              View Source Code
            </span>
            <img
              width="25"
              height="25"
              :src="
                $q.dark.isActive
                  ? 'static/socials/github/githubDarkMode.png'
                  : 'static/socials/github/github.png'
              "
              alt="GitHub"
            />
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
    </div>
  </div>
  <div class="gt-lg" style="padding-bottom: 8rem" />
  <div class="lt-xl" style="padding-bottom: 3rem" />
  <div class="row reverse justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" class="fade-in q-mb-sm text-center">
        <div class="text-h5 text-bold">Unlimited Drinks</div>
        <div class="text-caption">E-commerce Website</div>
        <q-breadcrumbs
          separator="|"
          class="fade-in flex-flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/html.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/css.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/vue-js.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">PHP</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
            <span class="q-pl-sm">MySQL</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div class="slide-right">
        <q-skeleton
          class="fade-in"
          :style="$q.platform.is.mobile ? 'width: 100%' : 'width: 900px'"
          height="600px"
          square
        />
        <div class="fade-in text-center text-caption text-grey-8 q-my-md">
          Figure 2: Unlimited Drinks Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div class="fade-in text-h5 text-bold">Unlimited Drinks</div>
        <div class="fade-in text-caption">E-commerce Website</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        class="fade-in text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/html.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/css.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/vue-js.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">PHP</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
          <span class="q-pl-sm">MySQL</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="fade-in text-body1 text-weight-medium">
        The Unlimited Drinks E-commerce Website is an innovative online platform
        designed to revolutionize the way students access beverages while living
        on campus. It offers a cost-effective alternative to vending machines by
        allowing students to order a variety of beverages, including carbonated
        drinks, energy drinks, juices, and more, in bulk and have them
        conveniently delivered to their dormitory doors.
      </div>
      <q-breadcrumbs
        separator="|"
        class="fade-in flex flex-center text-body1 text-weight-medium q-mt-xl"
        active-color=""
      >
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            @click="liveDemo(2)"
          >
            View Live Demo Here
          </span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            class="q-pr-sm"
            @click="sourceCode(2)"
          >
            View Source Code
          </span>
          <img
            width="25"
            height="25"
            :src="
              $q.dark.isActive
                ? 'static/socials/github/githubDarkMode.png'
                : 'static/socials/github/github.png'
            "
            alt="GitHub"
          />
        </q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
  </div>
  <div class="gt-lg" style="padding-bottom: 8rem" />
  <div class="lt-xl" style="padding-bottom: 3rem" />
  <div class="row justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" class="fade-in q-mb-sm text-center">
        <div class="text-h5 text-bold">ShuttleBus</div>
        <q-breadcrumbs
          separator="|"
          class="fade-in flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/html.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/css.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/vue-js.png"
              alt="HTML Logo"
            />
            <span class="q-pl-sm">PHP</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
            <span class="q-pl-sm">MySQL</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>

      <div class="slide-left">
        <img
          class="fade-in gt-sm"
          style="width: 900px"
          src="static/shuttlebus.png"
        />
        <img
          class="fade-in lt-md"
          style="width: 100%; max-width: 100%"
          src="static/shuttlebus.png"
        />
        <div class="fade-in text-center text-caption text-grey-8 q-my-md">
          Figure 3: ShuttleBus Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div class="fade-in text-h5 text-bold">ShuttleBus</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        class="fade-in text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/html.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/css.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/vue-js.png"
            alt="HTML Logo"
          />
          <span class="q-pl-sm">PHP</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
          <span class="q-pl-sm">MySQL</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="fade-in text-body1 text-weight-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
        laoreet non curabitur gravida arcu ac tortor. Sit amet risus nullam eget
        felis eget nunc lobortis mattis. Neque viverra justo nec ultrices dui
        sapien eget. Nibh sit amet commodo nulla. Id diam vel quam elementum.
        Orci ac auctor augue mauris augue. Massa tempor nec feugiat nisl pretium
        fusce id velit. Pretium nibh ipsum consequat nisl vel pretium. Fermentum
        iaculis eu non diam phasellus vestibulum.
      </div>
      <q-breadcrumbs
        separator="|"
        class="fade-in flex flex-center text-body1 text-weight-medium q-mt-xl"
        active-color=""
      >
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            class="q-pr-sm"
            @click="sourceCode(3)"
          >
            View Source Code
          </span>
          <img
            width="25"
            height="25"
            :src="
              $q.dark.isActive
                ? 'static/socials/github/githubDarkMode.png'
                : 'static/socials/github/github.png'
            "
            alt="GitHub"
          />
        </q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
  </div>
  <div style="padding-bottom: 3rem" />

  <FooterComponent />
</template>
