<script setup>
useSeoMeta({
  title: "Quentin Heinis",
  ogTitle: "Quentin Heinis",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});

</script>

<template>
  <div class="p-index">
    <span class="p-index__text">Hello</span>
    <h1 class="p-index__text">Je suis Quentin Heinis</h1>
    <p class="p-index__text -paragraphe">
      Un développeur full-stack
      <span class="p-index__text">basé en France</span>
    </p>

    <div>
      
    </div>
  </div>
</template>

<style lang="scss">
.p-index {
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    font-size: 8vw;
    letter-spacing: -5px;
    &.-paragraphe {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
