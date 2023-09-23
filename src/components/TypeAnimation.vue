<script setup>
import { ref, onMounted } from "vue";

const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = ref([
  "Hamzeh Abdallah",
  "a Software Engineer",
  "a gamer at heart",
  "a Family Guy",
]);
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

const typeText = () => {
  if (
    charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length
  ) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += displayTextArray.value[
      displayTextArrayIndex.value
    ].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray.value[
      displayTextArrayIndex.value
    ].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<template>
  <div>
    <div class="bropic">
      <div class="text-white absolute-center text-h2 full-width">
        <span class="text-black typed-text">Hi, I'm</span>
        <span class="typed-text">&nbsp;{{ typeValue }} </span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </div>
    </div>
  </div>
</template>
