<template>
  <!-- Container -->
  <div class="container">
    <div class="wrapper">
      <div class="relative flex h-full w-full items-center">
        <div
          @click="onClicked"
          class="text-back-400 flex h-full w-full cursor-pointer justify-start pl-4 text-center"
        >
          <button class="w-full text-center text-label md:text-body">
            Hai un'attività?
          </button>
        </div>
        <div
          @click="onClicked"
          class="text-back-400 flex h-full w-full cursor-pointer justify-center pr-4"
        >
          <button class="h-full text-center text-label md:text-body">
            Sei un appassionato?
          </button>
        </div>
      </div>

      <span
        class="switcher"
        :class="{
          'text-white left-[50%] font-semibold ': !businessMode,
          'text-white left-0 font-semibold': businessMode,
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
}

.container {
  @apply flex w-full max-w-[22rem]  md:max-w-[30rem];
}

.wrapper {
  @apply rounded-default relative h-[var(--height)] w-full bg-surface/50;
}

.switcher {
  @apply rounded-default absolute top-0 flex h-full w-[50%] items-center justify-center bg-accent transition-all duration-300 ease-out;
}
</style>
