import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">Real Data</Typography>
                        {/* Real Date to be fetched from the api as well */}
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">Real Data</Typography>
                        {/* Real Date to be fetched from the api as well */}
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of Recovered Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        {/* Real Data to be fetched from the api */}
                        <Typography variant="h5">Real Data</Typography>
                        {/* Real Date to be fetched from the api as well */}
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;