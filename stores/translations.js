import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useTranslationsStore = defineStore('translations', () => {
   const api = useApi();
   const { locale } = useI18n();

   const translations = ref({});

   const AddOrUpdateTranslations = async (lang, data) => {
      const response = await api.post(`/api/translations/${lang}`, data);
      return response.data;
   };

   const getTranslations = async (lang) => {
      const response = await api.get(`/api/translations/${lang}`);
      translations.value = response.data;
      return response.data;
   };

   const deleteLanguageObject = async (lang, object_key) => {
      const response = await api.delete(`/api/translations/${lang}/${object_key}`);
      return response.data;
   };

   return {
      getTranslations,
      deleteLanguageObject,
      AddOrUpdateTranslations
   };
});
