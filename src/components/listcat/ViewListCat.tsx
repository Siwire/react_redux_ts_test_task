import React from 'react';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { GetCatPhoto } from './CatPhoto'
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles, createStyles} from '@material-ui/core/styles';

import { deleteItemArray, returnItemArray } from '../../redux/arraycat/ArrayCat.Actions';
import { fetchSelectedCat, fetchSelectedNewCat } from '../../redux/selectedcat/SelectedCat.Actions'

import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import { CatInterface, SelectedCatInterface } from '../../interfaces/catInterface';
import { StateInterface } from '../../redux/rootReducer';

function ArrayCats({ catsArray, selectedCat, fetchSelectedCat, deleteCat, returnCat, fetchSelectedNewCat }: { catsArray: any, selectedCat: any, fetchSelectedCat: any, deleteCat: any, returnCat: any, fetchSelectedNewCat: any }) {
    const onItemClick = (catInfo: CatInterface): void => {
        catInfo.isCreated ? fetchSelectedNewCat(catInfo) : fetchSelectedCat(catInfo);
    }
    const getFormatedDate = (dateToFormat: Date): string => {
        let day = (dateToFormat.getDate() < 10) ? ('0' + dateToFormat.getDate()) : dateToFormat.getDate();
        let month = ((+dateToFormat.getMonth() + 1) < 10) ? ('0' + +(dateToFormat.getMonth() + 1)) : (+dateToFormat.getMonth() + 1);
        let hour = (dateToFormat.getHours() < 10) ? ('0' + dateToFormat.getHours()) : dateToFormat.getHours();
        let minute = (dateToFormat.getMinutes() < 10) ? ('0' + dateToFormat.getMinutes()) : dateToFormat.getMinutes();

        return `Deleted at ${day}.${month}.${dateToFormat.getFullYear()} @ ${hour}:${minute}`
    }

    const classes = useStyles();
    return (
        <Grid container direction="row">
            <Grid item xs={3} className={classes.list}>
                <List>
                    {catsArray && catsArray.map((cat: CatInterface) => (
                        <Grid key={cat.id} container justify="space-between">
                            <Grid item xs={10}>
                                <ListItem button={true} disabled={cat.isDeleted} onClick={(e) => onItemClick({ ...cat })}>
                                    <Grid item >
                                        <Grid>
                                            {cat.name}
                                        </Grid>
                                        <Grid>
                                            {cat.isDeleted ? <label htmlFor=""></label> : <label  >{cat.shortInfo}</label>}
                                            {cat.isDeleted && cat.date ? <label >{getFormatedDate(cat.date)}</label> : <label htmlFor=""></label>}
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </Grid>
                            <Grid item xs={2}>
                                {cat.isDeleted ?
                                    <IconButton edge="end" aria-label="delete" onClick={() => returnCat(cat.id)}>
                                        <RefreshIcon />
                                    </IconButton> :
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteCat(cat.id)}>
                                        <DeleteIcon />
                                    </IconButton>}
                            </Grid>
                        </Grid>
                    ))}
                </List>
            </Grid>
            {selectedCat && selectedCat.id
                ? <Grid item xs={8} className={classes.catinfo}>
                    <Grid container direction='row' justify="space-between">
                        <Grid >
                            <Typography variant='h3' gutterBottom className={classes.text}>
                                {selectedCat.name}
                            </Typography>
                            <Grid >
                                <Typography variant='h5' gutterBottom className={classes.text}>
                                    {selectedCat.shortInfo}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <GetCatPhoto pic={selectedCat} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography variant='subtitle1' gutterBottom className={classes.text}>
                            {selectedCat.bio}
                        </Typography>
                    </Grid>

                </Grid>
                : <div></div>
            }

        </Grid>
    )
}
const mapStateToProps = (state: StateInterface) => {
    return {
        catsArray: state.arraycat.cats,
        selectedCat: state.selectedcat.selectedCat
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchSelectedCat: (catInfo: CatInterface): void => dispatch(fetchSelectedCat(catInfo)),
        deleteCat: (catId: number): void => dispatch(deleteItemArray(catId)),
        returnCat: (catId: number): void => dispatch(returnItemArray(catId)),
        fetchSelectedNewCat: (catInfo: CatInterface): void => dispatch(fetchSelectedNewCat(catInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrayCats);

const useStyles = makeStyles(() =>
    createStyles({
        text: {
            textAlign: 'left'
        },
        catinfo: {
            marginLeft: '20px'
        },
        list: {
            backgroundColor: '#777777',
            maxHeight: '91vh',
            overflowX: 'hidden',
            overflowY: 'auto',
        }
    }),
);