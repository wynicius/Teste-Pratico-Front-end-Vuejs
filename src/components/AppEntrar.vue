<template>
    <AppHeader />
    <main class="container">
        <div class="d-flex flex-column align-items-center">
            <div class="container shadow border-0 mt-4 mb-5 px-0">
                <aside class="card-header bg-primary bg-gradient ml-0 py-3">
                    <aside class="col-12 text-center">
                        <h2 class="text-white py-2" >Login</h2>
                    </aside>
                </aside>
                <form class="p-4 container">
                    <section class="container border p-3 mb-3">
                        <section class="form-group col-md-12">
                            <label class="form-control border-0">Email: 
                                <input
                                    type="email"
                                    class="form-control my-2"
                                    v-model="email"
                                    name="email"
                                    id="email"
                                    placeholder="email@example.com"
                                    
                                />
                            </label>
                        </section>
                        <section class="form-group col-md-12">
                            <label class="form-control border-0">Senha: 
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
                            </label>
                        </section>
                    </section>
                    <button
                        class="btn btn-primary py-2 px-5"
                        type="submit"
                        @click="PreDadosLogin()"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { FazerLogin } from "../services/AuthServices";
import { useToast } from 'vue-toastification';
import AppHeader from './AppHeader.vue'

export default {
    name: "AppEntrar",
    components: {
        AppHeader,
    },
    data() {
        return {
            email: "",
            senha: "",
        };
    },
    methods: {
        PreDadosLogin() {
            const dadosAcesso = {
                email: this.email,
                senha: this.senha,
            };
            FazerLogin(dadosAcesso).then((res) => {
                console.log("res:::", res)
                if(res.status == 200){
                    this.BemVindoToast(res.data.usuario);
                    this.$router.push({ name: "dashboard" });
                } else {
                    this.ErroLoginToast(res);
                }
            });
        },
        BemVindoToast(usuario) {
            const toast = useToast();
            toast.success(`Bem vindo, ${usuario.nomeDeUsuario}`,
                { position: "top-right" });
        },
        ErroLoginToast(res) {
            const toast = useToast();
            var multiMsgObj = Object.values(res).length > 1;
            if(multiMsgObj){
                console.log("Email", res.email)
                toast.error(`${res.email[0]} e ${res.senha[0]}`,
                { position: "top-right" });
            } else if (res.email) {
                toast.error(`${res.email[0]}`,
                { position: "top-right" });
            } else if (res.senha) {
                toast.error(`${res.senha[0]}`,
                { position: "top-right" });
            } else {
                toast.error(`${res.message}`,
                { position: "top-right" });
            }
        },
    },
};
</script>