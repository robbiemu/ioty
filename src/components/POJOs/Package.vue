<template>
<div class="package panel panel-default">
  <div class="panel-heading">Package</div>
  <div class="panel-body" v-if="admin">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" v-model="package.name">
    </div>
    <div class="form-group">
      <label for="cost">Cost:</label>
      <input type="number" class="form-control" id="cost" v-model="package.cost">
    </div>
    <div class="form-group">
      <label for="add">Add device</label>
      <select id="add" class="form-control" @change="addDevice($event.target.value)">
        <option selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
        <option v-for="(device, index) in iotds" v-if="package.solution.indexOf(device)===-1"
          :value="index">{{device.name}} - {{device.symbols}}</option>
      </select>
    </div>
    <ul>
      <li v-for="device in package.solution">
        <span class="delete" @click="deleteDevice(device)">❌</span>
        <app-iot-device :device="device" />
      </li>
    </ul>
  </div>
  <div class="panel-body" v-else>
    <h3>{{package.name}} <small>Cost {{package.cost}}</small></h3>
    <ul>
      <li v-for="device in package.solution"><app-iot-device :device="device" /></li>
    </ul>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

import IOTDevice from './IOTDevice.vue'

export default {
  props: ['package', 'admin'],
  computed: mapState({ iotds: state => state.iotds.iotds }),
  methods: {
    deleteDevice (device) {
      this.package.solution.splice(this.package.solution.indexOf(device),1)
    },
    addDevice (index) {
      this.package.solution.push(this.iotds[index])
    }
  },
  components: {
    'app-iot-device': IOTDevice
  }
}
</script>

<style scoped lang="scss">
h3 {
  small { font-variant: small-caps; }
}
.delete {
  cursor: pointer;
  user-select: none;
}
</style>
