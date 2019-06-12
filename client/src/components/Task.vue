<template>
  <div class="col-10">
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Title" v-model="title">
      <input type="text" placeholder="Description" v-model="description">

      <button>Create LeafNote</button>
    </form>
    <ol>
      <li v-for="task in tasks">{{task.title}}
        <div class="d-flex">
          <div class="dropdown mr-1">
            <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
              Offset
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <!-- <div v-if="id.boardId == boardId"> -->
              <a class="dropdown-item" v-for="list in lists" :key="list._id" @click="moveTask(task, list._id)"
                id="list._id">{{list.title}}</a>
            </div>
          </div>
        </div>
      </li>
    </ol>
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
        comments: "",

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
      }


    },



  }
</script>







<style>


</style>


<!-- target: form, form.reset() -->