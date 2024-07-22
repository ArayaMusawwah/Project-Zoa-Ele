<script setup lang="ts">
import { DATA } from '~/constant'
import { BIconCopy } from 'bootstrap-icons-vue'
import copy from 'copy-to-clipboard'
import Swal from 'sweetalert2'
import GiftFlower from './GiftFlower.vue'

const Toast = Swal.mixin({
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

const handleCopy = (noRek: string) => {
  copy(noRek)
  Toast.fire({
    icon: 'success',
    title: 'Nomer Rekening berhasil di salin'
  })
}
</script>

<template>
  <section class="sub-container py-2 pb-20 text-main-text">
    <h1 class="text-center font-trajan text-3xl font-bold uppercase italic tracking-wider">
      Wedding Gift
    </h1>
    <p class="mx-auto mt-14 max-w-xl text-pretty text-center text-sm">
      Doa restu Anda merupakan karunia terindah bagi kami. Dan jika memberi adalah ungkapan tanda
      kasih, dengan senang hati kami menerima kado secara cashless melalui:
    </p>

    <div
      class="mx-auto mt-10 grid max-w-xl gap-8 max-md:grid-rows-2 md:grid-cols-2 md:gap-4 xl:max-w-4xl"
    >
      <div
        class="flex flex-col items-center justify-center"
        v-for="(rek, i) in DATA.kado.rekening"
        :key="i"
      >
        <img :src="`/images${rek.gambar}`" :alt="rek.gambar" class="w-[12rem] xl:w-2/3" />
        <p class="mt-2 text-sm">No. Rekening: {{ rek.nomor }}</p>
        <p class="mt-1 text-sm">An. {{ rek.atasNama }}</p>
        <button
          class="mt-3 inline-flex w-fit items-center gap-2 rounded-md bg-main-text px-4 py-2 text-white"
          @click="handleCopy(rek.nomor)"
        >
          <BIconCopy />
          <span>Salin No. Rekening</span>
        </button>
      </div>
    </div>
    <GiftFlower />
  </section>
</template>
