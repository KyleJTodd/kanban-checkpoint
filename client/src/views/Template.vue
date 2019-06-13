<template>
  <div>
    <!-- <div class="row" v-for="task in tasks">
      <div class="col-10 p-0">
        <h3 class="text-left">{{task.title}}</h3>
      </div>
      <div class="col-2 p-0">
        <button class="btn btn-outline-info"><i class="fab fa-envira"></i></button>
      </div>
      <div class="col-12 p-2">
        <div class="row justify-content-center" v-for="comment in task.comments">
          <div class="col-8 p-0 ">
            <h6 class="text-left">{{comment.content}}</h6>
          </div>
          <div class="col-2 p-0">
            <div class="dropdown mr-1">
              <button type="button" class="btn btn-outline-info dropdown-toggle" id="dropdownMenuOffset"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                <i class="fab fa-envira"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <!-- <div v-if="id.boardId == boardId"> -->
    <!-- <a class="dropdown-item" v-for="list in lists" :key="list._id" @click="moveTask(task, list._id)"
                  id="list._id">{{list.title}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <form @submit.prevent="addComment(task)">
            <div class="col-8 p-0 text-left">
              <input type="text" v-model="comment.content">
            </div>
            <div class="col-2 p-0"><button class="btn btn-outline-info"><i class="fas fa-plus-circle"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div class="row margin-top">
        <div class="col-10">
          <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Title" v-model="title">
            <input type="text" placeholder="Description" v-model="description">
            <button type="submit">Create LeafNote</button>
          </form>
        </div>
      </div>
    </div> -->
  </div> -->



</template>

<script>
  export default {
    name: "Template"
  }
</script>

<style scoped>

</style>