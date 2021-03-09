const initialState = {
  loading: true,
  playing: false,
  contentShown: false,
}

export const state = () => {
  return initialState
}

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
  isPlaying: (state) => {
    return state.playing
  },
  isContentShown: (state) => {
    return state.contentShown
  },
}

export const mutations = {
  endLoding(state) {
    state.loading = false
  },
  startPlaying(state) {
    state.playing = true
  },
  endPlaying(state) {
    state.playing = false
  },
  showContent(state) {
    state.isContentShown = true
  },
}

export const actions = {
  endLoding({ commit }) {
    commit('endLoding')
  },
}
