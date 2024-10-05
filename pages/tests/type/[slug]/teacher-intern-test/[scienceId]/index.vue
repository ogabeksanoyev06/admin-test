<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Bo'limlar ro'yxati</h1>
         <ModalTestUnitCreate :scienceId="route.params.parts" @section-added="handleAddSection" />
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> # </TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead>Bo'lim</TableHead>
                     <TableHead> Yaratilgan </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in parts?.data" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell class="font-medium">
                        {{ item.subject?.name_uz }}
                     </TableCell>
                     <TableCell class="font-medium">
                        <NuxtLink :to="`/tests/type/${route.params.slug}/teacher-intern-test/${route.params.scienceId}/${item._id}`" class="text-primary">
                           {{ item.name_uz }}
                        </NuxtLink>
                     </TableCell>
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
import { useSciencesStore } from '@/stores/sciences.js';

const route = useRoute();
const scienceStore = useSciencesStore();

const scienceId = route.params.scienceId;

const { getSectionByScienceId } = scienceStore;

const handleAddSection = async () => {
   await refresh();
};

const handleDeleteSection = async () => {
   await refresh();
};

const handleUpdateSection = async () => {
   await refresh();
};

const { data: parts, refresh } = await useAsyncData('parts', async () => {
   return await getSectionByScienceId(route.params.scienceId);
});
</script>
