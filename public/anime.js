
let anime = JSON.parse(localStorage.getItem('anime'));
console.log(anime)

const animeContainer = document.querySelector("#anime-container");
const animeDetails = document.querySelector("#anime-details");
const main = document.querySelector("#main");

const baseUrl = "http://localhost:4004"

const displayAnime = () => {
    let title = anime.title;
    
    let animeCard = document.createElement("div");
    animeCard.classList.add("anime-card");

    let animeImage = document.createElement("img");
    animeImage.id = "anime-img";
    animeImage.src = anime.images.jpg.large_image_url;

    let animeTitle = document.createElement("h1");
    animeTitle.id = "anime-title";
    animeTitle.textContent = title;

    
    animeCard.appendChild(animeImage);
    animeCard.appendChild(animeTitle);
    
    animeContainer.appendChild(animeCard);

    //anime details separate from anime card
    let episodes = document.createElement("p");
    episodes.id = "episodes";
    episodes.textContent = `Episodes: ${anime.episodes}`;  

    let rating = document.createElement("p");
    rating.id = "rating";
    rating.textContent = `Rating ${anime.score}`;

    let description = document.createElement("p");
    description.id = "description";
    description.innerHTML = `Description: <br> <br> ${anime.synopsis}`

    animeDetails.appendChild(episodes);
    animeDetails.appendChild(rating);
    animeDetails.appendChild(description);

    //watchlist button
    let addBtn = document.createElement("button");
    addBtn.id = "add-btn";
    addBtn.textContent = "Add to Watchlist";
    addBtn.addEventListener("click", () => {
        localStorage.setItem("anime", JSON.stringify(anime));
        window.location.href = 'watchlist.html';
    })

    main.appendChild(addBtn);
 }


 displayAnime(anime)


