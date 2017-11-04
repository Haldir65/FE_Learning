<template>
  <div class="card_margin_wrapper">
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{p_title}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{msg}}
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          {{p_button_text}}
        </a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">{{share}}</i>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'Card',
    props :['p_title' ,'p_msg','p_share','p_button_text'
    ],
      data () {
        return {
          title: this.p_title,
          msg: this.p_msg,
          share : this.p_share,
          buttonText : this.p_button_text
        }
      },

      created :function () {

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
.card_margin_wrapper{
  margin: 10px
}


</style>
