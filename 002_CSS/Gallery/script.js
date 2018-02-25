var imgs = document.getElementById("container").getElementsByTagName("img");  
var length = imgs.length;
var popup = document.getElementById('popup');
for(var i= 0; i< length;i++){
    imgs[i].onclick = function(event){
        event = event||window.event;  
        var target = document.elementFromPoint(event.clientX, event.clientY);  
        showBig(target.src);
    }
}
popup.onclick = function (event){  
    var img = popup.getElementsByTagName("img")[0]
    if(event.target!=img){
        popup.style.display = "none";  
    }
} 
function showBig(src){  
    var img = popup.getElementsByTagName("img")[0];
    img.src = src;  
    popup.style.display = "block";  
    img.addEventListener('dblclick',function(){
        var width = img.width;
        img.width=width*1.1;
    })
}