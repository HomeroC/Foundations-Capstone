module.exports = {
    //get all anime from api
    getAllAnime: (req, res) => {
        const db = req.app.get("db")
        db.get_all_anime().then(anime => {
            res.status(200).send(anime)
        })
    },
    
    

}