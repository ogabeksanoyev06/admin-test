<script setup>
import { reactive, ref } from 'vue';
import { useUniversitiesStore } from '@/stores/universities';
import { useCustomToast } from '@/composables/useCustomToast.js';

const props = defineProps({
   universityId: String
});

const emit = defineEmits(['university-updated']);

const { showToast } = useCustomToast();

const universityStore = useUniversitiesStore();
const { updateUniversityById, getUniversityById } = universityStore;

const loading = ref(false);
const loadingUpdate = ref(false);

const form = reactive({
   OTM: '',
   dirid: '',
   dirnm: '',
   emnm: '',
   langnm: '',
   grantnm: null,
   contractnm: null,
   ballgr: null,
   ballk: null
});

const isOpen = ref(false);

const fetchUniversityById = async () => {
   try {
      loading.value = true;
      const response = await getUniversityById(props.universityId);
      if (response?.status === 'success') {
         form.OTM = response.data.OTM;
         form.dirid = response.data.dirid;
         form.dirnm = response.data.dirnm;
         form.emnm = response.data.emnm;
         form.langnm = response.data.langnm;
         form.grantnm = response.data.grantnm;
         form.contractnm = response.data.contractnm;
         form.ballgr = response.data.ballgr;
         form.ballk = response.data.ballk;
      } else {
         showToast("Universitet ma'lumotlari topilmadi", 'error');
      }
   } catch (error) {
      showToast(error.response?.data?.message || "Ma'lumotlarni olishda xatolik yuz berdi", 'error');
   } finally {
      loading.value = false;
   }
};

const handleSubmitForm = async () => {
   try {
      loadingUpdate.value = true;
      const response = await updateUniversityById(props.universityId, form);
      if (response?.status === 'success') {
         emit('university-updated');

         isOpen.value = false;
         showToast('Universitet muvaffaqiyatli yangilandi!', 'success');
      } else {
         showToast('Yangilashda xatolik yuz berdi', 'error');
      }
   } catch (error) {
      showToast(error.response?.data?.message || 'Yangilashda xatolik yuz berdi', 'error');
   } finally {
      loadingUpdate.value = false;
   }
};

watch(isOpen, (newVal) => {
   if (newVal) fetchUniversityById();
});
</script>

<template>
   <div>
      <Dialog v-model:open="isOpen">
         <DialogTrigger class="cursor-pointer">
            <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
         </DialogTrigger>
         <DialogContent class="p-6">
            <DialogHeader>
               <DialogTitle> Universitetni tahrirlash</DialogTitle>
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
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <!-- Universitet nomi -->
                        <div class="grid gap-2">
                           <VField name="OTM" rules="required" v-model="form.OTM">
                              <Label for="OTM">Universitet nomi</Label>
                              <Input v-model="form.OTM" id="OTM" type="text" placeholder="Universitet nomi" />
                              <span class="text-sm text-destructive font-medium">{{ errors.OTM }}</span>
                           </VField>
                        </div>
                        <!-- Yo'nalish nomi -->
                        <div class="grid gap-2">
                           <VField name="dirnm" rules="required" v-model="form.dirnm">
                              <Label for="dirnm">Yo'nalish nomi</Label>
                              <Input v-model="form.dirnm" id="dirnm" type="text" placeholder="Yo'nalish nomi" />
                              <span class="text-sm text-destructive font-medium">{{ errors.dirnm }}</span>
                           </VField>
                        </div>

                        <!-- Yonalish idsi -->
                        <div class="grid gap-2">
                           <VField name="dirid" rules="required" v-model="form.dirid">
                              <Label for="dirid">Yonalish idsi</Label>
                              <Input v-model="form.dirid" id="dirid" type="text" placeholder="Yonalish idsi" />
                              <span class="text-sm text-destructive font-medium">{{ errors.dirid }}</span>
                           </VField>
                        </div>
                        <!-- Ta'lim tili -->
                        <div class="grid gap-2">
                           <VField name="langnm" rules="required" v-model="form.langnm">
                              <Label for="langnm">Ta'lim tili</Label>
                              <Select v-model="form.langnm" id="langnm" placeholder="Ta'lim tili tanlang">
                                 <SelectTrigger>
                                    <SelectValue>{{ form.langnm || 'Tanlang' }}</SelectValue>
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="O'zbek">O'zbek</SelectItem>
                                    <SelectItem value="Rus">Rus</SelectItem>
                                    <SelectItem value="English">Ingliz</SelectItem>
                                 </SelectContent>
                              </Select>
                              <span class="text-sm text-destructive font-medium">{{ errors.langnm }}</span>
                           </VField>
                        </div>
                        <!-- Ta'lim shakli -->
                        <div class="grid gap-2">
                           <VField name="emnm" rules="required" v-model="form.emnm">
                              <Label for="emnm">Ta'lim shakli</Label>
                              <Select v-model="form.emnm" id="emnm" placeholder="Ta'lim shakli tanlang">
                                 <SelectTrigger>
                                    <SelectValue>{{ form.emnm || 'Tanlang' }}</SelectValue>
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="Kunduzgi">Kunduzgi</SelectItem>
                                    <SelectItem value="Sirtqi">Sirtqi</SelectItem>
                                    <SelectItem value="Kechki">Kechki</SelectItem>
                                 </SelectContent>
                              </Select>
                              <span class="text-sm text-destructive font-medium">{{ errors.emnm }}</span>
                           </VField>
                        </div>
                        <!-- Grant soni -->
                        <div class="grid gap-2">
                           <VField name="grantnm" rules="required" v-model="form.grantnm">
                              <Label for="grantnm">Grant soni</Label>
                              <Input v-model="form.grantnm" id="grantnm" type="number" placeholder="Grant soni" />
                              <span class="text-sm text-destructive font-medium">{{ errors.grantnm }}</span>
                           </VField>
                        </div>
                        <!-- Kontrakt soni -->
                        <div class="grid gap-2">
                           <VField name="contractnm" rules="required" v-model="form.contractnm">
                              <Label for="contractnm">Kontrakt soni</Label>
                              <Input v-model="form.contractnm" id="contractnm" type="number" placeholder="Kontrakt soni" />
                              <span class="text-sm text-destructive font-medium">{{ errors.contractnm }}</span>
                           </VField>
                        </div>
                        <!-- Grant ball -->
                        <div class="grid gap-2">
                           <VField name="ballgr" rules="required" v-model="form.ballgr">
                              <Label for="ballgr">Grant ball</Label>
                              <Input v-model="form.ballgr" id="ballgr" type="number" placeholder="Grant ball" />
                              <span class="text-sm text-destructive font-medium">{{ errors.ballgr }}</span>
                           </VField>
                        </div>
                        <!-- Kontrakt ball -->
                        <div class="grid gap-2">
                           <VField name="ballk" rules="required" v-model="form.ballk">
                              <Label for="ballk">Kontrakt ball</Label>
                              <Input v-model="form.ballk" id="ballk" type="number" placeholder="Kontrakt ball" />
                              <span class="text-sm text-destructive font-medium">{{ errors.ballk }}</span>
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
