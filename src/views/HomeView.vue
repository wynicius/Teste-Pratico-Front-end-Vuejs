<template>
  <div class="home">
    <AppHeader />
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader
  }
}
</script>
