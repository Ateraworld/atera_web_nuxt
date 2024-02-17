<template>
  <div class="flex flex-col items-center justify-stretch space-y-4">
    <Card key="0" anim-y-trasl="-10px">
      <div class="flex flex-col justify-center">
        <div class="mb-4 text-start text-lg">Lorem ipsum lorem ipsum</div>
        <button class="btn-secondary">Diventa un partner</button>
      </div>
      <img src="/partner.svg" width="300" alt="" />
    </Card>
    <div
      class="flex flex-row flex-wrap justify-center space-y-4 md:flex-nowrap md:space-x-4 md:space-y-0"
    >
      <Card key="1" anim-delay="100ms" anim-y-trasl="10px" anim-x-trasl="-30px">
        <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
        <div class="flex w-full justify-center">
          <img src="/progress.svg" width="250" alt="" />
        </div>
      </Card>
      <Card key="2" anim-delay="100ms" anim-y-trasl="10px" anim-x-trasl="30px">
        <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
        <div class="flex w-full justify-center">
          <img src="/offline.svg" width="250" alt="" />
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped></style>
