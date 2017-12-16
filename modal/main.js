// Get the modal element
var modal = document.getElementById('simpleModal');
//Get the open Modal Button
var modalBtn = document.getElementById('modalBtn');
//close button;
var closeBtn =document.getElementsByClassName('closeBtn')[0];


//listen for click
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);

// listen fo outSide click 

window.addEventListener('click',closeOutside);

// function to open modal
function openModal(){
    modal.style.display='block';
}

//function to close modal
function closeModal() {
    modal.style.display='none';
}

//function to close modal if outside click
function closeOutside(e) {
    if(e.target==modal){
        modal.style.display='none';
    }
}



