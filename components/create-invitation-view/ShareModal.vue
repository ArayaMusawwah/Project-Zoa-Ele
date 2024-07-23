<script setup lang="ts">
import { template } from 'lodash'
import type { Guest } from '~/types'
import {
  BIconWhatsapp,
  BIconMessenger,
  BIconTelegram,
  BIconEnvelope,
  BIconChatDots
} from 'bootstrap-icons-vue'

defineProps<{
  guest: Guest
}>()

const networks = [
  {
    network: 'whatsapp',
    color: '#25D366',
    icon: BIconWhatsapp,
    name: 'Whatsapp'
  },
  {
    network: 'messenger',
    color: '#1877f2',
    icon: BIconMessenger,
    name: 'Messenger'
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
      <h3 class="text-lg font-bold">Bagikan ke {{ guest.name }}</h3>
      <ClientOnly>
        <div class="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-4">
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :url="guest.link"
            :title="template"
            :style="{ backgroundColor: network.color }"
            class="flex items-center gap-3 rounded-md px-4 py-2"
          >
            <component :is="network.icon" class="size-[1.5rem] text-white"></component>
            <span class="font-semibold text-white">{{ network.name }}</span>
          </ShareNetwork>
        </div>
      </ClientOnly>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
