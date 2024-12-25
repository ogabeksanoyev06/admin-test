<template>
   <div>
      <div class="grid gap-4 mb-6">
         <div class="flex items-center justify-between">
            <h1 class="text-lg font-medium md:text-2xl">Fanni biriktirish (asosiy fanlar)</h1>
         </div>
         <VForm @submit="handleSubmitForm" v-slot="{ errors }">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div class="grid gap-2">
                  <VField name="subject_1" rules="required" v-model="form.subject_1">
                     <Label for="subject_1">Birinchi fan</Label>
                     <Select v-model="form.subject_1" id="subject_1" placeholder="Fan tanlang">
                        <SelectTrigger>
                           <SelectValue>{{ getScienceNameById(form.subject_1) }}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem v-for="science in sciences.data" :key="science._id" :value="science._id">
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
            <div class="flex justify-end gap-4 mt-4">
               <Button type="submit" :disabled="loading" variant="outline">
                  Biriktirish
                  <UpdateIcon class="w-4 h-4 ml-2" />
               </Button>
            </div>
         </VForm>
      </div>

      <div class="grid gap-4 mb-6">
         <div class="flex items-center justify-between">
            <h1 class="text-lg font-medium md:text-2xl">Majburiy fanni biriktirish</h1>
         </div>
         <VForm @submit="handleSubmitFormDefault" v-slot="{ errors }">
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
               <div class="grid gap-2">
                  <VField name="subject_3" rules="required" v-model="form.subject_3">
                     <Label for="subject_3">Birinchi fan (majburiy)</Label>
                     <Select v-model="form.subject_3" id="subject_3" placeholder="Fan tanlang">
                        <SelectTrigger>
                           <SelectValue>{{ getScienceNameById(form.subject_3) }}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem v-for="science in sciences.data" :key="science._id" :value="science._id">
                              {{ science.name_uz }}
                           </SelectItem>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.subject_3 }}</span>
                  </VField>
               </div>
               <div class="grid gap-2">
                  <VField name="subject_4" rules="required" v-model="form.subject_4">
                     <Label for="subject_4">Ikkinchi fan (majburiy)</Label>
                     <Select v-model="form.subject_4" id="subject_4" placeholder="Fan tanlang">
                        <SelectTrigger>
                           <SelectValue>{{ getScienceNameById(form.subject_4) }}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem v-for="science in sciences.data" :key="science._id" :value="science._id">
                              {{ science.name_uz }}
                           </SelectItem>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.subject_4 }}</span>
                  </VField>
               </div>
               <div class="grid gap-2">
                  <VField name="subject_5" rules="required" v-model="form.subject_5">
                     <Label for="subject_5">Uchinchi fan (majburiy)</Label>
                     <Select v-model="form.subject_5" id="subject_5" placeholder="Fan tanlang">
                        <SelectTrigger>
                           <SelectValue>{{ getScienceNameById(form.subject_5) }}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem v-for="science in sciences.data" :key="science._id" :value="science._id">
                              {{ science.name_uz }}
                           </SelectItem>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.subject_5 }}</span>
                  </VField>
               </div>
            </div>
            <div class="flex justify-end gap-4 mt-4">
               <Button type="submit" :disabled="loading" variant="outline">
                  Biriktirish
                  <UpdateIcon class="w-4 h-4 ml-2" />
               </Button>
            </div>
         </VForm>
      </div>

      <section class="rounded-lg border overflow-x-auto">
         <Table>
            <TableHeader>
               <TableRow class="whitespace-nowrap">
                  <TableHead>#</TableHead>
                  <TableHead>Yo'nalish raqami</TableHead>
                  <TableHead>Yo'nalish nomi</TableHead>
                  <TableHead>Asosiy fanlar</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               <TableRow v-for="(item, i) in directions" :key="i" class="cursor-pointer" :class="{ '!bg-blue-100': isRowSelected(item) }" @click="handleRowToggle(item)">
                  <TableCell class="font-medium" :class="{ '!text-blue-800': selectedItems.includes(item.dirid) }">{{ item.id }}</TableCell>

                  <TableCell>{{ item.dirid }}</TableCell>
                  <TableCell>{{ item.name }}</TableCell>
                  <TableCell>{{ item.subject }}</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </section>
      <div class="flex justify-end">
         <Pagination v-slot="{ page }" :total="totalPages * 10" :page-size="limit" :sibling-count="1" show-edges :default-page="1" @update:page="handlePageChange">
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
               <template v-for="(item, index) in items">
                  <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                     <Button class="w-9 h-9 p-0" :variant="item.value === page ? 'default' : 'outline'">
                        {{ item.value }}
                     </Button>
                  </PaginationListItem>
                  <PaginationEllipsis v-else :key="item.type" :index="index" />
               </template>
            </PaginationList>
         </Pagination>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUniversitiesStore } from '@/stores/universities';
import { useSciencesStore } from '@/stores/sciences.js';
import { UpdateIcon } from '@radix-icons/vue';
import { useCustomToast } from '@/composables/useCustomToast.js';

const universitiesStore = useUniversitiesStore();
const scienceStore = useSciencesStore();

const { getScienceTestTypesById } = scienceStore;
const { updateSubjectForFaculties, setDefaultDtmSubject } = universitiesStore;

const { showToast } = useCustomToast();
const loading = ref(false);

const selectedItems = ref([]);

const itemsPerPage = ref(100);
const currentPage = ref(1);
const totalItems = ref(0);
const totalPages = ref(0);

const form = reactive({
   subject_1: null,
   subject_2: null,
   subject_3: null,
   subject_4: null,
   subject_5: null
});

const handleRowToggle = (item) => {
   const exists = selectedItems.value.find((selectedItem) => selectedItem.id === item.id && selectedItem.dirid === item.dirid);

   if (exists) {
      selectedItems.value = selectedItems.value.filter((selectedItem) => selectedItem.id !== item.id || selectedItem.dirid !== item.dirid);
   } else {
      selectedItems.value.push(item);
   }
};

const isRowSelected = (item) => {
   return selectedItems.value.some((selectedItem) => selectedItem.name === item.name && selectedItem.dirid === item.dirid);
};

const handlePageChange = (page) => {
   currentPage.value = page;
};

const filteredSciences = computed(() => {
   return sciences.value?.data.filter((science) => science._id !== form.subject_1);
});

const getScienceNameById = (id) => {
   const science = sciences.value?.data.find((science) => science._id === id);
   return science ? science.name_uz : 'Tanlang';
};

const handleSubmitForm = async () => {
   if (selectedItems.value.length === 0) {
      console.log('Hech qanday yo‘nalish tanlanmadi.');
      return;
   }

   loading.value = true;

   for (const item of selectedItems.value) {
      try {
         const response = await updateSubjectForFaculties({
            dirid: item.dirid,
            subject_1: form.subject_1,
            subject_2: form.subject_2
         });
         if (response.status === 'success') {
            showToast(`${item.name} (${item.dirid}) ga fanlar biriktirildi`, 'success');
         }
      } catch (error) {
         console.error(`Xatolik yuz berdi: ${item.dirid}`, error);
         showToast(`${item.name} (${item.dirid}) uchun xatolik yuz berdi`, 'error');
      }
   }

   loading.value = false;
};

const handleSubmitFormDefault = async () => {
   loading.value = true;
   try {
      const res = await setDefaultDtmSubject({
         subject_1: form.subject_3,
         subject_2: form.subject_4,
         subject_3: form.subject_5
      });
      if (response.status === 'success') {
         showToast(`majburiy fanlar biriktirildi`, 'success');
      }
   } catch (error) {
      showToast(error.response?.data?.message, 'success');
   } finally {
      loading.value = false;
   }
};

watch(
   () => form.subject_1,
   () => {
      form.subject_2 = null;
   }
);

const { data: sciences } = await useAsyncData('sciences', async () => {
   const response = await getScienceTestTypesById(18);
   return response;
});
</script>
