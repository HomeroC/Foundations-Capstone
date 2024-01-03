const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")

const baseUrl = "https://api.jikan.moe/v4/anime/"

//get all anime from api
const getAllAnime = () => {
    axios.get(baseUrl).then(res => {
        console.log(res.data)
    })
}

const handleSubmit = (e) => { 
    e.preventDefault()
    console.log("clicked")
    const search = searchInput.value
    axios.get(`${baseUrl}${search}`).then(res => {
        console.log(res.data)
    })
}


//add event listener to search button
form.addEventListener("click", handleSubmit)

getAllAnime()