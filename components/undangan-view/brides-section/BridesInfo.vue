<script setup lang="ts">
defineProps<{
  name: string
  fullName: string
  parentsName: string
  nums: string
  picture: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative max-w-[12rem]">
      <div
        class="overflow-hidden rounded-bl-lg rounded-br-[5rem] rounded-tl-[5rem] rounded-tr-lg border-[3px] border-main-text bg-sky-200 shadow-md shadow-purple-400/50"
      >
        <img :src="picture" alt="" class="w-full object-cover" />
      </div>

      <span
        class="text-shadow absolute -bottom-3 left-1/2 -translate-x-1/2 font-playwriteCanada text-4xl capitalize text-white"
        >{{ name }}</span
      >
    </div>

    <p class="my-4 mt-10 font-kalufonia text-2xl capitalize tracking-wider text-purple-700">
      {{ fullName }}
    </p>

    <div class="leading-5 text-gray-800">
      <p class="font-semibold">Anak {{ nums }} dari</p>
      <p class="mt-2 whitespace-pre">{{ parentsName }}</p>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 2px 1px 2px black;
}
</style>
