<template>
  <footer class="text-center">
    <div class="flex items-center justify-center my-10 md:my-16">
      <a
        href="https://github.com/osscameroon/template-catalogue"
        target="_blank"
        style="color: #0c344b"
      >
        <img class="h-[3rem] w-auto" :src="github" alt="" />
      </a>
    </div>
    <p
      style="color: #212529"
      class="my-10 md:my-15 text-[16px] md:text-[18px] leading-[24px] font-normal"
    >
      &copy; {{ new Date().getFullYear() }} OSS Cameroon, All rights reserved.
    </p>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      github: require('../assets/github.png'),
    }
  },
}
</script>
