<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = pageStore()

const page = computed(() => Number(route.query.page) || 1)

const props = defineProps<{
  fetchGuests: () => void
}>()

const handlePage = async (page: number) => {
  await navigateTo({ query: { ...route.query, page: String(page) } })
  props.fetchGuests()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="join mx-auto mt-5">
    <input
      v-for="i in store.totalPages + 1"
      :key="i"
      class="join-item btn btn-square"
      type="radio"
      name="options"
      :aria-label="String(i)"
      :checked="i === page"
      @change="() => handlePage(i)"
    />
  </div>
</template>
