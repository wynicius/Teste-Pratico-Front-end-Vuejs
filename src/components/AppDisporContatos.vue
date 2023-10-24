<template>
    <div class="dispor-contatos">
        <h4>Contatos Criados</h4>
        <div class="number">
            {{numeroDeContatos}}
        </div>
        <div class="btn">
            <button @click='getTodosContatos()' type="button" class="btn btn-success">
                Ver lista de contatos
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppDisporContatos',
        props: ['numeroDeContatos'],
        methods: {
            getTodosContatos() {
                this.$emit('getTodosContatos')
            }
        }
    }
</script>