<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-1 list-group bg-info">
    <div class="row m-1 bg-light justify-content-center">
      <div class="col-11 my-3 align-items-center">
        <div class="row justify-content-center  border-bottom border-info mb-1">
          <div class="col p-0 align-self-center mb-1">
            <h3 class="text-center m-0">{{list.title}}</h3>
          </div>
          <div class="col-2 mb-1 text-center p-0 align-self-center"><i @click="deleteList"
              class="fas fa-minus-circle"></i>
          </div>
        </div>
        <task :id="list._id" :boardId="list.boardId">
        </task>
      </div>
    </div>
  </div>
</template>


<script>
  import Task from "../components/Task.vue"

  export default {
    name: "List",
    props: ["list"],
    computed: {
      lists() {
        return (
          this.$store.state.lists || {
            title: "Loading..."
          }
        );
      },
      tasks() {
        return (this.$store.state.tasks.listId)
      }
    },
    methods: {
      deleteList(id) {
        return this.$store.dispatch("deleteList", this.list)
      }
    },
    components: {
      Task,
    }
  };

</script>

<style scoped>
  i {
    color: #17a2b8;
  }

  i:hover {
    color: #e75162;
  }

  .list {
    background-image: url("../assets/tree.svg");
    background-size: contain;
    background-repeat: none;
  }

  .bg-cover {
    background-color: #b4d67127;
    height: 71vh;
    border: 3px solid #8f8575 !important;
  }

  .rounded {
    border-radius: 1.25rem !important;
  }
</style>