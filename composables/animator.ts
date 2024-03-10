export interface AnimationParams {
  easingCallback?: (x: number) => number;
  currentDuration?: number;
  inverse?: boolean;
  onComplete?: () => void;
}
export const useAnimator = (delta: number = 1000 / 60) => {
  const p = ref(0);

  var t = 0;

  var params: AnimationParams = {};

  var intervalId: NodeJS.Timeout | null = null;

  const percentage = computed(() =>
    params.inverse ?? false ? 1 - p.value : p.value,
  );

  function getDuration(): number {
    return params.currentDuration ?? 500;
  }

  const update = () => {
    t += delta;

    if (params.easingCallback === undefined) {
      p.value = Math.min(Math.max(t / getDuration(), 0), 1);
    } else {
      p.value = Math.min(
        Math.max(params.easingCallback!(t / getDuration()), 0),
        1,
      );
    }
    if (t > getDuration() && intervalId !== null) {
      clearInterval(intervalId);
    }
  };
  const set = (x: number) => {
    p.value = Math.min(Math.max(x, 0), 1);
  };
  const start = (options: AnimationParams) => {
    params = options;
    t = 0;
    p.value = t;
    stop();

    intervalId = setInterval(update, delta);
  };
  const stop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  return { start, stop, percentage, set };
};
