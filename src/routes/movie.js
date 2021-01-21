const express = require('express')
const auth = require('../middleware/auth')
const Movie = require('../model/movie')

const router = express.Router()


// creating a movie
router.post('/api/movies', auth, async (req,res) => {
    try{
        const movie = new Movie(req.body)
        await movie.save()
        res.status(201).send(movie)
    }catch(e){
        res.status(400).send(e)
    }
})

// returning all movies
router.get('/api/movies', auth, async (req,res) => {
    try{
        const movies = await Movie.find({}).populate('actors', {_id:0,__v:0})
        if(movies.length === 0){
            return res.status(404).send('No movies found')
        }
        res.status(200).send(movies)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router