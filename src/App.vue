<template>
  <div>
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>