<template>
  <div @click="click" class="cursor-pointer">
    <Transition ref="el" name="join" appear tag="div">
      <div class="card-wrapper group" :style="animStyle">
        <div
          :style="style"
          @mousemove="mouseMove"
          @mouseleave="mouseLeave"
          @mouseenter="mouseEnter"
          class="card"
        >
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const mouseTrMagnitude = 0;
const el = ref(null);
const scrollControlled = ref(true);
const size = useWindowSize();
const initialPosition = ref(0);

const mouseTranslateX = ref(0);
const translateY = ref(0);
const mouseTranslateY = ref(0);

const { x, y, top, right, bottom, left, width, height } =
  useElementBounding(el);

function clamp(v: number, min: number, max: number): number {
  return Math.min(Math.max(v, min), max);
}
function getParallaxMagnitude(): number {
  return breakpoints.smallerOrEqual("md").value ? 40 : 120;
}
function remap(
  v: number,
  startMin: number,
  startMax: number,
  targetMin: number,
  targetMax: number,
): number {
  return (
    targetMin +
    ((targetMax - targetMin) / (startMax - startMin)) * (v - startMin)
  );
}

onMounted(() => {
  initialPosition.value = 1 - top.value / size.height.value;
});

const style = computed(() => {
  return {
    "--translate-y": -(translateY.value + mouseTranslateY.value) + "px",
    "--translate-x": mouseTranslateX.value + "px",
  };
});

function click(event: MouseEvent) {
  emit("click", event);
}

watch(top, () => {
  let rate = clamp(
    remap(1 - top.value / size.height.value, initialPosition.value, 1, -1, 1),
    -1,
    1,
  );
  translateY.value = rate * getParallaxMagnitude();
});

const props = defineProps({
  animDelay: { type: String, requirec: false, default: "0ms" },
  animDuration: { type: String, requirec: false, default: "400ms" },
  animXTrasl: { type: String, requirec: false, default: "0px" },
  animYTrasl: { type: String, requirec: false, default: "0px" },
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function mouseEnter(event: MouseEvent) {
  scrollControlled.value = false;
}
function mouseLeave(event: MouseEvent) {
  mouseTranslateX.value = 0;
  mouseTranslateY.value = 0;
  scrollControlled.value = true;
}
function mouseMove(event: MouseEvent) {
  if (scrollControlled.value) return;
  let centerX = x.value + width.value / 2;
  let centerY = y.value + height.value / 2;
  let offsetX = (event.x - centerX) / (width.value / 2);
  let offsetY = (event.y - centerY) / (height.value / 2);
  mouseTranslateX.value = offsetX * mouseTrMagnitude;
  mouseTranslateY.value = -offsetY * mouseTrMagnitude;
}

const animStyle = computed(() => {
  return {
    "--delay-tr": props.animDelay,
    "--duration-tr": props.animDuration,
    "--x-tr": props.animXTrasl,
    "--y-tr": props.animYTrasl,
  };
});
</script>

<style lang="css" scoped>
* {
  --border: 1.5px;
  --parallax: 52px;
}

.card-wrapper {
  @apply h-full w-full;
}

.card {
  transition: all ease-out 180ms;
  position: relative;
  border: var(--border) solid;
  transform: translateY(var(--translate-y)) translateX(var(--translate-x));
  @apply rounded-card h-full w-full border-outline bg-surface;
}
.content {
  @apply transition-all duration-300 ease-out;
}
</style>
