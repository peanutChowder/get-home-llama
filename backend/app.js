const config = require('./utils/config')
const express = require('express')
const app = express()

const mapRouter = require('./controllers/map')

app.use("/api/map", mapRouter)

module.exports = app