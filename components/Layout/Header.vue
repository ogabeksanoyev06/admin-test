<template>
   <header class="sticky top-0 bg-background/80 backdrop-blur-lg border-border z-30">
      <div class="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
         <Sheet>
            <SheetTrigger as-child>
               <Button variant="outline" size="icon" class="shrink-0 md:hidden">
                  <span class="sr-only">Toggle navigation menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left" class="flex flex-col">
               <nav class="grid gap-2 text-lg font-medium">
                  <a href="#" class="flex items-center gap-2 text-lg font-semibold">
                     <span class="sr-only">Acme Inc</span>
                  </a>
                  <a href="#" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"> Dashboard </a>
                  <a href="#" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"> Orders </a>
                  <a href="#" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"> Products </a>
                  <a href="#" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"> Customers </a>
                  <a href="#" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"> Analytics </a>
               </nav>
               <div class="mt-auto"></div>
            </SheetContent>
         </Sheet>
      </div>
   </header>
</template>

<script setup></script>
