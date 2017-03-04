import uuidV1 from 'uuid/v1'

export default class Package {
  constructor (name) {
    this.id = uuidV1()
    this.name = name
    this.solution = []
    this.cost = 0
  }
}
