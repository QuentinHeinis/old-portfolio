<script setup>
import { emitLeaveHovered, emitHovered } from "~/utils/emit";
</script>

<template>
  <div class="p-about">
    <h1
      class="p-about__text"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      About Me
    </h1>
    <p
      class="p-about__text"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      I'm currently a student at <i>MMI Montbéliard.</i>
    </p>
    <infinite content="about me" />
    <p class="p-about__text -small">
      I first learned to code in
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-red"
        >2020</i
      >
      because i was curious to know how games was made.
    </p>
    <p class="p-about__text -small">
      So i learned how to use
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-purple">unity</i> and i
      made my first game using
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-purple">C#</i>.
    </p>
    <p class="p-about__text -small">
      Then i wanted to learn more about web development so i learned
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered">
        HTML, CSS and Javascript.
      </i>
    </p>
    <p class="p-about__text -small">
      At school, I learned how to use
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-green">Vuejs</i> and
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-green">Nuxtjs</i>
      which are now my favorites framework.
    </p>
    <p
      class="p-about__text -small"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      I learned also
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-blue">Reactjs</i> and
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-blue">Nextjs</i> in
      my free time.
    </p>
    <p class="p-about__text -small">
      Now, my biggest project I'm working on is a game engine made in
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-red">C++</i>.
    </p>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/QuentinHeinis/SuihiraForge"
      class="p-about__text -small"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
      ><span class="p-about__link">Click here&nbsp;</span> if you want to check
      how it goes</a
    >
    <infinite content="about me" variant="reverse" color="yellow"/>
  </div>
</template>

<style lang="scss">
.p-about {
  a {
    color: $black;
    text-decoration: none;
  }
  &__text {
    i {
      font-style: normal;
      color: rgb(255, 136, 0);
      &.-red {
        color: rgb(255, 89, 89);
      }
      &.-green {
        color: rgb(0, 255, 115);
      }
      &.-purple {
        color: rgb(219, 100, 255);
      }
      &.-blue {
        color: rgb(0, 140, 255);
      }
    }
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    font-size: 9vw;
    letter-spacing: -5px;
    &.-color {
      color: rgb(255, 136, 0);
    }
    &.-small {
      padding: rem(15) 0;
      letter-spacing: 0;
      font-size: 4vw;
    }
  }
  &__link {
    font-weight: 700;
    font-size: 4vw;
    letter-spacing: 0;
    color: rgb(249, 60, 255);
  }
  &__img {
    max-height: 8vw;
    &.-space {
      padding: 0 2%;
    }
  }
}
</style>
