<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="jumbotron">
          <form class="form-horizontal" @submit.prevent="loginUser(formLogin)">
            <fieldset>
              <legend>Log In or <router-link :to="'/register'"><span>Register</span></router-link></legend>
              <label class="control-label" for="focusedInput">Username</label>
              <input class="form-control" placeholder="username" type="text" v-model="formLogin.username">
              <label class="control-label" for="focusedInput">Password</label>
              <input class="form-control" placeholder="password" type="password" v-model="formLogin.password"> <br>
              <button class="btn btn-info" type="submit">Log In</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      this.$http.post('/signin', this.formLogin)
      .then(userData => {
        console.log('user data login: ', userData.data)
        localStorage.setItem('token', userData.data)
        this.$router.push('main')
      })
      .catch(err => {
        console.log('ini error login: ', err.response.data.msg)
      })
    }
  }
}
</script>

<style lang="css">
</style>
