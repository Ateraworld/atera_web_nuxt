<template>
  <div class="flex flex-col items-stretch justify-center px-0 py-10">
    <div class="flex flex-col justify-stretch text-center">
      <h1 class="font-regular font-montserrat text-8xl text-white">ATERA</h1>
      <h1 class="font-regular text-surface-400 font-semibold">
        L'app per chi vuole di più.
      </h1>
      <h1 class="font-regular text-surface-400 font-semibold">
        Avendo solo l'essenziale
      </h1>
      <Switcher
        class="self-center"
        :business-mode="businessMode"
        @toggle="onModeToggle"
      />
    </div>
    <div class="flex justify-center pt-12">
      <div class="w-full max-w-[1280px] px-8">
        <BusinessView v-if="businessMode"></BusinessView>
        <UserView v-else></UserView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const businessMode = ref(true);

function onModeToggle(status: boolean) {
  businessMode.value = status;
}
</script>

<style lang="css" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all var(--duration) cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
