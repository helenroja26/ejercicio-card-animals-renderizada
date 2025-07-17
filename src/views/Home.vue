<script setup lang="ts">
import { ref } from 'vue'
import cardsData from '@/data/cards.json'
import CardAudio from '@/components/CardAudio.vue'

const activeId = ref<string | null>(null)

function handleUpdatePlay(payload: { id: string; value: boolean }) {
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
  <div class="cards-grid">
    <div v-for="card in cardsData" :key="card.id">
      <router-link :to="`/detalle/${card.id}`" class="card-title">
        {{ card.text || card.id }}
      </router-link>
      <CardAudio
        v-bind="card"
        :play="activeId === card.id"
        @update:play="handleUpdatePlay"
        @audio-ended="() => handleAudioEnd(card.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3.5rem;
  gap: 3.5rem;
}
.card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #42b983;
  gap: 2rem;
  text-align: center;
  letter-spacing: 0.03em;
}
@media (max-width: 1100px) {
  .cards-grid {
    grid-template-columns: repeat(2, 2fr);
    max-width: 98vw;
    padding-top: 80px;
    padding-bottom: 50px;
    max-width: 95vw;
  }
}
@media (max-width: 600px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 0;
    padding-top: 80px;
    padding-bottom: 50px;
    max-width: 95vw;
  }
}
</style>
