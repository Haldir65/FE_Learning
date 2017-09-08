<template>
  <header>
    <h1 v-on:click='changeTitle'>{{title}}</h1>
  </header>
</template>

<script>

import { bus } from '../main';

export default {

  props:{
    title:{
      type:String,
      required:true
    }
  },

  data () {
    return {
      
    }
  },
  methods:{
    changeTitle:function () {
      // this.$emit('changeTitle','New2 Title')
      this.title = 'changed bus title'
      bus.$emit('titleChanged','Changed by bus')
    }
  }
}
</script>

<style scoped>
  header{
    background : lightgreen;
    padding:10px;
  }

  h1{
  color: #222;
  text-align:center;
  }
</style>
