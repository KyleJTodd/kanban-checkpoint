<template>
  <div class="login container-fluid p-0" style="height: 100vh">
    <div class="row justify-content-center">
      <div class="col-8 my-5">
        <h3>Welcome to Sloth!</h3>
        <small>keep all your slow moving thoughts in one convenient place</small>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <form v-if="loginForm" @submit.prevent="loginUser">
          <input class="form-control m-1" type="email" v-model="creds.email" placeholder="email">
          <input class="form-control m-1" type="password" v-model="creds.password" placeholder="password">
          <button class="btn btn-info m-1">Login</button>
        </form>

        <form v-else @submit.prevent="register">
          <input class="form-control m-1" type="text" v-model="newUser.name" placeholder="name">
          <input class="form-control m-1" type="email" v-model="newUser.email" placeholder="email">
          <input class="form-control m-1" type="password" v-model="newUser.password" placeholder="password">
          <button class="btn btn-info m-1" type="submit">Create Account</button>
        </form>
        <div class="action" @click="loginForm = !loginForm">
          <p v-if="loginForm">No account? Click here to <strong>Register</strong></p>
          <p v-else>Already have an account? Click here to <strong>Login</strong></p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import router from '@/router.js'
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    computed: {

    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }

    }
  };
</script>

<style>
  .action {
    cursor: pointer;
  }

  .login {
    background: linear-gradient(180deg, #fff 0%, #62d4e859 100%), url(../assets/bg-login.jpg);
    background-size: cover;
  }
</style>