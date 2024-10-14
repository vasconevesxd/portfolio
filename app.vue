<template>
  <SpeedInsights />
  <div id="app">
    <NuxtLayout>
      <div id="page--background"></div>
      <GeneralHeader />
      <NuxtPage />
      <GeneralFooter />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
