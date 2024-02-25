<template>
  <Transition name="join" appear tag="div">
    <div
      class="flex w-full flex-col items-center justify-between py-32 lg:flex-row"
      :style="{ '--duration': '1000ms' }"
    >
      <div
        :style="{ '--text-percentage': props.textPercentage + '%' }"
        class="content"
        :class="{ 'order-last': invertOrder }"
      >
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
      <div
        class="flex w-[60%] items-center justify-center"
        :class="'w-[' + (100 - props.textPercentage) + '%]'"
      >
        <slot name="content"></slot>
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
  textPercentage: { type: Number, default: 60 },
  inverted: { type: Boolean, require: false, default: false },
});
</script>

<style lang="css" scoped>
.content {
  @apply mx-4 max-w-[100%] lg:w-[var(--text-percentage)];
}
</style>
