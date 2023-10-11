<script setup>
import { ref, watchEffect } from "vue";
import { useQuasar } from "quasar";
import "animate.css";

const $q = useQuasar();

const toggleDarkMode = () => {
  $q.dark.toggle();
};

const toggleMenu = ref(false);
const navList = ["PROJECTS", "CONTACT"];
const mainLogo = ref("/static/logoDarkMode.png");

const openPDF = () => {
  window.open("static/Hamzeh Resume.pdf");
};

watchEffect(() => {
  const isActive = $q.dark.isActive;
  if (isActive) {
    mainLogo.value = "static/logoDarkMode.png";
  } else {
    mainLogo.value = "static/logo.png";
  }
});
</script>

<template>
  <transition appear enter-active-class="animated fadeInDown">
    <div
      class="full-width q-pa-lg fixed"
      :class="$q.dark.isActive ? 'custom-darkmode-navbar' : 'custom-navbar'"
    >
      <div class="gt-sm">
        <div class="row justify-end">
          <div class="row q-mx-md q-mt-sm q-px-md col">
            <img
              class="cursor-pointer"
              width="85"
              height="30"
              :src="mainLogo"
              @click="$router.push('/')"
            />
          </div>
          <div
            class="cursor-pointer"
            :class="$q.dark.isActive ? 'nav-link' : 'nav-link-LM'"
            v-for="nav in navList"
            :key="nav"
            @click="$router.push(`/${nav.toLowerCase()}`)"
          >
            <div class="q-mx-md q-mt-sm q-px-md">
              {{ nav }}
            </div>
          </div>
          <div
            class="pdf-button cursor-pointer q-pa-sm q-mx-md"
            @click="openPDF"
          >
            Resume
          </div>
          <q-icon
            class="q-mt-sm q-ml-md cursor-pointer"
            :class="$q.dark.isActive ? 'text-white' : 'text-black'"
            :name="
              $q.dark.isActive
                ? 'fa-solid fa-circle-half-stroke'
                : 'fa-solid fa-circle-half-stroke fa-rotate-180'
            "
            size="30px"
            @click="toggleDarkMode"
          />
        </div>
      </div>
      <div class="lt-md">
        <div class="row justify-between">
          <div class="row">
            <q-icon
              class="cursor-pointer"
              name="menu"
              size="41px"
              @click="toggleMenu = !toggleMenu"
            />
            <img
              class="cursor-pointer q-ml-lg"
              width="85"
              height="30"
              :src="mainLogo"
              @click="$router.push('/')"
            />
          </div>
          <q-icon
            class="q-mt-sm q-ml-md cursor-pointer"
            :class="$q.dark.isActive ? 'text-white' : 'text-black'"
            :name="
              $q.dark.isActive
                ? 'fa-solid fa-circle-half-stroke'
                : 'fa-solid fa-circle-half-stroke fa-rotate-180'
            "
            size="30px"
            @click="toggleDarkMode"
          />
        </div>
        <transition
          appear
          enter-active-class="animated bounceInDown"
          leave-active-class="animated bounceOutUp"
        >
          <div v-if="toggleMenu" class="text-center menu-contents">
            <div>
              <div
                class="q-pa-lg q-mx-*"
                :class="$q.dark.isActive ? 'nav-link' : 'nav-link-LM'"
                v-for="nav in navList"
                :key="nav"
              >
                <span
                  class="cursor-pointer q-pa-lg"
                  @click="$router.push(`/${nav.toLowerCase()}`)"
                >
                  {{ nav }}
                </span>
              </div>
              <div
                class="pdf-button cursor-pointer q-py-sm q-mx-auto"
                style="width: 100px"
                @click="openPDF"
              >
                Resume
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
