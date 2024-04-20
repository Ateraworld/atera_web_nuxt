<template>
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center gap-[var(--content-padding)]"
  >
    <div class="flex flex-col justify-center gap-8 sm:gap-12">
      <div
        class="flex w-full flex-row flex-wrap justify-center gap-8 sm:gap-12"
      >
        <ParallaxCard
          class="card-size"
          @click="(e) => cardClicked(e, 'context')"
          key="0"
          anim-delay="150ms"
          anim-y-trasl="30px"
          anim-x-trasl="0px"
        >
          <div class="wrapper">
            <div>
              <h2>Contesto</h2>
              <p>
                Raggiungi gli appassionati durante le loro attività nel tuo
                territorio, in modo efficace e non intrusivo
              </p>
            </div>
            <div class="h-0 w-full flex-1 p-0">
              <img
                src="/context.svg"
                alt="Contextualized marketing"
                class="h-full w-full object-contain"
              />
            </div>
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
            <div class="h-0 w-full flex-1 p-4">
              <img
                src="/conversione.svg"
                alt="Conversions"
                class="h-full w-full object-contain"
              />
            </div>
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
                Aumenta la visibiltà della tua realtà economica tramite
                inserzioni personalizzate e perfettamente integrate
              </p>
            </section>
            <div class="h-0 w-full flex-1 p-0">
              <img
                src="/local_shelter.svg"
                alt="Visibility"
                class="h-full w-full scale-[110%] object-contain"
              />
            </div>
          </div>
        </ParallaxCard>
      </div>
      <!-- <Transition name="join" appear>
        <div class="accent-card group">
          <h2>Entra a far parte di Wildspace</h2>
          <p>
            Compila ora il modulo di contatto con le informazioni relative al
            tuo business.
          </p>
          <AnimatedArrow class="pt-4"
            ><p class="font-semibold text-accent">
              Iscriviti ora
            </p></AnimatedArrow
          >
        </div>
      </Transition> -->
      <div
        class="flex w-full flex-row flex-wrap justify-center gap-4 opacity-60"
      >
        <img
          class="h-[10rem] transition-all duration-200 ease-out hover:scale-[105%]"
          src="/conf.png"
        />
        <img
          class="h-[10rem] transition-all duration-200 ease-out hover:scale-[105%]"
          src="/ttg.png"
        />
      </div>
    </div>
    <Topic
      id="context"
      title="Contesto"
      subtitle="Raggiungi gli utenti giusti al momento giusto"
    >
      <template #content>
        <PhoneNotificationDisplay></PhoneNotificationDisplay>
      </template>
      <template #body>
        In Wildspace gli annunci sono contestualizzati. <br />
        Oltre alle preferenze dell'utente, ogni inserzione tiene conto anche
        degli itinerari svolti dall'utente in un determinato posto ad una
        specifica ora. Gli annunci emessi al termine di un escursione ad
        esempio, ottengono conversioni maggiori.<br /><br />
        Wildspace integra perfettamente gli annunci con lo stile e l'esperienza
        d'uso dell'utente. <br />Niente più pubblicità fastidiosa ed intrusiva:
        gli annunci sono a tutti gli effetti dei consigli, sarà l'utente stesso
        a ricercarli.
      </template>
      ></Topic
    >

    <div ref="conversionEl" id="conversion" class="w-full text-center">
      <h1>Conversione</h1>

      <div
        ref="conversionEl"
        class="flex flex-row flex-wrap justify-center gap-[3rem] pt-8"
      >
        <div class="interactive-cell group">
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
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="material-symbols:auto-timer-rounded"
          ></Icon>
          <h2>Promozioni a tempo</h2>
          <p>
            Comunica agli utenti interessati le promozioni attive nella tua
            attività economica
          </p>
        </div>
        <div class="interactive-cell group">
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
        In Wildspace sono disponibili spazi pubblicitari di vario tipo.<br />
        Ottenendo un piazzamento pubblicitario nella scheda di un itinerario
        vicino alla propria attività economica, è possibile aumentare la
        visibilità e raggiungere gli utenti di una specifica area.<br /><br />
        Gli appassionati che ricercano e visualizzano l'itinerario, entrano a
        conoscenza della realtà economica in maniera automatica e perfettamente
        integrata con l'esperienza d'uso.
      </template>
      ></Topic
    >
    <!-- <div
      class="flex w-full flex-col items-center justify-stretch gap-2 lg:w-[60%]"
    >
      <h2>FAQ</h2>
      <Accordion>
        <template #title>Prova</template>
        <template #content>Contenuto</template>
      </Accordion>
      <Accordion>
        <template #title>Prova</template>
        <template #content>Contenuto</template>
      </Accordion>
      <Accordion>
        <template #title>Prova</template>
        <template #content>Contenuto</template>
      </Accordion>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const mounted = useMounted();

function cardClicked(event: MouseEvent, id: string) {
  let el = document.getElementById(id);
  if (el === null) return;
  el.scrollIntoView({ behavior: "smooth" });
  console.log(id);
}
</script>

<style lang="css" scoped>
* {
  --spacing: 0.5rem;
}

.card-size {
  @apply h-[20rem] w-[20rem] md:h-[26rem] md:w-[24rem];
}
.wrapper {
  @apply flex h-full w-full flex-col items-stretch justify-between  text-start;
}
</style>
