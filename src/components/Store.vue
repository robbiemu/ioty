<template>
  <div id="store">
    <h1>Store</h1>
    <app-store-shapes />
    <div id="configuration-drop" class="col-xs-10 col-xs-offset-1"
      @drop="drop($event)" @dragover="allowDrop($event)">
        <div v-for="shape in configuration" draggable="true" @dragend="dragEnd(shape, $event)">
          <app-shape parent="#configuration-drop > div" v-bind:render="true" v-bind:shape="shape" :key="shape.id" />
        </div>
    </div>
    <app-offer :configuration="configuration" />
    <div>
      <h2>per-Purchase actions</h2>
      <button class="btn btn-primary">administrate tree</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Shape from '../components/POJOs/Shape.vue'
import StoreShapes from './StoreShapes.vue'
import Offer from './Offer.vue'

export default {
  computed: {
    ...mapState({shapes: state => state.shapes.shapes}),
    ...mapState(['configuration'])
  },
  methods: {
    dragEnd (shape, ev) {
      console.log('removing ' + this.configuration[this.configuration.findIndex(s => s.id === shape.id)].name)
      this.$store.dispatch('REMOVE FROM CONFIGURATION', shape)
      console.log(this.configuration, this.$store)
    },
    drop(ev) {
      const id = ev.dataTransfer.getData('target')
      const shape = this.shapes.find(s => s.id === id)
      this.$store.dispatch('ADD TO CONFIGURATION', shape)
    },
    allowDrop: ev => ev.preventDefault()
  },
  components: {
    appStoreShapes: StoreShapes,
    appShape: Shape,
    appOffer: Offer
  }
}
</script>

<style scoped>
#configuration-drop {
  height: 50vh;
  border: solid thin lightgrey;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: row-reverse;
  align-content: flex-end;
}
</style>
