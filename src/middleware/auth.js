const jwt = require('jsonwebtoken')
const User = require('../model/user')
const { use } = require('../routes/user')

const auth = async (req,res,next) => {
    const token = req.header('Authorization').replace('Bearer ','')
    const decoded = jwt.verify(token, 'voidarif')
    const user = await User.findOne({_id:decoded._id})
    if(!user){
        throw new Error('Please, Authenticate')
    }
    req.user = user
    req.token = token
    next()
}


module.exports = auth