<template>
  <div class="relative">
    <img src="/phone.svg" class="h-full w-full" alt="" />
    <div
      @mouseenter="exit"
      @mouseleave="enter"
      class="absolute left-[12.2%] top-[34.25%] h-[60%] w-[37.5%] overflow-clip rounded-[2rem]"
    >
      <div id="animated" class="notification overflow-clip p-2 text-neutral/75">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center space-x-1">
            <img src="/icons/bianco.svg" class="size-4" />
            <p class="text-[0.5rem]">Atera ● {{ currentNotification.time }}</p>
          </div>
          <div
            class="mr-[0.3rem] h-[0.65rem] w-[0.65rem] animate-ping rounded-full bg-accent duration-700"
          ></div>
        </div>
        <p class="mt-[0.35rem] text-[0.7rem] font-semibold text-neutral">
          {{ currentNotification.title }}
        </p>
        <p
          v-html="currentNotification.body"
          class="mt-[0.15rem] text-[0.6rem] leading-[0.8rem]"
        ></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const notifications = [
  {
    title: "Aperitivo? \u{1F914}",
    body: "La Malga Prealpi ti propone il <b>10%</b> di sconto su un aperitivo! Raggiungi la malga per festeggiare l'itinerario appena completato!",
  },
  {
    title: "Hai fame? \u{1F372}",
    body: "Che ne dici di una tipica cena con prodotti tipici locali?<br/> Il ristorante <b>Gusto di Montagna</b> ti aspetta!",
  },
  {
    title: "Rinnova la tua attrezzatura \u{1F3D4}\uFE0F",
    body: "Wow hai appena completato una ferrata incredibile!<br/>Passa al negozio di attrezzatura e riscatta il tuo sconto del <b>20%!</b>",
  },
  {
    title: "Si è fatto tardi \u{1F303}",
    body: "Oggi sei andato per le lunghe!<br/>L'hotel <b>Dolomiti</b> ha già preparato un letto caldo per te!",
  },
];

const animated = computed(() => document.getElementById("animated"));
const isShowing = ref(true);
const currentNotification: any = ref({ title: "", body: "" });

function updateNotification() {
  if (notifications.length > 0) {
    let index: number = Math.round(Math.random() * (notifications.length - 1));
    currentNotification.value = notifications[index];
    currentNotification.value["time"] =
      Math.round(Math.random() * 58 + 1) + " m";
  }
}

onMounted(() => {
  updateNotification();
});

function exit() {
  if (!isShowing) return;
  let el = animated.value;
  if (el === undefined) return;
  el?.classList.remove("anim-enter");
  el?.classList.add("anim-exit");
  isShowing.value = false;
}

function enter() {
  if (isShowing.value) return;
  let el = animated.value;
  if (el === undefined) return;
  updateNotification();
  el?.classList.remove("anim-exit");
  el?.classList.add("anim-enter");
  isShowing.value = true;
}
</script>

<style lang="css" scoped>
* {
  --duration: 250ms;
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  60% {
    transform: scale(1);
    opacity: 0;
  }
  80% {
    transform: scale(1.25);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.animate-ping {
  animation: ping 2s ease-out infinite;
}
.anim-enter {
  animation: enter var(--duration) ease-out forwards;
}
.anim-exit {
  animation: exit var(--duration) ease-out forwards;
}
.notification {
  @apply absolute left-[8.5%] top-[39%]  w-[83%] rounded-[0.325rem] bg-[#252c37];
}

@keyframes enter {
  from {
    transform: translateY(40%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes exit {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translatex(25%);
    opacity: 0;
  }
}
</style>
