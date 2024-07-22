<script setup lang="ts">
import { DATA } from '~/constant'
import { BIconArrowThroughHeartFill } from 'bootstrap-icons-vue'
import ClosingFlower from './ClosingFlower.vue'
</script>

<template>
  <section class="sub-container mx-auto pb-16 pt-20 text-main-text max-md:px-8">
    <div class="mx-auto max-w-xl">
      <img
        src="/images/crystal-flower.png"
        alt=""
        class="absolute left-1/2 top-0 w-20 -translate-x-1/2 rotate-180 object-cover"
      />

      <h1 class="mt-12 text-center font-trajan text-3xl font-bold uppercase italic tracking-wider">
        Doa Pengantin
      </h1>

      <h2 class="mt-10 text-center font-sacramento text-3xl">
        بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى خَيْرٍ
      </h2>

      <p class="mx-auto mt-2 max-w-xl text-pretty text-center text-sm italic">
        Baarokallaahu laka wa baaroka ‘alaika wa jama’a bainakumaa fii khair
      </p>
      <p class="mx-auto mt-2 max-w-xl text-pretty text-center font-bold italic">
        “Semoga Allah memberi berkah kepadamu dan atasmu serta mengumpulkan kamu berdua (pengantin
        laki-laki dan perempuan) dalam kebaikan.”
      </p>

      <p class="mx-auto mt-16 text-pretty text-center font-sans font-semibold leading-6">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i
        berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa
        restunya, kami mengucapkan terima kasih.
      </p>

      <div
        class="mt-20 text-center font-sacramento text-5xl font-bold capitalize tracking-wide xl:text-7xl"
      >
        {{ DATA.mempelai.keduaMempelai }}
      </div>

      <BIconArrowThroughHeartFill class="mx-auto mt-16 size-[5rem] fill-main-text" />
    </div>
    <ClosingFlower class="mt-20" />
  </section>
</template>
