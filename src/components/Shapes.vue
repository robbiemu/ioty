<template>
  <div id="shapes">
    <h1>Shapes</h1>
    <ul>
      <li v-for="shape in shapes.shapes"><app-shape v-bind:shape="shape" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Shape from './POJOs/Shape.vue'

export default {
  computed: mapState(['shapes']),
  components: {
    appShape: Shape
  }
}
</script>
