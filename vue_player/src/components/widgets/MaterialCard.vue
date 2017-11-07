<template>
  <div class="card_margin_wrapper" @click='handleClick($event)'>
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div v-bind:class="[' mdl-card__title',classObject.img_class]">
        <h2 class="mdl-card__title-text">{{post.id}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
      {{post.id}}
      </div>
      <div class="mdl-card__actions mdl-card--border" @click.stop='handleClickButton' >
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >
          {{post.description}}
        </a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">{{post.id}}</i>
        </button>
      </div>
    </div>

    <div id="flip_card_container">

      <div>
          <div class="flip_card_item">
            <img src="../../assets/logo.png" width="120px" height="120px"/>
            <router-link to='./'>Home</router-link>
          </div>
      </div>
      <switch>
        哈哈哈
      </switch>


</div>

  </div>
</template>

<script>
  export default{
    name: 'Card',
    props :['post','index'],
      data () {
        return {
          title: '',
          msg: '',
          can_share : false,
          extra: [],
          isActive : true,
          error : false
        }
      },
      methods:{
        handleClick:function (event) {
          // console.log('clicked');
          // console.log(event);
          // console.log('this post says '+this.post.description+' index is '+this.index);
        },
        handleClickButton:function () {
          // this.log('you just clicked this button '+this.index )
        }
      },
      computed:{
        classObject : function () {
          return {
            active: this.isActive && !this.error,
            img_class: 'random_img_url',
            img_url: '../../../static/imgs/scene5.jpg'
          }
        }
      },

      created :function () {

      },

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
/*background: url('../../assets/welcome_card.jpg') center / cover;*/
}
.demo-card-wide > .mdl-card__menu {
color: #fff;
}
.card_margin_wrapper{
  margin: 10px
}
.random_img_url {
  margin: 1px ;
  background: url('../../../static/imgs/scene4.jpg') center /cover;
}

</style>
