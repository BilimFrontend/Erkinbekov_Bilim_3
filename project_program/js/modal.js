// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

const openModalScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (window.scrollY >= scrollableHeight) {
        openModal()
        window.removeEventListener('scroll', openModalScroll)
    }
}


window.addEventListener('scroll', openModalScroll)



modalTrigger.onclick = () => openModal()
// setInterval(openModal, 10000)
setTimeout(openModal, 10000)

modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
        closeModal()
}


//POST DATA

const form = document.querySelector('form')

const postData = (formElement) =>{
        formElement.addEventListener('submit', (event) => {
            event.preventDefault()

            const xhr = new XMLHttpRequest()
            xhr.open('POST', 'server.php')
            xhr.setRequestHeader('Content-type', 'application/json')

            const formData = new FormData(formElement)
            const obj = {}
            formData.forEach((item, index) => {
                obj[index] = item
            })

            const json = JSON.stringify(obj)

            xhr.send(json)

            closeModal()
        })
}

postData(form)


