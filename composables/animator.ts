export const useAnimator = (delta: number = 1000 / 60) => {
  const p = ref(0);

  var t = 0;
  var easingCallback: ((x: number) => number) | null = null;
  var currentDuration: number = 0;
  var intervalId: NodeJS.Timeout | null = null;

  const update = () => {
    t += delta;
    if (easingCallback === null) {
      p.value = t / currentDuration;
    } else {
      p.value = Math.min(Math.max(easingCallback(t / currentDuration), 0), 1);
    }
    if (t > currentDuration && intervalId !== null) {
      clearInterval(intervalId);
    }
  };
  const start = (
    duration: number,
    easing: ((x: number) => number) | null = null,
  ) => {
    currentDuration = duration * 1000;
    easingCallback = easing;
    t = 0;
    p.value = t;
    intervalId = setInterval(update, delta);
  };
  const stop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  return { start, stop, p };
};
