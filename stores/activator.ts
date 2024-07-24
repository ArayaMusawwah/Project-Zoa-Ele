import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivator = defineStore('activator', () => {
  const active = ref(false)
  const setActive = () => (active.value = !active.value)
  return { active, setActive }
})

export const pageStore = defineStore('page', () => {
  const totalPages = ref(0)
  const setTotalPages = (total: number) => (totalPages.value = total)

  return { totalPages, setTotalPages }
})
