<script setup>
import { ref, watchEffect } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const hover = ref(null);
const mainLogo = ref("static/images/bropic.jpg");

const socials = ref([
  { src: "static/socials/instagram/ig.png", alt: "Instagram" },
  { src: "static/socials/github/githubDarkMode.png", alt: "GitHub" },
  {
    src: "static/socials/linkedin/linkedinDarkMode.png",
    alt: "LinkedIn",
  },
  { src: "static/socials/gmail/gmailDarkMode.png", alt: "Gmail" },
]);

const colorIcons = (name, isHovered) => {
  const index = socials.value.findIndex((social) => social.alt === name);
  if (isHovered) {
    hover.value = name;
    if (index == 0) {
      socials.value[index].src = "static/socials/instagram/igColor.png";
    } else {
      socials.value[
        index
      ].src = `static/socials/${name.toLowerCase()}/${name.toLowerCase()}Color.png`;
    }
  } else {
    hover.value = null;
    const isActive = $q.dark.isActive;
    if (index == 0) {
      socials.value[index].src = isActive
        ? "static/socials/instagram/igDarkMode.png"
        : "static/socials/instagram/ig.png";
    } else {
      socials.value[index].src = isActive
        ? `static/socials/${name.toLowerCase()}/${name.toLowerCase()}DarkMode.png`
        : `static/socials/${name.toLowerCase()}/${name.toLowerCase()}.png`;
    }
  }
};

const redirect = (platform) => {
  switch (platform) {
    case "Instagram":
      window.open("https://www.instagram.com/hazmeh_/", "_blank");
      break;
    case "GitHub":
      window.open("https://github.com/hamzehab", "_blank_");
      break;
    case "LinkedIn":
      window.open("https://www.linkedin.com/in/hamzeh-abdallah/", "_blank_");
      break;
    case "Gmail":
      window.location.href = "mailto:hamzehhabdallah@gmail.com";
      break;
  }
};

watchEffect(() => {
  const isActive = $q.dark.isActive;

  if (isActive) {
    socials.value[0].src = "static/socials/instagram/igDarkMode.png";
    socials.value[1].src = "static/socials/github/githubDarkMode.png";
    socials.value[2].src = "static/socials/linkedin/linkedinDarkMode.png";
    socials.value[3].src = "static/socials/gmail/gmailDarkMode.png";
    mainLogo.value = "static/logoDarkMode.png";
  } else {
    socials.value[0].src = "static/socials/instagram/ig.png";
    socials.value[1].src = "static/socials/github/github.png";
    socials.value[2].src = "static/socials/linkedin/linkedin.png";
    socials.value[3].src = "static/socials/gmail/gmail.png";
    mainLogo.value = "static/logo.png";
  }
});
</script>

<template>
  <q-separator />
  <div
    class="gt-xs q-pa-xl"
    :class="$q.dark.isActive ? 'bg-black' : 'bg-grey-2'"
  >
    <q-breadcrumbs class="row justify-center text-h3">
      <template v-slot:separator>
        <q-icon size="1.2em" name="horizontal_rule" />
      </template>
      <q-breadcrumbs-el
        class="cursor-pointer"
        v-for="social in socials"
        :key="social"
        @click="redirect(social.alt)"
      >
        <div
          @mouseover="colorIcons(social.alt, true)"
          @mouseleave="colorIcons(social.alt, false)"
        >
          <img class="q-mb-lg" :src="social.src" :alt="social.alt" />
        </div>
        <div
          v-if="hover === social.alt"
          class="text-center text-bold absolute-bottom text-body2"
          :class="$q.dark.isActive ? 'text-white' : 'text-black'"
        >
          {{ hover }}
        </div>
      </q-breadcrumbs-el>
    </q-breadcrumbs>
    <div class="flex flex-center">
      <img
        class="cursor-pointer"
        width="170"
        height="60"
        :src="mainLogo"
        @click="$router.push('/')"
      />
    </div>
    <div class="row justify-between text-weight-medium text-body1">
      <div class="q-mt-md">
        <span
          class="q-mx-xl cursor-pointer"
          @click="$router.push('/experience')"
        >
          EXPERIENCE
        </span>
        <span class="cursor-pointer" @click="$router.push('/projects')">
          PROJECTS
        </span>
      </div>
      <div class="row q-mx-xl">
        <span
          class="cursor-pointer q-mt-md q-mr-lg"
          @click="$router.push('/contact')"
        >
          CONTACT ME
        </span>
      </div>
    </div>
  </div>
  <div
    class="lt-sm q-pa-xl"
    :class="$q.dark.isActive ? 'bg-black' : 'bg-grey-2'"
  >
    <div v-for="social in socials" :key="social" class="row justify-around">
      <div>
        <img
          @click="redirect(social.alt)"
          @mouseover="colorIcons(social.alt, true)"
          @mouseleave="colorIcons(social.alt, false)"
          class="cursor-pointer"
          :src="social.src"
          :alt="social.alt"
        />
      </div>
    </div>
    <div class="text-weight-medium text-body1 q-py-lg">
      <div class="text-center">
        <div
          class="cursor-pointer q-my-md"
          @click="$router.push('/experience')"
        >
          EXPERIENCE
        </div>
        <div class="cursor-pointer q-my-md" @click="$router.push('/projects')">
          PROJECTS
        </div>
        <div class="cursor-pointer q-my-md" @click="$router.push('/contact')">
          CONTACT
        </div>
      </div>
    </div>
    <div class="flex flex-center">
      <img
        class="cursor-pointer"
        width="170"
        height="60"
        :src="mainLogo"
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>
