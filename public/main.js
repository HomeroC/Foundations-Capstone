
const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const allAnimeBtn = document.getElementById("allAnime-btn")
const searchInput = document.getElementById("search-input")
const animeContainer = document.getElementById("anime-container")

const baseUrl = "https://api.jikan.moe/v4/anime"

//get all anime 
const getAllAnime = () => {
    axios
        .get(baseUrl)
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
    console.log(anime.image_url)

    let animeCard = document.createElement("div")
    animeCard.classList.add("anime-card")
    animeCard.innerHTML = `
    <img id="anime-img" src="${anime.image_url}" />
    <h1 id="anime-title">${anime.title}</h1>
    <p id="anime-syn">${anime.synopsis}</p>
    `
    animeContainer.appendChild(animeCard)
}

const handleSubmit = (e) => {
    e.preventDefault()
   
    axios
        .get(`${baseUrl}?search=${searchInput.value}`)
        .then(res => {
            let anime = res.data.data
            console.log(anime)
            displaySearch(anime)
        })
}


searchBtn.addEventListener('click', handleSubmit);
allAnimeBtn.addEventListener('click', getAllAnime);
