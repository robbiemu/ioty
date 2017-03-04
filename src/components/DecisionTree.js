export default class DecisionTree {
  constructor (opts) {
    opts = Object.assign({configuration:[], packages: [], iotds: []}, opts)
    this.configuration = opts.configuration
    this.packages = opts.packages
    this.iotds = opts.iotds
  }
  recommend () {
    // 1 - specify what we are matching
    const targetSymbols = [
      ...new Set(this.configuration.reduce((p,c) => p+c.area,''))
    ]
    // 2 - find packages that match at a savings
    let foundSymbols = new Set()
    const valueAddedPackages = this.packages.filter(pkg => {
      const p_sym = new Set(pkg.solution.reduce((p,c) => {
        p.push(...(c.symbols.split('')));
        return p
      },[]))
      const p_score = targetSymbols.filter(s => p_sym.has(s)).length
      if (p_score/pkg.cost > 1) {
        pkg.solution.forEach(d => {
          d.symbols.split('').forEach(s => foundSymbols.add(s))
        })
        return true
      }
    },0)
    // 3 - now, find other needed devices
    let valuedIotds = []
    let missingSymbols = targetSymbols.filter(s => !foundSymbols.has(s))
    missingSymbols.forEach(s => {
      let solution = this.iotds.find(i => i.symbols.match(s))
      if (solution)
        valuedIotds.push(solution)
    })
    // return the found set
    return { packages: valueAddedPackages, iotds: valuedIotds }
  }
}
