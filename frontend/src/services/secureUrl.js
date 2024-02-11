import axios from "axios";
const baseUrl = 'http://localhost:3003//api/secureUrl'

const createNew = (uid, lastLocation, polyline) => {
    const locationData = {
        uid: uid,
        lastLocation: lastLocation,
        polyline: polyline,
    }
    axios.post(`${baseUrl}/newUrl`, locationData)
}

export default {
    createNew
}