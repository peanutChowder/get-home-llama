const config = require('../utils/config')
const logger = require('../utils/logger')
const mapRouter = require('express').Router()
const axios = require('axios')

mapRouter.get('/', async (request, response) => {
    return response.json("Test")
})

mapRouter.get('/navigate', async (request, response) => {
    try {
        const content = await axios.post(
            'https://routes.googleapis.com/directions/v2:computeRoutes',
            {
                'origin': {
                    'location': {
                        'latLng': {
                            'latitude': request.query.origLat,
                            'longitude': request.query.origLong
                        }
                    }
                },
                'destination': {
                    'location': {
                        'latLng': {
                            'latitude': request.query.destLat,
                            'longitude': request.query.destLong
                        }
                    }
                },
                'travelMode': request.query.mode
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': config.API_KEY,
                    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline,routes.legs.polyline,routes.legs.steps.polyline'
                }
            }
        )
        return response.status(200).json(content.data)
    } catch (err) {
        console.log('Route polyline failed: ', err)
        return response.status(400).json(err)
    }
})

module.exports = mapRouter