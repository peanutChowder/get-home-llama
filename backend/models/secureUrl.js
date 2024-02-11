const mongoose = require('mongoose')

const secureUrlSchema = new mongoose.Schema({
    url: {type: String, unique: true, required: true},
    uid: {type: String, required: true},
    lastLocation: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    polyline: {type: String, required: true}
})

secureUrlSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("SecureUrl", secureUrlSchema)