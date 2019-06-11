<template>
  <div class="container-fluid">
    <div class="row bg-primary" style="height: 10vh;">
      <div class="col">Board</div>
      <div class="col">Boards</div>
      <div class="col">Login</div>
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
    name: "App"
  };
</script>

<style>
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
</style>