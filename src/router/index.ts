import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DetalleCard from '@/views/DetalleCard.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detalle/:id', component: DetalleCard },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
