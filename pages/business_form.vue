<template>
  <div class="flex w-full items-start justify-center p-8">
    <div
      class="flex max-w-[var(--content-width)] flex-grow flex-col items-center gap-4"
    >
      <div class="flex gap-2">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
      </div>
      <Dropdown :items="[]"></Dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
