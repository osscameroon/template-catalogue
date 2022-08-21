<template>
  <nav aria-label="Page navigation example" class="flex justify-center mt-5">
    <ul class="pagination">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <span
          class="relative inline-flex items-center px-4 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer rounded-l-md md:text-sm hover:bg-gray-50"
          @click="startpage()"
        >
          <span class="font-bold">&laquo;</span>
        </span>
        <div @click="previewpage()">
          <span
            :class="`z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-2
                py-2
                border
                text-xs
                md:text-sm
                font-medium
                cursor-pointer
                ${page === current1 ? 'bg-blue' : 'bg-white'}
                `"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div
          v-for="current1 in leftSide"
          :key="current1"
          @click="changepage(current1)"
        >
          <span
            :class="`z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-xs
                md:text-sm
                font-medium
                cursor-pointer
                ${page === current1 ? 'bg-blue' : 'bg-white'}
                `"
          >
            {{ getPage(data, elemParPage, 2) }}
          </span>
        </div>
        <div>
          <span
            class="relative z-10 inline-flex items-center px-4 py-2 text-xs font-medium text-indigo-600 border border-indigo-500 cursor-pointer bg-blue md:text-sm"
          >
            {{ getNumPages(numElements, elemParPage) }}
          </span>
        </div>
        <div
          v-for="current in rightSide"
          :key="current"
          @click="changepage(current)"
        >
          <span
            :class="`
                z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-xs
                md:text-sm
                font-medium
                cursor-pointer
                ${page === current1 ? 'bg-blue' : 'bg-white'}
              `"
          >
            {{ getPage(data, elemParPage, 2) }}
          </span>
        </div>
        <div @click="nextpage()">
          <span
            :class="`
                z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-2
                py-2
                border
                text-xs
                md:text-sm
                font-medium
                cursor-pointer
                ${page === current1 ? 'bg-blue' : 'bg-white'}
              `"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <span
          class="relative inline-flex items-center px-4 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer rounded-r-md md:text-sm hover:bg-gray-50"
          @click="limitpage()"
        >
          <span class="font-bold">&raquo;</span>
        </span>
      </nav>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
      current1: '',
      elemParPage: 10,
      data: [...Array(this.$store.state.survey.survey.length).keys()],
      numElements: [...Array(this.$store.state.survey.survey.length).keys()]
        .length,
    }
  },
  computed: {
    leftSide() {
      const result = []
      for (let i = 5; i >= 1; i--) {
        if (this.page - i > 0) {
          result.push(this.page - i)
        }
      }
      return result
    },
    rightSide() {
      const result = []
      for (let i = 1; i <= 5; i++) {
        if (this.page + i < this.numberPage) {
          result.push(this.page + i)
        }
      }
      return result
    },
  },
  methods: {
    getNumPages(numElements, elemParPage) {
      if (numElements % elemParPage === 0) {
        return numElements / elemParPage
      } else {
        return (numElements - (numElements % elemParPage)) / elemParPage + 1
      }
    },
    getPage(data, elemParPage, page) {
      return data.slice((page - 1) * elemParPage, page * elemParPage)
    },
    async setpage(value) {},
    changepage(value) {},
    nextpage() {},
    previewpage() {},
    startpage() {},
    limitpage() {},
  },
}
</script>
