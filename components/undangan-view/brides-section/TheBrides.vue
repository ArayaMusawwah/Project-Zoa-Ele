<script setup lang="ts">
import { DATA } from '~/constant'
import BridesInfo from './BridesInfo.vue'
import BridesFlower from './BridesFlower.vue'
</script>

<template>
  <section class="sub-container py-24 text-center">
    <div class="mx-auto xl:max-w-xl">
      <h2 class="text-center font-mothanna text-2xl text-main-text">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
      </h2>

      <h3 class="mt-2 text-center font-serif text-sm font-light text-main-text">
        Assalamu'alaikum Warahmatullahi Wabarokaatuh
      </h3>

      <p class="mx-auto mt-2 max-w-lg text-center text-sm text-main-text">
        Maha Suci Allah SWT yang telah menciptakan segala sesuatu dengan berpasang-pasangan. Dengan
        izin Allah SWT kami mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami:
      </p>
    </div>

    <div class="mx-auto mt-14 grid max-w-6xl justify-center gap-4 px-[7%] xl:mt-32 xl:grid-cols-3">
      <BridesInfo
        :name="DATA.mempelai.perempuan.panggilan"
        :fullName="DATA.mempelai.perempuan.nama"
        :parents-name="DATA.mempelai.perempuan.ortu"
        :picture="'/images/dummy-bride.jpg'"
        :nums="'kedua'"
      />

      <div class="flex items-center justify-center gap-8">
        <p class="inline h-[2px] w-full bg-black" />
        <p class="inline font-sacramento text-5xl text-black">&amp;</p>
        <p class="inline h-[2px] w-full bg-black" />
      </div>

      <BridesInfo
        :name="DATA.mempelai.laki.panggilan"
        :fullName="DATA.mempelai.laki.nama"
        :parents-name="DATA.mempelai.laki.ortu"
        :picture="'/images/dummy-groom.jpg'"
        :nums="'ketiga'"
      />
    </div>

    <BridesFlower />
  </section>
</template>
