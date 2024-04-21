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
          </div>
        </ParallaxCard>
        <ParallaxCard
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
      >
    </Topic>

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
      <template #content>
        <MapDisplay></MapDisplay>
      </template>
      <template #body>
        In Wildspace sono disponibili spazi pubblicitari di vario tipo.<br />
        Ottenendo un piazzamento pubblicitario nella scheda di un itinerario
        vicino alla propria attività economica, è possibile aumentare la
        visibilità e raggiungere gli utenti di una specifica area.<br /><br />
        Gli appassionati che ricercano e visualizzano l'itinerario, entrano a
        conoscenza della realtà economica in maniera automatica e perfettamente
        integrata con l'esperienza d'uso.
      </template>
      >
    </Topic>
    <div
      class="flex w-full flex-col items-center justify-stretch gap-2 lg:w-[65%]"
    >
      <h2>FAQ</h2>
      <ul class="flex w-full flex-col gap-2">
        <Accordion>
          <template #title>
            <p>Come faccio ad iscrivere la mia attività?</p>
          </template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                <span class="font-semibold text-accent"
                  >Wildspace è in fase di raccolta fondi. </span
                ><br />Una volta raggiunto il capitale che permetterà di fare il
                lancio sul mercato, ci sarà la possibilità di provare
                l’ecosistema e quindi la piattaforma web per le attività
                economiche. <br />Tra poco verrà abilitato il sistema di
                preregistrazione per gli early adopters tramite la compilazione
                del form apposito! <br />Coloro che effettuano la
                preregistrazione a Wildspace, potranno beneficiare di sconti
                personalizzati e avranno la possibilità di provare il prodotto
                in anteprima, fornire feedback e quindi entrare a far parte
                integrante del progetto.
              </p>
              <!-- <div class="accent-card group">
                <p>Ti piace il progetto? Cosa aspetti compila il form!</p>
                <AnimatedArrow class="pt-4">
                  <p class="font-semibold text-accent">Iscriviti ora</p>
                </AnimatedArrow>
              </div> -->
            </div>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>Come posso raggiungere potenziali clienti?</p>
          </template>
          <template #content>
            <p>
              Wildpsace permette agli imprenditori di raggiungere potenziali
              clienti interessati e nel momento più opportuno.<br />
              Il prodotto per le attività economiche permette di effettuare
              campagne marketing all’interno della piattaforma per far conoscere
              la propria attività agli utenti interessati. Ad esempio, tramite
              la piattaforma web, è possibile direzionare annunci specifici e
              personalizzati ad utenti che stanno completando un itinerario
              vicino.<br />
              <br />Una delle particolarità di Wildspace è il modo in cui gli
              annunci vengono presentati agli utenti. Essi sono perfettamente
              integrati, questo porta ogni utente a considerare i piazzamenti
              come consigli da parte dell’applicazione, massimizzando le
              conversioni
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>Come fa Wildspace a potenziare la mia attività?</p>
          </template>
          <template #content>
            <p>
              Iscrivendo al propria attività a Wildspace si ottengono delle
              funzionalità fondamentali per la crescita e la fidelizzazione
              della propria clientela. <br />
              <span class="font-semibold"
                >Il tutto gestibile da un'unica piattaforma web semplice ed
                intuitiva.</span
              >
              <br /><br />
              ●
              <span class="font-semibold text-accent"
                >Marketing Contestualizzato:</span
              >
              Possibilità di raggiungere gli utenti al posto giusto nel momento
              giusto grazie al sistema di contesto. <br /><br />●
              <span class="font-semibold text-accent">Fidelizzazione:</span>
              Pianificazione delle campagne di offerte ed incremento conversioni
              tramite Intelligenza Artificiale e ottimizzazione dei processi.
              <br /><br />●
              <span class="font-semibold text-accent">Analisi dei KPI</span>
              Analitiche delle campagne, delle conversioni e del mercato basate
              su dati reali.
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>
              Come capisco se la mia attività economica è adeguata per
              Wildspace?
            </p>
          </template>
          <template #content>
            <p>
              In linea di massima ogni attività che opera nel
              <span class="font-semibold"
                >mercato dell'accomodazione, dello sport e dei servizi</span
              >
              è adeguata ad entrare a far parte di Wildspace.<br />
              Tuttavia, è importante tenere conto che le attività economiche che
              ottengono maggiori benefici sono quelle che operano nel settore
              turistico sportivo o che comunque si trovano in località ricche di
              itinerari.<br />
              Un utente che ha appena completato un itinerario faticoso, sarà
              certamente più incline nell'aquistare un rinfresco in un locale
              vicino, soprattutto se viene annesso uno sconto. La capacità di
              proporre ciò che l'utente sta cercando e nel momento più
              opportuno, è la forza di Wildspace. Da questo esempio di comprende
              il beneficio che si ottiene quando ci si trova in aree con molti
              itinerari vicino.<br /><br />Wildspace però permette anche a chi
              ha un e-commerce di entrare a far parte del proprio ecosistema. I
              sistemi di ottimizzazione delle campagne di offerte e del
              marketing interno alla piattaforma sono fondamentali per far
              conoscere la propria attività ad un comparto utenti mirato e con
              alte conversioni.
            </p>
          </template>
        </Accordion>
      </ul>
    </div>
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
  @apply flex h-full w-full flex-col items-stretch justify-between text-start;
}
</style>
