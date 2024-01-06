
const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const allAnimeBtn = document.getElementById("allAnime-btn")
const searchInput = document.getElementById("search-input")
const animeContainer = document.getElementById("anime-container")

const baseUrl = "http://localhost:4004"

//get popular anime 
const getPopularAnime = () => {
    axios
        .get(`${baseUrl}/popular`)
        .then(res => {
            let anime = res.data
            console.log(anime)
            displayAllAnime(anime)

        })
}
//display all anime
const displayAllAnime = (anime) => {
    animeContainer.innerHTML = ""
    anime.forEach(anime => createAnimeCard(anime))
}


//create anime card
const createAnimeCard = (anime) => {

    let title = anime.title
    if (title.length > 15) {
        title = title.substring(0, 15) + "..."
        }
        
    let animeCard = document.createElement("div")
    animeCard.classList.add("anime-card")
    animeCard.innerHTML = `
    <img id="anime-img" src="${anime.images.jpg.large_image_url}" />
    <h1 id="anime-title">${title}</h1>
    
    `
    animeContainer.appendChild(animeCard)
}

const handleSubmit = (e) => {
    e.preventDefault()
   
    axios
        .get(`${baseUrl}/search?animeName=${searchInput.value}`)
        .then(res => {
            let anime = res.data
            console.log(anime)
            displayAllAnime(anime) 
        })
}


searchBtn.addEventListener('click', handleSubmit);
allAnimeBtn.addEventListener('click', getPopularAnime);
