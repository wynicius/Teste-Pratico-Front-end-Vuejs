<template>
    <div class="container">
        <AppHeader />
        <div class="d-flex flex-column align-items-center" style="height: 100vh;">
            <div class="container shadow border-0 mt-4">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="text-white py-2">Criar Contato</h2>
                        </div>
                    </div>
                </div>
                <form class="row p-4">
                    <div class="border p-3">
                        <div class="form-group col-md-12">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" v-model="nome" name="nome" id="nome" placeholder="Nome Completo" />
                        </div>
                        <div class="form-group col-md-12">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="E-mail" />
                        </div>
                        <div class="form-group col-md-12">
                            <label for="telefone">Telefone</label>
                            <input type="tel" class="form-control" v-model="telefone" name="telefone" id="telefone" placeholder="Telefone" />
                        </div>
                    </div>
                    <button type="button" @click="criarContato()" class="btn btn-success mt-3 p-2">
                        Salvar na Agenda
                    </button>
                </form>
            </div>
            <AppFooter class="fixed-bottom" />
        </div>
    </div>
</template>

<script>


export default {
    name: 'AppCriarContato',
    data() {
        return {
            nome: '',
            email: '',
            telefone: ''
        }
    },
    methods: {
        criarContato() {
            const dadosContato = {
                nome: this.nome,
                email: this.email,
                telefone: this.telefone
            }
            console.log(dadosContato.nome)
            this.$emit('criarContato', dadosContato)
            this.resetarFormulario();
        },
        resetarFormulario() {
            this.nome = '';
            this.email = '';
            this.telefone = '';
        }
    }
}
</script>
