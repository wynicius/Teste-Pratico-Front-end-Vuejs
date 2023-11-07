<template>
  <div class="container">
    <div class="d-flex flex-column align-items-center" style="height: 100vh">
      <div class="container shadow border-0 mt-4 px-0">
        <div class="card-header bg-primary bg-gradient ml-0 py-3">
          <div class="col-12 text-center">
            <h2 class="text-white py-2">Agenda de Contatos</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center p-3">
          <div>
            <router-link :to="'/criarContato/'" class="btn btn-success">
              Criar novo contato
            </router-link>
          </div>
        </div>
      </div>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Ordem</th>
            <th scope="col">Nome Completo</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in contatos" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nome }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.telefone }}</td>
            <td>
              <router-link :to="'/editarContato/' + item.id" class="btn btn-warning">
                Editar
              </router-link>
            </td>
            <td>
              <router-link :to="'/excluirContato/' + item.id" class="btn btn-danger">
                Excluir
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContatos',
  props: ['contatos']
};
</script>
