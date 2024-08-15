export default defineNuxtRouteMiddleware((to, from) => {
   const auth_token = useCookie('auth_token').value;

   if (!auth_token && to.path !== '/login') {
      return navigateTo('/login');
   }
   if (auth_token && to.path === '/login') {
      return navigateTo('/');
   }
});
