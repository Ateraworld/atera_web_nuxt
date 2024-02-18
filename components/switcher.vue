<template>
  <!-- Container -->
  <div class="container">
    <div class="wrapper">
      <div class="relative flex h-full w-full items-center">
        <div
          @click="onClicked"
          class="flex w-full cursor-pointer justify-start pl-4 text-center text-back-400"
        >
          <button class="w-full text-center">Sei un business?</button>
        </div>
        <div
          @click="onClicked"
          class="flex w-full cursor-pointer justify-end pr-4 text-back-400"
        >
          <button class="w-full text-center">Sei un utente?</button>
        </div>
      </div>

      <span
        class="switcher"
        :class="{
          'left-[50%] font-semibold text-white ': !businessMode,
          'left-0 font-semibold text-white': businessMode,
        }"
        >{{ businessMode ? "Business" : "Utente" }}</span
      >
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
  --height: 2.75rem;
  --border-radius: 8rem;
}

.container {
  @apply flex w-full max-w-[20rem] pt-12 lg:max-w-[24rem];
}

.wrapper {
  border-radius: var(--border-radius);
  @apply relative h-[var(--height)] w-full bg-surface/50;
}

.switcher {
  border-radius: var(--border-radius);
  @apply absolute top-0 flex h-full w-[50%] items-center justify-center bg-accent transition-all duration-300 ease-out;
}
</style>
