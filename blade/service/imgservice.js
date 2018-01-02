const fs = require('fs');

var imgsArray = [];

/* 根据index，返回public/imgs文件夹下的任意图片名称 */
function generateUrl(id) {
    if (imgsArray.length ===0 ) {
        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
            imgsArray.push(file);
        })
    } 
    return imgsArray[id]; 
}

modules.generateUrl = generateUrl;