<template>
  <div>
    <AppHeader />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <AppCriarContato @criarContato="contatoCriar" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <AppDisporContatos :numeroDeContatos="numeroDeContatos" @getTodosContatos="getContatos()" />
        </div>
        <div class="col-md-12">
          <div class="row">
            <AppContatos v-if="contatos.length > 0" :contatos="contatos" />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>


<script>
import AppCriarContato from './AppCriarContato.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppDisporContatos from './AppDisporContatos.vue'
import AppContatos from './AppContatos.vue'
import { getTodosContatos, criarContato } from '../services/AgendaServices'

export default {
  name: 'AppDashboard',
  components: {
    AppHeader,
    AppFooter,
    AppCriarContato,
    AppDisporContatos,
    AppContatos
  },
  data() {
    return {
      contatos: [],
      numeroDeContatos: 0
    }
  },
  mounted() {
    this.getContatos()
  },
  methods: {
    async getContatos() {
      const contatos = await getTodosContatos()
      this.contatos = contatos
      this.numeroDeContatos = contatos.length
    },
    async contatoCriar(contato) {
      await criarContato(contato)
      this.getContatos()
    }
  }
}
</script>