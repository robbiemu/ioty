import Vue from 'vue'
import Vuex from 'vuex'

import shapes from './shapes'
import packages from './packages'
import iotds from './iotds'

import dummy_data from './dummy_data'

Vue.use(Vuex)

let store = new Vuex.Store({modules: {shapes, packages, iotds}})

store.dispatch('commitSet_shapes', dummy_data.shapes)
store.dispatch('commitSet_iotds', dummy_data.iotds)
store.dispatch('commitSet_packages', dummy_data.packages)

export default store
