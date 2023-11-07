<template>
    <AppHeader />
    <div class="container">
        <div class="d-flex flex-column align-items-center pb-4">
            <div class="container shadow border-0 mt-4 mb-5 px-0">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="col-12 text-center">
                        <h2 class="text-white py-2">Registre-se</h2>
                    </div>
                </div>
                <form class="p-4">
                    <div class="border p-3 pb-0 mb-2">
                        <div class="row">
                            <div class="form-group col-lg-6 mb-3">
                                <label>Nome: </label>
                                <input
                                    type="text"
                                    class="form-control my-2"
                                    v-model="nome"
                                    name="nome"
                                    id="nome"
                                    minlength="3"
                                    maxlength="50"
                                    placeholder="nome de usuário"
                                />
                            </div>
                            <div class="form-group col-lg-6 mb-3">
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
                            <div class="form-group col-lg-6 mb-3">
                                <label>Telefone: </label>
                                <input
                                    type="text"
                                    class="form-control my-2"
                                    v-model="telefone"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="telefone"
                                    @input="validarTelefoneInput"
                                />
                            </div>
                            <div v-if="isAuthenticated && role === 'administrador'" class="form-group col-lg-6 mb-3">
                                <label>Tipo de usuário: </label>
                                <select v-model="role" class="form-select my-2">
                                    <option value="administrador">Administrador</option>
                                    <option value="usuario">Usuário</option>
                                </select>
                            </div>
                            <div v-else class="form-group col-lg-6 mb-3">
                                <label v-if="isAuthenticated && role === 'administrador'">
                                        Tipo de usuário:
                                </label>
                                <div v-if="!isAuthenticated">
                                    <label v-if="!isAuthenticated">
                                        Tipo de usuário: 
                                    </label>
                                    <select v-model="role" class="form-select my-2" value="usuario">
                                        <option>Usuário</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-lg-6 mb-3">
                                <label>Senha: </label>
                                <input
                                    type="password"
                                    class="form-control my-2"
                                    v-model="senha"
                                    name="senha"
                                    id="senha"
                                    minlength="6"
                                    maxlength="20"
                                    placeholder="senha"
                                />
                            </div>
                            <div class="form-group col-lg-6 mb-3">
                                <label>Confirmar Senha: </label>
                                <input
                                    type="password"
                                    class="form-control my-2"
                                    v-model="confirmarSenha"
                                    name="confirmarSenha"
                                    id="confirmarSenha"
                                    minlength="6"
                                    maxlength="20"
                                    placeholder="confirmar senha"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        @click="PreDadosCadastro()"
                        class="btn btn-success py-2"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { cadastrarUsuario } from "../services/UsuarioServices";
import { validarTelefone } from "../validations/validations.js";

import AppHeader from './AppHeader.vue'

export default {
    name: "AppCadastro",
    components: {
        AppHeader,
    },
    data() {
        return {
            nomeDeUsuario: "",
            email: "",
            senha: "",
            confirmarSenha: "",
            telefone: "",
            role: localStorage.getItem('role')
        };
    },
    computed: {
      isAuthenticated() {
        return !!localStorage.getItem('jwt');
      },
    },
    methods: {
        validarTelefoneInput() {
            this.telefone = validarTelefone(this.telefone);
        },
        validarFormulario() {
            if (!this.nome || !this.email || !this.senha || !this.confirmarSenha || !this.telefone) {
                alert("Por favor, preencha todos os campos.");
                return false;
            }
            if (this.senha !== this.confirmarSenha) {
                alert("As senhas não coincidem.");
                return false;
            }
            return true;
        },
        PreDadosCadastro() {
            if (!this.validarFormulario()) {
                return;
            }
            const dadosUsuario = {
                id: null,
                nomeDeUsuario: this.nome,
                email: this.email,
                senha: this.senha,
                telefone: this.telefone,
                role: this.role,
            };
            cadastrarUsuario(dadosUsuario).then((res) => {
                console.log("res:::", res);
                this.$router.push({ name: "home" });
            });
        },
    },
};
</script>
