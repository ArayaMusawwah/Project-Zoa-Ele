<script setup lang="ts">
import CreateForm from '~/components/create-invitation-view/CreateForm.vue'
import TableGuests from './TableGuests.vue'
</script>

<template>
  <main
    class="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-4xl"
  >
    <CreateForm />

    <TableGuests />
  </main>
</template>
