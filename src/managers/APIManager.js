import VersionNumber from 'react-native-version-number';
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    request => {
        console.log(`[${request.method}] ${request.url}`, request.data);
        return request;
    }
);

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    console.warn(error);
});

axiosInstance.defaults.headers.common['User-Agent'] = `Divoc app ${VersionNumber.appVersion}`;

class APIManager {
    static async get(endPoint, params) {
        const response = await axiosInstance.get(endPoint, { params });
        return response.data;
    }

    static async post(endPoint, params) {
        const response = await axiosInstance.post(endPoint, params);
        return response.data;
    }

    static async put(endPoint, params) {
        const response = await axiosInstance.put(endPoint, params);
        return response.data;
    }

    static async delete(endPoint) {
        const response = await axiosInstance.delete(endPoint);
        return response.data;
    }
}

export default APIManager;