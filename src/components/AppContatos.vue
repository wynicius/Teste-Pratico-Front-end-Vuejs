<template>
    <div class="container">
        <h2>Agenda de Contatos</h2>
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
                    <td  speechify-initial-font-size="16px">{{ index + 1 }}</td>
                    <td  speechify-initial-font-size="16px">{{ item.nome }}</td>
                    <td  speechify-initial-font-size="16px">{{ item.email }}</td>
                    <td  speechify-initial-font-size="16px">{{ item.telefone }}</td>
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
</template>

<script>

export default {
    name: 'AppContatos',
    props: ['contatos'],
}
</script>