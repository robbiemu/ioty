import Shape from '../components/POJOs/Shape'
import IOTDevice from '../components/POJOs/IOTDevice'
import Package from '../components/POJOs/Package'

let circle = `<svg width="100px" height="100px">
  <circle cx="50" cy="50" r="50" fill="red" />
</svg>`
circle = new Shape('circle', 'πr²', circle)

let square = `<svg width="100px" height="100px">
  <rect width="100px" height="100px" fill="teal" />
</svg>`
square = new Shape('square', 's²', square)

let triangle = `<svg height="100px" width="100px" viewBox="0 0 100 100">
  <polygon fill="grey" points="50,0 0,100 100,100"></polygon>
</svg>`
triangle = new Shape('triangle', '½bh', triangle)

let pentagon = `<svg height="100px" width="100px" viewBox="0 0 100 100">
  <polygon fill="orange" points="50,0 100,38 82,100 18,100 0,38"></polygon>
</svg>`
pentagon = new Shape('pentagon', '½bh5', pentagon)

let hexagon = `<svg height="100px" width="100px" viewBox="0 0 100 100">
  <polygon fill="green" points="25,8 75,8 100,50 75,92 25,92 0,50"></polygon>
</svg>`
hexagon = new Shape('hexagon', '½3√3s²', hexagon)

let pi = new IOTDevice('pi', 'π')
let radius = new IOTDevice('radius', 'r')
let side = new IOTDevice('side', 's')
let base = new IOTDevice('base', 'b')
let height = new IOTDevice('height', 'h')
let half = new IOTDevice('half', '½')
let sqrt_three = new IOTDevice('square root', '√')

let squarish = new Package('squarish')
squarish.solution.push(side, base, height)
squarish.cost = 2.5

let roundly = new Package('roundly')
roundly.solution.push(pi,radius)
roundly.cost = 1.8

export default {
  shapes: [ circle, square, triangle, pentagon, hexagon ],
  iotds: [ pi, radius, side, base, height, half, sqrt_three ],
  packages: [ squarish, roundly ]
}
