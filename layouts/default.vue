<script setup>
const cursor = ref();
const isInit = ref(false);
const isScrolled = ref(false);
const isHovered = ref(false);
const scrollTop = ref();
onMounted(() => {
  cursor.value.focus();
  isInit.value = true;

  // add event listeners
  window.addEventListener("mousemove", positionElement);
  window.addEventListener("hovered", handleHover);
  window.addEventListener("leave", handleLeave);
  window.addEventListener("scroll", handleScroll);
});

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.value.style.top = `${mouseY}px`;
  cursor.value.style.left = `${mouseX}px`;
};

const handleHover = () => {
  isHovered.value = true;
};

const handleLeave = () => {
  isHovered.value = false;
};

const handleScroll = () => {
  if (window.scrollY > 10) {
    isScrolled.value = true;
    scrollTop.value.style.animation = "pop-up 0.5s ease";
  } else {
    isScrolled.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// remove event listeners
onUnmounted(() => {
  window.removeEventListener("mousemove", positionElement);
  window.removeEventListener("hovered", handleHover);
  window.removeEventListener("leave", handleLeave);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <span ref="cursor" :class="{ cursor: isInit, ' -hovered': isHovered }"></span>
  <span class="scrollTop" @click="scrollToTop()" ref="scrollTop" v-if="isScrolled">
    <span class="scrollTop__wrap">
      <img src="/127.png" alt="" />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle id="curve" cx="50" cy="50" r="50" fill="none" />
        <text width="500">
          <textPath xlink:href="#curve">
            Scroll to top &nbsp; - Scroll to top &nbsp;- Scroll to top -
          </textPath>
        </text>
      </svg>
    </span>
  </span>

  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/" class="header__link">Quentin Heinis</NuxtLink>
      <NuxtLink class="header__link" to="/about">About</NuxtLink>
      <NuxtLink class="header__link" to="/portfolio">Projects</NuxtLink>
      <NuxtLink class="header__link" to="/contact">Contact</NuxtLink>
    </nav>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">footer</footer>
</template>

<style lang="scss">
@keyframes pop-up {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
body {
  color: $black;
  background: $white;
  cursor: none;
  .scrollTop {
    cursor: pointer;
    height: rem(120);
    width: rem(120);
    position: fixed;
    z-index: 150;
    bottom: 5%;
    right: 5%;
    background: rgb(255, 89, 89);
    border-radius: 100%;
    &__wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      position: relative;
      img {
        width: 50%;
        height: 50%;
      }
      svg {
        overflow: visible;
        position: absolute;
        top: 0;
        left: 0;
        scale: 0.75;
        animation: rotate 10s linear infinite;
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  .cursor {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    width: rem(30);
    height: rem(30);
    background: $white;
    border-radius: 50%;
    transition: width 0.2s ease, height 0.2s ease;
    &.-hovered {
      width: rem(100);
      height: rem(100);
    }
  }
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
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 4.5vw;
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
