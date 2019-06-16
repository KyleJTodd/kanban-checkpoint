<template>
  <div class="mt-2">
    <div class="row border-bottom border-info mt-2" v-for="task in tasks">
      <div class="col-2 p-0">
        <div class="dropdown mr-1">
          <button type="button" class="btn btn-outline-info dropdown-toggle" id="dropdownMenuOffset"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
            <i class="fab fa-envira"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
            <!-- <div v-if="id.boardId == boardId"> -->
            <a class="dropdown-item" v-for="list in lists" :key="list._id" @click="moveTask(task, list._id)"
              id="list._id">{{list.title}}</a>

          </div>
        </div>
      </div>
      <div class="col-8 p-0 align-self-center">
        <h6 class="text-left pl-4 m-0">{{task.title}}</h6>
      </div>
      <div class="col-2 text-center align-self-center p-0"><i @click="deleteTask(task._id)"
          class="fas fa-minus-circle p-0"></i>
      </div>

      <div class="col-12 my-2">
        <div class="row justify-content-between" v-for="(comment, i) in task.comments">
          <div class="col-10 p-0">
            <h6 class="text-left m-0 comment"><em>"{{comment.content}}"</em></h6>
          </div>
          <div class="col-2 p-0"><i @click="deleteComment(i, task)" class="fas fa-minus-circle p-0"></i>
          </div>
        </div>
        <div class="row p-0 mt-3">
          <form class="form-row p-0" @submit.prevent="addComment(task)">
            <div class="col-10 p-0 pr-3">
              <input class="col-10 form-control m-0 ml-3 p-0" id="task._id" type="text" v-model="comment.content"></div>
            <div class="col-2 p-0">
              <button type="submit" class="btn btn-outline-light"><i class="fas fa-plus-circle"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row mt-2 margin-top justify-content-center">
      <div class="col-11">
        <form @submit.prevent="handleSubmit">
          <input class="form-control mb-2" type="text" placeholder="Title" v-model="title">
          <input class="form-control" type="text" placeholder="Description" v-model="description">
          <button class="btn btn-info mt-2
          
          " type="submit">Create LeafNote</button>
        </form>
      </div>
    </div>
  </div>



</template>
<script>
  export default {
    name: "Task",
    props: ["id", "boardId"],
    data() {
      return {
        title: "",
        description: "",
        comment: {
          content: ""
        }

      }
    },
    mounted() {
      this.$store.dispatch('getTasks', this.id)
    },
    computed: {
      tasks() {
        return this.$store.state.tasks[this.id] || []
      },
      lists() {
        return this.$store.state.lists;
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      handleSubmit() {
        let data = {
          title: this.title,
          description: this.description,
          listId: this.id
        }

        this.$store.dispatch('createTask', data)
      },
      moveTask(task, listId) {
        let oldId = task.listId
        task.listId = listId

        this.$store.dispatch('moveTask', { task, oldId })
      },
      addComment(task) {
        this.comment.authorId = this.user._id
        task.comments.push(this.comment)
        this.$store.dispatch('updateTask', task)
        this.comment = {}
      },
      deleteTask(taskId) {
        let listId = this.id
        this.$store.dispatch('deleteTask', { taskId, listId })
      },
      deleteComment(i, task) {

        task.comments.splice(i, 1)
        this.$store.dispatch('updateTask', task)
      }



    },



  }
</script>







<style>
  .fa-minus-circle {
    color: #17a2b8 !important;
  }

  .fa-plus-circle {
    color: #17a2b8 !important;
    font-size: 1.2rem;

  }

  .fa-minus-circle:hover {
    color: #e75162 !important;
  }

  .fa-plus-circle:hover {
    color: #6a9625 !important;
    font-size: 1.2rem;
  }

  .comment {
    color: #afafaf;
  }
</style>


<!-- target: form, form.reset() -->