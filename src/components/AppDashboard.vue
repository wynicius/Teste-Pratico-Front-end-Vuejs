<template>
  <main>
    <AppHeader />
    <main class="container">
      <section class="row">
        <article class="col-md-12">
          <AppContatos v-if="contatos.length" :contatos="contatos" />
        </article>
      </section>
    </main>
  </main>
</template>

<script>
import AppContatos from './AppContatos.vue'
import { getTodosContatos } from '../services/AgendaServices'
import AppHeader from './AppHeader.vue'

export default {
  name: 'AppDashboard',
  components: {
    AppContatos,
    AppHeader
  },
  data() {
    return {
      contatos: [],
      numeroDeContatos: 0
    }
  },
  async mounted() {
    await this.getContatos()
  },
  methods: {
    async getContatos() {
      this.contatos = await getTodosContatos()
      this.numeroDeContatos = this.contatos.length
    },
  }
}
</script>