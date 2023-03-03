const {Router} = require("express")
const {getCharById} = require("../controllers/getCharbyId") 
const {getCharDetail} = require("../controllers/getCharDetail") 
const favs = require("../utils/favs")
const router = Router()

router.get("/onsearch/:id", getCharById)
router.get("/detail/:detailId", getCharDetail)
router.post("/create", (req, res) => {
 favs.push({...req.body})
 res.status(200).send('Personaje agragado a fav')

})
router.get("/get", (req, res)=>{
    return res.status(200).json(favs)
})
router.delete("/delete/:id", (req, res)=> {
    const {id} = req.params

    favs = favs.filter(char => char.id !== Number(id))

    return res.status(200).json(favs)
})
module.exports = router