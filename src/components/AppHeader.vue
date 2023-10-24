<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" speechify-initial-font-size="16px">
        <div class="container-fluid"  speechify-initial-font-size="16px">
          <a class="navbar-brand" href="#" speechify-initial-font-size="20px">Agenda Blue</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"  speechify-initial-font-size="20px">
            <span class="navbar-toggler-icon"  speechify-initial-font-size="20px"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01"  speechify-initial-font-size="16px">
            <ul class="navbar-nav me-auto"  speechify-initial-font-size="16px">
              <li class="nav-item"  speechify-initial-font-size="16px">
                <router-link :to="'/'" class="nav-link active" speechify-initial-font-size="16px">
                  Agenda
              </router-link>
              </li>
              <li class="nav-item"  speechify-initial-font-size="16px">
                <router-link :to="'/criarContato'" class="nav-link active" speechify-initial-font-size="16px">
                  Criar Contato
              </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>

    export default {
        name: 'AppHeader',

    }
</script>