<template>
  <div id="offer">
    <h1>Configured Solution</h1>
    <ul>
      <li v-for="package in solution.packages"><app-package v-bind:package="package" /></li>
      <li v-for="device in solution.iotds"><app-device v-bind:device="device" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Device from './POJOs/IOTDevice.vue'
import Package from './POJOs/Package.vue'
import DecisionTree from './DecisionTree'

export default {
  props: ['configuration'],
  data () {
    return {
      decisionTree: new DecisionTree(),
      solution: { packages: [], iotds: [] }
    }
  },
  computed: {
    ...mapState({iotds: state => state.iotds.iotds}),
    ...mapState({packages: state => state.packages.packages}),
  },
  watch: {
    configuration: function () { this.configureSolution() },
    iotds: function () { this.configureSolution() },
    packages: function () { this.configureSolution() }
  },
  methods: {
    configureSolution () {
      this.decisionTree.iotds = this.iotds
      this.decisionTree.packages = this.packages
      this.decisionTree.configuration = this.configuration
      this.solution = this.decisionTree.recommend()
    }
  },
  components: {
    appDevice: Device,
    appPackage: Package
  }
}
</script>
