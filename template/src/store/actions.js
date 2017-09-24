import Vue from 'vue'

export default {
  offsetPoint ({ commit, state, getters, dispatch }, payload) {
    var p = state.point + payload
    if (p < 0 || p > 99) return
    commit('updateState', {'point': p})
  },
}
