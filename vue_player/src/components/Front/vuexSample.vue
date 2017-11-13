<template>
<div>
  <p>
    you clicked {{getCount}} Times
  </p>

  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="() => count++">
    Stuff
  </button>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="() => $store.commit('increment')">
    Commit an change
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      msg: ''
    }
  },
  computed: {
    getCount: function() {
      return this.count
    }
  },
  methods: {
    methodName() {

    }
  },
  watch: {
    count: function(val) {
      this.log('new count = ' + val + ' original count ' + this.count)
    }
  },
  created() {
    //do something after creating vue instance

  },
  beforeCreate() {
    //do something before creating vue instance

  }



}
</script>

<style scoped>
@import "../../common/stylebase.css";
</style>
