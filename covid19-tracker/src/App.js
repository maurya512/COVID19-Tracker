import React from 'react';

// these components are coming from the index.js in the components folder
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    // aysnc await on componentDitMount to check whether the app is receiving any data from the fetchData function 
    async componentDidMount() {
        // making request to fetchData
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;