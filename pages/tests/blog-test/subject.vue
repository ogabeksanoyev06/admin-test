<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Blog test mavzulari</h1>
         <Button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
               <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path d="M8 12H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               <path d="M12 16V8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Mavzu qo'shish
         </Button>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> ID</TableHead>
                     <TableHead>Mavzu nomi</TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead>Tartib raqami</TableHead>
                     <TableHead>Amaliyot</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> Shavkat Rahmon,&nbsp;Shukur Xolmirzayev,&nbsp;Rauf Farfi,&nbsp;Omon Matjon,&nbsp;Umar Xayyom </TableCell>
                     <TableCell> Ona tili </TableCell>
                     <TableCell> 10 </TableCell>
                     <TableCell class="flex items-center gap-1">
                        <ModalUsersBalanceCharge>
                           <Button variant="ghost" size="icon" class="rounded-full">
                              <img src="/assets/svg/edit.svg" alt="" class="w-5 h-5" />
                           </Button>
                        </ModalUsersBalanceCharge>
                        <ModalUsersDelete>
                           <Button variant="ghost" size="icon" class="rounded-full">
                              <img src="/assets/svg/trash.svg" alt="" class="w-5 h-5" />
                           </Button>
                        </ModalUsersDelete>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>
