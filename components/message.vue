<template>
  <div
    ref="el"
    class="wrapper"
    :class="{ 'self-end': props.inverted }"
    :style="{
      '--x-tr': translation,
      '--opacity': opacity,
    }"
  >
    <div
      class="flex flex-1 flex-row items-center gap-4"
      :class="{ 'justify-end': props.inverted }"
    >
      <div :class="{ 'order-last': props.inverted }">
        <div
          class="h-[3rem] w-[3rem] overflow-clip rounded-full md:h-[4.5rem] md:w-[4.5rem]"
        >
          <img :src="props.photoUrl" />
        </div>
      </div>
      <div
        class="rounded-default flex max-w-[90%] flex-col justify-end text-wrap break-words py-4 lg:max-w-[50%]"
        :class="{ 'bg-surface': !hideBackground }"
      >
        <div :class="{ 'px-6': !photo }">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);

const el = ref<HTMLElement | null>(null);
const animator = useAnimator();
const windowSize = useWindowSize();
const visible = ref(false);

const opacity = computed(() => (visible.value ? animator.percentage.value : 0));
const translation = computed(
  () => (props.inverted ? 75 : -75) * (1 - animator.percentage.value) + "px",
);

useIntersectionObserver(
  el,
  (entries) => {
    if (el === null) return;
    var rect = el.value?.getBoundingClientRect();
    if (entries[0].isIntersecting) {
      visible.value = true;
      if (rect?.top != null && rect?.top > windowSize.height.value / 4) {
        animator.start({ currentDuration: 400, easingCallback: ease });
      } else {
        animator.set(1);
      }
    } else {
      if (rect?.top != null && rect?.top > windowSize.height.value / 4) {
        animator.start({
          currentDuration: 400,
          easingCallback: ease,
          inverse: true,
          onComplete: () => (visible.value = false),
        });
      } else {
        visible.value = false;
      }
    }
  },
  {
    threshold: 0,
    rootMargin:
      "0% 0% " + (breakpoints.smallerOrEqual("sm") ? "-20%" : "-40%") + " 0%",
  },
);

function ease(x: number): number {
  let ix = 1 - x;
  return 1 - ix * ix * ix;
}

const props = defineProps({
  inverted: { type: Boolean, required: false, default: false },
  photoUrl: { type: String, required: true },
  hideBackground: { type: Boolean, required: false, default: false },
  photo: { type: Boolean, required: false, default: false },
});
</script>

<style lang="css" scoped>
.wrapper {
  opacity: var(--opacity);
  transform: translateX(var(--x-tr, 0));
  @apply flex w-full flex-col;
}
</style>
