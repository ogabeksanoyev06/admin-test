<template>
   <div>
      <Dialog>
         <DialogTrigger as-child>
            <slot></slot>
         </DialogTrigger>
         <DialogContent class="sm:max-w-[600px] p-4">
            <div class="pt-6 p-5 flex flex-col items-center">
               <h2 class="mt-4 mb-2 text-xl text-dark font-semibold leading-130">Malumotni o'chirmoqchimisz?</h2>
               <p class="leading-130 text-gray-700 text-sm">Akkauntdan chiqib ketmoqchimisiz?</p>
               <div class="flex gap-2 w-full mt-5">
                  <Button variant="destructive" size="lg" class="w-full"> O'chirish </Button>
                  <Button size="lg" class="w-full">Bekor qilish</Button>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   </div>
</template>

<script setup></script>
