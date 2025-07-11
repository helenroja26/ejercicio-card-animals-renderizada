<script setup>
import Card from '../components/CardAudio.vue'
import paisajeImage from '../assets/images/paisaje.jpeg'
</script>

<template>
  <div>
    <Card
      :image="paisajeImage"
      texto="Sonidos de la naturaleza"
      audio="/audio/melody-of-nature.mp3"></Card>
  </div>
</template>