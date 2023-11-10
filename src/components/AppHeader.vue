<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" speechify-initial-font-size="16px">
    <div class="container-fluid" >
      <router-link v-if="!isAuthenticated" :to="'/'" class="navbar-brand" speechify-initial-font-size="20px">
        <img src="../assets/blue.png" alt="Logo da Agenda Blue" height="30">
      </router-link>
      <ul class="navbar-nav me-auto" >
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link active">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/criarContato'" class="nav-link active" v-if="isAuthenticated" >
            Criar Contato
          </router-link>
          <span v-else>
            
          </span>
        </li>
        <li class="nav-item">
          <router-link :to="'/cadastro'" class="nav-link active" v-if="isAuthenticated && role === 'administrador'" >
            Cadastrar Usuario
          </router-link>
          <span v-else> </span>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" >
          <router-link :to="'/entrar'" class="nav-link active" v-if="!isAuthenticated" >
            Entrar
          </router-link>
          <button class="nav-link pb-0" v-else>
            {{ nomeDeUsuario }}
          </button>
        </li>
        <li class="nav-item" id="m-cadastro" >
          <router-link :to="'/cadastro'" class="nav-link active" v-if="!isAuthenticated">
            Cadastrar-se
          </router-link>
          <router-link :to="'/entrar'" class="nav-item pb-0" style="text-decoration: none;" v-else>
            <button class="nav-link btn"
              @click="Logout">
                Sair
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        nomeDeUsuario: localStorage.getItem('nomeDeUsuario'),
        role : localStorage.getItem('role'),
      };
    },
    computed: {
      isAuthenticated() {
        return !!localStorage.getItem('jwt');
      },
    },
    methods: {
      Logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('nomeDeUsuario');
        localStorage.removeItem('email');

        this.$router.push('/entrar');
        this.checkAuth();
      },
      checkAuth() {
        this.isAuthenticated = !!localStorage.getItem('jwt');
      }
    },
    watch: {
      '$route': 'checkAuth'
    },
    created() {
      this.checkAuth();
    },
  };
</script>

<style>
  @media (max-width: 600px) {
    .navbar-nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
    }
    #m-cadastro{
      margin-left: 10px;
    }
  }
</style>