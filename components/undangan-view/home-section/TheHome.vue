<script setup lang="ts">
import HomeFlowers from '~/components/undangan-view/home-section/HomeFlowers.vue'
import UndanganTitle from '~/components/undangan-view/home-section/UndanganTitle.vue'
import InvitationButton from '~/components/undangan-view/home-section/InvitationButton.vue'
</script>

<template>
  <section class="sub-container min-h-svh">
    <UndanganTitle :title="'The Wedding of'" />

    <div class="mt-8 text-center font-sans">
      <p class="text-sm text-main-text">Kepada Bapak/Ibu/Saudara/i:</p>
      <p class="mx-auto max-w-xs font-serif text-2xl capitalize text-main-text">
        {{ $route.query.to || 'Tamu Undangan' }}
      </p>
    </div>

    <InvitationButton />

    <HomeFlowers />
  </section>
</template>
