<script setup lang="ts">
import { BIconHeartFill } from 'bootstrap-icons-vue'
</script>

<template>
  <footer class="grid w-full place-items-center bg-red-500/50">
    <div class="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-gray-950 py-10">
      <h1>Made With <BIconHeartFill class="inline text-red-500" /> by</h1>
      <a
        href="https://github.com/ArayaMusawwah"
        target="_blank"
        class="flex cursor-pointer items-center"
        ><img src="/images/logo.png" alt="" class="w-20"
      /></a>
      <h2 class="hover:text-main-text">
        <a href="https://wa.me/6289679063278" target="_blank">Araya Musawwah</a>
      </h2>
    </div>
  </footer>
</template>
