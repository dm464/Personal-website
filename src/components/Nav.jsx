import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        background: 'transparent',
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1,
        justifyContent: "space-between",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.nav}>
                <Toolbar className={classes.grow}>
                    <div></div>
                    <div>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Resume</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
