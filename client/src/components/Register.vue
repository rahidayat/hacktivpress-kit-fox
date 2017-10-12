<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="jumbotron">
          <form class="form-horizontal" @submit.prevent="createUser(formRegister)">
            <fieldset>
              <legend>Sign up or <router-link :to="'/'"><span>Log in</span></router-link></legend>
              <label class="control-label" for="focusedInput">Username</label>
              <input class="form-control" placeholder="username" type="text" v-model="formRegister.username">
              <label class="control-label" for="focusedInput">Password</label>
              <input class="form-control" placeholder="password" type="password" v-model="formRegister.password"> <br>
              <button class="btn btn-info" type="submit">Register</button>
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
      formRegister: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    createUser () {
      this.$http.post('/signup', this.formRegister)
      .then(userData => {
        console.log('user data register: ', userData)
        this.$router.push({path: '/'})
      })
      .catch(err => {
        console.log('ini error register: ', err.response.data.msg)
      })
    }
  }
}
</script>

<style lang="css">
</style>
