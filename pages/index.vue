<template>
  <div class="container px-4 mx-auto md:px-0">
    <HeaderComponent />
    <div
      class="w-full mx-auto mt-10 mb-20 grid gap-2 grid-cols-1 sm:grid-cols-3 md:w-3/4"
    >
      <div class="flex flex-col items-center justify-center sm:flex-row">
        <div class="flex w-full">
          <input
            type="text"
            placeholder="search"
            class="block w-full p-2 m-0 font-normal text-gray-700 bg-white bg-no-repeat border border-gray-300 border-solid appearance-none rounded-tl-md rounded-bl-md form-select bg-clip-padding transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-[18px]"
          />
          <div
            class="flex items-center justify-center bg-blue-600 w-14 rounded-tr-md rounded-br-md"
          >
            <img :src="search" class="w-5 h-auto" alt="" />
          </div>
        </div>
      </div>
      <SearchComponent />
      <SearchComponent />
    </div>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="(item, myIndex) in mySurvey.items" :key="myIndex">
        <CardComponent
          :city="item.city"
          :github_handle="item.github_handle"
          :gitlab_handle="item.gitlab_handle"
          :developer_type="item.developer_type"
          :fav_languages="item.fav_languages"
          :fav_frameworks="item.fav_frameworks"
        />
      </div>
    </div>
    <PaginationComponent />
    <SubmitSurveyComponent />
    <FooterComponent />
  </div>
</template>

<script>
import mySurvey from '../assets/data/survey.yaml'
export default {
  name: 'IndexPage',
  data() {
    return {
      search: require('../assets/search.png'),
      mySurvey,
    }
  },
  computed: {
    survey() {
      return this.$store.state.survey.survey
    },
  },
  async created() {
    await this.showAllSurvey()
  },
  methods: {
    async showAllSurvey() {
      await this.$store.dispatch('showAllSurvey')
    },
  },
}
</script>
