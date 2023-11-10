<template>
    <AppHeader />
    <main>
        <div class="d-flex flex-column align-items-center" style="">
            <div class="container shadow border-0 mt-4 px-0">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="text-center">
                        <div class="col-12 text-center">
                            <h2 class="text-white py-2">Editar Contato</h2>
                        </div>
                    </div>
                </div>
                <form class="p-4">
                    <div class="border p-3 mb-3">
                        <div class="form-group col-md-12">
                            <label class="form-control border-0">
                                Nome:
                                <input 
                                    type="text" 
                                    class="form-control my-2" 
                                    v-model="nome" 
                                    name="nome" 
                                    id="nome" 
                                    placeholder="Nome Completo"
                                />
                            </label>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="form-control border-0"> 
                                Email: 
                                <input 
                                    type="email" 
                                    class="form-control my-2" 
                                    v-model="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="E-mail" 
                                />
                            </label>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="form-control border-0">
                                Telefone: 
                                <input 
                                    type="tel" 
                                    class="form-control my-2" 
                                    v-model="telefone" 
                                    name="telefone" 
                                    id="telefone" 
                                    placeholder="Telefone" 
                                />
                            </label>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        class="btn btn-primary py-2 px-5"
                        @click="atualizarDadosContato()">
                        Salvar Alterações
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { listarContato, editarContato } from '../services/AgendaServices'
import AppHeader from './AppHeader.vue'

export default {
    name: 'AppEditarContato',
    components: {
        AppHeader
    },
    props: ['contato'],
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
        atualizarDadosContato() {
            const dadosContato = {
                id: this.id,
                nome: this.nome,
                email: this.email,
                telefone: this.telefone
            }
            editarContato(dadosContato).then(res => {
                console.log('res:::', res);
                this.$router.push({ name: "dashboard" });
            });
        }
    }
}
</script>