import { FETCH_ARRAY_CAT_REQUEST, FETCH_ARRAY_CAT_SUCCESS, FETCH_DELETE_ITEM, FETCH_RETURN_ITEM, ADD_NEW_CAT } from "./ArrayTypes"
import { CatInterface, CatInitialState } from '../../interfaces/catInterface';

const initialState: CatInitialState = {
    cats: [],
}

const reducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case FETCH_ARRAY_CAT_REQUEST:
            return {
                ...state,
            }
        case FETCH_ARRAY_CAT_SUCCESS:
            
            return {
                ...state,
                cats: action.payload,
            }
        case FETCH_DELETE_ITEM:
            const newCatsArray = [] as CatInterface[];
            state.cats.forEach((cat: CatInterface) => {
                newCatsArray.push({ ...cat })
            });
            const cat = newCatsArray.find((cat: CatInterface) => cat.id === action.payload);
            const catIndex = newCatsArray.findIndex((cat: CatInterface) => cat.id === action.payload);
            if (cat && catIndex !== -1) {
                newCatsArray.splice(catIndex, 1);
                newCatsArray.push({ ...cat, isDeleted: true, date: new Date() });
            }
            return {
                ...state,
                cats: newCatsArray
            }
        case FETCH_RETURN_ITEM:
            const newCatsArrayReturn = [] as CatInterface[];
            state.cats.forEach((cat: CatInterface) => {
                newCatsArrayReturn.push({ ...cat })
            });
            const catReturn = newCatsArrayReturn.find((cat: CatInterface) => cat.id === action.payload);
            const catReturnIndex = newCatsArrayReturn.findIndex((cat: CatInterface) => cat.id === action.payload);
            if (catReturn && catReturnIndex !== -1) {
                newCatsArrayReturn.splice(catReturnIndex, 1);
                newCatsArrayReturn.unshift({ ...catReturn, isDeleted: false, date: null });
            }
            return {
                ...state,
                cats: newCatsArrayReturn
            }
        case ADD_NEW_CAT:
            const newAddCatsArray = [] as CatInterface[];
            state.cats.forEach((cat: CatInterface) => {
                newAddCatsArray.push({ ...cat })
            });
            const getRandomIntInclusive = (min: number, max: number) => {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
              }
            const getId = (): number => {
                const newId = getRandomIntInclusive(1, 100);
                while (state.cats.find((cat: CatInterface) => cat.id === newId)) {
                    return getId();
                }
                return newId;
            }              
            const newCatId = getId()
            newAddCatsArray.unshift({ ...action.payload, id: newCatId, isDeleted: false, date: null, isCreated: true });
            
            return {
                ...state,
                cats: newAddCatsArray
            }
        default: return state
    }
}
export default reducer;