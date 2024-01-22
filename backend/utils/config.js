require("dotenv").config()

const PORT = process.env.PORT
const API_KEY = process.env.GOOGLE_MAPS_API_KEY
const MONGODB_SECUREURL_URI = process.env.MONGODB_SECUREURL_URI

module.exports = {
    PORT,
    API_KEY,
    MONGODB_SECUREURL_URI
}