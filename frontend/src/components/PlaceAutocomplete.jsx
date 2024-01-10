import { useState } from "react"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"

const PlaceAutoComplete = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })
    const { 
        ready, 
        value, 
        setValue, 
        suggestions: {status, data}, 
        clearSuggestions
    } = usePlacesAutocomplete()

    return (
        <div>
            <Combobox>
                <ComboboxInput/>
            </Combobox>
        </div>
    )
}