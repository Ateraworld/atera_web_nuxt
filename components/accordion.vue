<template>
  <div
    class="rounded-default flex w-full flex-col items-stretch border-[1.5px] border-outline bg-surface"
  >
    <div class="cursor-pointer p-4" @click="expanded = !expanded">
      <div class="flex w-full flex-row items-center">
        <div class="flex w-full flex-row items-center justify-stretch">
          <div class="flex-1 font-bold">
            <slot name="title"></slot>
          </div>
          <icon
            class="size-8 transition-all duration-150 ease-out"
            :class="{ 'rotate-180': expanded, 'rotate-0': !expanded }"
            name="material-symbols:expand-more-rounded"
          ></icon>
        </div>
      </div>
    </div>
    <Transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="expanded">
        <div class="p-4">
          <slot name="content"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const expanded = ref(false);

function enter(el: Element) {
  let htmlEl = el as HTMLElement;
  if (!htmlEl) return;
  htmlEl.style.height = "auto";
  const height = getComputedStyle(htmlEl).height;
  htmlEl.style.height = "0px";
  getComputedStyle(htmlEl).height;
  setTimeout(() => {
    htmlEl.style.height = height;
  });
}
function afterEnter(el: Element) {
  let htmlEl = el as HTMLElement;
  if (!htmlEl) return;
  htmlEl.style.height = "auto";
}
function leave(el: Element) {
  let htmlEl = el as HTMLElement;
  if (!htmlEl) return;
  htmlEl.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    htmlEl.style.height = "0px";
  });
}
</script>

<style lang="css" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.2s ease-out;
  overflow: hidden;
}
</style>
