<script setup>
import { emitLeaveHovered, emitHovered } from "~/utils/emit";
useSeoMeta({
  title: "Quentin Heinis",
  ogTitle: "Quentin Heinis",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});

</script>

<template>
  <div class="p-index">
    <span class="p-index__text">Hello <img src="/8.png" alt="" class="p-index__img"></span>
    
    <h1 class="p-index__text" @mouseleave="emitLeaveHovered" @mouseover="emitHovered">I am<img src="/1.png" alt="" class="p-index__img -space">Quentin Heinis</h1>
    <p class="p-index__text">
      A Full-stack <img src="/76.png" alt="" class="p-index__img">
    </p>
    <p class="p-index__text" @mouseleave="emitLeaveHovered" @mouseover="emitHovered">Developer</p> 
    <p class="p-index__text" @mouseleave="emitLeaveHovered" @mouseover="emitHovered">based in <img src="/48.png" alt="" class="p-index__img"> France</p>

    <div>
      
    </div>
  </div>
</template>

<style lang="scss">
.p-index {
  &__text {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    font-size: 9vw;
    letter-spacing: -5px;
  }
  &__img{
    max-height: 8vw;
    &.-space{
      padding: 0 2%;
    }
  }
}
</style>
