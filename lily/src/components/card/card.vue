<template >
<div class="card">
  <img src="http://odzl05jxx.bkt.clouddn.com/image/jpg/yellow-autumn-leaves-wallpaper-537f1e4672a31.jpg" class="img"> 
  <div class="card-content">
    <div class="desc">Some description</div>
    <div class="card-content-bottom">
      <div class="who">The author of this Content</div>
      <div class="time">2017-12-09</div>
    </div>
  </div>
  </div> 
  </template>

<script>
export default{
  name: 'v-card',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import 'card.styl';

</style>

