<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>content:{{ blog.content }}</article>
        <p>
          author:{{blog.author}}
        </p>
        </div>
    </div>
</template>

<script>
// Imports
// import searchMixin from '../mixins/searchMixin';
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    // this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
    //   // console.log(data)
    //   this.blog = data.body
    // })
    this.$http.get('https://vuejs-b529e.firebaseio.com/posts/' + this.id + '.json').then(function (data) {
      // console.log(data)
      this.blog = data.body
    })
  }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
