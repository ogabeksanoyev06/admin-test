<template>
   <div>
      <Dialog>
         <DialogTrigger as-child>
            <slot></slot>
         </DialogTrigger>
         <DialogContent class="sm:max-w-[425px] p-4">
            <DialogHeader>
               <DialogTitle>Foydalanuvchi faol</DialogTitle>
            </DialogHeader>
            <div class="flex flex-col gap-2">
               <div class="grid grid-cols-2 items-center justify-between gap-2 bg-muted py-3 px-2">
                  <span class="font-medium">Login</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Ism</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Familiya</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Sharifi</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Elektron pochta</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Telefon</span>
                  <span class="text-end">20010606</span>
               </div>
               <div class="grid grid-cols-2 items-center justify-between gap-2 py-3 px-2">
                  <span class="font-medium">Foydalanuvchi rasmi</span>
                  <span class="text-end">20010606</span>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   </div>
</template>
