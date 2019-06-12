<template>
  <div class="col-2 mx-5 list bg-cover rounded border">
    <div class="row justify-content-center">
      <div class="col-11 ">
        <div class="row">
          <div class="col-12">
            <h4>{{list.title}}</h4>
          </div>
        </div>
        <div class="row">
          <task :id="list._id" :boardId="list.boardId">

          </task>
        </div>
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
    components: {
      Task,
    }
  };

</script>

<style scoped>
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