<template>
  <!-- <AnimatedSvg></AnimatedSvg> -->
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-start px-4 py-8"
  >
    <div class="flex w-full max-w-[var(--content-width)] flex-col">
      <div class="flex flex-col text-center">
        <h1 class="text-surface-400 font-semibold">
          <span>L'app per chi vuole di più<br /></span>
          <span class="text-4xl text-accent">avendo solo l'essenziale</span>
        </h1>
        <p>
          Atera è la piattaforma dedicata alle escursioni outdoor con l'obbiettivo di mettere in contatto gli appassionati con i professionisti del settore
        </p>
        <Switcher
          class="self-center"
          :business-mode="mode.$state.businessMode"
          @toggle="onModeToggle"
        />
      </div>
      <div class="flex w-full justify-stretch px-8 pt-32">
        <BusinessView v-if="mode.$state.businessMode"></BusinessView>
        <UserView v-else></UserView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const mounted = useMounted();
const mode = useMode();

function onModeToggle(status: boolean) {
  mode.$state.businessMode = status;
}
</script>

<style lang="css" scoped></style>
