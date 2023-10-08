<script setup>
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";
</script>

<template>
  <NavBar />
  <div style="padding-bottom: 15rem" />

  <div class="row justify-evenly items-center q-mx-xl">
    <div>
      <img src="static/portfolio.gif" style="width: 1200px" />
      <div class="text-center text-caption text-grey-8 q-my-md">
        Figure 1: Portfolio Website Preview
      </div>
    </div>
    <div style="width: 1000px">
      <div class="text-h4 text-bold">Portfolio Website</div>
      <q-breadcrumbs
        separator="|"
        class="text-body1 text-bold q-my-md"
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
          <span class="q-pl-sm">Vue.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="/favicon.ico" alt="Quasar Logo" />
          <span class="q-pl-sm">Quasar</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-h6 text-weight-regular">
        <div>
          My personal website, the centerpiece of my portfolio, serves as a
          canvas to express myself digitally by displaying my personality and
          showcasing my skills and experiences. It is a platform, a place where
          I share my growth as a human being and journey as a software engineer.
        </div>
        <div class="q-my-lg">
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
        <div>
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
      </div>
    </div>
  </div>
  <div class="gt-lg" style="padding-bottom: 15rem" />
  <div class="lt-xl" style="padding-bottom: 8rem" />
  <div class="row reverse justify-evenly items-center q-mx-xl">
    <div>
      <q-skeleton width="1000px" height="600px" square />
      <div class="text-center text-caption text-grey-8 q-my-md">
        Figure 2: Unlimited Drinks Preview
      </div>
    </div>
    <div style="width: 1000px">
      <div class="text-h4 text-bold">Unlimited Drinks</div>
      <div class="text-caption">E-commerce Website</div>
      <q-breadcrumbs
        separator="|"
        class="text-body1 text-bold q-my-md"
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
      <div class="text-h6 text-weight-regular">
        The Unlimited Drinks E-commerce Website is an innovative online platform
        designed to revolutionize the way students access beverages while living
        on campus. It offers a cost-effective alternative to vending machines by
        allowing students to order a variety of beverages, including carbonated
        drinks, energy drinks, juices, and more, in bulk and have them
        conveniently delivered to their dormitory doors.
      </div>
    </div>
  </div>
  <div class="gt-lg" style="padding-bottom: 15rem" />
  <div class="lt-xl" style="padding-bottom: 8rem" />
  <div class="row justify-evenly items-center q-mx-xl">
    <div>
      <img height="600px" src="static/shuttlebus.png" />
      <div class="text-center text-caption text-grey-8 q-my-md">
        Figure 3: ShuttleBus Preview
      </div>
    </div>
    <div style="width: 1000px">
      <div class="text-h6 text-weight-regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
        laoreet non curabitur gravida arcu ac tortor. Sit amet risus nullam eget
        felis eget nunc lobortis mattis. Neque viverra justo nec ultrices dui
        sapien eget. Nibh sit amet commodo nulla. Id diam vel quam elementum.
        Orci ac auctor augue mauris augue. Massa tempor nec feugiat nisl pretium
        fusce id velit. Pretium nibh ipsum consequat nisl vel pretium. Fermentum
        iaculis eu non diam phasellus vestibulum.
      </div>
    </div>
  </div>
  <div style="padding-bottom: 15rem" />

  <FooterComponent />
</template>
