module.exports = {
   
    getAllAnime: (req, res) => {
        let anime = res.data.data
            
        for(let i = 0; i < anime.length; i++) {
            let animeTitle = document.createElement("h1")
            animeTitle.textContent = anime[i].title
            document.body.appendChild(animeTitle)
        }
        res.status(200).send(anime)
    },
    
    getAnimeById: (req, res) => {
        let anime = res.data.data

        for (let i = 0; i < anime.length; i++) { 
            if (anime[i].id === parseInt(req.params.id)) {
                res.status(200).send(anime[i])
            }
        }
    },
    

}