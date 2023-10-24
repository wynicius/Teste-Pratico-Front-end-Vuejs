<template>
    <div class="excluir">
        <AppHeader />
        <div class="d-flex flex-column align-items-center" style="height: 100vh;">
            <div class="container shadow border-0 mt-4">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="text-white py-2">Excluir Contato</h2>
                        </div>
                    </div>
                </div>
                <form class="row p-4">
                    <div class="border p-3">
                        <div class="form-group col-md-12">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" v-model="nome" name="nome" id="nome" placeholder="Nome Completo" disabled/>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="E-mail" disabled/>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="telefone">Telefone</label>
                            <input type="tel" class="form-control" v-model="telefone" name="telefone" id="telefone" placeholder="Telefone" disabled/>
                        </div>
                    </div>
                    <button type="button" @click="excluirDadosContato()" class="btn btn-danger">
                        Excluir Contato
                    </button>
                </form>
            </div>
            <AppFooter class="fixed-bottom" />
        </div>
    </div>
</template>
  
<script>
    import { listarContato, excluirContato } from '../services/AgendaServices'
    import AppFooter from './AppFooter.vue'
    import AppHeader from './AppHeader.vue'

    export default {
        name: 'AppExcluirContato',
        props: ['contato'],
        components: {
            AppFooter,
            AppHeader
        },
        data() {
            return {
                nome: '',
                email: '',
                telefone: ''
            }
        },
        mounted() {
            this.obterDadosContato(this.$route.params.id)
            
        },
        methods: {
            obterDadosContato(id) {
                listarContato(id).then(res => {
                    this.id = res.id;
                    this.nome = res.nome;
                    this.email = res.email;
                    this.telefone = res.telefone;
                })
            },
            excluirDadosContato() {
                excluirContato(this.$route.params.id).then(res => {
                    console.log('res:::', res);
                    this.$router.push({ name: "home" });
                });
            }
        }
    }
</script>