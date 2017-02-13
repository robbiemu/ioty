<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
      appHeader: Header
  }
}
</script>

<style>
</style>
