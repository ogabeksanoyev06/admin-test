<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Blog test umumiy natijalari</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> ID</TableHead>
                     <TableHead>Foydalanuvchi</TableHead>
                     <TableHead>Fan</TableHead>
                     <TableHead>To'g'ri javoblar</TableHead>
                     <TableHead>Umumiy ball</TableHead>
                     <TableHead>Test boshlangan vaqt</TableHead>
                     <TableHead>Test tugagan vaqt</TableHead>
                     <TableHead> Tugallangan</TableHead>
                     <TableHead> Amaliyot</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell>Sanoyev Og'abek</TableCell>
                     <TableCell> Ona tili </TableCell>
                     <TableCell> 10 </TableCell>
                     <TableCell> 10 </TableCell>
                     <TableCell> 2023-02-11 11:49 </TableCell>
                     <TableCell> 2023-02-11 11:49 </TableCell>
                     <TableCell> true</TableCell>
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
