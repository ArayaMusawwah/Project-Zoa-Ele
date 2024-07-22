<script setup lang="ts">
import PinkFlower from '/images/pink-flower.png'
import MagentaFlower from '/images/magenta-flower.png'
import LongFlower from '/images/long-flower.png'
</script>

<template>
  <div>
    <img :src="LongFlower" alt="" class="absolute left-0 top-0 w-12 rotate-180 object-cover" />
    <img :src="MagentaFlower" alt="" class="absolute right-0 top-0 w-28 rotate-180 object-cover" />
    <img
      :src="PinkFlower"
      alt=""
      class="absolute bottom-0 right-0 w-24 -rotate-[20deg] -scale-x-100 object-cover"
    />
  </div>
</template>
