<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Bo'limlar ro'yxati</h1>
         <ModalTestUnitCreate :scienceId="scienceId" @section-added="handleAddSection" />
      </div>

      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> # </TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead>Bo'lim</TableHead>
                     <TableHead> O'zgartirilgan </TableHead>
                     <TableHead> Yaratilgan </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in sections" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell class="font-medium">
                        {{ item.subject?.name_uz }}
                     </TableCell>
                     <TableCell class="font-medium">
                        <NuxtLink :to="`/tests/sciences/${scienceId}/${item._id}`" class="text-primary">
                           {{ item.name_uz }}
                        </NuxtLink>
                     </TableCell>
                     <TableCell> {{ $dayjs(item.updatedAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell class="flex flex-wrap gap-2">
                        <ModalTestUnitUpdate :scienceId="scienceId" :sectionId="item._id" @section-updated="handleUpdateSection" />
                        <ModalTestUnitDelete :sectionId="item._id" @section-deleted="handleDeleteSection" />
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
import { useTestsStore } from '@/stores/test.js';

const route = useRoute();
const testStore = useTestsStore();

const scienceId = route.params.scienceId;

const { getSectionById } = testStore;

const handleAddSection = async () => {
   await refresh();
};

const handleDeleteSection = async () => {
   await refresh();
};

const handleUpdateSection = async () => {
   await refresh();
};

const { data: sections, refresh } = await useAsyncData('sections', async () => {
   return await getSectionById(scienceId);
});
</script>
