<script setup>
import { emitLeaveHovered, emitHovered } from "~/utils/emit";
useSeoMeta({
  title: "Quentin Heinis",
  ogTitle: "Quentin Heinis",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
const { client } = usePrismic();
const { data: projects } = await useAsyncData("home", () => {
  const response = client.getSingle("projectlist");
  if (response) {
    return response;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
const selectedProject = computed(() =>
  projects.value.data.project_list.filter((item) =>
    item.project.tags.includes("selected")
  )
);
</script>

<template>
  <div class="p-index">
    <span class="p-index__text"
      >Hello <img src="/8.png" alt="" class="p-index__img"
    /></span>

    <h1
      class="p-index__text"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      I am<img src="/1.png" alt="" class="p-index__img -space" /><i class="-red"
        >Quentin Heinis</i
      >
    </h1>
    <p class="p-index__text">
      A Full-stack <img src="/76.png" alt="" class="p-index__img" />
    </p>
    <p
      class="p-index__text"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      <i class="-blue">Developer</i>
    </p>
    <p
      class="p-index__text"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      based in <img src="/48.png" alt="" class="p-index__img" /> France
    </p>
    <SelectedProject :data="selectedProject" />
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
    i {
      font-style: normal;
      color: rgb(255, 136, 0);
      &.-red {
        color: rgb(255, 89, 89);
      }
      &.-green {
        color: rgb(0, 255, 115);
      }
      &.-purple {
        color: rgb(219, 100, 255);
      }
      &.-blue {
        color: rgb(0, 140, 255);
      }
    }
  }
  &__img {
    max-height: 8vw;
    &.-space {
      padding: 0 2%;
    }
  }
}
</style>
