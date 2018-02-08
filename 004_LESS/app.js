const path = require("path");
// var Style = require("./less/styles.less");

import Style from "./less/styles.less";
$(document).ready(function() {
  var gen = require("./js/utils");
  var imgElements = $(".flex-container .flex_item");

  for (var i = 0; i < imgElements.length; i++) {
    imgElements[i].getElementsByTagName("img")[0].src = gen();
  }
  $(".primary-btn").css("background-color", "#000");

  let gridItems = $(".container.grid-container .item");
  gridItems.each(function() {
    $(this).css("border", "3px solid black");
    $(this).css("background-image", "url(" + gen() + ")");
  });
});
