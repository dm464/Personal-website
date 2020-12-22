import React from 'react';
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 500,
        margin: theme.spacing(2)
    },
    media: {
        height: 0,
        paddingTop: '56%',
    },
    link: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    },
}))

export default function ProjectCard({ title, image, desc, gitLink, link }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                title={title}
                image={image}
                className={classes.media}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <a target="_blank" rel="noreferrer" href={gitLink} className={classes.link}>
                        <GitHubIcon />
                    </a>
                </IconButton>
                <IconButton>
                    <a target="_blank" rel="noreferrer" href={link} className={classes.link}>
                        <OpenInNewIcon />
                    </a>
                </IconButton>
            </CardActions>
        </Card>
    );
}