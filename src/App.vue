<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/header/header.vue';
import {mapState} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      firstShow: false,
      show: false
    };
  },
  computed: {
    ...mapState([
      'loadingShow'
    ])
  },
  methods: {
    hideDetail () {
      this.detailShow = false;
    }
  },
  components: {
    vHeader
  }
};
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

#app .show {
  transform: translateX(250px)
}

#app .page-over {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
}


</style>
