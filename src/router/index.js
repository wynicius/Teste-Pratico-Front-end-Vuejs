import { createRouter, createWebHistory } from 'vue-router';
import AppEditarContato from "../components/AppEditarContato.vue";
import AppExcluirContato from "../components/AppExcluirContato.vue";
import AppCriarContato from "../components/AppCriarContato.vue";
import AppDashboard from '../components/AppDashboard.vue';
import AppCadastro from '../components/AppCadastro.vue';
import AppEntrar from '../components/AppEntrar.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppEntrar
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AppDashboard
  },
  {
    path: "/editarContato/:id",
    name: "editarContato",
    component: AppEditarContato
  },
  {
    path: "/excluirContato/:id",
    name: "excluirContato",
    component: AppExcluirContato
  },
  {
    path: "/criarContato",
    name: "criarContato",
    component: AppCriarContato
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: AppCadastro
  },
  {
    path: "/entrar",
    name: "entrar",
    component: AppEntrar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
