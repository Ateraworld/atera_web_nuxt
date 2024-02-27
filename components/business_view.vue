<template>
  <div v-if="mounted" class="flex w-full flex-col items-center">
    <div class="flex w-full flex-row flex-wrap justify-center gap-16">
      <ParallaxCard
        class="card-size"
        @click="(e) => cardClicked(e, 'context')"
        key="0"
        anim-delay="150ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Contesto</h2>
            <p>
              Raggiungi gli appassionati durante le attività nel tuo territorio,
              in un modo efficace e non intrusivo
            </p>
          </section>
          <img src="/graph.svg" class="image" />
        </div>
      </ParallaxCard>
      <ParallaxCard
        class="card-size"
        key="0"
        @click="(e) => cardClicked(e, 'conversion')"
        anim-delay="50ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Conversione</h2>
            <p>
              Incentiva le conversioni tramite promozioni contestualizzate ed
              adattate al tuo business
            </p>
          </section>
          <img src="/local_shelter.svg" class="image" />
        </div> </ParallaxCard
      ><ParallaxCard
        class="card-size"
        @click="(e) => cardClicked(e, 'visibility')"
        key="0"
        anim-delay="150ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Visibilità</h2>
            <p>
              Aumenta la visibiltà della tua realtà economica tramite inserzioni
              personalizzate ed integrate
            </p>
          </section>
          <img src="/arrows.svg" class="image" />
        </div>
      </ParallaxCard>
    </div>
    <Transition name="join" appear>
      <div class="accent-card group mt-16">
        <h2>Entra a far parte di Atera</h2>
        <p>
          Compila ora il modulo di contatto con le informazioni relative al tuo
          business.
        </p>
        <AnimatedArrow class="pt-4"
          ><p class="font-semibold text-accent">Iscriviti ora</p></AnimatedArrow
        >
      </div>
    </Transition>

    <section class="max-w-[var(--content-width)] py-[var(--content-padding)]">
      <Topic
        id="context"
        title="Contesto"
        subtitle="Raggiungi gli utenti giusti al momento giusto"
      >
        <template #content>
          <PhoneNotificationDisplay></PhoneNotificationDisplay>
        </template>
        <template #body>
          In Atera gli annunci sono contestualizzati. <br />
          Oltre alle preferenze dell'utente, ogni inserzione tiene conto anche
          degli itinerari svolti dall'utente in un determinato posto ad una
          specifica ora. Gli annunci emessi al termine di un escursione,
          ottengono conversioni maggiori.<br /><br />
          Atera integra perfettamente gli annunci con lo stile e l'esperienza
          d'uso dell'utente. <br />Niente più pubblicità fastidiosa ed
          intrusiva: gli annunnci sono a tutti gli effetti dei consigli, sarà
          l'utente stesso a ricercarli.
        </template>
        ></Topic
      >

      <div
        id="conversion"
        class="w-full py-[var(--content-padding)] text-center"
      >
        <h1>Conversione</h1>

        <div class="flex flex-row flex-wrap justify-center gap-[4.5rem] pt-12">
          <div class="conversion-cell group">
            <Icon
              class="icon group-hover:scale-[120%]"
              name="icon-park-outline:shopping-bag-one"
            ></Icon>
            <h2>Coupon sconto</h2>
            <p>
              Aumenta il traffico fornendo agli utenti sconti riscattabili
              direttamente in app
            </p>
          </div>
          <div class="conversion-cell group">
            <Icon
              class="icon group-hover:scale-[120%]"
              name="material-symbols:auto-timer-rounded"
            ></Icon>
            <h2>Promozioni a tempo</h2>
            <p>
              Comunica agli utenti interessati le promozioni attive nella tua
              realtà economica
            </p>
          </div>
          <div class="conversion-cell group">
            <Icon
              class="icon group-hover:scale-[120%]"
              name="zondicons:radar"
            ></Icon>
            <h2>Offerte contestualizzate</h2>
            <p>
              Massimizza le conversioni tramite annunci che fanno leva sulle
              attività di ogni singolo utente
            </p>
          </div>
        </div>
      </div>

      <Topic
        id="visibility"
        title="Visibilità"
        inverted
        subtitle="Ottieni visibilità tramite campagne ottimizzate ed integrate"
      >
        <template #content><MapDisplay></MapDisplay> </template>
        <template #body>
          In Atera sono disponibili spazi pubblicitari di vario tipo.<br />
          Ottenendo un piazzamento pubblicitario nella scheda di un itinerario
          vicino ad una realtà economica, è possibile aumentare la visibilità
          tra gli utenti di una specifica area.<br /><br />
          Gli appassionati che ricercano e visualizzano quella attività,
          entreranno a conoscenza della realtà economica in maniera automatica e
          perfettamente integrata con l'esperienza d'uso.
        </template>
        ></Topic
      >
    </section>
  </div>
</template>

<script lang="ts" setup>
const mounted = ref(false);

function cardClicked(event: MouseEvent, id: string) {
  let el = document.getElementById(id);
  if (el === null) return;
  el.scrollIntoView({ behavior: "smooth" });
  console.log(id);
}

onMounted(() => {
  mounted.value = true;
});
</script>

<style lang="css" scoped>
* {
  --spacing: 0.5rem;
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

.conversion-cell {
  @apply w-[24rem] rounded-xl;

  .icon {
    @apply mb-8 size-[5rem] rounded-xl bg-accent p-5 transition-all duration-150 ease-out;
  }
}
</style>
