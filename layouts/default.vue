<template>
   <div>
      <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
         <LayoutSidebar />
         <div class="flex flex-col w-full">
            <LayoutHeader />
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full relative">
               <slot />
            </main>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTranslationsStore } from '@/stores/translations.js';

const translationsStore = useTranslationsStore();

const { getTranslations } = translationsStore;

// const { data } = await useAsyncData('layout', async () => {
//    const [translations] = await Promise.all([getTranslations()]);
//    return { translations };
// });
</script>
