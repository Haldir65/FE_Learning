<template>
  <div id="player">
      <h2>This is the Controller</h2>
      <button v-on:click='handleClick'>This is some Button</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nativeAudio: {}
    }
  },
  methods: {
    handleClick: function () {
      alert('you click on this button')
    }
  },
  beforeCreate () {
    console.log('before created')
  },
  mounted () {
    console.log('mounted')
    var audio = new Audio('./assets/musics/赵雷-成都.mp3')
    audio.play()
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
