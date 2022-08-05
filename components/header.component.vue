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
    <p
      style="color: #6c757d"
      class="my-10 md:my-15 text-[20px] leading-[30px] font-normal"
    >
      You are a cameroonian developer, please take this 3 minutes survey
      <a
        href="https://github.com/osscameroon/devsurvey/issues/new?assignees=&labels=&template=take-the-survey.yaml&title=DO+NOT+EDIT+-+takes+the+developer+survey"
        target="_blank"
        style="color: #2f80ed"
        class="underline"
        >here</a
      >
    </p>
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
