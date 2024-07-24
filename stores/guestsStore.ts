import { createUrlQuery } from '~/lib/utils'
import type { Guest } from '~/types'

export const useGuests = defineStore('guests', () => {
  const isLoading = ref(false)

  const guests = ref([] as Guest[])
  const setGuests = (data: Guest[]) => (guests.value = data)

  const currentPage = ref(1)
  const setCurrentPage = (page: number) => (currentPage.value = page)

  const pageSize = ref(20)

  const paginatedGuests = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value
    const endIndex = startIndex + pageSize.value
    return guests.value.slice(startIndex, endIndex)
  })

  const setPaginatedGuests = (data: Guest[]) => (guests.value = data)

  const totalPage = computed(() => Math.ceil(guests.value.length / pageSize.value))

  const fetchGuests = async (): Promise<void> => {
    const params = useRoute()

    const route = createUrlQuery({
      params: params.query,
      key: 'page',
      value: String(params.query.page),
      url: '/api/guests'
    })

    isLoading.value = true
    const res = await useFetch<{ datum: Guest[]; page: number }>(`${route}`, {
      pick: ['datum', 'page']
    }).finally(() => {
      isLoading.value = false
    })

    setCurrentPage(res.data.value?.page ?? 1)
    setGuests(res.data.value?.datum ?? [])
  }

  return {
    guests,
    isLoading,
    totalPage,
    currentPage,
    paginatedGuests,
    setPaginatedGuests,
    setCurrentPage,
    fetchGuests
  }
})
