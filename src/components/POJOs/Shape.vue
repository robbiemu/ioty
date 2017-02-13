<template>
  <div class="package panel panel-default">
    <div class="panel-heading">Shape</div>
    <div class="panel-body">
      <h3>Name: {{shape.name}}</h3>
      <p>Area: {{shape.area}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['shape']
}
</script>
