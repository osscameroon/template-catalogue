export const actions = {
  showAllSurvey({ commit }) {
    fetch('/survey.json')
      .then((response) => response.json())
      .then((json) => {
        return commit('survey/survey/SETSURVEY', json)
      })
  },
}
