import APIManager from "./APIManager"
import Constants from "../utilities/Constants"

// Using fetch instead of APIManager (i.e.: axios) because a string was returned instead of an object. No idea why 🧐

const getNationalData = async () => {
    const response = await fetch(Constants.urls.NATIONAL);
    return await response.json();

    // const response = await APIManager.get(Constants.urls.NATIONAL);
    // console.log(response);
    // return response;
}

const getRegionalData = async () => {
    const response = await fetch(Constants.urls.REGIONAL);
    return await response.json();

    // const response = await APIManager.get(Constants.urls.REGIONAL);
    // console.log(response);
    // return response;
}

const getProvincialData = async () => {
    const response = await fetch(Constants.urls.PROVINCIAL);
    return await response.json();

    // const response = await APIManager.get(Constants.urls.PROVINCIAL);
    // console.log(response);
    // return response;
}

const getStatistics = async () => {
    const national = await getNationalData();
    const regional = await getRegionalData();
    const provincial = await getProvincialData();
    return {
        national,
        regional,
        provincial
    }
}

export default {
    getNationalData,
    getRegionalData,
    getProvincialData,
    getStatistics
}
