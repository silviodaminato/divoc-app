import APIManager from "./APIManager"
import Constants from "../utilities/Constants"

const reverseGeocode = async (latitude, longitude) => {
    const response = await APIManager.get(Constants.urls.REVERSE_GEOCODING_URL, { lat: latitude, lon: longitude, format: 'json' });
    console.log(response);
    return response;
}

export default {
    reverseGeocode
}