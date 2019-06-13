<template>
  <div>
    <div class="row" v-for="task in tasks">
      <div class="col-7 p-0">
        <h3 class="text-left">{{task.title}}</h3>
      </div>
      <div class="col"><button @click="deleteTask(task._id)" class="btn btn-outline-info p-0"><i
            class="fas fa-minus-circle"></i></button>
      </div>
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

      <div class="col-12 my-2">
        <div class="row justify-content-between" v-for="(comment, i) in task.comments">
          <div class="col-10 p-0">
            <h6 class="text-left">{{comment.content}}</h6>
          </div>
          <div class="col-1 p-0"><button @click="deleteComment(i, task)" class="btn btn-outline-info p-0"><i
                class="fas fa-minus-circle"></i></button>
          </div>
        </div>
        <div class="row justify-content-center">
          <form class="form-row" @submit.prevent="addComment(task)">
            <!-- <div class="col-10 p-0"> -->
            <input class="col-10 form-control p-0" id="task._id" type="text" v-model="comment.content">
            <!-- </div> -->
            <button type="submit" class="p-0 col-2 btn btn-outline-info"><i class="fas fa-plus-circle"></i></button>
          </form>
        </div>
      </div>
    </div>

    <div class="row margin-top">
      <div class="col-10">
        <form @submit.prevent="handleSubmit">
          <input class="form-control" type="text" placeholder="Title" v-model="title">
          <input class="form-control" type="text" placeholder="Description" v-model="description">
          <button type="submit">Create LeafNote</button>
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


</style>


<!-- target: form, form.reset() -->