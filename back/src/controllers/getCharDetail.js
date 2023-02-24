const axios = require('axios')

const getCharDetail = (res, id)=> {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data =>{
        let char ={
            name: data.name,
            status: data.status,
            gender: data.gender,
            image: data.image,
            species: data.species,
            origin: data.origin.name,

        }
        res.writeHead(200,{'Content-type': 'application/json'}).end(JSON.stringify(char))
    })
    .catch(err => 
        res.writeHead(500, {'Content-type': 'text/plain'}).end(`el personaje con id:${id} no fue encontrado`)
        )
}

module.exports = getCharDetail