import { combineReducers } from "redux";
import {clothes} from './clothes'
import {filters} from './filters'

export const rootReducer = combineReducers({
    clothes, filters
});



export type RootState = ReturnType<typeof rootReducer>