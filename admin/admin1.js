const remove = document.querySelector(".table")

remove.addEventListener('click', removeUser)
const message = document.querySelector('article')

function removeUser(e) {

    if ([...document.querySelectorAll('.delete')].includes(e.target)) {
    message.style.display = 'block'
    if (!e.target.parentElement.parentElement.cells[1].innerText.includes('admin')) {
        console.log('did i get here?')
        e.target.parentElement.parentElement.remove()
        message.setAttribute('class', "message is-success is-small")
        message.firstElementChild.innerText = 'Successfully deleted user.'
    }
    else {
        message.setAttribute('class', "message is-danger is-small")
        message.firstElementChild.innerText = 'Cannot delete admin users.'
    }
}
}

