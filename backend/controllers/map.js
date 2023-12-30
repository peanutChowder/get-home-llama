const mapRouter = require('express').Router()

mapRouter.get("/", async (req, res) => {
    return response.json("hi there")
})

module.exports = mapRouter