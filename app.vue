<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss">
.page-enter-active {
  animation: bounce-in 0.5s;
}
.page-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
