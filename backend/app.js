const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to db
mongoose.set("strictQuery", false)
mongoose.connect(config.MONGODB_SECUREURL_URI)
    .then(() => {
        logger.info("Connected to mongoDB")
    })
    .catch((error) => {
        logger.error("Error connecting to mongoDB", error.message)
    })

// use controllers
const mapRouter = require('./controllers/map')
const secureUrlRouter = require('./controllers/secureUrl')

app.use("/api/map", mapRouter)
app.use("/api/secureUrl", secureUrlRouter)

module.exports = app