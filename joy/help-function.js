var hello = "hello";

exports.sayHello = function (name) {
    console.log(hello+name);
}

var resou = 'this is some external resources'; // let 能用是因为node 支持es6这个特性
module.exports.res = resou;   //如果不是用于浏览器的项目的话，node本身就支持require，只是浏览器不支持require