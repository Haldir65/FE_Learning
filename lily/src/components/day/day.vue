<template>
  <div class="day bounceInRight" rel='dom'>
      <h1 v-if="data && data.title">{{data.title}}</h1>
      <div v-if='data' v-html="data.content"></div>
  </div>
</template>

<script>
import vImg from '../lazyloadImg/lazyimg.vue';
export default {
  name: 'v-day',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      content: false
    };
  },
  components: {
    vImg
  },
  created () {
    this.clearStyle();
  },
  methods: {
    clearStyle () {
      this.$nextTick(() => {
        let tags = this.$el.getElementsByTagName('img');
        for (let i = 0; i < tags.length; i++) {
          tags[i].removeAttribute('style');
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import 'day.styl'

</style>


