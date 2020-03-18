import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Alert } from 'react-native';

export const getUserLocation = async () => {
    if (Platform.OS === 'android') {
        let granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted) {
            return await performGetUserLocation();
        } else {
            granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return await performGetUserLocation(location => Promise.resolve(location));
            } else {
                Alert.alert(strings.alertGeolocation);
            }
        }
    } else {
        return await performGetUserLocation();
    }
}

const performGetUserLocation = (errorHandler = error => { console.warn(error) }) => {
    return new Promise(resolve => Geolocation.getCurrentPosition(
        location => resolve(location.coords),
        errorHandler,
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    ))
}
