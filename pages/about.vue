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
    <infinite content="about me" class="p-about__gap" />
    <p class="p-about__text -small">
      I first learned to code in
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-red"
        >2020</i
      >
      because i was curious to know how games was made.
    </p>
    <p class="p-about__text -small">
      So i learned how to use
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-purple"
        >unity</i
      >
      and i made my first game using
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-purple"
        >C#</i
      >.
    </p>
    <p class="p-about__text -small">
      Then i wanted to learn more about web development so i learned
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered">
        HTML, CSS and Javascript.
      </i>
    </p>
    <img class="p-about__img" src="/56.png" alt="" />
    <p class="p-about__text -small">
      At school, I learned how to use
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-green"
        >Vuejs</i
      >
      and
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-green"
        >Nuxtjs</i
      >
      which are now my favorites framework.
    </p>

    <p
      class="p-about__text -small"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    >
      I learned also
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-blue"
        >Reactjs</i
      >
      and
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-blue"
        >Nextjs</i
      >
      in my free time.
    </p>
    <p class="p-about__text -small">
      Now, my biggest project I'm working on is a game engine made in
      <i @mouseleave="emitLeaveHovered" @mouseover="emitHovered" class="-red"
        >C++</i
      >.
    </p>
    <img class="p-about__img"
      src="/80.png"
      alt=""
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
    />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/QuentinHeinis/SuihiraForge"
      class="p-about__text -small"
      @mouseleave="emitLeaveHovered"
      @mouseover="emitHovered"
      ><i class="-purple">Click here&nbsp;</i> if you want to check how it
      goes</a
    >
    <infinite
      content="about me"
      variant="reverse"
      color="yellow"
      class="p-about__gap"
    />
  </div>
</template>

<style lang="scss">
.p-about {
  &__gap {
    margin: rem(50) 0;
  }
  a {
    color: $black;
    text-decoration: none;
  }
  &__text {
    display: block;
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
      i {
        font-size: rem(24);
        text-transform: uppercase;
      }
      padding: rem(10) 0;
      letter-spacing: 0;
      font-size: rem(18);
      text-transform: none;
    }
  }
  &__img{
    margin-top: -10%;
    margin-bottom: -10%;
  }
}
</style>
