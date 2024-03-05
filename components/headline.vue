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
        <NuxtLink to="/">
          <img
            class="cursor-pointer transition-all duration-200 ease-out hover:scale-[105%]"
            src="/logo_text.svg"
            alt="Atera logo"
            width="128"
          />
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
          <NuxtLink to="/team">
            <PrimaryButton> La nostra idea </PrimaryButton>
          </NuxtLink>
        </div>
        <div ref="el" class="relative" v-else>
          <button @click="menuOpened = !menuOpened">
            <Icon
              class="icon-button"
              name="material-symbols:menu-rounded"
            ></Icon>
          </button>
          <Transition name="fade" appear>
            <div v-if="menuOpened" class="menu">
              <button @click="menuOpened = false">
                <NuxtLink to="/team">
                  <PrimaryButton class="text-label">
                    La nostra idea
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
});
</script>

<style lang="css" scoped>
.icon-button {
  @apply rounded-default size-10 p-2 transition duration-150 hover:bg-neutral/10;
}

.shadow {
  z-index: 100;
  box-shadow: rgba(var(--accent), 0.2) 0px 0px var(--shadow-blur, 0px);
  @apply pointer-events-none absolute left-0 top-0 h-full w-full;
}

.headline {
  z-index: 100;
  @apply flex h-[6rem] w-full justify-center bg-background;
}

.menu {
  z-index: 10;
  @apply rounded-default absolute top-[100%] m-auto flex translate-x-[-80%] flex-col gap-4 text-nowrap border-[1.5px] border-outline bg-surface px-4 py-6;
}
</style>
