import { FETCH_ARRAY_CAT_REQUEST, FETCH_ARRAY_CAT_SUCCESS, FETCH_DELETE_ITEM, FETCH_RETURN_ITEM } from "./ArrayTypes";
import axios from 'axios'

export const fetchArrayCatRequest = () => {
    return {
        type: FETCH_ARRAY_CAT_REQUEST
    }
}

const fetchArrayCatSuccess = (catsArray: any) => {
    return {
        type: FETCH_ARRAY_CAT_SUCCESS,
        payload: catsArray
    }
}

const fetchDeleteItem = (catId: number) => {
    return {
        type: FETCH_DELETE_ITEM,
        payload: catId
    }
}
const fetchReturnItem = (catId: number) => {
    return {
        type: FETCH_RETURN_ITEM,
        payload: catId
    }
}

export const fetchArrayCat = (): any => {
    return (dispatch: any) => {
        dispatch(fetchArrayCatRequest);
        axios.get('http://localhost:8000/tz20/list.json')
            .then(response => {
                const cats = response.data.data;
                dispatch(fetchArrayCatSuccess(cats))
            });
    }
}

export function deleteItemArray(catId: number) {
    return (dispatch: any) => {
        dispatch(fetchDeleteItem(catId));
    }
}
export function returnItemArray(catId: number) {
    return (dispath: any) => {
        dispath(fetchReturnItem(catId));
    }
}

