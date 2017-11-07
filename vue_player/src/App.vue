<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 text-success" >
          <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
        </div>
        <div  class="col-lg-2 text-info">
          <router-link :to="{ name: 'About', params: {} }">About</router-link>
        </div>
        <div  class="col-lg-2 text-warning" >
          <router-link :to="{ name: 'Player', params: {} }">Player</router-link>
        </div>
        <div class="col-lg-2 text-primary" >
          <router-link :to="{ name: 'Header', params: {} }">Header</router-link>
        </div>
        <div class="col-lg-2 text-danger">
          <router-link :to="{ name: 'vifs', params: {} }">Vifs</router-link>
        </div>
      </div>
    </div>

    <!-- <app-player></app-player>
    <app-controller></app-controller> -->
    <!-- <app-header></app-header> -->
    <!-- <app-footer></app-footer> -->
    <!-- <app-about></app-about> -->
    <router-view></router-view>

  </div>
</template>




<script>
import Player from './components/Player'
import Controller from './components/Controller'
import Footer from './components/Footer'
import About from './components/About/About'
import Header from './components/Front/Header'


export default {
  name: 'app',
  components: {
    'app-player': Player,
    'app-controller': Controller,
    'app-footer': Footer,
    'app-about': About,
    'app-header': Header
  },
  data () {
    return {
      'audio': {
        'src': './assets/赵雷-成都.mp3'
      }
    }
  },
  created:function () {

  },
  beforeCreate: function () {

  }

}
</script>

<style>

</style>
