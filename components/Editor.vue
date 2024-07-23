<template>
   <div class="field">
      <CKEditor :editor="ClassicEditor" :config="editorConfig" v-model="editorHtml" />
   </div>
</template>

<script setup>
import { ref, watch, computed, defineProps, defineEmits, onMounted } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

const props = defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue']);

const editorConfig = {
   autoParagraph: false,
   fullHtml: true,
   htmlEncodeOutput: false,
   toolbar: {
      items: [
         'heading',
         '|',
         'bold',
         'italic',
         'underline',
         'strikethrough',
         'code',
         '|',
         'fontFamily',
         'fontSize',
         'textColor',
         'highlight',
         '|',
         'alignment',
         'indent',
         'outdent',
         'alignment',
         'blockQuote',
         'codeBlock',
         '|',
         'link',
         'imageUpload',
         'insertTable',
         'mediaEmbed',
         'horizontalLine',
         '|',
         'fullscreen',
         'print',
         'selectAll',
         'undo',
         'redo'
      ]
   },
   image: {
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side']
   },
   table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
   },
   link: {
      addTargetToExternalLinks: true
   },
   licenseKey: ''
};

const editorHtml = computed({
   get: () => props.modelValue,
   set: (value) => emit('update:modelValue', value)
});
</script>

<style scoped>
.field {
   margin-bottom: 1rem;
}
</style>
