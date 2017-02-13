export default class ModuleFactory {
  constructor () {}
  gen (who) {
    const state = {}
    state[who.plural] = []

    const getters = {}
    getters['get_' + who.plural] = state => state[who.plural]
    getters['get_' + who.singular] = (state, id) => state[who.plural]
      .find(w => w.id === id)

    const mutations = {}
    mutations['set_' + who.plural] = (state, payload) =>
      state[who.plural] = payload,
    mutations['set_' + who.singular] = (state, payload) => state[who.plural]
      .map(w => w.id === payload.id? payload.shape:w)

    const actions = {}
    actions['commitGet_' + who.plural] = ({commit}) =>
      commit('get_' + who.plural)
    actions['commitGet_' + who.singular] = ({commit}, payload) =>
      commit('get_' + who.singular, payload)
    actions['commitSet_' + who.plural] = ({commit}, payload) =>
      commit('set_' + who.plural, payload)
    actions['commitSet_' + who.singular] = ({commit}, payload) =>
      commit('set_' + who.singular, payload)

    return {state, getters, mutations, actions}
  }
}
