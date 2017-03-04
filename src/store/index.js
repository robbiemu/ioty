import Vue from 'vue'
import Vuex from 'vuex'

import shapes from './shapes'
import packages from './packages'
import iotds from './iotds'

import dummy_data from './dummy_data'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    configuration: []
  },
  mutations: {
    deleteFromConfiguration (state, shape) {
      state.configuration.splice(
        state.configuration.findIndex(s => s.id === shape.id),
        1)
    },
    addToConfiguration (state, shape) {
      if(state.configuration.indexOf(shape) === -1)
        state.configuration.push(shape)
    }
  },
  actions: {
    'REMOVE FROM CONFIGURATION': ({commit}, payload) => commit('deleteFromConfiguration', payload),
    'ADD TO CONFIGURATION': ({commit}, payload) => commit('addToConfiguration', payload),
  },
  modules: {shapes, packages, iotds}
})

store.dispatch('commitSet_shapes', dummy_data.shapes)
store.dispatch('commitSet_iotds', dummy_data.iotds)
store.dispatch('commitSet_packages', dummy_data.packages)

export default store
