<template>
  <div>
      <h1>{{ title }}</h1>
      <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue Js'
    }
  },
  methods: {
    greeting: function () {
      return 'Good Afternoon'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: black
}
</style>
