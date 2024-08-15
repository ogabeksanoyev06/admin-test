import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const usePupilsStore = defineStore('pupils', () => {
   const api = useApi();
   const loading = ref(false);

   const getPupils = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/pupils');
         return response.data.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   return {
    getPupils
   };
});
