import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// a dependency to count up to give us a real world timer
import CountUp from 'react-countup';
import styles from './Cards.module.css';

// destructure "data" and then destructure further
const Cards = ({data: { confirmed, recovered, deaths, lastUpdate} }) => {
    console.log(confirmed);
    if(!confirmed) {
        return "Loading.....";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=','
                        />
                        </Typography>
                        {/* Real Date to be fetched from the api as well */}
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=','
                            />
                        </Typography>
                        {/* Real Date to be fetched from the api as well */}
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=','
                            />
                        </Typography>
                        {/* Real Date to be fetched from the api as well */}
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;