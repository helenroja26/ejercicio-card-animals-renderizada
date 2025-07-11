<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isPlaying: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggle'])

const onClick = (event: Event) => {
  event.stopPropagation()
  emit('toggle')
}
</script>

<template>
  <button class="audio-button" @click="onClick" :aria-label="isPlaying ? 'Pause audio' : 'Play audio'">
    <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="audio-icon">
      <path d="M8 5v14l11-7z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="audio-icon">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  </button>
</template>

<style scoped>
.audio-button {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
}
.audio-button:hover {
  background: #42b983;
  color: white;
}
.audio-icon {
  width: 24px;
  height: 24px;
}
</style>
