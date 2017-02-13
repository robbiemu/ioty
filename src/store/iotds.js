import ModuleFactory from './lib/module'

const mf = new ModuleFactory()
let iotds = mf.gen({singular: 'iotd', plural: 'iotds'})

export default iotds
