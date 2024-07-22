<script setup lang="ts">
import { DATA } from '~/constant'
import { formatDate } from '~/lib/utils';


const tglResepsi = DATA.resepsi.tanggal

const time = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

onMounted(() => {
  setInterval(() => {
    const now = new Date()
    const diff = new Date(tglResepsi).getTime() - now.getTime()

    time.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    time.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    time.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    time.seconds = Math.floor((diff % (1000 * 60)) / 1000)
  }, 1000)
})
</script>

<template>
  <div class="mt-4">
    <p class="text-center font-serif text-2xl text-main-text">
      {{ formatDate(DATA.resepsi.tanggal).tanggalFormat }}
    </p>
  </div>

  <div class="mx-auto mt-4 flex items-center justify-center gap-2 *:flex *:flex-col *:items-center *:justify-center">
    <span class="font-trajan size-16 rounded-md bg-main-text text-center font-semibold text-white">
      {{ time.days }}
      <span class="font-trajan text-sm">Hari</span>
    </span>
    <span class="font-trajan size-16 rounded-md bg-main-text font-semibold text-white">
      {{ time.hours }}
      <span class="font-trajan text-sm">Jam</span>
    </span>
    <span class="font-trajan size-16 rounded-md bg-main-text font-semibold text-white">
      {{ time.minutes }}
      <span class="font-trajan text-sm">Menit</span>
    </span>
    <span class="font-trajan size-16 rounded-md bg-main-text font-semibold text-white">
      {{ time.seconds }}
      <span class="font-trajan text-sm">Detik</span>
    </span>
  </div>
</template>
