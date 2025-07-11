<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'
import AudioButton from './icons/AudioButton.vue'

const props = defineProps({
  id: { type: String, required: true },
  image: { type: String, required: false, default: '' },
  texto: { type: String, required: true },
  audio: { type: String, required: true },
  play: { type: Boolean, required: false, default: false }
})

const emit = defineEmits(['update:play', 'audio-ended'])
const isActive = ref(false)
const audioElement = ref<HTMLAudioElement | null>(null)

// Observa cambios en la prop play para iniciar o detener el audio
watch(() => props.play, (newVal) => {
  if (newVal && audioElement.value) {
    audioElement.value.currentTime = 0
    audioElement.value.play()
    isActive.value = true
  } else if (audioElement.value && !newVal) {
    audioElement.value.pause()
    isActive.value = false
  }
})

// Función para alternar reproducción al hacer click en el botón
const toggleAudio = () => {
  if (!audioElement.value) return

  if (isActive.value) {
    audioElement.value.pause()
    audioElement.value.currentTime = 0
    isActive.value = false
    emit('update:play', { id: props.id, value: false })
  } else {
    audioElement.value.play()
    isActive.value = true
    emit('update:play', { id: props.id, value: true })
  }
}

// Función que se ejecuta cuando termina el audio
const onAudioEnd = () => {
  isActive.value = false
  emit('update:play', { id: props.id, value: false }) // informar al padre que terminó
  emit('audio-ended')
}
</script>

<template>
  <div class="card" :class="{ 'card-active': isActive }">
    <div class="card-content">
      <div class="image-wrapper" style="position: relative;">
        <img :src="image" :alt="texto" class="card-image" />
        <AudioButton :isPlaying="isActive" @toggle="toggleAudio" />
      </div>
      <p class="card-text">{{ texto }}</p>
    </div>
    <audio ref="audioElement" :src="audio" preload="auto" @ended="onAudioEnd" />
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  transition: all 0.3s ease;
}

.card-content {
  position: relative;
}

.card:hover {
  //transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-active {
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.3);
}

.card-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.card-text {
  margin: 12px 0;
  font-size: 1.1em;
  color: #2c3e50;
}

.audio-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.audio-button:hover {
  transform: scale(1.1);
  background: #42b983;
  color: white;
}

.audio-button.playing {
  background: #42b983;
  color: white;
  animation: pulse 2s infinite;
}

.audio-icon {
  width: 24px;
  height: 24px;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 185, 131, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(66, 185, 131, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 185, 131, 0);
  }
}
</style>