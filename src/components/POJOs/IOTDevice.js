import uuidV1 from 'uuid/v1'

export default class IOTDevice {
  constructor (name, symbols) {
      this.id = uuidV1()
      this.name = name
      this.symbols = symbols // the symbols found in area formulas that this IOTDevice provides
  }
}
