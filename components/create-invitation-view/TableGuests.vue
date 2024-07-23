<script setup lang="ts">
import axios from 'axios'
import { queryParamsEncoder, toast } from '~/lib/utils'
import type { Guest } from '~/types'
import _ from 'lodash'

const props = defineProps<{
  guests: Guest[]
}>()

const emit = defineEmits(['update-guests'])

let editingId: number | null = null
let originalName: string | null = null

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

      props.guests.map((guest) => {
        if (guest.id === id) {
          props.guests.splice(props.guests.indexOf(guest), 1)
        }
      })
    })
  } catch (error) {
    console.log(error)
  } finally {
    isLoadingToDelete.value = false
  }
}

const handleEditGuest = async (guest: Guest) => {
  const newGuests = props.guests.map((g) => {
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

  const theGuest = newGuests.find((g) => g?.id === guest.id)

  try {
    await axios.patch('/api/guests/edit', theGuest).then(() => {
      emit('update-guests', newGuests)
    })
  } catch (error) {
    console.log(error)
  }
}

const debouncedUpdate = _.debounce(async () => {
  try {
    await axios.put(`/api/guests/edit`, checkedGuests.value)
  } catch (error) {
    console.log(error)
  }
}, 1000)
</script>

<template>
  <div class="mt-7 overflow-x-auto rounded-md">
    <table class="table-pin-rows table">
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
        <tr class="bg-white text-center text-black" v-for="guest in guests" :key="guest.id">
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
            <span v-else :class="{ 'line-through': guest.isCompleted }">{{ guest.name }}</span>
          </td>

          <td>
            <a :href="guest.link" target="_blank" class="text-main-text underline">{{
              guest.link
            }}</a>
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

              <button class="btn btn-success join-item">Share</button>

              <button
                class="btn btn-error join-item disabled:!bg-gray-300 disabled:!text-gray-500"
                type="button"
                @click="handleDeleteGuest(~~guest.id, guest.name)"
                :disabled="isLoadingToDelete"
              >
                {{ isLoadingToDelete ? 'Deleting...' : 'Delete' }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
