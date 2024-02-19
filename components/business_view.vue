<template>
  <div v-if="mounted">
    <div class="flex flex-col items-center justify-stretch space-y-6">
      <ParallaxCard key="0" anim-y-trasl="-10px">
        <div class="flex flex-col justify-center">
          <div class="mb-4 text-start text-lg">Lorem ipsum lorem ipsum</div>
          <div>
            <PrimaryButton>Diventa un partner</PrimaryButton>
          </div>
        </div>
        <img src="/partner.svg" width="300" alt="" />
      </ParallaxCard>
      <div
        class="flex w-full flex-row flex-wrap justify-center space-y-6 md:flex-nowrap md:space-x-6 md:space-y-0"
      >
        <ParallaxCard
          key="1"
          anim-delay="100ms"
          anim-y-trasl="10px"
          anim-x-trasl="-30px"
        >
          <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
          <div class="flex w-full justify-center">
            <img src="/progress.svg" width="250" alt="" />
          </div>
        </ParallaxCard>
        <ParallaxCard
          key="2"
          anim-delay="100ms"
          anim-y-trasl="10px"
          anim-x-trasl="30px"
        >
          <div class="mb-4 w-full text-center">Lorem ipsum lorem ipsum</div>
          <div class="flex w-full justify-center">
            <img src="/offline.svg" width="250" alt="" />
          </div>
        </ParallaxCard>
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
  </div>
</template>

<script lang="ts" setup>
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style lang="css" scoped></style>
