<template>
  <div id='show-blogs' v-theme:column='narrow'>
    <h1>All Blog Articles</h1>
    <input type="text" v-model='search' placeholder="Seach blogs and stuff">
    <div v-for='blog in filteredBlogs' class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id"><h2 >{{blog.title | to-uppercase}}</h2></router-link> 
      <article>{{blog.body}}</article>
    </div>

  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';
export default {

  data () {
    return {
      blogs:[],
      search:''
    }
  },
  methods:{

  },
   created(){ //fired when dom created
    this.$http.get('http://jsonplaceholder.typicode.com/posts')
    .then(function(data) {
      // body... 
      console.log(data);
     this.blogs = data.body.slice(0,10);

    })
   },
   mixins:[searchMixin],
   computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
   },
   filters:{
      'to-uppercase':function(value){
        return value.toUpperCase();
      }
   },
   directives:{
    'rainbow':{
      bind(el, binding, vnode) {
        el.style.color =  '#'+Math.random().toString(16).slice(2, 8);
    }
   }
 }


}
</script>

<style >
  
  #show-blogs{
    max-width:800px;
    margin :0 auto;
  }

  .single-blog{
    padding : 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background:#eee;
  }


</style>


