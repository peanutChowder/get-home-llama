import { useState, useMemo } from "react"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox"
import "@reach/combobox/styles.css"
import { useLoadScript, Marker } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"

const libraries = ["places"]

const PlaceAutoComplete = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    if (!isLoaded) {
        return <div>Loading..</div>
    }
    return (
        <div>
            <PlacesAutocomplete />
        </div>

    )
}

const PlacesAutocomplete = () => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleAutocompleteTextChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <Combobox>
                <ComboboxInput
                    value={value}
                    onChange={handleAutocompleteTextChange}
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


export default PlaceAutoComplete