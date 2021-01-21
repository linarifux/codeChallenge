const e = require('express')
const express = require('express')
const User = require('../model/user')

const router = express.Router()


// creating an user
router.post('/api/user/signup', async (req,res) => {
    try{
        const user = new User(req.body)
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({token})
    }catch(e){
        res.status(400).send(e)
    }
})


// user login
router.post('/api/user/login', async (req,res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user){
            return res.status(404).send()
        }
        const pass = req.body.password
        if(!user.password === pass){
            return res.status(400).send()
        }
        const token = await user.generateAuthToken()
        user.token = token
        await user.save()
        res.status(200).send({token})
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router