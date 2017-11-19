// var data = {
//   name : 'Bob' this will change data externally
// }
Vue.component('greeting',{
  template:'<p> a resuable tag, generally stuff that can be reused,<br> behold , we can have the name  changed {{name}} <button v-on:click="changeName">Click to Change this name</button> </p>',
  data:function(){
    return {
      name: 'Josh'
    }
  },
  methods:{
    changeName:function(){
      this.name = 'Henry';
    }
  }
});

new Vue({
  el:'#vue-app-one',
  data:{

  },
  methods:{},
  computed:{}
});

new Vue({
  el:'#vue-app-two',
  data:{},
  methods:{},
  computed:{}
});
