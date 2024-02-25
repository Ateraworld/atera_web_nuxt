<template>
  <div class="0 flex flex-row items-center">
    <slot></slot>
    <div class="icon-wrapper">
      <div class="-translate-y-[0.15px]">
        <div class="arrow-line"></div>
      </div>
      <Icon class="arrow-head" name="iconamoon:arrow-right-2"></Icon>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
  @apply origin-left translate-y-[-0.15px] scale-x-0 rounded-full bg-accent group-hover:scale-100 group-hover:bg-neutral;
}
.arrow-head {
  width: var(--icon-size);
  height: var(--icon-size);
  transform: translateX(calc(var(--length) * -1.2));
  transition: all var(--anim-duration) ease;
  @apply text-accent group-hover:-translate-x-[2px] group-hover:text-neutral;
}
</style>
