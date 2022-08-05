<template>
  <nav aria-label="Page navigation example" class="flex justify-center mt-5">
    <ul class="pagination">
      <li class="disabled page-item">
        <a class="page-link disabled">First</a>
      </li>
      <li class="page-item">
        <a href="#1" class="page-link">1</a>
      </li>
      <li class="page-item">
        <a href="#2" class="page-link">2</a>
      </li>
      <li class="page-item">
        <a href="#3" class="page-link">3</a>
      </li>
      <li class="page-item">
        <a href="#4" class="page-link">4</a>
      </li>
      <li class="page-item"><a href="#5" class="page-link">Last</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'PaginationComponent',
}
</script>
