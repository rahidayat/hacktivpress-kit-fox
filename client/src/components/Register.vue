<template lang="html">
  <div class="jumbotron">
    <form class="form-horizontal" @submit.prevent="createUser(formRegister)">
      <fieldset>
        <legend>Sign up</legend>
        <label class="control-label" for="focusedInput">Username</label>
          <input class="form-control" placeholder="username" type="text" v-model="formRegister.username">
        <label class="control-label" for="focusedInput">Password</label>
          <input class="form-control" placeholder="password" type="password" v-model="formRegister.password"> <br>
        <button class="btn btn-info" type="submit">Register</button>
      </fieldset>
    </form>
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
        this.$router.push('login')
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
