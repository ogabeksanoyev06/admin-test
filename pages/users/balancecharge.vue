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
                     <TableHead> To'lov turi</TableHead>
                     <TableHead>To'lov miqdori</TableHead>
                     <TableHead>Foydalanuvchi</TableHead>
                     <TableHead>Sana</TableHead>
                     <TableHead>Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell> Payme </TableCell>
                     <TableCell> {{ formatCurrency(200000) }} </TableCell>
                     <TableCell> Sanoyev Og'abek </TableCell>
                     <TableCell> 26-04-2024 15:27:31 </TableCell>
                     <TableCell> To'lanmagan </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
