const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 5.0    
    },
    actors: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'actor'
    }]
})



const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie