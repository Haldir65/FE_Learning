<template>
  <div id="fruits">
    <ul>
      <li v-for='fruit in fruits' v-on:click='fruit.show=!fruit.show'>
        <h2>{{fruit.name}}</h2>
        <h3 v-show='fruit.show'>{{fruit.id}}</h3>

      </li>
        

    </ul>
    <button v-on:click='deleteFruit'>Delete A Fruit</button>
  </div>
</template>

<script>




export default {
  props:{
    fruits:{
      type:Array,
      required:true
    }
  },

  data () {
    return {
      
    }
  },
  methods:{
    deleteFruit:function () {
      this.fruits.pop();
    }
  },
  // lifecycle hooks
  beforeCreate(){
    alert('before created')
  },
  created(){
    alert('created!')
  },
  beforeMount(){
    alert('befor Mounted')
  },
  mounted(){
    alert('mounted')    
  },
  beforeUpdate(){
    alert('before update')
  },
  updated(){
    alert('updated')
  }

}
</script>

<style scoped>
  #fruits{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
  


</style>
