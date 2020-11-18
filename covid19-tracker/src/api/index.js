// in this file we create some functions that will fetch some data that we need
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

// async await function
// try and catch block
// try is gonna be executed if the fetch is successful
export const fetchData = async (country) => {
    let changableUrl = url;

    // if a valid country is selected from the list then the data for that country will be populated
    if(country) {
        changableUrl = `${url}/countries/${country}`
    }
    try {
        // data 
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);

        const modifiedData = { 
            confirmed,
            recovered,
            deaths,
            lastUpdate,

        }
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
    }
    ))
    return modifiedData;
    } catch (error) {
        
    }
}
export const fetchCountries = async() => {
    try {
        const { data: {countries }} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}