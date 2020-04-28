import { ADD_NEW_CAT} from '../arraycat/ArrayTypes';

const fetchAddItem = (addInfoCat: any) => {
    return {
        type: ADD_NEW_CAT,
        payload: addInfoCat
    }
}
export const CatPostFetch= (addInfoCat: any) => {
    return (dispatch: any) => {
        dispatch(fetchAddItem(addInfoCat))
    }
}
