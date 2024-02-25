import { defineStore } from "pinia";

export const useMode = defineStore("mode", () => {
  const businessMode = ref(true);
  function toggle(mode: boolean) {
    businessMode.value = mode;
  }

  return { businessMode, toggle };
});
