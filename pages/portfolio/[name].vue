<script setup>
const { client } = usePrismic();
const route = useRoute();
const name = route.params.name;

const { data: project } = await useAsyncData(name, async () => {
  const document = await client.getByUID("project", name);

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
useSeoMeta({
  title: project.value.data.project_name[0].text,
  ogTitle: project.value.data.project_name[0].text,
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
</script>

<template>
  <div class="p-portfolioProject">
    <div class="p-portfolioProject__flex">
      <h1>
        {{ project.data.project_name[0].text }} -
        {{ project.data.project_date }}
      </h1>
      <img :src="project.data.project_img.url" alt="" />
    </div>
    <h2 class="-red">Type of project</h2>
    <p class="p-portfolioProject__flex">
      {{ project.data.project_type }}
      <a
        v-if="project.data.project_link.url"
        target="_blank"
        rel="noopener noreferrer"
        :href="project.data.project_link.url"
        class="p-portfolioProject__link"
        @mouseleave="emitLeaveHovered"
        @mouseover="emitHovered"
      >
        Check project
      </a>
    </p>
    <hr />
    <h2 class="-blue">Stack used</h2>
    <p>{{ project.data.project_stack }}</p>
    <hr />
    <h2 class="-purple">Project description</h2>
    <prismic-rich-text :field="project.data.project_desc" />
    <hr />
    <h2 class="-orange">Visuals</h2>
    <br />
    <img
      class="p-portfolioProject__img"
      v-for="({ project_image }, index) in project.data.project_images"
      :key="index"
      :src="project_image.url"
      alt=""
    />
  </div>
</template>

<style lang="scss">
.p-portfolioProject {
  padding: 0 7.5%;
  &__link {
    display: block;
    text-align: center;
    color: $black;
  }
  h1 {
    text-align: center;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(128, 128, 128);
    margin: 0;
    font-size: rem(20);
    &.-red {
      color: rgb(255, 89, 89);
    }
    &.-blue {
      color: rgb(0, 140, 255);
    }
    &.-purple {
      color: rgb(219, 100, 255);
    }
    &.-orange {
      color: rgb(255, 136, 0);
    }
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @include medium-up {
      flex-wrap: nowrap;
    }
    img {
      max-height: rem(300);
      object-fit: contain;
    }
  }
  img {
    width: 100%;
  }
  &__img {
    width: 100%;
  }
}
</style>
