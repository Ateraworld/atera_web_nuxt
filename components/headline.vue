<template>
  <header class="flex justify-center">
    <div
      class="flex w-full max-w-[var(--content-width)] items-center justify-between space-x-8 px-8 py-8"
    >
      <div class="flex">
        <img
          class="cursor-pointer transition-all duration-200 ease-out hover:scale-[105%]"
          src="/logo_text.svg"
          alt="Atera logo"
          width="128"
        />
      </div>

      <div class="flex space-x-4">
        <a href="https://github.com/Ateraworld" target="_blank">
          <Icon class="btn-icon" name="mdi:github" />
        </a>
        <a href="https://www.instagram.com/ateraworld.app" target="_blank">
          <Icon class="btn-icon" name="mdi:instagram" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style></style>