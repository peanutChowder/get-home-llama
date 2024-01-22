const mongoose = require('mongoose')

const secureUrlSchema = new mongoose.Schema({
    url: String,
    uid: {type: String, unique: true},
    lastLocation: [Number],
    polyline: String
})

secureUrlSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("SecureUrl", secureUrlSchema)