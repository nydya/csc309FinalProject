
const slides = document.querySelectorAll('.slides')
const dot = document.querySelectorAll('.dot')
const dots = document.querySelector('#dots')
const titleText = document.querySelectorAll('.title.has-text-centered')
const subtitleText = document.querySelectorAll('.subtitle.has-text-centered')
let position = 0;



window.addEventListener('click', changeSlide)


function changeSlide(e) {
	// clicking on the dot will change the cooresponding slide
	if ([...dot].includes(e.target)) {
		showSlides([...dot].indexOf(e.target))
	} else {
		// clicking anywhere else will move user onto main page
		document.querySelector('a').click()
	}
}

function showSlides(n) {
	for (let i = 0; i < slides.length; i ++) {
		slides[n].style.display = 'block'
		dot[n].style.backgroundColor = '#bbb'
		titleText[n].style.display = 'block'
		subtitleText[n].style.display = 'block'
		if (i != n) {
			slides[i].style.display = 'none'
			titleText[i].style.display = 'none'
			subtitleText[i].style.display = 'none'
			dot[i].style.backgroundColor = '#717171'
		}
	}
	position = n;
}

showSlides(0)

function scroll(event) {
  event.preventDefault();

  if (event.deltaY < 0 && position > 0) {
    // up
    showSlides(position - 1)
  }
  else if (event.deltaY > 0 && position < slides.length - 1) {
    // down
    showSlides(position + 1)
  }
}

window.onwheel = scroll;