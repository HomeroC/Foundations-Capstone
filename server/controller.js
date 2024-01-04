module.exports = {
    //handler function for get request
    getAllAnime: (req, res) => {
        let anime = res.data.data
            
        for(let i = 0; i < anime.length; i++) {
            let animeTitle = document.createElement("h1")
            animeTitle.textContent = anime[i].title
            document.body.appendChild(animeTitle)
        }
        res.status(200).send(anime)
    },
    
    

}