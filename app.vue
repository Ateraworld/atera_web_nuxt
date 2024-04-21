<template>
  <div>
    <div v-if="mounted" class="overscroll-none">
      <div class="gradient" :style="{ '--x': x + 'px' }"></div>
    </div>
    <Transition name="fade" mode="out-in">
      <div
        v-if="mounted"
        :style="{ '--duration-tr': '250ms' }"
        class="flex h-full flex-col justify-start"
      >
        <Headline></Headline>
        <NuxtPage class="flex-1"> </NuxtPage>
        <Footline class="mt-24"></Footline>
        <div
          v-if="breakpoints.greaterOrEqual('md').value"
          class="scroll-indicator"
          :style="{ '--scale': scale }"
        ></div>
      </div>
      <div v-else class="flex h-screen w-screen items-center justify-center">
        <img src="/logo_white.png" alt="Logo" class="h-[8rem] w-[8rem]" />

        <NuxtPage class="flex-1"> </NuxtPage>
      </div>
    </Transition>

    <!-- <NuxtPage class="flex-1"> </NuxtPage> -->
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
const { x, y } = useMouse();
const breakpoints = useBreakpoints(breakpointsTailwind);
const mode = useMode();

const mounted = useMounted();
const scroll = useScrollProgress();
const scale = computed(() => scroll.y.value);
const route = useRoute();
const router = useRouter();

function updateMode() {
  if (mode.businessMode) {
    document.body.classList.add("business");
    document.body.classList.remove("user");
  } else {
    document.body.classList.add("user");
    document.body.classList.remove("business");
  }
}

watch(mode, updateMode);

onMounted(() => {
  if (process.client) {
    mode.businessMode =
      route.query.mode === undefined || route.query.mode === "business";
    router.replace({ query: {} });
  }
  updateMode();
});

useHead({
  title: "Wildspace",
  meta: [
    { charset: "utf-8" },
    {
      name: "subtitle",
      content:
        "Che tu sia un imprenditore on un appassionato, migliora la tua esperienza outdoor con Wildspace",
    },
  ],
  bodyAttrs: {
    class: "neutrals",
  },
  // Preload assets
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/brenta.webp",
    },
  ],
  htmlAttrs: { lang: "it" },
});

useSeoMeta({
  title: "Wildspace",
  ogTitle: "Wildspace",
  description:
    "Ferrate & Trekking, trova il tuo prossimo itinerario e riscatta sconti e benefici facendo ciò che ami",
  ogDescription:
    "Ferrate & Trekking, trova il tuo prossimo itinerario e riscatta sconti e benefici facendo ciò che ami",
  keywords: "Ferrate, Trekking, Avventura, Viaggi, Montagna, Outdoor",
  author: "Wildspace",
  viewport: "width=device-width, initial-scale=1.0",
});
</script>

<style lang="css" scoped>
.scroll-indicator {
  height: calc(var(--scale, 0) * 100%);
  @apply fixed right-0 top-0 w-[0.4rem] rounded-b-full bg-accent/100;
}

.gradient {
  --size: 300rem;
  --blur: 18rem;
  position: fixed;
  width: var(--size);
  height: var(--size);
  /* top: 100vh;
    transform: translateY(-100%); */
  bottom: calc(var(--size) * -0.95);
  left: 0;
  z-index: 0;
  transform: translateX(calc(var(--x) - var(--size) * 0.5));
  filter: blur(var(--blur));
  @apply pointer-events-none rounded-full bg-accent/20;
}
</style>
