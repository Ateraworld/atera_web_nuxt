<template>
  <div class="relative flex justify-center">
    <img src="/phone.svg" alt="Phone contextualized notifications" />
    <div
      @click="click"
      class="absolute left-[13.5%] top-[11.5%] h-[80%] w-[60.5%] cursor-pointer overflow-clip rounded-[1rem]"
    >
      <div id="animated" class="notification overflow-clip p-2 text-neutral/75">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center space-x-1">
            <img src="/bianco.svg" alt="Phone notification" class="size-4" />
            <p class="text-[0.5rem]">
              Wildspace ● {{ currentNotification.time }}
            </p>
          </div>
          <div
            class="mr-[0.3rem] h-[0.65rem] w-[0.65rem] animate-ping rounded-full bg-accent duration-700"
          ></div>
        </div>
        <p
          class="mt-[0.35rem] text-[0.7rem] font-semibold leading-[0.85rem] text-neutral"
        >
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
    body: "Alla Malga Prealpi hai il <b>10%</b> di sconto! Raggiungi la malga per festeggiare l'itinerario appena completato!",
  },
  {
    title: "Hai fame? \u{1F372}",
    body: "Che ne dici di una tipica cena con prodotti tipici locali?<br/> Il ristorante <b>Gusto di Montagna</b> ti aspetta!",
  },
  {
    title: "Rinnova la tua attrezzatura \u{1F3D4}\uFE0F",
    body: "Hai appena completato una ferrata incredibile!<br/>Passa al negozio di attrezzatura e riscatta il tuo sconto del <b>20%!</b>",
  },
  {
    title: "Si è fatto tardi \u{1F303}",
    body: "Oggi sei andato per le lunghe!<br/>L'hotel <b>Dolomiti</b> ha già preparato un letto caldo per te!",
  },
  {
    title: "Ancora in quota? 🏡",
    body: "Ehi scalatore, è piuttosto tardi, il rifugio <b>Roccia Bianca</b> è sempre pronto ad accoglierti! ",
  },
];

const animated = computed(() => document.getElementById("animated"));
const isShowing = ref(false);
const currentNotificationIndex = ref(0);
const currentNotification: any = ref({ title: "", body: "" });
let timeout: NodeJS.Timeout | null = null;

function updateNotification() {
  if (notifications.length > 0) {
    currentNotificationIndex.value =
      (currentNotificationIndex.value + 1) % notifications.length;
    currentNotification.value = notifications[currentNotificationIndex.value];
    currentNotification.value["time"] =
      Math.round(Math.random() * 58 + 1) + " m";
  }
}

onMounted(() => {
  enter();
});

function click(event: MouseEvent) {
  if (timeout !== null) clearTimeout(timeout);
  if (!isShowing) {
    enter();
  } else {
    exit();
  }
}

function exit() {
  if (!isShowing) return;
  let el = animated.value;
  if (el === undefined) return;
  el?.classList.remove("anim-enter");
  el?.classList.add("anim-exit");
  isShowing.value = false;
  timeout = setTimeout(enter, 500);
}

function enter() {
  if (isShowing.value) return;
  let el = animated.value;
  if (el === undefined) return;
  updateNotification();
  el?.classList.remove("anim-exit");
  el?.classList.add("anim-enter");
  isShowing.value = true;
  timeout = setTimeout(exit, Math.round(Math.random() * 2500 + 5000));
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
  animation: ping 1.5s ease-out infinite;
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
