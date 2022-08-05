<template>
  <div class="flex flex-col items-center justify-center sm:flex-row">
    <div class="w-full">
      <select
        class="block w-full p-2 m-0 font-normal text-gray-700 bg-white bg-no-repeat border border-gray-300 border-solid appearance-none rounded-md form-select bg-clip-padding transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-[18px]"
        aria-label="Default select example"
      >
        <option class="text-[18px]" value="">any</option>
        <option class="text-[18px]"></option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchComponent',
}
</script>
