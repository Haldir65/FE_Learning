const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
});

$("body a").on("change","input[type='file']",function(){
  var filePath=$(this).val();
  $(".fullPath").html("全路径："+filePath);
  if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
    $(".fileerrorTip").html("").hide();
    var arr=filePath.split('\\');
    var fileName=arr[arr.length-1];
    $(".showFileName").html("文件名："+fileName);
  }else{
    $(".showFileName").html("");
    $(".fileerrorTip").html("非jpg,png格式：您未上传文件，或者您上传文件类型有误！").show();
    return false
  }
});



// const input2 = document.getElementById('file_2');
// input2.addEventListener('change', () => {
//   showPreview2(this.id,'portrait2');
// })

// $('#file_2').on('change', () => {
//   showPreview2('file_2','portrait2');
// })

$('#file_2').change( () => {
  showPreview2(this.id,'portrait2');
})



function showPreview(source, imgId) {
  var file = source.files[0];
  if(window.FileReader) {
    var fr = new FileReader();
    fr.onloadend = function(e) {
      document.getElementById(imgId).src = e.target.result;
    }
    fr.readAsDataURL(file);
  }
}


function showPreview2(fileId, imgId) {
  var file = document.getElementById('file_2');
  var ua = navigator.userAgent.toLowerCase();
  var url = '';
  console.log(file.value);
  console.log(file.files);
  if(/msie/.test(ua)) {
    url = file.value;
  } else {
    url = window.URL.createObjectURL(file.files[0]);
  }
  document.getElementById(imgId).src = url;
}
