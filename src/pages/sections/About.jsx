import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    name: {
        textTransform: 'uppercase',
    },
    info: {
        margin: theme.spacing(2),
        maxWidth: 500,
    },
}))

export default function About() {
    const classes = useStyles();
    const info = (title, content) => {
        return (
            <div className={classes.info}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </div>
        );
    };
    return (
        <Grid container>
            <Grid item xs={12} md={6} align="center">
                {info("Location", "Woodland Park, NJ")}
                {info("Education", "New Jersey Institute of Technology (NJIT), 2022")}
            </Grid>
            <Grid item xs={12} md={6} align="center">
                {info("Major", "B.S. in Computer Science & Mathematics")}
                {info("Interest", "I like to play guitar, learn new languages, and solve coding problems")}
            </Grid>
        </Grid>
    );
}