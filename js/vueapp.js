new Vue({
  el:'#vue-app',
  data:{
    name:'Shaun',
    job: 'Ninja',
    age: 35,
    website:'https://www.baidu.com',
    websiteTag:'<a href="https://www.baidu.com">Baidu site tag</a>',
    x:0,
    y:0,
    a: 0,
    b:0
  },
  methods:{
    greet:function (time) {
      return 'Good '+time+' '+this.name
    },

    add:function (inc) {
      this.age+=inc;
    },

    subtract:function (dec) {
      this.age-=dec;
    },

    updateXY:function(event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickonce:function () {
      alert('default action prevented')
    },
    logName:function () {
      console.log('you clicked name ');
    },
    logAge:function () {
      console.log('you enterd age');
    }
  },
  
  computed:{
    addToA:function () {
      console.log('add to A')
      return this.a+this.age;
    },
    addToB:function () {
console.log('add to B');
return this.b+this.age
    }
  }



});
