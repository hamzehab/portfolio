<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";
import SkillLogos from "components/SkillLogos.vue";
import TypeAnimation from "components/TypeAnimation.vue";

import "animate.css";

const $q = useQuasar();

// Preview media for these projects hasn't been added yet.
// Falls back to a placeholder if the image 404s; swap to the real file
// under the same static/ path and this switches over automatically.
const tungeMediaMissing = ref(false);
const couchPotatoMediaMissing = ref(false);
const valorantMediaMissing = ref(false);

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
    case 4:
      window.open("https://github.com/hamzehab/tunge", "_blank_");
      break;
    case 5:
      window.open("https://github.com/hamzehab/idle_spiral", "_blank_");
      break;
    case 6:
      window.open(
        "https://github.com/hamzehab/valorant_true_stretch",
        "_blank_"
      );
      break;
  }
}

function liveDemo(project_id) {
  switch (project_id) {
    case 1:
      window.open("https://hamzehab.github.io/portfolio/", "_blank");
      break;
    case 2:
      window.open("https://hamzehab.github.io/unlimiteddrinks/#/", "_blank_");
      break;
  }
}
</script>

<template>
  <NavBar />

  <TypeAnimation />

  <SkillLogos />

  <div class="q-mx-md q-pt-xl">
    <div
      v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }" class="gt-xs text-weight-bolder text-h4 q-pb-md"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      My Projects
    </div>
    <div
      v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }" class="lt-sm text-center text-weight-bolder text-h4 q-pb-md"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      My Projects
    </div>
    <q-separator />
  </div>

  <div style="padding-bottom: 5rem" />

  <!-- Tunge -->
  <div class="row justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <div class="text-h5 text-bold">Tunge</div>
        <div class="text-caption">Real-Time Online Card Game</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/typescript.png" alt="TypeScript" />
            <span class="q-pl-sm">TypeScript</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/nextjs.png" alt="Next.js" />
            <span class="q-pl-sm">Next.js</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/react.png" alt="React Native" />
            <span class="q-pl-sm">React Native</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/partykit.png" alt="PartyKit" />
            <span class="q-pl-sm">PartyKit</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInLeft', speed: 'faster' }">
        <template v-if="!tungeMediaMissing">
          <img
            class="gt-sm shadow-3"
            src="static/tunge.gif"
            style="width: 900px; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="tungeMediaMissing = true"
          />
          <img
            class="lt-md shadow-3"
            src="static/tunge.gif"
            style="width: 100%; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="tungeMediaMissing = true"
          />
        </template>
        <template v-else>
          <div
            class="gt-sm flex flex-center text-center text-grey-6"
            style="
              width: 900px;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
          <div
            class="lt-md flex flex-center text-center text-grey-6"
            style="
              width: 100%;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
        </template>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 1: Tunge Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">Tunge</div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-caption">Real-Time Online Card Game</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/typescript.png" alt="TypeScript" />
          <span class="q-pl-sm">TypeScript</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/nextjs.png" alt="Next.js" />
          <span class="q-pl-sm">Next.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/react.png" alt="React Native" />
          <span class="q-pl-sm">React Native</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/partykit.png" alt="PartyKit" />
          <span class="q-pl-sm">PartyKit</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          Tunge is my take on Spite & Malice, a 2-player card game where you're
          racing to empty your stack pile before your opponent empties theirs.
          I built it as a TypeScript monorepo with Turborepo so I could share
          one game engine between a web version and a React Native app, wrote
          26 Vitest tests for the engine since card game rules have a lot of
          edge cases, and added some 3D card animations on both platforms
          because flat cards felt boring.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-my-lg">
          All the actual game logic lives on a PartyKit WebSocket server, not
          the client, so nobody can fake a move or peek at the wrong card. It
          keeps track of whose turn it is, rejects anything out of turn, and
          only sends each player their own drawn card so opponents can't see
          it early.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          The gnarliest bug I ran into was around the game's namesake move:
          calling "Tunge" on an opponent who missed a play. By the time
          someone calls it out, the turn has usually already moved on, so I
          couldn't just check whose turn it currently was. I ended up
          tracking down the specific player who messed up directly in the
          game state instead of trying to infer it after the fact.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
        active-color=""
      >
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            class="q-pr-sm"
            @click="sourceCode(4)"
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

  <!-- Couch Potato Farm (IdleSpiral) -->
  <div class="row reverse justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <div class="text-h5 text-bold">Couch Potato Farm</div>
        <div class="text-caption">Desktop Automation Application</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/python.png" alt="Python" />
            <span class="q-pl-sm">Python</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInRight', speed: 'faster' }">
        <template v-if="!couchPotatoMediaMissing">
          <img
            class="gt-sm shadow-3"
            src="static/couchpotatofarm.gif"
            style="width: 900px; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="couchPotatoMediaMissing = true"
          />
          <img
            class="lt-md shadow-3"
            src="static/couchpotatofarm.gif"
            style="width: 100%; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="couchPotatoMediaMissing = true"
          />
        </template>
        <template v-else>
          <div
            class="gt-sm flex flex-center text-center text-grey-6"
            style="
              width: 900px;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
          <div
            class="lt-md flex flex-center text-center text-grey-6"
            style="
              width: 100%;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
        </template>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 2: Couch Potato Farm Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">Couch Potato Farm</div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-caption">Desktop Automation Application</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/python.png" alt="Python" />
          <span class="q-pl-sm">Python</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          I got tired of babysitting IdleSpiral, a browser farming game that
          needed a card played every 2-3 minutes, so I wrote a bot to do it
          for me. It got good enough that I could leave it running overnight
          and wake up to 140+ battles finished on their own.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          It's a CustomTkinter app with a PyAutoGUI thread doing the actual
          card-clicking. To know what's happening on screen without hooking
          into the game itself, it uses Pillow to template-match against
          screenshots (90% confidence threshold before it'll act) to catch
          when a battle starts or ends. I also added a way to drop a new card
          asset in just by pasting a screenshot from the clipboard, instead
          of manually cropping and saving image files every time a new card
          got added to the game.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Turning it into a standalone .exe with PyInstaller broke all the
          asset paths, since a bundled executable doesn't resolve relative
          paths the way a script does when you just run it with Python. Fixed
          it with a quick `sys.frozen` check so the app knows which case it's
          in and points to the right folder either way.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
        active-color=""
      >
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            class="q-pr-sm"
            @click="sourceCode(5)"
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

  <!-- Valorant True Stretch Launch -->
  <div class="row justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <div class="text-h5 text-bold">Valorant True Stretch Launch</div>
        <div class="text-caption">Windows Display Utility</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img width="25" height="25" src="static/logos/python.png" alt="Python" />
            <span class="q-pl-sm">Python</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInLeft', speed: 'faster' }">
        <template v-if="!valorantMediaMissing">
          <img
            class="gt-sm shadow-3"
            src="static/valorant.gif"
            style="width: 900px; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="valorantMediaMissing = true"
          />
          <img
            class="lt-md shadow-3"
            src="static/valorant.gif"
            style="width: 100%; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            @error="valorantMediaMissing = true"
          />
        </template>
        <template v-else>
          <div
            class="gt-sm flex flex-center text-center text-grey-6"
            style="
              width: 900px;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
          <div
            class="lt-md flex flex-center text-center text-grey-6"
            style="
              width: 100%;
              aspect-ratio: 900 / 400;
              border: 2px dashed;
              border-radius: 1rem;
            "
          >
            <div>
              <q-icon name="image" size="48px" />
              <div class="text-body1 q-mt-sm">Preview coming soon</div>
            </div>
          </div>
        </template>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 3: Valorant True Stretch Launch Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">Valorant True Stretch Launch</div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-caption">Windows Display Utility</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/python.png" alt="Python" />
          <span class="q-pl-sm">Python</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Valorant doesn't have a real "stretched resolution" option, people
          usually just fake it by changing their monitor's resolution before
          launching. I got tired of doing that by hand every time, so I wrote
          a script that switches to the custom resolution, launches the game,
          waits for it to close, then switches your desktop back automatically.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          The resolution change goes through the Win32 API with `ctypes`
          rather than any third-party display library. Launching the game was
          the trickier part: instead of just opening the Riot Client UI and
          clicking play, I read the port and auth password out of Riot
          Client's own lockfile and hit its local launcher API directly. I
          used `psutil` to watch for when the Valorant process actually opens
          and closes, so the resolution switches back the moment you quit
          instead of on some fixed timer that's either too early or too late.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Packaged into a standalone .exe with PyInstaller and configured
          entirely through a simple `config.ini` for the Riot Client path and
          target resolution.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
        active-color=""
      >
        <q-breadcrumbs-el
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          <span
            :class="$q.dark.isActive ? 'live-demo' : 'demo-lm'"
            class="q-pr-sm"
            @click="sourceCode(6)"
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

  <!-- Unlimited Drinks -->
  <div class="row reverse justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <div class="text-h5 text-bold">Unlimited Drinks</div>
        <div class="text-caption">E-commerce Website</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
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
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/python.png"
              alt="Python"
            />
            <span class="q-pl-sm">Python</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/postgresql.png"
              alt="PostgreSQL"
            />
            <span class="q-pl-sm">PostgreSQL</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInRight', speed: 'faster' }">
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm shadow-3"
          src="static/unlimiteddrinks.gif"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md shadow-3"
          src="static/unlimiteddrinks.gif"
          style="width: 100%; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 4: Unlimited Drinks Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">Unlimited Drinks</div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-caption">E-commerce Website</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
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
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/python.png"
            alt="Python"
          />
          <span class="q-pl-sm">Python</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/postgresql.png"
            alt="PostgreSQL"
          />
          <span class="q-pl-sm">PostgreSQL</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          The Unlimited Drinks E-commerce Website is a groundbreaking online
          platform designed to revolutionize the way students access beverages
          while living on campus. The platform serves as a cost-effective
          alternative to traditional vending machines by allowing students to
          order a variety of beverages, including carbonated drinks, energy
          drinks, juices, and more, in bulk. The convenience factor is further
          elevated by offering door-to-door delivery directly to their
          dormitories.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Key functionalities have been integrated to enhance the overall user
          experience. Auth0 authentication is implemented for user login and
          credentials, ensuring a secure and streamlined process. Users logging
          in with Auth0 are prompted to set up their accounts if they haven't
          done so, ensuring that only authenticated users can access and utilize
          the platform. However, users are free to use the platform without
          creating an account other than when needing to checkout an order.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          The payment process is facilitated through the integration of Stripe,
          a secure payment gateway, providing users with a reliable and
          efficient transaction experience. Users have the capability to view
          their order history, edit account information, and manage multiple
          addresses within their accounts. The platform's flexibility is evident
          in the feature that allows users to add or delete addresses as needed.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          To maintain the integrity of the review system, the platform enforces
          a one-review-per-item policy. This not only encourages authentic and
          thoughtful reviews but also prevents misuse or spamming of the review
          system.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
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
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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

  <!-- Portfolio -->
  <div class="row justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <span class="text-h5 text-bold">Portfolio Website</span>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
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
      <div v-scroll-animate="{ enter: 'slideInLeft', speed: 'faster' }">
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm shadow-3"
          src="static/portfolio.gif"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md shadow-3"
          src="static/portfolio.gif"
          style="width: 100%; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 5: Portfolio Website Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">
        Portfolio Website
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
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
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          My personal website, the centerpiece of my portfolio, serves as a
          canvas to express myself digitally by displaying my personality and
          showcasing my skills and experiences. It is a platform, a place where
          I share my growth as a human being and journey as a software engineer.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-my-lg">
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
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
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
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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

  <!-- ShuttleBus -->
  <div class="row reverse justify-evenly items-center q-mx-md">
    <div>
      <div v-if="$q.platform.is.mobile" v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mb-sm text-center">
        <div class="text-h5 text-bold">ShuttleBus</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body2 text-bold q-my-md"
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

      <div v-scroll-animate="{ enter: 'slideInRight', speed: 'faster' }">
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm shadow-3"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          src="static/shuttlebus.png"
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md shadow-3"
          style="width: 100%; max-width: 100%; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          src="static/shuttlebus.png"
        />
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-center text-caption text-grey-8 q-my-md">
          Figure 6: ShuttleBus Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-h5 text-bold">ShuttleBus</div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="text-body2 text-bold q-my-md"
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
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          The Shuttlebus System stands as a collaborative achievement, developed
          by a dedicated team of six individuals for a university project. This
          comprehensive application addresses the transportation needs of
          students, faculty, and campus visitors, offering an intuitive
          interface that displays real-time information on bus routes, current
          bus positions, and estimated time of arrival (ETA). The project also
          encompasses an administrative portal tailored to the needs of bus
          drivers.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          On the user side, the application provides a user-friendly display of
          bus routes, showcasing live bus positions and accurate ETAs. This
          real-time tracking functionality enhances user convenience and
          facilitates efficient commute planning. Important announcements
          related to bus schedules or campus events are seamlessly integrated,
          ensuring users receive timely notifications.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          For administrators, bus drivers access a secure login to initiate and
          update their routes, contributing to the overall efficiency of the
          shuttle system. The ability for drivers to update their live locations
          ensures users have access to the most current information.
          Additionally, the announcement feature enables drivers to communicate
          important information directly to users through the application.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          A significant feature of the system is the inclusion of a maintenance
          request functionality. This empowers users to submit maintenance
          requests directly through the application, streamlining the process
          for addressing issues and ensuring the continual reliability of the
          shuttle service. This user-driven approach enhances overall user
          experience and contributes to the efficient management of the shuttle
          system.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
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
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
