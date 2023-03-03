// const axios = require("axios")

const axios = require("axios")

// const getCharById = (res, id)=> {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data =>{
//         let char ={
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species

//         }
//         res.writeHead(200,{'Content-type': 'application/json'}).end(JSON.stringify(char))
//     })
//     .catch(err => 
//         res.writeHead(500, {'Content-type': 'text/plain'}).end(`el personaje con id:${id} no fue encontrado`)
//         )
// }

// module.exports = getCharById

const url = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params
    axios(url + id).then(response => {
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender,

        }
         return res.status(200).json(character)
    }, (err) => {
        return res.status(400).json(err.message)
    })
    
 
 }
module.exports = {getCharById}


