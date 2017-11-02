<template>


  <div id="header_wrapper">


    <div id="flip_card_container">

      <div>
          <div class="flip_card_item">
            <img src="../../assets/logo.png" width="120px" height="120px"/>
            <router-link to='./'>Home</router-link>
          </div>
      </div>

          <!-- <ul>
            <li><router-link to='./'>Home</router-link></li>
            <li><router-link to='./about'>News</router-link></li>
            <li><router-link to='./'>Contact</router-link></li>
            <li><router-link to='./about'>About</router-link></li>
          </ul> -->

          <!-- https://getmdl.io/components/index.html#cards-section -->
    </div>

    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Get Started
        </a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
        </button>
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
.demo-card-wide.mdl-card {
width: 512px;
}
.demo-card-wide > .mdl-card__title {
color: #fff;
height: 176px;
background: url('../../assets/welcome_card.jpg') center / cover;
}
.demo-card-wide > .mdl-card__menu {
color: #fff;
}
.flip_card_item{
    background-color: rgb(255, 111, 66);
    border-radius: 4px;
    overflow: hidden;
    left: 10%;
    overflow: hidden;
    position: absolute;
    text-align: left;
    top: 10%;
    width: 330;
    height : 320;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    z-index: 1;
        display: block;
}

a {
    text-decoration: none;
    color: #ffffff;
    position: absolute;
    left:50%;
    bottom: 20%
}



</style>
