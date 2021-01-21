const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/aaroza', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}, ()=> console.log('DB Connected....'))

module.exports = mongoose