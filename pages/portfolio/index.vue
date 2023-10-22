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
// console.log(projects.value);
</script>

<template>
  <div class="p-portfolio">
    <h1>Projects</h1>
    <NuxtLink
      class="p-portfolio__link"
      v-for="(item, index) in projects.data.project_list"
      :key="index"
      :to="`portfolio/${item.project.uid}`"
    >
      <div>
        <h2>{{ item.project_title[0].text }}</h2>
        <img :src="item.project_img.url" alt="">
        <p v-for="({text}, i) in item.project_stack" :key="i">{{ text }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.p-portfolio {
  &__link {
    color: $white;
    text-decoration: none;
  }
}
</style>
