<script setup>
import { emitLeaveHovered, emitHovered } from "~/utils/emit";
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
  <div class="c-projects">
    <infinite content="Here are my selected project" />
    <infinite
      content="Here are my selected project"
      variant="reverse"
      color="green"
    />

    <NuxtLink
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
      class="c-projects__item"
      v-for="(item, index) in selectedProject"
      :key="index"
      :to="`portfolio/${item.project.uid}`"
    >
      <div class="c-projects__content">
        <img class="c-projects__img" :src="item.project_img.url" alt="" />
        <div class="c-projects__texts">
          <h3 class="c-projects__titles">{{ item.project_title[0].text }}</h3>
          <p class="c-projects__tags">
            <span v-for="({ text }, i) in item.project_stack" :key="i">{{
              text
            }}</span>
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.c-projects {
  padding-top: rem(100);
  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img {
    order: 2;
    max-width: rem(450);
  }
  &__texts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
  &__titles {
    font-size: 4vw;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
  }

  &__tags {
    display: flex;
    gap: rem(5);
    span {
      display: block;
      border: 1px solid $black;
      border-radius: rem(5);
      padding: rem(5) rem(10);
    }
  }
  &__item {
    &:nth-child(n) {
      margin-top: rem(50);
    }
    align-items: center;
    display: flex;
    max-height: rem(300);
    border: 2px solid black;
    color: $black;
    text-decoration: none;
    padding: rem(20);
    margin: rem(20);
  }
}
</style>
