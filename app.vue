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

useHead({
  title: "vasconevesxd",
  meta: [
    {
      name: "description",
      content:
        "Hi my name is Vasco Neves a Software Developer who loves turning ideas into interactive web experiences!",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
