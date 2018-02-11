var express = require("express");
var app = express();
var path = require("path");
var formidable = require("formidable");
var fs = require("fs");
var crypto = require("crypto");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/upload", (req, res) => {
  let form = new formidable.IncomingForm();
  console.log("==============req incoming ===============");
  form.multiples = true;

  form.uploadDir = path.join(__dirname, "/uploads");

  form.on("file", (filed, file) => {
    let originName = path.join(form.uploadDir, file.name);
    originName = cryptPwd(originName) + ".jpeg";
    console.log(originName + ".jpeg");
    fs.rename(file.path, path.join(form.uploadDir, originName), error => {
      if (error) {
        console.log("some thing bad happens oops" + error);
      }
    });
  });

  form.on("error", error => {
    console.log("An error occured" + error);
  });

  form.on("end", () => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("success");
  });

  form.parse(req);
});

const server = app.listen(3000, () => {
  console.log("server listen on port 3000");
});

function cryptPwd(password) {
  var md5 = crypto.createHash("md5");
  return md5.update(password).digest("hex");
}
