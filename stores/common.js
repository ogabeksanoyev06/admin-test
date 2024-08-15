import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
   const districts = ref([]);

   const filterDistrictsByRegionId = (regionId) => {
      districts.value = districtsData.filter((district) => district.region_id === regionId);
   };

   return {
      districts,
      filterDistrictsByRegionId
   };
});
