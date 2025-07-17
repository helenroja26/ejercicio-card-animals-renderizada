<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
import AudioButton from './icons/AudioButton.vue'
import { useAudioPlayer } from '../composables/useAudioPlayer'

const props = defineProps({
  id: { type: String, required: true },
  image: { type: String, required: false, default: '' },
  text: { type: String, required: true },
  audio: { type: String, required: true },
  play: { type: Boolean, required: false, default: false }
})
const emit = defineEmits(['update:play', 'audio-ended'])
const audioElement = ref<HTMLAudioElement | null>(null)
const { isActive, toggleAudio, onAudioEnd } = useAudioPlayer(
  { play: props.play, id: props.id, audioElement },
  emit
)

</script>

<template>
  <div class="card" :class="{ 'card-active': isActive }">
    <div class="card-content">
      <div class="image-card" style="position: relative;">
        <img :src="image" :alt="text" class="card-image" />
        <AudioButton :isPlaying="isActive" @toggle="toggleAudio" />
      </div>
      <p class="card-text">{{ text }}</p>
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