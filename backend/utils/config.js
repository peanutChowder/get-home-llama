require("dotenv").config()

const PORT = process.env.PORT
const API_KEY = process.env.GOOGLE_MAPS_API_KEY

module.exports = {
    PORT,
    API_KEY
}