export default class ModuleFactory {
  constructor () {}
  gen (who) {
    const state = {}
    state[who.plural] = []

    const getters = {}
    getters['get_' + who.plural] = state => state[who.plural]

    const mutations = {}
    mutations['set_' + who.plural] = (state, payload) =>
      state[who.plural] = payload,
    mutations['set_' + who.singular] = (state, payload) => state[who.plural] =
      state[who.plural]
        .map(w => w.id === payload.id? payload.shape:w)
        
    const actions = {}
    actions['commitSet_' + who.plural] = ({commit}, payload) =>
      commit('set_' + who.plural, payload)
    actions['commitSet_' + who.singular] = ({commit}, payload) =>
      commit('set_' + who.singular, payload)

    return {state, getters, mutations, actions}
  }
}
