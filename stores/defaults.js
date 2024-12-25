import { defineStore } from 'pinia';

export const useDefaultsStore = defineStore('defaults', () => {
   const api = useApi();
   const loading = ref(false);

   const setDefaults = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/default', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   return {
      setDefaults
   };
});
