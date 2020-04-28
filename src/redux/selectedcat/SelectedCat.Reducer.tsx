import { FETCH_SELECTED_CAT_REQUEST, FETCH_SELECTED_CAT_SUCCESS, FETCH_SELECTED_NEW_CAT } from "./SelectedCat.Types"
import { SelectedCatInterface, SelectedCatInitialState } from '../../interfaces/catInterface';

const initialState: SelectedCatInitialState = {
    selectedCat: null,
}

const reducer = (state = initialState, action: { type: string, payload: SelectedCatInterface }) => {
    switch (action.type) {
        case FETCH_SELECTED_CAT_REQUEST:
            return {
                ...state,
            }
        case FETCH_SELECTED_CAT_SUCCESS:
            
            return {
                ...state,
                selectedCat: action.payload ? action.payload : {},
            }
        case FETCH_SELECTED_NEW_CAT:
            return {
                ...state, 
                selectedCat: action.payload ? action.payload : {},
            }
        default: return state
    }
}
export default reducer;