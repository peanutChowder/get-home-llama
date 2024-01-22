const logger = require('../utils/logger')
const secureUrlRouter = require('express').Router()
const SecureUrl = require('../models/secureUrl')

secureUrlRouter.get('/', async (request, response) => {
    return response.json("secureUrl test")
})

secureUrlRouter.post("/newUrl", async (request, response) => {
    // TODO: replace values 
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

module.exports = secureUrlRouter