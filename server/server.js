const express = require('express')
const cors = require('cors')
const { getAllAnime } = require("./controller")

const app = express()
app.use(express.json())
app.use(cors())


app.get("https://api.jikan.moe/v4/anime/", getAllAnime)

app.listen(4004, () => console.log("Server Running on 4004"))