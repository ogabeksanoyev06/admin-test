<template>
   <div class="flex flex-1 flex-col gap-4 w-full">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Maktablar</h1>
         <ModalSchoolsCreate @school-added="handleAddSchool" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
         <Select v-model="region">
            <SelectTrigger class="w-full">
               <SelectValue placeholder="Viloyatni tanlang" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectItem v-for="region in regionsData" :key="region.id" :value="region.name">
                     {{ region.name }}
                  </SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4 w-full">
         <div class="rounded-lg border w-full">
            <Table>
               <TableHeader>
                  <TableRow>
                     <!-- <TableHead>
                         <Checkbox :checked="isAllSelected" @update:checked="handleSelectAll" />
                      </TableHead> -->
                     <TableHead> # </TableHead>
                     <TableHead>Viloyat</TableHead>
                     <TableHead>Tuman</TableHead>
                     <TableHead> Maktab </TableHead>
                     <TableHead> Login </TableHead>
                     <TableHead> Yaratilgan </TableHead>
                     <TableHead> Tarif muddati </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(item, i) in schools" :key="i" class="odd:bg-muted/50">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <!-- <TableCell>
                         <Checkbox :id="item._id" :checked="selectedSchools.includes(item._id)" @update:checked="handleSelectSchool(item._id)" />
                      </TableCell> -->
                     <TableCell> {{ item.region }} </TableCell>
                     <TableCell>{{ item.district }}</TableCell>
                     <TableCell>
                        {{ item.number + ' ' + item.type }}
                     </TableCell>
                     <TableCell>
                        <NuxtLink to="/" class="text-primary">{{ item.login }}</NuxtLink>
                     </TableCell>
                     <TableCell>{{ $dayjs(item.createdAt).format('DD.MM.YYYY HH:mm:ss') }} </TableCell>
                     <TableCell>{{ item.tarif ? $dayjs(item.tarif).format('DD.MM.YYYY HH:mm:ss') : 'biriktirilmagan' }} </TableCell>
                     <TableCell class="flex gap-2">
                        <ModalSchoolsEdit :schoolId="item._id" @school-added="handleUpdateSchool" />
                        <ModalSchoolsDelete :schoolId="item._id" @school-deleted="handleDeleteSchool" />
                        <ModalSchoolsTariff :schoolId="item._id" @tariff-created="handleTariffCreated" />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useSchoolsStore } from '@/stores/schools.js';

const schoolsStore = useSchoolsStore();

const { getSchools, filterByRegion } = schoolsStore;

const region = ref('');

// const selectedSchools = ref([]);
// const isAllSelected = computed(() => schools.value && schools.value.length && selectedSchools.value.length === schools.value.length);
// const selectSchoolId = (id) => {
//    schoolId.value = id;
// };
// const handleSelectSchool = (id) => {
//    const index = selectedSchools.value.indexOf(id);
//    if (index !== -1) {
//       selectedSchools.value.splice(index, 1);
//    } else {
//       selectedSchools.value.push(id);
//    }
// };
// const handleSelectAll = (checked) => {
//    if (checked) {
//       selectedSchools.value = schools.value.map((school) => school._id);
//    } else {
//       selectedSchools.value = [];
//    }
// };

const handleAddSchool = async () => {
   await refresh();
};

const handleDeleteSchool = async () => {
   await refresh();
};

const handleUpdateSchool = async () => {
   await refresh();
};

const handleTariffCreated = async () => {
   await refresh();
};

watch(region, async () => {
   const filteredSchools = await filterByRegion({
      region: region.value
   });
   schools.value = filteredSchools.data;
});

const { data: schools, refresh } = await useAsyncData('schools', async () => {
   return await getSchools();
});
</script>
