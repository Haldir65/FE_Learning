<template>
  <div id="footer">

    <div class="wrapper">
      <div class="box a" id='btn_a'@click='handle_mouse_on(0)' @mouseover='handle_mouse_over()' @mouseout='handle_mouse_out()'>
        <a href="http://www.baidu.com" target="_blank" >a</a>
      </div>
      <div class="box b">B</div>
      <div class="box c">C</div>
      <div class="box d">D</div>
      <div class="box e">E</div>
      <div class="box f">F</div>
    </div>


  <a href="https://www.baidu.com" target="_blank">some content</a>
  </div>
</template>

<script>
export default {

  name: 'footer',
  data () {
    return {
      msg: 'copyRight footer',
      baidu: 'https://www.baidu.com'
    }
  },
  methods: {
    handle_mouse_on(args) {
      mouse_out(args)
      // console.log(this.msg);
    },
    handle_mouse_over(args){
      let current_tag = this.$el //find html tag of for this component , div tag in this case
      let my_document = window.document //don't use this.window,use window will do
      let button = my_document.getElementById('btn_a')
      // console.log(button);
      mouse_on(button)

    },
    handle_mouse_out(){
      let the_tag = this.$el
      mouse_outed(the_tag.firstElementChild.firstElementChild)
    }
  },
  computed: {

  },
  created (){
    // console.error('footer created');
  },
  mounted(){
    let timeStamp = Math.round(new Date().getTime()/1000)
    // console.log('mounted time is '+timeStamp);
    this.log('hello there ++++++++++++++++++');

  }

}


function mouse_on(tag) {
  tag.style.backgroundColor = '#'+Math.random().toString(16).slice(2, 8);
  tag.style.zoom = 1.2
}

function mouse_outed(tag) {
  tag.style.backgroundColor = '#ffffff'
  tag.style.zoom = 1
}

</script>

<style scoped>
@import "../common/stylebase.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#btn1{
  background-color: white;
  color: black;
  width: auto;
}


.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  color: #444;
  position: relative;
  top: 50%;
  left: 40%;

}

.box {
  background-color: #444;
  color: #0f88eb;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
  background: #fff;
  border: 2px ;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.1);
  text-decoration: none;
  text-align: center;
}
</style>
