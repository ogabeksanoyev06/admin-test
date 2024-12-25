<script setup>
import { ref, reactive } from 'vue';
import { useCustomToast } from '@/composables/useCustomToast.js';
import { useUniversitiesStore } from '@/stores/universities.js';

const emit = defineEmits(['university-added']);

const { showToast } = useCustomToast();

const universitiesStore = useUniversitiesStore();

const { loading } = storeToRefs(universitiesStore);

const { createUniversity } = universitiesStore;

const isOpen = ref(false);

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

const handleSubmitForm = async () => {
   try {
      const response = await createUniversity(form);
      if (response.status === 'success') {
         emit('university-added');
         form.OTM = '';
         form.dirid = '';
         form.dirnm = '';
         form.emnm = '';
         form.langnm = '';
         form.grantnm = null;
         form.contractnm = null;
         form.ballgr = null;
         form.ballk = null;
         isOpen.value = false;
         showToast("Universitet muvaffaqiyatli qo'shildi!", 'success');
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
               Universitet qo'shish
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
         <DialogScrollContent class="p-6 max-w-[900px]">
            <DialogHeader>
               <DialogTitle>Universitet yaratish </DialogTitle>
            </DialogHeader>
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
         </DialogScrollContent>
      </Dialog>
   </div>
</template>
