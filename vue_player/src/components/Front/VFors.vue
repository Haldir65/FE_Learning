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



  </div>

  <div style="height:400px">

  </div>


</div>
</template>
<script>
import {
  generateRandomInteger
} from '../../utils/randoms'

export default {
  name: "v-fors",
  data: () => ({
    name: 'items',
    items: [{
        name: 'charley',
        age: 20
      },
      {
        name: 'John',
        age: 22
      },
      {
        name: 'Josh',
        age: 27
      }
    ]
  }),
  methods: {
    itemClicked: function(ev, index) {
      ev.preventDefault()
      let data = this.items[index]
      this.log(data['age'])
    }
  },
  beforeCreate() {},
  created() {
    // prepareData(this)
  },
  updated() {

  },

}

function prepareData(component) {
  for (let i = 0; i < 10; i++) {
    let Rookie = {
      name: 'Harry',
      age: generateRandomInteger()
    }
    component.items.push(Rookie)
  }
}

function selfDefinedMethods() {

}

function handleClick() {

}
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
