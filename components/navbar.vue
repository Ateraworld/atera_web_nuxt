<template>
  <div class="flex flex-row items-center px-8 py-4">
    <div class="basis-1/6"></div>
    <div class="basis-1/3">
      <div class="flex justify-start space-x-10">
        <img src="/icons/bianco.svg" alt="Atera logo" width="50px" height="50px" />
      </div>
    </div>

    <div class="basis-1/3">
      <div class="flex justify-end space-x-2">
        <a href="https://github.com/Ateraworld" target="_blank">
          <icon class="btn-icon" icon="mdi:github" />
        </a>
        <a href="https://www.instagram.com/ateraworld.app" target="_blank">
          <icon class="btn-icon" icon="mdi:instagram" />
        </a>
      </div>
    </div>
    <div class="basis-1/6"></div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<style></style>
