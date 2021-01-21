const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    }
})

const Actor = mongoose.model('actor', actorSchema)

module.exports = Actor