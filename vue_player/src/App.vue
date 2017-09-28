<template>
  <div id="app">

    <app-player></app-player>
    <app-controller></app-controller>
    <app-footer></app-footer>

  </div>
</template>




<script>
import Player from './components/Player'
import Controller from './components/Controller'
import Footer from './components/Footer'


export default {
  name: 'app',
  components: {
    'app-player': Player,
    'app-controller': Controller,
    'app-footer': Footer
  },
  data () {
    return {
      'audio': {
        'src': './assets/赵雷-成都.mp3'
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
