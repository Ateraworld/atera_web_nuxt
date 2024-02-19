<template>
  <Transition name="join" appear tag="div">
    <div
      class="flex w-full flex-col items-center justify-center py-12 lg:flex-row"
      :class="{ 'text-end': props.inverted }"
      :style="{ '--duration': '1000ms' }"
    >
      <div
        class="mx-4 max-w-[100%] lg:max-w-[50%]"
        :class="{ 'order-last': invertOrder }"
      >
        <h3 class="text-xl font-semibold text-accent">{{ props.subtitle }}</h3>
        <h1 class="pb-8 pt-4 text-6xl font-bold">{{ props.title }}</h1>
        <p>
          {{ props.body }}
        </p>
        <SecondaryButton @click="emit('click')" class="mt-4">{{
          props.buttonText
        }}</SecondaryButton>
      </div>
      <div class="flex items-center justify-end">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const emit = defineEmits(["click"]);
const media = useBreakpoints(breakpointsTailwind);

const invertOrder = computed(() => {
  console.log(media.smallerOrEqual("lg").value);
  if (media.smallerOrEqual("lg").value) return false;
  return props.inverted;
});

const props = defineProps({
  title: { type: String, require: true },
  subtitle: { type: String, require: true },
  buttonText: { type: String, require: true },
  body: { type: String, require: true },
  inverted: { type: Boolean, require: false, default: false },
});
</script>

<style></style>
