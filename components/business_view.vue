<template>
  <div v-if="mounted" class="flex flex-col">
    <div class="flex h-[38rem] w-full space-x-[var(--spacing)]">
      <div class="flex flex-1 basis-[33%] items-stretch">
        <ParallaxCard key="0" anim-y-trasl="-10px">
          <div class="flex flex-col justify-center">
            <div class="mb-4 text-start text-lg">Lorem ipsum lorem ipsum</div>
            <div>
              <PrimaryButton>Diventa un partner</PrimaryButton>
            </div>
          </div>
          <img src="/partner.svg" width="300" alt="" />
        </ParallaxCard>
      </div>
      <div
        class="flex basis-[66%] flex-col items-stretch space-y-[var(--spacing)]"
      >
        <ParallaxCard
          key="1"
          class="flex-1"
          anim-delay="100ms"
          anim-y-trasl="10px"
          anim-x-trasl="-30px"
        >
          <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
          <div class="flex w-full justify-center">
            <img src="/progress.svg" width="100" alt="" />
          </div>
        </ParallaxCard>
        <div
          class="flex flex-1 flex-row items-stretch justify-stretch space-x-[var(--spacing)]"
        >
          <ParallaxCard
            class="flex-1"
            key="1"
            anim-delay="100ms"
            anim-y-trasl="10px"
            anim-x-trasl="-30px"
          >
            <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
            <div class="flex w-full justify-center">
              <img src="/progress.svg" width="100" alt="" />
            </div>
          </ParallaxCard>
          <ParallaxCard
            key="2"
            class="flex-1"
            anim-delay="100ms"
            anim-y-trasl="10px"
            anim-x-trasl="30px"
          >
            <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
            <div class="flex w-full justify-center">
              <img src="/offline.svg" width="100" alt="" />
            </div>
          </ParallaxCard>
        </div>
      </div>
    </div>
    <section class="px-8 py-16">
      <Topic
        title="Titolo"
        subtitle="Sottotitolo"
        button-text="Scopri ora"
        body="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      >
        <PhoneNotificationDisplay></PhoneNotificationDisplay>
      </Topic>
      <Topic
        title="Titolo"
        subtitle="Sottotitolo"
        inverted
        button-text="Scopri"
        body="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      ></Topic>
      <Topic
        title="Titolo"
        subtitle="Sottotitolo"
        button-text="Scopri"
        body="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      ></Topic>
    </section>
  </div>
</template>

<script lang="ts" setup>
const mounted = ref(false);

const divSpacing = ref("4rem");

onMounted(() => {
  mounted.value = true;
});
</script>

<style lang="css" scoped>
* {
  --spacing: 2rem;
  --border-radius: 1rem;
}
</style>
