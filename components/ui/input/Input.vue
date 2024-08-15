<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';

const props = defineProps<{
   defaultValue?: string | number;
   modelValue?: string | number;
   class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
   (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
   passive: true,
   defaultValue: props.defaultValue
});
</script>

<template>
   <input
      v-model="modelValue"
      :class="
         cn(
            'flex h-10 w-full rounded border px-4 py-1 text-sm shadow-sm transition-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none focus-visible:outline-none focus:border-primary focus:pl-4  disabled:cursor-not-allowed disabled:bg-[#eee]',
            props.class
         )
      "
   />
</template>
