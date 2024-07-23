<template>
   <div>
      <Dialog>
         <DialogTrigger as-child>
            <slot></slot>
         </DialogTrigger>
         <DialogContent class="sm:max-w-[768px] p-4">
            <DialogHeader>
               <DialogTitle>Test sinov turini qo'shing</DialogTitle>
            </DialogHeader>
            <div class="flex flex-col gap-6">
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="title">Sarlavha</Label>
                     <Input id="title" type="text" placeholder="Sarlavha" />
                  </div>
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="title">Test turi</Label>
                     <Select>
                        <SelectTrigger class="w-full">
                           <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectItem value="apple"> DTM </SelectItem>
                              <SelectItem value="banana"> School </SelectItem>
                              <SelectItem value="banana"> Blog </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  </div>
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="title">Kategoriya </Label>
                     <Select>
                        <SelectTrigger class="w-full">
                           <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectItem>Research</SelectItem>
                              <SelectItem> Test </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  </div>
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="price">Narxi</Label>
                     <Input id="price" type="number" placeholder="Sarlavha" />
                  </div>
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="message">Qisqacha ma'lumot</Label>
                     <Textarea id="message" placeholder="Qisqacha ma'lumot." />
                  </div>
                  <div class="grid w-full max-w-sm items-center gap-1.5">
                     <Label for="OrdinalNumber">Tartib Raqami</Label>
                     <Input id="OrdinalNumber" type="number" placeholder="Tartib Raqami" />
                  </div>
                  <div class="flex items-center space-x-2">
                     <Checkbox id="isfree" />
                     <label for="isfree" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Tekin </label>
                  </div>
               </div>
               <div class="flex justify-end">
                  <Button> Saqlash </Button>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
