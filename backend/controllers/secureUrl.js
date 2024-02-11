const logger = require('../utils/logger')
const generateRandString = require('../utils/generateRandom')
const secureUrlRouter = require('express').Router()
const SecureUrl = require('../models/secureUrl')

secureUrlRouter.get('/', async (request, response) => {
    return response.json("secureUrl test")
})

secureUrlRouter.post("/newUrl", async (request, response) => {
    const newUrl = await generateRandString()

    if (!(request.body.uid && request.body.lastLocation && request.body.polyline)) {
        response.status(400).json({error: "Must provide uid, lastLocation, and polyline"})
        return
    }
    if (await SecureUrl.findOne({url: newUrl})) {
        response.status(500).json({error: "Url already exists, try again"})
        return
    }

    const secureUrl = new SecureUrl({
        url: newUrl,
        uid: request.body.uid,
        lastLocation: request.body.lastLocation,
        polyline: request.body.polyline
    })

    try {
        result = await secureUrl.save()
        response.status(201).json(result)
        
    } catch (err) {
        logger.error(err)
        response.status(500)
        return
    }
})

secureUrlRouter.get('/allUrls', async (request, response) => {
    results = await SecureUrl.find({}, "url")
    response.status(200).json(results)
})

module.exports = secureUrlRouter