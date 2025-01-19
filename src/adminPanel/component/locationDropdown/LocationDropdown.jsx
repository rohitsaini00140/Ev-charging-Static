import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'
import { useRef } from 'react'
import { inputStyle } from '../inputStyle'
import { TextField } from '@mui/material'
import { setAddress } from '../../../globalState/googleMap/googleMapSlices'
import { useDispatch } from 'react-redux'
import "../../component/locationDropdown/locationDropdown.css"

const libraries = ["places"]

function LocationDropdown({ onChange, value, label }) {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCyMrVtiLgr0ywJWHQClgUgtgunWZMlopQ",
        libraries
    })

    const handleOnPlacesChanged = () => {
        const address = inputRef.current.getPlaces()
        const lat = address[0]?.geometry?.location?.lat()
        const lng = address[0]?.geometry?.location?.lng()
        const inputAddress = address[0]?.formatted_address
        console.log(address[0])

        // Update the value and address
        onChange(inputAddress)
        dispatch(setAddress({ lat, lng }))
    }

    // Handle manual input change
    const handleInputChange = (e) => {
        const inputAddress = e.target.value
        onChange(inputAddress)

        if (!inputAddress) {
            // If the input is cleared, dispatch an empty address to Redux
            dispatch(setAddress({ lat: null, lng: null }))
        }
    }

    return (
        isLoaded && (
            <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handleOnPlacesChanged}
                options={{
                    componentRestrictions: { country: ['IN'] }
                }}
            >
                <TextField
                    label={label}
                    sx={inputStyle}
                    value={value}  // Controlled input value
                    onChange={handleInputChange}  // Allow manual input
                    fullWidth
                />
            </StandaloneSearchBox>
        )
    )
}

export default LocationDropdown;