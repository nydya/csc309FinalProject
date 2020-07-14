
const log = console.log;

let numUser = 0;

const lUsers = [] 
const profile = document.querySelectorAll('.navbar-item')[2]

class users {
	constructor(name, pass, mail, admin) {
		this.name = name;
		this.pass = pass;
		this.mail = mail;
		this.admin = admin; // will be 1 if admin

		this.userId = numUser;
		numUser++;
	}
}

// Get user data from server
lUsers.push(new users('admin', 'admin', 'admin@hotmail.com', 1));
lUsers.push(new users('user', 'user', 'user@hotmail.com', 0));

const sIn = document.querySelectorAll('.button.is-link')[0];
const sUp = document.querySelectorAll('.button.is-link')[1];

sIn.addEventListener('click', ulogIn);
sUp.addEventListener('click', usignUp);

function ulogIn(e) {
	e.preventDefault();
	const message = document.querySelectorAll('article')[0]
	const uName = document.querySelectorAll('.input')[0];
	const uPass = document.querySelectorAll('.input')[1];
	message.style.display = 'block'
	let verify = 0;
	for (let i = 0; i < numUser; i++) {
		if (uName.value == lUsers[i].name && uPass.value == lUsers[i].pass){
			verify = 1;
			// const profile = document.querySelector('#signiu');
			// profile.innerHTML = uName;
			// profile.setAttribute('href', 'profile.html');
			if (lUsers[i].admin == 1){
				profile.setAttribute('href', '../admin/admin1.html');
			} else {
				profile.setAttribute('href', '../profile/profile.html');
			}
			message.setAttribute('class', "message is-success is-small")
			message.firstElementChild.innerText = 'Success.'
			uName.setAttribute('class', 'input is-success')
			uPass.setAttribute('class', 'input is-success')
			setTimeout( function () {
				signInToggle.click()
				signUpToggle.click()
				signInToggle.innerText = 'Logout'
				signInToggle.setAttribute('class', 'button is-link')
			},1500)
		}
	}
	
	if (verify == 0) {
		message.setAttribute('class', "message is-danger is-small")
		message.firstElementChild.innerText = 'Username or Password does not match.'
		uName.setAttribute('class', 'input is-danger')
		uPass.setAttribute('class', 'input is-danger')
	}
}

function usignUp(e) {
	const uName = document.querySelectorAll('.input')[2];
	const uPass = document.querySelectorAll('.input')[3];
	const uMail = document.querySelectorAll('.input')[4];
	const message = document.querySelectorAll('article')[1]
	message.style.display = 'block'
	
	let verify = 0;
	for (let i = 0; i < numUser; i++) {
		if (uName.value == lUsers[i].name){
			verify = 1;
		}
		if (uMail.value == lUsers[i].mail){
			verify = 2;
		}
	}
	if (verify == 1) {
		message.setAttribute('class', "message is-danger is-small")
		message.firstElementChild.innerText = 'Username already taken.'
		uName.setAttribute('class', 'input is-danger')
		uPass.setAttribute('class', 'input is-danger')
		uMail.setAttribute('class', 'input is-danger')
	} else if (verify == 2){
		message.setAttribute('class', "message is-danger is-small")
		message.firstElementChild.innerText = 'Email already taken.'
		uName.setAttribute('class', 'input is-danger')
		uPass.setAttribute('class', 'input is-danger')
		uMail.setAttribute('class', 'input is-danger')
	} else {
		lUsers.push(new users(uName.value, uPass.value, uMail.value, 0));
		const profile = document.querySelector('#signiu');
		// profile.innerHTML = uName;
		// profile.setAttribute('href', 'profile.html');
		message.setAttribute('class', "message is-success is-small")
		message.firstElementChild.innerText = 'Success.'
		uName.setAttribute('class', 'input is-success')
		uPass.setAttribute('class', 'input is-success')
		uMail.setAttribute('class', 'input is-success')
	}
}

const signUpToggle = document.querySelector('.buttons').firstElementChild
const signInToggle = document.querySelector('.buttons').lastElementChild

signUpToggle.addEventListener('click', toggleSignUp)
signInToggle.addEventListener('click', toggleSignIn)

const signin = document.querySelector('#signi')
const signup = document.querySelector('#signup')
function toggleSignUp(e) {
	 if (signup.style.display === 'none' ) {
		signup.style.display = 'block'
	} else if (signup.style.display === 'block' || signup.style.display === ''){
		signup.style.display = 'none'
	}
} 
function toggleSignIn(e) {
	
	if (e.target.innerText === 'Logout') {
		signin.style.display = 'block'
		signup.style.display = 'block'
		e.target.innerText = 'Log in'
		e.target.setAttribute('class', 'button is-light')
		profile.setAttribute('href', '');
	}
	else if (signin.style.display === 'none' ) {
		signin.style.display = 'block'
	} else if (signin.style.display === 'block' || signin.style.display === ''){
		signin.style.display = 'none'
	}
}



profile.addEventListener('click', checkIfSignedIn)

function checkIfSignedIn(e) {
	const message = document.querySelectorAll('article')[0]
	if (signInToggle.innerText === 'Log in') {
		console.log('did i get here')
		signin.style.display = 'block'
		signup.style.display = 'block'
		message.style.display = 'block'
		message.setAttribute('class', "message is-danger is-small")
		message.firstElementChild.innerText = 'Please signin or signup to view your profile.'
	}
}