import './App.css'

import { useState } from 'react'

function App() {
  const [location, setLocation] = useState("")

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleLocationClick}>Get location</button>
        <p>Current location: {location}</p>
      </div>
    </div>
  )
}

export default App
