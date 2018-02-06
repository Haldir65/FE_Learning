var express = require("express");
var mysql = require("mysql");
var CONFIG = require("./config/config.json");

var port = 7890;

var dbName = CONFIG.dbName;
var tableName = CONFIG.tableName;

var sql = "SELECT * FROM " + tableName;

var connection = mysql.createConnection({
  // properities
  host: CONFIG.host,
  user: CONFIG.userName,
  password: CONFIG.password,
  database: dbName
});

connection.connect(function(error) {
  if (!!error) {
    console.log("Error" + error);
  } else {
    console.log("We are connected!");
  }
});

app = express();

app.get("/", function(req, res) {
  connection.query(sql, function(error, rows, fileds) {
    if (!!error) {
      console.log("ERROR in the Query!");
    } else {
      console.log("QUERY EXECUTED Successfully!");
      console.log(rows);
      res.send(rows[0].name + " hello there");
    }
  });
});

app.get("/test", function(req, res) {
  connection.getConnection(function(error, tempCont) {
    if (!!error) {
      tempCont.release();
      console.log("error!");
    } else {
      console.log("Connected!");
      tempCont.query(sql, function(error, rows, fileds) {
        tempCont.release();
        if (!!error) {
          console.log("Error in the query");
        } else {
          res.join(rows);
        }
      });
    }
  });
});

//app.js中添加如下代码(已有的不用添加)
// var app = express();

// var cookieParser = require("cookie-parser");
// var session = require("express-session");

// var router = require("./router/index.js");
// app.use(cookieParser("sessiontest"));
// app.use(
//   session({
//     secret: "sessiontest", //与cookieParser中的一致
//     resave: true,
//     saveUninitialized: true
//   })
// );

// app.use("/", router);

app.listen(port);
