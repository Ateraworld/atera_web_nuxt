<template>
  <button class="btn group" @click="emit('click')">
    <div class="flex items-center justify-center space-x-2">
      <p><slot></slot></p>
      <AnimatedArrow></AnimatedArrow>
    </div>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<style lang="css" scoped>
* {
  --anim-duration: 250ms;
}

.btn {
  transition: all var(--anim-duration) ease;
  @apply rounded-xl border-[1.5px] border-solid border-accent bg-transparent py-2 pl-6 pr-4 font-semibold text-accent hover:bg-accent hover:text-neutral;
}
</style>
