<template>
  <header class="my-10 text-center md:my-16">
    <h1
      style="color: #2f80ed"
      class="my-5 text-[40px] leading-[50px] font-bold"
    >
      Template Catalogue
    </h1>
    <div class="flex items-center justify-center">
      <a href="https://opencollective.com/osscameroon/donate" target="_blank">
        <img class="h-auto w-[200px]" :src="donate" alt="" />
      </a>
    </div>
    <SubmitSurveyComponent />
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      donate: require('../assets/donate.png'),
    }
  },
}
</script>
