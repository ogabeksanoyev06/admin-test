<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center">
         <h1 class="text-lg font-semibold md:text-2xl">O'qituvchilar</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            {{ teachers }}
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> #</TableHead>
                     <TableHead> F.I.O</TableHead>

                     <TableHead>Viloyat</TableHead>
                     <TableHead>Tuman</TableHead>
                     <TableHead>Maktab</TableHead>
                     <TableHead>Yaratilgan</TableHead>
                     <TableHead>Tarif</TableHead>
                     <TableHead>Login</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in teachers" :key="i">
                  
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> {{ fullName(item) }} </TableCell>

                      <TableCell> {{ item.school?.region }} </TableCell>
                           <TableCell> {{ item.school?.district }} </TableCell>
                     <TableCell> {{ schoolName(item) }} </TableCell>
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
import { useTeachersStore } from '@/stores/teachers.js';

const teachersStore = useTeachersStore();

const { getTeachers } = teachersStore;

const fullName = (item) => {
   return `${item.name} ${item.surname} ${item.father_name}`;
};

const schoolName = (item) => {
   return `${item.school?.number} ${item.school.type}`;
};

const { data: teachers } = await useAsyncData('teachers', async () => {
   return await getTeachers();
});
</script>
