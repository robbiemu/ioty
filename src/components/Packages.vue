<template>
  <div id="packages">
    <h1>Packages</h1>
    <ul>
      <li v-for="package in packages.packages"><app-package v-bind:package="package" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Package from './POJOs/Package.vue'

export default {
  computed: mapState(['packages']),
  components: {
    appPackage: Package
  }
}
</script>
