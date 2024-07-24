<script setup lang="ts">
import CreateForm from '~/components/create-invitation-view/CreateForm.vue'
import TableGuests from './TableGuests.vue'
import type { Guest } from '~/types'
import { createUrlQuery } from '~/lib/utils'
import { pageStore } from '~/stores/activator'

const page = pageStore()

const guests = ref<Guest[]>([])

const fetchGuests = async (): Promise<void> => {
  const params = useRoute()

  const route = createUrlQuery({
    params: params.query,
    key: 'page',
    value: String(params.query.page),
    url: '/api/guests'
  })

  const res = await useFetch<{ datum: Guest[]; totalPage: number }>(`${route}`, {
    pick: ['datum', 'totalPage']
  })

  page.setTotalPages(res.data.value?.totalPage ?? 1)
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
    <CreateForm :fetchGuests />

    <TableGuests :guests @update-guests="justUpdate" :fetchGuests />
  </main>
</template>
