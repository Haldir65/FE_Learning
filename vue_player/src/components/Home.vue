<template>
<div class="container  marginTop50">
  <p class="text-center" style="color : #b050b5 ,font-size:250%">
    The new curtains are hedious
  </p>
  <div class="text-left">
    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp">
      <!-- <p class="text-muted">Modern Dictionary</p> -->
      <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
    </div>
    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp">
      <router-link :to="{ name: 'vuex', params: {} }">VuexSample</router-link>
    </div>
    <div @click='(ev) => log(ev)' class="demo-card-wide mdl-card mdl-shadow--2dp">
      <p class="text-success">Modern Dictionary success class</p>
      </div/>
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <p class="text-info">Modern Dictionary info class</p>
      </div>
      <div @click='click1' class="demo-card-wide mdl-card mdl-shadow--2dp">
        <p class="text-warning">Modern Dictionary warning class</p>
      </div>
      <div @click='click1' class="demo-card-wide mdl-card mdl-shadow--2dp">
        <p class="text-danger">Modern Dictionary danger class</p>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'vifs',
  data() {
    return {
      name: 'home'
    }
  },
  comuted() {
    return {

    }
  },
  methods: {
    click1: function(args) {
      // this.log(args)
    }
  },
  created: function() {

  },
  mounted: function() {

  }



}
</script>


<style scoped>
@import "../common/stylebase.css";
.demo-card-wide.mdl-card {
  width: 512px;
  height: auto;
  min-height: 80px;
  margin-top: 10px
}

.demo-card-wide>.mdl-card__title {
  color: #fff;
  height: auto;
  /*background: url('../../assets/welcome_card.jpg') center / cover;*/
}

.demo-card-wide>.mdl-card__menu {
  color: #fff;
}

.card_margin_wrapper {
  margin: 10px
}
</style>
