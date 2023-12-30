const mapRouter = require('express').Router()
const axios = require('axios')

const {Client} = require("@googlemaps/google-maps-services-js")
const client = new Client({})

mapRouter.get("/", async (request, response) => {
    return response.json("hi there")
})

module.exports = mapRouter