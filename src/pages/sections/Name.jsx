import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    pic: {
        height: 200,
        width: 200,
        margin: 20,
    },
    name: {
        textTransform: 'uppercase',
    },
}))

export default function Name() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} align="center">
                <Avatar 
                    className={classes.pic}
                />
                <Typography variant="h3" className={classes.name}>
                    Denisse Mendoza
                </Typography>
                <Typography variant="p">
                    Hi there! I am a Computer Science and Mathematics undergraduate student at New Jersey Institute of Technology
                </Typography>
            </Grid>
        </Grid>
    );
}