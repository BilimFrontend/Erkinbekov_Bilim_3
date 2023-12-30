//Phone Checker

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector('.tab_content_items')
let current = 0;


const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const  showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')

}

const autoShowTab = () => {
    hideTabContent()
    current = (current + 1) % tabContentBlocks.length
    showTabContent(current)
}

hideTabContent()
setInterval(autoShowTab, 3000)
showTabContent()



tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab){
                current = tabIndex
                hideTabContent()
                showTabContent(current)
            }
        })
    }
}

// CONVERTER
const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector('#eur')

const converter = ((element, targetElement, targetElementTwo ,current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElementTwo.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElementTwo.value = (element.value * data.usd / data.eur ).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElementTwo.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
                default:
                    break
            }
        }
    }

})

converter(som, usd, eur, "som")
converter(usd, som, eur, "usd")
converter(eur, som, usd, "eur")

//DRY - don't repeat yourself


// CARD SWITCHER
const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')


let count = 1;


const fetchResponse = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>>
            <span>${data.id}</span>
            `
        })
}


const checkCount = (inc) => {
    if (count > 200){
        count = 1
    }else if(count < 1){
        count = 200
    }
    return inc
}

btnNext.addEventListener('click', () => {
    checkCount(count++)
    fetchResponse()
})

btnPrev.addEventListener('click', () => {
    checkCount(count--)
    fetchResponse()
})

fetchResponse()


//FETCH RES
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((data) => console.log(data))