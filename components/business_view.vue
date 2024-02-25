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
            <h2>Pubblico</h2>
            <p>
              Raggiungi le persone con i giusti interessi, al momento migliore e
              tramite le metodologie più efficaci
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
            <h2>Performance</h2>
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
              piazzamenti personalizzati e perfettamente integrati
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
        title="Pubblico"
        subtitle="Raggiungi gli utenti giusti al momento giusto"
      >
        <template #content>
          <PhoneNotificationDisplay></PhoneNotificationDisplay>
        </template>
        <template #body>
          Gli utenti di Atera sono appassionati di montagna e di attività
          all'aperto. Il pubblico per le campagne è quindi automaticamente
          mirato ad utenti interessati al settore. <br /><br />
          La tecnologia di Atera permette agli annunci di essere emessi al
          momento migliore, calcolato per ogni utente. Questo permette di
          incrementare automaticamente il tasso di conversione.<br /><br />
          I piazzamenti all'interno di Atera sono perfettamente integrati con lo
          stile e l'esperienza dell'utente.<br />
          Niente più annunci fastidiosi ed intrusivi: è l'utente stesso a
          ricercare gli annunci per ottenere un beneficio reale.
        </template>
        ></Topic
      >

      <Topic
        title="Performance"
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
          Atera mette a disposizione posizioni pubblicitarie all'interno
          dell'applicazione.<br /><br />
          Ad esempio, ottenendo un piazzamento pubblicitario nella scheda di un
          attività vicina alla propria realtà economica, è possibile aumentare
          la propria visibilità tra gli utenti di una specifica area.<br />
          Gli utenti che ricercano e guardano quella specifica attività
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
