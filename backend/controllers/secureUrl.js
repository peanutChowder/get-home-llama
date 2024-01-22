const logger = require('../utils/logger')
const generateRandString = require('../utils/generateRandom')
const secureUrlRouter = require('express').Router()
const SecureUrl = require('../models/secureUrl')

secureUrlRouter.get('/', async (request, response) => {
    return response.json("secureUrl test")
})

secureUrlRouter.post("/", async (request, response) => {
    const newUrl = await generateRandString()

    try {
        const secureUrl = new SecureUrl({
            url: newUrl,
            uid: request.body.uid,
            lastLocation: request.body.lastLocation,
            polyline: request.body.polyline
        })
        result = await secureUrl.save()
        response.status(201).json(result)
        
    } catch (err) {
        logger.error(err)
        response.status(400)
    }
})

secureUrlRouter.get('/all', async (request, response) => {
    results = await SecureUrl.find({}, "url")
    response.status(200).json(results)
})

module.exports = secureUrlRouter