const 
    comics = require('comics'),
    express = require('express'),
    router = express.Router()

module.exports = () =>{

    router.get('api/search', (req, res)=>{
        const{catergory = '', parameter = ''} = req.query
        comics.search(catergory, parameter)
            .then(result =>{
                res.json(result)
            })
    })

    router.get('api/movies',(req, res)=>{
        const{catergory = 'movies', parameter =''} = req.query
        comics.movies(parameter)
            .then(result =>{
                res.json(result)
            })

    })

    router.get('api/movieDetails',(req,res)=>{
        const {moveId=''} = req.qurery
        comics.fetchDetails(movieId)
            .then(result =>{
                res.json(result)
            })
    })

    router.get('api/characters',(req,res)=>{
        const{catagory ='character', parameter = ''} = req.query
        comics.characters(parameter)
            .then(result =>{
                res.json(result)
            })
    })

    router.get('api/characterDetails',(req,res)=>{
        const {characterId=''} = req.qurery
        comics.characterDetails(characterId)
            .then(result =>{
                res.json(result)
            })
    })
}