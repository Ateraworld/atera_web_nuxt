<template>
  <head></head>
  <body
    :class="{
      business: mode.$state.businessMode,
      user: !mode.$state.businessMode,
    }"
  >
    <div v-if="mounted" class="overscroll-none">
      <div class="gradient" :style="{ '--x': x + 'px' }"></div>
    </div>
    <Transition name="fade" mode="out-in">
      <div
        v-if="mounted"
        :style="{ '--duration-tr': '250ms' }"
        class="flex h-full flex-col justify-start"
      >
        <Headline></Headline>
        <NuxtPage class="flex-1"> </NuxtPage>
        <Footline class="mt-24"></Footline>
      </div>
      <div v-else class="flex h-screen w-screen items-center justify-center">
        <img src="/bianco.svg" class="h-[8rem] w-[8rem]" />
        <NuxtPage v-show="false" class="flex-1"> </NuxtPage>
      </div>
    </Transition>

    <!-- <NuxtPage class="flex-1"> </NuxtPage> -->
  </body>
</template>

<script lang="ts" setup>
const { x, y } = useMouse();
const mode = useMode();
const mounted = useMounted();
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
