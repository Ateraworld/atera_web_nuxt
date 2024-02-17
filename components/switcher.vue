<template>
  <!-- Container -->
  <div class="container">
    <div class="wrapper">
      <div class="relative flex h-full w-full items-center">
        <div
          @click="onClicked"
          class="flex w-full cursor-pointer justify-start pl-4 text-back-400"
        >
          <button>Sei un business?</button>
        </div>
        <div
          @click="onClicked"
          class="flex w-full cursor-pointer justify-end pr-4 text-back-400"
        >
          <button>Sei un utente?</button>
        </div>
      </div>

      <span
        class="switcher"
        :class="{
          'left-[50%] font-semibold text-white ': !businessMode,
          'left-0 font-semibold text-white': businessMode,
        }"
        >{{ businessMode ? "Business" : "User" }}</span
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
  --height: 2rem;
}

.container {
  @apply flex w-full max-w-[28rem] pt-12;
}

.wrapper {
  @apply bg-surface/50 relative h-[var(--height)] w-full rounded-lg;
}

.switcher {
  @apply bg-accent absolute top-0 flex h-full w-[50%] items-center justify-center rounded-lg transition-all duration-300 ease-out;
}
</style>
