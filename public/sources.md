public anime api => https://jikan.moe/

 let anime = data.data
    const filteredAnime = anime.filter(a => a.title.toLowerCase().includes(searchInput.toLowerCase()));
    searchAnime(filteredAnime);