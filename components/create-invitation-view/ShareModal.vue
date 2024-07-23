<script setup lang="ts">
import type { Guest } from '~/types'

const props = defineProps<{
  guest: Guest
  setIdToShare: string
}>()

console.log(props.guest)
console.log(props.setIdToShare)
</script>

<template></template>
