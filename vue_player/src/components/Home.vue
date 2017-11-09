<template>
<div class="container">
  <p class="text-center" style="color : #b050b5 ,font-size:250%">
    The new curtains are hedious
  </p>
  <div class="text-left">
    <div @click='click1'>
      <p class="text-muted">Modern Dictionary</p>
      <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
    </div>
    <div @click='click1'>
      <p class="text-primary">Modern Dictionary primary class</p>
    </div>
    <div @click='click1'>
      <p class="text-success">Modern Dictionary success class</p>
    </div @click='click1'>
    <div>
      <p class="text-info">Modern Dictionary info class</p>
    </div>
    <div @click='click1'>
      <p class="text-warning">Modern Dictionary warning class</p>
    </div>
    <div @click='click1'>
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
    click1: function() {
      this.log('hhhh')
    }
  },
  created: function() {

  },
  mounted: function() {

  }



}
</script>


<style scoped>

</style>
