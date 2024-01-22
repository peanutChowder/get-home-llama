const logger = require('../utils/logger')
const generateRandString = require('../utils/generateRandom')
const secureUrlRouter = require('express').Router()
const SecureUrl = require('../models/secureUrl')

secureUrlRouter.get('/', async (request, response) => {
    return response.json("secureUrl test")
})

secureUrlRouter.post("/", async (request, response) => {
    // TODO: replace values 
    console.log(request.body.ooer)
    
    const test = {
        url: "google.com",
        uid: "abdgf213",
        lastLocation: [1, 2, 3],
        polyline: "abdsad123"
    }
    const testSecureUrl = new SecureUrl(test)

    result = await testSecureUrl.save()
    response.status(201).json(result)
})

secureUrlRouter.get('/all', async (request, response) => {
    results = await SecureUrl.find({}, "url")
    response.status(200).json(results)
})

module.exports = secureUrlRouter