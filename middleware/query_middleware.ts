export default defineNuxtRouteMiddleware((to, from) => {
  console.log(from.query);
  if (from.query.mode) {
    return navigateTo({
      path: to.path,
      hash: to.hash,
      query: { ...to.query, mode: from.query.mode },
    });
  }
});
