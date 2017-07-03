<template>
    <div id="ninjas">
    <!--   <h3 v-on:click="changeTitle">{{title}}</h3>
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button class="btn btn-danger" v-on:click="deleteNinja">Delete a Ninja</button>
    </div> -->
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
    </form>
    <div >
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      blog: {
        title: '',
        content: ''
      },
      hide: true
    }
  },
  methods: {
    deleteNinja: function () {
      this.ninjas.pop()
    },
    changeTitle: function () {
      console.log('hello')
      this.$emit('update', 'hello world')
    }
  }
  // life cycles hooks
  // beforeCreate () {
  //   alert('beforeCreate')
  // },
  // created () {
  //   alert('created')
  // },
  // beforeMount () {
  //   alert('beforeMount')
  // },
  // mounted () {
  //   alert('mounted')
  // },
  // beforeUpdate () {
  //   alert('beforeUpdate')
  // },
  // updated () {
  //   alert('updated')
  // }
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
