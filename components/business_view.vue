<template>
  <div v-if="mounted" class="flex w-full flex-col items-center">
    <div class="flex w-full flex-row flex-wrap justify-center gap-12">
      <ParallaxCard
        class="card-size"
        key="0"
        anim-delay="0ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Marketing Contestualizzato</h2>
            <p>Raggiungi il pubblico giusto al momento giusto</p>
          </section>
          <img src="/graph.svg" class="image" />
        </div>
      </ParallaxCard>
      <ParallaxCard
        class="card-size"
        key="0"
        anim-delay="100ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Coinvolgimento</h2>
            <p>
              Coinvolgi al massimo il tuo pubblico con annunci perfettamente
              integrati e non intrusivi: sarà l’utente a ricercare attivamente i
              tuoi servizi
            </p>
          </section>
          <img src="/local_shelter.svg" class="image" />
        </div> </ParallaxCard
      ><ParallaxCard
        class="card-size"
        key="0"
        anim-delay="200ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Conversioni</h2>
            <p>
              Aumenta le conversioni nella tua realtà economica tramite
              promozioni contestualizzate
            </p>
          </section>
          <img src="/arrows.svg" class="image" />
        </div>
      </ParallaxCard>
    </div>
    <div class="h-[12rem]"></div>
    <section class="max-w-[var(--topics-width)] px-8">
      <Topic title="Titolo" subtitle="Sottotitolo" button-text="Scopri">
        <template #content>
          <PhoneNotificationDisplay></PhoneNotificationDisplay>
        </template>
        <template #body>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </template>
        ></Topic
      >
    </section>
  </div>
</template>

<script lang="ts" setup>
const mounted = ref(false);

const divSpacing = ref("4rem");

onMounted(() => {
  mounted.value = true;
});
</script>

<style lang="css" scoped>
* {
  --spacing: 0.5rem;
  --border-radius: 1rem;
}

.card-size {
  @apply h-[450px] w-[385px];
}
.wrapper {
  @apply flex h-full w-full flex-col items-center justify-between text-start;
}
.image {
  z-index: 0;
  @apply relative bottom-[-3%] w-[300px] scale-[135%];
}
</style>
