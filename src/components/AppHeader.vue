<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" speechify-initial-font-size="16px">
    <div class="container-fluid" >
      <router-link :to="'/'" class="navbar-brand" speechify-initial-font-size="20px">
        <img src="../assets/blue.png" alt="Logo da Agenda Blue" height="30">
      </router-link>
      <ul class="navbar-nav me-auto" >
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link active">
            Home
          </router-link>
        </li>
        <li class="nav-item" id="criarContatoRoute">
          <router-link :to="'/criarContato'" class="nav-link active">
            Criar Contato
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" >
          <router-link :to="'/entrar'" class="nav-link active" v-if="!isAuthenticated" >
            Entrar
          </router-link>
          <span class="nav-link pb-0" v-else>
            {{ nomeDeUsuario }}
          </span>
        </li>
        <li class="nav-item" id="m-cadastro" >
          <router-link :to="'/cadastro'" class="nav-link active" v-if="!isAuthenticated">
            Cadastrar-se
          </router-link>
          <router-link :to="'/entrar'" class="nav-item pb-0" v-else>
            <button class="nav-link btn"
              @click="logout">
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
      nomeDeUsuario: localStorage.getItem('nomeDeUsuario') ?? "", // substitua por seu próprio valor
    };
  },
  computed: {
    isAuthenticated() {
      // Verifique a existência do token JWT para determinar se o usuário está autenticado
      return !!localStorage.getItem('jwt');
    },
  },
  methods: {
    logout() {
      // Remova o token JWT do local storage
      localStorage.removeItem('jwt');
      localStorage.removeItem('nomeDeUsuario');
      localStorage.removeItem('email');
      // Redirecione o usuário para a página de login
      this.$router.push('/entrar');
    },
  },
  
};
</script>

<style>
  @media (max-width: 600px) {
    #criarContatoRoute{
      display: none;
    }
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