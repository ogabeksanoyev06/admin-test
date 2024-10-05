<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Fanlar ro'yxati</h1>
         <ModalTestScienceCreate @science-added="handleAddScience" />
      </div>

      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <h3 class="text-lg font-medium mb-4">Umumiy fanlar soni: {{ sciences.length }}</h3>
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> # </TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead> Yaratilgan </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in sciences.data" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell>
                        <NuxtLink :to="`/tests/sciences/${item._id}`" class="text-primary">
                           {{ item.name_uz }}
                        </NuxtLink>
                     </TableCell>
                     <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell class="flex flex-wrap gap-2">
                        <ModalTestScienceUpdate :scienceId="item.subject_id" @science-updated="handleUpdateScience" />
                        <ModalTestScienceDelete :scienceId="item._id" @science-deleted="handleDeleteScience" />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useSciencesStore } from '@/stores/sciences.js';

const scienceStore = useSciencesStore();

const { getSciences } = scienceStore;

const handleAddScience = async () => {
   await refresh();
};

const handleDeleteScience = async () => {
   await refresh();
};

const handleUpdateScience = async () => {
   await refresh();
};

const { data: sciences, refresh } = await useAsyncData('sciences', async () => {
   return await getSciences();
});
</script>
