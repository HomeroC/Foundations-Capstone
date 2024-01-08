let anime = JSON.parse(localStorage.getItem("anime"));

const watchlistContainer = document.querySelector("#watchlist-container");

//add anime to watchlist
const addToWatchlist = () => { 
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(anime);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

const displayWatchlist = () => {
    // get watchlist from localStorage
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    watchlistContainer.innerHTML = '';

    // Display each anime in the watchlist
    for (let anime of watchlist) {
        let title = anime.title;
        if (title.length > 15) {
            title = title.substring(0, 15) + "...";
        }

        let animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        let animeImage = document.createElement("img");
        animeImage.id = "anime-img";
        animeImage.src = anime.images.jpg.large_image_url;

        let animeTitle = document.createElement("h1");
        animeTitle.id = "anime-title";
        animeTitle.textContent = title;

        let deleteBtn = document.createElement("button");
        deleteBtn.id = "delete-btn";
        deleteBtn.textContent = "Remove from Watchlist";
        deleteBtn.addEventListener("click", () => removeFromWatchlist(anime));

        animeCard.appendChild(animeImage);
        animeCard.appendChild(animeTitle);
        animeCard.appendChild(deleteBtn);

        watchlistContainer.appendChild(animeCard);
    }
}

// remove anime from watchlist
const removeFromWatchlist = (anime) => {
    // get watchlist from localStorage
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    let index = watchlist.findIndex(item => item.title === anime.title);

    if (index !== -1) {
        watchlist.splice(index, 1);
    }
    // Store the updated watchlist in localStorage
    localStorage.setItem('watchlist', JSON.stringify(watchlist));

    // Update the watchlist display
    displayWatchlist();
}

addToWatchlist(anime)
displayWatchlist(anime)
