import Grid from '@material-ui/core/Grid';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const fetchCatPhoto = (pic: any ): string => {
    if (pic.isCreated) {
        return '../../../catPhoto.jpg'}
    else{
     return `https://www.mrsoft.by/tz20${pic.pic}`;
    }
}

export function GetCatPhoto({ pic }: { pic: any }) {
    const classes = useStyles();
    return (
        <Grid>
            <Avatar alt="Remy Sharp" src={fetchCatPhoto(pic)} className={classes.large} />
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
    }),
);
