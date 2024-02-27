<template>
  <div class="flex w-full items-start justify-center p-8">
    <div
      class="flex max-w-[var(--content-width)] flex-grow flex-col items-center gap-4"
    >
      <div class="flex gap-2">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
      </div>
      <div class="flex items-center gap-2">
        <label for="business-type">Tipo di attività:</label>
        <select name="business-type" id="business-type">
          <option value="Rifugio">Rifugio</option>
          <option value="Ristorante">Ristorante</option>
          <option value="Hotel">Hotel</option>
          <option value="Negozio">Negozio</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
