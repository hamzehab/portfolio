<script setup>
import { useQuasar } from "quasar";
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";

const $q = useQuasar();
</script>

<template>
  <NavBar />
  <div style="padding-bottom: 10rem" />

  <div class="q-px-xl" style="max-width: 900px; margin: 0 auto">
    <!-- Aya Holdings Group -->
    <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }" class="q-mb-xl">
      <div class="text-h5 text-bold">Full Stack Software Engineer</div>
      <div
        class="text-subtitle1"
        :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
      >
        Aya Holdings Group | Remote
      </div>
      <div class="text-caption text-grey">May 2023 - Sep 2024</div>

      <q-breadcrumbs
        separator="|"
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
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/FastAPI.png" alt="FastAPI" />
          <span class="q-pl-sm">FastAPI</span>
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
            src="static/logos/postgresql.png"
            alt="PostgreSQL"
          />
          <span class="q-pl-sm">PostgreSQL</span>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el>
          <img width="25" height="25" src="static/logos/docker.png" alt="Docker" />
          <span class="q-pl-sm">Docker</span>
        </q-breadcrumbs-el>
      </q-breadcrumbs>

      <q-list class="text-body1 text-weight-medium">
        <q-item class="q-px-none">
          Architected 4 independent FastAPI microservices with isolated
          PostgreSQL schemas, Tortoise ORM, and Docker Compose.
        </q-item>
        <q-item class="q-px-none">
          Designed and delivered 50+ async RESTful endpoints across 30+
          normalized PostgreSQL schemas with Aerich migrations, indexed
          foreign keys, and Pydantic v2 response validation.
        </q-item>
        <q-item class="q-px-none">
          Engineered a 5-level content hierarchy model with a 3-stage review
          workflow and role-based visibility controls across the content
          management system.
        </q-item>
        <q-item class="q-px-none">
          Developed 40+ reusable Vue.js/Quasar components across multiple
          platform features with internationalization supporting 100+
          locales and full RTL language layouts.
        </q-item>
        <q-item class="q-px-none">
          Built an automated content ingestion pipeline with UUID-based
          deduplication and OpenAI GPT-4 summarization, and integrated
          AI-assisted content generation into the platform's authoring
          backend.
        </q-item>
      </q-list>
    </div>

    <q-separator />

    <!-- Substitute Teacher -->
    <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }" class="q-my-xl">
      <div class="text-h5 text-bold">Substitute Teacher</div>
      <div
        class="text-subtitle1"
        :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
      >
        Al-Ghazaly High School | Wayne, NJ
      </div>
      <div class="text-caption text-grey">
        Apr 2023 - Jun 2023, Sep 2024 - Jan 2025
      </div>

      <q-list class="text-body1 text-weight-medium q-mt-md">
        <q-item class="q-px-none">
          Covered day-to-day instruction across nearly every subject taught
          at the school, including Computer Science, Math, Science, PE, and
          Religion, stepping in on short notice across grade levels.
        </q-item>
        <q-item class="q-px-none">
          Handled IT support for school laptops alongside teaching duties,
          diagnosing and resolving hardware and software issues for staff
          and students.
        </q-item>
      </q-list>
    </div>

    <q-separator />

    <!-- Computer Technician -->
    <div v-scroll-animate="{ enter: 'fadeIn', speed: 'slow' }" class="q-my-xl">
      <div class="text-h5 text-bold">Computer Technician</div>
      <div
        class="text-subtitle1"
        :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
      >
        Self-Employed
      </div>
      <div class="text-caption text-grey">2016 - Present</div>

      <q-list class="text-body1 text-weight-medium q-mt-md">
        <q-item class="q-px-none">
          Built custom desktop computers to spec for individual clients,
          from component selection through assembly.
        </q-item>
        <q-item class="q-px-none">
          Diagnosed and resolved hardware and software issues for clients,
          from failing components to system instability and performance
          problems.
        </q-item>
      </q-list>
    </div>
  </div>

  <div style="padding-bottom: 3rem" />
  <FooterComponent />
</template>
