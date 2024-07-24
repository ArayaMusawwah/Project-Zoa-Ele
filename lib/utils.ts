import queryString from 'query-string'
import Swal from 'sweetalert2'
import type { UrlQueryParams } from '~/types'

export const formatDate = (
  date: string
): { tanggalFormat: string; hari: string; tanggal: number; bulan: string; tahun: number } => {
  const tanggalTanpaTimezone = date.split(' ')[0]

  const tanggalObject = new Date(tanggalTanpaTimezone)
  const tanggalFormat = tanggalObject.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const hari = tanggalObject.toLocaleDateString('id-ID', { weekday: 'long' })
  const tanggal = tanggalObject.getDate()
  const bulan = tanggalObject.toLocaleDateString('id-ID', { month: 'long' })
  const tahun = tanggalObject.getFullYear()

  return { tanggalFormat, hari, tanggal, bulan, tahun }
}

export function handleError(error: Error): void {
  console.error('Error occurred:', error.message)
  throw new Error(error.message)
}

export const toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

export const queryParamsEncoder = (params: string) => {
  const currentUrl = useRuntimeConfig().public.currentUrl
  return `${currentUrl}/?to=${encodeURIComponent(params.trim().toLowerCase())}`
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = queryString.parse(params)
  currentUrl[key] = value

  return queryString.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}

export function createUrlQuery({
  params,
  key,
  value,
  url
}: {
  params: any
  key: string
  value: string
  url?: string
}): string {
  const currentUrl = { ...params }
  currentUrl[key] = value

  return queryString.stringifyUrl(
    {
      url: url || window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}
