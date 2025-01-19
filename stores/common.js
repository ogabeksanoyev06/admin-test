import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
   const districts = ref([]);

   const filterDistrictsByRegionId = (regionId) => {
      districts.value = districtsData.filter((district) => district.region_id === regionId);
   };

   const uploadFile = async (form) => {
      try {
         const response = await api.post('https://cdn.tuning-house.uz/api/images/upload', form, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         });
         return response.data;
      } catch (error) {
         throw error;
      }
   };

   return {
      districts,
      uploadFile,
      filterDistrictsByRegionId
   };
});
