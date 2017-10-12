<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="article in articles">
            <h4 class="list-group-item-heading">{{article.title}}</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
