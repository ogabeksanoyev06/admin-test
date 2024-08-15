<script setup>
import { useTestsStore } from '@/stores/test.js';
import { useCustomToast } from '@/composables/useCustomToast.js';

const emit = defineEmits(['science-deleted']);

const props = defineProps({
   scienceId: String
});

const { showToast } = useCustomToast();

const testStore = useTestsStore();

const { deleteScienceById } = testStore;
const { loading } = storeToRefs(testStore);

const isOpen = ref(false);

const confirmDelete = async () => {
   try {
      const response = await deleteScienceById(props.scienceId);
      if (response?.status === 'success') {
         showToast("Fan muvaffaqiyatli o'chirildi!", 'success');
         emit('science-deleted');
         isOpen.value = false;
      } else {
         showToast("Fan o'chirishda xatolik yuz berdi!", 'error');
      }
   } catch (error) {
      showToast("Fan o'chirishda xatolik yuz berdi!", 'error');
   }
};
</script>
<template>
   <div>
      <Dialog v-model:open="isOpen">
         <DialogTrigger as-child>
            <Button variant="ghost" size="icon" class="rounded-full hover:bg-destructive/10">
               <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                     stroke="hsl(var(--destructive))"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                     stroke="hsl(var(--destructive))"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                     stroke="hsl(var(--destructive))"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path d="M10.33 16.5H13.66" stroke="hsl(var(--destructive))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 12.5H14.5" stroke="hsl(var(--destructive))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </Button>
         </DialogTrigger>
         <DialogContent class="sm:max-w-[600px] p-4">
            <div class="pt-6 p-5 flex flex-col items-center">
               <h2 class="mt-4 mb-2 text-xl text-dark font-semibold leading-130">Malumotni o'chirmoqchimisz?</h2>
               <p class="leading-130 text-gray-700 text-sm">Siz Fanni o'chirmoqchimisiz?</p>
               <div class="flex gap-2 w-full mt-5">
                  <Button :disabled="loading" variant="destructive" size="lg" class="w-full" @click="confirmDelete">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        font-size="48"
                        class="animate-spin iconify iconify--ph w-5 h-5"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        v-if="loading"
                     >
                        <path
                           fill="#fff"
                           d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                        ></path>
                     </svg>
                     O'chirish
                  </Button>
                  <DialogClose asChild>
                     <Button size="lg" class="w-full"> Bekor qilish </Button>
                  </DialogClose>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   </div>
</template>
