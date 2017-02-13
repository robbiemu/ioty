<template>
  <div id="devices">
    <h1>Devices</h1>
    <ul>
      <li v-for="device in iotds.iotds"><app-device v-bind:device="device" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Device from './POJOs/IOTDevice.vue'

export default {
  computed: mapState(['iotds']),
  components: {
    appDevice: Device
  }
}
</script>
