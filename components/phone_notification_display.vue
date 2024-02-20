<template>
  <div class="relative">
    <img src="/phone.svg" width="1024rem" alt="" />

    <div
      @mouseenter="exit"
      @mouseleave="enter"
      class="absolute left-[17%] top-[34.5%] h-[60%] w-[42%] overflow-clip rounded-xl"
    >
      <div id="animated" class="notification overflow-clip p-2 text-text/75">
        <div class="flex items-center space-x-1">
          <img src="/icons/bianco.svg" class="size-4" />
          <p class="text-[0.5rem]">Atera ● {{ currentNotification.time }}</p>
        </div>
        <p class="mt-[0.35rem] text-[0.75rem] font-semibold text-text">
          {{ currentNotification.title }}
        </p>
        <p class="mt-[0.15rem] text-[0.6rem] text-text">
          {{ currentNotification.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const notifications = [
  {
    title: "Nuovo sconto!",
    body: "Hai appena guadagnato il 10% di sconto su un aperitivo alla Malga Prealpi! Raggiungi la malga per festeggiare l'itinerario completato oggi!",
  },
  { title: "Prova notifica", body: "Lorem ipsum lorem ipsum" },
];

const animated = computed(() => document.getElementById("animated"));
const isShowing = ref(true);
const currentNotification: any = ref({ title: "", body: "" });

function updateNotification() {
  if (notifications.length > 0) {
    let index: number = Math.round(Math.random() * (notifications.length - 1));
    console.log(index);
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
.anim-enter {
  animation: enter var(--duration) ease-out forwards;
}
.anim-exit {
  animation: exit var(--duration) ease-out forwards;
}
.notification {
  @apply absolute left-[9.75%] top-[39%]  w-[80.5%] rounded-[0.325rem] bg-[#252c37];
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
