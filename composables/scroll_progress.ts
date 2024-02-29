export const useScrollProgress = () => {
  const x = ref(0);
  const y = ref(0);
  const scroll = useWindowScroll();
  watch(scroll.y, () => {
    y.value =
      document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.offsetHeight);
    x.value =
      document.documentElement.scrollLeft /
      (document.documentElement.scrollWidth -
        document.documentElement.offsetWidth);
  });
  return { x, y };
};
