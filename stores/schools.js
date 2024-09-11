import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useSchoolsStore = defineStore('schools', () => {
   const api = useApi();
   const loading = ref(false);

   const createSchools = async (data) => {
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

   const getSchools = async () => {
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

   const getSchoolById = async (id) => {
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

   const deleteSchoolById = async (id) => {
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

   const updateSchoolById = async (id, data) => {
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

   const filterByRegion = async (data) => {
      try {
         loading.value = true;
         const response = await api.patch(`/api/superadmin/school/`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const addPermissionSchool = async (id, tariff) => {
      try {
         loading.value = true;
         const response = await api.post(`/api/superadmin/school/permission/${id}`, {
            tarif: tariff
         });
         return response.data;
      } catch (error) {
         throw new Error();
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      createSchools,
      getSchools,
      getSchoolById,
      deleteSchoolById,
      updateSchoolById,
      addPermissionSchool,
      filterByRegion
   };
});
