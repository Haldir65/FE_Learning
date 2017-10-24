<template>
  <div class="Card about_container">
    <p class="Card">
      中新社北京10月22日电(记者曾鼐)针对记者有关“入园难”“择校热”等提问，中国教育部党组书记、部长
      <strong>陈宝生
      </strong>
      22日在北京表示，将提升普惠性幼儿园占比，化解好学校减负、校外增负的问题；到2020年，完全消除“大班额”，基本普及高等教育。
    </p>


    <button @click="() => $store.commit('increment')">increase count</button>
    <button @click ="() => log($store.state.count)">get count</button>
  </div>
</template>

<script src="https://cdn.bootcss.com/axios/0.16.2/axios.js"></script>

<script>
import {axios} from '../../main'

export default {
  name : 'about',
  data() {
    return {
      showing : true,
      ended :false
    }

  },
  methods:{
    getcount: function () {

    }
  },
  computed:{

  },
  created(){
    console.error('created')
    this.log(axios)
    axios.get("https://www.baidu.com")
        .then(response => {
            console.log('get result')
            // this.results = response.data
            console.log(this.results)
          })
  }
}

</script>


<style scoped>
    @import "../../common/stylebase.css";

    .strong {
      font-weight: 600;
      color: #2c3e50;
    }




</style>
