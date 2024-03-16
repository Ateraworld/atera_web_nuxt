<template>
  <div
    v-if="mounted"
    class="flex w-full flex-col items-center justify-stretch gap-[var(--content-padding)]"
  >
    <div class="flex w-[100%] flex-col justify-start gap-8">
      <div class="flex flex-col items-center">
        <h2 class="text-center">
          Scarica ora Atera, il tuo fedele compagno di avventura
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
                <img src="/brenta.webp" />
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

<script lang="ts" setup>
const mounted = useMounted();
</script>

<style lang="css" scoped>
.image-button {
  @apply flex h-[4rem] items-center justify-center rounded-xl bg-yellow-50 transition-all duration-[150ms] ease-out md:h-[4rem];
}
</style>
