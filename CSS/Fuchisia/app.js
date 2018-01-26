$(function() {
  var sWidth = $("#focus").width();

  var len = $("#focus ul li").length; //获取焦点图个数

  var index = 0;
  var picTimer;

  var btn = "<div class='btn'>";
  for (var i = 0; i < len; i++) {
    btn += "<span></span>";
  }
  btn += "</div>";
  btn +=
    "<div class='preNext pre'></div>" +
    "<div class='preNext next'></div>" +
    "<span class='hidden left'></span>" +
    "<span class='hidden right'></span>";
  $("#focus").append(btn);

  // addEventListener for btn
  $("#focus div.btn span")
    .css("opacity", 0.4)
    .mouseover(function() {
      index = $("#focus div.btn span").index(this);
      showPics(index);
    });

  // show pics based on given index
  function showPics(index) {}
});
