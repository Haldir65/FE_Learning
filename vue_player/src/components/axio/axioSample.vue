<template>
  <div class="container">
    <button class="btn btn-primary text-primary">GET using ajax</button>
    <button class="btn btn-success">GET using jQuery</button>
    <button class="btn btn-info">GET using axios</button>
    <button class="btn btn btn-outline-primary">GET using axios</button>

    <button class="circle">Stylus</button>
    
  </div>
</template>

<script>
import { getAjax, postAjax } from "../../utils/http";
import { AjaxUtil } from "../../utils/AjaxUtils";
import './stylusstyle.styl'

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
    return {};
  },
  methods: {},
  created: function() {},
  mounted: function() {
    // getAjax("https://jsonplaceholder.typicode.com/posts/1", function(data) {
    //   console.log(data);
    // });

    var body = JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
      id: 179
    });

    // postAjax("https://jsonplaceholder.typicode.com/posts", function(data) {
    //   console.log(data);
    // }).send(body);
  }
};

function findUser() {
  // var userid = $("userid").value;
  var userid = "john";
  if (userid) {
    AjaxUtil.request({
      url: "https://jsonplaceholder.typicode.com/posts",
      params: { id: userid },
      type: "json",
      callback: process
    });
  }
}

function process(json) {
  console.log(json);
  // if (json) {
  //   $("id").innerHTML = json.id;
  //   $("username").innerHTML = json.username;
  //   $("age").innerHTML = json.age;
  // } else {
  //   $("msg").innerHTML = "用户不存在";
  //   $("id").innerHTML = "";
  //   $("username").innerHTML = "";
  //   $("age").innerHTML = "";
  // }
}
</script>



<style scoped>
  .container{
    margin: 20px auto;
  }

</style>
