var jsonp = require('jsonp');


// 最简单的Ajax GET请求
var getAjax = function ajaxGet(url,callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if(xhr.readyState==4&&(xhr.status>=200&&xhr.status<300)){
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET',url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
};


// 最普通的ajax POST请求
var postAjax = function ajaxPost(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if(xhr.readyState==4&&(xhr.status>=200&&xhr.status<300)){
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('POST',url);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    return xhr;
};





export {jsonp,getAjax,postAjax};