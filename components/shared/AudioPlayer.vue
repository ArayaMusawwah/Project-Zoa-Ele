<script setup lang="ts">
import { BIconDisc, BIconPauseCircle } from 'bootstrap-icons-vue'
import { useActivator } from '~/stores/activator'
import { ref } from 'vue'

const activator = useActivator()
const play = ref<boolean>(false)
const audio = ref<HTMLAudioElement | null>(null)
const setPlay = () => {
  play.value = !play.value
  play.value ? audio.value?.pause() : audio.value?.play()
}
</script>

<template>
  <div>
    <audio autoplay loop ref="audio">
      <source src=/audio/backsound.ogg type="audio/ogg" autoplay loop />
      Your browser does not support the audio element.
    </audio>
    <BIconDisc :class="{
      'fixed right-6 top-10 z-50 size-12 fill-black transition-all hover:cursor-pointer xl:size-16': true,
      'animate-spin-slow': activator.active
    }" v-if="activator.active && !play" @click="setPlay" />
    <BIconPauseCircle class="fixed right-6 top-10 size-12 fill-black transition-all hover:cursor-pointer xl:size-16"
      v-if="play" @click="setPlay" />
  </div>
</template>
