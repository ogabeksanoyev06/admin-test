<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Test natijalari</h1>
         <p>Umumiy soni <span class="text-semibold">1387</span> ta</p>
      </div>
      <div class="rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg overflow-hidden border">
            <Table class="w-full overflow-hidden">
               <TableHeader>
                  <TableRow class="text-xs">
                     <TableHead class="text-center font-semibold"> # </TableHead>
                     <TableHead class="text-center font-semibold">FIO</TableHead>
                     <TableHead class="text-center font-semibold">Telefon</TableHead>
                     <TableHead class="text-center font-semibold"> Test maks. bali </TableHead>
                     <TableHead class="text-center font-semibold"> Test savollari soni </TableHead>
                     <TableHead class="text-center font-semibold"> Foydalanuvchi javoblari soni </TableHead>
                     <TableHead class="text-center font-semibold"> Foydalanuvchi bali </TableHead>
                     <TableHead class="text-center font-semibold"> Test turi </TableHead>
                     <TableHead class="text-center font-semibold"> Test boshlangan vaqti </TableHead>
                     <TableHead class="text-center font-semibold"> Test tugagan vaqti </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody class="text-xs text-center">
                  <TableRow class="cursor-pointer !bg-primary text-white">
                     <TableCell class="font-medium">0 </TableCell>
                     <TableCell>Sanoyev O'gabek</TableCell>
                     <TableCell>{{ formatPhone('998930819140') }}</TableCell>
                     <TableCell>30</TableCell>
                     <TableCell>30 </TableCell>
                     <TableCell>20</TableCell>
                     <TableCell>40 </TableCell>
                     <TableCell>Blokli testlar </TableCell>
                     <TableCell>2023-02-11 11:49</TableCell>
                     <TableCell>2023-02-11 11:49 </TableCell>
                  </TableRow>
                  <TableRow v-for="(invoice, i) in 30" :key="i" class="cursor-pointer">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell>Sanoyev O'gabek</TableCell>
                     <TableCell>{{ formatPhone('998930819140') }}</TableCell>
                     <TableCell>30</TableCell>
                     <TableCell>30 </TableCell>
                     <TableCell>20</TableCell>
                     <TableCell>40 </TableCell>
                     <TableCell>Blokli testlar </TableCell>
                     <TableCell>2023-02-11 11:49</TableCell>
                     <TableCell>2023-02-11 11:49 </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Test topshirilgan fanlar</h1>
      </div>
      <div class="rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg overflow-hidden border">
            <Table class="w-full overflow-hidden">
               <TableHeader>
                  <TableRow class="text-xs">
                     <TableHead class="text-center font-semibold"> # </TableHead>
                     <TableHead class="text-center font-semibold">Fan</TableHead>
                     <TableHead class="text-center font-semibold">Maksimum ball</TableHead>
                     <TableHead class="text-center font-semibold"> Savollar soni </TableHead>
                     <TableHead class="text-center font-semibold">Foydalanuvchi javoblari soni</TableHead>
                     <TableHead class="text-center font-semibold"> Foydalanuvchi to'plagan ball </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody class="text-xs text-center">
                  <TableRow>
                     <TableCell class="font-medium">1 </TableCell>
                     <TableCell>Kimyo</TableCell>
                     <TableCell>30</TableCell>
                     <TableCell>30</TableCell>
                     <TableCell>20</TableCell>
                     <TableCell>40 </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>
