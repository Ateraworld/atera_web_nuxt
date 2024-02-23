<template>
  <head></head>
  <body :class="{ red: mode, user: !mode }">
    <Headline></Headline>
    <Content @mode-changed="modeChanged"></Content>
    <Footline></Footline>
  </body>
</template>

<script lang="ts" setup>
const mode = ref(false);
function modeChanged(businessMode: boolean) {
  mode.value = businessMode;
}
</script>

<style lang="css" scoped></style>
