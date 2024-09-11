<script setup>
import { reactive } from 'vue';
import { useCustomToast } from '@/composables/useCustomToast.js';
import { storeToRefs } from 'pinia';
import { useTestsStore } from '@/stores/test.js';

const emit = defineEmits(['testTypes-added']);

const { showToast } = useCustomToast();

const testStore = useTestsStore();

const { loading } = storeToRefs(testStore);

const { createTestTypes } = testStore;

const isOpen = ref(false);

const userTypes = [
   { id: 'user', label: 'Foydalanuvchi' },
   { id: 'pupils', label: 'O`quvchi' },
   { id: 'teacher', label: 'O`qituvchi' }
];

const form = reactive({
   title_uz: '',
   title_ru: '',
   title_en: '',
   photo_url: 'https://cdn.talimpro.uz/43cf0da0-62aa-11ef-849f-e379d8ea36c6.png',
   user_types: []
});

const handleChange = (itemId, checked) => {
   if (checked) {
      if (!form.user_types.includes(itemId)) {
         form.user_types.push(itemId);
      }
   } else {
      const index = form.user_types.indexOf(itemId);
      if (index > -1) {
         form.user_types.splice(index, 1);
      }
   }
};

const handleSubmitForm = async () => {
   try {
      const response = await createTestTypes({
         ...form
      });
      if (response.status === 'success') {
         emit('testTypes-added');
         form.title_en = '';
         form.title_ru = '';
         form.title_uz = '';
         isOpen.value = false;
         showToast("Test turi muvaffaqiyatli qo'shildi!", 'success');
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
            <Button>
               Test turi yaratish
               <svg class="w-5 h-5" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M9 12.3252H15M12 9.3252V15.3252M3 12.3252C3 13.5071 3.23279 14.6774 3.68508 15.7693C4.13738 16.8613 4.80031 17.8534 5.63604 18.6892C6.47177 19.5249 7.46392 20.1878 8.55585 20.6401C9.64778 21.0924 10.8181 21.3252 12 21.3252C13.1819 21.3252 14.3522 21.0924 15.4442 20.6401C16.5361 20.1878 17.5282 19.5249 18.364 18.6892C19.1997 17.8534 19.8626 16.8613 20.3149 15.7693C20.7672 14.6774 21 13.5071 21 12.3252C21 11.1433 20.7672 9.97297 20.3149 8.88104C19.8626 7.78911 19.1997 6.79696 18.364 5.96123C17.5282 5.12551 16.5361 4.46257 15.4442 4.01028C14.3522 3.55799 13.1819 3.3252 12 3.3252C10.8181 3.3252 9.64778 3.55799 8.55585 4.01028C7.46392 4.46257 6.47177 5.12551 5.63604 5.96123C4.80031 6.79696 4.13738 7.78911 3.68508 8.88104C3.23279 9.97297 3 11.1433 3 12.3252Z"
                     stroke="#fff"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </Button>
         </DialogTrigger>
         <DialogContent class="p-6 max-w-[600px]">
            <DialogHeader>
               <DialogTitle>Test turini yaratish </DialogTitle>
            </DialogHeader>
            <VForm @submit="handleSubmitForm" v-slot="{ errors }">
               <div class="grid gap-4 mt-4">
                  <div class="grid gap-2">
                     <VField name="title_uz" rules="required" v-model="form.title_uz">
                        <Label for="schooltype">Test turi nomi o'zbekcha</Label>
                        <Input v-model="form.title_uz" id="title_uz" type="text" placeholder="Test turi uz" />
                        <span class="text-sm text-destructive font-medium">{{ errors.title_uz }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="title_ru" rules="required" v-model="form.title_ru">
                        <Label for="title_ru">Test turi nomi ruscha</Label>
                        <Input v-model="form.title_ru" id="title_ru" type="text" placeholder="Test turi ru" />
                        <span class="text-sm text-destructive font-medium">{{ errors.title_ru }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="title_en" rules="required" v-model="form.title_en">
                        <Label for="title_en">Test turi nomi inglizcha</Label>
                        <Input v-model="form.title_en" id="title_en" type="text" placeholder="Test turi en" />
                        <span class="text-sm text-destructive font-medium">{{ errors.title_en }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="user_types" rules="required|requiredArray" v-model="form.user_types">
                        <Label for="user_types">Tegishli foydalanuvchi turini tanlang</Label>
                        <div class="flex flex-wrap gap-4">
                           <div v-for="item in userTypes" :key="item.id" class="flex items-center space-x-3">
                              <Checkbox
                                 :id="item.id"
                                 :value="item.id"
                                 :checked="form.user_types?.includes(item.id)"
                                 @update:checked="(checked) => handleChange(item.id, checked)"
                              />
                              <Label :for="item.id">{{ item.label }}</Label>
                           </div>
                        </div>
                        <span class="text-sm text-destructive font-medium">{{ errors.user_types }}</span>
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
