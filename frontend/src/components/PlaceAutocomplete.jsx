import PropTypes from "prop-types"
import { useState, useMemo } from "react"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox"
import "@reach/combobox/styles.css"
import { useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"

const libraries = ["places"]

const PlaceAutoComplete = ({ setShowDirections, setDestination }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    if (!isLoaded) {
        return <div>Loading..</div>
    }
    return (
        <div>
            <PlacesAutocomplete 
                setShowDirections={setShowDirections}
                setDestination={setDestination}
            />
        </div>

    )
}

const PlacesAutocomplete = ({ setShowDirections, setDestination }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        const res = await getGeocode({ address })
        const {lat, lng} = await getLatLng(res[0])
        
        setDestination({
            lat: lat,
            lng: lng
        })

        setShowDirections(true)
        
    }

    return (
        <div>
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleChange}
                    disabled={!ready}
                    placeholder="address here"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}


PlaceAutoComplete.propTypes = {
    setDestination: PropTypes.func.isRequired,
    setShowDirections: PropTypes.func.isRequired
}

export default PlaceAutoComplete