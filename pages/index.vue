<script setup lang="ts">
import AudioPlayer from '~/components/shared/AudioPlayer.vue'
import TheAbout from '~/components/undangan-view/about-section/TheAbout.vue'
import TheBrides from '~/components/undangan-view/brides-section/TheBrides.vue'
import TheClosing from '~/components/undangan-view/closing-section/TheClosing.vue'
import TheDate from '~/components/undangan-view/date-section/TheDate.vue'
import TheFooter from '~/components/undangan-view/footer-section/TheFooter.vue'
import TheGift from '~/components/undangan-view/gift-section/TheGift.vue'
import TheHome from '~/components/undangan-view/home-section/TheHome.vue'
import ThePreface from '~/components/undangan-view/preface-section/ThePreface.vue'
import TheWish from '~/components/undangan-view/wish-section/TheWish.vue'

const activator = useActivator()
</script>

<!-- TODO: Flowers size for desktop views  -->

<template>
  <div :class="{ 'max-h-screen overflow-hidden': !activator.active, 'overflow-hidden': true }">
    <div class="background relative">
      <TheHome />
      <TheAbout />
      <ThePreface />
      <TheBrides />
      <TheDate />
      <TheGift />
      <TheWish />
      <TheClosing />

      <AudioPlayer />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.background {
  background-image: url('/images/super-new-background.jpg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
