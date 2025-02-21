<script setup lang="ts">
import axios from 'axios'
import { queryParamsEncoder, toast } from '~/lib/utils'
import type { Guest } from '~/types'
import _ from 'lodash'
import DialogModal from './DialogModal.vue'
import TablePagination from './TablePagination.vue'

const store = useGuests()

let editingId: number | null = null
let originalName: string | null = null

const sharedGuest = ref<Guest>()

const template = inject('template')

const isEditing = ref(false)
const isLoadingToDelete = ref(false)
const checkedGuests = ref([] as Guest[])

const handleDeleteGuest = async (id: number, name: string) => {
  isLoadingToDelete.value = true
  try {
    await axios.delete('/api/guests/delete', { data: { id } }).then(() => {
      toast.fire({
        icon: 'success',
        title: name + ' di hapus'
      })

      store.paginatedGuests.map((guest: Guest) => {
        if (guest.id === id) {
          store.paginatedGuests.splice(store.paginatedGuests.indexOf(guest), 1)
        }
      })
    })
  } catch (error) {
    console.error(error)
  } finally {
    isLoadingToDelete.value = false
    editingId = null
  }
}

const handleEditGuest = async (guest: Guest) => {
  const newGuests = store.paginatedGuests.map((g: Guest) => {
    if (g.id === guest.id) {
      return {
        ...g,
        name: guest.name,
        link: queryParamsEncoder(guest.name)
      }
    } else {
      return {
        ...g
      }
    }
  })

  const theGuest = newGuests.find((g: Guest) => g?.id === guest.id)

  try {
    await axios.patch('/api/guests/edit', theGuest).then(() => store.fetchGuests())
  } catch (error) {
    console.error(error)
  }
}

const debouncedUpdate = _.debounce(async () => {
  try {
    await axios.put(`/api/guests/edit`, checkedGuests.value)
  } catch (error) {
    console.error(error)
  }
}, 1000)

const setToShare = (guest: Guest) => {
  sharedGuest.value = guest
}
</script>

<template>
  <div class="mt-7 overflow-x-auto rounded-sm">
    <p class="px-10 text-right text-sm font-light text-black">Total: {{ store.guests.length }}</p>
    <table class="table-pin-rows table justify-center overflow-hidden">
      <thead>
        <tr class="!bg-gray-400 text-center text-black">
          <th>
            <label>
              <input type="checkbox" className="checkbox checkbox-info bg-zinc-300" />
            </label>
          </th>
          <th>Nama</th>
          <th>Link</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="store.isLoading">
          <td colspan="4" class="bg-white">
            <div class="mx-auto grid place-items-center">
              <span class="loading loading-dots loading-lg mx-auto" />
            </div>
          </td>
        </tr>

        <template v-else-if="store.paginatedGuests.length && !store.isLoading">
          <tr
            class="bg-white text-center text-black"
            v-for="(guest, index) in store.paginatedGuests"
            :key="index"
          >
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox checkbox-info bg-zinc-300"
                  v-model="guest.isCompleted"
                  @change="
                    () => {
                      checkedGuests.push(guest)
                      debouncedUpdate()
                    }
                  "
                />
              </label>
            </th>

            <td :class="{ capitalize: true }">
              <input
                type="text"
                v-if="isEditing && editingId === guest.id"
                v-model="guest.name"
                class="w-full rounded-md border border-black/60 bg-white px-2 py-1 text-black"
              />
              <span v-else :class="{ 'text-red-500 line-through': guest.isCompleted }">
                {{ guest.name }}
              </span>
            </td>

            <td>
              <a :href="guest.link" target="_blank" class="text-main-text underline">
                {{ guest.link }}
              </a>
            </td>

            <td class="flex justify-center">
              <div class="join">
                <button
                  :class="{
                    'btn join-item': true,
                    'btn-primary': !isEditing || editingId !== guest.id,
                    'btn-warning': isEditing && editingId === guest.id
                  }"
                  @click="
                    () => {
                      if (!isEditing) originalName = guest.name
                      isEditing = !isEditing
                      editingId = ~~guest.id
                      if (originalName === guest.name) return
                      if (!isEditing && guest.name.trim() !== '') handleEditGuest(guest)
                    }
                  "
                >
                  {{ isEditing && editingId === guest.id ? 'Save' : 'Edit' }}
                </button>

                <button
                  class="btn btn-success join-item"
                  onclick="my_modal_2.showModal()"
                  @click="setToShare(guest)"
                >
                  Share
                </button>

                <DialogModal :sharedGuest :template />

                <button
                  class="btn btn-error join-item disabled:!bg-gray-300 disabled:!text-gray-500"
                  type="button"
                  @click="
                    () => {
                      editingId = guest.id
                      handleDeleteGuest(~~guest.id, guest.name)
                    }
                  "
                  :disabled="isLoadingToDelete && editingId === guest.id"
                >
                  {{ isLoadingToDelete && editingId === guest.id ? 'Deleting...' : 'Delete' }}
                </button>
              </div>
            </td>
          </tr>
        </template>
        <td colspan="4" class="bg-white" v-else>
          <div class="mx-auto grid place-items-center text-center italic text-black">
            <span>Belum ada nama tamu yang dimasukkan</span>
          </div>
        </td>
      </tbody>
    </table>
  </div>
  <TablePagination />
</template>
