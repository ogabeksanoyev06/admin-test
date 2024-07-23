<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-semibold md:text-2xl">Foydalanuvchi sotib olgan testlar</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead> ID</TableHead>
                     <TableHead>Foydalanuvchi</TableHead>
                     <TableHead>Test turi</TableHead>
                     <TableHead>Tugallangan</TableHead>
                     <TableHead>Sotib olingan</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow v-for="(invoice, i) in 10" :key="i">
                     <TableCell class="font-semibold cursor-pointer inline-flex">{{ i + 1 }} </TableCell>
                     <TableCell>Sanoyev Og'abek </TableCell>
                     <TableCell>DTM test</TableCell>
                     <TableCell>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" class="w-5 h-5">
                           <path
                              fill="black"
                              d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z"
                              class="clr-i-solid clr-i-solid-path-1"
                           />
                           <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                     </TableCell>
                     <TableCell>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="w-5 h-5">
                           <path
                              fill="black"
                              fill-rule="evenodd"
                              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </div>
   </div>
</template>

<script setup></script>
