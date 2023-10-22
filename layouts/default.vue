<script setup></script>

<template>
  <header class="header">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <NuxtLink to="/portfolio">Projects</NuxtLink>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">footer</footer>
</template>

<style lang="scss">
body {
  color: $white;
  background: radial-gradient(
      50% 50% at 100% 0,
      $primaryBgColor 0 5%,
      $secondaryBgColor 6% 15%,
      $primaryBgColor 16% 25%,
      $secondaryBgColor 26% 35%,
      $primaryBgColor 36% 45%,
      $secondaryBgColor 46% 55%,
      $primaryBgColor 56% 65%,
      $secondaryBgColor 66% 75%,
      $primaryBgColor 76% 85%,
      $secondaryBgColor 86% 95%,
      transparent 96%
    ),
    radial-gradient(
      50% 50% at 0 100%,
      $primaryBgColor 0 5%,
      $secondaryBgColor 6% 15%,
      $primaryBgColor 16% 25%,
      $secondaryBgColor 26% 35%,
      $primaryBgColor 36% 45%,
      $secondaryBgColor 46% 55%,
      $primaryBgColor 56% 65%,
      $secondaryBgColor 66% 75%,
      $primaryBgColor 76% 85%,
      $secondaryBgColor 86% 95%,
      transparent 96%
    ),
    radial-gradient(
      50% 50% at 50%,
      $primaryBgColor 0 5%,
      $secondaryBgColor 6% 15%,
      $primaryBgColor 16% 25%,
      $secondaryBgColor 26% 35%,
      $primaryBgColor 36% 45%,
      $secondaryBgColor 46% 55%,
      $primaryBgColor 56% 65%,
      $secondaryBgColor 66% 75%,
      $primaryBgColor 76% 85%,
      $secondaryBgColor 86% 95%,
      transparent 96%
    ),
    radial-gradient(
        50% 50% at 50%,
        $primaryBgColor 0 5%,
        $secondaryBgColor 6% 15%,
        $primaryBgColor 16% 25%,
        $secondaryBgColor 26% 35%,
        $primaryBgColor 36% 45%,
        $secondaryBgColor 46% 55%,
        $primaryBgColor 56% 65%,
        $secondaryBgColor 66% 75%,
        $primaryBgColor 76% 85%,
        $secondaryBgColor 86% 95%,
        transparent 96%
      )
      20px 20px;
  background-color: rgba(0, 0, 0, 0);
  background-size: auto, auto, auto, auto;
  background-color: $primaryBgColor;
  background-size: 40px 40px;
  .header {
    height: 100px;
    display: flex;
    gap: 20px;
  }
  .main {
    min-height: 100vh;
  }
  .footer {
    height: 100px;
  }
}
</style>
