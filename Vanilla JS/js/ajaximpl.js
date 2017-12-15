
window.onload = function () {
    document.getElementsByClassName("btn-outline-primary")[0]
        .addEventListener("click", function (e) {
            console.log(e);

        });
};

function AjaxGet() {

}


var ajaxJS = {
    //创建XHR对象
    createXHR: function () {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    },
    //把数据转换为URL查询字符串的格式
    selectStr: function (condition) {
        var data = ""; //存储url查询字符串
        if (condition != null) //url查询字符串不为空
        {
            if (typeof condition == "string") //url查询字符串格式为字符串时
            {
                //字符串格式：name=xiaoma&age=33&sex=男
                data = condition;
            }
            if (typeof condition == "object") //url查询字符串为对象时，转换为字符串
            {
                /*对象格式：{
                  name: "xiaoma",
                  age: 24,
                  sex: "女"
                }*/
                var arr = [];
                for (var dname in condition) {
                    var dvalue = condition[dname];
                    arr.push(dname + "=" + dvalue);
                }
                data = arr.join("&"); //转换为URL查询字符串所需格式
            }
        }
        return data;
    },
    /*method:GET/POST
     url:请求连接
     conditon:url查询字符串，可以为string类型的，也可以为对象型的
     callback：回调函数，获取服务器响应的数据，并进行处理*/
    ajax: function (method, url, condition, callback) {
        var xmlhttp = this.createXHR(), //创建XHR对象，此时的readyState=0
            data = this.selectStr(condition); //存储url查询字符串   
        if (method == "GET") { //GET请求
            if (data == "") {
                xmlhttp.open("GET", url, true); //readyState=1
            } else {
                xmlhttp.open("GET", url + "?" + encodeURI(data), true);
            }
            xmlhttp.send(); //readyState=2
        } else if (method == "POST") { //POST请求
            xmlhttp.open("POST", url, true);
            //如果需要像 HTML表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send(encodeURIComponent(data));
        }
        //readyState属性的值由一个值变换为另一个值时触发该事件，1-2、2-3、3-4各触发一次该事件，0-1不触发onreadystatechange事件
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText); //回调函数
            }
        };
    }
};