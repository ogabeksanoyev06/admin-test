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
            <Button type="submit">Saqlash</Button>
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
   const data = {};
   translationGroups.value.forEach((group) => {
      if (group.key && group[lang]) {
         data[group.key] = group[lang];
      }
   });
   return data;
};

const handleSubmitForm = async () => {
   try {
      const uzData = prepareTranslationData('uz');
      const uzcData = prepareTranslationData('uzc');
      const kzData = prepareTranslationData('kz');
      const ruData = prepareTranslationData('ru');
      const enData = prepareTranslationData('en');

      await Promise.all([
         AddOrUpdateTranslations('uz', uzData),
         AddOrUpdateTranslations('uzc', uzcData),
         AddOrUpdateTranslations('kz', kzData),
         AddOrUpdateTranslations('ru', ruData),
         AddOrUpdateTranslations('en', enData)
      ]);

   } catch (error) {
      console.error('Xatolik yuz berdi:', error);
   }
};
</script>
