var buttons = document.getElementsByClassName("btn");
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  (function(arg) {
    buttons[i].onclick = function() {
      //onclick函数实例的 function scope 的 closure 对象属性有一个引用 arg,
      routerEvents(arg); //只要 外部空间的 arg 不变,这里的引用值当然不会改变
    };
  })(i);
}

function routerEvents(index) {
  switch (index) {
    case 0:
      function0();
      break;
    case 1:
      function1();
      break;
    case 2:
      function2();
      break;
    default:
      console.log(`clicked at ${index}`);
  }
}

var url = "http://localhost:9889/users";

// Button one Clicked
function function0() {
  var XHR = new XMLHttpRequest();
  XHR.open("GET", url, true);
  XHR.onload = function() {
    if (XHR.readyState == 4) {
      if (XHR.status >= 200 && XHR.status < 300) {
        console.log(XHR.responseText);
      }
    }
  };
  XHR.send();
}

// Button Two clicked
function function1() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type",
  "application/x-www-form-urlencoded");
  xhr.onload = function() {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText);
      }
    }
  };
  var data = {
      name : "Bob",
      age : 12
  };
  xhr.send(data);
}


// Button Three clicked
function function2() {
  AJAX(url,{
    type: "GET",
    onsuccess: function(data,xhr){
        console.log(data);
    },
    onfail: function(xhr){
        console.log(xhr.readyState);
    }
  });
}



/**
 * AJAX函数封装
 * @param {string} url     请求地址（必须）
 * @param {object} options 发送请求的选项参数
 *   @config {string} [options.type] 请求发送的类型。默认为GET。
 *   @config {Object} [options.data] 需要发送的数据。
 *   @config {Function} [options.onsuccess] 请求成功时触发，function(oAjax.responseText, oAjax)。（必须）
 *   @config {Function} [options.onfail] 请求失败时触发，function(oAjax)。(oAJax为XMLHttpRequest对象)
 *
 *@returns {XMLHttpRequest} 发送请求的XMLHttpRequest对象
 */
function AJAX(url, options) {
    //1.创建ajax对象
    var oAjax = null;
        /**
         * 此处必须需要使用window.的方式,表示为window对象的一个属性.不存在时值为undefined,进入else
         * 若直接使用XMLHttpRequest,在不支持的情况下会报错
         **/
    if (window.XMLHttpRequest) {
        //IE6以上
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器
    //open(方法,url,是否异步)
    var param = ""; //请求参数。
    //只有data存在，且为对象使才执行
    var data = options.data ? options.data : -1; //缓存data
    if (typeof (data) === "object") {
        for (var key in data) { //请求参数拼接
            if (data.hasOwnProperty(key)) {
                param += key + "=" + data[key] + "&";
            }
        }
        param.replace(/&$/, "");
    } else {
        param = "timestamp=" + new Date().getTime();
    }
    //3.发送请求
    var type = options.type ? options.type.toUpperCase() : "GET";
    if (type === "GET") {
        oAjax.open("GET", url + "?" + param, true);
        oAjax.send();
    } else {
        oAjax.open("POST", url, true);
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oAjax.send(param);
    }
    //4.接收返回
    //OnRedayStateChange事件
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                //请求成功。形参为获取到的字符串形式的响应数据
                options.onsuccess(oAjax.responseText, oAjax);
            } else {
                //先判断是否存在请求失败函数
                //存在时，形参为XMLHttpRequest对象，便于进行错误进行处理
                if (options.onfail) {
                    options.onfail(oAjax);
                }
            }
        }
    };
    return oAjax;//发送请求的XMLHttpRequest对象
}
