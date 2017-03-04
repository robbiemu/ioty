<template>
  <div class="package panel panel-default">
    <div class="panel-heading">IOT Device</div>
    <div class="panel-body" v-if="admin">
      <div class="form-group">
        <label for="Name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="device.name">
      </div>
      <div class="form-group">
        <label for="Name">Symbols:</label>
        <input type="text" class="form-control" id="symbols" v-model="device.symbols">
      </div>
    </div>
    <div class="panel-body" v-else>
      <h3>Name: {{device.name}}</h3>
      <p>Symbols: {{device.symbols}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['device', 'admin']
}
</script>
