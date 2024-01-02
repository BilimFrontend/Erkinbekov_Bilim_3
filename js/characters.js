const characters_card = document.querySelector('.characters-card');
const photo = 'https://opis-cdn.tinkoffjournal.ru/mercury/main-witcher.vuttak..jpg'
const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=20')
        const data = await response.json()
        data.forEach((character) => {
            const character_item = document.createElement('div')
            character_item.setAttribute('class', 'character-item')
            character_item.innerHTML = `
                <div class="character-photo">
                    <img src="${photo}" alt="">
                </div>
                <p class="name-character">${character.title}</p>
                <p class="desc-character">${character.body}</p>
            `
            characters_card.append(character_item)
        })
    }catch (e){
        console.log(e.message)
    }
}

getPosts()

// cityNameInput.addEventListener('input',  async (event) => {
//     try {
//         const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
//         const data = await response.json()
//         city.innerHTML = data.name ? data.name : 'Город не найден'
//         temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + "&deg;C" : ' '
//     }catch (e){
//         console.log(e.message)
//     }
// })