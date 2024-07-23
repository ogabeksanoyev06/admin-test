<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center">
         <h1 class="text-lg font-semibold md:text-2xl">Tariflar</h1>
      </div>
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div class="rounded-lg border">
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead> ID</TableHead>
                  <TableHead>Tariff</TableHead>
                  <TableHead>Boshlanish vaqti</TableHead>
                  <TableHead>Tugash vaqti</TableHead>
                  <TableHead>Tugallangan</TableHead>
                  <TableHead>Faol</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               <TableRow v-for="(invoice, i) in 10" :key="i">
                  <TableCell class="font-medium">{{ i + 1 }} </TableCell>
                  <TableCell> Bir oylik tarif </TableCell>
                  <TableCell> 30.02.24</TableCell>
                  <TableCell> 30.08.24</TableCell>
                  <TableCell>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                        <path
                           d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                           fill="hsl(var(--destructive))"
                        />
                     </svg>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                           fill="#292D32"
                        />
                     </svg>
                  </TableCell>
                  <TableCell> 150 </TableCell>
               </TableRow>
            </TableBody>
         </Table
      </div>
      </div>
      </div>
   </div>
</template>

<script setup></script>
