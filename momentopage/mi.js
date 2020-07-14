window.onscroll = function() {scrollM()};

let header = document.querySelector('#header');

let s = header.offsetTop;

function scrollM(){
    if (window.pageYOffset > s){
        header.style.position = "fixed";
        header.style.top = 0;

    }
    else{
        header.style.position = "static";
    }
}


let dt = document.querySelectorAll(".dText");
let tb = document.querySelectorAll(".textB");

let textAll = new Array(dt.length);

let saveButton = document.querySelector('#saveButton');
saveButton.addEventListener('click', saveToPage);

let edit = document.querySelector('#edit');
edit.addEventListener('click', editText);

let eE = document.querySelector('#emptyE');
eE.addEventListener('click', editFromBlank);

function editFromBlank(e){
    e.preventDefault();

    eE.style.display = "none";
    edit.style.display = "none";
    saveButton.style.display = "inline";
    for (let i=0;i<tb.length;i++){
        tb[i].style.display = "block";
    }
    for (let i = 0; i < dt.length; i++) {
        dt[i].style.display = "none"
    }

}

function editText(e){
    e.preventDefault();

    eE.style.display = "none";
    edit.style.display = "none";
    saveButton.style.display = "inline";

    for (let i = 0; i < dt.length; i++) {
        dt[i].style.display = "none"
        if (dt[0].innerHTML != ""){
            textAll[i]=(dt[i].innerHTML);
        }
    }
    if (textAll.length != 0){
        for (let i =0;i<tb.length;i++){
            tb[i].style.display = "block";
            tb[i].firstElementChild.appendChild(document.createTextNode(textAll[i]));
        }
    }
    else{
        for (let i=0;i<tb.length;i++){
            tb[i].style.display = "block";
        }
    }


}


function saveToPage(){
    let inputT = document.querySelectorAll('.text');
    for (let i=0;i<inputT.length;i++){
        dt[i].innerHTML = inputT[i].value;
        dt[i].style.display = "block";
        tb[i].style.display = "none";
    }

    eE.style.display = "inline";
    edit.style.display = "inline";
    saveButton.style.display = "none";


}
