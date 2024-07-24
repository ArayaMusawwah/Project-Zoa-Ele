<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const store = useGuests()

const handlePage = async (page: number) => {
  store.setCurrentPage(page)
  await navigateTo({ query: { ...route.query, page: String(page) } })
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="join mx-auto mt-5" v-if="store.totalPage > 1">
    <button
      class="join-item btn disabled:btn-disabled disabled:!text-gray-500"
      :disabled="store.currentPage === 1"
      @click="() => handlePage(store.currentPage - 1)"
    >
      «
    </button>

    <button
      v-for="page in store.totalPage"
      :class="`join-item btn btn-square ${store.currentPage === page ? '!border-none !bg-purple-600' : ''}`"
      @click="() => handlePage(page)"
    >
      {{ page }}
    </button>
    <button
      class="join-item btn disabled:btn-disabled disabled:!text-gray-800"
      :disabled="store.currentPage === store.totalPage"
      @click="() => handlePage(store.currentPage + 1)"
    >
      »
    </button>
  </div>
</template>
