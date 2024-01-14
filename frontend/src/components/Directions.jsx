import PropTypes from "prop-types"
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"

const Directions = ({origin, destination, show}) => {
    const map = useMap()
    const routesLib = useMapsLibrary('routes')
    const [directionService, setDirectionService] = useState()
    const [directionRenderer, setDirectionRenderer] = useState()

    useEffect(() => {
        if (!routesLib || !map) {return}
        
        setDirectionService(new routesLib.DirectionsService())
        setDirectionRenderer(new routesLib.DirectionsRenderer({map}))

    }, [routesLib, map])

    useEffect(() => {
        if (!directionRenderer || !directionService) {return}

        const getDirection = async () => {
            if (!show) {
                return
            }

            const response = await directionService.route({
                origin: `${origin.lat} ${origin.lng}`,
                destination: `${destination.lat} ${destination.lng}`,
                travelMode: window.google.maps.TravelMode.DRIVING
            })

            directionRenderer.setDirections(response)

            console.log(response.routes[0].overview_polyline);
            
        }      
        getDirection()
        
        
    }, [destination.lat, destination.lng, directionRenderer, directionService, origin.lat, origin.lng, show])
    

    return null
}

Directions.propTypes = {
    origin: PropTypes.object,
    destination: PropTypes.object,
    show: PropTypes.bool
}

export default Directions