<template>
    <AppHeader />
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <div class="container shadow border-0 mt-4 px-0">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="col-12 text-center">
                        <h2 class="text-white py-2">Criar Contato</h2>
                    </div>
                </div>
                <form class="p-4">
                    <div class="border p-3 mb-3">
                        <div class="form-group col-md-12">
                            <label>Nome: </label>
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
                        </div>
                        <div class="form-group col-md-12">
                            <label>Email: </label>
                            <input
                                type="email"
                                class="form-control my-2"
                                v-model="email"
                                name="email"
                                id="email"
                                placeholder="email@email.com"
                            />
                        </div>
                        <div class="form-group col-md-12">
                            <label>Telefone: </label>
                            <input
                                type="text"
                                class="form-control my-2"
                                v-model="telefone"
                                name="telefone"
                                id="telefone"
                                placeholder="Telefone"
                                @input="validarTelefoneInput"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        @click="formatarDadosContato()"
                        class="btn btn-success py-2"
                    >
                        Salvar na Agenda
                    </button>
                </form>
            </div>
        </div>
    </div>
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
                this.$router.push({ name: "home" });
            });
        },
    },
};
</script>
