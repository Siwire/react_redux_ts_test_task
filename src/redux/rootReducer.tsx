import { combineReducers } from 'redux';
import ArrayCatReducer from './arraycat/ArrayCat.Reducer';
import SelectedCatReducer from './selectedcat/SelectedCat.Reducer'
import { CatInitialState, SelectedCatInitialState } from '../interfaces/catInterface';

export interface StateInterface {
    arraycat: CatInitialState;
    selectedcat: SelectedCatInitialState;
}

const rootReducer = combineReducers({
    arraycat: ArrayCatReducer,
    selectedcat: SelectedCatReducer,
});

export default rootReducer;