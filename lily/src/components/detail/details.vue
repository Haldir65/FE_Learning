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
          </div>

      </div>
  
  </transition>
</template>

<script>
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
    }
  },
  created () {

  },
  methods: {
    show () {
      this.showFlag = true
      this.$nextTick(() => {
        console.log('tick')
      })
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>


