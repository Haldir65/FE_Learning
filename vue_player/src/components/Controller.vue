<template>
  <div id="controller">
    <h1 >
       <strong v-text='msg' >Controller</strong>
    </h1>
    <div class="topstory_container">
      <img src="http://p4.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg" style="width:300px;height:300px;display:none"/>
      <ul id='people_list' class='Card'>
        <li v-for='(author , index) in authors' style="transition: all 1000ms">
        {{index}} --- {{author.name}} whose age is {{author.age}}
        </li>
      </ul>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>

    </div>
  </div>
</template>


<script>
// let clog = require'../utilities/util'
import { IOUtil } from '../mixins/utils.js'
import { bus } from '../main';

export default {
  name: 'controller',
  data () {
    return {
      msg: 'Some list of people here',
      authors: [{'name':'jane','age':10},
      {'name':'Tim','age':20},
      {'name':'Tina','age':17},
      {'name':'Bob','age':30}],
      browserHistory : localStorage.browserHistory,
      message : 'listen to text input'
    }
  },
  methods:{

  },
  mixins:[IOUtil],
  beforeCreate(){
    // trying to access this.xxx will only return undefined
  },
  created(){
    this.$bus.on('paused', text => {
      this.log('message from the playing '+text)
    })
    let history = localStorage['musics']
    if (history != undefined){
      let array = JSON.parse(history)
      for (let i = 0; i < array.length; i++) {
        let msg = array[i]['name']+" --- "+array[i]['src']
        // console.log(msg);
      }
    }
    // this.wirteToLocalStorage(28,'name')
    // // console.log(localStorage)
    // let origin = this.readFromLocalStorage(28)
    // this.log(origin);
    // console.log(parseInt(origin)+20)// parseInt change Str 21 to int 21
  },

  mounted(){
      junk()
      // console.log(clog);
      // this.log('this is some colorful log, now we have fine grain control over ouer log output color')
  },

  beforeDestory(){
    this.$bus.off('paused',this.showPaused)
  }
}


// put custom function here


function  junk() {
  let array  = new Array(10)
  for(let i= 0;i<array.length;i++){
    array[i] = i
  }


  // array.map(x => x*x).forEach(it => console.log(it))

  array = Array.of({'b':12,'a':12},{'b':133,'a':55})
  // array.forEach(item => console.log(item))

  let index = array.findIndex(function (value,index,arr) {
    return value['b']>10
  })

  array = [1,2,45]

  for (let index of array.keys()){
    // console.log(index);
  }

  // let array2 = [for (i of array) i*3];

  // array2.forEach(it => console.log(it))

  var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];

  // [for (year of years) if (year > 2000) year];

  years.pop()
 let out =  years.slice(0,2) //切割数组下标0,1的元素
 // console.log(out);

  // for(let i =0;i<array.length;i++){
  //   console.log(array[i]['name'])
  // }

  // array.forEach(it => logit(it['name']))

  // array.forEach( (value) => {
  //   let is_number = (typeof(value) == 'number')
  //   console.log(value,is_number);
  // }  )

  // let date = new Date()
  // let num = '1'

  // array.forEach(function (arg) {
  //   console.log(arg['name'],arg['age'],10999)
  // })


}





function judge_type(args) {
  console.log(typeof(args));
}

</script>


<style scoped>
  @import "../common/stylebase.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

.strong {
  font-weight: 600;
  color: #2c3e50;
}

#people_list{
  width: auto;
  position: relative;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  margin-top: 50px;
  transform: translate(-50%, -50%);
  padding: 16px 20px;
  display: block;
}

</style>
