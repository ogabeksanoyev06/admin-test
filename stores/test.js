import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useTestsStore = defineStore('tests', () => {
   const api = useApi();
   const loading = ref(false);

   const createTest = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/tests', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const createTestTypes = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/tests/type', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const getTestTypes = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/tests/types');
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const getTestTypeById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/type/${id}`);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const deleteTestTypeById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/tests/type/${id}`);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const updateTestTypeById = async (id, form) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/tests/type/${id}`, form);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      createTest,
      createTestTypes,
      getTestTypes,
      deleteTestTypeById,
      updateTestTypeById,
      getTestTypeById
   };
});
