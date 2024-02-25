<template>
  <div v-if="mounted" class="flex w-full flex-col items-center">
    <div class="flex w-full flex-row flex-wrap justify-center gap-16">
      <ParallaxCard
        class="card-size"
        @click="(e) => cardClicked(e, 'audience')"
        key="0"
        anim-delay="0ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Contesto</h2>
            <p>
              Raggiungi gli appassionati durante le attivià nel tuo territorio, in un modo efficacie e non intrusivo
            </p>
          </section>
          <img src="/graph.svg" class="image" />
        </div>
      </ParallaxCard>
      <ParallaxCard
        class="card-size"
        key="0"
        @click="(e) => cardClicked(e, 'performance')"
        anim-delay="100ms"
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
        anim-delay="200ms"
        anim-y-trasl="30px"
        anim-x-trasl="0px"
      >
        <div class="wrapper">
          <section>
            <h2>Visibilità</h2>
            <p>
              Aumenta la visibiltà della tua realtà economica tramite
              inserzioni personalizzate ed integrate
            </p>
          </section>
          <img src="/arrows.svg" class="image" />
        </div>
      </ParallaxCard>
    </div>
    <div class="h-[12rem]"></div>
    <section class="max-w-[var(--topics-width)]">
      <Topic
        id="audience"
        title="Contesto"
        subtitle="Raggiungi gli utenti giusti al momento giusto"
      >
        <template #content>
          <PhoneNotificationDisplay></PhoneNotificationDisplay>
        </template>
        <template #body>
          Tramite la tecnologia di Atera, gli annunci non sono semplicemente personalizzati alle preferenze dell'utente, 
          ma l'emissione degli annunci sono calcolati in base alle attività svolte dall'utente. 
          Un annuncio può essere emesso anche durante il termine di un escursione, così da incrementare la conversione.<br /><br />
          I piazzamenti all'interno di Atera sono perfettamente integrati con lo stile e l'esperienza dell'utente.
          Niente più annunci fastidiosi ed intrusivi: è l'utente stesso a
          ricercare gli annunci per una migliore esperienza outdoor.
        </template>
        ></Topic
      >

      <Topic
        title="Conversione"
        id="performance"
        subtitle="Incentiva le conversioni con promozioni personalizzate"
      >
        <template #content> </template>
        <template #body>
          Con Atera è possibile creare delle promozioni per gli utenti
          personalizzate per la propria realtà economica.<br /><br />

          <ul>
            <li>
              <h2>Coupon sconto</h2>
              Fornisci degli sconti agli utenti di Atera per aumentare il
              traffico
            </li>
            <br />
            <li>
              <h2>Promozioni a tempo</h2>
              Fai sapere agli utenti interessati di una promozione a tempo
              presente nella tua realtà economica
            </li>
            <br />
            <li>
              <h2>Offerte contestualizzate</h2>
              Massimizza le conversioni facendo sapere agli utenti che hanno
              appena completato un'attività nella tua zona delle tue offerte e
              dei tuoi prodotti.
            </li>
            <br />
          </ul>
          Queste sono solo alcune delle promozioni che è possibile mettere a
          disposizione tramite Atera!
        </template>
        ></Topic
      >
      <Topic
        id="visibility"
        title="Visibilità"
        inverted
        subtitle="Ottieni visibilità tramite campagne ottimizzate ed integrate"
      >
        <template #content> </template>
        <template #body>
          Ottenendo un piazzamento pubbliciitario nella nella scheda di un
          attività vicina alla propria realtà economica, è possibile aumentare
          la propria visibilità tra gli utenti di una specifica area.<br />
          Gli appassionati che ricercano e visualizzano quella attività,
          entreranno a conoscenza della realtà economica in maniera automatica e
          perfettamente integrata.
        </template>
        ></Topic
      >
    </section>
    <ParallaxCard
      class="h-[20rem]"
      key="0"
      anim-delay="200ms"
      anim-y-trasl="30px"
      anim-x-trasl="0px"
    >
      <div class="wrapper">
        <section>
          <h2>Contattaci!</h2>
          <p>
            Ti piace il progetto e vuoi entrare a far parte di Atera? <br />
            Compila ora il form per la richiesta e ti risponderemo il più presto
            possibile.
          </p>
        </section>
        <PrimaryButton @click="$router.push('/business_form')"
          >Compila il form</PrimaryButton
        >
      </div>
    </ParallaxCard>
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
