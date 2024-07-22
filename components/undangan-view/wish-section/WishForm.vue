<script setup lang="ts">
import axios from 'axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  fetchWishes: () => void
}>()

const nameFromQuery = useRoute().query.to
const name = ref(nameFromQuery || '')
const wish = ref<string>('')
const kehadiran = ref<'hadir' | 'tidak_hadir' | 'Konfirmasi Kehadiran'>('Konfirmasi Kehadiran')

const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  if (
    kehadiran.value === 'Konfirmasi Kehadiran' ||
    String(name.value).trim() === '' ||
    String(wish.value).trim() === ''
  )
    return

  try {
    await axios
      .post(`/api/wishes/create`, {
        name: name.value as string,
        wish: wish.value as string,
        kehadiran: kehadiran.value as 'hadir' | 'tidak_hadir',
        date: new Date()
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Terima kasih',
          text: 'Doa restu Anda sudah disimpan'
        })
      })
  } catch (error) {
    console.error('Error creating user:', error)
  } finally {
    props.fetchWishes()
    isLoading.value = false
  }
}
</script>

<template>
  <div class="mx-auto mt-10">
    <form
      action="#"
      method="post"
      class="flex flex-col gap-2 py-2 text-black *:bg-slate-100"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        class="rounded-md border-2 border-main-text px-4 py-2"
        v-model="name"
        required
      />
      <textarea
        name="wish"
        cols="10"
        rows="3"
        placeholder="Doa Restu Anda"
        class="rounded-md border-2 border-main-text px-4 py-2"
        v-model="wish"
        required
      />
      <select
        class="w-full rounded-md border-2 border-main-text px-4 py-2"
        v-model="kehadiran"
        required
      >
        <option disabled>Konfirmasi Kehadiran</option>
        <option value="hadir">Hadir</option>
        <option value="tidak_hadir">Tidak Hadir</option>
      </select>

      <button
        type="submit"
        class="rounded-md border-2 !bg-main-text px-4 py-2 text-white hover:!bg-main-text2 disabled:!bg-slate-300"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Mengirim...' : 'Kirim' }}
      </button>
    </form>
  </div>
</template>
