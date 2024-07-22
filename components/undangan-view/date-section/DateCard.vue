<script setup lang="ts">
import { BIconPinMap } from 'bootstrap-icons-vue'

defineProps<{
  title: string
  day: string
  date: string
  time: string
  location: string
  maps: string
}>()
</script>

<template>
  <div
    class="relative max-w-xs overflow-hidden rounded-bl-lg rounded-br-[5rem] rounded-tl-[5rem] rounded-tr-lg border-[3px] border-indigo-400/90 bg-gradient-to-br from-sky-50/70 to-blue-50/20 p-4 px-6 pb-10 shadow-md shadow-cyan-400/20 xl:max-w-sm"
  >
    <img
      src="/images/blue-only-flower.png"
      alt=""
      class="animate-spin-slower absolute right-0 top-0 w-14"
    />

    <h2 class="mt-10 text-center font-playwriteCanada text-2xl font-semibold">{{ title }}</h2>
    <div class="mt-5 text-center font-trajan capitalize text-indigo-900">
      <p class="text-xl">{{ day }}</p>
      <p>{{ date }}</p>
      <p class="mt-6 text-sm">Pukul {{ time }}</p>
      <p class="mt-4 text-xs">Bertempat di:</p>
      <p class="mt-1 text-sm">
        {{ location }}
      </p>
    </div>

    <button class="mx-auto mt-4 grid place-items-center">
      <a
        :href="maps"
        class="inline-flex items-center justify-center gap-3 rounded-md bg-main-text px-8 py-2 text-sm text-white hover:bg-main-text/80"
        target="_blank"
      >
        <BIconPinMap />
        <span>Cek Lokasi</span>
      </a>
    </button>
  </div>
</template>
