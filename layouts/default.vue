<script setup></script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <img src="/favicon.ico" alt="" />
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink class="header__link" to="/">Home</NuxtLink>
      <NuxtLink class="header__link" to="/about">About</NuxtLink>
      <NuxtLink class="header__link" to="/contact">Contact</NuxtLink>
      <NuxtLink class="header__link" to="/portfolio">Projects</NuxtLink>
    </nav>
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
  padding: 0 rem(16);
  
  .header {
    max-width: rem(1200);
    margin: 0 auto;
    height: rem(64);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__link {
      text-decoration: none;
      color: $white;
    }
    &__nav {
      display: flex;
      gap: 20px;
    }
    &__logo {
      width: rem(32);
      height: rem(32);
    }
  }
  .main {
    max-width: rem(1200);
    margin: 0 auto;
    min-height: 100vh;
  }
  .footer {
    max-width: rem(1200);
    margin: 0 auto;
    height: 100px;
  }
}
</style>
