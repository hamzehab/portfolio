<script setup>
import { ref, watchEffect, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

const tabs = ["lang", "lib", "dev"];
const tab = ref(tabs[0]);

const switchTab = () => {
  const currentIndex = tabs.indexOf(tab.value);
  const nextIndex = (currentIndex + 1) % tabs.length;
  tab.value = tabs[nextIndex];
};

let intervalID = setInterval(switchTab, 10000);
const pauseAutoplay = () => clearInterval(intervalID);
const resumeAutoplay = () => {
  intervalID = setInterval(switchTab, 10000);
};

onBeforeUnmount(pauseAutoplay);

const logos = {
  Languages: [
    {
      src: "static/logos/html.png",
      alt: "HTML",
    },
    {
      src: "static/logos/css.png",
      alt: "CSS",
    },
    {
      src: "static/logos/python.png",
      alt: "Python",
    },
    {
      src: "static/logos/sql.png",
      alt: "SQL",
    },
    {
      src: "static/logos/postgresql.png",
      alt: "PostgreSQL",
    },
    {
      src: "static/logos/javascript.png",
      alt: "JavaScript",
    },
    {
      src: "static/logos/php.png",
      alt: "PHP",
    },
    {
      src: "static/logos/java.png",
      alt: "Java",
    },
    {
      src: "static/logos/c.png",
      alt: "C",
    },
    {
      src: "static/logos/typescript.png",
      alt: "TypeScript",
    },
  ],
  "Frameworks & Libraries": [
    {
      src: "static/logos/vue-js.png",
      alt: "Vue.js",
    },
    { src: "/favicon.ico", alt: "Quasar" },
    {
      src: "",
      alt: "Flask",
    },
    {
      src: "static/logos/FastAPI.png",
      alt: "FastAPI",
    },
    {
      src: "static/logos/react.png",
      alt: "React",
    },
    {
      src: "static/logos/nextjs.png",
      alt: "Next.js",
    },
    {
      src: "static/logos/tailwindcss.png",
      alt: "Tailwind CSS",
    },
    {
      src: "static/logos/partykit.png",
      alt: "PartyKit",
    },
    {
      src: "static/logos/websockets.png",
      alt: "WebSockets",
    },
  ],
  "Developer Tools": [
    {
      src: "static/logos/git.png",
      alt: "Git",
    },
    {
      src: "",
      alt: "Github",
    },
    {
      src: "static/logos/docker.png",
      alt: "Docker",
    },
    {
      src: "static/logos/jupyter.png",
      alt: "Jupyter Notebook",
    },
    {
      src: "static/logos/vsCode.png",
      alt: "VS Code",
    },
    {
      src: "static/logos/vitest.svg",
      alt: "Vitest",
    },
  ],
};

watchEffect(() => {
  const isActive = $q.dark.isActive;
  if (isActive) {
    logos["Frameworks & Libraries"][2].src = "static/logos/flaskDM.png";
    logos["Developer Tools"][1].src =
      "static/socials/github/githubDarkMode.png";
  } else {
    logos["Frameworks & Libraries"][2].src = "static/logos/flask.png";
    logos["Developer Tools"][1].src = "static/socials/github/github.png";
  }
});
</script>

<template>
  <div
    class="skill"
    v-scroll-animate="{ enter: 'slideInLeft', speed: 'fast', rootMargin: '-50px' }"
  >
    <div
      class="text-weight-bolder text-center text-h5 q-pt-xl"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      <q-icon name="construction" />Technologies I have experience with ...
    </div>

    <div
      class="q-mx-xl q-my-md"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        :active-color="$q.dark.isActive ? 'deep-purple' : 'indigo'"
        :indicator-color="$q.dark.isActive ? 'deep-purple' : 'indigo'"
        align="justify"
        narrow-indicator
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
      >
        <q-tab class="q-py-sm" name="lang" label="Languages" />
        <q-tab class="q-py-sm" name="lib" label="Frameworks & Libraries" />
        <q-tab class="q-py-sm" name="dev" label="Developer Tools" />
      </q-tabs>
      <q-tab-panels
        class="q-py-lg"
        :class="$q.dark.isActive ? '' : 'bg-grey-2'"
        style="
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        "
        v-model="tab"
        animated
      >
        <q-tab-panel name="lang" class="row justify-evenly">
          <div v-for="(logo, index) in logos.Languages" :key="index">
            <q-img
              class="q-mx-sm"
              style="width: 96px; height: 96px"
              :src="logo.src"
              :alt="logo.alt"
              loading="lazy"
              decoding="async"
            />
            <div class="q-mt-md text-center">
              <q-badge
                class="q-pa-sm"
                rounded
                :color="$q.dark.isActive ? 'deep-purple' : 'indigo'"
              >
                {{ logo.alt }}
              </q-badge>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="lib" class="row justify-evenly">
          <div
            v-for="(logo, index) in logos['Frameworks & Libraries']"
            :key="index"
          >
            <q-img
              class="q-mx-sm"
              style="width: 96px; height: 96px"
              :src="logo.src"
              :alt="logo.alt"
              loading="lazy"
              decoding="async"
            />
            <div class="q-mt-md text-center">
              <q-badge
                class="q-pa-sm"
                rounded
                :color="$q.dark.isActive ? 'deep-purple' : 'indigo'"
              >
                {{ logo.alt }}
              </q-badge>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="dev" class="row justify-evenly">
          <div v-for="(logo, index) in logos['Developer Tools']" :key="index">
            <q-img
              class="q-mx-sm"
              style="width: 96px; height: 96px"
              :src="logo.src"
              :alt="logo.alt"
              loading="lazy"
              decoding="async"
            />
            <div class="q-mt-md text-center">
              <q-badge
                class="q-pa-sm"
                rounded
                :color="$q.dark.isActive ? 'deep-purple' : 'indigo'"
              >
                {{ logo.alt }}
              </q-badge>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
