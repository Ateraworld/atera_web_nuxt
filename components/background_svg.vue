<template>
  <div class="line-container">
    <div class="mask">
      <svg viewBox="0 0 743 314" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="svg-path"
          d="M3 310.786C14.1667 306.119 37 295.386 39 289.786C41.5 282.786 40.5 275.786 44 268.786C47.5 261.786 42.5 256.786 47.5 250.786C52.5 244.786 61.5 240.286 66.5 236.786C71.5 233.286 79.5 231.786 85 219.286C90.5 206.786 79.5 209.786 96 194.786C112.5 179.786 103 177.286 105.5 171.786C108 166.286 117.5 156.286 116 145.286C114.5 134.286 126.5 135.286 133 122.286C139.5 109.286 138 102.786 145 100.786C152 98.7857 162.5 98.7857 164.5 100.786C166.5 102.786 172.5 101.286 176.5 104.286C180.5 107.286 180.5 107.786 183.5 104.286C186.5 100.786 189 89.2857 191.5 91.2857C194 93.2857 191.5 94.2857 197 95.2857C201.4 96.0857 205.5 84.9524 207 79.2857C212 76.2857 223.2 72.0857 228 79.2857C234 88.2857 242.5 79.2857 243 79.2857C243.5 79.2857 253.5 63.7857 273.5 67.2857C293.5 70.7857 306 62.7857 316 64.2857C326 65.7857 352 67.2858 358 64.2857C364 61.2857 377 53.7857 384 44.7857C389.6 37.5857 411.667 20.7857 422 13.2857C426.667 10.9523 441.1 8.38567 461.5 16.7857C469.5 19.7857 480.5 15.7857 485.5 9.78566C490.5 3.78566 491.5 2.28566 499.5 3.28566C507.5 4.28566 508.5 7.78564 512 6.28564C515.5 4.78564 525 6.28565 526.5 9.78566C528 13.2857 532.5 22.7856 536.5 23.7856C540.5 24.7856 545.5 31.7856 551 28.7856C556.5 25.7856 568 18.2856 575 22.2856C582 26.2856 594.5 35.2856 596.5 36.7856C598.5 38.2856 602 36.7856 604 36.7856C606 36.7856 612.5 39.7856 612.5 44.7856C612.5 49.7856 617.5 71.7856 622.5 78.2856C627.5 84.7856 630 88.7856 632.5 88.7856C635 88.7856 648.5 109.286 650.5 120.286C652.5 131.286 663 134.286 673 136.286C683 138.286 691.5 139.786 696 150.786C700.5 161.786 696.5 186.786 703 188.286C709.5 189.786 720.5 188.286 728.5 201.286C736.5 214.286 738.5 210.286 740.5 221.786"
          :stroke="'rgba(var(--surface), 0.5)'"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
const pathLengths = ref<any>({});
const animator = useAnimator();

watch(animator.p, () => {
  const pathElements = document.querySelectorAll<SVGPathElement>("#svg-path");

  if (pathElements == null) return;
  pathElements.forEach((e) => {
    let pl = pathLengths.value[e.id];
    e.style.strokeDashoffset = (pl - animator.p.value * pl).toString();
  });
});

onMounted(() => {
  const pathElements = document.querySelectorAll<SVGPathElement>("#svg-path");
  if (pathElements == null) return;
  pathElements.forEach((e) => {
    let pl = e.getTotalLength();
    pathLengths.value[e.id] = pl;
    e.style.strokeDasharray = pl + ", " + pl;
    e.style.strokeDashoffset = pl.toString();
  });

  animator.start(5, ease);
});

function ease(x: number) {
  return x * x;
}
</script>

<style lang="css" scoped>
.mask {
  -webkit-mask-image: linear-gradient(to top, white 0%, black 100%);
  mask-image: linear-gradient(to top, transparent 0%, black 100%);
}
.line-container {
  position: fixed;
  pointer-events: none;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
</style>
