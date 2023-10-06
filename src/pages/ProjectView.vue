<script setup>
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";
</script>

<template>
  <NavBar />
  <div style="padding-bottom: 15rem" />

  <div class="row justify-evenly items-center q-mx-xl">
    <div>
      <q-skeleton width="1000px" height="600px" square />
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
      <q-skeleton width="1000px" height="600px" square />
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
