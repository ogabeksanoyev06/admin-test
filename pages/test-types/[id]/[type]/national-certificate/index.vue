<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Fanlar ro'yxati</h1>
         <ModalTestScienceCreate :test_type="route.params.id" @science-added="handleAddScience" />
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <h3 class="text-lg font-medium mb-4">Umumiy fanlar soni: {{ sciences?.data?.length }}</h3>
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
                  <TableRow v-for="(item, i) in sciences?.data" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell>
                        <NuxtLink :to="`/test-types/${route.params.id}/${route.params.type}/national-certificate/${item._id}`" class="text-primary">
                           {{ item.name_uz }}
                        </NuxtLink>
                     </TableCell>
                     <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell class="flex flex-wrap gap-2">
                        <ModalTestScienceUpdate :scienceId="item.subject_id" @science-updated="handleUpdateScience" />
                        <ModalTestScienceDelete :scienceId="item._id" @science-deleted="handleDeleteScience" />
                        <DropdownMenu v-if="item.name_uz === 'Pedagogik mahorat'">
                           <DropdownMenuTrigger>
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                 <path
                                    fill="currentColor"
                                    d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                 />
                              </svg>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent>
                              <DropdownMenuItem class="cursor-pointer" @click="assignPedagogicSkill(item._id)"> Pedagogik mahorat testni biriktirish </DropdownMenuItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
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
import { useDefaultsStore } from '@/stores/defaults';
import { useCustomToast } from '@/composables/useCustomToast.js';

const route = useRoute();

const { showToast } = useCustomToast();

const scienceStore = useSciencesStore();
const defaultsStore = useDefaultsStore();

const { getScienceTestTypesById } = scienceStore;
const { setDefaults } = defaultsStore;

const handleAddScience = async () => {
   await refresh();
};

const handleDeleteScience = async () => {
   await refresh();
};

const handleUpdateScience = async () => {
   await refresh();
};

const assignPedagogicSkill = async (scienceId) => {
   try {
      await setDefaults({ teacher_test_id: scienceId });
      showToast('Pedagogik mahorat testi biriktirildi', { type: 'success' });
   } catch (error) {
      showToast('Xatolik yuz berdi', { type: 'error' });
   }
};

const { data: sciences, refresh } = await useAsyncData('sciences', async () => {
   return await getScienceTestTypesById(route.params.id);
});
</script>
