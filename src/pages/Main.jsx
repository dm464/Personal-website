import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav.jsx';
import Name from './sections/Name';
import About from './sections/About';
import Portfolio from './sections/Portfolio';


const useStyles = makeStyles((theme) => ({
    contentContainer: {
        background: 'linear-gradient(to bottom right, #638F88, #D5E3E3)',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
    },
}))

export default function Main() {
    const classes = useStyles();
    return (
        <main className={classes.contentContainer}>
            <Nav />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Name />
                </Grid>
                <Grid item xs={12}>
                    <About />
                </Grid>
                <Grid item xs={12}>
                    <Portfolio />
                </Grid>

            </Grid>
        </main>

    );
}