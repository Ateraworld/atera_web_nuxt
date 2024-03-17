<template>
  <footer
    v-if="mounted"
    class="h-[8rem] min-h-[8rem] border-t-2 border-solid border-surface p-8 text-center"
  >
    <p class="text-sm text-gray-500">Wildspace 2024</p>
  </footer>
</template>

<script lang="ts" setup>
const mounted = useMounted();
</script>

<style lang="css" scoped></style>
