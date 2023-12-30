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

const postData = (url = '', data = {}) => {
    fetch(url, {
        method: "POST",
        headers: {"Content-type": "application.json"},
        body: JSON.stringify(data)
    })
}

const bindPostData = (formElement) => {
        formElement.onsubmit = (event) => {
            event.preventDefault()
            const formData = new FormData(formElement)
            const userInfo = {}
            formData.forEach((item, index) => {
                userInfo[index] = item
        })
            if (window.location.pathname === '/project/index.html'){
                postData('server.php', userInfo)
            }else{
                postData('../server.php', userInfo)
            }
    }
}

bindPostData(form)

console.log(window.location.pathname)

// const postData = (formElement) =>{
//         formElement.addEventListener('submit', (event) => {
//             event.preventDefault()
//
//             const xhr = new XMLHttpRequest()
//             xhr.open('POST', 'server.php')
//             xhr.setRequestHeader('Content-type', 'application/json')
//
//             const formData = new FormData(formElement)
//             const obj = {}
//             formData.forEach((item, index) => {
//                 obj[index] = item
//             })
//
//             const json = JSON.stringify(obj)
//
//             xhr.send(json)
//
//             closeModal()
//         })
// }
//
// postData(form)


