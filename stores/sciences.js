import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useSciencesStore = defineStore('sciences', () => {
   const api = useApi();
   const loading = ref(false);

   //  science

   const createSciences = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/tests/subject', data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSciences = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/tests/subjects');
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getScienceById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/subject/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getScienceTestTypesById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/types/subjects/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const deleteScienceById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/tests/subject/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const updateScienceById = async (id, data) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/tests/subject/${id}`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   //    parts or sections

   const createSections = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/tests/part', data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSections = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/tests/parts');
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSectionByScienceId = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/parts/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSectionById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/part/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const deleteSectionById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/tests/part/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const updateSectionById = async (id, data) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/tests/part/${id}`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   //    subject

   const createSubjects = async (data) => {
      try {
         loading.value = true;
         const response = await api.post('/api/superadmin/tests/theme', data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSubjects = async () => {
      try {
         loading.value = true;
         const response = await api.get('/api/superadmin/tests/theme');
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getSubjectSectionById = async (id) => {
      try {
         loading.value = true;
         const response = await api.get(`/api/superadmin/tests/themes/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const deleteSubjectById = async (id) => {
      try {
         loading.value = true;
         const response = await api.delete(`/api/superadmin/tests/theme/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const updateSubjectById = async (id, data) => {
      try {
         loading.value = true;
         const response = await api.put(`/api/superadmin/tests/theme/${id}`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      createSciences,
      getSciences,
      getScienceById,
      deleteScienceById,
      updateScienceById,
      getScienceTestTypesById,

      createSubjects,
      getSubjects,
      getSubjectSectionById,
      deleteSubjectById,
      updateSubjectById,

      createSections,
      getSections,
      getSectionByScienceId,
      deleteSectionById,
      updateSectionById,
      getSectionById
   };
});
