<template>
  <head></head>

  <body>
    <Navbar></Navbar>
    <Content>
    </Content>
    <div class="gradient"></div>
  </body>
</template>

<script lang="ts" setup>
import { useMouse } from "@vueuse/core";
const { x, y, sourceType } = useMouse();

const gradientX = computed(() => `${x.value}px`);

</script>

<style lang="css" scoped>
* {
  --gradient-size: 512rem;
  --gradient-blur-size: 8rem;
  --gradient-top-dist: 28rem;
  --gradient-color: theme("colors.surface.950/30");
}

.gradient {
  width: var(--gradient-size);
  height: var(--gradient-size);
  position: relative;
  z-index: 0;
  top: var(--gradient-top-dist);
  transform: translateX(calc(v-bind(gradientX) - calc(var(--gradient-size) * 0.5)));
  @apply rounded-full bg-[var(--gradient-color)] blur-[var(--gradient-blur-size)];
}
</style>
<!-- @apply bottom-0 h-[500px] w-[500px] rounded-full bg-red-900 blur-[1]; -->
