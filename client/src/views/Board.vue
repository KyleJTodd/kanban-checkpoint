<template>
  <div class="board container-fluid mt-3">
    <div class="row">
      <div class="col-12 mt-3">
        <h3><strong>{{board.title}}</strong>:</h3>
      </div>
      <div class="col-12 mb-3">
        <h5>{{board.description}}</h5>
      </div>
      <div class="col-12 mb-3">
        <small>use the leaf to move your tasks from one list to the next</small>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-4 justify-content-center mb-3">
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="title" class="form-control">
          <button class="btn btn-info mt-2" type="submit">Add List</button></form>
      </div>
    </div>
    <div class="row justify-content-around pb-3">
      <list v-for="list in lists" :list='list'></list>

    </div>

    <!--  -->
  </div>
</template>

<script>
  import List from "../components/List.vue"

  export default {
    name: "board",
    props: ["boardId"],
    data() {
      return {
        title: ""
      }
    },
    mounted() {
      this.$store.dispatch('getBoards')
      this.$store.dispatch('getLists', this.boardId)

    },

    computed: {
      board() {
        return (
          this.$store.state.boards.find(b => b._id == this.boardId) || {
            title: "Loading..."
          }
        );
      },
      lists() {
        return (
          this.$store.state.lists
        )
      }
    },
    methods: {
      handleSubmit() {
        let data = {
          title: this.title,
          boardId: this.boardId
        }
        this.$store.dispatch('addList', data)
      }
    },

    components: {
      List
    }
  };
</script>
<style>
  .board {
    background-image: url('../assets/bg-board.svg');
    background-repeat: repeat;
    height: 100vh;
    background-position-y: 113px;
    background-position-x: -55vw;
    background-attachment: fixed;
  }
</style>