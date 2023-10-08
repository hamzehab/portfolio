<script setup>
import { onMounted, ref, watch } from "vue";
import { useQuasar } from "quasar";

import NavBar from "components/NavBar.vue";
import FooterComponent from "components/FooterComponent.vue";
import SkillLogos from "components/SkillLogos.vue";
import TypeAnimation from "components/TypeAnimation.vue";

import "animate.css";

const $q = useQuasar();
const viewMore = ref(false);

const autoplay = ref(true);
const slide = ref(1);
const captions = ref([
  "Baby picture of myself",
  "Making Pizza at Home",
  "Elementary School",
  "High School Graduation",
  "College Graduation",
]);

watch(slide, () => {
  if (slide.value == 5) {
    autoplay.value = false;
    setTimeout(() => {
      autoplay.value = true;
    }, 2750);
  }
});

onMounted(() => {
  const animations = document.querySelectorAll(".animation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      entry.target.classList.toggle("fadeIn", entry.isIntersecting);
      entry.target.classList.toggle("slow", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });

  animations.forEach((animation) => {
    observer.observe(animation);
  });
});
</script>

<template>
  <!-- Import Navbar component to display menu options -->
  <NavBar />

  <TypeAnimation />
  <div class="q-pa-md">
    <q-dialog v-model="viewMore" :full-width="$q.platform.is.mobile">
      <q-card flat bordered style="border-radius: 1rem">
        <q-card-section>
          <div class="text-h6">More About Me</div>
          <div class="text-caption">Background &amp; History</div>
        </q-card-section>

        <q-separator />

        <q-card-section
          style="max-height: 70vh"
          class="text-body1 scroll q-my-sm"
        >
          <div :class="$q.platform.is.mobile ? '' : 'q-mx-xl'">
            <div class="q-mb-lg" id="born">
              Let's start from the day I was born which would be October 13,
              2001 at St. Joseph's Hospital in Paterson, New Jersey. From this
              day onward I was blessed with two amazing parents along with a
              supportive family, including the extended family. At the time my
              mother was caring for two children, myself and my older sister,
              only a year between us. We were living in Woodridge, NJ, where my
              father was running an Italian restaurant, named Emilia Romagna,
              with his brother. My father would work hard to support the two
              children and wife he had back home by working long shifts. What
              made my father an even harder worker is that ever since he moved
              from Jordan to the United States, he would try to make a life not
              only for himself but for his mother and his siblings plus his
              children and his wife. A year later, my parents brought a younger
              sister into this world and after a few quiet years, three to be
              exact, I was given a baby brother that can be spotted in the
              picture in the background.
            </div>
            <div id="education">
              <div class="q-mb-lg">
                When I was three years old, I moved to a new house located in
                Ridgewood, NJ. Today the year is 2023 and I am almost 22 years
                old, making it close to 19 years since I have been living here,
                not just a house but a place I call home. Shortly after when I
                turned four years old, my parents placed me in a private Islamic
                school, name Al-Hikmah Elementary School that tought children
                from ages 3-12 (PreK - 6th Grade). Here is when and where my
                journey began, where the pieces of my life were being put
                together, where I would make friends that would become brothers
                today, where the foundation of everyting all began. With a blink
                of an eye, sixth grade ended quickly, and it was time to move
                the a different school, named Al-Ghazaly High School. I also
                spent the remainder of middle school and high school here from
                7th grade all the way until senior year. If it weren't for my
                family, friends, and teachers I would not be here today.
              </div>
              <div>
                Long story short, during senior year I decided to enroll at New
                Jersey Institute of Technology or NJIT for short for undergrad
                where I would be majoring in Computer Science. I spent 1.5
                semesters in person and on campus before COVID-19 hit the US.
                Everything here shifted, from studies to personal life, it was
                so different. When my third semester came in, I was stressing
                24/7 and believed it to be the degree I was pursuing. With the
                third semester coming to an end, it was at this point I decided
                to change career paths and transfer to a different school. The
                new career I chose was to become a Lawyer and transferred to
                Montclair State University. After only one semester of studying
                Law, I immediately switched back to Computer Science as I knew
                that I was not cut out for it and that I was better suited for
                my previous studies as the concepts made more sense to me and
                came easier than anything else. I can still remember the first
                day of university as if it were yesterday.
              </div>
            </div>
            <div class="q-mt-lg">
              <div class="q-mb-md text-center text-h5">
                Grow Up With Me Through Pictures
              </div>
              <q-carousel
                style="border-radius: 1rem; height: 30vh"
                infinite
                arrows
                :autoplay="autoplay"
                animated
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="static/images/babypic.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="static/images/makingPizza.jpeg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="static/images/elementary.jpeg"
                />
                <q-carousel-slide
                  :name="4"
                  img-src="static/images/hsgrad.jpg"
                />
                <q-carousel-slide :name="5">
                  <video style="width: 100%; height: inherit" controls autoplay>
                    <source src="static/cgrad.MP4" type="video/mp4" />
                  </video>
                </q-carousel-slide>
              </q-carousel>
              <div class="q-mt-lg text-body2 text-center text-grey">
                Figure {{ slide }}: &nbsp;{{ captions[slide - 1] }}
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <div class="q-pa-md row justify-center q-gutter-x-xl text-h5 items-center">
    <q-img
      class="animation"
      src="static/images/portrait.jpg"
      style="width: 500px; height: 45vh; border-radius: 1rem"
    />
    <div style="max-width: 1000px">
      <div
        class="animation text-h5 text-center text-weight-bold text-grey-5 q-my-lg"
      >
        <div>
          &#x1F44B; Hi everyone!! Firstly, I want to thank you for taking the
          time to view my portfolio.
        </div>
        <div>
          If you couldn't tell from the animation above, my name is Hamzeh
          Abdallah.
        </div>
      </div>
      <div class="animation q-my-lg">
        I am 21 years old soon to be 22. I live at home with my mother and
        father along with my brother and two sisters. A little more about
        myself:
      </div>
      <q-list class="text-weight-regular">
        <q-item class="animation">
          <img
            class="q-mr-md"
            width="25"
            height="25"
            src="https://img.icons8.com/color/48/palestine.png"
            alt="palestine_flag"
          />
          I am a Palestinian American but was born and raised in NJ
        </q-item>
        <q-item class="animation">
          <div class="q-mr-sm">&#127891;</div>
          I received my Bachelors Degree from Montclair State University and
          graduated with a 3.919 GPA awarded with the title Summa Cum Laude
        </q-item>
        <q-item class="animation">
          <div class="q-mr-sm">&#128187;</div>
          I currently work as a software engineer at AYA Holdings Group, where I
          collaborate with my team to develop and deploy a full stack
          application.
        </q-item>
      </q-list>
      <div
        class="text-body2 q-mt-lg cursor-pointer text-grey text-right"
        @click="viewMore = true"
      >
        View More...
      </div>
    </div>
  </div>

  <SkillLogos />

  <div class="q-px-xl q-pt-xl">
    <div
      class="animation gt-xs text-weight-bolder text-h4 q-ml-xl q-pb-md"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      Hobbies
    </div>
    <div
      class="animation lt-sm text-center text-weight-bolder text-h4 q-pb-md"
      :class="$q.dark.isActive ? 'text-grey-8' : 'text-grey-6'"
    >
      Hobbies
    </div>
    <q-separator />
    <div
      class="row justify-center text-center q-py-xl"
      :class="$q.dark.isActive ? 'text-white' : ''"
    >
      <div class="q-py-lg q-mx-xl" style="width: 400px">
        <div class="animation">
          <img
            class="animation"
            :src="
              $q.dark.isActive
                ? 'static/hobbies/gamesDM.png'
                : 'static/hobbies/games.png'
            "
            alt="controller"
            style="border: 2px solid; border-radius: 3rem; padding: 15px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
        </div>
        <div
          class="animation text-h6 q-mx-md"
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          Video Games
        </div>
        <div class="animation text-caption">
          I've been a gamer since I was three, starting with Nintendo's Mario
          games, and I've now transitioned into a dedicated PC gamer. Whether it
          be with family and friends or solo sessions I always seem to enjoy my
          time and the moments. Gaming titles such as League of Legends, Rocket
          League, Teamfight Tactics, Valorant, etc. are the games I have been
          playing recently.
        </div>
      </div>
      <div class="q-py-lg q-mx-xl" style="width: 350px">
        <div class="animation">
          <img
            :src="
              $q.dark.isActive
                ? 'static/hobbies/basketballDM.png'
                : 'static/hobbies/basketball.png'
            "
            alt="basketball"
            style="border: 2px solid; border-radius: 3rem; padding: 15px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
        </div>
        <div
          class="animation text-h6 q-mx-md"
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          Basketball
        </div>
        <div class="animation text-caption">
          Out of all the sports out there, I believe basketball to be the one I
          enjoy the most. Most if not all my PE classes throughout elementary,
          middle, and high school my classmates and I would play basketball.
          Although I do not watch any professional basketball, I still consider
          myself to love the sport.
        </div>
      </div>

      <div class="q-py-lg q-mx-xl" style="width: 400px">
        <div class="animation">
          <img
            :src="
              $q.dark.isActive
                ? 'static/hobbies/familyDM.png'
                : 'static/hobbies/family.png'
            "
            alt="family"
            style="border: 2px solid; border-radius: 3rem; padding: 16px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
        </div>
        <div
          class="animation text-h6 q-mx-md"
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          Family and Friends
        </div>
        <span
          class="animation text-caption text-weight-bolder"
          :class="$q.dark.isActive ? 'text-amber' : 'text-grey'"
        >
          I prefer real talk over small talk
        </span>
        <div class="animation text-caption">
          My family and friends are everything to me in my life. Without them I
          would not be where I am today. Whenever I have free time I enjoy
          spending that time with those closest to me and engage in meaningful
          conversations or even just enjoying each other's company.
        </div>
      </div>
      <div class="q-py-lg q-mx-xl" style="width: 400px">
        <div class="animation">
          <img
            class="q-mr-md"
            :src="
              $q.dark.isActive
                ? 'static/hobbies/sunDM.png'
                : 'static/hobbies/sun.png'
            "
            alt="sun"
            style="border: 2px solid; border-radius: 3rem; padding: 15px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
          <img
            :src="
              $q.dark.isActive
                ? 'static/hobbies/homeDM.png'
                : 'static/hobbies/home.png'
            "
            alt="Home"
            style="border: 2px solid; border-radius: 3rem; padding: 15px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
        </div>
        <div
          class="animation text-h6 q-mx-md"
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          Outdoors or Indoors
        </div>
        <div class="animation text-caption">
          As a person, I don't have much of a preference for having a good time.
          I am always down for anything as long as we're enjoying each other's
          company. Anything outdoors such as bowling, hiking, a walk on the
          beach, or even sitting at home and playing games.
        </div>
      </div>
      <div class="q-py-xl q-mx-xl" style="width: 400px">
        <div class="animation">
          <img
            :src="
              $q.dark.isActive
                ? 'static/hobbies/musicDM.png'
                : 'static/hobbies/music.png'
            "
            alt="Music"
            style="border: 2px solid; border-radius: 3rem; padding: 10px"
            :style="
              $q.dark.isActive
                ? 'border-color: #673ab7;'
                : ' border-color: #3F51B5;'
            "
          />
        </div>
        <div
          class="animation text-h6 q-mx-md"
          :class="$q.dark.isActive ? 'text-deep-purple' : 'text-indigo'"
        >
          Music
        </div>
        <div class="animation text-caption">
          In my free time or even when I am busy with tasks, music is something
          I look forward to and never fails to lift me up or make things
          slightly better. It sets a mood which allows me to unwind after a
          long/busy day or even when going to the gym.
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>
