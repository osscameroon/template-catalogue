export const state = () => ({
  survey: [],
})

export const getters = {
  survey: (state) => state.survey,
}

export const mutations = {
  SETSURVEY(state, value) {
    state.survey = value
  },
}
