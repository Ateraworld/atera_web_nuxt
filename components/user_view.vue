<template>
  <div class="flex flex-col items-center justify-center space-y-4">
    <Card key="0" anim-y-trasl="10px">
      <div class="mb-4 flex flex-col justify-center">
        <div class="mb-4 text-start text-lg">Lorem ipsum lorem ipsum</div>
        <button class="btn-secondary">Diventa un Ateriano</button>
      </div>
      <img src="/climber_stambecco.svg" width="300" alt="" />
    </Card>
    <Transition name="join" appear tag="div">
      <div
        :style="{
          '--duration': '250ms',
          '--delay': '150ms',
          '--y-tr': '10px',
          '--x-tr': '0px',
        }"
        class="flex w-full flex-row flex-wrap items-center justify-around"
      >
        <button class="cursor-pointer">
          <div class="image-button">
            <img src="/appstore.svg" alt="" class="h-full w-full" />
          </div>
        </button>
        <button class="cursor-pointer">
          <div class="image-button">
            <img src="/google_play.svg" class="h-full w-full" alt="" />
          </div>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.image-button {
  @apply h-[100px] w-[200px] items-center justify-center rounded-xl border-[1.5px] border-outline bg-transparent px-4 py-2 transition-all duration-[150ms] ease-out hover:scale-[102%] hover:border-accent;
}
</style>
