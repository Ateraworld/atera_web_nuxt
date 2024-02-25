<template>
  <div class="flex w-full flex-col items-center justify-stretch space-y-6">
    <div class="flex flex-row flex-wrap justify-center gap-8">
      <ParallaxCard key="0" anim-y-trasl="10px">
        <a
          href="https://apps.apple.com/it/app/atera-ferrate-trekking/id6449359062"
          target="_blank"
        >
          <div class="image-button">
            <img src="/appstore.svg" alt="" class="h-full w-full" />
          </div>
        </a>
      </ParallaxCard>
      <ParallaxCard key="0" anim-y-trasl="10px">
        <a
          href="https://play.google.com/store/apps/details?id=com.ateraworld.atera"
          target="_blank"
        >
          <div class="image-button">
            <img src="/google_play.svg" class="h-full w-full" alt="" />
          </div>
        </a>
      </ParallaxCard>
    </div>
    <div class="h-[12rem]"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
* {
  z-index: 1;
}
.image-button {
  @apply h-[100px] w-[200px] items-center justify-center rounded-xl bg-transparent px-4 py-2 transition-all duration-[150ms] ease-out hover:scale-[102%];
}
</style>
