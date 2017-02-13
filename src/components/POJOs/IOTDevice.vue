<template>
  <div class="package panel panel-default">
    <div class="panel-heading">IOT Device</div>
    <div class="panel-body">
      <h3>Name: {{device.name}}</h3>
      <p>Symbols: {{device.symbols}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['device']
}
</script>
