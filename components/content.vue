<template>
  <!-- <AnimatedSvg></AnimatedSvg> -->
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-center px-4 py-8"
  >
    <div class="flex w-full max-w-[var(--content-width)] flex-col">
      <div class="flex flex-col text-center">
        <h1 class="text-surface-400 font-semibold">
          <span>L'app per chi vuole di più<br /></span>
          <span class="text-4xl text-accent">avendo solo l'essenziale</span>
        </h1>

        <Switcher
          class="self-center"
          :business-mode="businessMode"
          @toggle="onModeToggle"
        />
      </div>
      <div class="flex w-full justify-stretch px-8 pt-16">
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

const emit = defineEmits<{
  (e: "modeChanged", id: boolean): void;
}>();

const { x, y } = useMouse();
const mounted = useMounted();

onMounted(() => {
  emit("modeChanged", businessMode.value);
});

function onModeToggle(status: boolean) {
  businessMode.value = status;
  emit("modeChanged", status);
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
  border-radius: 999rem;
  transform: translateX(calc(var(--x) - var(--size) * 0.5));
  filter: blur(var(--blur));
  @apply bg-accent/20;
}
</style>
