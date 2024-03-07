<template>
  <ScrollJoin :x-trasl="xTrasl">
    <div
      class="flex flex-1 flex-row items-center gap-4"
      :class="{ 'justify-end': props.inverted }"
    >
      <div :class="{ 'order-last': props.inverted }">
        <div
          class="h-[3rem] w-[3rem] overflow-clip rounded-full md:h-[4.5rem] md:w-[4.5rem]"
        >
          <img alt="Avatar" :src="props.photoUrl" />
        </div>
      </div>
      <div
        class="rounded-default flex max-w-[90%] flex-col justify-end text-wrap break-words py-4 lg:max-w-[50%]"
        :class="{ 'bg-surface': !hideBackground }"
      >
        <div :class="{ 'px-6': !photo }">
          <slot></slot>
        </div>
      </div></div
  ></ScrollJoin>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);

const xTrasl = computed(() => {
  let trasl = 0;
  if (breakpoints.smallerOrEqual("md").value) {
    trasl = 10;
  } else {
    trasl = 60;
  }
  if (!props.inverted) {
    trasl *= -1;
  }
  return trasl;
});

const props = defineProps({
  inverted: { type: Boolean, required: false, default: false },
  photoUrl: { type: String, required: true },
  hideBackground: { type: Boolean, required: false, default: false },
  photo: { type: Boolean, required: false, default: false },
});
</script>

<style lang="css" scoped></style>
