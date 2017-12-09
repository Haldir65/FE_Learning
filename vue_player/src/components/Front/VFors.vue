<template>
<div id="v-fors">
  <h1 class='page-header'>title Header</h1>
  <p class="lead">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  </p>
  <p>
    do eiusmod tempor
    <small> incididunt ut labore et dolore magna aliqua.</small> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur.<del>Excepteur sint occaecat </del> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <div v-for='(data,index) in items'>
    <div @click='(ev) => itemClicked(ev,index)' class="demo-card-wide mdl-card mdl-shadow--2dp">
      <a class='center_text' href="/">HomePage+{{data['name']}} </a>
    </div>
  </div>
  <p class="text-center">
    Text left class
  </p>
  <p class="text-justify">
    Text Justify
  </p>
  <div class="pull-left">
    Class Align left
  </div>
  <div class="pull-right">
    Class Align right
  </div>
  <div class="clearfix">
  </div>
  <hr>

  <!-- Blockquote -->
  <blockquote class="blockquote-reverse">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing e
    </p>
    <footer>
      Quoted by<cite title="Jon Doe">John Doe</cite>
    </footer>
  </blockquote>


  <!-- Lists -->
  <ul class="list-unstyled">
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    <li>Item Four</li>
    <li>Item Five</li>
  </ul>

  <ul class="list-inline">
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    <li>Item Four</li>
    <li>Item Five</li>
  </ul>

  <!-- code -->

  <code>
    &lt;h1&gt;Heading Text&lt;/h1&gt;
  </code>

  <br> Change Directory with<kbd>cd</kbd>
  <br> To edit Setting ,press <kbd><kbd>ctrl</kbd>+<kbd>,</kbd></kbd>

  <hr>

  <!-- Contexttural Colors -->
  <p class="text-primary">Hell world</p>
  <p class="text-success">Hell world</p>
  <p class="text-info">Hell world</p>
  <p class="text-danger">Hell world</p>
  <p class="text-error">Hell world</p>
  <p class="text-muted">Hell world</p>

  <!-- Contexttural BackGround colors -->
  <p class="bg-primary">Hell world</p>
  <p class="bg-success">Hell world</p>
  <p class="bg-info">Hell world</p>
  <p class="bg-danger">Hell world</p>
  <p class="bg-error">Hell world</p>
  <p class="bg-muted">Hell world</p>

  <hr>

  <div class="container">
    <!-- Buttons -->
    <button class="btn btn-default">Default button</button>
    <a href="#" class="btn btn-default">Link</a>
    <input type="submit" class="btn btn-default" value="Submit" />

    <!-- Conceptural Buttons -->
    <button class="btn btn-primary">Primary button</button>
    <button class="btn btn-success">success button</button>
    <button class="btn btn-info">info button</button>
    <button class="btn btn-danger">Stuff like delete</button>
    <button class="btn btn-muted">muted button</button>

    <!-- Button Size -->
    <button class="btn btn-primary btn-lg">Primary button</button>
    <button class="btn btn-primary">Primary button</button>
    <button class="btn btn-primary btn-sm">Primary button</button>
    <button class="btn btn-primary btn btn-xs">Primary button</button>
    <button class="btn btn-default" disable='disable'>Disable button</button>

    


  </div>

  <hr>
    <!-- forms -->
    <div class="container">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Enter Name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="Add email here" />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea class="form-control" placeholder="Add Message"></textarea>
        </div>

        <div class="form-group">
          <label>Gender</label>
          <select class="form-control">
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
              <option value="other">
                Other
              </option>
            </select>
        </div>
      </form>


    </div>

  <hr/>


  <div class="container">

     <ul class="list-group">
      <li  class="list-group-item active"> Item Number 1</li>
      <li  class="list-group-item"> Item Number 2</li>
      <li  class="list-group-item"> Item Number 3</li>
      <li class="list-group-item"> Item Number 4</li>
      <li  class="list-group-item"> Item Number 5</li>
    </ul>
    <ul class="list-group">
      <a href="#" class="list-group-item active"> Item Number 1</a>
      <a href="#" class="list-group-item"> Item Number 2</a>
      <a href="#" class="list-group-item"> Item Number 3</a>
      <a href="#" class="list-group-item"> Item Number 4</a>
      <a href="#" class="list-group-item"> Item Number 5</a>
    </ul>

   
  </div>
<div class="container">
<div class="progress">
  <div class="progress-bar progress-bar-success progress-bar-striped active">
    50%
  </div>
</div>
 </div>

 <div class="container">
   <img class="thumbnail" src='../../../static/imgs/scene2.jpg' style="width:200px">
   <img class="img-rounded" src='../../../static/imgs/scene2.jpg'style="width:200px">
   <img class="img-circle" src='../../../static/imgs/scene2.jpg'style="width:200px">
  <img class="img-ablolute-circle" src='../../../static/imgs/scene2.jpg'style="width:120px;height:120px">
 </div>


<!-- Grids 12 blocks-->
 <div class="container">
    <h2 class="text-success text-center">不用去管float这种烦人的属性了</h2>

   <div class="row">
     <div class="col-md-8">Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</div>
    <div class="col-md-4">Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</div>
   </div>

   <div class="row">
    <div class="col-md-3">Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or .container-fluid for width: 100% across all viewport and device sizes.</div>
    <div class="col-md-3">Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</div>
    <div class="col-md-3">In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</div>
    <div class="col-md-3">Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of .col-sm will each automatically be 25% wide from the small breakpoint and up. See the auto-layout columns section for more examples.</div>
   </div>

   <div class="row">
     <div class="col-md-8 col-sm-8">注意这个md的意思是medium screnn Size</div>
    <div class="col-md-4 col-sm-4 col-xs-4">sm表示small，xs表示更小。缩窄屏幕宽度时会自动响应变化，变成从上往下列表一样的排列</div>
   </div>

 </div>

 





  <div style="height:400px">

  </div>


</div>
</template>
<script>
import { generateRandomInteger } from "../../utils/randoms";

export default {
  name: "v-fors",
  data: () => ({
    name: "items",
    items: [
      {
        name: "charley",
        age: 20
      },
      {
        name: "John",
        age: 22
      },
      {
        name: "Josh",
        age: 27
      }
    ]
  }),
  methods: {
    itemClicked: function(ev, index) {
      ev.preventDefault();
      let data = this.items[index];
      this.log(data["age"]);
    }
  },
  beforeCreate() {},
  created() {
    // prepareData(this)
  },
  updated() {}
};

function prepareData(component) {
  for (let i = 0; i < 10; i++) {
    let Rookie = {
      name: "Harry",
      age: generateRandomInteger()
    };
    component.items.push(Rookie);
  }
}

function selfDefinedMethods() {}

function handleClick() {}
</script>
<style >
@import "../../common/stylebase.css";

#v-fors {
  position: relative;
  top: 100px;
  height: 100%;
  overflow: hidden;
  background: white;
}

#v-fors div {
  min-height: 80px;
  margin: 1px auto;
}

.center_text {
  height: 60px;
  color: #afafaf;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
</style>
