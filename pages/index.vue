<template>
  <Content @mode-changed="modeChanged"></Content>
</template>

<script lang="ts" setup>
const mode = ref(false);
const { x, y } = useMouse();

function modeChanged(businessMode: boolean) {
  mode.value = businessMode;
}
</script>

<style lang="css" scoped>
.gradient {
  --size: 400rem;
  --blur: 24rem;
  position: fixed;
  width: var(--size);
  height: var(--size);
  /* top: 100vh;
  transform: translateY(-100%); */
  bottom: calc(var(--size) * -0.975);
  left: 0;
  z-index: 0;
  transform: translateX(calc(var(--x) - var(--size) * 0.5));
  filter: blur(var(--blur));
  @apply rounded-full bg-accent/20;
}
</style>
