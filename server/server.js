const express = require('express')
const cors = require('cors')
const { getPopularAnime, getAnimeById } = require("./controller")

const app = express()
app.use(cors())
app.use(express.json())


app.get("https://api.jikan.moe/v4/top/anime", getPopularAnime)
app.get("https://api.jikan.moe/v4/anime/:id/full", getAnimeById)

app.listen(4004, () => console.log("Server Running on 4004"))