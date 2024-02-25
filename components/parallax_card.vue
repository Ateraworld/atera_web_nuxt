<template>
  <div @click="click" v-if="mounted" class="cursor-pointer">
    <Transition ref="el" name="join" appear tag="div">
      <div class="card-wrapper" :style="rootStyle">
        <div
          :style="{
            '--rotate-x': renderingContext.rotateY + 'deg',
            '--rotate-y': -renderingContext.rotateX + 'deg',
          }"
          class="card"
          @mousemove="mouseMove"
          @mouseleave="mouseLeave"
          @mouseenter="mouseEnter"
        >
          <div class="gradient-clipper">
            <div
              class="gradient"
              :style="{
                '--x': renderingContext.mouseX + '%',
                '--y': renderingContext.mouseY + '%',
                '--opacity': renderingContext.gradientOpacity,
              }"
            ></div>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const tiltAngle = 8;

const el = ref(null);
const mounted = ref(false);

function click(event: MouseEvent) {
  emit("click", event);
}

onMounted(() => {
  mounted.value = true;
});

const renderingContext = reactive({
  rotateX: 0,
  rotateY: 0,
  mouseX: 0,
  mouseY: 0,
  gradientOpacity: 0,
});

const { x, y, top, right, bottom, left, width, height } =
  useElementBounding(el);

const props = defineProps({
  animDelay: { type: String, require: false, default: "0ms" },
  animDuration: { type: String, require: false, default: "300ms" },
  animXTrasl: { type: String, require: false, default: "0px" },
  animYTrasl: { type: String, require: false, default: "0px" },
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function mouseEnter(event: MouseEvent) {
  renderingContext.gradientOpacity = 1;
}
function mouseLeave(event: MouseEvent) {
  renderingContext.rotateX = 0;
  renderingContext.rotateY = 0;
  renderingContext.gradientOpacity = 0;
}
function mouseMove(event: MouseEvent) {
  let centerX = x.value + width.value / 2;
  let centerY = y.value + height.value / 2;
  let offsetX = (event.x - centerX) / (width.value / 2);
  let offsetY = (event.y - centerY) / (height.value / 2);
  renderingContext.rotateX = offsetX * tiltAngle;
  renderingContext.rotateY = offsetY * tiltAngle;
  renderingContext.mouseX = (100 * (offsetX + 1)) / 2;
  renderingContext.mouseY = (100 * (offsetY + 1)) / 2;
}

const rootStyle = computed(() => {
  return {
    "--delay": props.animDelay,
    "--duration": props.animDuration,
    "--x-tr": props.animXTrasl,
    "--y-tr": props.animYTrasl,
  };
});
</script>

<style lang="css" scoped>
* {
  --border: 1.5px;
  --border-radius: 2rem;
  --parallax: 52px;
  --gradient-size: 16rem;
  --gradient-blur-size: 10rem;
}

.card-wrapper {
  perspective: 2000px;
  @apply h-full w-full;
}

.card {
  transform-style: preserve-3d;
  transition: all ease-out;
  position: relative;
  border: var(--border) solid;
  transition-duration: 200ms;
  transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
  @apply h-full w-full rounded-[var(--border-radius)] border-outline bg-surface p-10;
}

.gradient-clipper {
  inset: 0;
  border-radius: inherit;
  overflow: clip;
  overflow-clip-margin: var(--border);
  @apply absolute;
}

.content {
  translate: 0 0 var(--parallax);
  @apply flex h-full w-full flex-wrap items-start justify-center md:justify-between;
}

.gradient {
  width: var(--gradient-size);
  height: var(--gradient-size);
  opacity: var(--opacity);
  position: absolute;
  top: var(--y);
  left: var(--x);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 1s ease;
  @apply rounded-full bg-accent/50 blur-[var(--gradient-blur-size)];
}
</style>
