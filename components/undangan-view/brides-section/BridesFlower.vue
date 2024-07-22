<script setup lang="ts">
import Roses from '/images/roses.png'
import MagentaFlower from '/images/magenta-flower.png'
</script>

<template>
  <img :src="Roses" alt="" class="absolute bottom-2 right-2 w-28 -scale-x-100" />
  <img
    :src="MagentaFlower"
    alt=""
    class="absolute bottom-[68%] left-0 w-28 rotate-180 -scale-x-100"
  />
</template>
