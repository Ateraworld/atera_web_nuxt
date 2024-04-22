<template>
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-stretch gap-[var(--content-padding)]"
  >
    <div class="flex w-[100%] flex-col justify-start gap-8">
      <div class="flex flex-col items-center">
        <h2 class="text-center">
          Scarica ora Wildspace, il tuo fedele compagno di avventura
        </h2>

        <Transition name="fade" mode="out-in" appear>
          <div
            class="h-[20rem] max-w-[100%] md:h-[24rem] lg:w-[70rem]"
            :style="{ '--duration-tr': '400ms' }"
          >
            <ParallaxImage class="rounded-card h-full w-full overflow-clip">
              <div
                class="rounded-card relative translate-y-[-0%] scale-[125%] overflow-clip md:translate-y-[-5%] md:scale-[110%]"
              >
                <img
                  :height="
                    bp.smallerOrEqual('sm')
                      ? '320px'
                      : bp.smallerOrEqual('md')
                        ? '384px'
                        : '1120px'
                  "
                  src="/brenta.webp"
                />
              </div>
            </ParallaxImage>
          </div>
        </Transition>
        <div
          class="text-text flex flex-row items-center gap-2 pt-2 text-label font-bold text-neutral/50"
        >
          <icon
            class="size-4"
            name="material-symbols:photo-camera-rounded"
          ></icon>
          <p>Dolomiti di Brenta</p>
        </div>
      </div>

      <div class="relative flex flex-row justify-center gap-12">
        <Transition name="join" appear mode="out-in">
          <a
            href="https://apps.apple.com/it/app/Atera-ferrate-trekking/id6449359062"
            target="_blank"
            :style="{
              '--y-tr': '0px',
              '--x-tr': '-30px',
              '--duration-tr': '400ms',
            }"
          >
            <div
              class="accent-card group size-[8rem] items-center justify-center"
            >
              <icon
                class="size-[4rem] transition-all duration-200 ease-out group-hover:scale-[120%]"
                name="ic:baseline-apple"
              ></icon>
            </div>
          </a>
        </Transition>
        <Transition name="join" appear mode="out-in">
          <a
            href="https://play.google.com/store/apps/details?id=com.ateraworld.atera"
            target="_blank"
            :style="{
              '--y-tr': '0px',
              '--x-tr': '30px',
              '--duration-tr': '400ms',
            }"
          >
            <div
              class="accent-card group size-[8rem] items-center justify-center"
            >
              <icon
                class="size-[3rem] transition-all duration-200 ease-out group-hover:scale-[120%]"
                name="logos:google-play-icon"
              ></icon>
            </div> </a
        ></Transition>
      </div>
    </div>
    <div class="w-full text-center">
      <h2>Per chi vuole di più, avendo solo l'essenziale</h2>

      <div class="flex flex-row flex-wrap justify-center gap-[3rem] pt-12">
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="material-symbols-light:map"
          ></Icon>
          <h2>Mappe</h2>
          <p>
            Mappe offline per i tuoi itinerari, dettagliate e semplici da
            utilizzare
          </p>
        </div>
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="ph:magnifying-glass-bold"
          ></Icon>
          <h2>Turismo</h2>
          <p>
            Scopri nuovi itinerari e attività con sistemi di ricerca avanzati
          </p>
        </div>
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="material-symbols:bar-chart-4-bars-rounded"
          ></Icon>
          <h2>Qualità e coerenza</h2>
          <p>
            Informazioni coerenti e controllate dal team per le tue attività
          </p>
        </div>
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="streamline:discount-percent-coupon-solid"
          ></Icon>
          <h2>Sconti e benefici</h2>
          <p>
            Negozi, rifugi, ristoranti e molto altro: ottieni sconti e benefici
            facendo ciò che ami
          </p>
        </div>
        <div class="interactive-cell group">
          <Icon
            class="icon group-hover:scale-[120%]"
            name="zondicons:radar"
          ></Icon>
          <h2>Consigli e offerte</h2>
          <p>
            Fatti consigliare le migliori offerte in base ai tuoi interessi ed
            itinerari
          </p>
        </div>
      </div>
    </div>
    <Topic
      title="Solo ciò che conta"
      subtitle="Goditi la natura, sapendo di avere in tasca un fedele compagno"
    >
      <template #content>
        <img
          class="max-h-[34rem]"
          height="544px"
          alt="Offline maps"
          src="/phone2.svg"
        />
      </template>
      <template #body>
        Wildspace ti fornisce l'essenziale per permetterti di godere al meglio
        la natura.
        <br />
        Le mappe disponibili sono estremamente semplici da usare.<br />
        All'interno puoi trovare tutti i punti d'interesse come rifugi,
        bivacchi, punti panoramici e perfino panchine e fonti d'acqua!<br />
        Le mappe sono scaricabili per utilizzo offline, così potrai utilizzarle
        in qualunque situazione.<br /><br />
        Wildspace non pretende di digitalizzare tutto il mondo delle attività
        all'aperto, ma di integrarlo.
      </template>
      ></Topic
    >
    <Topic
      inverted
      title="Raggiungi i tuoi obiettivi"
      subtitle="Tieni traccia dei tuoi itinerari e salva le mappe"
    >
      <template #content>
        <img
          class="max-h-[26rem]"
          alt="Activities attestation"
          src="/attestation.svg"
        />
      </template>
      <template #body>
        Attesta il completamento delle attività e sali di livello! <br />
        Con Wildspace salvi i tuoi itinerari preferiti cosi da poter accedere
        alle informazioni ed alla mappa in qualunque situazione, anche in
        assenza di rete.<br />
        Tieni traccia di tutte le attività che hai completato e trovane di nuove
        grazie ai sistemi di ricerca avanzati.<br />Porsi degli obiettivi è il
        primo passo per completarli!<br />
      </template>
      ></Topic
    >
    <Topic
      title="Fatti consigliare da Wildspace"
      subtitle="Scopri offerte personalizzate e riscatta sconti e benefici"
    >
      <template #content>
        <div class="p-[4rem]">
          <img
            class="max-h-[16rem]"
            alt="Discounts and benefits"
            src="/coupon.svg"
          />
        </div>
      </template>
      <template #body>
        Wildspace ti consiglia come concludere i tuoi itinerari al meglio.
        <br />
        Grazie alla tecnologia di Wildspace, sei sempre a conoscenza delle
        migliori offerte nei dintorni.<br /><br />
        Hai appena completato un itinerario faticoso?<br />
        Che sia il posto perfetto dove passare la notte, un ristorante tipico
        dove sfamarti o semplicemente il posto più panoramico dove fare
        aperitivo, Wildspace ti suggerisce le opzioni migliori!
      </template>
      ></Topic
    >
    <div
      class="flex w-full flex-col items-center justify-stretch gap-2 lg:w-[65%]"
    >
      <h2>FAQ</h2>
      <ul class="flex w-full flex-col gap-2">
        <Accordion>
          <template #title>
            <p>Perchè scegliere Wildspace?</p>
          </template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                <span class="font-semibold text-accent"
                  >Wildspace è molto di più di una semplice applicazione di
                  itinerari. </span
                ><br /><br />In Wildspace, ogni funzionalità viene introdotta
                nell'applicazione solo a seguito di attente analisi per
                mantenere l'applicazione snella e funzionale.<br />
                <span class="font-semibold"
                  >La nostra visione non è quella di digitalizzare le attività
                  all'aperto, ma di integrarle fornendo all'utente una
                  piattaforma che possa aiutarlo nei momenti di bisogno.</span
                >
                <br />Il sistema di contesto funziona a tutti gli effetti come
                una guida per l'utente che si avventura in zone nuove. Wildspace
                propone opportunità vicine all'utente in base alle sue
                attività.<br />Immagina di aver appena completato una
                faticosissima ferrata in una zona di montagna che hai deciso di
                esplorare. Proprio durante il rientro, Wildspace ti propone in
                maniera non invasiva e personalizzata un rinfresco in un locale
                tipico vicino, con sconto annesso: che fai rifiuti 😁?<br /><br />Inoltre,
                in Wildspace gli utenti non possono inserire itinerari in
                autonomia, le informazioni degli itinerari sono curate ed
                aggiornate dal team e da un gruppo selezionato di collaboratori:
                i Contributori Wildspace. Seppur possa sembrare una limitazione
                a prima vista, questa scelta permette di
                <span class="font-semibold"
                  >mantenere una coerenza e omogeneità delle informazioni senza
                  precedenti.</span
                >
              </p>
            </div>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>Che tipi di sconti posso ottenere?</p>
          </template>
          <template #content>
            <p>
              I partner di Wildspace possono comprendere varie categorie: hotel,
              rifugi, ristoranti tipici, negozi di attrezzatura e molto altro.
              <br />
              Gli sconti disponibili nell'applicazione sono di varia natura. Ci
              sono offerte messe a disposizione degli utenti per un periodo di
              tempo limitato dai partner di Wildspace ma anche offerte che
              vengono proposte agli utenti che completano un itinerario nella
              zona di un'attività economica.<br />
              Ad esempio, in base agli interessi degli utenti, un ristorante
              tipico potrebbe decidere di mandare offerte mirate a coloro che
              completano un itinerario vicino. Di solito questo tipo di offerte
              permette di ottenere benefici economici maggiori.<br /><br />Su
              Wildspace sono presenti anche sconti su e-commerce partner, in
              modo tale di permettere agli utenti di rinnovare la propria
              attrezzatura ad un prezzo vantaggioso.<br /><br /><span
                class="font-semibold text-accent"
                >In Wildspace più attività completi mettendoti in gioco, più
                scopri nuove opportunita e benefici!</span
              >
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>
              È possibile contribuire inserendo itinerari, informazioni e foto?
            </p>
          </template>
          <template #content>
            <p>
              Assolutamente si, ci sono varie metodologie per aiutarci a
              costruire il database di attività in maniera curata e controllata.
              <br />Ad esempio, per contribuire con delle foto, è possibile
              contattare il team e mandare le foto tramite email. Inoltre, i
              sistemi di segnalazione di inagibilità o consigli sono già
              presenti in app. <br /><br />
              Tuttavia, se sei un appassionato e vuoi condividere informazioni
              più dettagliate come relazioni di attività non ancora presenti,
              puoi contattarci per diventare un
              <span class="font-semibold text-accent"
                >Contributore Wildspace. </span
              ><br />
              I Contributori hanno la possibilità di accedere ad una piattaforma
              web dedicata che può essere usata per integrare le informazioni
              esistenti aggiustando le relazioni ed aggiungendo foto oppure
              scrivendo relazioni di nuovi itinerari.<br />
              I Contributori ottengono dei benefici come ringraziamento del loro
              aiuto. In particolare, in base alle contribuzioni effettuate, sarà
              possibile riscattare periodi gratuiti di Wildspace Premium.<br />
              Inoltre, a coloro che forniranno un contributo sostanziale al
              database di Wildspace, sarà riconosciuto l'abbonamento
              <span class="font-semibold">
                Wildspace Premium a vita gratuitamente</span
              >.
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>
            <p>Che tipi di itinerari posso trovare su Wildspace?</p>
          </template>
          <template #content>
            <p>
              Su Wildspace sono presenti itinerari di tutti i tipi.<br />
              Ovviamente con il passare del tempo, grazie all'aiuto dei
              Contributori Wildspace, il database crescerà e verranno introdotte
              nuove categorie di attività.<br />
              Partendo da attività più tecniche come
              <span class="font-semibold">
                vie ferrate, vie normali, falesie fino ad arrivare ad attività
                più turistiche come trekking di tutti i tipi e punti di
                interesse come punti panoramici e punti di interesse
                culturale</span
              >, su Wildspace ogni utente può trovare l'attività più
              adeguata.<br />
              I sistemi di ricerca avanzati permettono di filtrare per
              caratteristiche dell'attività, utilizzando la difficoltà e le
              altre metriche disponibili.<br /><br /><span
                class="font-semibold text-accent"
              >
                Wildspace punta in alto.</span
              ><br />
              Abbiamo già in piano di integrare altre categorie di attività come
              <span class="font-semibold">
                percorsi di sci alpino e di fondo, trekking invernali e
                ciaspolate.</span
              ><br />
              Wildspace non punta solo alla montagna. Tra i nostri piani a lungo
              termine, c'è anche l'idea di integrare i
              <span class="font-semibold">
                punti di immersione subacquea nei laghi e in mare, per i nostri
                amici subacquei.</span
              ><br />
              Essendo anche noi subacquei, sappiamo che al momento informazioni
              relative ad itinerari di questo tipo sono veramente difficili da
              reperire.<br />
              Proprio per questo motivo siamo coscienti dell'incredibile utilità
              che l'integrazione di questo tipo di attività porterebbe ai nostri
              utenti sportivi.
            </p>
          </template>
        </Accordion>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const mounted = useMounted();
const bp = useBreakpoints(breakpointsTailwind);
</script>

<style lang="css" scoped>
.image-button {
  @apply flex h-[4rem] items-center justify-center rounded-xl bg-yellow-50 transition-all duration-[150ms] ease-out md:h-[4rem];
}
</style>
