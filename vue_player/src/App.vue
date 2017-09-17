<template>
  <div id="app">
    <a href="https://github.com/microzz/vue-music-player" target="_blank">Some reference</a>
    <app-player></app-player>
    
  </div>
</template>




<script>
import Player from './components/Player'
import Controller from './components/Controller'

export default {
  name: 'app',
  components: {
    'app-player': Player,
    'app-controller': Controller
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
