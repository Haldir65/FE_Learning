<template>
  <div class="welfare-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="welfare-center">
      <figure v-show="totalData.length >0" v-for="data in totalData">
        <v-img :imgUrl="data.url"></v-img>    
    </figure>    
    </div> 
    <div class="welfare-center" v-on:click='loadMore'>
      <figure>
        <v-img :imgUrl="data.url"></v-img>    
    </figure>    
    </div>
    <v-details ref="details" :time="time" :detailsData="detailsData"></v-details>
  </div>
</template>

<script>
import vImg from '../lazyloadImg/lazyimg.vue'
import vDetails from '../detail/details.vue'
import {get} from '../../common/js/api'

export default {
  data () {
    return {
      name: 'welfare',
      leftData: [],
      rightData: [],
      totalData: [],
      data: {
        url: 'http://odzl05jxx.bkt.clouddn.com/suchdata-big.png'
      },
      page: 1,
      detailsData: {},
      time: ''
    }
  },
  methods: {
    loadMore () {
      console.log('load more')
      if (get) {
        get('https://gank.io/api/data/福利/10/1').then((response) => {
          console.log(response)
          this.totalData = response.results
        })
      }
    }
  },
  components: {
    vImg,
    vDetails
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import 'welfare.styl';
</style>


