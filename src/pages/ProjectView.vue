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
    case 2.1:
      window.open(
        "https://github.com/hamzehab/unlimiteddrinks-frontend",
        "_blank_"
      );
      break;
    case 2.2:
      window.open(
        "https://github.com/hamzehab/UnlimitedDrinks-Backend",
        "_blank_"
      );
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
      window.open(
        "https://hamzehab.github.io/unlimiteddrinks-frontend/",
        "_blank_"
      );
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
              alt="HTML"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/vue-js.png"
              alt="Vue.js"
            />
            <span class="q-pl-sm">Vue.js</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="/favicon.ico" alt="Quasar" />
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
          <img width="25" height="25" src="static/logos/html.png" alt="HTML" />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/vue-js.png"
            alt="Vue.js"
          />
          <span class="q-pl-sm">Vue.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar" />
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
        <div class="fade-in q-mt-lg">
          My project has been carefully optimized to deliver a seamless user
          experience across devices including mobile and desktop platforms. By
          using a responsive web design, the website dynamically changes its
          layout and style to match a variety of screen sizes, ensuring that it
          looks and works flawlessly on smartphones, tablets, laptops, and
          larger desktop monitors. This thoughtful approach to mobile and
          desktop optimization reflects a commitment to accessibility and
          usability, and demonstrates a commitment to providing a robust user
          experience regardless of the devices used to access the site
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
              alt="HTML"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/php.png" alt="PHP" />
            <span class="q-pl-sm">PHP</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/sql.png" alt="SQL" />
            <span class="q-pl-sm">MySQL</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div class="slide-right">
        <img
          class="fade-in gt-sm"
          src="static/unlimiteddrinks.gif"
          style="width: 900px"
        />
        <img
          class="fade-in lt-md"
          src="static/unlimiteddrinks.gif"
          style="width: 100%"
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
          <img width="25" height="25" src="static/logos/html.png" alt="HTML" />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/vue-js.png"
            alt="Vue.js"
          />
          <span class="q-pl-sm">Vue.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar" />
          <span class="q-pl-sm">Quasar</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div class="fade-in q-mt-lg">
          The Unlimited Drinks E-commerce Website is a groundbreaking online
          platform designed to revolutionize the way students access beverages
          while living on campus. The platform serves as a cost-effective
          alternative to traditional vending machines by allowing students to
          order a variety of beverages, including carbonated drinks, energy
          drinks, juices, and more, in bulk. The convenience factor is further
          elevated by offering door-to-door delivery directly to their
          dormitories.
        </div>
        <div class="fade-in q-mt-lg">
          Key functionalities have been integrated to enhance the overall user
          experience. Auth0 authentication is implemented for user login and
          credentials, ensuring a secure and streamlined process. Users logging
          in with Auth0 are prompted to set up their accounts if they haven't
          done so, ensuring that only authenticated users can access and utilize
          the platform. However, users are free to use the platform without
          creating an account other than when needing to checkout an order.
        </div>
        <div class="fade-in q-mt-lg">
          The payment process is facilitated through the integration of Stripe,
          a secure payment gateway, providing users with a reliable and
          efficient transaction experience. Users have the capability to view
          their order history, edit account information, and manage multiple
          addresses within their accounts. The platform's flexibility is evident
          in the feature that allows users to add or delete addresses as needed.
        </div>
        <div class="fade-in q-mt-lg">
          To maintain the integrity of the review system, the platform enforces
          a one-review-per-item policy. This not only encourages authentic and
          thoughtful reviews but also prevents misuse or spamming of the review
          system.
        </div>
        <div class="fade-in q-mt-lg">
          In conclusion, the Unlimited Drinks E-commerce Website is designed
          with a focus on user convenience, security, and satisfaction. Its
          features and practices make it a reliable and user-friendly platform
          for on-campus beverage needs, and its commitment to continuous
          improvement ensures it stays at the forefront of innovation in the
          e-commerce space.
        </div>
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
          >
            View Source Code
            <q-menu
              class="bg-dark text-white text-body1 text-center"
              style="width: 175px"
              transition-show="jump-down"
              transition-hide="jump-up"
              :offset="[0, 15]"
            >
              <q-list>
                <q-item clickable v-close-popup @click="sourceCode(2.1)">
                  <q-item-section>Frontend</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup @click="sourceCode(2.2)">
                  <q-item-section>Backend</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
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
              alt="HTML"
            />
            <span class="q-pl-sm">HTML</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
            <span class="q-pl-sm">CSS</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/php.png" alt="PHP" />
            <span class="q-pl-sm">PHP</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/sql.png" alt="SQL" />
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
          <img width="25" height="25" src="static/logos/html.png" alt="HTML" />
          <span class="q-pl-sm">HTML</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/css.png" alt="CSS" />
          <span class="q-pl-sm">CSS</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/php.png" alt="PHP" />
          <span class="q-pl-sm">PHP</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/sql.png" alt="SQL" />
          <span class="q-pl-sm">MySQL</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div class="fade-in q-mt-lg">
          The Shuttlebus System stands as a collaborative achievement, developed
          by a dedicated team of six individuals for a university project. This
          comprehensive application addresses the transportation needs of
          students, faculty, and campus visitors, offering an intuitive
          interface that displays real-time information on bus routes, current
          bus positions, and estimated time of arrival (ETA). The project also
          encompasses an administrative portal tailored to the needs of bus
          drivers.
        </div>
        <div class="fade-in q-mt-lg">
          On the user side, the application provides a user-friendly display of
          bus routes, showcasing live bus positions and accurate ETAs. This
          real-time tracking functionality enhances user convenience and
          facilitates efficient commute planning. Important announcements
          related to bus schedules or campus events are seamlessly integrated,
          ensuring users receive timely notifications.
        </div>
        <div class="fade-in q-mt-lg">
          For administrators, bus drivers access a secure login to initiate and
          update their routes, contributing to the overall efficiency of the
          shuttle system. The ability for drivers to update their live locations
          ensures users have access to the most current information.
          Additionally, the announcement feature enables drivers to communicate
          important information directly to users through the application.
        </div>
        <div class="fade-in q-mt-lg">
          A significant feature of the system is the inclusion of a maintenance
          request functionality. This empowers users to submit maintenance
          requests directly through the application, streamlining the process
          for addressing issues and ensuring the continual reliability of the
          shuttle service. This user-driven approach enhances overall user
          experience and contributes to the efficient management of the shuttle
          system.
        </div>
        <div class="fade-in q-mt-lg">
          The collaborative effort of the team, consisting of six members, is
          evident in the seamless integration of user and administrative
          functionalities. The Shuttlebus System not only simplifies
          transportation logistics for the campus community but also offers a
          user-centric approach with features designed to enhance communication,
          efficiency, and maintenance processes. This project serves as a
          testament to the team's ability to address real-world challenges with
          innovative solutions, showcasing their skills in system design and
          collaborative development.
        </div>
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
