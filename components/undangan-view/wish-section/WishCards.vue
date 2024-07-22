<script setup lang="ts">
import moment from 'moment'
import type { Wish } from '~/types'

defineProps<{
  wishes: Wish[]
}>()
</script>

<template>
  <div class="mt-4 rounded-md border-2 border-main-text bg-slate-100 px-4">
    <div class="border-b-2 border-slate-800/80 pt-4 text-lg">
      <h2 class="text-center font-trajan italic text-black">Your Wishes</h2>
      <p class="w-full text-right text-sm font-light text-black">Total: {{ wishes.length }}</p>
    </div>

    <div class="max-h-[calc(100vh-16rem)] overflow-auto">
      <div
        :class="`chat text-black ${Math.random() > 0.3 ? 'chat-start' : 'chat-end'}`"
        v-for="wish in wishes"
        :key="wish.id"
      >
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="" src="/images/photo-profile.webp" />
          </div>
        </div>
        <div class="chat-header my-1">
          {{ wish.name }}
          <time class="text-xs italic opacity-50">{{ moment(wish.date).fromNow() }}</time>
        </div>
        <div class="chat-bubble whitespace-pre-wrap !bg-main-text !text-white">{{ wish.wish }}</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>

      <div v-if="wishes.length === 0">
        <p class="my-2 text-center font-kalufonia italic text-black">Belum ada pesan</p>
      </div>
    </div>
  </div>
</template>
