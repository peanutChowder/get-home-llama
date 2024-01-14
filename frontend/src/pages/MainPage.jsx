import { useEffect, useState } from "react"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

import HamburgerMenu from "../components/HamburgerMenu"
import Directions from "../components/Directions"
import PlaceAutoComplete from "../components/PlaceAutocomplete"

import './MainPage.css'

const MainPage = () => {
    const [currLocation, setCurrLocation] = useState({lat: 0, lng: 0})
    const [destination, setDestination] = useState({lat: 0, lng: 0})
    const [showDirections, setShowDirections] = useState(false)
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        })

        if (currLocation.lat != 0 && currLocation.lon != 0) {
            setZoom(14)
        }
    }, [currLocation])

    return (
        <div>
            <HamburgerMenu/>

            <div id="main-page-content">
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <div className="map-container">
                        <Map zoom={zoom} center={currLocation}>
                            <Marker position={currLocation}/>
                            <Directions
                                origin={currLocation}
                                destination={destination}
                                show={showDirections}
                            />
                        </Map>       
                    </div>
                </APIProvider>
                <PlaceAutoComplete
                    setShowDirections={setShowDirections}
                    setDestination={setDestination}
                />
            </div>
        </div>

    )
}

export default MainPage