<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Mavzular ro'yxati</h1>
         <ModalTestSubjectCreate :partId="partId" @subject-added="handleAddSubject" />
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> # </TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead>Bo'lim</TableHead>
                     <TableHead>Mavzu</TableHead>
                     <TableHead> Yaratilgan </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in subjects?.data" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> {{ item.part?.subject?.name_uz }} </TableCell>
                     <TableCell> {{ item.part?.name_uz }} </TableCell>
                     <TableCell class="font-medium">
                        <NuxtLink :to="`/tests/type/${route.params.slug}/teacher-intern-test/${route.params.parts}/${route.params.subject}/${item._id}`" class="text-primary">
                           {{ item?.name_uz }}
                        </NuxtLink>
                     </TableCell>
                     <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell class="flex flex-wrap gap-2">
                        <ModalTestSubjectUpdate :subjectId="item._id" :partId="partId" @subject-updated="handleUpdateSubject" />
                        <ModalTestSubjectDelete :subjectId="item._id" @subject-deleted="handleDeleteSubject" />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useSciencesStore } from '@/stores/sciences.js';

const route = useRoute();
const scienceStore = useSciencesStore();

const partId = route.params.parts;

const { getSubjectSectionById } = scienceStore;

const handleAddSubject = async () => {
   await refresh();
};

const handleDeleteSubject = async () => {
   await refresh();
};

const handleUpdateSubject = async () => {
   await refresh();
};

const { data: subjects, refresh } = await useAsyncData('subjects', async () => {
   return await getSubjectSectionById(partId);
});
</script>
