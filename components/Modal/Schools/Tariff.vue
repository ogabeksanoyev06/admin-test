<script setup>
import { reactive } from 'vue';
import { useSchoolsStore } from '@/stores/schools.js';
import { useCustomToast } from '@/composables/useCustomToast.js';

const props = defineProps({
   schoolId: {
      type: String,
      required: true
   }
});

const emit = defineEmits(['school-added']);

const { showToast } = useCustomToast();

const schoolsStore = useSchoolsStore();

const { getSchoolById, addPermissionSchool } = schoolsStore;

const form = reactive({
   region: '',
   district: '',
   number: null,
   type: ''
});

const openModal = ref(false);

const tariffTime = ref(new Date());
const formattedTariffTime = ref('');

const handleSubmitForm = async () => {
   try {
      if (formattedTariffTime.value) {
         const data = await addPermissionSchool(props.schoolId, formattedTariffTime.value);
         if (data.status === 'success') {
            openModal.value = false;
            form.region = '';
            form.district = '';
            form.number = null;
            form.type = '';
            formattedTariffTime.value = '';
            tariffTime.value = null;
         }
         console.log(data)
      }
   } catch (error) {
      showToast(error.response, 'error');
      console.error('Error adding permission school:', error);
   }
};

const schoolById = async () => {
   try {
      const school = await getSchoolById(props.schoolId);
      console.log(school);
      if (school.status === 'success') {
         form.region = school.data?.region;
         form.district = school.data?.district;
         form.number = school.data?.number;
         form.type = school.data?.type;
      }
   } catch (error) {
      console.error('Error fetching school data:', error);
   }
};

watch(tariffTime, (newValue) => {
   formattedTariffTime.value = newValue ? newValue.valueOf() : '';
});
</script>

<template>
   <div>
      <Dialog v-model:open="openModal">
         <DialogTrigger as-child>
            <Button @click="schoolById" variant="ghost" size="icon" class="rounded-full hover:bg-green/10">
               <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="hsl(var(--green))" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 2V5" stroke="hsl(var(--green))" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.5 9.08984H20.5" stroke="hsl(var(--green))" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                     d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                     stroke="hsl(var(--green))"
                     stroke-width="1.5"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path d="M15.6947 13.7002H15.7037" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.6947 16.7002H15.7037" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9955 13.7002H12.0045" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9955 16.7002H12.0045" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29431 13.7002H8.30329" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29431 16.7002H8.30329" stroke="hsl(var(--green))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </Button>
         </DialogTrigger>
         <DialogContent class="p-6">
            <DialogHeader>
               <DialogTitle>Maktabni Tarifga biriktirish</DialogTitle>
            </DialogHeader>

            <VForm @submit="handleSubmitForm" v-slot="{ errors }">
               {{ formattedTariffTime }}
               <div class="flex flex-col gap-4 mt-4">
                  <div class="flex flex-col gap-2">
                     <VField name="type" rules="required" v-model="tariffTime">
                        <Label for="schooltype">Tarif muddatini tanlang</Label>
                        <VueDatePicker v-model="tariffTime" />
                        <span class="text-sm text-destructive font-medium">{{ errors.type }}</span>
                     </VField>
                  </div>
                  <Input disabled v-model="form.region" />
                  <Input disabled v-model="form.district" />
                  <Input disabled v-model="form.number" />
                  <Input disabled v-model="form.type" />
               </div>
               <div class="flex justify-end mt-4">
                  <Button type="submit">Saqlash</Button>
               </div>
            </VForm>
         </DialogContent>
      </Dialog>
   </div>
</template>
