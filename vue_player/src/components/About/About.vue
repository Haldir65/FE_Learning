<template>
<div class="about_container marginTop50">

  <p class="Card">
    中新社北京10月22日电(记者曾鼐)针对记者有关“入园难”“择校热”等提问，中国教育部党组书记、部长
    <strong>陈宝生
      </strong> 22日在北京表示，将提升普惠性幼儿园占比，化解好学校减负、校外增负的问题；到2020年，完全消除“大班额”，基本普及高等教育。
    <button @click="() => $store.commit('increment')">increase count</button>
    <button @click="() => log($store.state.count)">get count</button>
  </p>


  <div class="Card marginTop50">
    <p>
      日前，一则武汉市发改委关于城市地铁的回复引起大家的关注，武汉市发改委在回复中表示，国家要求国家发改委对全国轨道交通建设情况重新评估，在此基础上行程分类管理意见，待国家批准后再启动审批工作。具体内容见下图
    </p>
  </div>
  <img src="/static/imgs/scene1.jpg" width="500px" height="300px" class="displayed" />
  <div class="text-center marginTop50 ">
    <router-link to='./samples/vuex'>Vuex Samples</router-link>
  </div>

  <div class="Card marginTop50">
    <p>
      中新社北京10月22日电(记者曾鼐)针对记者有关“入园难”“择校热”等提问，中国教育部党组书记、部长
      <strong>陈宝生
        </strong> 22日在北京表示，将提升普惠性幼儿园占比，化解好学校减负、校外增负的问题；到2020年，完全消除“大班额”，基本普及高等教育。
    </p>

  </div>


</div>
</template>


<script>
import { axios } from "../../main";
import { getAjax,jsonp } from "../../utils/http";
import { api } from "../../utils/api";

export default {
  name: "about",
  data() {
    return {
      showing: true,
      ended: false,
      results: ""
    };
  },
  methods: {
    getcount: function() {},
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.right, params);
      if (res.data.success) {
        alert("请求成功");
      }
    }
  },
  computed: {},
  created() {
    // getBaidu()
    // getDouBanViaJsonP()
    // getMyPost()
    // getCNposts()
    // this.log(axios)
    // getJsonViaMyAxios()
  }
};

function getBaidu() {
  // axios({
  //   method: "get",
  //   url: "http://api.douban.com/v2/movie/top250",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": ["get", "post"],
  //     method: "get",
  //     withCredentials: "true"
  //   },
  //   crossDomain: "true"
  // })
  //   .then(function(res) {
  //     console.log(res.data);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
}

function getDouBanViaJsonP() {
  jsonp("http://api.douban.com/v2/movie/top250", null, function(err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
      return data;
    }
  });
}

function getMyPost() {
  axios
    .get("http://127.0.0.1:10877/posts")
    .then(function(res) {
      console.log(res);
    })
    .catch(function(error) {
      console.log("errors");
    });
}

function getCNposts() {
  axios
    .get("https://cnodejs.org/api/v1/topics")
    .then(function(res) {
      console.log(res);
    })
    .catch(function(error) {
      console.log("errors");
    });
}

function getJsonViaMyAxios() {
  // let params = {};
  // http
  //   .get(api.posts, params)
  //   .then(function(res) {
  //     console.log(res);
  //   })
  //   .catch(function(error) {
  //     console.log("errors");
  //   });
}
</script>


<style scoped>
@import "../../common/stylebase.css";

.strong {
  font-weight: 600;
  color: #2c3e50;
}

.Card > .Card_like_router {
  margin-top: 50px;
  color: #009688;
}
</style>
