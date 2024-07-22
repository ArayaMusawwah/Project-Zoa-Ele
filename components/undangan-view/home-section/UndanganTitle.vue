<script setup lang="ts">
import { DATA } from '~/constant'

defineProps({
  title: String
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 v-if="title" class="mt-20 text-center font-serif text-2xl tracking-wide text-main-text xl:mt-14 xl:text-3xl">
      {{ title }}
    </h1>

    <img src="/images/pengantin.png" alt="pengantin" class="h-[20rem] xl:h-[24rem]" />

    <p class="mt-4 text-center font-sacramento text-5xl capitalize tracking-wide text-main-text xl:text-6xl">
      {{ DATA.mempelai.keduaMempelai }}
    </p>
  </div>
</template>

<style scoped></style>
