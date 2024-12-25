<template>
   <div class="relative" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop" @dragenter.prevent="handleDragEnter" @dragleave.prevent="handleDragLeave">
      <div
         class="flex items-center cursor-pointer gap-2 border border-dashed border-yellow bg-white rounded-lg p-2.5 relative"
         :class="[
            {
               '!border-danger': error,
               '!border-dashed': dragging,
               '!border-dashed': dashed
            }
         ]"
         @click="getFile"
      >
         <Transition name="fade" mode="out-in">
            <span v-if="media.file" class="icon-file text-xl leading-6 text-yellow" />
            <span v-else class="icon-upload text-xl leading-6 text-yellow" />
         </Transition>
         <div class="flex-center-between flex-1 gap-2">
            <div v-if="media.file" class="flex-y-center">
               <p class="font-medium text-dark leading-130 text-sm transition-300">
                  {{ media.media }}
               </p>
            </div>
            <span
               v-else
               class="font-medium text-dark leading-130 text-sm transition-300"
               :class="{
                  '!text-red': dragging
               }"
            >
               {{ modelValue || dragging ? $t('drop_file_here') : 'Fayl biriktiring' }}
            </span>
            <!-- <button v-if="modelValue" type="button" class="duration-200 transition-all group w-5 h-5 bg-gray-2 flex items-center justify-center rounded cursor-pointer border border-transparent hover:scale-110 hover:bg-red-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="transition-300 text-base group-hover:text-red-500" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button> -->
         </div>
      </div>
      <input
         id="media"
         ref="mediaInput"
         :accept="accept"
         class="w-0 h-0 absolute opacity-0"
         :multiple="multiple"
         name="file"
         type="file"
         @change="handleFile"
         @click="$event.target.value = ''"
      />
   </div>
</template>

<script setup>
const props = defineProps({
   label: String,
   placeholder: String,
   modelValue: [Object, String, File],
   accept: {
      type: String,
      default: 'image/*,application/pdf,application/json'
   },

   error: Boolean,
   dashed: Boolean,
   multiple: Boolean,
   maxSize: {
      type: Number,
      default: 1024 * 1024 * 10
   }
});

const emit = defineEmits(['update:modelValue', 'error']);

const isMaxSize = ref(false);
const mediaInput = ref(null);
const btnClearer = ref(false);
const media = reactive({
   media: '',
   file: null
});
const currentTarget = ref(null);

const handleFile = (event) => {
   const target = event.target;
   if (target?.files) {
      handleUploader(target);
   }
};

const handleUploader = (target) => {
   const file = target.files?.[0];
   if (file?.size > props.maxSize) {
      isMaxSize.value = true;
      emit('error', true);
      return;
   }
   emit('error', false);

   const reader = new FileReader();
   reader.onload = () => {
      media.media = file?.name;
      media.file = file;
      emit('update:modelValue', file);
   };
   reader.readAsDataURL(file);
};

const getFile = () => {
   mediaInput.value?.click();
};

const clearForm = () => {
   media.file = null;
   media.media = '';
   emit('update:modelValue', '');
};

const btnHandler = () => {
   if (media.media && media.file) {
      clearForm();
   } else {
      getFile();
   }
};

watch(
   () => media.media,
   (val) => {
      if (!val) {
         clearForm();
      }
   }
);

const dragging = ref(false);

const handleDragOver = (event) => {
   event.preventDefault();
};

const handleDragEnter = (e) => {
   dragging.value = true;
   currentTarget.value = e.target;
};

const handleDragLeave = (e) => {
   if (e.target === currentTarget.value) {
      currentTarget.value = null;
      dragging.value = false;
   }
};

const handleDrop = (event) => {
   event.preventDefault();
   dragging.value = false;
   if (event.dataTransfer?.items) {
      handleUploader(event.dataTransfer);
   }
};

// onMounted(() => {
//    if (typeof props.modelValue === 'object') {
//       media.media = props.modelValue?.name;
//       media.file = props.modelValue;
//    } else {
//       media.media = props.modelValue;
//    }
// });
</script>
