<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";

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
  <div style="padding-bottom: 10rem" />

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
            class="gt-sm"
            src="static/tunge.gif"
            style="width: 900px"
            @error="tungeMediaMissing = true"
          />
          <img
            class="lt-md"
            src="static/tunge.gif"
            style="width: 100%"
            @error="tungeMediaMissing = true"
          />
        </template>
        <div
          v-else
          class="flex flex-center text-center text-grey-6"
          style="
            width: 900px;
            max-width: 100%;
            height: 400px;
            border: 2px dashed;
            border-radius: 1rem;
          "
        >
          <div>
            <q-icon name="image" size="48px" />
            <div class="text-body1 q-mt-sm">Preview coming soon</div>
          </div>
        </div>
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
          Tunge is a real-time 2-player card game derived from Spite & Malice,
          where players race to empty their stack, draw, and discard piles
          onto shared foundations and floor columns. Built as a strict-mode
          TypeScript Turborepo monorepo targeting both web and mobile, with a
          shared game engine covered by 26 Vitest tests and 3D card
          animations on both platforms.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-my-lg">
          The PartyKit WebSocket server is the authoritative source of truth:
          it binds each connection to a player index, rejects off-turn moves,
          and stamps the Tunge caller's identity server-side to block
          spoofing. Per-connection payloads are broadcast so that each
          player's drawn card is hidden from their opponent until it's
          played.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }">
          The trickiest bug was a turn-order race condition in the game's
          namesake mechanic: discarding a card advances whose turn it is, so
          by the time an opponent calls "Tunge" on a missed move, the active
          player index has already changed. I resolved it by tracking the
          offending player explicitly in shared game state instead of
          inferring it from whoever's turn it currently is.
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
            class="gt-sm"
            src="static/couchpotatofarm.gif"
            style="width: 900px"
            @error="couchPotatoMediaMissing = true"
          />
          <img
            class="lt-md"
            src="static/couchpotatofarm.gif"
            style="width: 100%"
            @error="couchPotatoMediaMissing = true"
          />
        </template>
        <div
          v-else
          class="flex flex-center text-center text-grey-6"
          style="
            width: 900px;
            max-width: 100%;
            height: 400px;
            border: 2px dashed;
            border-radius: 1rem;
          "
        >
          <div>
            <q-icon name="image" size="48px" />
            <div class="text-body1 q-mt-sm">Preview coming soon</div>
          </div>
        </div>
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
          Couch Potato Farm is a Windows desktop bot that plays the browser
          game IdleSpiral autonomously. What started as a farming loop needing
          manual input every 2-3 minutes became a fully unattended automation,
          enabling 6-hour overnight sessions that completed 140+ battle
          cycles on their own.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Built with a CustomTkinter GUI and a threaded PyAutoGUI card-play
          engine, the bot uses Pillow to run real-time screen template
          matching at a 90% confidence threshold, detecting battle starts and
          victories to drive a multi-step card sequence and post-victory
          navigation. New card assets are auto-discovered from the assets
          folder on startup, and a clipboard-based ingestion flow lets a
          screenshot be pasted directly into the app to register a new card.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          Packaging the bot into a standalone .exe with PyInstaller broke its
          relative asset paths, since a frozen executable resolves paths
          differently than a running script. That was solved with a
          `sys.frozen` check so asset and config paths resolve correctly in
          both environments.
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
            class="gt-sm"
            src="static/valorant.gif"
            style="width: 900px"
            @error="valorantMediaMissing = true"
          />
          <img
            class="lt-md"
            src="static/valorant.gif"
            style="width: 100%"
            @error="valorantMediaMissing = true"
          />
        </template>
        <div
          v-else
          class="flex flex-center text-center text-grey-6"
          style="
            width: 900px;
            max-width: 100%;
            height: 400px;
            border: 2px dashed;
            border-radius: 1rem;
          "
        >
          <div>
            <q-icon name="image" size="48px" />
            <div class="text-body1 q-mt-sm">Preview coming soon</div>
          </div>
        </div>
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
          A lightweight Windows utility that gives Valorant a "true stretched"
          resolution: it switches the display to a custom resolution,
          launches Riot Client and Valorant, waits for the game to close, and
          restores the original desktop resolution automatically.
        </div>
        <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="q-mt-lg">
          The resolution swap is done directly through the Win32 API via
          `ctypes`, populating a `DEVMODE` structure and calling
          `ChangeDisplaySettingsA`. To launch the game itself, the app reads
          Riot Client's local lockfile for its port and auth password, then
          calls its local HTTPS launcher API directly rather than shelling
          out to the client UI. `psutil` is used to detect when the Valorant
          process actually starts and closes, so the resolution is restored
          at the right moment instead of on a fixed timer.
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm"
          src="static/unlimiteddrinks.gif"
          style="width: 900px"
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md"
          src="static/unlimiteddrinks.gif"
          style="width: 100%"
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm"
          src="static/portfolio.gif"
          style="width: 900px"
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md"
          src="static/portfolio.gif"
          style="width: 100%"
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
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="gt-sm"
          style="width: 900px"
          src="static/shuttlebus.png"
        />
        <img
          v-scroll-animate="{ enter: 'fadeIn', speed: 'slower' }" class="lt-md"
          style="width: 100%; max-width: 100%"
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
