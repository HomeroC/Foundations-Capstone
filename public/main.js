const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
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
            displayAnime(anime)

        })
}

//display all anime
const displayAnime = (anime) => {
    animeContainer.innerHTML = ""
    anime.forEach(anime => {
        let animeTitle = document.createElement("h1")
        animeTitle.textContent = anime.title
        animeContainer.appendChild(animeTitle)
    })
}



getAllAnime()