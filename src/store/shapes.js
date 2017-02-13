import ModuleFactory from './lib/module'

const mf = new ModuleFactory()
let shapes = mf.gen({singular: 'shape', plural: 'shapes'})

export default shapes
