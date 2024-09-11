<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center">
         <h1 class="text-lg font-semibold md:text-2xl">O'quvchilar</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> #</TableHead>
                     <TableHead> F.I.O</TableHead>
                     <TableHead> Sinf</TableHead>
                     <TableHead>Yaratilgan</TableHead>
                     <TableHead>O'zgartirilgan</TableHead>
                     <TableHead>Login</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in pupils" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> {{ fullName(item) }} </TableCell>
                     <TableCell> {{ fullNameClass(item.class) }} </TableCell>
                     <TableCell> {{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell> {{ $dayjs(item.updatedAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell>
                        <NuxtLink to="/" class="text-primary">
                           {{ item.login }}
                        </NuxtLink>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup>
import { usePupilsStore } from '@/stores/pupils.js';

const pupilsStore = usePupilsStore();

const { getPupils } = pupilsStore;

const fullName = (item) => {
   return `${item.name} ${item.surname} ${item.father_name}`;
};
const fullNameClass = (item) => {
   return `${item.number} ${item.letter}`;
};

const { data: pupils } = await useAsyncData('pupils', async () => {
   return await getPupils();
});
</script>
