const express = require('express')
const DB = require('./src/db/db')
const actorRoute = require('./src/routes/actor')
const userRoute = require('./src/routes/user')
const movieRouter = require('./src/routes/movie')

const app = express()
const port = process.env.PORT || 4000


app.listen(port, ()=> console.log('Server started running on port: '+port))


// Middlewares
app.use(express.json())

// actor route
app.use(actorRoute)

// user route
app.use(userRoute)

// movie route
app.use(movieRouter)