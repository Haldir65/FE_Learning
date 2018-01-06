<template>
  <div>
    <div class="page-over" v-show="menuShow" v-on:click="toggleShow" ></div>
    <header class="header" :class="{'show': menuShow}" @click="toggleShow">
        <header class="bar bar-nav">
          <div class="pull-left">
            <span class="iconfont icon-fenlei"></span>
          </div>
          <div class="title">{{headerTitle}}</div>
          <div class="pull-right">
            <span class="iconfont icon-sousuo_sousuo"></span>
          </div>
        </header>
      </header>
      <v-menu :show="menuShow"></v-menu>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex';
import vMenu from '../menu/menu.vue';
export default {
  name: 'v-header',
  data () {
    return {
      show: true,
      detailShow: false
    };
  },
  computed: {
    ...mapState([
      'menuShow', 'headerTitle'
    ])
  },
  components: {
    vMenu
  },
  methods: {
    toggleShow () {
      console.log('toggle');
      this.$store.commit('UPDATE_MENUSHOW');
    },
    hideDetail () {
      this.detailShow = false;
    }
  }
};
</script>

<style lang="stylus">
@import 'header.styl';
</style>


