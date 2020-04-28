import axios from 'axios'
import { FETCH_SELECTED_CAT_REQUEST, FETCH_SELECTED_CAT_SUCCESS, FETCH_SELECTED_NEW_CAT } from "./SelectedCat.Types";
import { SelectedCatInterface, CatInterface } from '../../interfaces/catInterface';

export const fetchSelectedCatRequest = () => {
    return {
        type: FETCH_SELECTED_CAT_REQUEST
    }
}

const fetchSelectedCatSuccess = (selectedCat: SelectedCatInterface) => {
    return {
        type: FETCH_SELECTED_CAT_SUCCESS,
        payload: selectedCat
    }
}
export const fetchSelectedCat = (catInfo: CatInterface): any => {
    return (dispatch: any) => {
        dispatch(fetchSelectedCatRequest);
        
        axios.get(`http://localhost:8000/tz20${catInfo.more}`)
            .then(response => {
                const selectedCat = response.data;
                dispatch(fetchSelectedCatSuccess({ ...selectedCat, ...catInfo }))
            });
    }
}

const fetchSelectedNewCatSuccess = (selectedNewCat: CatInterface) => {
    return {
        type: FETCH_SELECTED_NEW_CAT,
        payload: selectedNewCat
    }
}

export const fetchSelectedNewCat = (catInfo: CatInterface): any => {
    return (dispatch: any) => {
        dispatch(fetchSelectedNewCatSuccess(catInfo));
    }
}

