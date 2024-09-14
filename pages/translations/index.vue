<template>
   <div class="flex flex-1 flex-col gap-4 w-full">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Tarjimalar</h1>
         <Button @click="addTranslationGroup">Qo'shish</Button>
      </div>
      <div>
         <DropdownMenu v-model:open="languageDropdown">
            <DropdownMenuTrigger>
               <div class="flex items-center gap-2 border rounded-lg px-2.5 py-2 border-primary/10">
                  <img src="/assets/svg/flag/uz.svg" alt="" />
                  <span class="">O'zbekcha</span>
                  <span class="transition-300 text-base" :class="{ ' rotate-180': languageDropdown }">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-muted-foreground">
                        <g fill="none" fill-rule="evenodd">
                           <path
                              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                           />
                           <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
                        </g>
                     </svg>
                  </span>
               </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="w-[180px]">
               <DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100">
                  <img src="/assets/svg/flag/uz.svg" alt="" class="w-5 h-5" />
                  <span class="text-left text-sm">O'zbekcha</span>
               </DropdownMenuItem>
               <DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100">
                  <img src="/assets/svg/flag/uz.svg" alt="" class="w-5 h-5" />
                  <span class="text-left text-sm">Ўзбекча</span>
               </DropdownMenuItem>
               <DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100">
                  <img src="/assets/svg/flag/kr.svg" alt="" class="w-5 h-5" />
                  <span class="text-left text-sm">Qaraqalpaqsha</span>
               </DropdownMenuItem>
               <DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100">
                  <img src="/assets/svg/flag/en.svg" alt="" class="w-5 h-5" />
                  <span class="text-left text-sm">English</span>
               </DropdownMenuItem>
               <DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100">
                  <img src="/assets/svg/flag/ru.svg" alt="" class="w-5 h-5" />
                  <span class="text-left text-sm">Русский</span>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
      <VForm @submit="handleSubmitForm" v-slot="{ errors }">
         <div v-for="(group, index) in translationGroups" :key="index" class="mb-4 border-b pb-4">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 items-start">
               <div class="grid gap-2">
                  <VField :name="`key_${index}`" rules="required" v-model="group.key">
                     <Label :for="`key_${index}`">Kalit so'z</Label>
                     <Input v-model="group.key" :id="`key_${index}`" type="text" placeholder="Kalit so'z" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`key_${index}`] }}</span>
                  </VField>
               </div>
               <div class="grid gap-2">
                  <VField :name="`lang_uz_${index}`" rules="required" v-model="group.uz">
                     <Label :for="`lang_uz_${index}`">O'zbekcha</Label>
                     <Input v-model="group.uz" :id="`lang_uz_${index}`" type="text" placeholder="O'zbekcha" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`lang_uz_${index}`] }}</span>
                  </VField>
               </div>

               <div class="grid gap-2">
                  <VField :name="`lang_uzc_${index}`" rules="required" v-model="group.uzc">
                     <Label :for="`lang_uzc_${index}`">Ўзбекча</Label>
                     <Input v-model="group.uzc" :id="`lang_uzc_${index}`" type="text" placeholder="Ўзбекча" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`lang_uzc_${index}`] }}</span>
                  </VField>
               </div>

               <div class="grid gap-2">
                  <VField :name="`lang_kz_${index}`" rules="required" v-model="group.kz">
                     <Label :for="`lang_kz_${index}`">Qaraqalpaqsha</Label>
                     <Input v-model="group.kz" :id="`lang_kz_${index}`" type="text" placeholder="Qaraqalpaqsha" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`lang_kz_${index}`] }}</span>
                  </VField>
               </div>

               <div class="grid gap-2">
                  <VField :name="`lang_ru_${index}`" rules="required" v-model="group.ru">
                     <Label :for="`lang_ru_${index}`">Русский</Label>
                     <Input v-model="group.ru" :id="`lang_ru_${index}`" type="text" placeholder="Русский" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`lang_ru_${index}`] }}</span>
                  </VField>
               </div>

               <div class="grid gap-2">
                  <VField :name="`lang_en_${index}`" rules="required" v-model="group.en">
                     <Label :for="`lang_en_${index}`">English</Label>
                     <Input v-model="group.en" :id="`lang_en_${index}`" type="text" placeholder="English" />
                     <span class="text-sm text-destructive font-medium">{{ errors[`lang_en_${index}`] }}</span>
                  </VField>
               </div>
            </div>
         </div>
         <div class="flex justify-end">
            <Button type="submit">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
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
   </div>
</template>

<script setup>
import { useTranslationsStore } from '@/stores/translations.js';

const { AddOrUpdateTranslations } = useTranslationsStore();

const languageDropdown = ref(false);

const translationGroups = ref([
   {
      key: '',
      uz: '',
      uzc: '',
      kz: '',
      ru: '',
      en: ''
   }
]);

const addTranslationGroup = () => {
   translationGroups.value.push({
      key: '',
      uz: '',
      uzc: '',
      kz: '',
      ru: '',
      en: ''
   });
};

const prepareTranslationData = (lang) => {
   return translationGroups.value.reduce((data, group) => {
      if (group.key && group[lang]) {
         data[group.key] = group[lang];
      }
      return data;
   }, {});
};

const handleSubmitForm = async () => {
   try {
      const uzData = prepareTranslationData('uz');
      const uzcData = prepareTranslationData('uzc');
      const kzData = prepareTranslationData('kz');
      const ruData = prepareTranslationData('ru');
      const enData = prepareTranslationData('en');

      const [uzResponse, uzcResponse, kzResponse, ruResponse, enResponse] = await Promise.all([
         AddOrUpdateTranslations('uz', uzData),
         AddOrUpdateTranslations('uzc', uzcData),
         AddOrUpdateTranslations('kz', kzData),
         AddOrUpdateTranslations('ru', ruData),
         AddOrUpdateTranslations('en', enData)
      ]);

      console.log('UZ translation response:', uzResponse);
      console.log('UZC translation response:', uzcResponse);
      console.log('KZ translation response:', kzResponse);
      console.log('RU translation response:', ruResponse);
      console.log('EN translation response:', enResponse);

   } catch (error) {
      console.error('Xatolik yuz berdi:', error);
   }
};

</script>
