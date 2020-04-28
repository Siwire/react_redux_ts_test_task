import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import './App.css';
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import AppMenu from './components/menu/AppMenu'
import ArrayCats from './components/listcat/ViewListCat';
import AddNewCat from './components/addnewcat/AddNewCat';
import store from './redux/store';
import { fetchArrayCat } from './redux/arraycat/ArrayCat.Actions';

const CatsView = () => <Provider store={store}><ArrayCats /></Provider>
const ViewAddNewCat = () => <Provider store={store}><AddNewCat /></Provider>

function Main({ catsArray, fetchArrayCat }: {catsArray: any[], fetchArrayCat: any}) {
    useEffect(() => {
        if (!catsArray.length) {
            fetchArrayCat()
        }
    }, []);
    const classes = useStyles()
    return (
        <BrowserRouter>
            <div className={clsx('App', classes.root)}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <AppMenu />
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Switch>
                            <Route path="/listcat" exact component={CatsView} />
                            <Route path="/addcat" exact component={ViewAddNewCat} />
                        </Switch>
                    </Container>
                </main>
            </div>
        </BrowserRouter>
    )
}
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#999999',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const mapStateToProps = (state: any) => {
    return {
        catsArray: state.arraycat.cats
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchArrayCat: (): any => dispatch(fetchArrayCat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
