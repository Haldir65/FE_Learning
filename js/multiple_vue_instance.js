var one = new Vue({
  el: '#vue-app-one',
  data:{
    title:'Henry'
  },
  methods:{

  },
  computed:{
    greets:function () {
      return 'Hello one'
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data:{
    title:'Henry'
  },
  methods:{
    changeTitle:function () {
      one.title = 'Changed'
    }
  },
  computed:{
    greets:function () {
      return 'Hello Two'
    }
  }
});

two.title= 'Jimmy Change it from the outside';
