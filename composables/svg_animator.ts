export const useSvgAnimator = (pathId: string) => {
  const animator = useAnimator();
  const pathLengths = ref<any>({});

  watch(animator.p, () => {
    const pathElements = document.querySelectorAll<SVGPathElement>(pathId);
    if (pathElements == null) return;
    pathElements.forEach((e) => {
      let pl = pathLengths.value[e.id];
      e.style.strokeDashoffset = (pl - animator.p.value * pl).toString();
    });
  });

  const preload = () => {
    const pathElements = document.querySelectorAll<SVGPathElement>(pathId);
    if (pathElements == null) return;
    pathElements.forEach((e) => {
      let pl = e.getTotalLength();
      pathLengths.value[e.id] = pl;
      e.style.strokeDasharray = pl + ", " + pl;
      e.style.strokeDashoffset = pl.toString();
    });
  };

  return { animator, preload };
};
