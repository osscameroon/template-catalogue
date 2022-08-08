import mySurvey from '../assets/data/survey.yaml'
export const actions = {
  async showAllSurvey({ commit }) {
    console.log('Hello World')
    return commit('survey/survey/SETSURVEY', await mySurvey.items)
  },
}
