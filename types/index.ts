export interface Wish {
  id: number | string
  name: string
  wish: string
  date: Date
  // kehadiran: 'hadir' | 'tidak_hadir'
}

export interface Guest {
  id: number | string
  name: string
  link: string
  isCompleted: boolean
  date: Date
}

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}
