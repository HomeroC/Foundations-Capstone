const express = require('express')
const cors = require('cors')
const { getAllAnime, getAnimeById } = require("./controller")

const app = express()
app.use(cors())
app.use(express.json())


app.get("https://api.jikan.moe/v4/anime", getAllAnime)
app.get("https://api.jikan.moe/v4/anime/:id/full", getAnimeById)

app.listen(4004, () => console.log("Server Running on 4004"))