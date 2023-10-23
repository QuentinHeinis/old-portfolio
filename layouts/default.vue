<script setup></script>

<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/" class="header__link"> Quentin Heinis</NuxtLink>
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
  color: $black;

  .header {
    position: sticky;
    top: 0;
    min-height: rem(64);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    &__link {
      text-decoration: none;
      color: $black;
    }
    &__nav {
      font-size: 4.8vw;
      font-weight: 600;
      letter-spacing: -2px;
      :nth-child(1):hover {
          color: rgb(255, 62, 62);
      }
      :nth-child(2):hover {
          color: rgb(0, 174, 255);
      }
      :nth-child(3):hover {
          color: rgb(9, 255, 0);
      }
      :nth-child(4):hover {
          color: rgb(249, 60, 255);
      }
    }
    &__logo {
      width: rem(32);
      height: rem(32);
    }
  }
  .main {
    z-index: 1;
    position: relative;
    background: $white;
    border-top: 2px solid $black;
    min-height: 100vh;
  }
  .footer {
    max-width: rem(1200);
    margin: 0 auto;
    height: 100px;
  }
}
</style>
