<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a new blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
<!-- <template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from '../main'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // title: 'Vue Ninzas'
    }
  },
  methods: {
    changeTitle: function () {
      this.title = 'Vue Wizards'
      bus.$emit('titleChange', 'Vue Wizards')
      // this.$emit('changeTitle', 'Vue Wizards')
      // this.title = 'vue'
    }
  }
}
</script>

<style>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style> -->
