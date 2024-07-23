<template>
   <div>
      <Dialog>
         <DialogTrigger as-child>
            <slot></slot>
         </DialogTrigger>
         <DialogContent class="p-4">
            <DialogHeader>
               <DialogTitle>To'lov haqida ma'lumot</DialogTitle>
            </DialogHeader>
            <div class="flex flex-col gap-2">
               <div class="grid grid-cols-2 items-center justify-between gap-2 bg-muted py-3 px-2">
                  <span class="font-medium">Foydalanuvchi</span>
                  <span class="text-end">Sanoyev Og'abek</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Miqdori</span>
                  <span class="text-end">{{ formatCurrency(10000000) }}</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Turi</span>
                  <span class="text-end">Kiritish</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Bajarilgan</span>
                  <span class="text-end">To'lanmagan</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">To'lov Tizimi</span>
                  <span class="text-end">Payme</span>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   </div>
</template>

<script setup></script>
