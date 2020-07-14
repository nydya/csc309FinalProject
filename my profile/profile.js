
const edit = document.querySelectorAll('div.button');
const icon = document.querySelectorAll('ion-icon')

console.log(edit)

window.addEventListener('click', (e) => {
    console.log(e.target)
	
    if ([...edit].includes(e.target)) {
        console.log('yo')
        e.target.firstElementChild.click();
		window.location.href = "../momentoEditPage/momentoEdit.html"
    } else if ([...icon].includes(e.target)) {
        e.target.parentElement.firstElementChild.click();
    }
})

//change tmp to user img after get UserInfo
document.getElementById("mnImg1").src="tmp.png"

/*
class users {
	constructor(name, pass, mail, admin) {
		this.name = name;
		this.pass = pass;
		this.mail = mail;
		this.admin = admin; // will be 1 if admin
		
		this.nickname = nickname; //base is = this.name
		this.momento = momento; //base is empty list
		this.img = img; //this will be a jpg/png will get to this if we have time
		
		this.userId = numUser;
		numUser++;
	}
}

get user info from server.js
const curUser = getUserInfo()







*/