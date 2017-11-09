<template>
<div id="player">
  <h2>Supposedly the main Controller</h2>
  <button v-on:click='play' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Play</button>
  <button v-on:click='pause' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-text='pause_button_text'>Pause</button>
  <button v-on:click='mute' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Mute</button>
  <button v-on:click='next' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Next</button>
  <button v-on:click='advance' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">advance</button>
  <button class="mdl-button mdl-js-button mdl-button--raised">
        Button
      </button>
  <audio ref='audiofile' :src='this.src' preload="auto"></audio>
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

  <div class="music-control normal_button">
    <i @click="play" v-bind:class="[isPlaying ? pauseIcon : playIcon]">music control</i>
  </div>

</div>
</template>

<script>
import {
  bus
} from '../main'

export default {
  data() {
    return {
      audio: undefined,
      playing: false,
      paused: false,
      loaded: false,
      now: 0,
      muted: false,
      totalTime: '0:00',
      pauseIcon: 'pause-icon',
      playIcon: 'play-icon',
      interval_id: 0,

      src: '../../static/musics/Carpenters - Yesterday Once More.mp3',
      musics: [{
          'src': '../../static/musics/赵雷-成都.mp3',
          'duration': 0
        },
        {
          'src': '../../static/musics/Carpenters - Yesterday Once More.mp3',
          'duratin': 0
        }
      ]
    }
  },
  methods: {
    play: function(id) {
      this.paused = false
      if (this.playing) return
      let playPromise = this.audio.play()
      if (playPromise != undefined) {
        playPromise.then(_ => {
            // console.log('auto play started')
            this.log('playback will start now')
            this.playing = true
            self.clearInterval(id)
          })
          .catch(_ => {
            this.playing = false
          })
      }
    },
    pause: function() {
      this.paused = !this.paused;
      this.playing = !this.paused;
      // console.log('---------------------------'+this.paused);
      (this.paused) ? this.audio.pause(): this.audio.play()
      // this.log((this.paused)?'paused':'playback resumed')
      this.$bus.emit('paused', !this.paused ? 'playing' : 'paused')

    },
    mute: function() {
      this.muted = !this.muted
      this.audio.muted = this.muted
    },
    next: function() {
      let array = this.musics
      let length = array.length
      for (let i = 0; i < length; i++) {
        let data = array[i]
        // console.log(data['src']);
        if (data['src'] != this.src) {
          this.src = data['src']
          this.audio.pause()
          clearInterval(this.interval_id)
          this.playing = false
          break
        }
        this.audio.currentTime = 0
      }
      this.audio.pause()
      this.audio.src = ''
      this.palying = false
      let id = setTimeout(this.play, 100)
    },
    advance: function() {
      console.log('seekTo')
      let des = this.audio.currentTime + 60
      if (this.audio.duration <= des) {
        this.next()
      } else {
        this.audio.currentTime += 60
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
    get_audio_list() {
      self.setTimeout(function() {
        // console.log('excuted'); // this is for scheduling a task for later execution
      }, 100)
      return this.musics;
    }
  },
  computed: {
    isPlaying() {
      return this.playing;
    },
    pause_button_text() {
      return this.paused ? 'resume' : 'pause';
    }
  },
  beforeCreate() {
    // console.log('before created')
  },
  created() {
    // this.log('player created')

  },
  beforeMount() {

  },
  mounted() {
    // console.log('mounted')
    let m = this.get_audio_list()
    if (this.audio == undefined) {
      this.audio = this.$el.querySelectorAll('audio')[0]
      this.audio.addEventListener('play', () => {
        this.totalTime = this.transformTime(this.audio.duration);
        if (this.totalTime != undefined) {
          let length = this.get_audio_list().length
          let current_src = this.audio.src
          for (let i = 0; i < length; i++) {
            let music = m[i]
            if (music['src'] == current_src && music['duration'] == 0) {
              music['duration'] = this.audio.duration
            }
          }
        }
        this.now = this.audio.currentTime;

        this.interval_id = setInterval(() => {
          this.now = this.audio.currentTime;
          // console.log('currentTime = '+this.now);
        }, 1000)



      })
      this.audio.addEventListener('ended', () => {
        console.log('ended')
        this.next()
      })
    }
    // this.audio.addEventListener('ended',function () {
    //   this.audio.currentTime = 0
    //   this.audio.play() // for looping this audio
    // })
  },
  beforeUpdate() {
    // console.log('before updated')
  },
  updated() {
    // console.log('updated'+this.interval_id);
    // if (this.interval_id!=0) {
    //   self.clearInterval(this.interval_id)
    //   this.interval_id = 0
    // }
    if (this.interval_id == 0) {
      this.interval_id = setInterval(() => {
        this.now = this.audio.currentTime;
        // console.log('currentTime = '+this.now);
      }, 1000)
    }

  },
  beforeDestory() {
    // console.log('beforeDestory');

  }
}
</script>

<style scoped>
@import "../common/stylebase.css";

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
  width: 100px;
  position: relative;
  margin-left: 200px;
  border-radius: 3px;
  background-color: rgb(32, 241, 164);
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
    /*background: url(./play.svg) no-repeat;*/
    width: 40px;
    height: 200px;

  }
  .pause-icon {
    /*background: url(./pause.svg) no-repeat;*/
    background-size: contain;
  }
}

.play_button {
  background: #0f88eb;

}

.pause_button {
  background: #42b983;
  font-weight: 600;
}

.mute_button {
  background: #9eadb6;
}
</style>
