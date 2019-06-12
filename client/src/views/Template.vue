<template>
  <div class="col-3">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <h3>Title of List</h3>
        </div>
        <div class="row">
          <div class="col-auto">
            <h3 class="text-left">Task Title</h3>
          </div>
          <div class="col-2">
            <button class="btn btn-outline-info"><i class="fab fa-envira"></i></button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col">
                <p class="text-left">Comment Body</p>
              </div>
              <div class="col-1"><i class="fas fa-minus-circle"></i></div>
            </div>
            <div class="row">
              <div class="col text-left">add comment</div>
              <div class="col-1"><i class="fas fa-plus-circle"></i></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <h6>add task</h6>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "Template"
  }
</script>