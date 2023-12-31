import './App.css'

import { useState, useEffect } from 'react'
import { } from '@vis.gl/react-google-maps'

const App = () => {
  const [location, setLocation] = useState("")
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [google, setGoogle] = useState(null)

  useEffect(() => {
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring."):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      v: "weekly",
    });

  }, [])

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
    })
  }

  const handleContainsClick = async () => {
    await window.google.maps.importLibrary('maps')
    await window.google.maps.importLibrary('geometry')

    const points = window.google.maps.geometry.encoding.decodePath("mrxeIt~}sTFEvFBVKJMFYAqH~@mL^kDF}@?qc@CqD?cHLi@CuMKQ@}SBcJAg_@Bs]?e[")
    const polyline = new window.google.maps.Polyline({path: points})

    const newPoint = new window.google.maps.LatLng(53.54151, -113.52756)

    console.log(window.google.maps.geometry.poly.isLocationOnEdge(newPoint, polyline, 0.001));
  };

  const handleLatChange = (e) => {
    setLat(e.target.value)
  }

  const handleLongChange = (e) => {
    setLong(e.target.value)
  }

  return (
    <div>
      <div>
        <button onClick={handleLocationClick}>Get location</button>
        <p>Current location: {location}</p>
      </div>
      <div>
        <input type='number' onChange={handleLatChange}></input>
        <input type='number' onChange={handleLongChange}></input>
        <button onClick={handleContainsClick}>Within point?</button>
        <p>Decoded string: </p>
      </div>
    </div>
  )
}

export default App
