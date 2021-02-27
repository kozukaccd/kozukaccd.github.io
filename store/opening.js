const initialState = {
  loading: true,
}

export const state = () => {
  return initialState
}

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
}

export const mutations = {
  endLoding(state) {
    state.loading = false
  },
}

export const actions = {
  endLoding({ commit }) {
    commit('endLoding')
  },
}
