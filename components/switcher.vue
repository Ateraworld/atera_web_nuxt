<template>
  <!-- Container -->
  <div class="container">
    <div class="wrapper">
      <div class="relative flex h-full w-full items-center">
        <div @click="onClicked" class="flex w-full cursor-pointer justify-start pl-2 text-back-400">
          <button>Are you a business?</button>
        </div>
        <div @click="onClicked" class="flex w-full cursor-pointer justify-end pr-2 text-back-400">
          <button>Are you a user?</button>
        </div>
      </div>

      <span class="switcher" :class="{
        'left-1/2 font-semibold text-white': !businessMode,
        'left-0 font-semibold text-white': businessMode,
      }">{{ businessMode ?
  "Business" :
  "User" }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{ businessMode: boolean }>();
const businessMode = ref(props.businessMode);

const emit = defineEmits<{ toggle: [status: boolean] }>();
function onClicked() {
  businessMode.value = !businessMode.value;
  emit("toggle", businessMode.value);
}
</script>

<style lang="css" scoped>
* {
  --height: 2rem;
  --width: 24rem;
}

.container {
  max-width: var(--width);
  @apply flex w-full pt-12
}

.wrapper {
  @apply relative h-[var(--height)] w-full rounded-full
}

.switcher {
  @apply absolute top-0 flex h-[var(--height)] w-1/2 ease-out items-center justify-center rounded-full bg-accent-600 transition-all duration-300;
}
</style>
