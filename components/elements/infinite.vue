<script lang="ts" setup>
const props = defineProps({
  content: {
    type: String as PropType<string>,
    required: true,
  },
  variant: {
    type: String as PropType<string>,
    required: false,
  },
  color: {
    type: String as PropType<string>,
    required: false,
  },
});

const classes = computed(() => {
  return {
    " -reverse": props.variant === "reverse",
    " -red": props.color === "red",
    " -orange": props.color === "orange",
    " -green": props.color === "green",
    " -yellow": props.color === "yellow",
    " -purple": props.color === "purple",
  };
});
</script>

<template>
  <div class="e-infinite" :class="classes">
    <p>{{ content }}</p>
    <span>{{ content }}</span>
    <span>{{ content }}</span>
    <span>{{ content }}</span>
    <span>{{ content }}</span>
    <span>{{ content }}</span>
    <span>{{ content }}</span>
  </div>
</template>

<style lang="scss">
.e-infinite {
  overflow: hidden;
  background: rgb(219, 100, 255);
  padding: rem(5) rem(20);
  display: flex;
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 700;
  * {
    margin: 0;
    min-width: 300px;
    margin-left: 100px;
    animation: slide 40s linear infinite;
  }
  &.-red {
    background: rgb(255, 89, 89);
  }
  &.-orange {
    background: rgb(255, 188, 63);
  }
  &.-green {
    background: rgb(0, 255, 115);
  }
  &.-yellow {
    background: rgb(255, 255, 0);
  }
  &.-purple {
    background: rgb(219, 100, 255);
  }
  &.-reverse {
    * {
      animation-direction: reverse;
    }
  }
}
@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1500px, 0, 0); /* The image width */
  }
}
</style>
