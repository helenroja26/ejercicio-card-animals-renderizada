<script setup lang="ts">
import CardAudio from './components/CardAudio.vue'
import tigreImage from './assets/images/tigre.jpg'
import elefanteImage from './assets/images/elefante.jpg'
import guacaImage from './assets/images/Guacamaya.jpg'
import audioTigre from './assets/audio/tiger-371353.mp3'
import audioElefante from './assets/audio/elephant-scream-106989.mp3'
import audioGuaca from './assets/audio/birds-kea-105461.mp3'
import { ref } from 'vue'

// Estado reactivo para controlar qué tarjeta está activa
const activeId = ref<string | null>(null)

// Función para actualizar qué audio debe reproducirse
function handleUpdatePlay(payload: { id: string, value: boolean }) {
  if (payload.value) {
    activeId.value = payload.id
  } else if (activeId.value === payload.id) {
    activeId.value = null
  }
}

// Función para limpiar estado cuando termina el audio
function handleAudioEnd(id: string) {
  if (activeId.value === id) {
    activeId.value = null
  }
}
</script>

<template>
  <div>
    <CardAudio
      id="tigre"
      :image="tigreImage"
      texto="Sonidos del tigre"
      :audio="audioTigre"
      :play="activeId === 'tigre'"
      @update:play="handleUpdatePlay"
      @audio-ended="handleAudioEnd"
    />
    <CardAudio
      id="elefante"
      :image="elefanteImage"
      texto="Sonidos del elefante"
      :audio="audioElefante"
      :play="activeId === 'elefante'"
      @update:play="handleUpdatePlay"
      @audio-ended="handleAudioEnd"
    />
    <CardAudio
      id="guaca"
      :image="guacaImage"
      texto="Sonidos de la guacamaya"
      :audio="audioGuaca"
      :play="activeId === 'guaca'"
      @update:play="handleUpdatePlay"
      @audio-ended="handleAudioEnd"
    />
  </div>
</template>
