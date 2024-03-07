<template>
  <div
    class="flex w-full flex-col items-center justify-stretch gap-[var(--content-padding)]"
  >
    <div class="w-[100%] lg:w-[48rem]">
      <Transition name="join" appear mode="out-in">
        <h2
          :style="{
            '--y-tr': '10px',
            '--delay-tr': '200ms',
            '--duration-tr': '500ms',
          }"
          class="text-center"
        >
          Scarica ora Atera!
        </h2>
      </Transition>
      <div class="flex flex-row flex-wrap justify-stretch gap-4 sm:gap-8">
        <ParallaxCard class="flex-1" key="0" anim-x-trasl="-30px">
          <a
            href="https://apps.apple.com/it/app/Atera-ferrate-trekking/id6449359062"
            target="_blank"
          >
            <div class="image-button">
              <img
                src="/appstore.svg "
                alt="Apple store link"
                class="h-full w-full"
              />
            </div>
          </a>
        </ParallaxCard>
        <ParallaxCard class="flex-1" key="0" anim-x-trasl="30px">
          <a
            href="https://play.google.com/store/apps/details?id=com.Ateraworld.Atera"
            target="_blank"
          >
            <div class="image-button">
              <img
                alt="Google Play Store link"
                src="/google_play.svg"
                class="h-full w-full"
              />
            </div>
          </a>
        </ParallaxCard>
      </div>
      <Transition name="join" appear>
        <div class="accent-card group mt-10 w-full">
          <h2>Hai gia scaricato Atera?</h2>
          <p>
            Compila ora il modulo di feedback per farci sapere cosa ne pensi.<br />
            Il tuo aiuto è fondamentale per migliorare sempre di più Atera!
          </p>
          <AnimatedArrow class="pt-4"
            ><p class="font-semibold text-accent">
              Dicci ciò che pensi
            </p></AnimatedArrow
          >
        </div>
      </Transition>
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
        <img class="max-h-[34rem]" alt="Offline maps" src="/phone2.svg" />
      </template>
      <template #body>
        Atera ti fornisce l'essenziale per permetterti di godere al meglio la
        natura.
        <br />
        Le mappe disponibili sono estremamente semplici da usare.<br />
        All'interno puoi trovare tutti i punti d'interesse come rifugi,
        bivacchi, punti panoramici e perfino panchine e fonti d'acqua!<br />
        Le mappe sono scaricabili offline, così potrai utilizzarle in qualunque
        situazione.<br /><br />
        Atera non pretende di digitalizzare tutto il mondo delle attività
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
        Con Atera salvi i tuoi itinerari preferiti cosi da poter accedere alle
        informazioni ed alla mappa in qualunque situazione, anche in assenza di
        rete.<br />
        Tieni traccia di tutte le attività che hai completato e trovane di nuove
        grazie ai sistemi di ricerca avanzati.<br />Porsi degli obiettivi è il
        primo passo per completarli!<br />
      </template>
      ></Topic
    >
    <Topic
      title="Fatti consigliare da Atera"
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
        Atera ti consiglia come concludere i tuoi itinerari al meglio. <br />
        Grazie alla tecnologia di Atera, sei sempre a conoscenza delle migliori
        offerte nei dintorni.<br /><br />
        Hai appena completato un itinerario faticoso?<br />
        Che sia il posto perfetto dove passare la notte, un ristorante tipico
        dove sfamarti o semplicemente il posto più panoramico dove fare
        aperitivo, Atera ti suggerisce le opzioni migliori!
      </template>
      ></Topic
    >
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.image-button {
  @apply flex h-[4rem] items-center justify-center rounded-xl transition-all duration-[150ms] ease-out md:h-[8rem];
}
</style>
