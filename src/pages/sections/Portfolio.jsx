import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProjectCard from '../../components/ProjectCard';
import Chataway from '../../assets/img/Chataway.JPG';
import CDS from '../../assets/img/CDS.JPG';

const useStyles = makeStyles((theme) => ({
}))

export default function Portfolio() {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} align="center">
                <ProjectCard
                    title="Chataway"
                    image={Chataway}
                    desc="A public chat room application"
                    gitLink="https://github.com/dm464/Chataway-Chat-App"
                    link="http://chataway-app.herokuapp.com/"
                />
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <ProjectCard
                    title="Commercial Distribution Solutions"
                    image={CDS}
                    desc="A web-based ditribution management system"
                    gitLink="https://github.com/Zoraiz-Naeem/Distribution-Systems-v2"
                    link="https://commercial-distribution-soln-2.herokuapp.com/"
                />
            </Grid>
            
        </Grid>
    );
}