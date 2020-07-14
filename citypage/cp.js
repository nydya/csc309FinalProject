const log = console.log;


let picStore = [];
let hStore = [];
let textStore = [];
let smallPic = [];

picStore.push("c.jpg");
picStore.push("t.jpeg");

hStore.push("CN TOWER");
hStore.push("Lorem");

textStore.push('"The CN Tower (French: Tour CN) is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.Built on the former Railway Lands, it was completed in 1976. Its name "CN" originally referred to Canadian National, the railway company that built the tower."')
textStore.push('"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor nibh nisl, ut dapibus ligula commodo vel. Curabitur sit amet purus cursus, dapibus lacus eget, vulputate nibh. Vestibulum ornare eget lectus vel fringilla. Aliquam rutrum sit amet ex id semper. Pellentesque imperdiet erat at augue porttitor, in iaculis orci accumsan. Aliquam erat volutpat. "')

smallPic.push("cs.png");
smallPic.push("ts.png");

const b = document.querySelector('.bg');
b.addEventListener('click', next);

const like = document.querySelector('.heart');
like.addEventListener('click', liked);

let likeOrNot = 0;

let total = 2;
let i = 0;
/*
current is current state
0 - picture
1 - text
*/
let current = 0;

const dt = document.querySelector('.descp');
const f = document.querySelector('.frame');

function addPic(src){
    picStore.push(src);
    total++;
}

function addText(src){
    textStore.push(src);
}
function addH(src){
    hStore.push(src);

}
function addSmall(src){
    smallPic.push(src);
}


function next(e){
    e.preventDefault();

    if (current == 0){
        nextText();
    }
    else{
        nextPic();
    }
    
}

function nextText() {
    let newHeader = hStore[i];
    let newText = textStore[i];
    let newSmall = smallPic[i];

    let oldText = document.querySelector('#dt');
    let textP = document.querySelector('.descp');
    let oldHeader = document.querySelector('.bgtext');
    let oldS = document.querySelector('.bgt');

    textP.removeChild(oldText);
    let newP = document.createElement('p');
    newP.appendChild(document.createTextNode(newText));
    newP.id = 'dt';
    textP.appendChild(newP);

    oldHeader.removeChild(oldHeader.firstElementChild);
    let newH = document.createElement('h1');
    newH.appendChild(document.createTextNode(newHeader));
    oldHeader.appendChild(newH);

    oldS.style.backgroundImage = "url("+newSmall+")";

    current = 1;
    b.style.filter = "blur(8px)";    
    f.style.display = "inline";
    dt.style.display = "block";
}

function nextPic(){

    current = 0;
    if (i+1>=total){
        let p = document.querySelector('.pic');
        p.style.display = "none";
        let m = document.querySelector('.momento');
        m.style.display = "block";
        log('end');
    }else{
        i++;
        f.style.display = "none";
        dt.style.display = "none";
        b.style.filter = "blur(0px)";
        let pic = picStore[i];
        b.style.backgroundImage = "url("+pic+")";
        //like.style.backgroundColor = "";
    }
}

function liked(e){
    e.preventDefault();
    if (likeOrNot == 0){
        like.style.backgroundColor = "#d62020";
        likeOrNot = 1;
    }else{
        like.style.backgroundColor = "";
        likeOrNot = 0;        
    }
}