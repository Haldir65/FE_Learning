<template>
    <div id="show-blogs">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for='blog in filteredBlogs' class="singel-blog">
            <h2>{{body.title}}</h2>
        </div>
    </div>
</template>


import searchMixin from '../mixins/searchMixin';

<script>
export default {

  data () {
   return{
        blog: [],
        search:''
   }
  },
  methods:{

  },
  created:{
    this.$http.get('http://jsonplaceholder.typicode.com/posts').
        then(function (data) {
           this.blogs = data.body.slice(0,10) ;
        });
  }


}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
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
