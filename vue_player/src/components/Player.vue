<template>
  <div id="player">
      <h2>This is the Controller</h2>
      <button v-on:click='play'>Play</button>
      <button v-on:click='pause'>Pause</button>
      <audio  ref='audiofile' :src='this.src' preload="auto"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      audio : undefined ,
      playing: false ,
      paused : false ,
      loaded: false,
      currentTime: '00:00',
      muted: false,
      src: '../../static/musics/赵雷-成都.mp3'
    }
  },
  methods: {
    play: function () {
      if (this.playing) return
      this.paused = false
      console.log(this.audio);
      this.audio.play().then(function () {
        console.log('future');
      })
      this.playing = true
    },
    pause: function () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause():this.audio.play()
    }
  },
  computed: {
    
  },
  beforeCreate () {
    console.log('before created')
  },
  mounted () {
    console.log('mounted')
    this.audio = this.$el.querySelectorAll('audio')[0]
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
