<template>
   <div>
      <NuxtLoadingIndicator color="hsl(var(--primary))" />
      <NuxtRouteAnnouncer />
      <ConfigProvider :use-id="useIdFunction">
         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
      </ConfigProvider>
   </div>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';

const useIdFunction = () => useId();
</script>
