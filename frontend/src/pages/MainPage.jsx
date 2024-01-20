import { useEffect, useState } from "react"

import HamburgerMenu from "../components/HamburgerMenu"
import GoogleMap from "../components/GoogleMap"
import AddressSubmit from "../components/AddressSubmit"

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
        <>
            <HamburgerMenu/>

            <div id="main-page-content">
                <GoogleMap
                    zoom={zoom}
                    currLocation={currLocation}
                    destination={destination}
                    showDirections={showDirections}
                />
                <AddressSubmit
                    setShowDirections={setShowDirections}
                    setDestination={setDestination}
                />
            </div>
        </>

    )
}

export default MainPage