const mapRouter = require('express').Router()

mapRouter.get("/", async (request, response) => {
    return response.json("hi there")
})

module.exports = mapRouter