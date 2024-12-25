<template>
   <div class="grid gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Universitet va yo'nalishlar</h1>
         <div class="flex justify-end gap-4">
            <ModalUniversityCreate @university-added="handleAddUniversity" />
         </div>
      </div>
      <div class="flex flex-col gap-2">
         <Label for="login" class="flex items-center gap-0.5"> Faylni yuklash </Label>
         <BaseFileInput v-model="file" @update:modelValue="handleUpload" />
      </div>
   </div>
   <div class="flex justify-end">
      <Button :disabled="loading" @click="updateDirections" variant="outline">
         Yo'nalishlarni yangilash
         <UpdateIcon class="w-4 h-4 ml-2" />
      </Button>
   </div>
   <section class="rounded-lg border overflow-x-auto">
      <Table class="text-xs">
         <TableHeader>
            <TableRow>
               <TableHead>#</TableHead>
               <TableHead>OTM</TableHead>
               <TableHead>Yo'nalish ID</TableHead>
               <TableHead>Yo'nalish nomi</TableHead>
               <TableHead>Fanlar</TableHead>
               <TableHead>Ta'lim shakli</TableHead>
               <TableHead>Til</TableHead>
               <TableHead>Grant o'rinlar</TableHead>
               <TableHead>Kontrakt o'rinlar</TableHead>
               <TableHead>Grant ball</TableHead>
               <TableHead>Kontrakt ball</TableHead>
               <TableHead>Yaratilgan</TableHead>
               <TableHead>Amaliyotlar</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            <TableRow v-for="(item, i) in universities.data" :key="i" class="odd:bg-muted/50">
               <TableCell class="font-medium">{{ (currentPage - 1) * itemsPerPage + i + 1 }}</TableCell>
               <TableCell>{{ item.OTM }}</TableCell>
               <TableCell>{{ item.dirid }}</TableCell>
               <TableCell>{{ item.dirnm }}</TableCell>
               <TableCell>{{ item.subject_1 +" "+ item.subject_2 }}</TableCell>
               <TableCell>{{ item.emnm }}</TableCell>
               <TableCell>{{ item.langnm }}</TableCell>
               <TableCell>{{ item.grantnm }}</TableCell>
               <TableCell>{{ item.contractnm }}</TableCell>
               <TableCell>{{ item.ballgr }}</TableCell>
               <TableCell>{{ item.ballk }}</TableCell>
               <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }}</TableCell>
               <TableCell class="flex items-center gap-2">
                  <ModalUniversityEdit :university-id="item._id" @university-updated="handleEdit" />
                  <ModalUniversityDelete :university-id="item._id" @university-deleted="handleDelete" />
                  <ModalUniversitySubjectAssignment :dirid="item.dirid" :sciences="sciences.data" />
               </TableCell>
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
</template>

<script setup>
import { ref, watch } from 'vue';
import { useUniversitiesStore } from '@/stores/universities';
import { useSciencesStore } from '@/stores/sciences.js';
import { UpdateIcon } from '@radix-icons/vue';

const universitiesStore = useUniversitiesStore();
const scienceStore = useSciencesStore();

const { getScienceTestTypesById } = scienceStore;
const { getAllUniversities, uploadUniversitiesByFile, updateSubjectForFaculties } = universitiesStore;

const file = ref(null);
const loading = ref(false);

const handleUpload = async (file) => {
   try {
      loading.value = true;
      const formData = new FormData();
      formData.append('file', file);
      const response = await uploadUniversitiesByFile(formData);
      if (response.status === 'status') {
         await refresh();
      }
   } catch (error) {
      console.log(error);
   } finally {
      loading.value = false;
   }
};

const itemsPerPage = ref(100);
const currentPage = ref(1);
const totalItems = ref(0);
const totalPages = ref(0);

const handlePageChange = (page) => {
   currentPage.value = page;
};

const handleAddUniversity = async () => {
   await refresh();
};

const handleEdit = async () => {
   await refresh();
};

const handleDelete = async () => {
   await refresh();
};

const updateDirections = async () => {
   try {
      loading.value = true;
      for (const university of universities.value?.data || []) {
         for (const direction of directions || []) {
            if (direction.dirid === university.dirid && direction.name === university.dirnm) {
               const subject1 = sciences.value?.data.find((science) => science.name_uz === direction['subject-1'])?._id;
               const subject2 = sciences.value?.data.find((science) => science.name_uz === direction['subject-2'])?._id;
               if (subject1 && subject2) {
                  const response = await updateSubjectForFaculties({
                     dirid: university.dirid,
                     subject_1: subject1,
                     subject_2: subject2
                  });
                  console.log(`Yangilanish natijasi (dirid: ${university.dirid}):`, response);
               }
            }
         }
      }
      console.log('Barcha yangilanishlar bajarildi.');
   } catch (error) {
      console.error('Xatolik yuz berdi:', error);
   } finally {
      loading.value = false;
   }
};

const { data: universities, refresh } = await useAsyncData('universities', async () => {
   const response = await getAllUniversities({
      page: currentPage.value,
      limit: itemsPerPage.value
   });
   totalItems.value = response._meta?.totalItems;
   totalPages.value = response?._meta?.totalPages;
   return response;
});

const { data: sciences } = await useAsyncData('sciences', async () => {
   const response = await getScienceTestTypesById(18);
   return response;
});

watch([currentPage, itemsPerPage], async () => {
   await refresh();
});
</script>
