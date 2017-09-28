<template>
  <div id="controller">
    <h1 >
       <strong v-text='msg'>Controller</strong>
    </h1>
    <ul id='people_list'>
      <li v-for='(author , index) in authors' style="transition: all 1000ms">
      {{index}} --- {{author.name}} whose age is {{author.age}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'controller',
  data () {
    return {
      msg: 'Some list of people here',
      authors: [{'name':'jane','age':10},
      {'name':'Tim','age':20},
      {'name':'Tina','age':17},
      {'name':'Bob','age':30}]
    }
  },
  beforeCreate(){
    // trying to access this.xxx will only return undefined
  },
  created(){},

  mounted(){

    let array  = new Array(10)
    for(let i= 0;i<array.length;i++){
      array[i] = i
    }

    // for(let i =0;i<array.length;i++){
    //   console.log(array[i]['name'])
    // }

    // array.forEach(it => logit(it['name']))

    // array.forEach( (value) => {
    //   let is_number = (typeof(value) == 'number')
    //   console.log(value,is_number);
    // }  )

    let date = new Date()
    let num = '1'
    judge_type(0)

    // array.forEach(function (arg) {
    //   console.log(arg['name'],arg['age'],10999)
    // })


  }
}


// put custom function here

function logit(arg) {
  console.log(arg);

}


function judge_type(args) {
  console.log(typeof(args));
}

</script>

<style scoped>
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
  background: #d7e4de;
  width: auto;
  list-style-type : square;
  text-align:center ;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  margin-top: 50px;
  transform: translate(-50%, -50%);
}

</style>
