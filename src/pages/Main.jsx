import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../components/ProjectCard.jsx';
import Nav from '../components/Nav.jsx';
import Name from './sections/Name';


const useStyles = makeStyles(() => ({
    contentContainer: {
        background: 'linear-gradient(to bottom right, #638F88, #D5E3E3)',
        width: "100vw",
        height: "100vh"
    },
}))

export default function Main() {
    const classes = useStyles();
    return (
        <main className={classes.contentContainer}>
            <Nav />
            <Grid container>
                <Grid item xs={12}>
                    <Name />
                <ProjectCard
                    title="test"
                    image="test"
                    desc="This is just a test"
                />
                </Grid>
            </Grid>
        </main>

    );
}