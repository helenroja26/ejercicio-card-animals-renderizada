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
  max-width: 1600px;
  padding: 80px 50px;
  position:relative;
  align-items: center;
}

.detalle-img {
  width: 400px;
  height: 400px;
  border-radius: 4px;
  border-color: darkslateblue;
  box-shadow: 0 0 0 2px;
}
.detalle-description {
  background-color: lightslategrey;
  width: 400px;
  height: 400px;
  object-fit: cover;
  padding: 20px;
  font-size: 1.8rem;
  font-weight: 700;

}
.home-link {
  padding: 3rem;
  gap: 3rem;
  border-width: 1px;
  display: flex;
  width: 100%;
  font-size: 1.3rem;
}
@media (max-width: 1100px) {
  .detalle-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .detalle-container {
    grid-template-columns: 1fr;
  }
  .detalle-img,
  .detalle-description {
    width: 100%;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .detalle-img,
  .detalle-description {
    font-size: 0.94rem;
  }
  .home-link {
    font-size: 1rem;
    padding: 1rem 0 0 0;
  }
}
</style>
