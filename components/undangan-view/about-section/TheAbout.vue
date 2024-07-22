<script setup lang="ts">
import UndanganTitle from '../home-section/UndanganTitle.vue'
import AboutFlower from './AboutFlower.vue'
import CountdownTime from './CountdownTime.vue'
import { BIconCalendar2Check } from 'bootstrap-icons-vue'
import { DATA } from '~/constant'
</script>

<template>
  <section class="sub-container py-20">
    <UndanganTitle />
    <CountdownTime />

    <div class="mt-4 grid place-items-center">
      <a :href="DATA.resepsi.link" target="_blank"
        class="mx-auto flex items-center gap-2 rounded-md bg-main-text px-4 py-2 text-white transition-all hover:scale-105">
        <BIconCalendar2Check class="inline" /> <span>Save to Calendar</span>
      </a>
    </div>

    <AboutFlower />
  </section>
</template>

<style scoped></style>
