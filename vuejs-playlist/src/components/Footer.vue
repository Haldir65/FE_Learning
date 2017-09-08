<template>
  <footer>
    <p>copyRight 2017{{ title }}</p>
  </footer>
</template>

<script>




export default {

  props:{
    title:{
      type: String,
      required: true
    }
  },

  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  footer{
    background:#2222;
    padding:6px;
  }
  p{
    color:lightgreen;
    text-align:center;
  }
</style>
