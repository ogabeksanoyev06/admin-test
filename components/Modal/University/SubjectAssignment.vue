<script setup>
import { reactive, ref, watch } from 'vue';
import { useUniversitiesStore } from '@/stores/universities';
import { useCustomToast } from '@/composables/useCustomToast.js';

const props = defineProps({
   dirid: String,
   sciences: Array
});

const { showToast } = useCustomToast();

const universityStore = useUniversitiesStore();
const { updateSubjectForFaculties } = universityStore;

const loading = ref(false);

const form = reactive({
   subject_1: null,
   subject_2: null
});

const isOpen = ref(false);

const filteredSciences = computed(() => {
   return props.sciences.filter((science) => science._id !== form.subject_1);
});

const getScienceNameById = (id) => {
   const science = props.sciences.find((science) => science._id === id);
   return science ? science.name_uz : 'Tanlang';
};

watch(
   () => form.subject_1,
   () => {
      form.subject_2 = null;
   }
);

const handleSubmitForm = async () => {
   try {
      loading.value = true;
      const response = await updateSubjectForFaculties({
         dirid: props.dirid,
         subject_1: form.subject_1,
         subject_2: form.subject_2
      });
      if (response?.status === 'success') {
         isOpen.value = false;
         showToast('Fan muvaffaqiyatli biriktirildi', 'success');
         emit('university-updated');
      }
   } catch (error) {
      showToast(error.response?.data?.message || 'Fan biriktirishda xatolik yuz berdi', 'error');
   } finally {
      loading.value = false;
   }
};

watch(isOpen, (newVal) => {
   if (newVal) {
      // fetchUniversityById(); // Funksiya mavjud bo'lsa, ishlating
   }
});
</script>

<template>
   <div>
      <Dialog v-model:open="isOpen">
         <DialogTrigger class="cursor-pointer">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="lucide lucide-ellipsis w-4 h-4"
            >
               <circle cx="12" cy="12" r="1" />
               <circle cx="19" cy="12" r="1" />
               <circle cx="5" cy="12" r="1" />
            </svg>
         </DialogTrigger>
         <DialogContent class="p-6">
            <DialogHeader>
               <DialogTitle> Yo'nalishga fanni biriktirish </DialogTitle>
            </DialogHeader>
            <Transition name="fade" mode="out-in">
               <template v-if="loading">
                  <div class="grid gap-2">
                     <Skeleton class="h-10 w-full"></Skeleton>
                     <Skeleton class="h-10 w-full"></Skeleton>
                     <Skeleton class="h-10 w-full"></Skeleton>
                  </div>
               </template>
               <template v-else>
                  <VForm @submit="handleSubmitForm" v-slot="{ errors }">
                     <div class="grid gap-4">
                        <div class="grid gap-2">
                           <VField name="subject_1" rules="required" v-model="form.subject_1">
                              <Label for="subject_1">Birinchi fan</Label>
                              <Select v-model="form.subject_1" id="subject_1" placeholder="Fan tanlang">
                                 <SelectTrigger>
                                    <SelectValue>{{ getScienceNameById(form.subject_1) }}</SelectValue>
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem v-for="science in props.sciences" :key="science._id" :value="science._id">
                                       {{ science.name_uz }}
                                    </SelectItem>
                                 </SelectContent>
                              </Select>
                              <span class="text-sm text-destructive font-medium">{{ errors.subject_1 }}</span>
                           </VField>
                        </div>
                        <div class="grid gap-2">
                           <VField name="subject_2" rules="required" v-model="form.subject_2">
                              <Label for="subject_2">Ikkinchi fan</Label>
                              <Select v-model="form.subject_2" id="subject_2" placeholder="Fan tanlang">
                                 <SelectTrigger>
                                    <SelectValue>{{ getScienceNameById(form.subject_2) }}</SelectValue>
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem v-for="science in filteredSciences" :key="science._id" :value="science._id">
                                       {{ science.name_uz }}
                                    </SelectItem>
                                 </SelectContent>
                              </Select>
                              <span class="text-sm text-destructive font-medium">{{ errors.subject_2 }}</span>
                           </VField>
                        </div>
                     </div>
                     <div class="flex gap-4 mt-4">
                        <Button class="w-full" type="submit" :disabled="loading">Saqlash</Button>
                     </div>
                  </VForm>
               </template>
            </Transition>
         </DialogContent>
      </Dialog>
   </div>
</template>
