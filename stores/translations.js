import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useTranslationsStore = defineStore('translations', () => {
   const api = useApi();
   const { locale } = useI18n();

   const translations = ref({});

   const AddOrUpdateTranslations = async (lang, data) => {
      try {
         const response = await api.post(`/api/translations/${lang}`, data);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   const getTranslations = async () => {
      try {
         const response = await api.get(`/api/translations/${locale.value}`);
         translations.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   const deleteLanguageObject = async () => {
      try {
         const response = await api.get(`/api/translations/${locale.value}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   return {
      getTranslations,
      deleteLanguageObject,
      AddOrUpdateTranslations
   };
});
