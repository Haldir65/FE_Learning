<template>
  <div id='add-blog'>
  <h2>Add a New Blog Post</h2>
    <form v-if='!summited'>
      <label>
        Blog Title:
      </label>
      <input type="text" v-model.lazy='blog.title' required/>
      <label>Blog Content：</label>
      <textarea v-model.lazy='blog.content'></textarea>
      
      <div id="checkboxes">
        <label>Apple</label>
        <input type="checkbox" value="apple" v-model="blog.categories">
        <label>Juice</label>
        <input type="checkbox" value="juice" v-model="blog.categories">
        <label>Panda</label>
        <input type="checkbox" value="panda" v-model="blog.categories">
        <label>rocky</label>
        <input type="checkbox" value="rocky" v-model="blog.categories">
        <label>moon</label>
        <input type="checkbox" value="moon" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model='blog.author'>
        <option v-for='a in authors' >{{a}}</option>
      </select>

      <button v-on:click.prevent='post'>Add Blog</button>
      

    </form>

    <div v-if='summited'>
      <h3>Blog has been posted</h3>
    </div>


<!--   // preview area -->
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p> {{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for='cat in blog.categories'>{{cat}}</li>
      </ul>

      <p>Author: {{blog.author}}</p>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      blog :{
      title :'',
      content: '',
      categories:[],
      author:'admin'
      },
      authors:['alex','josh','bob','bude head'],
      summited:false
    }
  },
  methods:{
    post:function () {
      //use http here
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title:this.blog.title,
        body:this.blog.content,
        userId:1,
      }).then(function (data) {
        // body...
        console.log(data)
        this.summited = true
      });
    }
  }

}
</script>

<style >
  
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
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
