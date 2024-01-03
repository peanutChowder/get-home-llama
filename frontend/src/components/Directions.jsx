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
        setDirectionRenderer(new routesLib.DirectionsRenderer(map))

    }, [routesLib, map])
}

export default Directions