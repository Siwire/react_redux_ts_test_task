import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CatPostFetch } from '../../redux/addnewcat/AddNewCat.Actions';
import TextField from '@material-ui/core/TextField';

function AddNewCat({ CatPostFetch }: { CatPostFetch: any }) {
    const useStyles = makeStyles(() => ({
        window: {
            backgroundColor: '#666666',
        },
        parametres: {
            margin: 30
        }
    }));

    const [addInfoCat, setAddInfoCat] = React.useState({
        name: '',
        shortInfo: '',
        bio: '',
    })
    const classes = useStyles();

    const handleChange = (event: any) => {
        setAddInfoCat({
            ...addInfoCat,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        CatPostFetch(addInfoCat);
    }

    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={0} direction="column" justify="center" className={classes.window}>
                    <Grid className={classes.parametres}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" name='name' placeholder='name' value={addInfoCat.name} onChange={handleChange} />
                    </Grid>
                    <Grid className={classes.parametres}>
                        <TextField id="outlined-basic" label="Short Info" variant="outlined" name='shortInfo' placeholder='shortInfo' value={addInfoCat.shortInfo} onChange={handleChange} />

                    </Grid>
                    <Grid className={classes.parametres}>
                        <TextField id="outlined-basic" label="Bio" variant="outlined" name='bio' placeholder='bio' value={addInfoCat.bio} onChange={handleChange} />
                    </Grid>
                    <Grid className={classes.parametres}>
                        <Button type='submit' variant="contained" >Add New Cat</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {

        CatPostFetch: (addInfoCat: any) => dispatch(CatPostFetch(addInfoCat)),
    }
}

export default connect(null, mapDispatchToProps)(AddNewCat);