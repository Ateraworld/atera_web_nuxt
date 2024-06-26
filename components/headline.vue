<template>
  <header class="headline">
    <div
      class="flex w-full max-w-[var(--content-width)] items-center justify-between px-4 py-8 md:px-12"
    >
      <!-- <Transition name="fade" appear mode="out-in">
        <div
          v-if="scroll.y.value > 0"
          class="shadow"
          :style="{ '--shadow-blur': shadowBlur, '--duration-tr': '500ms' }"
        ></div>
      </Transition> -->
      <div class="flex items-center">
        <NuxtLink
          class="flex cursor-pointer flex-row items-center gap-2 transition-all duration-200 ease-out hover:scale-[105%]"
          to="/"
        >
          <img class="w-[3rem]" src="/logo_white.png" alt="Wildspace logo" />
          <p class="font-poppins text-[1.5rem] font-bold">Wildspace</p>
        </NuxtLink>
        <div
          class="mx-4 rounded-xl border-[2px] border-accent px-2 py-1 text-label text-accent hover:bg-accent hover:text-neutral"
        >
          Beta
        </div>
      </div>
      <div class="flex items-center gap-12">
        <div
          v-if="breakpoints.greaterOrEqual('lg').value"
          class="flex flex-row gap-12"
        >
          <NuxtLink :to="to">
            <PrimaryButton>{{ label }}</PrimaryButton>
          </NuxtLink>
        </div>
        <div ref="el" class="relative" v-else>
          <button aria-label="Navbar menu" @click="menuOpened = !menuOpened">
            <Icon
              class="icon-button"
              name="material-symbols:menu-rounded"
            ></Icon>
          </button>
          <Transition name="fade" appear>
            <div v-if="menuOpened" class="menu">
              <button aria-label="Team section" @click="menuOpened = false">
                <NuxtLink :to="to">
                  <PrimaryButton class="text-label">
                    {{ label }}
                  </PrimaryButton>
                </NuxtLink>
              </button>

              <div class="flex flex-row justify-center gap-4">
                <a href="https://github.com/Ateraworld" target="_blank">
                  <Icon class="icon-button" name="mdi:github" />
                </a>
                <a
                  href="https://www.instagram.com/ateraworld.app"
                  target="_blank"
                >
                  <Icon class="icon-button" name="mdi:instagram" />
                </a>
                <a href="mailto:" target="_blank">
                  <Icon class="icon-button" name="mdi:email" />
                </a>
              </div>
            </div>
          </Transition>
        </div>
        <div
          v-if="breakpoints.greaterOrEqual('lg').value"
          class="flex flex-row gap-4"
        >
          <a href="https://github.com/Ateraworld" target="_blank">
            <Icon class="icon-button" name="mdi:github" />
          </a>
          <a href="https://www.instagram.com/ateraworld.app" target="_blank">
            <Icon class="icon-button" name="mdi:instagram" />
          </a>
          <a href="mailto:" target="_blank">
            <Icon class="icon-button" name="mdi:email" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const el = ref<HTMLElement | null>(null);
const menuOpened = ref(false);
const scroll = useScrollProgress();
const route = useRoute();
const label = ref("La nostra idea");
const to = ref("/team");

function updateButtonState() {
  if (route.path.includes("/team")) {
    label.value = "Home";
    to.value = "/";
  } else {
    label.value = "La nostra idea";
    to.value = "/team";
  }
}

watch(() => route.path, updateButtonState);

const shadowBlur = computed(() => {
  if (scroll.y.value > 0) {
    return "16px";
  }
  return "0px";
});

function click(event: MouseEvent) {
  if (event.target !== null && !el.value?.contains(event.target as Node)) {
    menuOpened.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", click);
  updateButtonState();
});
</script>

<style lang="css" scoped>
.icon-button {
  @apply size-10 rounded-[var(--border-radius)] p-2 transition duration-150 hover:bg-neutral/10;
}

.shadow {
  z-index: 100;
  box-shadow: rgba(var(--accent), 0.2) 0px 0px var(--shadow-blur, 0px);
  @apply pointer-events-none absolute left-0 top-0 h-full w-full;
}

.headline {
  z-index: 100;
  @apply flex h-[6rem] w-full justify-center bg-transparent;
}

.menu {
  z-index: 10;
  @apply absolute top-[100%] m-auto flex translate-x-[-80%] flex-col gap-4 text-nowrap rounded-[var(--border-radius)] border-[1.5px] border-outline bg-surface px-4 py-6;
}
</style>
