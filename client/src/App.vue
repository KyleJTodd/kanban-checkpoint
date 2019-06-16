<template>
  <div class="container-fluid">
    <div class="row nav-bg text-white" id="navbar" style="height: 10vh;">
      <div class="col justify-content-center  align-items-center d-flex">
        <router-link class="text-center navlinks" to="/board">
          <h6><i class="fas fa-border-all"></i> Boards</h6>
        </router-link>
      </div>
      <div class="col d-flex justify-content-end p-0 ">
        <img class="sloth" src="./assets/sloth.svg" alt="">
      </div>
      <div class="col p-0 pl-1">

        <h6 class="logo m-0 d-block">sloth</h6>

      </div>

      <div class="col justify-content-center align-items-center d-flex">
        <h6 class="navlinks" @click="logoutUser">
          <i class="far fa-user"></i> Logout
        </h6>
      </div>
    </div>
    <div class="row mt-3">
      <div id="app" class="col-12 p-0">

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
  router-link {
    color: white !important;
  }

  .sloth {
    height: 4rem;
    transform: translateY(.7vw);

  }




  .navlinks {
    color: white;

  }

  .logo {
    font-family: 'Baloo Paaji', cursive;
    font-size: 3.7rem;
  }

  .navlinks:hover {
    color: maroon;
    text-shadow: 1px 0px 8px rgb(255, 255, 255);
    text-decoration: none;
  }

  #app {
    font-family: "Comfortaa", cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3a3d41;

  }

  #nav {
    padding: 30px;
  }



  #navbar {
    color: white !important;
    font-family: "Comfortaa", cursive;
  }

  #nav a {
    font-family: "Comfortaa", cursive;
    font-weight: bold;
    color: white;
  }

  /* #nav a.router-link-exact-active {
    font-family: "Comfortaa", cursive;
    color: white;
  } */

  .nav-bg {
    /* background: #17a2b8; */
    background-image: url("./assets/bg-nav.png");
    background-size: contain;
  }
</style>