<template>
  <div class="board container-fluid">
    <div class="row">{{board.title}}</div>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="title" class="form-control">
          <button type="submit">Add List</button></form>
      </div>
    </div>
    <div class="row justify-content-around">
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