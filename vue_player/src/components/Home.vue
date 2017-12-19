<template>
<div class="container  marginTop50">
  <h2 class="text-center center_positioning_text">
    The new curtains are hedious
  </h2>
  <div class="text-left">

    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
      <!-- <p class="text-muted">Modern Dictionary</p> -->
      <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
    </div>

    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
      <router-link :to="{ name: 'vuex', params: {} }">VuexSample</router-link>
    </div>

    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
      <router-link :to="{ name: 'cssPositioning', params: {}}">Css Positioning</router-link>
      <p class="text-success ">Modern Dictionary success class</p>
      </div>

      <div class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
        <router-link :to="{ name: 'css_positioning_2', params: {}}">Css Positioning2</router-link>
      </div>

      <div @click='click1' class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
        <p class="text-warning">Modern Dictionary warning class</p>
      </div>

      <div @click='click1' class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
        <p class="text-danger">Modern Dictionary danger class</p>
      </div>

      <div class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
        <router-link :to="{ name: 'VFors', params: { property: value}}">loops via v-for</router-link>
      </div>

      <div class="demo-card-wide mdl-card mdl-shadow--2dp center_positioning_text">
        <router-link :to="{ name: 'AxioSample', params: { property: value}}">axios made easy</router-link>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "vifs",
  message: "",

  data() {
    return {
      message: "",
      name: "home"
    };
  },
  comuted() {
    return {};
  },
  methods: {
    click1: function(args) {
      // this.log(args)
    }
  },
  created: function() {},
  mounted: function() {}
};
</script>


<style scoped>
@import "../common/stylebase.css";
.demo-card-wide.mdl-card {
  width: 512px;
  height: 80px;
  margin-top: 10px;
}

.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: auto;
  /*background: url('../../assets/welcome_card.jpg') center / cover;*/
}

.demo-card-wide > .mdl-card__menu {
  color: #fff;
}

.card_margin_wrapper {
  margin: auto;
}

.center_positioning_text {
  min-height: 80px;
}

.center_positioning_text a {
  top: 50%;
  transform: translateY(-50%);
  color: chocolate;
  text-decoration: underline;
  text-transform: capitalize;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.container {
  background: white;
}
</style>
