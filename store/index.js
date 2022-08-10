import mySurvey from '../assets/data/survey.yaml'
export const actions = {
  async showAllSurvey({ commit }) {
    return commit('survey/survey/SETSURVEY', await mySurvey.items)
  },
}
