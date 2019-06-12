<template>
  <div class="container-fluid">
    <div class="row nav-bg" style="height: 10vh;">
      <div class="col">
        <router-link to="/board">Boards</router-link>
      </div>
      <div class="col">
        <router-link to="/login">Login</router-link>
      </div>
      <div class="col">
        <button class="btn" @click="logoutUser">Logout</button>
      </div>
      <div class="col">
        <router-link to="/template">Template</router-link>
      </div>
    </div>
    <div class="row">
      <div id="app" class="col-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods: {
      logoutUser() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>

<style>
  .row {
    outline: 2px solid blue;
  }

  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    outline: 1px solid red;
  }

  #app {
    font-family: "Comfortaa", cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .nav-bg {
    background: #5ec8d6;
  }
</style>