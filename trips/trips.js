const datetime = require('date-and-time')

const dropdown = document.querySelectorAll('div.dropdown')

for (let i = 0; i < [...dropdown].length; i++) {
    [...dropdown][i].addEventListener('click', (e) => {
        const isActive = [...dropdown][i].className;
        if (isActive === 'dropdown is-active') {
            console.log('hello');
            [...dropdown][i].setAttribute('class', 'dropdown');
        } else {
            [...dropdown][i].setAttribute('class', 'dropdown is-active')
        }
    })
}

