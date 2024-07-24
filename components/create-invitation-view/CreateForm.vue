<script setup lang="ts">
import axios from 'axios'
import TemplateInfo from './TemplateInfo.vue'
import { queryParamsEncoder, toast } from '~/lib/utils'

const store = useGuests()

const namaTamu = ref('')
const template: string | undefined = inject('template')

const isEditing = ref(false)
const isLoading = ref(false)

const handleCreateGuest = async () => {
  isLoading.value = true
  const data = {
    name: namaTamu.value,
    isCompleted: false,
    link: queryParamsEncoder(namaTamu.value),
    date: new Date()
  }

  try {
    await axios.post('/api/guests/create', data).then(() => {
      toast.fire({
        icon: 'success',
        title: `${data.name} telah ditambahkan`
      })

      namaTamu.value = ''

      store.fetchGuests()
    })
  } catch (error) {
    console.error('Error creating template:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-3" @submit.prevent="handleCreateGuest">
      <input
        type="text"
        placeholder="Nama Tamu"
        name="nama"
        class="w-full rounded-md border border-black/30 bg-white px-4 py-1 text-black"
        v-model="namaTamu"
      />
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 disabled:bg-gray-300 disabled:text-gray-500"
      >
        {{ isLoading ? 'Sedang menambahkan...' : 'Tambah nama' }}
      </button>
    </form>

    <div class="divider divider-neutral !my-4" />

    <TemplateInfo />

    <form class="flex flex-col gap-3">
      <textarea
        placeholder="buat template pesan (tidak wajib)"
        class="w-full rounded-md bg-white px-4 py-1 text-black disabled:bg-gray-300 disabled:text-gray-500"
        :disabled="!isEditing"
        v-model="template"
      />

      <button
        class="rounded-md bg-blue-500 py-2 text-white hover:bg-blue-400"
        v-if="isEditing"
        @click.prevent="isEditing = false"
      >
        Simpan
      </button>
      <button
        class="rounded-md bg-green-500 py-2 text-white hover:bg-green-400"
        v-else
        @click.prevent="isEditing = true"
      >
        Ubah
      </button>
    </form>
  </div>
</template>
