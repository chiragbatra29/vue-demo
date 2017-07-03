<template>
    <div id="add-blog" v-theme:column="'narrow'">
        <h2 v-rainbow>Add a New Blog Post</h2>
        <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
               <p>Blog Categories:</p>
               <label>Ninjas</label>
               <input type="checkbox" value="ninjas" v-model="blog.categories" />
               <label>Wizards</label>
               <input type="checkbox" value="wizards" v-model="blog.categories" />
               <label>Mario</label>
               <input type="checkbox" value="mario" v-model="blog.categories" />
               <label>Cheese</label>
               <input type="checkbox" value="cheese" v-model="blog.categories" />
           </div>
           <label>Author:</label>
           <select v-model="blog.author">
               <option v-for="author in authors">{{ author }}</option>
           </select>
           <hr />
           <button class="btn btn-primary" v-on:click="post">Add Post</button>
            <!-- <button class="btn btn-primary" v-on:click="get">Get Posts</button> -->
        </form>
        <div >
          <h3>Thanks for adding your post</h3>
        </div>
        <!-- <div v-theme="'wide'" id="preview">
            <h3 v-rainbow>Preview blog</h3>
            <input type="text" v-model="search" placeholder="search blogs"/>
            <div v-for="blog in filteredBlogs" class="single-blog">
              <p>Blog title: {{ blog.title | to-uppercase}}</p>
              <h3>
                Title: {{blog.title}}
              </h3>
              <h3>Blog content: </h3>
              <p style="white-space: pre">{{ blog.body }}</p> -->

              <!-- <ul>
                <li v-for="category in blog.categories">
                  {{category}}
                </li>
              </ul> -->

            </div>

        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchmixin'
// Imports
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      blogs: [],
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false,
      search: ''
    }
  },
  methods: {
    // post: function () {
    //   this.$http.post('https://jsonplaceholder.typicode.com/posts', {
    //     title: this.blog.title,
    //     content: this.blog.content,
    //     author: this.blog.author
    //   }).then(function (data) {
    //     this.submitted = true
    //     // console.log(data)
    //   })
    // }
    post: function () {
      this.$http.post('https://vuejs-b529e.firebaseio.com/posts.json', this.blog).then(function (data) {
        this.submitted = true
        console.log(data)
      })
    }
  },
  created () {
    // get: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
      this.blogs = data.body.slice(0, 10)
      this.submitted = true
    })
  },
  mixins: [searchMixin],

  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }
}
</script>

<style>
  #add-blog *{
      box-sizing: border-box;
  }
  #add-blog{
      margin: 20px auto;
      max-width: 500px;
  }
  label{
      display: block;
      margin: 20px 0 10px;
  }
  input[type="text"], textarea{
      display: block;
      width: 100%;
      padding: 8px;
  }
  #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
  }
  h3{
      margin-top: 10px;
  }
  #show-blogs{
    max-width: 800px;
    margin: 0px auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
