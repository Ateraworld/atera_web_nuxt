<template>
  <button class="btn group" @click="emit('click')">
    <div class="flex justify-center space-x-2">
      <p><slot></slot></p>
      <div class="icon-wrapper">
        <div class="-translate-y-[0.15px]">
          <div class="arrow-line"></div>
        </div>
        <Icon class="arrow-head" icon="iconamoon:arrow-right-2"></Icon>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const emit = defineEmits(["click"]);
</script>

<style lang="css" scoped>
* {
  --length: 12px;
  --icon-size: 24px;
  --anim-duration: 250ms;
}
.icon-wrapper {
  @apply flex translate-x-[var(--length)] place-items-center -space-x-[var(--length)];
}
.arrow-line {
  width: var(--length);
  height: 2px;
  transition: all var(--anim-duration) ease;
  @apply origin-left translate-y-[-0.15px] scale-x-0 rounded-full bg-accent group-hover:scale-100 group-hover:bg-text;
}
.arrow-head {
  width: var(--icon-size);
  height: var(--icon-size);
  transform: translateX(calc(var(--length) * -1.2));
  transition: all var(--anim-duration) ease;
  @apply text-accent group-hover:-translate-x-[2px] group-hover:text-text;
}
.btn {
  transition: all var(--anim-duration) ease;
  @apply rounded-lg border-[1.5px] border-solid border-accent bg-transparent py-2 pl-6 pr-4 font-semibold text-accent  hover:bg-accent hover:text-text;
}
</style>
