<template>
<div class="package panel panel-default">
  <div class="panel-heading">Package</div>
  <div class="panel-body">
    <h3>{{package.name}}</h3>
    <ul>
      <li v-for="device in package.collection"><app-iot-device :device="device" /></li>
    </ul>
  </div>
</div>
</template>

<script>
import IOTDevice from './IOTDevice.vue'

export default {
  props: ['package'],
  components: {
    'app-iot-device': IOTDevice
  }
}
</script>
