<template>
  <div class="boards container-fluid">
    <div class="row justify-content-center">
      <div class="col align-self-center">
        <h1 class="text-center">Time to Branch Out</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required>
        <input type="text" placeholder="description" v-model="newBoard.description">
        <button type="submit">Create New Branch</button>
      </form>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-2 rounded-circle p-3 bg-success mx-2 mb-2" v-for="board in boards" :key="board._id">
        <div class="row text-center">
          <div class="col">
            <router-link class="text-center" :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="../assets/circle-sloth.svg" alt="" style="height:5em;">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button @click="deleteBoard(board._id)">DELETE BOARD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "boards",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(boardId) {
        this.$store.dispatch("deleteBoard", boardId);
      }
    }
  };
</script>