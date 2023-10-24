<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-primary header py-1 " data-bs-theme="dark">
            <div class="container-fluid">
                <router-link to="/" style="text-decoration: none"><a class="navbar-brand">Agenda Blue</a></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                    </ul>
                    <!-- <Login /> -->
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

    export default {
        name: 'AppHeader',

    }
</script>