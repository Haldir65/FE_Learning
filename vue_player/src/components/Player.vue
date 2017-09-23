<template>
  <div id="player">
      <h2>Supposedly the main Controller</h2>
      <button v-on:click='play'>Play</button>
      <button v-on:click='pause'>Pause</button>
      <button v-on:click ='mute'>Mute</button>
      <button v-on:click = 'next'>Next</button>
      <audio  ref='audiofile' :src='this.src' preload="none"></audio>
      <div class="music-progress">
        <div class="progress">
          <br/>


          <span class="start">{{transformTime(now)}}</span>
          <!-- <div @click="changeTime($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" ref="progressBar" class="progress-bar">
            <div class="now" ref="now" :style="{width: (now / audio.duration).toFixed(3)*100 + '%'}"></div>
          </div> -->
          <span class="end" v-text="totalTime"></span>
        </div>
      </div>

      <div class="music-control" >
        <i @click="play" v-bind:class="[isPlaying ? pauseIcon : playIcon]">music control</i>
      </div>

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
      now: 0,
      muted: false,
      totalTime: '0:00',
      pauseIcon: 'pause-icon',
      playIcon: 'play-icon',
      interval_id: 0,
      src: '../../static/musics/Carpenters - Yesterday Once More.mp3',
      musics: [{'src' : '../../static/musics/赵雷-成都.mp3'},
        {'src': '../../static/musics/Carpenters - Yesterday Once More.mp3'}]
    }
  },
  methods: {
    play: function () {
      if (this.playing) return
      this.paused = false
      console.log(this.audio);
      let playPromise = this.audio.play()
      if (playPromise!=undefined) {
          playPromise.then( _=> {
            console.log('auto play started')
            this.playing = true

          })
      .catch(  _=> {
        console.log()
        this.playing = false
        })
      }
    },
    pause: function () {
      this.paused = !this.paused;
      this.playing = !this.paused;
      (this.paused) ? this.audio.pause():this.audio.play()
    },
    mute: function () {
      this.muted = !this.muted
      this.audio.muted = this.muted
    },
    next : function () {
      let array = this.musics
      let length = array.length
      for (let i = 0 ; i<length;i++){
        let data = array[i]
        // console.log(data['src']);
        if (data['src']!=this.src) {
          this.src = data['src']
          this.audio.pause()
          clearInterval(this.interval_id)
          this.playing = false
          break
        }
        this.audio.currentTime = 0



      }
    },
    transformTime(seconds) {
      let m, s;
      m = Math.floor(seconds / 60);
      m = m.toString().length == 1 ? ('0' + m) : m;
      s = Math.floor(seconds - 60 * m);
      s = s.toString().length == 1 ? ('0' + s) : s;
      return m + ':' + s;
    },
    get_audio_list(){

      return this.musics;
    }
  },
  computed: {
    isPlaying(){
      return this.playing;
    }
  },
  beforeCreate () {
    console.log('before created')

  },
  mounted () {
    console.log('mounted')
    let m = this.get_audio_list()
    console.log(m[0]['src']);
    this.audio = this.$el.querySelectorAll('audio')[0]

    this.audio.addEventListener('play',() =>{
      this.totalTime = this.transformTime(this.audio.duration);
      console.log(this.totalTime);
      this.now = this.audio.currentTime;

    this.interval_id  = setInterval(() =>{
        this.now = this.audio.currentTime;
        console.log('currentTime = '+this.now);
      },1000)

    })

      // this.audio.addEventListener('ended',function () {
      //   this.audio.currentTime = 0
      //   this.audio.play() // for looping this audio
      // })


  }

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

.music-control {
  flex: 1.5;
  padding-top: 40px;
  i {
    padding-right: 10px;
    width: 45px;
    height: 45px;
    margin-top: 13px;
    display: inline-block;
    cursor: pointer;
    border-radius: 22px;
  }
  .play-icon {
    background: url(./play.svg) no-repeat;
    width: 40px ;
    height: 200px;

  }
  .pause-icon {
    background: url(./pause.svg) no-repeat;
    background-size: contain;
  }
}
</style>
