import React from 'react';

// these components are coming from the index.js in the components folder
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    // declaring the state like this also creates a constructor in the backend
    state = {
        data: {},
        country: '',
    }
    // aysnc await on componentDitMount to check whether the app is receiving any data from the fetchData function 
    async componentDidMount() {
        // making request to fetchData
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
    }

    // async function
    handleCountryChange = async (country) => {
        console.log(country);
        // fetch the data
        // set the state
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange }/>
                <Chart />
            </div>
        )
    }
}

export default App;