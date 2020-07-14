const log = console.log;


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

let saveButton = document.querySelector('#saveButton');
saveButton.addEventListener('click', saveToPage);
saveButton.style.display = "block";

// let edit = document.querySelector('#edit');
// edit.addEventListener('click', editText);

let newWhole = document.querySelector('#wholeText');
let newCity1 = document.querySelector('#city1Text');
let newCity2 = document.querySelector('#city2Text');
let newCity3 = document.querySelector('#city3Text');

// function editText(e){
    
//     e.preventDefault();

//     let wH = document.querySelector('.wholeHeader');
//     wH.contentEditable = "true";
//     let cH = document.querySelectorAll('.cityName');
//     for (let i=0; i<cH.length; i++){
//         cH[i].contentEditable = "true";
//     }
//     let dT = document.querySelectorAll('.dText');
//     for (let i=0;i<dT.length;i++){
//         if (dT[i].innerHTML != ""){
//             let textA = document.createElement('textarea');
//             textA.id = 
//         }
//     }

//     edit.style.display = "none";
//     saveButton.style.display = "block";

  
    
// }

/*
//this is saving
function saveToPage(e){
    e.preventDefault();


    let w = newWhole.value;
    let c1 = newCity1.value;
    let c2 = newCity2.value;
    let c3 = newCity3.value;

    if (w == "" || c1 == "" || c2 =="" || c3==""){
        alert("Must fill out all text");
    }
    else{
        let pWhole = newWhole.parentElement;
        pWhole.removeChild(newWhole);
        pWhole.appendChild(document.createTextNode(w));

        let pc1 = newCity1.parentElement;
        pc1.removeChild(newCity1);
        pc1.appendChild(document.createTextNode(c1));
        
        let pc2 = newCity2.parentElement;
        pc2.removeChild(newCity2);
        pc2.appendChild(document.createTextNode(c2));

        let pc3 = newCity3.parentElement;
        pc3.removeChild(newCity3);
        pc3.appendChild(document.createTextNode(c3));


        let wH = document.querySelector('.wholeHeader');
        wH.contentEditable = "false";
        let cH = document.querySelectorAll('.cityName');
        for (let i=0; i<cH.length; i++){
            cH[i].contentEditable = "false";
        }
    
        saveButton.style.display = "none";
        document.querySelector('#edit').style.display = inline;
    }
}

*/

//this is jump to momento
function saveToPage(e){
    e.preventDefault();

    let dtt = document.querySelector('.dText');
    log("hi1")
    log(dtt);


    let w = newWhole.value;
    let c1 = newCity1.value;
    let c2 = newCity2.value;
    let c3 = newCity3.value;

    if (w == "" || c1 == "" || c2 =="" || c3==""){
        alert("Must fill out all text");
    }
    else{
        let pWhole = newWhole.parentElement;
        pWhole.removeChild(newWhole);
        pWhole.appendChild(document.createTextNode(w));

        let pc1 = newCity1.parentElement;
        pc1.removeChild(newCity1);
        pc1.appendChild(document.createTextNode(c1));
        
        let pc2 = newCity2.parentElement;
        pc2.removeChild(newCity2);
        pc2.appendChild(document.createTextNode(c2));

        let pc3 = newCity3.parentElement;
        pc3.removeChild(newCity3);
        pc3.appendChild(document.createTextNode(c3));


        let wH = document.querySelector('.wholeHeader');
        wH.contentEditable = "false";
        let cH = document.querySelectorAll('.cityName');
        for (let i=0; i<cH.length; i++){
            cH[i].contentEditable = "false";
        }
    
        saveButton.style.display = "none";
        document.querySelector('#edit').style.display = inline;
    }
}