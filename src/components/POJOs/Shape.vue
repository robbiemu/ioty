<template>
  <div class="Shape" :id="'shape_'+shape.id">
    <div class="package panel panel-default" v-if="!render">
      <div class="panel-heading">Shape</div>
      <div class="panel-body" v-if="admin">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="shape.name">
        </div>
        <div class="form-group">
          <label for="area">Area:</label>
          <input type="text" class="form-control" id="area" v-model="shape.area">
        </div>
      </div>
      <div class="panel-body" v-else>
        <h3>Name: {{shape.name}}</h3>
        <p>Area: {{shape.area}}</p>
      </div>
    </div>
    <div class="render" v-else>
      {{shape.svg}}
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['shape', 'render', 'parent', 'admin'],
  mounted () {
    if (!this.render)
      return
    let root = this.parent + ' > ' || ''
    document.querySelector(root + '#shape_' + this.shape.id + ' .render')
      .innerHTML = this.shape.svg
  }
}
</script>
