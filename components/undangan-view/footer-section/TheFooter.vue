<script setup lang="ts">
import {
  BIconHeartFill,
  BIconGithub,
  BIconLinkedin,
  BIconInstagram,
  BIconEnvelope,
  BIconWhatsapp
} from 'bootstrap-icons-vue'

const socials = [
  {
    name: 'Linkedin',
    icon: BIconLinkedin,
    url: 'https://www.linkedin.com/in/muhammad-iqbal-ramadhan-90b7302a4'
  },
  { name: 'Github', icon: BIconGithub, url: 'https://github.com/arayamusawwah' },
  { name: 'Email', icon: BIconEnvelope, url: 'mailto:miramadhan354@gmail.com' },
  { name: 'Instagram', icon: BIconInstagram, url: 'https://www.instagram.com/elite.iqbal' },
  { name: 'Whatsapp', icon: BIconWhatsapp, url: 'https://wa.me/6289679063278' }
]
</script>

<template>
  <footer class="w-full bg-gray-950 py-4 pb-8">
    <h1 class="mb-2 text-center">Made With <BIconHeartFill class="inline text-red-500" /> by:</h1>

    <div class="grid grid-cols-2 place-items-center xl:grid-cols-3">
      <div class="mx-auto flex w-full items-center justify-center gap-4">
        <a
          href="https://github.com/ArayaMusawwah"
          target="_blank"
          class="flex cursor-pointer items-center"
          ><NuxtImg src="/images/logo.png" alt="" class="w-12"
        /></a>
        <h2 class="font-zain text-3xl text-white hover:text-main-text">
          <a href="https://wa.me/6289679063278" target="_blank">Araya Musawwah</a>
        </h2>
      </div>

      <div>
        <ul class="flex justify-center gap-4">
          <li v-for="social in socials" :key="social.name" class="group relative">
            <a :href="social.url" target="_blank">
              <component :is="social.icon" class="inline size-6 hover:fill-main-text" />
            </a>
            <span
              class="absolute -top-10 left-1/2 -translate-x-1/2 scale-x-0 rounded bg-gray-800 px-2 py-1 text-sm transition-all group-hover:scale-x-100"
              >{{ social.name }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
