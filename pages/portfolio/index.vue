<script setup>
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
    item.project.tags.includes("visible")
  )
);

useSeoMeta({
  title: "Quentin Heinis || Portfolio",
  ogTitle: "Quentin Heinis || Portfolio",
  description: "Check out my projects",
  ogDescription: "Check out my projects",
  ogImage: "/favicon.png",
});
</script>

<template>
  <div class="p-portfolio">
    <h1>Projects</h1>
    <SelectedProject :data="selectedProject" :showBanner="false" />
  </div>
</template>

<style lang="scss">
.p-portfolio {
  h1 {
    text-align: center;
    margin-bottom: rem(-50);
  }
}
</style>
