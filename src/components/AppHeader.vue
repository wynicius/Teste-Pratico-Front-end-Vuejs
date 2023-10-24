<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" speechify-initial-font-size="16px">
    <div class="container-fluid" speechify-initial-font-size="16px">
      <router-link :to="'/'" class="navbar-brand" speechify-initial-font-size="20px">
        <img src="../assets/blue.png" alt="Logo da Agenda Blue" height="30">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" speechify-initial-font-size="20px">
        <span class="navbar-toggler-icon" speechify-initial-font-size="20px"></span>
      </button>
      <ul class="navbar-nav me-auto" speechify-initial-font-size="16px">
        <li class="nav-item"  speechify-initial-font-size="16px">
          <router-link :to="'/'" class="nav-link active" speechify-initial-font-size="16px">
            Home
          </router-link>
        </li>
        <li class="nav-item" speechify-initial-font-size="16px">
          <router-link :to="'/criarContato'" class="nav-link active" speechify-initial-font-size="16px">
            Criar Contato
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>