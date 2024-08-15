import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';

export const useAuthStore = defineStore('auth', () => {
   const api = useApi();

   const router = useRouter();

   const authToken = useCookie('auth_token', {
      maxAge: 60 * 60 * 24 * 30
   });
   const loading = ref(false);

   const login = async (form) => {
      loading.value = true;
      try {
         const response = await api.post('/api/superadmin/login', form);
         if (response.data.status === 'success') {
            authToken.value = response.data.data.auth_token;
            router.push('/');
         }
      } catch (error) {
         console.error(error);
      } finally {
         loading.value = false;
      }
   };

   return {
      login,
      loading
   };
});
