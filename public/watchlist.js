let anime = JSON.parse(localStorage.getItem("anime"));

const watchlistContainer = document.querySelector("#watchlist-container");

const displayWatchlist = () => {
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
    
    watchlistContainer.appendChild(animeCard);
}

displayWatchlist(anime)