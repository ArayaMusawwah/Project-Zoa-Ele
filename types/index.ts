export interface Wish {
  id: number | string
  name: string
  wish: string
  date: Date
  kehadiran: 'hadir' | 'tidak_hadir'
}
