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
</script>

<template>
  <div>
    <h1>
      {{ project.data.project_name[0].text }}
    </h1>
    <img :src="project.data.project_img.url" alt="">
    <p>{{ project.data.project_date }}</p>
    <p>{{ project.data.project_type }}</p>
    <p>{{ project.data.project_stack }}</p>
    <prismic-rich-text :field="project.data.project_desc"/>
    <p v-if="project.data.project_link.url">{{ project.data.project_link.url }}</p>
    <img v-for="({project_image}, index) in project.data.project_images" :key="index" :src="project_image.url" alt="">
  </div>
</template>

<style lang="scss"></style>
