<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <div class="container shadow border-0 mt-4 mb-5 px-0">
                <div class="card-header bg-primary bg-gradient ml-0 py-3">
                    <div class="col-12 text-center">
                        <h2 class="text-white py-2">Login</h2>
                    </div>
                </div>
                <form class="p-4">
                    <div class="border p-3 mb-3">
                        <div class="form-group col-md-12">
                            <label>Email: </label>
                            <input
                                type="email"
                                class="form-control my-2"
                                v-model="email"
                                name="email"
                                id="email"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div class="form-group col-md-12">
                            <label>Senha: </label>
                            <input
                                type="password"
                                class="form-control my-2"
                                v-model="senha"
                                name="senha"
                                id="senha"
                                minlength="6"
                                maxlength="20"
                                placeholder="Senha"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        @click="dadosLogin()"
                        class="btn btn-primary py-2"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { fazerLogin } from "../services/AuthServices";

export default {
    name: "AppEntrar",
    data() {
        return {
            email: "",
            senha: "",
        };
    },
    methods: {
        dadosLogin() {
          const dadosAcesso = {
            email: this.email,
            senha: this.senha,
          };
          fazerLogin(dadosAcesso).then((res) => {
            console.log("res:::", res);
            this.$router.push({ name: "home" });
          });
        },
    },
};
</script>

