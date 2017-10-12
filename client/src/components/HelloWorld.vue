<template>
  <div class="hello">
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- <Login/> -->
          </div>
          <div class="col-md-6">
            <Register/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
export default {
  name: 'HelloWorld',
  components: {
    Register,
    Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
