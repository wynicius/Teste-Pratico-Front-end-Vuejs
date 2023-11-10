<template>
    <AppHeader />
    <main>
        <div class="d-flex flex-column align-items-center pb-4">
            <div class="container shadow border-0 mt-4 mb-5 px-0">
                <aside class="card-header bg-primary bg-gradient ml-0 py-3">
                    <aside class="col-12 text-center">
                        <h2 class="text-white py-2">Registre-se</h2>
                    </aside>
                </aside>
                <form class="p-4">
                    <section class="container d-flex border p-3 pb-0 mb-3">
                        <section class="container form-group col-lg-6 mb-3">
                            <label class="form-control border-0">Nome: 
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
                            </label>
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
                            <label class="form-control border-0">Telefone: 
                                <input
                                    type="text"
                                    class="form-control my-2"
                                    v-model="telefone"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="telefone"
                                    @input="validarTelefoneInput"
                                />
                            </label>
                        </section>
                        <section class="container form-group col-lg-6 mb-3">
                            <label class="form-control border-0">Tipo de usuário:
                                <select v-model="role" class="form-select my-2">
                                    <option 
                                    v-if="isAuthenticated && role === 'administrador'" 
                                    value="administrador">
                                        Administrador
                                    </option>
                                    <option value="usuario">Usuário</option>
                                </select>
                            </label>
                            <label class="form-control border-0">Senha: 
                                <input
                                    type="password"
                                    class="form-control my-2"
                                    v-model="senha"
                                    name="senha"
                                    id="senha"
                                    minlength="6"
                                    maxlength="20"
                                    placeholder="no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial"
                                />
                            </label>
                            <label class="form-control border-0">Confirmar Senha: 
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
                            </label>
                        </section>
                    </section>
                    <button
                        class="btn btn-success py-2 px-5"
                        type="submit"
                        @click="PreDadosCadastro()">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    </main>
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
