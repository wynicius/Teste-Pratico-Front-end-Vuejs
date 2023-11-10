<template>
    <AppHeader />
    <main class="container ">
        <div class="d-flex flex-column align-items-center">
            <div class="container shadow border-0 mt-4 px-0">
                <section class="card-header bg-primary bg-gradient ml-0 py-3">
                    <aside class="col-12 text-center">
                        <h2 class="text-white py-2">Criar Contato</h2>
                    </aside>
                </section>
                <form class="p-4">
                    <section class="border p-3 mb-3">
                        <section class="form-group col-md-12">
                            <label class="form-control border-0">Nome: 
                                <input
                                    type="text"
                                    class="form-control my-2"
                                    v-model="nome"
                                    name="nome"
                                    id="nome"
                                    minlength="3"
                                    maxlength="50"
                                    placeholder="Nome Completo"
                                />
                            </label>
                        </section>
                        <section class="form-group col-md-12">
                            <label class="form-control border-0">Email: 
                                <input
                                    type="email"
                                    class="form-control my-2"
                                    v-model="email"
                                    name="email"
                                    id="email"
                                    placeholder="email@email.com"
                                />
                            </label>
                        </section>
                        <section class="form-group col-md-12">
                            <label class="form-control border-0">Telefone: 
                                <input
                                    type="text"
                                    class="form-control my-2"
                                    v-model="telefone"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="Telefone"
                                    @input="validarTelefoneInput"
                                />
                            </label>
                        </section>
                    </section>
                    <button
                        type="submit"
                        @click="formatarDadosContato()"
                        class="btn btn-success py-2 px-5"
                    >
                        Salvar na Agenda
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { criarContato } from "../services/AgendaServices";
import { validarTelefone } from "../validations/validations.js";
import AppHeader from './AppHeader.vue'

export default {
    name: "AppCriarContato",
    components: {
        AppHeader,
    },
    data() {
        return {
            nome: "",
            email: "",
            telefone: "",
        };
    },
    methods: {
        validarTelefoneInput() {
            this.telefone = validarTelefone(this.telefone);
        },
        formatarDadosContato() {
            const dadosContato = {
                id: this.id,
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
            };
            criarContato(dadosContato).then((res) => {
                console.log("res:::", res);
                this.$router.push({ name: "dashboard" });
            });
        },
    },
};
</script>
