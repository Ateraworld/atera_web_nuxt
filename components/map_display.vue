<template>
  <div
    ref="elementRef"
    @click="restartAnimation"
    class="rounded-card relative flex cursor-pointer justify-center border-[4px] border-outline p-12 lg:min-w-[32rem]"
  >
    <div class="relative">
      <svg
        viewBox="0 0 143 212"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="map-path"
          d="M23.7045 15.8152L34.0459 2.51246L35.5783 6.40997L38.5856 6.69049L42.3448 7.04115L46.6127 10.0675L53.3792 10.6986L56.3866 10.9792L59.4921 14.2725L55.6574 18.7957L59.0407 19.1113L58.7282 22.4613L63.6151 22.9171L63.3027 26.2671L74.5802 27.3191L84.0068 31.953L88.5465 36.131L94.7288 38.9604L104.879 39.9072L112.981 38.4102L116.364 38.7258L123.449 31.8775L132.847 32.7542L134.756 36.6868L129.521 39.9531L134.408 40.4089L134.2 42.6423L129.313 42.1864L137.508 47.8317L131.493 47.2707L140.85 52.649L131.314 53.2613L140.191 59.7212L139.357 68.6544L133.51 70.3618L134.904 75.7481L136.61 77.7846L138.281 80.1932L137.448 89.1264L132.682 99.5701L131.883 108.131L130.911 118.553L126.631 123.786L120.737 134.124L120.251 139.335L122.397 144.792L128.689 142.375L128.133 148.331L132.448 142.726L133.5 147.705L132.841 154.777L128.971 159.673L119.897 171.592L113.13 170.961L110.29 172.948L103.171 185.169L102.719 190.008L102.164 195.963L94.2288 199.729L90.4696 199.378L84.7031 203.747L81.1115 205.664L78.9195 208.839L70.8863 209.592L63.6518 201.783L60.0602 198.701L59.7477 202.051L53.3572 201.455L51.6225 195.661L46.5272 197.438L40.2001 200.227L37.7135 194.364L28.4832 195.755L25.9152 198.895L25.7763 200.384L18.5585 204.591L8.24713 197.247L10.8558 189.606L7.09667 189.255L2.35463 183.181L5.30454 175.947L8.58964 173.25L13.0085 166.528L15.8602 156.281L13.2001 152.279L15.057 144.567L14.3806 139.623L15.7861 136.751L12.0269 136.4L12.4783 131.561L7.21547 131.07L9.71401 128.675L6.09372 126.835L6.64925 120.88"
          stroke="rgba(var(--outline), 1)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- <circle r="4" cx="0" cy="0" fill="rgba(var(--accent))">
          <animateMotion
            :keyPoints="keyPointsAnim"
            keyTimes="0;1"
            begin="0s"
            dur="8s"
            repeatCount="infinite"
          >
            <mpath href="#map-path" />
          </animateMotion>
        </circle> -->
      </svg>

      <!-- <img src="/map.svg" class="h-[75%] w-[75%]" /> -->
      <div
        v-if="animatedSvg.animator.percentage.value >= 0.65"
        class="animate-pop absolute left-[78%] top-[86%] h-[2%] w-[5%] bg-accent"
      ></div>
      <Transition name="join" appear mode="out-in">
        <div
          v-if="animatedSvg.animator.percentage.value >= 0.7"
          :style="{ '--y-tr': '20px', '--duration-tr': '250ms' }"
          class="point-label left-[76%] top-[92%]"
        >
          <icon class="size-8 text-accent" name="material-symbols:hotel"></icon>
          <p class="font-semibold">Hotel</p>
        </div>
      </Transition>

      <div
        v-if="animatedSvg.animator.percentage.value >= 0.95"
        class="animate-pop absolute left-[14%] top-[55%] h-[4%] w-[5%] bg-accent"
      ></div>
      <Transition name="join" appear mode="out-in">
        <div
          v-if="animatedSvg.animator.percentage.value >= 0.975"
          :style="{ '--y-tr': '20px', '--duration-tr': '250ms' }"
          class="point-label left-[4%] top-[43%]"
        >
          <icon
            class="size-8 text-accent"
            name="material-symbols:house-siding-rounded"
          ></icon>
          <p class="font-semibold">Rifugio</p>
        </div>
      </Transition>

      <div
        v-if="animatedSvg.animator.percentage.value >= 0.15"
        class="animate-pop absolute left-[68%] top-[12%] h-[3%] w-[8%] bg-accent"
      ></div>
      <Transition name="join" appear mode="out-in">
        <div
          v-if="animatedSvg.animator.percentage.value >= 0.2"
          :style="{ '--y-tr': '20px', '--duration-tr': '250ms' }"
          class="point-label left-[54%] top-[0%]"
        >
          <icon
            class="size-8 text-accent"
            name="material-symbols:shopping-bag"
          ></icon>
          <p class="font-semibold">Negozio</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
const elementRef = ref<HTMLElement | null>();
useIntersectionObserver(elementRef, (entries) => {
  if (entries[0].isIntersecting) {
    restartAnimation();
  }
});
const animatedSvg = useSvgAnimator("#map-path");
const tw = useTailwind();

function restartAnimation() {
  animatedSvg.animator.stop();
  animatedSvg.animator.start({ currentDuration: 7000 });
}

const keyPointsAnim = computed(() => {
  let v = animatedSvg.animator.percentage.value;
  return `${v};${v}`;
});

onMounted(() => {
  animatedSvg.preload();
});

function ease(x: number): number {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
</script>

<style lang="css" scoped>
.point-label {
  @apply absolute flex items-center justify-start gap-2 rounded-xl border-outline text-label md:text-body;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>
