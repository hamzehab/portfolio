<script setup>
import { onMounted, ref, watch } from "vue";
import NavBar from "components/NavBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";
import emailjs from "@emailjs/browser";
import { SessionStorage } from "quasar";
import { useQuasar } from "quasar";

const $q = useQuasar();

const redirect = (url) => {
  window.open(url, "_blank_");
};

const name = ref(SessionStorage.getItem("name") || null);
const email = ref(SessionStorage.getItem("email") || null);
const subject = ref(SessionStorage.getItem("subject") || null);
const body = ref(SessionStorage.getItem("body") || null);

const loading = ref(false);
const submitted = ref(SessionStorage.getItem("submission") || false);

const submitForm = async () => {
  loading.value = true;
  if (submitted.value) {
    setTimeout(() => {
      loading.value = false;
    }, 1000);
    return;
  }

  try {
    const form = {
      from_name: name.value,
      message: body.value,
      subject: subject.value,
      email: email.value,
    };

    const response = await emailjs.send(
      "service_t1v57jf",
      "template_r5gh23z",
      form,
      "LONOwLZJYS63ujYp5"
    );

    if (response.status == 200) {
      SessionStorage.clear();
      SessionStorage.set("submission", true);
      submitted.value = true;
    }
  } catch (err) {
    $q.notify({
      type: "negative",
      message: "Something went wrong",
    });
    console.error(err);
  }

  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

watch(name, (newName) => {
  sessionStorage.setItem("name", newName);
});

watch(email, (newEmail) => {
  sessionStorage.setItem("email", newEmail);
});

watch(subject, (newSubject) => {
  sessionStorage.setItem("subject", newSubject);
});

watch(body, (newBody) => {
  sessionStorage.setItem("body", newBody);
});

onMounted(() => {
  const card = document.querySelector(".card");
  const form = document.querySelectorAll(".form");
  const button = document.querySelector(".button");

  const observerCard = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("bounceInLeft", entry.isIntersecting);
      if (entry.isIntersecting) observerCard.unobserve(entry.target);
    });
  });

  const observerForm = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting);
        entry.target.classList.toggle("bounceInDown", entry.isIntersecting);
        if (entry.isIntersecting) observerForm.unobserve(entry.target);
      });
    },
    { rootMargin: "-190px" }
  );

  const observerButton = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("bounceInUp", entry.isIntersecting);
      if (entry.isIntersecting) observerButton.unobserve(entry.target);
    });
  });

  observerCard.observe(card);
  form.forEach((entry) => {
    observerForm.observe(entry);
  });
  observerButton.observe(button);
});
</script>

<template>
  <NavBar />
  <div class="lt-sm" style="padding-bottom: 5rem" />
  <div class="gt-xs" style="padding-bottom: 15rem" />

  <div class="q-ma-md row justify-center items-center">
    <div class="card q-mb-xl">
      <q-card
        class="my-card"
        :class="$q.dark.isActive ? '' : ''"
        :bordered="!$q.dark.isActive"
      >
        <img src="static/images/babypic.jpg" />

        <q-card-section class="q-pa-lg">
          <div class="text-bold text-body1">Hamzeh Abdallah</div>
          <div class="text-body2 q-py-sm">
            Software Engineer, Full Stack Developer, and Video Gamer
          </div>
          <div class="row justify-end">
            <img
              class=""
              :src="
                $q.dark.isActive
                  ? 'static/signatureDarkMode.png'
                  : 'static/signature.png'
              "
              width="150"
              alt="my_signature"
            />
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="text-center">
          <img
            class="cursor-pointer"
            src="static/socials/instagram/igColor.png"
            width="60"
            height="60"
            alt="Instagram"
            @click="redirect('https://www.instagram.com/hazmeh_/')"
          />
          <img
            class="cursor-pointer"
            :src="
              $q.dark.isActive
                ? 'static/socials/github/githubDarkMode.png'
                : 'static/socials/github/github.png'
            "
            width="60"
            height="60"
            alt="GitHub"
            @click="redirect('https://github.com/hamzehab')"
          />
          <img
            class="cursor-pointer"
            src="static/socials/linkedin/linkedinColor.png"
            width="60"
            height="60"
            alt="LinkedIn"
            @click="redirect('https://www.linkedin.com/in/hamzeh-abdallah/')"
          />
        </q-card-section>
        <q-separator />
        <q-card-section class="q-mx-md text-body2">
          <div class="q-py-sm">
            <q-icon
              name="email"
              class="q-mr-xl"
              :color="$q.dark.isActive ? 'amber' : ''"
            />
            <div class="lt-sm">hamzehhabdallah@gmail.com</div>
            <span class="gt-xs">hamzehhabdallah@gmail.com</span>
          </div>
          <div class="q-py-sm">
            <q-icon
              name="phone"
              class="q-mr-xl"
              :color="$q.dark.isActive ? 'amber' : ''"
            />
            <div class="lt-sm">+1 (201) 264 7063</div>
            <span class="gt-xs">+1 (201) 264 7063</span>
          </div>
          <div class="q-py-sm">
            <q-icon
              name="home"
              class="q-mr-xl"
              :color="$q.dark.isActive ? 'amber' : ''"
            />
            <div class="lt-sm">Ridgewood, NJ</div>
            <span class="gt-xs">Ridgewood, NJ</span>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="gt-xs" style="margin-right: 128px" />

    <div style="max-width: 100%; width: 500px">
      <div>
        <div
          class="form text-h5 text-weight-bolder"
          :class="$q.dark.isActive ? 'text-amber' : 'text-indigo'"
        >
          Asking Costs Nothing
        </div>
        <div
          class="form text-body1 q-pt-sm"
          :class="$q.dark.isActive ? 'text-grey' : 'text-grey-9'"
        >
          Don't hesitate to get in touch with me! You can reach out through
          Instagram, GitHub, LinkedIn, drop me an email, or simply use the
          contact form here
        </div>
      </div>
      <div class="form">
        <q-input
          class="q-my-lg"
          v-model="name"
          type="text"
          label="Preferred Name"
          stack-label
        />
        <q-input
          class="q-my-lg"
          v-model="email"
          type="text"
          label="Email"
          stack-label
        />
        <q-input
          class="q-my-lg"
          type="text"
          v-model="subject"
          label="Subject"
          stack-label
        />
        <q-input
          class="q-my-lg"
          type="textarea"
          v-model="body"
          label="Your Message"
          stack-label
        />
      </div>

      <div class="text-center q-mt-xl">
        <q-btn
          rounded
          push
          :loading="loading"
          class="button bg-indigo q-py-sm"
          style="color: white; width: 300px"
          :label="submitted ? 'Already submitted form' : 'Submit'"
          :disable="submitted"
          @click="submitForm"
        />
      </div>
    </div>
  </div>

  <div class="gt-xs" style="padding-bottom: 15rem" />
  <div class="lt-sm" style="padding-bottom: 5rem" />

  <FooterComponent />
</template>
