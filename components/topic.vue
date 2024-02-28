<template>
  <Transition name="join" appear tag="div">
    <div
      class="my-[var(--content-padding)] flex w-full flex-col items-center justify-center gap-[4rem] pt-4 lg:flex-row"
    >
      <div class="basis-[40%]" :class="{ 'order-last': invertOrder }">
        <h3 class="font-semibold text-accent">
          {{ props.subtitle }}
        </h3>
        <h1 class="font-bold">{{ props.title }}</h1>
        <slot name="body"></slot>
        <div v-if="(buttonText ?? '')?.length > 0">
          <SecondaryButton @click="emit('click')" class="mt-4">{{
            props.buttonText
          }}</SecondaryButton>
        </div>
      </div>
      <div class="">
        <div class="basis-[60%]">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const emit = defineEmits(["click"]);
const media = useBreakpoints(breakpointsTailwind);

const invertOrder = computed(() => {
  if (media.smallerOrEqual("lg").value) return false;
  return props.inverted;
});

const props = defineProps({
  title: { type: String, require: true },
  subtitle: { type: String, require: true },
  buttonText: { type: String, require: true },
  inverted: { type: Boolean, require: false, default: false },
});
</script>

<style lang="css" scoped></style>
