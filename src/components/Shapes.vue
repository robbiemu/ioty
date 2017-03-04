<template>
  <div id="shapes">
    <h1>Shapes</h1>
    <ul>
      <li v-for="shape in shapes">
        <app-shape v-bind:render="false" v-bind:shape="shape" v-bind:admin="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Shape from './POJOs/Shape.vue'

export default {
  computed: mapState({shapes: state => state.shapes.shapes}),
  components: {
    appShape: Shape
  }
}
</script>
