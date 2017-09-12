<template>
  <div>
  <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>



// Imports
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import header from './components/headers.vue';




export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlogs,
    'app-header':header
  } ,
  data () {
    return {
      
    }
  },
  methods:{
   
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

</style>
