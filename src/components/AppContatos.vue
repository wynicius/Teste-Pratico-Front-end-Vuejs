<template>
  <div class="container mb-5">
    <div class="d-flex flex-column align-items-center" style="height: 100vh">
      <div class="container shadow border-0 mt-4 px-0">
        <div class="card-header bg-primary bg-gradient ml-0 py-3">
          <div class="col-12 text-center">
            <h2 class="text-white py-2">Agenda de Contatos</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center p-3">
          <div type="button" speechify-initial-font-size="13px">
            <router-link :to="'/criarContato/'" class="btn btn-outline-success">
              Criar novo contato
            </router-link>
          </div>
        </div>
      </div>
      <table class="table table-bordered table-striped" speechify-initial-font-size="16px">
        <thead speechify-initial-font-size="16px">
          <tr speechify-initial-font-size="16px">
            <th scope="col" speechify-initial-font-size="16px">Ordem</th>
            <th scope="col" speechify-initial-font-size="16px">Nome Completo</th>
            <th scope="col" speechify-initial-font-size="16px">Email</th>
            <th scope="col" speechify-initial-font-size="16px">Telefone</th>
            <th scope="col" speechify-initial-font-size="16px">Editar</th>
            <th scope="col" speechify-initial-font-size="16px">Deletar</th>
          </tr>
        </thead>
        <tbody speechify-initial-font-size="16px">
          <tr v-for="(item, index) in contatos" :key="index" speechify-initial-font-size="16px">
            <td speechify-initial-font-size="16px">{{ index + 1 }}</td>
            <td speechify-initial-font-size="16px">{{ item.nome }}</td>
            <td speechify-initial-font-size="16px">{{ item.email }}</td>
            <td speechify-initial-font-size="16px">{{ item.telefone }}</td>
            <td speechify-initial-font-size="16px">
              <router-link :to="'/editarContato/' + item.id" class="btn btn-warning">
                Editar
              </router-link>
            </td>
            <td speechify-initial-font-size="16px">
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
  props: ['contatos'],
};
</script>
