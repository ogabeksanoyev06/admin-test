<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center">
         <h1 class="text-lg font-semibold md:text-2xl">Foydalanuvchilar</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> # </TableHead>
                     <TableHead>Rasm</TableHead>
                     <TableHead>Login</TableHead>
                     <TableHead> FIO </TableHead>
                     <TableHead> Telefon </TableHead>
                     <TableHead> Abituriyent </TableHead>
                     <TableHead> Amaliyotlar </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                     <TableCell>
                        <img src="https://my.gov.uz/oz/user/get-image" class="h-10 w-10 rounded-full object-contain" />
                     </TableCell>
                     <TableCell>20010606</TableCell>
                     <TableCell>Sanoyev Og'abek Otabek o'g'li</TableCell>
                     <TableCell class="whitespace-nowrap">{{ formatPhone('998930819140') }}</TableCell>
                     <TableCell>
                        <Checkbox :checked="false" disabled />
                     </TableCell>
                     <TableCell class="flex items-center gap-1">
                        <ModalUsersView>
                           <Button variant="ghost" size="icon" class="rounded-full h-10 w-10">
                              <img src="/assets/svg/eye.svg" alt="" class="w-5 h-5" />
                           </Button>
                        </ModalUsersView>
                        <ModalUsersEdit>
                           <Button variant="ghost" size="icon" class="rounded-full h-10 w-10">
                              <img src="/assets/svg/edit.svg" alt="" class="w-5 h-5" />
                           </Button>
                        </ModalUsersEdit>
                        <ModalUsersDelete>
                           <Button variant="ghost" size="icon" class="rounded-full h-10 w-10">
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
