import ModuleFactory from './lib/module'

const mf = new ModuleFactory()
let packages = mf.gen({singular: 'package', plural: 'packages'})

export default packages
