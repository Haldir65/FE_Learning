// var studentController = require('../routers/student')
//前端逻辑，不应通过require，而是通过Ajax发送post请求。
//express接收到post,get请求后再去主动render对应页面

$(document).ready(function(){
  console.log('window loaded');
  addEvents();
});

function addEvents(){
  // console.log($('button.btn-submit')[0]);
  $('button.btn-submit').click(function(e){
    //requesting server to add a student into server ,
    // it's up to the server to render html or present some json
    let inputValue = $('input.form-control')[0].value;
    let param = {
      name: inputValue,
      age: 20
    };
    e.preventDefault();
    $.post(
      {
        url:"/student/add",
        async: true,
        data: param,
        dataType: 'html',
        success: function(data, textStatus){
          console.log('good success');
        },
        complete: function(XMLHttpRequest, textStatus){
          console.log('completed');
        },
        error: function(XMLHttpRequest,textstatus,error){
          console.log(error);
        }
      }
    );
  // $("#myDiv").html(htmlobj.responseText);
  // studentController.addStudent();
});
}