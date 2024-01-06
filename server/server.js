const express = require('express')
const cors = require('cors')
const { getPopularAnime,  searchAnimeByName } = require("./controller")

const app = express()
app.use(cors())
app.use(express.json())


app.get("/popular", getPopularAnime)
app.get("/search", searchAnimeByName )

app.listen(4004, () => console.log("Server Running on 4004"))