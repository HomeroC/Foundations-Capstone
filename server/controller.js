const axios = require("axios")
const baseUrl = "https://api.jikan.moe/v4"

let currentPage = 1
const itemsPerPage = 25

module.exports = {
   
    getPopularAnime: (request, response) => {
        axios
            .get(`${baseUrl}/top/anime`, {
                params: {
                    page: currentPage,
                    limit: itemsPerPage
                }
            
        })
        .then(res => {
            let anime = res.data.data
            response.status(200).send(anime)
            // currentPage++
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
            .post(`${baseUrl}/anime`, { anime })
            .then(res => {
                response.status(200).send(res.data)
            })

    }

}