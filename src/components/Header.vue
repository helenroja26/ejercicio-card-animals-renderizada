<template>
  <header class="app-header">
    <router-link to="/" class="logo-link">
      <img src="/src/assets/images/animals.jpeg" alt="logo" class="logo-img" />
      <div>
        <div class="logo-title">ANIMAL SOUNDS</div>
        <div class="logo-subtitle">Sonidos de Animales</div>
      </div>
    </router-link>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-header {
  width: 100vw;
  height: 80px;
  background: #2c3e50;
  color: white;
  display:flex;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  padding-left: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.logo-link {
  display: flex;
  align-ittems: center;
  gap: 1rem;
}

.logo-img {
  width: 120px;
  height: 70px;
  display: block;
}

.logo-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: lightslategrey;
}

.logo-subtitle {
  font-size: 0.8rem;
  color: #42b983;
}
</style>
