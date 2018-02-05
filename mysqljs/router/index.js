var express = require("express");
var router = express.Router();

//修改router/index.js,第一次请求时我们保存一条用户信息。
router.get("/", function(req, res, next) {
  if (req.session.user) {
    var user = req.session.user;
    var name = user.name;
    res.send("你好" + name + "，欢迎来到我的家园。");
  } else {
    let user = {
      name: "Chen-xy",
      age: "22",
      address: "bj"
    };
    req.session.user = user;
    res.send("你还没有登录，先登录下再试试！");
  }

  // res.render("index", {
  //   title: "the test for nodejs session",
  //   name: "sessiontest"
  // });
});

// //修改router/users.js，判断用户是否登陆。
// router.get("/", function(req, res, next) {
//   if (req.session.user) {
//     var user = req.session.user;
//     var name = user.name;
//     res.send("你好" + name + "，欢迎来到我的家园。");
//   } else {
//     res.send("你还没有登录，先登录下再试试！");
//   }
// });

module.exports = router;
