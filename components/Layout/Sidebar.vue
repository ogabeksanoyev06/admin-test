<template>
   <div class="fixed border-r top-0 z-30 hidden h-screen w-full shrink-0 md:sticky md:block">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
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
         <nav class="h-full flex flex-col gap-1 text-sm font-medium overflow-y-auto">
            <Accordion type="single" class="w-full" collapsible v-model="activeItem">
               <AccordionItem value="users">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent ': activeItem === 'users' }">Foydalanuvchilar </AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/users/balancecharge" class="flex p-3 hover:text-foreground hover:bg-muted"> Balans To'lovlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/users" class="flex p-3 hover:text-foreground hover:bg-muted">Foydalanuvchilar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/users/usertariffs" class="flex p-3 hover:text-foreground hover:bg-muted"> Foydalanuvchi Tariflari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/users/tariffs" class="flex p-3 hover:text-foreground hover:bg-muted"> Tariflar</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="tests">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'tests' }">Testlar</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/test-type" class="flex p-3 hover:text-foreground hover:bg-muted"> Test turlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/user-purchased-tests" class="flex p-3 hover:text-foreground hover:bg-muted"> Foydalanuvchi Sotib olgan Testlar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/test-monitoring" class="flex p-3 hover:text-foreground hover:bg-muted">Monitoring</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="blog-tests">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'blog-tests' }">Blog testlar</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/blog-test/science" class="flex p-3 hover:text-foreground hover:bg-muted"> Fanlar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/blog-test/subject" class="flex p-3 hover:text-foreground hover:bg-muted"> Mavzular</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/blog-test/totalresult" class="flex p-3 hover:text-foreground hover:bg-muted"> Natijalar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/tests/blog-test" class="flex p-3 hover:text-foreground hover:bg-muted"> Testlar</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="dtm-tests">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'dtm-tests' }">DTM testlari</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">DTM test fanlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">DTM test bloglari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> DTM test variantlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> DTM testlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> DTM test natijalari</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="school-tests">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'school-tests' }">Maktab testlari</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Fanlar ro'yxati</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Sinflar r'yxati</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Maktab testlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> Maktab test natijalari</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="common">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'common' }">Umumiy</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Maktablar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Tumanlar</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted">Viloyatlar</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="universities">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'universities' }">Universitetlar</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> Ta'lim yo'nalishlari</NuxtLink>
                  </AccordionContent>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> Universitetlar</NuxtLink>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="references">
                  <AccordionTrigger class="p-3 hover:bg-muted" :class="{ '!bg-primary !text-accent': activeItem === 'references' }">Ma'lumotnomalar</AccordionTrigger>
                  <AccordionContent class="pb-0">
                     <NuxtLink to="/" class="flex p-3 hover:text-foreground hover:bg-muted"> Chegirmalar </NuxtLink>
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
.router-link-active {
   @apply bg-secondary border-primary  border-l-4 border-r-4 rounded-tr-sm rounded-br-sm rounded-tl-sm rounded-bl-sm;
}
</style>
