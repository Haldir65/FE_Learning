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

    <div >
      <div v-for='post in posts'>
        <app-Card :p_title="post.id" :p_msg="post.description"></app-Card>
      </div>
    </div>

    <!-- <app-Card :p_title="title" :p_msg="content"></app-Card>
    <app-Card></app-Card>
    <app-Card></app-Card>
    <app-Card></app-Card>
    <app-Card></app-Card>
    <app-Card></app-Card>
    <app-Card></app-Card> -->




  </div>
</template>

<script>

import MaterialCard from '../widgets/MaterialCard'

  export default{
    data() {
      return {
        title: 'Hello from Header vue',
        posts: [
        {'id':1,'description':'first'},
        {'id':2,'description':'second'},
        {'id':3,'description':'jsonp'}],
        msg: '消息的内容',
        content : '消息的详细内容'

      }
    },
    components :{
      'app-Card' : MaterialCard
    },
    created: function () {
      // prepare_data()
    },

    mounted: function () {
      // self.setInterval(function () {
      //   window.location.reload(true)
      //   console.log(self.posts)
      // },1000)
      // this.log(this.posts)


    },
    beforeMount: function () {
      this.log(this.posts)
      prepare_data(this.posts)

    },
    updated:function () {
      this.log('updated')
      // this.log(this.posts)
    }


  }


  function prepare_data(array) {
    let dice, data
    for(let i=0;i<10;i++){
      dice = (Math.random()+1)*100000%4
       data = {'id': dice,'description':'stuff'}
      switch (i%4) {
        case 0:
          data.description ='000000000000000000'
        break;
        case 1:
        data.description ='111111111111'

        break;
        case 2:
        data.description ='2222222'
        break;
        case 3:
        data.description ='3333333333333'
        break
        default:
          // data.description ='333333思思思思思思思思光时代'
      }
      array.push(data)
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

}



</style>
