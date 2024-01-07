let anime = JSON.parse(localStorage.getItem('anime'));
console.log(anime)

const animeContainer = document.querySelector("#anime-container");
const animeDetails = document.querySelector("#anime-details");

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
    description.textContent = anime.synopsis

    animeDetails.appendChild(episodes);
    animeDetails.appendChild(rating);
    animeDetails.appendChild(description);
 }

 displayAnime(anime)


