<template>
   <div>
      <Dialog>
         <DialogTrigger as-child>
            <slot></slot>
         </DialogTrigger>
         <DialogContent class="p-4">
            <DialogHeader>
               <DialogTitle>Test kategoriya qo'shish</DialogTitle>
            </DialogHeader>
            <div class="flex flex-col gap-6">
               <div class="grid w-full items-center gap-1.5">
                  <Label for="title">Nomlanishi</Label>
                  <Input id="title" type="text" placeholder="Kategoriya nomi" />
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
