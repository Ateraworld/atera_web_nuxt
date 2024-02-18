<template>
  <button class="btn" @click="emit('click')">
    <p><slot></slot></p>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<style lang="css" scoped>
.btn {
  @apply rounded-lg border-[1.5px] border-solid border-accent bg-transparent px-4 py-2 transition-all duration-[250ms] hover:bg-accent;
}
</style>
