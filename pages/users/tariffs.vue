<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Tariflar</h1>
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
            Yangi tarif qo'shish
         </Button>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> ID</TableHead>
                     <TableHead>Nomlanishi</TableHead>
                     <TableHead>Maktablar soni</TableHead>
                     <TableHead>Foydalanuvchilar soni</TableHead>
                     <TableHead>Narxi</TableHead>
                     <TableHead>Amallar</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> Bir oylik abonent to`lovi </TableCell>
                     <TableCell> 150</TableCell>
                     <TableCell> 1000</TableCell>
                     <TableCell> {{ formatCurrency(1000000) }} </TableCell>
                     <TableCell class="flex items-center">
                        <ModalUsersTariffsEdit>
                           <Button variant="ghost" size="icon" class="rounded-full">
                              <img src="/assets/svg/eye.svg" alt="" />
                           </Button>
                        </ModalUsersTariffsEdit>
                        <ModalUsersTariffsDelete>
                           <Button variant="ghost" size="icon" class="rounded-full">
                              <img src="/assets/svg/trash.svg" alt="" />
                           </Button>
                        </ModalUsersTariffsDelete>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>
