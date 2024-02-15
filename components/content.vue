<template>
  <slot></slot>
  <div class="flex flex-row items-center px-8 py-10">
    <div class="basis-1/6"></div>
    <div class="basis-2/3">
      <div class="flex flex-grow flex-col items-center px-16 py-16">
        <h1 class="font-montserrat font-regular text-8xl text-white">ATERA</h1>
        <h1 class="font-regular font-semibold text-surface-400">
          L'app per chi vuole di più.
        </h1>
        <h1 class="font-regular font-semibold text-surface-400">
          Avendo solo l'essenziale
        </h1>
        <Switcher :business-mode="businessMode" @toggle="onModeToggle" />
        <div class="pt-8 flex justify-center w-full">
          <Transition name="fade">
            <BusinessView class="absolute" v-if="businessMode" />
          </Transition>
          <Transition name="fade">
            <UserView v-if="!businessMode" />
          </Transition>
        </div>
      </div>
    </div>
    <div class="basis-1/6"></div>
  </div>
</template>

<script lang="ts" setup>
const businessMode = ref(true);

function onModeToggle(status: boolean) {
  businessMode.value = status;
}
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
