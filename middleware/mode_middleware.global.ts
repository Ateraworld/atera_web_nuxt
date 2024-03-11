export default defineNuxtRouteMiddleware((to, from) => {
  const mode = useMode();
  mode.businessMode =
    to.query.mode === undefined || to.query.mode === "business";
});
