<script setup lang="ts">
import { useActivator } from '~/stores/activator'
import { BIconEnvelopeOpen } from 'bootstrap-icons-vue'

const activator = useActivator()
</script>

<template>
  <button :class="{
    'mx-auto mt-4 flex animate-pulse touch-manipulation items-center justify-center gap-3 rounded-full bg-main-text p-2 px-10 text-white transition-all xl:hover:scale-105': true,
    'scale-0': activator.active
  }" @click="activator.setActive">
    <span>
      <BIconEnvelopeOpen />
    </span>
    <span>Buka Undangan</span>
  </button>
</template>

<style scoped></style>
