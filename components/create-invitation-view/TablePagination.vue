<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const store = useGuests()

const handlePage = async (page: number) => {
  await navigateTo({ query: { ...route.query, page: String(page) } })
  store.fetchGuests()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="join mx-auto mt-5">
    <input
      v-for="i in store.totalPage"
      :key="i"
      class="join-item btn btn-square"
      type="radio"
      name="options"
      :aria-label="String(i)"
      :checked="i === store.currentPage"
      @change="() => handlePage(i)"
    />
  </div>
</template>
