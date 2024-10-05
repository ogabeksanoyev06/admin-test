<template>
   <div class="fixed border-r top-0 z-30 hidden h-screen w-full shrink-0 md:sticky md:block">
      <div class="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
         <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="lucide lucide-package2-icon h-6 w-6"
            >
               <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
               <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
               <path d="M12 3v6"></path>
            </svg>
            <span class="text-xl">Ta'limPro</span>
         </NuxtLink>
      </div>
      <ScrollArea class="h-[calc(100vh-56px)] lg:h-[calc(100vh-60px)]">
         <nav class="h-full flex flex-col gap-1 text-sm px-1">
            <Accordion type="single" class="w-full" collapsible v-model="activeItem">
               <AccordionItem value="users" class="space-y-1 border-none">
                  <AccordionTrigger class="px-4 py-2">Foydalanuvchilar </AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex px-4 py-2 hover:bg-muted rounded"> Barcha foydalanuvchilar</NuxtLink>
                     <NuxtLink to="/users/teachers" class="flex px-4 py-2 hover:bg-muted rounded">O'qituvchilar</NuxtLink>
                     <NuxtLink to="/users/pupils" class="flex px-4 py-2 hover:bg-muted rounded"> O'quvchilar</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="common" class="space-y-1 border-none">
                  <AccordionTrigger class="px-4 py-2">Umumiy</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/sciences" class="flex px-4 py-2 hover:bg-muted rounded"> Fanlar </NuxtLink>
                     <NuxtLink to="/schools" class="flex px-4 py-2 hover:bg-muted rounded"> Maktablar</NuxtLink>
                     <NuxtLink to="/translations" class="flex px-4 py-2 hover:bg-muted rounded"> Tarjimalar </NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="tests" class="space-y-1 border-none">
                  <AccordionTrigger class="px-4 py-2">Testlar</AccordionTrigger>
                  <AccordionContent class="">
                     <NuxtLink to="/tests/type" class="flex px-4 py-2 hover:bg-muted rounded"> Test turlari </NuxtLink>
                     <NuxtLink to="/tests/attestation-test" class="flex px-4 py-2 hover:bg-muted rounded"> Attestatsiya testlari </NuxtLink>
                     <NuxtLink to="/schools" class="flex px-4 py-2 hover:bg-muted rounded"> Stajor o'qituvchi testlari</NuxtLink>
                     <NuxtLink to="/tests/school-test" class="flex px-4 py-2 hover:bg-muted rounded"> Maktab testlari </NuxtLink>
                     <NuxtLink to="/tests/blog-test" class="flex px-4 py-2 hover:bg-muted rounded"> Blog testlari </NuxtLink>
                     <NuxtLink to="/tests/dtm-test" class="flex px-4 py-2 hover:bg-muted rounded"> DTM testlari </NuxtLink>
                     <NuxtLink to="/schools" class="flex px-4 py-2 hover:bg-muted rounded"> Testlarni tahrirlash </NuxtLink>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </nav>
      </ScrollArea>
   </div>
</template>

<script setup>
const activeItem = ref(null);
</script>

<style scoped>
nav .router-link-active {
   @apply bg-secondary;
}
</style>
