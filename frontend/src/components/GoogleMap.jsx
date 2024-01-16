import PropTypes from "prop-types"
import Directions from "./Directions"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

import "./GoogleMap.css"

const GoogleMap = ({ zoom, currLocation, destination, showDirections}) => {
    return (
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
    )
}

GoogleMap.propTypes = {
    zoom: PropTypes.number.isRequired,
    currLocation: PropTypes.object.isRequired,
    destination: PropTypes.object.isRequired,
    showDirections: PropTypes.bool.isRequired
}

export default GoogleMap