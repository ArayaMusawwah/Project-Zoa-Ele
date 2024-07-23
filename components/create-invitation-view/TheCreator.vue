<script setup lang="ts">
import CreateForm from '~/components/create-invitation-view/CreateForm.vue'
import TableGuests from './TableGuests.vue'
import type { Guest } from '~/types'
const guests = ref<Guest[]>([])
console.log('guests=>', guests.value)

const fetchGuests = async (): Promise<void> => {
  const res = await useFetch<{ datum: Guest[] }>(`/api/guests`, {
    pick: ['datum']
  })
  guests.value = res.data.value?.datum ?? []
}
const justUpdate = (newGuest: Guest[]) => {
  guests.value = newGuest
}
fetchGuests()
</script>

<template>
  <main
    class="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-4xl"
  >
    <CreateForm :fetchGuests="fetchGuests" />

    <TableGuests :guests="guests" @update-guests="justUpdate" />
  </main>
</template>
