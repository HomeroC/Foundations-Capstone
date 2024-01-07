const express = require('express')
const cors = require('cors')
const { getPopularAnime,  searchAnimeByName, addToWatchlist } = require("./controller")

const app = express()
app.use(cors())
app.use(express.json())


app.get("/popular", getPopularAnime)
app.get("/search", searchAnimeByName)
app.post("/watchlist", addToWatchlist)

app.listen(4004, () => console.log("Server Running on 4004"))