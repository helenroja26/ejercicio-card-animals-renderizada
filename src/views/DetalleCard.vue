<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import cards from '@/data/cards.json'

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id?.toString() ?? '')

const card = computed(() => cards.find((c) => c.id === id.value))

watch(
  id,
  (newId) => {
    if (!cards.some((c) => c.id === newId)) {
      router.replace('/404')
    }
  },
  { immediate: true },
)
</script>

<template>
  <div v-if="card" class="detalle-container">
    <h1>{{ card.text }}</h1>
    <img :src="card.image" :alt="card.id" class="detalle-img" />
    <div class="detalle-description"><p >{{ card.description }}</p></div>
  </div>
  <div v-else>
    <p>La tarjeta no existe o no se encontró.</p>
  </div>
  <div>
  <nav class="home-link"><br><br>
    <RouterLink to="/" >Regresar a Home</RouterLink>
  </nav>
  </div>

</template>

<style scoped>
.detalle-container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 3rem;
  justify-items: center;
  max-width: 1600px;
  justify-content: center;
}

.detalle-img {
  width: 400px;
  height: 400px;
  border-radius: 4px;
  position: center;
  border-color: darkslateblue;
  box-shadow: 0 0 0 2px;
}
.detalle-description {
  position: center;
  background-color: lightslategrey;
  width: 400px;
  height: 400px;
  object-fit: cover;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 700;

}
.home-link {
  padding: 3rem;
  gap: 3rem;
  border-width: 1px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
}
@media (max-width: 1100px) {
  .detalle-container {
    grid-template-columns: 1fr;
    max-width: 98vw;
    padding-top: 80px;
    padding-bottom: 50px;
  }
}

@media (max-width: 700px) {
  .detalle-container {
    grid-template-columns: 1fr;
    max-width: 98vw;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .detalle-img,
  .detalle-description {
    max-width: 95vw;
    width: 100%;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .detalle-img,
  .detalle-description {
    max-width: 99vw;
    font-size: 0.94rem;
    padding: 0.5rem;
    height: 200px;
  }
  .home-link {
    font-size: 1rem;
    padding: 1rem 0 0 0;
  }
}
</style>
