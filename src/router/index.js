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
    component: AppEntrar,
    beforeEnter: (to, from, next,) => {
      const isAuthenticated = !!localStorage.getItem('jwt');
      if (!isAuthenticated) {
        next();
      } else {
        next('/dashboard');
      }
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AppDashboard,
    beforeEnter: (to, from, next) => {
      // Verifique a existência do token JWT para determinar se o usuário está autenticado
      const isAuthenticated = !!localStorage.getItem('jwt');

      if (isAuthenticated) {
        // Se o usuário estiver autenticado, permita o acesso à rota
        next();
      } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        next('/entrar');
      }
    },
  },
  {
    path: "/editarContato/:id",
    name: "editarContato",
    component: AppEditarContato,
    beforeEnter: (to, from, next) => {
      // Verifique a existência do token JWT para determinar se o usuário está autenticado
      const isAuthenticated = !!localStorage.getItem('jwt');

      if (isAuthenticated) {
        // Se o usuário estiver autenticado, permita o acesso à rota
        next();
      } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        next('/entrar');
      }
    },
  },
  {
    path: "/excluirContato/:id",
    name: "excluirContato",
    component: AppExcluirContato,
    beforeEnter: (to, from, next) => {
      // Verifique a existência do token JWT para determinar se o usuário está autenticado
      const isAuthenticated = !!localStorage.getItem('jwt');

      if (isAuthenticated) {
        // Se o usuário estiver autenticado, permita o acesso à rota
        next();
      } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        next('/entrar');
      }
    },
  },
  {
    path: "/criarContato",
    name: "criarContato",
    component: AppCriarContato,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = !!localStorage.getItem('jwt');

      if (isAuthenticated) {
        next();
      } else {
        next('/entrar');
      }
    },
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: AppCadastro,
      beforeEnter: (to, from, next,) => {
        const isAuthenticated = !!localStorage.getItem('jwt');
        if (!isAuthenticated || localStorage.getItem('role') == 'administrador') {
          next();
        } else {
          next('/dashboard');
        }
    },
  },
  {
    path: "/entrar",
    name: "entrar",
    component: AppEntrar,
    beforeEnter: (to, from, next,) => {
      const isAuthenticated = !!localStorage.getItem('jwt');
      if (!isAuthenticated) {
        next();
      } else {
        next('/dashboard');
      }
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
