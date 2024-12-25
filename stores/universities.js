import { ref } from 'vue';
import { useApi } from '@/composables/useApi';

export const useUniversitiesStore = defineStore('universities', () => {
   const loading = ref(false);
   const api = useApi();

   const createUniversity = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/universities', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const getAllUniversities = async (params) => {
      try {
         const response = await api.get('/api/superadmin/universities', { params });
         return response.data;
      } catch (error) {
         throw error;
      }
   };

   const getUniversityById = async (id) => {
      try {
         const response = await api.get(`/api/superadmin/universities/${id}`);
         return response.data;
      } catch (error) {
         throw error;
      }
   };

   const updateUniversityById = async (id, data) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/universities/${id}`, data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const deleteUniversityById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/universities/${id}`);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const uploadUniversitiesByFile = async (file) => {
      try {
         loading.value = true;

         const response = await api.patch('/api/superadmin/universities', file, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         });
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const updateSubjectForFaculties = async (data) => {
      try {
         loading.value = true;
         const response = await api.put('/api/superadmin/universities', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   const setDefaultDtmSubject = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/dtm-subjects', data);
         return response.data;
      } catch (error) {
         throw error;
      } finally {
         loading.value = false;
      }
   };

   return {
      createUniversity,
      getAllUniversities,
      getUniversityById,
      updateUniversityById,
      deleteUniversityById,
      uploadUniversitiesByFile,
      updateSubjectForFaculties,
      setDefaultDtmSubject,
      loading
   };
});
