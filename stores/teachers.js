import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useTeachersStore = defineStore('teachers', () => {
   const api = useApi();
   const loading = ref(false);

   const getTeachers = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/teachers');
         return response.data.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   return {
      getTeachers
   };
});
