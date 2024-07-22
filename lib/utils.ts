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
