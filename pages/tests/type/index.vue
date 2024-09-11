<template>
   <div class="flex flex-1 flex-col gap-6 w-full">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Test turlari</h1>
         <ModalTestTypeCreate @testTypes-added="handleAddTestTypes" />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         <div v-for="(type, i) in testTypes.data" :key="i">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full overflow-hidden relative">
               <img
                  :alt="type.title_uz"
                  width="400"
                  height="250"
                  class="aspect-auto h-full w-full brightness-50"
                  src="https://fozilov.academy/_next/image?url=https%3A%2F%2Fstorage.fozilov.academy%2Fimages%2Fvue-nuxt.jpg&w=640&q=75"
               />
               <div class="flex flex-col space-y-1.5 gap-y-2 p-4 min-h-32">
                  <h3 class="font-semibold tracking-tight text-xl">{{ type.title_uz }}</h3>
                  <div class="flex gap-2 flex-wrap">
                     <Badge class="w-min rounded-full" v-for="item in type.user_types"> {{ formatUserType(item) }} </Badge>
                  </div>
               </div>
               <div class="absolute top-0 right-0 bg-white p-0.5 flex items-center">
                  <ModalTestTypeUpdate :testTypeId="type._id" @testType-updated="handleUpdateTestType" />
                  <ModalTestTypeDelete :testTypeId="type._id" @testType-deleted="handleDeleteTestType" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTestsStore } from '@/stores/test.js';

const testStore = useTestsStore();

const { getTestTypes } = testStore;

const handleAddTestTypes = async () => {
   await refresh();
};

const handleDeleteTestType = async () => {
   await refresh();
};

const handleUpdateTestType = async () => {
   await refresh();
};

const formatUserType = (type) => {
   switch (type) {
      case 'user':
         return 'Foydalanuvchi';
      case 'pupils':
         return 'O‘quvchi';
      case 'teacher':
         return 'O‘qituvchi';
      default:
         return 'Nomaʼlum';
   }
};

const { data: testTypes, refresh } = await useAsyncData('testTypes', async () => {
   return await getTestTypes();
});
</script>
