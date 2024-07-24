<script setup lang="ts">
import type { Guest } from '~/types'
import {
  BIconWhatsapp,
  BIconTelegram,
  BIconEnvelope,
  BIconChatDots,
  BIconFacebook
} from 'bootstrap-icons-vue'

defineProps<{
  sharedGuest: Guest | undefined
  template: unknown
}>()

const networks = [
  {
    network: 'whatsapp',
    color: '#25D366',
    icon: BIconWhatsapp,
    name: 'Whatsapp'
  },
  {
    network: 'facebook',
    color: '#1877f2',
    icon: BIconFacebook,
    name: 'Facebook'
  },
  {
    network: 'telegram',
    color: '#0088cc',
    icon: BIconTelegram,
    name: 'Telegram'
  },
  {
    network: 'email',
    color: '#333333',
    icon: BIconEnvelope,
    name: 'Email'
  },
  {
    network: 'sms',
    color: '#323b43',
    icon: BIconChatDots,
    name: 'SMS'
  }
]
</script>

<template>
  <dialog id="my_modal_2" class="modal modal-middle">
    <div class="modal-box !bg-zinc-300">
      <h3 class="text-lg font-bold">Bagikan ke {{ sharedGuest?.name }}</h3>
      <div class="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-4">
        <ClientOnly>
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :url="sharedGuest?.link"
            :style="{ backgroundColor: network.color }"
            :description="template"
            title="Pernikahan Iqbal & Lisa"
            class="flex items-center gap-3 rounded-md px-4 py-2"
          >
            <component :is="network.icon" class="size-[1.5rem] text-white" />
            <span class="font-semibold text-white">{{ network.name }}</span>
          </ShareNetwork>
        </ClientOnly>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
