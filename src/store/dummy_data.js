import Shape from '../components/POJOs/Shape'
import IOTDevice from '../components/POJOs/IOTDevice'
import Package from '../components/POJOs/Package'

let circle = new Shape('circle', 'πr²')
let square = new Shape('square', 's²')
let triangle = new Shape('triangle', '½bh')
let pentagon = new Shape('pentagon', '½bh5')
let hexagon= new Shape('hexagon', '½3√3s²')

let pi = new IOTDevice('pi', 'π')
let radius = new IOTDevice('radius', 'r')
let side = new IOTDevice('side', 's')
let base = new IOTDevice('base', 'b')
let height = new IOTDevice('height', 'h')
let half = new IOTDevice('half', '½')
let sqrt_three = new IOTDevice('square root', '√')

let squarish = new Package('squarish')
squarish.collection.push(side, base, height)

let roundly = new Package('roundly')
roundly.collection.push(pi,radius)

export default {
  shapes: [ circle, square, triangle, pentagon ],
  iotds: [ pi, radius, side, base, height, half, sqrt_three ],
  packages: [ squarish, roundly ]
}
