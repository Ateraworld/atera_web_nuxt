<template>
  <div v-if="mounted" class="flex flex-col">
    <div class="flex h-[32rem] w-full space-x-[var(--spacing)]">
      <div class="flex w-full basis-[33%] items-stretch">
        <ParallaxCard key="0" anim-y-trasl="0px" anim-x-trasl="0px">
          <div class="flex h-full flex-col justify-between">
            <section>
              <h2>Marketing Contestualizzato</h2>
              <p>Raggiungi il pubblico giusto al momento giusto</p>
            </section>

            <img
              src="/local_shelter.svg"
              class="absolute bottom-[-16px] scale-[125%]"
            />
          </div>
        </ParallaxCard>
      </div>
      <div
        class="flex basis-[66%] flex-col items-stretch space-y-[var(--spacing)]"
      >
        <ParallaxCard
          key="1"
          class="flex-1"
          anim-delay="100ms"
          anim-y-trasl="0px"
          anim-x-trasl="0px"
        >
          <div>
            <h2>Coinvolgimento</h2>
            <p>Raggiungi il pubblico giusto al momento giusto</p>
          </div>
        </ParallaxCard>
        <div
          class="flex flex-1 flex-row items-stretch justify-stretch space-x-[var(--spacing)]"
        >
          <ParallaxCard
            class="flex-1"
            key="1"
            anim-delay="200ms"
            anim-y-trasl="0px"
            anim-x-trasl="0px"
          >
            <div>
              <h2>Aumenta le conversioni</h2>
              <p>
                Aumenta le conversioni nella tua realtà economica tramite
                promozioni contestualizzate
              </p>
            </div>
          </ParallaxCard>
          <ParallaxCard
            key="2"
            class="flex-1"
            anim-delay="300ms"
            anim-y-trasl="0px"
            anim-x-trasl="0px"
          >
            <div>
              <h2>Passione e natura</h2>
              <p>Raggiungi un pubblico di appassionati e avventurieri</p>
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
  --spacing: 1.5rem;
  --border-radius: 1rem;
}
</style>
