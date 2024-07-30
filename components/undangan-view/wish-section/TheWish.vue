<script setup lang="ts">
import type { Wish } from '~/types'
import WishCards from './WishCards.vue'
import WishForm from './WishForm.vue'
import WishFlower from './WishFlower.vue'
const wishes = ref<Wish[]>([])

const fetchWishes = async (): Promise<void> => {
  const response = await useFetch<{ datum: Wish[] }>(`/api/wishes`, {
    pick: ['datum']
  })
  wishes.value = response.data?.value?.datum ?? []
}

fetchWishes()
</script>

<template>
  <section class="sub-container mx-auto max-w-xl py-10 pb-20 max-md:px-4">
    <h1
      class="text-center font-trajan text-3xl font-bold uppercase italic tracking-wider text-main-text"
    >
      Your Wish
    </h1>
    <p class="mx-auto mt-2 max-w-xl text-pretty text-center text-black">
      Berikan Ucapan Selamat kepada kami.
    </p>

    <WishForm :fetchWishes="fetchWishes" />

    <WishCards :wishes="wishes" />

    <WishFlower />
  </section>
</template>
