<script setup lang="ts">
import PinkOnlyFlower from '/images/pink-only-flower.png'
import PurpleOnlyFlower from '/images/purple-only-flower.png'
</script>

<template>
  <NuxtImg :src="PinkOnlyFlower" alt="" class="absolute left-5 top-10 w-24" />
  <NuxtImg :src="PurpleOnlyFlower" alt="" class="absolute bottom-10 right-16 w-16" />
</template>
