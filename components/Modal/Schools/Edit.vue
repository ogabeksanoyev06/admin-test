<script setup>
import { reactive, watch } from 'vue';
import { useSchoolsStore } from '@/stores/schools.js';
import { useCommonStore } from '@/stores/common';
import { useCustomToast } from '@/composables/useCustomToast.js';

const props = defineProps({
   schoolId: String
});

const emit = defineEmits(['school-added']);

const { showToast } = useCustomToast();

const commonStore = useCommonStore();
const schoolStore = useSchoolsStore();

const { filterDistrictsByRegionId } = commonStore;
const { updateSchoolById, getSchoolById } = schoolStore;

const { loading } = storeToRefs(schoolStore);
const { districts } = storeToRefs(commonStore);

const form = reactive({
   region: '',
   district: '',
   number: 1,
   type: ''
});

const isOpen = ref(false);

const selectedRegionId = () => {
   if (form.region) {
      const region = regionsData.find((r) => r.name === form.region);
      if (region.id) {
         filterDistrictsByRegionId(region.id);
      }
   }
};

const schoolById = async () => {
   try {
      const schoolId = await getSchoolById(props.schoolId);
      if (schoolId.status === 'success') {
         form.region = schoolId.data.region;
         form.number = schoolId.data.number;
         form.type = schoolId.data.type;
      } else {
      }
   } catch (error) {
      console.log(error);
   }
};

const handleSubmitForm = async () => {
   try {
      const response = await updateSchoolById(props.schoolId, form);
      if (response.status === 'success') {
         emit('school-added');
         form.region = '';
         form.district = '';
         form.number = 1;
         form.type = '';
         isOpen.value = false;
         showToast('Maktab muvaffaqiyatli yangilandi!', 'success');
      } else {
         showToast("Noma'lum muammo yuz berdi. Iltimos, qayta urinib ko'ring.", 'error');
      }
   } catch (error) {
      console.log(error);
   }
};

watch(() => form.region, selectedRegionId);
</script>

<template>
   <div>
      <Dialog v-model:open="isOpen">
         <DialogTrigger as-child>
            <Button @click="schoolById" variant="ghost" size="icon" class="rounded-full hover:bg-primary/10">
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
               <DialogTitle> Maktabni tahrirlash</DialogTitle>
            </DialogHeader>

            <VForm @submit="handleSubmitForm" v-slot="{ errors }">
               <div class="grid gap-4 mt-4">
                  <div class="grid gap-2">
                     <VField name="region" rules="required" v-model="form.region">
                        <Label>Viloyatni tanlang</Label>
                        <Select v-model="form.region">
                           <SelectTrigger class="w-full">
                              <SelectValue placeholder="Viloyatni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectItem v-for="region in regionsData" :key="region.id" :value="region.name">
                                    {{ region.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                        <span class="text-sm text-destructive font-medium">{{ errors.region }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="district" rules="required" v-model="form.district">
                        <Label>Tumanni tanlang</Label>
                        <Select v-model="form.district">
                           <SelectTrigger class="w-full">
                              <SelectValue placeholder="Tumanni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectItem v-for="district in districts" :key="district.id" :value="district.name">
                                    {{ district.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                        <span class="text-sm text-destructive font-medium">{{ errors.district }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="number" rules="required|integer" v-model="form.number">
                        <Label for="number">Maktab raqami</Label>
                        <NumberField v-model="form.number" :min="1" id="number">
                           <NumberFieldContent>
                              <NumberFieldDecrement />
                              <NumberFieldInput />
                              <NumberFieldIncrement />
                           </NumberFieldContent>
                        </NumberField>
                        <span class="text-sm text-destructive font-medium">{{ errors.number }}</span>
                     </VField>
                  </div>
                  <div class="grid gap-2">
                     <VField name="type" rules="required" v-model="form.type">
                        <Label for="schooltype">Maktab nomi</Label>
                        <Input v-model="form.type" id="schooltype" type="text" placeholder="Maktab nomi" />
                        <span class="text-sm text-destructive font-medium">{{ errors.type }}</span>
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
