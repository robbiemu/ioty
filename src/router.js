
import Vue from 'vue'
import VueRouter from 'vue-router'

import Store from './components/Store.vue'
import IOTDevice from './components/POJOs/IOTDevice.vue'
import Package from './components/POJOs/Package.vue'
import Shape from './components/POJOs/Shape.vue'
import Devices from './components/Devices.vue'
import Packages from './components/Packages.vue'
import Shapes from './components/Shapes.vue'

Vue.use(VueRouter)

export const routes = [
  { path: '/', component: Store },
  { path: '/device/:id', component: IOTDevice, props: true },
  { path: '/devices', component: Devices },
  { path: '/package/:id', component: Package, props: true },
  { path: '/packages', component: Packages },
  { path: '/shape/:id', component: Shape, props: true },
  { path: '/shapes', component: Shapes },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
