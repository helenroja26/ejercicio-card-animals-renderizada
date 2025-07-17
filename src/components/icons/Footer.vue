<template>
  <footer class="app-footer">
    &copy; {{ new Date().getFullYear() }} Animal Sounds &mdash; Contacto: info@animalsounds.com
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-footer {
  position: fixed;
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 0.5rem;
}
</style>