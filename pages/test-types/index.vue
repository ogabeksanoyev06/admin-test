<template>
   <div class="flex flex-1 flex-col gap-6 w-full">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Test turlari</h1>
         <ModalTestTypeCreate @testTypes-added="handleAddTestTypes" />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         <div v-for="(type, i) in testTypes?.data" :key="i">
            <div class="rounded-lg bg-card text-card-foreground min-h-[220px] h-full shadow-lg border-transparent border w-full relative hover:shadow-xl">
               <div class="flex flex-col gap-4 p-4 h-full">
                  <NuxtLink :to="`/test-types/${type._id}/${type.test_type}/${generateTestTypeLink(type.test_type)}`" class="font-semibold tracking-tight text-lg">
                     {{ type.title_uz }}
                  </NuxtLink>
                  <div class="flex items-center gap-2 flex-wrap">
                     <div class="flex items-center gap-1">
                        <p class="text-sm font-medium leading-none">Savollar soni:</p>
                        <p class="text-sm text-muted-foreground">{{ type.questions_count }} ta</p>
                     </div>
                     <div class="flex items-center gap-1">
                        <p class="text-sm font-medium leading-none">Umumiy vaqt:</p>
                        <p class="text-sm text-muted-foreground">{{ type.duration }} daqiqa</p>
                     </div>
                  </div>
                  <div class="flex gap-2 flex-wrap">
                     <Badge class="w-min rounded-full" v-for="item in type.user_types">
                        {{ formatUserType(item) }}
                     </Badge>
                  </div>
                  <div class="flex justify-end items-center mt-auto">
                     <ModalTestTypeUpdate :testTypeId="type._id" @testType-updated="handleUpdateTestType" />
                     <ModalTestTypeDelete :testTypeId="type._id" @testType-deleted="handleDeleteTestType" />
                  </div>
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

const generateTestTypeLink = (testType) => {
   switch (testType) {
      case 'dtm':
         return 'dtm-test';
      case 'attestation':
         return 'attestation-test';
      case 'teacher_intern':
         return 'teacher-intern-test';
      case 'school':
         return 'school-test';
      case 'national_certificate':
         return 'national-certificate';
      default:
         return 'unknown-test';
   }
};

const { data: testTypes, refresh } = await useAsyncData('testTypes', async () => {
   return await getTestTypes();
});
</script>
