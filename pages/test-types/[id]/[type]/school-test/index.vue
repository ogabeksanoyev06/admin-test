<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Sinflar ro'yxati</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <h3 class="text-lg font-medium mb-4">Umumiy sinflar soni: {{ classesData?.length }}</h3>
         <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <NuxtLink
               v-for="(item, key) in classesData"
               :key
               :to="`/test-types/${route.params.id}/${route.params.type}/school-test/${item.number}`"
               class="flex itcems-center justify-center gap-2 rounded-lg border border-dashed shadow-sm p-4 text-base font-medium"
            >
               {{ item.number }}
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
