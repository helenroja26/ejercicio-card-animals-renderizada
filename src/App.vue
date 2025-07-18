<script setup lang="ts">
import { ref } from 'vue'
import cardsData from '@/data/cards.json'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
const activeId = ref<string | null>(null)

function handleUpdatePlay(payload: { id: string, value: boolean }) {
  if (payload.value) {
    activeId.value = payload.id
  } else if (activeId.value === payload.id) {
    activeId.value = null
  }
}
function handleAudioEnd(id: string) {
  if (activeId.value === id) {
    activeId.value = null
  }
}
</script>

<template>
  <Header />

  <main>
    <RouterView />

  </main>

  <Footer />
</template>

<style scoped>

</style>