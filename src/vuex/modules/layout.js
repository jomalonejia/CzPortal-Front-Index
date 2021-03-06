const TOGGLE_MENU = 'TOGGLE_MENU'
const CLOSE_MENU = 'CLOSE_MENU'

const state = {
  menuToggle: false
}

const getters = {
  menuToggleStatus: state => state.menuToggle
}

const mutations = {
  [TOGGLE_MENU] (state) {
    state.menuToggle = !state.menuToggle
  },
  [CLOSE_MENU] (state) {
    state.menuToggle = false
  }
}

const actions = {
  toggleMenu ({ commit }) {
    commit(TOGGLE_MENU)
  },
  closeMenu ({commit}) {
    commit(CLOSE_MENU)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
