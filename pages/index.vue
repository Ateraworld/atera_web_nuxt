<template>
  <Content @mode-changed="modeChanged"></Content>
</template>

<script lang="ts" setup>
const mode = ref(false);
const { x, y } = useMouse();

function modeChanged(businessMode: boolean) {
  mode.value = businessMode;
}
</script>

<style lang="css" scoped></style>
