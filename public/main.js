
const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const allAnimeBtn = document.getElementById("allAnime-btn")
const searchInput = document.getElementById("search-input")
const animeContainer = document.getElementById("anime-container")

const baseUrl = "https://api.jikan.moe/v4"

//get popular anime 
const getPopularAnime = () => {
    axios
        .get(`${baseUrl}/top/anime`)
        .then(res => {
            let anime = res.data.data
            console.log(anime)
            displayAllAnime(anime)

        })
}
//display all anime
const displayAllAnime = (anime) => {
    animeContainer.innerHTML = ""
    anime.forEach(anime => createAnimeCard(anime))
}


//display searched anime
const displaySearch = (anime) => { 
    animeContainer.innerHTML = ""
    anime.forEach(anime => createAnimeCard(anime))
}



//create anime card
const createAnimeCard = (anime) => {

    let animeCard = document.createElement("div")
    animeCard.classList.add("anime-card")
    animeCard.innerHTML = `
    <img id="anime-img" src="${anime.images.jpg.large_image_url}" />
    <h1 id="anime-title">${anime.title}</h1>
    
    `
    animeContainer.appendChild(animeCard)
}

const handleSubmit = (e) => {
    e.preventDefault()
   
    axios
        .get(`${baseUrl}/anime/?search=${searchInput.value}/full`)
        .then(res => {
            let anime = res.data.data
            console.log(anime)
            displaySearch(anime)
        })
}


searchBtn.addEventListener('click', handleSubmit);
allAnimeBtn.addEventListener('click', getPopularAnime);
