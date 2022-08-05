<template>
  <div
    class="flex flex-col bg-white border rounded-sm h-100 w-100 hover:border-blue-600 hover:border-2"
  >
    <div class="p-4">
      <div class="flex">
        <div
          style="background: #2f80ed"
          class="flex items-center justify-center w-12 h-12 rounded-full"
        >
          <img :src="coding" class="w-8 h-8" alt="" />
        </div>
        <div class="ml-2">
          <h2
            style="color: #576f7f; margin-right: 0.5rem py-1"
            class="text-lg font-semibold"
          >
            Asam237
          </h2>
          <em style="color: #576f7f" class="text-sm"> Frontend Developer</em>
        </div>
      </div>
      <div class="pt-3">
        <p
          style="color: #576f7f; margin-right: 0.5rem py-2"
          class="text-base font-normal before:content-['>>']"
        >
          Favourite Languages
        </p>
        <div class="pt-2 card-tags">
          <span>JavaScript</span><span>TypeScript</span>
        </div>
      </div>
      <div class="pt-3">
        <p
          style="color: #576f7f; margin-right: 0.5rem"
          class="text-base font-normal before:content-['>>']"
        >
          Favourite Frameworks
        </p>
        <div class="py-2 card-tags">
          <span>Express</span><span>Angular</span><span>Angular.js</span>
        </div>
      </div>
    </div>
    <div style="height: 1px; background: #d8d8d8" class="w-full" />
    <div style="background: #f7f7f7" class="p-2">
      <font-awesome-icon
        :icon="['fab', 'github']"
        style="color: #2f80ed"
        class="w-5 h-5 p-2 text-white rounded-full"
      />
      <font-awesome-icon
        :icon="['fab', 'github']"
        style="color: #2f80ed"
        class="w-5 h-5 p-2 text-white rounded-full"
      />
      <font-awesome-icon
        :icon="['fab', 'github']"
        style="color: #2f80ed"
        class="w-5 h-5 p-2 text-white rounded-full"
      />
      <font-awesome-icon
        :icon="['fab', 'github']"
        style="color: #2f80ed"
        class="w-5 h-5 p-2 text-white rounded-full"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  data() {
    return {
      coding: require('../assets/coding.png'),
    }
  },
}
</script>
