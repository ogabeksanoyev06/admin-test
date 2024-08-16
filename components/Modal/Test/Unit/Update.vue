<script setup>
import { reactive, watch } from 'vue';
import { useCustomToast } from '@/composables/useCustomToast.js';
import { storeToRefs } from 'pinia';
import { useSciencesStore } from '@/stores/sciences.js';

const emit = defineEmits(['section-updated']);

const props = defineProps({
   scienceId: String,
   sectionId: String
});

const { showToast } = useCustomToast();

const scienceStore = useSciencesStore();

const { loading } = storeToRefs(scienceStore);

const { updateSectionById, getSectionById } = scienceStore;

const isOpen = ref(false);

const form = reactive({
   name_uz: '',
   name_ru: '',
   name_en: ''
});

const sectionById = async () => {
   try {
      const sectionId = await getSectionById(props.sectionId);
      console.log(sectionId);
      if (sectionId.status === 'success') {
         form.name_uz = sectionId.data.name_uz;
         form.name_ru = sectionId.data.name_ru;
         form.name_en = sectionId.data.name_en;
      }
   } catch (error) {
      console.log(error);
   }
};

const handleSubmitForm = async () => {
   try {
      const response = await updateSectionById(props.sectionId, {
         name_uz: form.name_uz,
         name_ru: form.name_ru,
         name_en: form.name_en,
         subject: props.scienceId
      });
      if (response.status === 'success') {
         emit('section-updated');
         form.name_en = '';
         form.name_ru = '';
         form.name_uz = '';
         isOpen.value = false;
         showToast("Bo'lim muvaffaqiyatli qo'shildi!", 'success');
      } else {
         showToast("Noma'lum muammo yuz berdi. Iltimos, qayta urinib ko'ring.", 'error');
      }
   } catch (error) {
      console.log(error);
   }
};
</script>

<template>
   <div>
      <Dialog v-model:open="isOpen">
         <DialogTrigger as-child>
            <Button @click="sectionById" variant="ghost" size="icon" class="rounded-full hover:bg-primary/10">
               <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                     stroke="hsl(var(--primary))"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                     stroke="hsl(var(--primary))"
                     stroke-width="1.5"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899"
                     stroke="hsl(var(--primary))"
                     stroke-width="1.5"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </Button>
         </DialogTrigger>
         <DialogContent class="p-6">
            <DialogHeader>
               <DialogTitle>Bo'limni tahrirlash </DialogTitle>
            </DialogHeader>
            <VForm @submit="handleSubmitForm" v-slot="{ errors }">
               <div class="grid gap-4 mt-4">
                  <div class="grid gap-2">
                     <VField name="name_uz" rules="required" v-model="form.name_uz">
                        <Label for="schooltype">Bo'lim nomi o'zbekcha</Label>
                        <Input v-model="form.name_uz" id="name_uz" type="text" placeholder="Bo'lim uz" />
                        <span class="text-sm text-destructive font-medium">{{ errors.name_uz }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="name_ru" rules="required" v-model="form.name_ru">
                        <Label for="name_ru">Bo'lim nomi ruscha</Label>
                        <Input v-model="form.name_ru" id="name_ru" type="text" placeholder="Bo'lim ru" />
                        <span class="text-sm text-destructive font-medium">{{ errors.name_ru }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="name_en" rules="required" v-model="form.name_en">
                        <Label for="name_en">Bo'lim nomi inglizcha</Label>
                        <Input v-model="form.name_en" id="name_en" type="text" placeholder="Bo'lim en" />
                        <span class="text-sm text-destructive font-medium">{{ errors.name_en }}</span>
                     </VField>
                  </div>
               </div>
               <div class="flex justify-end mt-4">
                  <Button :disabled="loading" type="submit">
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
         </DialogContent>
      </Dialog>
   </div>
</template>
