import React from 'react';
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 600,
    },
}))

export default function ProjectCard({ title, image, desc, gitLink, link }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia>
                title={title}
                imageLink={image}
            </CardMedia>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <a target="_blank" href={gitLink}>
                        <GitHubIcon />
                    </a>
                </IconButton>
                <IconButton>
                    <a target="_blank" href={link}>
                        <OpenInNewIcon />
                    </a>
                </IconButton>
            </CardActions>
        </Card>
    );
}