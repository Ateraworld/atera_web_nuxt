<template>
  <!-- <AnimatedSvg></AnimatedSvg> -->
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-start px-6 sm:px-8"
  >
    <div class="flex w-full max-w-[var(--content-width)] flex-col">
      <div class="flex flex-col items-center text-center">
        <Transition
          name="join"
          class="flex min-h-[14rem] items-end sm:min-h-[12rem] md:min-h-[8rem]"
          mode="out-in"
          appear
        >
          <h1 v-if="mode.$state.businessMode" :style="{ '--y-tr': '8px' }">
            Raggiungi più appassionati, aumenta le conversioni.
          </h1>
          <h1 v-else :style="{ '--y-tr': '-8px' }">
            Dal trekking turistico al climbing tecnico.
          </h1>
        </Transition>
        <h1 class="text-4xl text-accent">Un'unica piattaforma.</h1>
        <Transition class="min-h-[2rem]" name="join" mode="out-in" appear>
          <p
            v-if="mode.$state.businessMode"
            class="max-w-[48rem]"
            :style="{ '--y-tr': '-4px' }"
          >
            La piattaforma dedicata alle escursioni outdoor che mette in
            contatto gli appassionati con gli imprenditori del settore
          </p>
          <p v-else class="max-w-[48rem]" :style="{ '--y-tr': '4px' }">
            Scopri gli itinerari più adatti a te, attesta il completamento delle
            attività ed ottieni sconti semplicemente facendo ciò che ami.
          </p>
        </Transition>
        <Switcher
          class="self-center pt-8"
          :business-mode="mode.$state.businessMode"
          @toggle="onModeToggle"
        />
      </div>
      <div class="flex w-full pt-12">
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
