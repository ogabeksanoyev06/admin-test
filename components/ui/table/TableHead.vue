<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
   class?: HTMLAttributes['class'];
}>();
</script>

<template>
   <th :class="cn('h-12 px-4 text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5', props.class)">
      <slot />
   </th>
</template>
