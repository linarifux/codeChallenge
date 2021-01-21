const express = require('express')
const Actor = require('../model/actor')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/api/actors', async (req,res) => {
    try{
        const actors = await Actor.find({})
        if(actors.length === 0){
            return res.status(404).send('No actors found')
        }
        res.status(200).send(actors)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/api/actors', auth, async (req,res) => {
    try{
        const actor = new Actor(req.body)
        await actor.save()
        res.status(201).send(actor)
    }catch(e){
        res.status(400).send(e)
    }
})



module.exports = router