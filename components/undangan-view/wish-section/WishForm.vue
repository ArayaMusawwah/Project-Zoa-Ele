<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from '~/lib/utils'

const props = defineProps<{
  fetchWishes: () => void
}>()

const nameFromQuery = useRoute().query.to
const name = ref(nameFromQuery || '')
const wish = ref<string>('')
// const kehadiran = ref<'hadir' | 'tidak_hadir' | 'Konfirmasi Kehadiran'>('Konfirmasi Kehadiran')

const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true

  const formData = new URLSearchParams()

  /* formData.append('nama', String(name.value))
  formData.append('kehadiran', String(kehadiran.value)) */

  if (
    // kehadiran.value === 'Konfirmasi Kehadiran' ||
    String(name.value).trim() === '' ||
    String(wish.value).trim() === ''
  )
    return

  try {
    await useFetch(`/api/wishes/create`, {
      method: 'POST',
      body: {
        name: name.value as string,
        wish: wish.value as string,
        // kehadiran: kehadiran.value as 'hadir' | 'tidak_hadir',
        date: new Date()
      }
    }).then(() => {
      toast.fire({
        icon: 'success',
        title: 'Terima kasih',
        text: 'Doa restu Anda sudah disimpan'
      })
      wish.value = ''
    })
    /* await fetch(useRuntimeConfig().public.webAppUrl, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      body: formData
    }) */
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Error creating user' })
  } finally {
    props.fetchWishes()
    isLoading.value = false
  }
}
</script>

<template>
  <div class="mx-auto mt-10">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-2 py-2 text-black *:bg-slate-100">
      <input
        type="text"
        name="nama"
        placeholder="Nama anda"
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
      <!-- <select
        class="w-full rounded-md border-2 border-main-text px-4 py-2"
        v-model="kehadiran"
        name="kehadiran"
        required
      >
        <option disabled>Konfirmasi Kehadiran</option>
        <option value="hadir">Hadir</option>
        <option value="tidak_hadir">Tidak Hadir</option>
      </select> -->

      <button
        type="submit"
        class="rounded-md border-2 !border-main-text/50 !bg-main-text px-4 py-2 text-white hover:!bg-main-text2 disabled:!bg-slate-300"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Mengirim...' : 'Kirim' }}
      </button>
    </form>
  </div>
</template>
