const axios = require("axios")
const baseUrl = "https://api.jikan.moe/v4"

module.exports = {
   
    getPopularAnime: (request, response) => {
        axios
        .get(`${baseUrl}/top/anime`)
        .then(res => {
            let anime = res.data.data
            
            response.status(200).send(anime)

        })
    },
    
    searchAnimeByName: (request, response) => {
        let { animeName } = request.query
        console.log(animeName)
        axios
        .get(`${baseUrl}/anime?q=${animeName}`)
        .then(res => {
            let anime = res.data.data
            
            response.status(200).send(anime)
        })
    },

    addToWatchlist: (request, response) => {
        let { anime } = request.body 
        axios
            .get(`${baseUrl}/anime?q=${anime}`)
            .then(res => {
                let anime = res.data.data
                
                response.status(200).send(anime)
            })
    },


}