<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center">
         <h1 class="text-lg font-semibold md:text-2xl">Balans To'lovlari</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> ID</TableHead>
                     <TableHead>To'lov miqdori</TableHead>
                     <TableHead>Foydalanuvchi</TableHead>
                     <TableHead>Batafsil</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> {{ formatCurrency(200000) }} </TableCell>
                     <TableCell> Sanoyev Og'abek </TableCell>
                     <TableCell>
                        <ModalUsersBalanceCharge>
                           <Button variant="ghost" size="icon" class="rounded-full h-10 w-10">
                              <img src="/assets/svg/eye.svg" alt="" class="w-5 h-5" />
                           </Button>
                        </ModalUsersBalanceCharge>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
