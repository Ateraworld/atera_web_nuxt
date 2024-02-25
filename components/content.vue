<template>
  <!-- <AnimatedSvg></AnimatedSvg> -->
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-start px-4 pt-12"
  >
    <div class="flex w-full max-w-[var(--content-width)] flex-col">
      <div class="flex flex-col items-center text-center">
        <h1 class="text-surface-400 font-semibold">
          <span>Tutto il mondo dell'outdoor.<br /></span>
          <span class="text-4xl text-accent">Un'unica piattaforma.</span>
        </h1>
        <Transition name="join" mode="out-in" appear>
          <p
            v-if="mode.$state.businessMode"
            class="max-w-[48rem]"
            :style="{ '--y-tr': '-4px' }"
          >
            La piattaforma dedicata alle escursioni outdoor che mette in
            contatto gli appassionati con i professionisti del settore
          </p>
          <p v-else class="max-w-[48rem]" :style="{ '--y-tr': '4px' }">
            Scopri gli itinerari più adatti a te, attesta il completamento delle
            attività ed ottieni sconti semplicemente facendo ciò che ami.
          </p>
        </Transition>
        <Switcher
          class="self-center"
          :business-mode="mode.$state.businessMode"
          @toggle="onModeToggle"
        />
      </div>
      <div class="flex w-full justify-stretch px-8 pt-16">
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
