<template>
  <div id="shapes">
    <h2>Shapes</h2>
    <div class="palette col-xs-10 col-xs-offset-1">
      <div v-for="shape in shapes" draggable="true" @dragstart="drag(shape, $event)">
        <app-shape v-bind:render="true" parent=".palette > div" v-bind:shape="shape" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Shape from './POJOs/Shape.vue'

export default {
  computed: mapState({ shapes: state => state.shapes.shapes }),
  methods: {
    drag: (shape, ev) => ev.dataTransfer.setData('target', shape.id)
  },
  components: {
    appShape: Shape
  }
}
</script>

<style scoped>
#shapes .palette {
  display: flex;
  flex-direction: row;
  margin: 1.5rem;
  background-color: whitesmoke;
}
#shapes .palette > div {
  margin: 1rem;
}
</style>
