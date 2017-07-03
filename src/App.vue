<template>
  <div id="app">
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
  </head>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer> -->
    <!-- <form-helper></form-helper>
    <form-2></form-2> -->
    <!-- <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-helper'">Form One</button>
    <button v-on:click="component = 'form-2'">Form Two</button> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Ninja from './components/ninja.vue'
import FormHelper from './components/formHelper.vue'
import FormTwo from './components/Form2.vue'
import AddBlog from './components/addblog.vue'
import showBlogs from './components/showblog.vue'
import SingleBlog from './components/singleblog.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninja': Ninja,
    'form-helper': FormHelper,
    'form-2': FormTwo,
    'add-blog': AddBlog,
    'show-blog': showBlogs,
    'single-blog': SingleBlog
  },
  data () {
    return {
      component: 'form-2',
      ninjas: [
        {name: 'Ryu', speciality: 'A', show: false},
        {name: 'Hiteshi', speciality: 'B', show: false},
        {name: 'Tango', speciality: 'C', show: false},
        {name: 'Kamil', speciality: 'D', show: false},
        {name: 'Yoshi', speciality: 'E', show: false}
      ],
      title: 'Vue Ninzas'
    }
  },
  methods: {
    // updateTitle: function (updatedTitle) {
    //   this.title = updatedTitle
    // },
    handleSubmit: function () {
      // console.log(data)
      alert('form Submitted')
    }
  },
  name: 'app'
}
</script>

<style>
h1{
  color: purple
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
