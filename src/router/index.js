import { createRouter, createWebHistory } from 'vue-router'
import AppEditarContato from "../components/AppEditarContato.vue";
import AppExcluirContato from "../components/AppExcluirContato.vue";
import AppDashboard from '../components/AppDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppDashboard
  },
  {
    path: "/editarContato/:id",
    name: "editarContato",
    component: AppEditarContato,
  },
  {
    path: "/excluirContato/:id",
    name: "excluirContato",
    component: AppExcluirContato,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
