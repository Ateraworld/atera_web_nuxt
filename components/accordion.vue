<template>
  <div
    @click="expanded = !expanded"
    class="rounded-default flex w-full flex-col items-stretch gap-4 border-[1.5px] border-outline bg-surface p-4"
  >
    <div class="flex w-full cursor-pointer flex-row items-center">
      <div class="flex w-full flex-row items-center justify-stretch">
        <div class="flex-1 font-bold">
          <slot name="title"></slot>
        </div>
        <icon
          class="size-8 transition-all duration-300 ease-in-out"
          :class="{ 'rotate-180': expanded, 'rotate-0': !expanded }"
          name="material-symbols:expand-more-rounded"
        ></icon>
      </div>
    </div>
    <Transition name="expand" mode="out-in">
      <div v-show="expanded" class="content">
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const expanded = ref(false);
</script>

<style lang="css" scoped>
.content {
  display: none;
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  height: 0px !important;
}
</style>
