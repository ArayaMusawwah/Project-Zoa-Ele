<script setup lang="ts">
import { DATA } from '~/constant'
import DateCard from './DateCard.vue'
import { formatDate } from '~/lib/utils'
import DateFlower from './DateFlower.vue'
</script>

<template>
  <section class="sub-container py-20 text-main-text">
    <h1 class="text-center font-trajan text-3xl font-bold uppercase italic tracking-wider">
      Save the date
    </h1>

    <div class="mt-20 flex flex-col items-center justify-center gap-16 xl:flex-row xl:gap-20">
      <DateCard :title="'Akad Nikah'" :day="formatDate(DATA.akad.tanggal).hari"
        :date="formatDate(DATA.akad.tanggal).tanggalFormat" :time="DATA.akad.waktu" :location="DATA.akad.alamat"
        :maps="DATA.akad.maps" />

      <DateCard :title="'Resepsi Nikah'" :day="formatDate(DATA.resepsi.tanggal).hari"
        :date="formatDate(DATA.resepsi.tanggal).tanggalFormat" :time="DATA.resepsi.waktu"
        :location="DATA.resepsi.alamat" :maps="DATA.resepsi.maps" />
    </div>

    <DateFlower />
  </section>
</template>
