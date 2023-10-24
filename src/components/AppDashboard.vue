<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <AppContatos v-if="contatos.length > 0" :contatos="contatos" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppContatos from './AppContatos.vue'
import { getTodosContatos } from '../services/AgendaServices'

export default {
  name: 'AppDashboard',
  components: {
    AppContatos,
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
  }
}
</script>