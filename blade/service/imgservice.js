const fs = require('fs');
const express = require('express');
var app = express.Router();
var path = require('path');

var imgsArray = [];
var imgFoler = path.join(__dirname,"..",'public/imgs');

/* 根据index，返回public/imgs文件夹下的任意图片名称 */
function generateUrl(id) {
    // console.log(imgFoler);
    if (imgsArray.length ===0 ) {
        fs.readdirSync(imgFoler).forEach(file => {
            // console.log(file);
            imgsArray.push(file);
        });
    } 
    var length = imgsArray.length;
    if(id>length-1) {
       id = Math.ceil(Math.random()*length)-1; 
    }
    return imgsArray[id]; 
}



/// http://localhost:9889/imgs/imgId?imgId=222222
app.get("/imgId", function(req, res) {
    var imgId = req.query.imgId;
    console.log(imgId);
    res.status(302);
    res.redirect(302,`/img/${generateUrl(imgId)}`);
});
// export {generateUrl};
   // fileUtils.scanFile( path.resolve('./imgs'), function onOpen(name, content) {
    //     console.log(`get file name ${name}`);
    // }, function onError (error){
    //     console.log(error);
    // })

module.exports.router = app;
    