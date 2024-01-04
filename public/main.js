const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")

const baseUrl = "https://api.jikan.moe/v4/anime"

//get all anime 
const getAllAnime = () => {
    axios
        .get(baseUrl)
        .then(res => {
            let anime = res.data.data
            
            for(let i = 0; i < anime.length; i++) {
                let animeTitle = document.createElement("h1")
                animeTitle.textContent = anime[i].title
                document.body.appendChild(animeTitle)
            }
            console.log(anime)
    })
}
//handle submit
const handleSubmit = (e) => { 
    e.preventDefault()
    console.log("clicked")
    
    const search = searchInput.value
    axios
        .get(`${baseUrl}${search}`)
        .then(res => {
        console.log(res.data)
    })
}


//add event listener to submit form
form.addEventListener("click", handleSubmit)

getAllAnime()