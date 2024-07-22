<script setup lang="ts">
import type { Wish } from '~/types'
import WishCards from './WishCards.vue'
import WishForm from './WishForm.vue'

const fetchWishes = async (): Promise<void> => {
  const response = await useFetch<{ datum: Wish[] }>(`/api/get-wishes`, {
    pick: ['datum']
  })
  wishes.value = response.data.value?.datum ?? []
}
const wishes = ref<Wish[]>([])

fetchWishes()
</script>

<template>
  <section class="sub-container mx-auto max-w-xl py-10">
    <h1
      class="text-center font-trajan text-3xl font-bold uppercase italic tracking-wider text-main-text"
    >
      Your Wish
    </h1>

    <WishForm :fetchWishes="fetchWishes" />

    <WishCards :wishes="wishes" />
  </section>
</template>
