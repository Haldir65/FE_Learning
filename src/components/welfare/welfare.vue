<template>
  <div class="welfare-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="welfare-center">
      <figure v-show="totalData.length >0" v-for="data in totalData" v-on:click= "showDetail(data.createdAt)">
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
import vImg from '../lazyloadImg/lazyimg.vue';
import vDetails from '../detail/details.vue';
import {get, API} from '../../common/js/api';
import {objectDate} from '../../common/js/date';

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
    };
  },
  mounted () {
  },
  methods: {
    loadMore () {
      console.log('load more triggered');
      if (get) {
        get(`${API}10/${this.page}`).then((response) => {
          console.log(`current page count ${this.page}`);
          this.totalData = this.totalData.concat(response.results);
          this.page++;
          this.busy = false;
        });
      }
    },
    showDetail (time) {
      this.time = time;
      console.log(time);
      let obj = objectDate(time);
      console.log(obj);
      // obj.M = 9;
      // obj.D = 20;
      get(`http://gank.io/api/history/content/day/${obj.Y}/${obj.M}/${obj.D}`).then((response) => {
        if (response.results[0]) {
          showConcreteDetail(this, response);
        } else {
          get(`http://gank.io/api/history/content/day/2017/9/20`).then((response) => {
            showConcreteDetail(this, response);
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  components: {
    vImg,
    vDetails
  }
};

function showConcreteDetail (_this, response) {
  _this.$refs.details.show();
  _this.$nextTick(() => {
  // this.$store.commit('UPDATE_LOADING', false);
  });
  _this.detailsData = response.results[0];
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import 'welfare.styl';
</style>


