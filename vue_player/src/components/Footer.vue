<template>
  <div id="footer">
    <ul>
      <p>
        <a href="https://github.com/microzz/vue-music-player" target="_blank">Some reference</a>
      </p>
      <p>
        <a href="https://github.com/shershen08/vuejs-sound-player" target="_blank">a cute Plugin</a>
      </p>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'footer',
  data () {
    return {
      msg: 'copyRight footer'
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
