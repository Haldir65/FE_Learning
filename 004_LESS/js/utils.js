const path = require('path');
const imagedir = path.resolve(__dirname,"..",'imgs');
const images = [path.join(imagedir,"b1.jpg"),path.join(imagedir,"b2.jpeg"),path.join(imagedir,"b3.jpg"),
path.join(imagedir,"b4.jpg")]

const generateurl = function() {
    let num = Math.floor(Math.random()*4); //0-3的整数
    return images[num]
}

module.exports = generateurl;