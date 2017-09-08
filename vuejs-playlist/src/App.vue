<template>
  <div >
    <app-header v-bind:title='title'></app-header>
    <app-fruits v-bind:fruits='fruits'></app-fruits>
      <ul>
        <li v-for='fruit in fruits'>{{fruit.name}}</li>
      </ul>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>


import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import fruits from './components/Fruits.vue';



export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-fruits':fruits
  } ,
  data () {
    return {
      fruits:[
        {name: 'Apple', id : 1 , show: false,img:'../assets/logo.png'},
        {name: 'Banana', id : 2 , show: false,img:'../assets/logo.png'},
        {name: 'Pie', id : 3 , show: false,img:'../assets/logo.png'},
        {name: 'Juice', id : 4 , show: false,img:'../assets/logo.png'},
        {name: 'peach', id : 5 , show: false,img:'../assets/logo.png'},
        {name: 'Strawberry', id : 6 , show: false,img:'../assets/logo.png'},
        {name: 'blueBerry', id : 7 , show: false,img:'../assets/logo.png'},
        {name: 'cherry', id : 8 , show: false,img:'../assets/logo.png'},
        {name: 'Grape', id : 9 , show: false,img:'../assets/logo.png'},
        {name: 'PinApple', id : 10 , show: false,img:'../assets/logo.png'}

      ],
      title : "Fruit Shop"
    }
  }
}
</script>

<style >
  body{
    margin: 0;
    font-family: 'Nunito SemiBold'
  }

</style>
