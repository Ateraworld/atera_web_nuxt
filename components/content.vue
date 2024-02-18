<template>
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-center px-4 py-16"
  >
    <div class="flex w-full max-w-[var(--content-width)] flex-col">
      <div class="flex flex-col text-center">
        <Transition class="h-[16rem] px-8 pb-32" name="fade" mode="out-in">
          <h1
            v-if="businessMode"
            class="text-surface-400 text-4xl font-semibold md:text-6xl"
          >
            <span>La potenza di </span>
            <span class="text-accent">Atera<br /></span>
            <span>a tua disposizione</span>
          </h1>
          <h1
            v-else
            class="text-surface-400 text-4xl font-semibold md:text-6xl"
          >
            <span>L'app per chi vuole di più<br /></span>
            <span class="text-4xl text-accent">avendo solo l'essenziale</span>
          </h1>
        </Transition>

        <Switcher
          class="self-center"
          :business-mode="businessMode"
          @toggle="onModeToggle"
        />
      </div>
      <div class="flex w-full justify-stretch pt-16">
        <BusinessView v-if="businessMode"></BusinessView>
        <UserView v-else></UserView>
      </div>
    </div>
  </div>
  <div class="overscroll-none">
    <div class="gradient" :style="{ '--x': x + 'px' }"></div>
  </div>
</template>

<script lang="ts" setup>
const businessMode = ref(true);

const { x, y } = useMouse();
const mounted = useMounted();

function onModeToggle(status: boolean) {
  businessMode.value = status;
}
</script>

<style lang="css" scoped>
.gradient {
  --size: 500rem;
  --blur: 32rem;
  position: fixed;
  width: var(--size);
  height: var(--size);
  /* top: 100vh;
  transform: translateY(-100%); */
  bottom: calc(var(--size) * -0.975);
  left: 0;
  z-index: 0;
  border-radius: 999rem;
  transform: translateX(calc(var(--x) - var(--size) * 0.5));
  filter: blur(var(--blur));
  @apply bg-purple-900/20;
}
</style>
