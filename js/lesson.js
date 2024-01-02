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

// const postData = (url = '', data = {}) => {
//     fetch(url, {
//         method: "POST",
//         headers: {"Content-type": "application.json"},
//         body: JSON.stringify(data)
//     })
// }


const converter =  ((element, targetElement, targetElementTwo ,current) => {
    element.oninput = async () => {
        const response = await fetch('../data/converter.json')
        const data = await response.json()
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

const getTodos = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>>
        <span>${data.id}</span>
    `
    } catch (e) {
        console.log(e.message)
    }
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
    getTodos()
})

btnPrev.addEventListener('click', () => {
    checkCount(count--)
    getTodos()
})

getTodos()


//FETCH RES

const asyncResponse = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await response.json()
        return console.log(data)
    }catch (e){
        console.log(<e className="me"></e>)
    }
}

asyncResponse()

// WEATHER

const cityNameInput = document.querySelector('.cityName')
const btnSearch  = document.querySelector('#btn-search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')


const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

// http://api.openweathermap.org/data/2.5/weather
// e417df62e04d3b1b111abeab19cea714

//Старый способ
// cityNameInput.addEventListener('input', (event) => {
//     fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => {
//             city.innerHTML = data.name ? data.name : 'Город не найден'
//             temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + "&deg;C" : ' '
//         })
// })

cityNameInput.addEventListener('input',  async (event) => {
    try {
        const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data.name ? data.name : 'Город не найден'
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + "&deg;C" : ' '
    }catch (e){
        console.log(e.message)
    }
})