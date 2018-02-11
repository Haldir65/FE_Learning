var express = require("express");
var app = express();
var path = require("path");
var formidable = require("formidable");
var fs = require("fs");

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
    fs.rename(file.path, path.join(form.uploadDir, file.name));
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
