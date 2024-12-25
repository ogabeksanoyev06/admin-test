import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useclassesStore = defineStore('classes', () => {
   const api = useApi();
   const loading = ref(false);

   const createClasses = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/school', data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getClasses = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/school');
         return response.data.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getClassById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/school/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const deleteClassById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/school/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const updateClassById = async (id, data) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/school/${id}`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      createClasses,
      getClasses,
      getClassById,
      deleteClassById,
      updateClassById
   };
});
