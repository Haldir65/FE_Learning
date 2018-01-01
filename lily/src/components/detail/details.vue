<template>
  <transition name='fade'>
      <div v-show="showFlag" class="details">
          <div>
              <header class="header">
                  <header class="bar bar-nav" v-on:click='show'>
                      <div class="pull-left">
                          <span class="iconfont icon-left"></span>
                      </div>
                      <div class="title">Detail title</div>
                  </header>
              </header>
              <v-day :data='detailsData' ref="day"></v-day>
          </div>

      </div>
  
  </transition>
</template>

<script>
import vDay from '../day/day.vue';
export default {
  name: 'v-details',
  props: {
    time: {
      type: String
    },
    detailsData: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false
    };
  },
  created () {

  },
  methods: {
    show () {
      this.showFlag = true;
      this.$nextTick(() => {
      });
    },
    hide () {
      this.showFlag = false;
    }
  },
  components: {
    vDay
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'details.styl';
</style>


