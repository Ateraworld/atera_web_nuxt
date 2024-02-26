<template>
  <header class="flex justify-center">
    <div
      class="flex w-full max-w-[var(--content-width)] items-center justify-between space-x-8 px-16 py-8"
    >
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            class="cursor-pointer transition-all duration-200 ease-out hover:scale-[105%]"
            src="/logo_text.svg"
            alt="Atera logo"
            width="128"
          />
        </NuxtLink>
        <div
          class="mx-8 rounded-xl border-[2px] border-accent px-2 py-1 text-label text-accent"
        >
          Pre-beta
        </div>
      </div>

      <div class="flex space-x-4">
        <a href="https://github.com/Ateraworld" target="_blank">
          <Icon class="icon-button" name="mdi:github" />
        </a>
        <a href="https://www.instagram.com/ateraworld.app" target="_blank">
          <Icon class="icon-button" name="mdi:instagram" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.icon-button {
  @apply size-10 rounded-xl p-2 transition duration-150 hover:bg-neutral/10;
}
</style>
