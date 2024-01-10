
const form = document.getElementById("form-container")
const searchBtn = document.getElementById("search-btn")
const allAnimeBtn = document.getElementById("allAnime-btn")
const searchInput = document.getElementById("search-input")
const animeContainer = document.getElementById("anime-container")
const greeting = document.getElementById("greeting")
const intro = document.getElementById("intro")
const buttonContainer = document.getElementById("button-container")

const baseUrl = "http://localhost:4004"

//get popular anime 
const getPopularAnime = () => {
    axios
        .get(`${baseUrl}/popular`,
            {
                params: {
                    page: currentPage,
                }
            
            })
        .then(res => {
            let anime = res.data
            console.log(anime)
            displayAllAnime(anime)

        })
}
//display all anime
const displayAllAnime = (anime) => {
    animeContainer.innerHTML = ""
    greeting.innerHTML = ""
    intro.innerHTML = ""
    nextPageButton.style.display = "block";
    prevPageButton.style.display = "block";

    anime.forEach(anime => createAnimeCard(anime))
}


//create anime card
const createAnimeCard = (anime) => {
    let title = anime.title;
    if (title.length > 15) {
        title = title.substring(0, 15) + "...";
    }

    let animeCard = document.createElement("div");
    animeCard.classList.add("anime-card");

    let animeImage = document.createElement("img");
    animeImage.id = "anime-img";
    animeImage.src = anime.images.jpg.large_image_url;
    animeImage.addEventListener("click", () => {
        localStorage.setItem("anime", JSON.stringify(anime));
        window.location.href = 'anime.html';
    });
    

    let animeTitle = document.createElement("h1");
    animeTitle.id = "anime-title";
    animeTitle.textContent = title;


    animeCard.appendChild(animeImage);
    animeCard.appendChild(animeTitle);


    animeContainer.appendChild(animeCard);
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

let currentPage = 1

const getNextPage = () => {
    currentPage++;
    axios
        .get(`${baseUrl}/next`, {
            params: {
                page: currentPage
            }
        })
        .then(res => {
            let anime = res.data
            console.log(anime)
            displayAllAnime(anime)
        })
}

const getPreviousPage = () => {
    if (currentPage > 1) {
        currentPage--;
        axios
            .get(`${baseUrl}/previous`, {
                params: {
                    page: currentPage
                }
            })
            .then(res => {
                let anime = res.data
                console.log(anime)
                displayAllAnime(anime)
            })
    }
}


 
 // next page button
let nextPageButton = document.createElement("button");
nextPageButton.textContent = "Next Page";
nextPageButton.id = "next-btn";
nextPageButton.addEventListener("click", getNextPage);

    // previos page button
let prevPageButton = document.createElement("button");
prevPageButton.textContent = "Previous Page";
prevPageButton.id = "prev-btn";
prevPageButton.addEventListener("click", getPreviousPage);

// Add the buttons to the page
buttonContainer.appendChild(prevPageButton);
buttonContainer.appendChild(nextPageButton);

nextPageButton.style.display = "none";
prevPageButton.style.display = "none";

searchBtn.addEventListener('click', handleSubmit);
allAnimeBtn.addEventListener('click', getPopularAnime);
allAnimeBtn.addEventListener('click', loadButtons)