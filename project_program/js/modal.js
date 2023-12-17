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
    //Скролл до конца страницы
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (window.scrollY >= scrollableHeight) {
        openModal()
        document.removeEventListener('scroll', openModalScroll)
    }
}


document.addEventListener('scroll', openModalScroll)



modalTrigger.onclick = () => openModal()
setInterval(openModal, 10000)

modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
        closeModal()
}


