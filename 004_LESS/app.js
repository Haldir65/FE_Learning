const path = require("path");
var Style = require("./css/styles.css");
$(document).ready(function(){
    var gen = require('./js/utils')
    var imgElements =  $('.flex-container .flex_item');
   
    for(var i= 0;i<imgElements.length;i++){
       imgElements[i].getElementsByTagName('img')[0].src= gen();
    }
    $('.primary-btn').css("background-color","#000")
});


