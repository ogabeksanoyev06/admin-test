<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter';

interface IProps {
   modelValue?: string;
   text?: string;
   height?: string;
   maxHeight?: string;
}
const props = withDefaults(defineProps<IProps>(), {
   modelValue: '',
   text: ''
});
const modules = {
   name: 'blotFormatter',
   module: BlotFormatter
};
</script>

<template>
   <div :class="`${props.text !== '' ? '' : ' bg-white '}`">
      <QuillEditor
         :content="props.text === '' ? props.modelValue : props.text"
         :modules="props.text === '' ? modules : ''"
         :toolbar="props.text !== '' ? '' : 'full'"
         :theme="props.text !== '' ? 'bubble' : 'snow'"
         :read-only="props.text !== '' ? true : false"
         :style="`overflow-y:auto; height:${height}; max-height:${maxHeight};`"
         class="dark:bg-gray-8"
         content-type="html"
         @update:content="(e) => $emit('update:modelValue', e)"
      />
   </div>
</template>
