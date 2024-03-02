<template>
  <div :key="key" ref="el">
    <div
      class="animated"
      :style="{
        '--x-tr': translationX,
        '--y-tr': translationY,
        '--opacity': opacity,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  yTrasl: { type: Number, required: false, default: 0 },
  xTrasl: { type: Number, required: false, default: 0 },
  initVisible: { type: Boolean, required: false, default: false },
  duration: { type: Number, required: false, default: 250 },
});
const el = ref<HTMLElement | null>(null);
const animator = useAnimator();
const visible = ref(props.initVisible);
const key = ref(0);
const window = useWindowSize();

const rootMargin = computed(() => {
  return "0% 0% -40% 0%";
});

const opacity = computed(() => (visible.value ? animator.percentage.value : 0));
const translationX = computed(
  () => props.xTrasl * (1 - animator.percentage.value) + "px",
);
const translationY = computed(
  () => props.yTrasl * (1 - animator.percentage.value) + "px",
);

useIntersectionObserver(
  el,
  (entries) => {
    if (el === null) return;
    var rect = el.value?.getBoundingClientRect();
    if (entries[0].isIntersecting) {
      visible.value = true;
      if (rect?.top != null && rect?.top > 20) {
        animator.start({
          currentDuration: props.duration,
          easingCallback: ease,
        });
      } else {
        animator.set(1);
      }
    } else {
      if (rect?.top != null && rect?.top > 20) {
        animator.start({
          currentDuration: props.duration,
          easingCallback: ease,
          inverse: true,
          onComplete: () => {
            key.value++;
            visible.value = false;
          },
        });
      } else {
        visible.value = false;
        key.value++;
      }
    }
  },
  {
    threshold: 0,
    rootMargin: rootMargin.value,
  },
);

function ease(x: number): number {
  let ix = 1 - x;
  return 1 - ix * ix * ix;
}
</script>

<style lang="css" scoped>
.animated {
  opacity: var(--opacity);
  transform: translateX(var(--x-tr, 0)) translateY(var(--y-tr, 0));
}
</style>
