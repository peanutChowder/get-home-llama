import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"

const Directions = () => {
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
            const response = await directionService.route({
                origin: "11830 Jasper Ave, Edmonton, AB T5K 0N7",
                destination: "9833 109 St NW, Edmonton, AB T5K 2E8",
                travelMode: window.google.maps.TravelMode.DRIVING
            })

            directionRenderer.setDirections(response)

            console.log(response.routes);
            
        }      
        getDirection()
        
        
    }, [directionRenderer, directionService])
    

    return null
}

export default Directions