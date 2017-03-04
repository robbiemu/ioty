import uuidV1 from 'uuid/v1'

export default class Shape {
  constructor (name, area, svg) {
    this.id = uuidV1()
    this.name = name
    this.area = area // the formula for the area of the shape
    this.svg = svg
  }
}
