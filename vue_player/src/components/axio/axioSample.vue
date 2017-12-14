<template>
    <div class='conatiner'>
         <button class="btn btn-primary">GET using ajax</button>
         <button class="btn btn-primary">GET using jQuery</button>
         <button class="btn btn-primary">GET using axios</button>
    </div>
</template>

<script>
import {getAjax,postAjax} from "../../utils/http"

export default {
  name: "axio",
  message: "",

  data() {
    return {
      message: "",
      name: "axio"
    };
  },
  comuted() {
    return {

    };
  },
  methods: {
    
  },
  created: function() {

  },
  mounted: function() {
    getAjax("https://jsonplaceholder.typicode.com/posts/1",function (data) {
        console.log(data);
    })

    var body =JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      id: 179
    });

    postAjax("https://jsonplaceholder.typicode.com/posts",function(data){
        console.log(data)
    }).send(body);
  }
};
</script>

<style>

</style>
