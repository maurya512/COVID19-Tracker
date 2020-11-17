// in this file we create some functions that will fetch some data that we need
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

// async await function
// try and catch block
// try is gonna be executed if the fetch is successful
export const fetchData = async () => {
    try {
        // data 
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

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