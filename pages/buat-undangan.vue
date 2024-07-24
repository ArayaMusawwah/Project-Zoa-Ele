<script setup lang="ts">
import TheCreator from '~/components/create-invitation-view/TheCreator.vue'
definePageMeta({
  middleware: 'buat-undangan'
})
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center bg-gray-700 px-2 py-8">
    <h1 class="mb-10 text-center text-3xl font-bold text-white">Buat & Sebarkan Undanganmu.</h1>
    <TheCreator />
  </div>
</template>
