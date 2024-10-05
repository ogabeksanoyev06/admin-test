<template>
   <div class="flex flex-1 flex-col gap-4 w-full">
      <Tabs v-model="selectedLanguage" class="w-full">
         <TabsList class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-10">
            <TabsTrigger v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</TabsTrigger>
         </TabsList>
         <TabsContent v-for="lang in languages" :key="lang.code" :value="lang.code">
            <div class="flex items-center justify-between mb-6">
               <h1 class="text-lg font-medium md:text-2xl">Tarjimalar</h1>
               <Button @click="addTranslationGroup">Qo'shish</Button>
            </div>
            <VForm @submit.prevent="handleSubmitForm" v-slot="{ errors }">
               <div v-for="(group, index) in translationGroups" :key="index">
                  <div class="grid grid-cols-12 gap-2 items-start">
                     <!-- Kalit so'zi -->
                     <div class="grid gap-2 col-span-6 sm:col-span-2">
                        <VField :name="`key_${index}`" rules="required" v-model="group.key">
                           <Input v-model="group.key" :id="`key_${index}`" type="text" placeholder="Kalit so'z" />
                           <span class="text-sm text-destructive font-medium">{{ errors[`key_${index}`] }}</span>
                        </VField>
                     </div>
                     <!-- Tanlangan til uchun tarjima maydoni -->
                     <div class="grid gap-2 col-span-10 sm:col-span-9">
                        <VField :name="`lang_${lang.code}_${index}`" rules="required" v-model="group.translations">
                           <Input v-model="group.translations" :id="`lang_${lang.code}_${index}`" type="text" :placeholder="lang.label" />
                           <span class="text-sm text-destructive font-medium">{{ errors[`lang_${lang.code}_${index}`] }}</span>
                        </VField>
                     </div>
                     <div class="grid gap-2 col-span-2 sm:col-span-1">
                        <Button @click.stop="deleteObjectLang(group.key)" variant="destructive" class="p-0 rounded-full w-10 h-10 ml-auto">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M8 9h8v10H8z" opacity="0.3" />
                              <path fill="currentColor" d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z" />
                           </svg>
                        </Button>
                     </div>
                  </div>
               </div>
               <div class="flex justify-end">
                  <Button type="submit">
                     <svg
                        xmlns="http:www.w3.org/2000/svg"
                        xmlns:xlink="http:www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        font-size="48"
                        class="animate-spin iconify iconify--ph w-5 h-5"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        v-if="loading"
                     >
                        <path
                           fill="#fff"
                           d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                        ></path>
                     </svg>
                     Saqlash
                  </Button>
               </div>
            </VForm>
         </TabsContent>
      </Tabs>
   </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTranslationsStore } from '@/stores/translations.js';
import { useCustomToast } from '@/composables/useCustomToast.js';

const { showToast } = useCustomToast();

const translationsStore = useTranslationsStore();
const { AddOrUpdateTranslations, getTranslations, deleteLanguageObject } = translationsStore;

const languages = [
   { code: 'uz', label: "O'zbekcha" },
   { code: 'uzc', label: 'Ўзбекча' },
   { code: 'kr', label: 'Qaraqalpaqsha' },
   { code: 'ru', label: 'Русский' },
   { code: 'en', label: 'English' }
];

const selectedLanguage = ref('uz');

const translationGroups = ref([{ key: '', translations: '' }]);

const addTranslationGroup = () => {
   translationGroups.value.push({ key: '', translations: '' });
};

const deleteObjectLang = async (key) => {
   try {
      const res = await deleteLanguageObject(selectedLanguage.value, key);
      if (res.message === 'success') {
         showToast(res.data.message, 'success');
         translationGroups.value = translationGroups.value.filter((group) => group.key !== key);
      }
   } catch (error) {
      console.log(error);
   }
};

const handleSubmitForm = async () => {
   const submissionData = {};

   translationGroups.value.forEach((group) => {
      if (group.key) {
         submissionData[group.key] = group.translations;
      }
   });

   await AddOrUpdateTranslations(selectedLanguage.value, submissionData);
};

const loadTranslations = async () => {
   const { data: translations } = await useAsyncData('translations', async () => await getTranslations(selectedLanguage.value));

   if (translations.value) {
      translationGroups.value = Object.entries(translations.value?.data[0]).map(([key, value]) => {
         return {
            key: key,
            translations: value
         };
      });
   }
};

// watch(selectedLanguage, async () => {
//    await loadTranslations();
// });

await loadTranslations();
</script>
