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
      v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }"
      class="gt-xs text-weight-bolder text-h4 q-pb-md"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      My Projects
    </div>
    <div
      v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }"
      class="lt-sm text-center text-weight-bolder text-h4 q-pb-md"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <div class="text-h5 text-bold">Tunge</div>
        <div class="text-caption">Real-Time Online Card Game</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/typescript.png"
              alt="TypeScript"
            />
            <span class="q-pl-sm">TypeScript</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/nextjs.png"
              alt="Next.js"
            />
            <span class="q-pl-sm">Next.js</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/react.png"
              alt="React Native"
            />
            <span class="q-pl-sm">React Native</span>
          </q-breadcrumbs-el>
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/partykit.png"
              alt="PartyKit"
            />
            <span class="q-pl-sm">PartyKit</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInLeft', speed: 'faster' }">
        <template v-if="!tungeMediaMissing">
          <video
            class="gt-sm shadow-3"
            src="static/tunge.mp4"
            style="width: 900px; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            autoplay
            muted
            loop
            playsinline
            @error="tungeMediaMissing = true"
          />
          <video
            class="lt-md shadow-3"
            src="static/tunge.mp4"
            style="width: 100%; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            autoplay
            muted
            loop
            playsinline
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
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 1: Tunge Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-h5 text-bold"
        >
          Tunge
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-caption"
        >
          Real-Time Online Card Game
        </div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/typescript.png"
            alt="TypeScript"
          />
          <span class="q-pl-sm">TypeScript</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/nextjs.png"
            alt="Next.js"
          />
          <span class="q-pl-sm">Next.js</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/react.png"
            alt="React Native"
          />
          <span class="q-pl-sm">React Native</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/partykit.png"
            alt="PartyKit"
          />
          <span class="q-pl-sm">PartyKit</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          Tunge is a card game my dad and aunt taught me growing up, and for
          years the only place I ever played it was at my cousin's house. I
          decided to build a version I could actually play online, so I wouldn't
          have to wait for a family gathering to get a game in.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-my-lg"
        >
          If you haven't played it, it's a two-player race: you're each trying
          to empty a 13-card stack pile before the other person does, while
          building up shared foundation piles and a shared floor layout in the
          middle. The mechanic the game is named after is "Tunge," where if your
          opponent had an obvious play sitting in front of them and didn't take
          it, you can call them out on it and force a penalty. It rewards paying
          attention as much as it rewards making good moves.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-my-lg"
        >
          I built it as a TypeScript monorepo using Turborepo, so I could write
          the game engine once and share it between a web app and a React Native
          app instead of maintaining the rules twice. It's the kind of thing
          where getting the rules exactly right actually matters, since the game
          has a lot of small exceptions around empty slots, forced moves, and
          what counts as a valid play, so I wrote 26 Vitest tests around the
          engine to make sure I wasn't missing edge cases.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-my-lg"
        >
          All the game logic runs on a PartyKit WebSocket server instead of the
          client. It keeps track of whose turn it is, rejects anything out of
          turn, and only sends each player their own drawn card, so nobody can
          peek at a card early or fake a move by messing with client state.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          I also spent time adding 3D card animations on both platforms for
          dealing and drawing cards, since having them just snap into place felt
          flat compared to how a real deck actually moves. It's still a work in
          progress, so web and mobile aren't playable end-to-end yet, but the
          core engine and the server are solid.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <div class="text-h5 text-bold">Couch Potato Farm</div>
        <div class="text-caption">Desktop Automation Application</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/python.png"
              alt="Python"
            />
            <span class="q-pl-sm">Python</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInRight', speed: 'faster' }">
        <template v-if="!couchPotatoMediaMissing">
          <video
            class="gt-sm shadow-3"
            src="static/couchpotatofarm.mp4"
            style="width: 900px; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            autoplay
            muted
            loop
            playsinline
            @error="couchPotatoMediaMissing = true"
          />
          <video
            class="lt-md shadow-3"
            src="static/couchpotatofarm.mp4"
            style="width: 100%; border-radius: 0.5rem; border: 1px solid"
            :style="
              $q.dark.isActive
                ? 'border-color: rgba(255, 255, 255, 0.12)'
                : 'border-color: rgba(0, 0, 0, 0.08)'
            "
            autoplay
            muted
            loop
            playsinline
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
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 2: IdleSpiral Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-h5 text-bold"
        >
          IdleSpiral
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-caption"
        >
          Desktop Automation Application
        </div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/python.png"
            alt="Python"
          />
          <span class="q-pl-sm">Python</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Wizard101 is a card-based MMO. Combat is turn-based, you build a deck
          and cast spell cards to fight. Couch Potato is a garden plant in the
          game that only drops from grinding the same battle over and over, so
          getting a decent stock means repeating one fight a couple hundred
          times. I got tired of manually re-casting the same few cards every 2-3
          minutes for hours, so I wrote a bot to do it for me instead. It got
          good enough that I could leave it running overnight and wake up to
          140+ battles finished on their own.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          It's a CustomTkinter app with a PyAutoGUI thread doing the actual
          clicking. To know what's happening on screen without touching the game
          itself, it uses image matching with a 90% confidence threshold to
          detect when a battle starts and when it's won. It tries up to three
          times to find and click an enchantment card followed by a base damage
          card, and bails out of the sequence entirely if either one isn't found
          on screen. After that, it switches to actually retrying, checking
          every half second for either a win or the enchanted damage card, and
          clicking the enchanted card whenever it shows up, until a win is
          detected. Once it wins, it holds down the movement key to auto-walk to
          the next fight and waits for the next battle to start before looping
          again.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          I also added a way to paste a screenshot straight from the clipboard
          to register a new card image, instead of manually cropping and saving
          a file every time a new card showed up in the game.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Turning it into a standalone .exe with PyInstaller broke all the asset
          paths, since a bundled executable doesn't resolve relative paths the
          way a script does when you run it with Python directly. Fixed it with
          a quick check for whether the app is running as an exe or a script, so
          it knows which folder to point to either way.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <div class="text-h5 text-bold">Valorant True Stretch Launch</div>
        <div class="text-caption">Windows Display Utility</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
          active-color=""
        >
          <q-breadcrumbs-el>
            <img
              width="25"
              height="25"
              src="static/logos/python.png"
              alt="Python"
            />
            <span class="q-pl-sm">Python</span>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <div v-scroll-animate="{ enter: 'slideInLeft', speed: 'faster' }">
        <template v-if="!valorantMediaMissing">
          <img
            class="gt-sm shadow-3"
            src="static/valorant.png"
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
            src="static/valorant.png"
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
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 3: Valorant True Stretch Launch Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-h5 text-bold"
        >
          Valorant True Stretch Launch
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-caption"
        >
          Windows Display Utility
        </div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
        active-color=""
      >
        <q-breadcrumbs-el>
          <img
            width="25"
            height="25"
            src="static/logos/python.png"
            alt="Python"
          />
          <span class="q-pl-sm">Python</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="text-body1 text-weight-medium">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          I play Valorant with a stretched resolution because it makes
          everything on screen look a bit bigger, but the game doesn't actually
          have that as a real setting. The usual workaround is changing your
          monitor's resolution by hand right before you launch, then switching
          it back after, which gets old fast when you're doing it every session.
          So I wrote a script that just handles the whole thing on its own:
          switch to the custom resolution, launch the game, wait until it
          closes, then switch the desktop back automatically.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          The resolution swap itself was easy, just calling into the Win32 API
          directly with ctypes instead of pulling in a whole display library for
          one function. Actually launching the game turned out to be the harder
          part. Clicking through the Riot Client UI felt too fragile to automate
          reliably, so instead I pulled the port and auth password out of Riot
          Client's own lockfile and hit its local launcher API directly. I also
          used psutil to watch the Valorant process itself, so the resolution
          switches back the second you quit instead of guessing with some fixed
          timer that's either too early or too late.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          It's packaged as a standalone .exe with PyInstaller, and everything
          you'd want to change, like the Riot Client path or your target
          resolution, just lives in a simple config.ini.
        </div>
      </div>

      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <div class="text-h5 text-bold">Unlimited Drinks</div>
        <div class="text-caption">E-commerce Website</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="gt-sm shadow-3"
          src="static/unlimiteddrinks.gif"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="lt-md shadow-3"
          src="static/unlimiteddrinks.gif"
          style="width: 100%; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
        />
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 4: Unlimited Drinks Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-h5 text-bold"
        >
          Unlimited Drinks
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-caption"
        >
          E-commerce Website
        </div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
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
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Unlimited Drinks started as a class project, but it turned into
          something I actually wanted to build for real. It's an online delivery
          service for students living in dorms, so you can order drinks in bulk
          and get them dropped off instead of dealing with a vending machine one
          bill at a time.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          The frontend is Vue and Quasar, the backend is FastAPI with Postgres.
          You can browse everything, search, and add stuff to your cart without
          an account. Auth0 only kicks in once you actually go to checkout, or
          if you want to see your account, your past orders, or your saved
          addresses, since those are the only pages that actually need to know
          who you are.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          When you set up an account, it saves a default address along with it.
          You can add more addresses after that and mark whichever one you want
          as the default, so ordering for a friend's dorm doesn't mean
          overwriting your own info.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Checkout goes through Stripe. The backend builds the actual charge
          from whatever's in your cart at that moment instead of trusting
          anything the frontend sends it, and the order itself only gets created
          once Stripe's webhook confirms the payment actually went through, not
          the second the checkout page redirects you. So there's no way to fake
          an order by just hitting the success page directly.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Reviews are capped at one per item per account, checked on the backend
          before it lets a new one through, and the product page shows a
          breakdown of what percentage of reviews landed at each star rating.
        </div>
      </div>
      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <span class="text-h5 text-bold">Portfolio Website</span>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
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
        <video
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="gt-sm shadow-3"
          src="static/portfolio.mp4"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          autoplay
          muted
          loop
          playsinline
        />
        <video
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="lt-md shadow-3"
          src="static/portfolio.mp4"
          style="width: 100%; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          autoplay
          muted
          loop
          playsinline
        />
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 5: Portfolio Website Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div
        v-if="!$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-h5 text-bold"
      >
        Portfolio Website
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
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
          This site is built with Vue and Quasar, which was the stack I knew
          best at the time, so I could spend my time on the actual design
          instead of learning new tooling.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-my-lg"
        >
          The part that took the most fiddling was the scroll animations. I
          wanted elements to animate in only once they actually scrolled into
          view, not right when the page loads. I ended up writing a small custom
          Vue directive that wraps the Intersection Observer API, so I can just
          tag any element with it and pass in which animation to play and how
          fast, and it triggers once and stops watching that element after.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          The contact form doesn't have a backend behind it at all. It's wired
          up through EmailJS, so a message you send goes straight from your
          browser to my inbox without me needing to host and maintain a server
          just for a contact form.
        </div>

        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
      <div
        v-if="$q.platform.is.mobile"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="q-mb-sm text-center"
      >
        <div class="text-h5 text-bold">ShuttleBus</div>
        <q-breadcrumbs
          separator="|"
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="flex flex-center text-body2 text-bold q-my-md"
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="gt-sm shadow-3"
          style="width: 900px; border-radius: 0.5rem; border: 1px solid"
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          src="static/shuttlebus.png"
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="lt-md shadow-3"
          style="
            width: 100%;
            max-width: 100%;
            border-radius: 0.5rem;
            border: 1px solid;
          "
          :style="
            $q.dark.isActive
              ? 'border-color: rgba(255, 255, 255, 0.12)'
              : 'border-color: rgba(0, 0, 0, 0.08)'
          "
          src="static/shuttlebus.png"
        />
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-center text-caption text-grey-8 q-my-md"
        >
          Figure 6: ShuttleBus Preview
        </div>
      </div>
    </div>
    <div
      :class="$q.platform.is.mobile ? 'text-center' : ''"
      style="width: 800px"
    >
      <div v-if="!$q.platform.is.mobile">
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="text-h5 text-bold"
        >
          ShuttleBus
        </div>
      </div>
      <q-breadcrumbs
        v-if="!$q.platform.is.mobile"
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="text-body2 text-bold q-my-md"
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
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          ShuttleBus was a 6-person team project for a software engineering
          class, a live tracking system for campus shuttles. Riders see where
          each bus currently is on a map and get an ETA for their stop, plus any
          announcements about schedule changes; drivers get a separate portal to
          start and end their route and broadcast announcements. There's also an
          admin side for managing routes and users.
        </div>
        <div
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
          class="q-mt-lg"
        >
          Built with PHP and MySQL, with the Google Maps JS API driving the live
          location tracking, drivers' phones push their coordinates and the map
          polls and updates rider-side in near real time. I worked across most
          of the app rather than owning one piece, from driver-side route
          tracking to the maintenance request feature that let riders flag a bus
          issue directly instead of it going through email.
        </div>
      </div>
      <q-breadcrumbs
        separator="|"
        v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }"
        class="flex flex-center text-body1 text-weight-medium q-mt-xl"
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
