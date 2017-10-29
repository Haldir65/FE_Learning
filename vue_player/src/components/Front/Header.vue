<template>
  <div id="header_wrapper">
    <p>
      {{msg}}
    </p>

    <div id="flip_card_container">

      <div class="flip_card_item">

          {{msg}}

          <div class="box b">
            <router-link to='./about'>Show about Page</router-link>
          </div>
          <div class="box c">
            <router-link to='./'>Main page
            </router-link>
          </div>
          <div class="box d">D</div>
          <div class="box e">E</div>
          <div class="box f">F</div>
      </div>
    </div>

  </div>
</template>

<script>

  export default{
    data() {
      return {
        msg: 'Hello from Header vue',
        posts: [
        {'id':1,'description':'first'},
        {'id':2,'description':'second'},
        {'id':3,'description':'jsonp'}]

      }
    },
    created: function () {

    },
    mounted: function () {

    }


  }


</script>


<style scoped>
@import "../../common/stylebase.css";

  #flip_card_container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-gap: 10px;
    color: #444;
    position: relative;
    top: 50%;
    left: 40%;

  }

</style>
