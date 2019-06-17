<template>
  <div class="boards container-fluid">
    <div class="row justify-content-center my-5 ">
      <div class="col align-self-center">
        <h1 v-if="!this.$store.state.user._id" class="text-center">Branches</h1>
        <h1 v-else class="text-center">{{user.name}}'s Branches</h1>
        <small class="m-3">this is where all your ideas branch into life</small>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 p-3 bg-info rounded">
        <h3 class="text-white">Add a New Branch</h3>
        <form @submit.prevent="addBoard">
          <input class="form-control m-1 px-2" type="text" placeholder="title" v-model="newBoard.title" required>
          <textarea class="form-control m-1" type="text" rows=3 placeholder="description"
            v-model="newBoard.description"></textarea>
          <button type="submit" class="btn btn-outline-info m-1"><i class=" fas fa-plus-circle"></i></button>
        </form>
      </div>

    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-2 p-3 mx-2 mb-2 bg-board" v-for="board in boards" :key="board._id">
        <div class="row board-btn rounded mx-auto p-0 ">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="col-10 p-0">
                <router-link :to="{name: 'board', params: {boardId: board._id}}">
                  <h6 class="text-white align-self-center m-0 my-2">{{board.title}}</h6>
                </router-link>
              </div>
              <div class="col-2 p-0">
                <i @click="deleteBoard(board._id)" class="fas fa-minus-circle text-white my-2"></i>
              </div>
            </div>
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
      },
      user() {
        return this.$store.state.user;
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

<style scoped>
  .bg-board {
    background-image: url("../assets/sloth-circle.png");
    background-size: cover;
    height: 16vw;

  }

  .board-btn {
    width: 100%;
    background-color: #17a2b88a;
  }

  .text-white {
    text-shadow: 1px 0px 8px rgb(31, 31, 31);
  }

  .fa-minus-circle:hover {
    color: #e75162 !important;
  }

  .fa-plus-circle {
    font-size: 2rem;
    color: #fff !important;
  }

  .fa-plus-circle:hover {
    font-size: 2rem;
    color: rgb(61, 235, 18) !important;
    text-shadow: 1px 0px 8px rgb(155, 155, 155);

  }
</style>